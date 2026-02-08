# دليل نشر موقع صيانة السيارات الأوروبية

هذا الموقع مبني باستخدام إطار عمل **Next.js** ويستخدم تقنيات **Genkit** للذكاء الاصطناعي.

## خيارات النشر (Deployment Options)

### 1. الخيار الموصى به: Firebase App Hosting
بما أنك تستخدم أدوات Firebase، فإن هذا الخيار هو الأنسب:
- اذهب إلى [Firebase Console](https://console.firebase.google.com/).
- اختر "App Hosting" من القائمة الجانبية.
- اربط حسابك بـ GitHub واختر المستودع الخاص بك.
- سيتولى Firebase عملية البناء والنشر تلقائياً بناءً على ملف `apphosting.yaml`.

### 2. النشر على Namecheap
**ملاحظة هامة:** الاستضافة المشتركة (Shared Hosting) في Namecheap غالباً لا تدعم هذا النوع من المواقع. تحتاج إلى خادم **VPS** بنظام Linux.

**الخطوات على خادم VPS:**
1. قم بتثبيت Node.js (إصدار 18 أو أحدث).
2. ارفع ملفات المشروع إلى الخادم.
3. قم بإنشاء ملف `.env` وأضف فيه مفتاح API الخاص بالذكاء الاصطناعي:
   ```
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```
4. نفذ الأوامر التالية في مجلد المشروع:
   ```bash
   npm install
   npm run build
   npm start
   ```
5. استخدم مدير عمليات مثل `pm2` لضمان استمرار عمل الموقع:
   ```bash
   npm install -g pm2
   pm2 start npm --name "car-maintenance" -- start
   ```

### 3. خيار Vercel (الأسهل)
- ارفع الكود إلى GitHub.
- اربط حساب GitHub بـ [Vercel](https://vercel.com/).
- سيتم النشر بضغطة زر واحدة.

## ملاحظة حول الذكاء الاصطناعي
تأكد دائماً من إضافة `GOOGLE_GENAI_API_KEY` في إعدادات البيئة (Environment Variables) في أي منصة تختارها لكي تعمل الشروحات والصور التلقائية.