'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { categories } from '@/config/categories';

export default function SubmitNewsPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: 'agriculture',
    image: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/news', formData);
      if (response.status === 201) {
        toast.success('تم إضافة الخبر بنجاح!');
        setFormData({
          title: '',
          description: '',
          content: '',
          category: 'agriculture',
          image: '',
        });
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'حدث خطأ ما');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">إضافة خبر جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">العنوان</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">القسم</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.id}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">الوصف</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">المحتوى</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">رابط الصورة</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-tunisia-red"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-tunisia-red text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? 'جاري الإضافة...' : 'إضافة الخبر'}
        </button>
      </form>
    </div>
  );
}
