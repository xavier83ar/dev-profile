import { computed, onMounted } from "vue";
import { DEFAULT_LOCALE, isLocale, locale, LOCALES, setLocale, type Locale } from "@/i18n";

const STORAGE_KEY = "locale";
/** `?lang=es` picks the language for a link — and for the Spanish CV render. */
const QUERY_PARAM = "lang";

const ORDER = Object.keys(LOCALES) as Locale[];

/**
 * The visitor's language, remembered like the theme.
 *
 * The prerendered HTML is English, so the stored choice is applied only after
 * mount: switching earlier would make hydration see text the server did not
 * render. Storage is wrapped for the same reasons as in useTheme. The title
 * and description follow the language through useDocumentHead.
 */
export function useLocale() {
  const next = computed(() => ORDER[(ORDER.indexOf(locale.value) + 1) % ORDER.length]);

  function remember(value: Locale) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Not remembering the choice is not worth breaking the switch over.
    }
  }

  async function change(value: Locale) {
    await setLocale(value);
    document.documentElement.lang = value;
  }

  onMounted(async () => {
    const requested = new URLSearchParams(window.location.search).get(QUERY_PARAM);
    if (isLocale(requested)) {
      remember(requested);
      await change(requested);
      return;
    }

    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Blocked storage — stay on the default.
    }
    if (isLocale(stored) && stored !== DEFAULT_LOCALE) await change(stored);
  });

  async function toggle() {
    const value = next.value;
    remember(value);
    await change(value);
  }

  return { locale, next, toggle };
}
