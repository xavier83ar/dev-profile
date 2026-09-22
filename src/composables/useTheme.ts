import { onMounted, ref } from "vue";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Light/dark preference, remembered per visitor.
 *
 * Storage is wrapped because it throws in private browsing and when site data
 * is blocked. Losing the preference is acceptable; breaking the toggle is not.
 */
export function useTheme() {
  const theme = ref<Theme>("light");
  const ready = ref(false);

  function apply(next: Theme) {
    document.documentElement.setAttribute("data-theme", next);
  }

  onMounted(() => {
    ready.value = true;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Blocked storage — fall through to the system preference.
    }

    if (stored === "light" || stored === "dark") {
      theme.value = stored;
      apply(stored);
      return;
    }

    theme.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  function toggle() {
    const next: Theme = theme.value === "dark" ? "light" : "dark";
    theme.value = next;
    apply(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not remembering the choice is not worth breaking the toggle over.
    }
  }

  return { theme, ready, toggle };
}
