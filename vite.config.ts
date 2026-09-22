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
 * `base` must match the repository name, since the site is served from
 * https://xavier83ar.github.io/dev-profile/.
 */
export default defineConfig({
  base: "/dev-profile/",
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
