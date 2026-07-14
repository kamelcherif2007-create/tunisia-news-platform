export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">لوحة الإدارة</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">إجمالي الأخبار</p>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">45</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">إجمالي المستخدمين</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">128</p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">قيد الانتظار</p>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">12</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">إجمالي المشاهدات</p>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">5.2K</p>
        </div>
      </div>
    </div>
  );
}
