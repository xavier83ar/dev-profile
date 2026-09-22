/**
 * Render the built profile page to a print-ready CV PDF.
 *
 *   npm run pdf
 *
 * Serves `dist/`, drives headless Chrome over the profile page, and writes the
 * result to both `dist/cv.pdf` (so it deploys with this build) and
 * `public/cv.pdf` (so it is committed and survives a plain `vite build`).
 *
 * Chrome's own print pipeline is used deliberately: it emits real, selectable
 * text, which is what an applicant tracking system parses. Client-side PDF
 * libraries rasterise the DOM, producing an image of a CV that most parsers
 * read as an empty document.
 *
 * Only the profile page is rendered. The projects page lives at its own URL and
 * is therefore excluded structurally, rather than by a print rule that can rot.
 */

import { createServer } from "node:http";
import { readFile, copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../dist/", import.meta.url));
const DIST_PDF = resolve(ROOT, "cv.pdf");
const PUBLIC_PDF = fileURLToPath(new URL("../public/cv.pdf", import.meta.url));
const PORT = Number(process.env.PDF_PORT ?? 4319);

/** Must match `base` in vite.config.ts. */
const BASE = "/";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "google-chrome",
  "google-chrome-stable",
  "chromium",
  "chromium-browser",
  "microsoft-edge",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

async function ensureBuilt() {
  try {
    await access(join(ROOT, "index.html"), constants.R_OK);
  } catch {
    console.error("No build found in dist/. Run `npm run build` first.");
    process.exit(1);
  }
}

function serve() {
  const server = createServer(async (req, res) => {
    let requested = decodeURIComponent((req.url ?? "/").split("?")[0]);

    // The build is written for BASE, so strip that prefix when serving locally.
    if (requested.startsWith(BASE)) requested = requested.slice(BASE.length - 1);

    let path = normalize(join(ROOT, requested));
    if (!path.startsWith(ROOT)) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    if (requested.endsWith("/")) path = join(path, "index.html");

    try {
      const body = await readFile(path);
      res.writeHead(200, {
        "content-type": MIME[extname(path)] ?? "application/octet-stream",
      });
      res.end(body);
    } catch {
      res.writeHead(404).end("Not found");
    }
  });

  return new Promise((ok, fail) => {
    server.once("error", fail);
    server.listen(PORT, "127.0.0.1", () => ok(server));
  });
}

function findChrome() {
  return new Promise((ok) => {
    const next = (i) => {
      if (i >= CHROME_CANDIDATES.length) return ok(null);
      const probe = spawn(CHROME_CANDIDATES[i], ["--version"], { stdio: "ignore" });
      probe.on("error", () => next(i + 1));
      probe.on("exit", (code) => (code === 0 ? ok(CHROME_CANDIDATES[i]) : next(i + 1)));
    };
    next(0);
  });
}

function print(chrome) {
  return new Promise((ok, fail) => {
    const child = spawn(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        // The page pulls Inter and DM Sans from Google Fonts. Without a virtual
        // time budget Chrome can print before they arrive, silently falling
        // back to the system face — the PDF looks fine in isolation, and wrong
        // next to the site. This gives the fetch room without hanging the run.
        "--virtual-time-budget=15000",
        "--run-all-compositor-stages-before-draw",
        `--print-to-pdf=${DIST_PDF}`,
        `http://127.0.0.1:${PORT}${BASE}`,
      ],
      { stdio: ["ignore", "ignore", "inherit"] },
    );
    child.on("error", fail);
    child.on("exit", (code) =>
      code === 0 ? ok() : fail(new Error(`Chrome exited with code ${code}`)),
    );
  });
}

await ensureBuilt();

const chrome = await findChrome();
if (!chrome) {
  console.error(
    "No Chrome or Chromium found. Install one, or set CHROME_PATH to its binary.",
  );
  process.exit(1);
}

const server = await serve();
try {
  await print(chrome);
  await copyFile(DIST_PDF, PUBLIC_PDF);
  console.log("\n✓ cv.pdf written to dist/ and public/");
  console.log("  Verify what a parser sees:  npm run pdf:verify");
} finally {
  server.close();
}
