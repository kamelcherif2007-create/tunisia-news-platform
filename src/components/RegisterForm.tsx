'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function RegisterForm({ locale }: { locale: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('كلمات المرور غير متطابقة');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        toast.success('تم إنشاء الحساب بنجاح');
        router.push(`/${locale}/login`);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'حدث خطأ ما');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">الاسم</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">كلمة المرور</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">تأكيد كلمة المرور</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-tunisia-red text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
      >
        {loading ? 'جاري التسجيل...' : 'تسجيل'}
      </button>
      <p className="text-center text-sm">
        هل لديك حساب بالفعل؟{' '}
        <Link href={`/${locale}/login`} className="text-tunisia-red font-semibold hover:underline">
          دخول
        </Link>
      </p>
    </form>
  );
}
