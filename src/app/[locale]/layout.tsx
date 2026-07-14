import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocale } from '@/lib/getLocale';

export const metadata: Metadata = {
  title: 'منصة أخبار تونس',
  description: 'كل ما تحتاج معرفته عن تونس من الفلاحة إلى السياسة',
};

export function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'fr' },
    { locale: 'en' },
    { locale: 'it' },
    { locale: 'de' },
    { locale: 'es' },
  ];
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const isValidLocale = getLocale(locale);

  if (!isValidLocale) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
