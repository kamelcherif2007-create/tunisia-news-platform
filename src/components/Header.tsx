'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { languages } from '@/config/languages';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = pathname.split('/')[1] as string;

  return (
    <header className="bg-gradient-to-r from-tunisia-red to-red-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="text-2xl font-bold">
            📰 تونس
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href={`/${currentLocale}`} className="hover:opacity-80 transition">
              {t('common.home')}
            </Link>
            <Link href={`/${currentLocale}/news`} className="hover:opacity-80 transition">
              {t('common.news')}
            </Link>
            <Link href={`/${currentLocale}/categories`} className="hover:opacity-80 transition">
              {t('common.categories')}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex gap-4 items-center">
            {/* Search */}
            <button className="hidden md:flex items-center bg-white bg-opacity-20 px-3 py-2 rounded-lg hover:bg-opacity-30 transition">
              <FiSearch className="text-white" />
            </button>

            {/* Language Switcher */}
            <select
              value={currentLocale}
              onChange={(e) => {
                const newLocale = e.target.value;
                window.location.href = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
              }}
              className="bg-white text-tunisia-red px-3 py-2 rounded font-semibold cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link
              href={`/${currentLocale}`}
              className="block py-2 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              {t('common.home')}
            </Link>
            <Link
              href={`/${currentLocale}/news`}
              className="block py-2 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              {t('common.news')}
            </Link>
            <Link
              href={`/${currentLocale}/categories`}
              className="block py-2 hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              {t('common.categories')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
