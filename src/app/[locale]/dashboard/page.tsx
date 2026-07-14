export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm">إجمالي الأخبار</p>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">12</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm">الأخبار المنشورة</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">8</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm">قيد المراجعة</p>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">4</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">أحدث الأنشطة</h2>
        <p className="text-gray-500">لا توجد أنشطة حالياً</p>
      </div>
    </div>
  );
}
