import React from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const phoneNumber = "0565219735";
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full bg-white border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-accent rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-primary tracking-tight">ورشة متنقلة للسيارات</h1>
          </Link>
          <Link href="/" className="text-primary font-semibold hover:text-accent">
            العودة للرئيسية
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4 text-center">سياسة الخصوصية</h1>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-12" />

          <div className="prose prose-lg max-w-none text-right rtl space-y-6 text-muted-foreground">
            <p>
              آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
            </p>
            <p>
              نحن في "ورشة متنقلة للسيارات" ("نحن"، "الخاص بنا"، أو "الورشة") نلتزم بحماية خصوصية زوار موقعنا وعملائنا. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا الإلكتروني أو خدماتنا.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">1. المعلومات التي نجمعها</h2>
            <p>
              قد نجمع معلومات شخصية تقدمها لنا طواعية عند تواصلك معنا لطلب خدمة أو للاستفسار. هذه المعلومات قد تشمل:
            </p>
            <ul>
              <li>الاسم</li>
              <li>رقم الهاتف</li>
              <li>موقعك (لتقديم الخدمة المتنقلة)</li>
              <li>معلومات عن سيارتك (النوع، الموديل، طبيعة المشكلة)</li>
            </ul>
            <p>
              كما قد نجمع معلومات غير شخصية تلقائيًا عند زيارتك لموقعنا، مثل عنوان IP الخاص بك، نوع المتصفح، والصفحات التي قمت بزيارتها، وذلك لأغراض تحليلية وتحسين تجربة المستخدم.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">2. كيف نستخدم معلوماتك</h2>
            <p>
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul>
              <li>لتقديم خدمات الصيانة والإصلاح المتنقلة والاستجابة لطلباتك.</li>
              <li>للتواصل معك بخصوص موعدك أو لتقديم عروض أسعار.</li>
              <li>لتحسين جودة خدماتنا وموقعنا الإلكتروني.</li>
              <li>للامتثال للمتطلبات القانونية والتنظيمية.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary pt-6">3. مشاركة المعلومات</h2>
            <p>
              نحن لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية مع أطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:
            </p>
            <ul>
              <li>مع أعضاء فريق العمل والفنيين الذين سيقدمون لك الخدمة.</li>
              <li>إذا طُلب منا ذلك بموجب القانون أو استجابة لعملية قانونية.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary pt-6">4. أمن المعلومات</h2>
            <p>
              نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو الإتلاف. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.
            </p>
            
            <h2 className="text-2xl font-bold text-primary pt-6">5. حقوقك</h2>
            <p>
                لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها وتصحيحها أو طلب حذفها. لممارسة هذه الحقوق، يرجى التواصل معنا عبر معلومات الاتصال المتاحة.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">6. التغييرات على سياسة الخصوصية</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على هذه الصفحة. نشجعك على مراجعة هذه السياسة بشكل دوري لتكون على علم بأي تحديثات.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">7. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:
              <br />
              الهاتف: <a href={`tel:${phoneNumber}`} className="text-accent">{phoneNumber}</a>
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-primary pt-10 pb-10 text-white">
        <div className="container mx-auto px-4 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} ورشة متنقلة للسيارات الألمانية والصينية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
