import { create } from 'zustand';

/**
 * Global language store using Zustand.
 * Eliminates full page reloads when switching languages.
 * Components consume `useLang()` to get current language.
 */
const useLanguageStore = create((set) => ({
  lang: 'es', // default
  setLang: (lang) => set({ lang }),
}));

/** Convenience hook — returns just the current language string */
export const useLang = () => useLanguageStore((s) => s.lang);

/** Convenience hook — returns the setter */
export const useSetLang = () => useLanguageStore((s) => s.setLang);

export default useLanguageStore;
