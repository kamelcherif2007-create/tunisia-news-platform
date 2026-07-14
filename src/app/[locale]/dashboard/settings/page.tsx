export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">الإعدادات</h1>
      <div className="space-y-6">
        <div className="pb-6 border-b">
          <h2 className="text-xl font-bold mb-4">معلومات الح��اب</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">الاسم</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" defaultValue="محمد" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">البريد الإلكتروني</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" defaultValue="user@example.com" />
            </div>
          </div>
        </div>

        <div className="pb-6 border-b">
          <h2 className="text-xl font-bold mb-4">الإشعارات</h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span>تلقي إشعارات البريد الإلكتروني</span>
          </label>
        </div>

        <button className="bg-tunisia-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
          حفظ التغييرات
        </button>
      </div>
    </div>
  );
}
