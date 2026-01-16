import { useLanguage } from "./useLanguage";
import { TEXT } from "./i18nText";

export function useText(key) {
  const lang = useLanguage();
  return TEXT[key]?.[lang] || TEXT[key]?.en || "";
}
