import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2 text-center">دخول</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              سجل دخولك لمتابعة الأخبار والمساهمة
            </p>
            <LoginForm locale={params.locale} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
