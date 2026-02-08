"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const bodyworkImages = [
  { title: 'ترميم الصدمات', desc: 'إعادة الهيكل لحالته الأصلية', src: 'https://picsum.photos/seed/body1/800/600' },
  { title: 'الدهان الحراري', desc: 'أفضل أنواع الأصباغ العالمية', src: 'https://picsum.photos/seed/body2/800/600' },
  { title: 'تلميع ساطع', desc: 'حماية النانو سيراميك', src: 'https://picsum.photos/seed/body3/800/600' },
  { title: 'إصلاح دقيق', desc: 'أحدث معدات الشد والتعديل', src: 'https://picsum.photos/seed/body4/800/600' },
  { title: 'سمكرة بارد', desc: 'إصلاح الانبعاجات بدون دهان', src: 'https://picsum.photos/seed/body5/800/600' },
  { title: 'رش مطفي', desc: 'ألوان مميزة وحماية عالية', src: 'https://picsum.photos/seed/body6/800/600' },
  { title: 'معالجة الخدوش', desc: 'إخفاء الخدوش والعيوب بدقة', src: 'https://picsum.photos/seed/body7/800/600' },
  { title: 'شد شاسيه', desc: 'ميزان إلكتروني لضبط الهيكل', src: 'https://picsum.photos/seed/body8/800/600' },
  { title: 'تغيير لون كامل', desc: 'تحويل مظهر السيارة بالكامل', src: 'https://picsum.photos/seed/body9/800/600' },
  { title: 'حماية واجهة', desc: 'أفلام حماية ضد الحصى والأتربة', src: 'https://picsum.photos/seed/body10/800/600' },
  { title: 'إصلاح فايبر', desc: 'ترميم الصدامات والقطع البلاستيكية', src: 'https://picsum.photos/seed/body11/800/600' },
  { title: 'سحب صدمات', desc: 'تقنيات سحب متطورة للمساحات الواسعة', src: 'https://picsum.photos/seed/body12/800/600' },
];

export function BodyWorkSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">قسم السمكرة والدهان</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            نحن فخورون بتقديم أفضل خدمات ترميم ودهان السيارات باستخدام تقنيات حديثة وأصباغ مطابقة للون الأصلي تماماً.
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {bodyworkImages.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-accent mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-tight">{item.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-10 gap-6">
            <CarouselPrevious className="static translate-y-0 bg-accent text-primary border-none hover:bg-accent/80 w-12 h-12" />
            <CarouselNext className="static translate-y-0 bg-accent text-primary border-none hover:bg-accent/80 w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}