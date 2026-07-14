'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function LoginForm({ locale }: { locale: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.ok) {
        toast.success('تم تسجيل الدخول بنجاح');
        router.push(`/${locale}/dashboard`);
      } else {
        toast.error('بيانات الدخول غير صحيحة');
      }
    } catch (error) {
      toast.error('حدث خطأ ما');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">كلمة المرور</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-tunisia-red text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
      >
        {loading ? 'جاري الدخول...' : 'دخول'}
      </button>
      <p className="text-center text-sm">
        ليس لديك حساب؟{' '}
        <Link href={`/${locale}/register`} className="text-tunisia-red font-semibold hover:underline">
          سجل الآن
        </Link>
      </p>
    </form>
  );
}
