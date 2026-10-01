/**
 * Pre-render the built pages to static HTML.
 *
 *   node scripts/render-static.mjs   (run after `vite build`)
 *
 * The site has no backend and no per-visitor data, so there is no reason to
 * ship an empty `<div id="app">` and make every visitor (and every crawler)
 * run JS before seeing content. This renders each page's Vue component to a
 * string with `vue/server-renderer` and writes it into the div that `vite
 * build` already produced, so `dist/*.html` is readable without JS and the
 * client bundle then hydrates it instead of mounting from scratch.
 *
 * Uses Vite's own dev-server module loader (`ssrLoadModule`) rather than a
 * separate SSR build step: these are plain data-driven components with no
 * router, so there is nothing an SSR bundle step would buy beyond what
 * on-the-fly transform already gives us.
 */

import { createServer } from "vite";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const pages = [
  { entry: "/src/ProfilePage.vue", dist: "dist/index.html" },
  { entry: "/src/ProjectsPage.vue", dist: "dist/projects/index.html" },
];

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  for (const page of pages) {
    const mod = await vite.ssrLoadModule(page.entry);
    const app = createSSRApp(mod.default);
    const appHtml = await renderToString(app);

    const htmlPath = fileURLToPath(new URL(`../${page.dist}`, import.meta.url));
    const template = await readFile(htmlPath, "utf-8");

    if (!template.includes('<div id="app"></div>')) {
      throw new Error(`${page.dist}: expected an empty <div id="app"></div> to render into`);
    }

    const rendered = template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`);
    await writeFile(htmlPath, rendered, "utf-8");
    console.log(`Prerendered ${page.dist}`);
  }
} finally {
  await vite.close();
}
