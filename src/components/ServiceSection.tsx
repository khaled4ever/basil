"use client";

import React from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ServiceSectionProps {
  id: string;
  name: string;
  arabicName: string;
  icon: React.ReactNode;
  isReversed?: boolean;
  imageUrlOverride?: string;
}

// Static fallback content to ensure consistency for users and Google crawlers
const SERVICE_EXPLANATIONS: Record<string, string> = {
  "الميكانيكا العامة": "ورشة متنقلة في الرياض تقدم خدمات ميكانيكا السيارات الألمانية والصينية في موقعك. نصلك بأحدث الأجهزة لفحص وإصلاح كافة الأعطال الميكانيكية، مع التزامنا باستخدام قطع غيار أصلية لضمان أعلى مستويات الأداء لسيارتك.",
  "تغيير بطارية السيارة": "لا تدع بطارية فارغة تعطل يومك. خدمتنا المتنقلة لتغيير البطاريات في الرياض تصلك بسرعة لتركيب بطارية جديدة ومناسبة لسيارتك الألمانية أو الصينية، مع فحص نظام الشحن للتأكد من كل شيء يعمل بكفاءة.",
  "الأعطال الكهربائية": "الأعطال الكهربائية تتطلب خبرة ودقة. فريقنا المتنقل مجهز بأحدث أجهزة الفحص لتشخيص وإصلاح كافة المشاكل الكهربائية في السيارات الألمانية والصينية، من مشاكل الإضاءة إلى أعطال الأنظمة الإلكترونية المعقدة.",
  "برمجة كمبيوتر السيارة": "نقدم خدمات برمجة كمبيوتر متنقلة للسيارات الألمانية والصينية. نقوم بتحديث الأنظمة، تعريف القطع الجديدة، وإصلاح الأخطاء البرمجية باستخدام أجهزة متخصصة تضمن التوافق الكامل مع سيارتك.",
  "الصيانة الدورية": "حافظ على سيارتك الألمانية أو الصينية بأفضل حال مع خدمة الصيانة الدورية المتنقلة. نأتيك لتغيير الزيوت والفلاتر، فحص السوائل، والقيام بكافة الفحوصات اللازمة لضمان قيادة آمنة وموثوقة."
};


export function ServiceSection({ id, name, arabicName, icon, isReversed, imageUrlOverride }: ServiceSectionProps) {
  // Directly use the static explanation. No need for useEffect or AI calls.
  const explanation = SERVICE_EXPLANATIONS[arabicName] || `نحن ورشة متنقلة في الرياض نقدم خدمات متخصصة في ${arabicName} للسيارات الألمانية والصينية بأعلى معايير الجودة. فريقنا يصلك في موقعك لضمان عمل سيارتك بكفاءة عالية، مع استخدام قطع غيار أصلية ودقة في التنفيذ.`;

  // Image is passed as a prop, so no loading state is needed for it either.
  const imageUrl = imageUrlOverride;

  return (
    <section id={id} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-12",
          isReversed ? "lg:flex-row-reverse" : ""
        )}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              {icon}
              {arabicName}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              خدمة {arabicName} المتنقلة
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed min-h-[100px]">
              {/* Render static text directly. No more skeletons. */}
              <p>{explanation}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">قطع غيار أصلية</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">ضمان على الخدمة</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">فحص كمبيوتر متنقل</Badge>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full aspect-video lg:aspect-square group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
              {/* Image is always available, no skeleton needed. */}
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={arabicName}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <Skeleton className="w-full h-full" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-bold text-xl">{arabicName} في موقعك</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
