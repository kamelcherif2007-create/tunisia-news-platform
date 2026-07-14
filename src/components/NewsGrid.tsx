'use client';

import { News } from '@/types';
import NewsCard from './NewsCard';

interface NewsGridProps {
  news: News[];
  locale: string;
}

export default function NewsGrid({ news, locale }: NewsGridProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">أحدث الأخبار</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item._id} news={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
