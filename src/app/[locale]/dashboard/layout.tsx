'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FiEdit2, FiFileText, FiSettings, FiLogOut } from 'react-icons/fi';
import { signOut } from 'next-auth/react';

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>;
  }

  if (status === 'unauthenticated') {
    redirect(`/${params.locale}/login`);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <aside className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 h-fit">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">مرحباً</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{session?.user?.email}</p>
              </div>

              <nav className="space-y-2">
                <Link
                  href={`/${params.locale}/dashboard`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition"
                >
                  <FiFileText /> لوحة التحكم
                </Link>
                <Link
                  href={`/${params.locale}/dashboard/submit-news`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition"
                >
                  <FiEdit2 /> إضافة خبر
                </Link>
                <Link
                  href={`/${params.locale}/dashboard/my-news`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition"
                >
                  <FiFileText /> أخباري
                </Link>
                <Link
                  href={`/${params.locale}/dashboard/settings`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition"
                >
                  <FiSettings /> الإعدادات
                </Link>
              </nav>

              <button
                onClick={() => signOut({ redirect: false })}
                className="w-full mt-6 flex items-center justify-center gap-2 p-3 rounded-lg bg-tunisia-red text-white hover:bg-red-700 transition"
              >
                <FiLogOut /> خروج
              </button>
            </aside>

            {/* Main Content */}
            <div className="md:col-span-3 bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
