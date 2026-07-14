'use client';

import { News } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';

interface NewsCardProps {
  news: News;
  locale: string;
}

export default function NewsCard({ news, locale }: NewsCardProps) {
  return (
    <Link href={`/${locale}/news/${news._id}`}>
      <article className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer">
        {/* Image */}
        {news.image && (
          <div className="relative h-48 bg-gray-200">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          {/* Category Badge */}
          <span className="inline-block bg-tunisia-red text-white text-xs font-semibold px-2 py-1 rounded mb-2">
            {news.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
            {news.description}
          </p>

          {/* AI Summary */}
          {news.aiSummary && (
            <p className="text-sm bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-2 rounded mb-3 line-clamp-2">
              🤖 {news.aiSummary}
            </p>
          )}

          {/* Footer */}
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>
              {formatDistanceToNow(new Date(news.createdAt), {
                addSuffix: true,
                locale: locale === 'ar' ? ar : undefined,
              })}
            </span>
            <div className="flex gap-2">
              <span>👁️ {news.views}</span>
              <span>❤️ {news.likes}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
