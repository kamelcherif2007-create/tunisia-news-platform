'use client';

import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">📰 منصة أخبار تونس</h3>
            <p className="text-gray-400 text-sm">
              كل ما تحتاج معرفته عن تونس من الفلاحة إلى السياسة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition">
                  عن الموقع
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">الأقسام</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition">
                  الفلاحة
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  السياحة
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الثقافة
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2024 منصة أخبار تونس الشاملة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
