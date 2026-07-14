import type { Config } from 'next-intl/config';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './src/i18n/routing';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./src/messages/${locale}.json`)).default,
}));
