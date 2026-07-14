'use client';

import { categories } from '@/config/categories';
import Link from 'next/link';

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">الأقسام الرئيسية</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href={`#${cat.id}`}>
              <div className={`${cat.color} p-4 rounded-lg text-white text-center hover:shadow-lg hover:scale-105 transition cursor-pointer`}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-sm font-semibold capitalize line-clamp-2">{cat.id}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
