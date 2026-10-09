import { onMounted, watchEffect } from "vue";

/**
 * Keeps the page title and meta description in the active language.
 *
 * The HTML entry points carry the English text, for crawlers and the first
 * paint. Once mounted, this takes over: `head` is written with `__()`, so the
 * effect re-runs whenever the language changes.
 */
export function useDocumentHead(head: () => { title: string; description: string }) {
  onMounted(() => {
    watchEffect(() => {
      const { title, description } = head();
      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    });
  });
}
