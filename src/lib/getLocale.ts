export function getLocale(locale: string) {
  const validLocales = ['ar', 'fr', 'en', 'it', 'de', 'es'];
  return validLocales.includes(locale) ? locale : 'ar';
}
