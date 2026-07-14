# 📰 منصة أخبار تونس - Tunisia News Platform

## 🌍 نظرة عامة | Overview

منصة إخبارية شاملة ومتقدمة عن تونس، مدعومة بالذكاء الاصطناعي ونظام مساهمين متكامل.

A comprehensive and advanced news platform about Tunisia, powered by AI and an integrated contributor system.

## 🌐 اللغات المدعومة | Supported Languages (6 Languages)
- 🇹🇳 العربية (Arabic)
- 🇫🇷 الفرنسية (Français)
- 🇬🇧 الإنجليزية (English)
- 🇮🇹 الإيطالية (Italiano)
- 🇩🇪 الألمانية (Deutsch)
- 🇪🇸 الإسبانية (Español)

## 📚 الأقسام الرئيسية (8 Categories)
1. 🌾 الفلاحة والزراعة | Agriculture
2. ✈️ السياحة | Tourism
3. 🎭 الثقافة والفنون | Culture & Arts
4. 🏛️ التراث الثقافي | Cultural Heritage
5. 🏛️ السياسة | Politics
6. 💼 الاقتصاد | Economy
7. ⚽ الرياضة | Sports
8. 💻 التكنولوجيا | Technology

## ✨ المميزات الرئيسية | Key Features

### 🤖 نظام الذكاء الاصطناعي (AI System)
- تلخيص تلقائي للأخبار
- تصنيف ذكي للمحتوى
- توصيات مخصصة
- كشف الكلمات المفتاحية
- تحليل المشاعر
- ترجمة تلقائية

### 👥 نظام المساهمين (Contributor System)
- التسجيل والمصادقة الآمنة
- إضافة أخبار جديدة
- نظام التحقق والموافقة
- لوحة تحكم المساهمين
- نظام التقييمات والمكافآت

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: NextAuth.js
- **AI**: OpenAI API
- **Internationalization**: next-intl
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Media**: Cloudinary

## 📦 التثبيت | Installation

```bash
# استنساخ
git clone https://github.com/kamelcherif2007-create/tunisia-news-platform.git
cd tunisia-news-platform

# تثبيت
npm install

# إعداد البيئة
cp .env.example .env.local

# تشغيل
npm run dev

# سيكون متاحاً على:
# http://localhost:3000
```

## 📝 المتغيرات المطلوبة | Environment Variables

```env
# Database
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/tunisia-news

# AI
OPENAI_API_KEY=sk-...

# Auth
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Media
CLOUDINARY_NAME=your-name
CLOUDINARY_KEY=your-key
CLOUDINARY_SECRET=your-secret
```

## 📄 الترخيص | License

MIT License - جميع الحقوق محفوظة © 2024

---

**تم إنشاؤه بـ ❤️ من أجل تونس**
