'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="bg-gradient-to-r from-tunisia-red via-red-600 to-tunisia-green text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          منصة أخبار تونس الشاملة
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 opacity-90"
        >
          كل ما تحتاج معرفته عن تونس من الفلاحة إلى السياسة
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-tunisia-red px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition"
        >
          اكتشف الأخبار
        </motion.button>
      </div>
    </section>
  );
}
