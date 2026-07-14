'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <aside className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 h-fit">
              <h2 className="text-xl font-bold mb-6">لوحة الإدارة</h2>
              <nav className="space-y-2">
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600">
                  📊 الإحصائيات
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600">
                  📰 الأخبار
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600">
                  👥 المستخدمون
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600">
                  💬 التعليقات
                </a>
              </nav>
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
