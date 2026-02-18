'use client';

import React from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';

export default function TermsOfServicePage() {
  const phoneNumber = "0565219735";
  const callUrl = `tel:${phoneNumber}`;

  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(callUrl);
    } else {
      window.location.href = callUrl;
    }
  };

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
          <h1 className="text-4xl font-bold text-primary mb-4 text-center">شروط الخدمة</h1>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-12" />

          <div className="prose prose-lg max-w-none text-right rtl space-y-6 text-muted-foreground">
            <p>
              آخر تحديث: <span suppressHydrationWarning>{new Date().toLocaleDateString('ar-SA')}</span>
            </p>
            <p>
              يرجى قراءة شروط الخدمة هذه ("الشروط") بعناية قبل استخدام موقعنا الإلكتروني أو طلب خدماتنا التي تقدمها "ورشة متنقلة للسيارات".
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">1. قبول الشروط</h2>
            <p>
              باستخدامك لهذا الموقع أو طلبك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فلا يجوز لك استخدام موقعنا أو خدماتنا.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">2. وصف الخدمات</h2>
            <p>
              نحن نقدم خدمات صيانة وإصلاح سيارات متنقلة في مدينة الرياض، متخصصة في السيارات الألمانية والصينية. تشمل خدماتنا على سبيل المثال لا الحصر: الميكانيكا، الكهرباء، فحص الكمبيوتر، تغيير البطاريات، والصيانة الدورية.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">3. التزامات العميل</h2>
            <p>
              عند طلب الخدمة، يلتزم العميل بـ:
            </p>
            <ul>
              <li>توفير معلومات دقيقة حول المشكلة وموديل السيارة.</li>
              <li>توفير وصول آمن للفني إلى موقع السيارة.</li>
              <li>الموافقة على تكاليف التشخيص والإصلاح قبل بدء العمل.</li>
              <li>سداد قيمة الخدمة عند الانتهاء من العمل.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary pt-6">4. الأسعار والدفع</h2>
            <p>
              سيتم تزويد العميل بتقدير للتكلفة قبل البدء بأي أعمال إصلاح. قد تتغير التكلفة النهائية في حال ظهور أعطال إضافية غير متوقعة، وفي هذه الحالة سيتم إبلاغ العميل والحصول على موافقته قبل المتابعة. يتم الدفع فور الانتهاء من الخدمة.
            </p>
            
            <h2 className="text-2xl font-bold text-primary pt-6">5. الضمان</h2>
            <p>
                نقدم ضمانًا على بعض الخدمات وقطع الغيار المستخدمة. تختلف مدة الضمان وشروطه حسب طبيعة الخدمة والقطعة. يرجى الاستفسار عن تفاصيل الضمان الخاصة بالخدمة المطلوبة. لا يشمل الضمان الأعطال الناتجة عن سوء الاستخدام أو الحوادث.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">6. إخلاء المسؤولية</h2>
            <p>
              نسعى لتقديم أفضل خدمة ممكنة، لكننا لا نتحمل مسؤولية أي أضرار غير مباشرة أو تبعية قد تنتج عن استخدام خدماتنا. تقتصر مسؤوليتنا على قيمة الخدمة المقدمة.
            </p>

            <h2 className="text-2xl font-bold text-primary pt-6">7. القانون الحاكم</h2>
            <p>
              تخضع هذه الشروط وتُفسر وفقًا لقوانين المملكة العربية السعودية.
            </p>
            
            <h2 className="text-2xl font-bold text-primary pt-6">8. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول شروط الخدمة، يمكنك التواصل معنا عبر:
              <br />
              الهاتف: <a href={callUrl} onClick={handleCallClick} className="text-accent">{phoneNumber}</a>
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-primary pt-10 pb-10 text-white">
        <div className="container mx-auto px-4 text-center text-white/40 text-sm">
            <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> ورشة متنقلة للسيارات الألمانية والصينية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
