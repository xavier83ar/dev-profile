import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

/**
 * A multi-page build rather than a single-page app with a router.
 *
 * Two real HTML entry points means clean URLs on GitHub Pages with no
 * SPA-fallback trick, and — usefully — the PDF pipeline points at `index.html`
 * and gets the profile alone. Excluding the portfolio from the CV is structural
 * rather than a print rule that can rot.
 *
 * `base` is "/" because the site is served from the custom domain
 * https://javiermelero.com.ar/ at its root. GitHub Pages serves only from the
 * custom domain once one is configured — https://xavier83ar.github.io/dev-profile/
 * 301-redirects to it — so there is no second base path to support.
 *
 * If the custom domain is ever removed, this must go back to "/dev-profile/",
 * and so must BASE in scripts/generate-pdf.mjs.
 */
export default defineConfig({
  base: "/",
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        projects: fileURLToPath(new URL("./projects/index.html", import.meta.url)),
      },
    },
  },
});
