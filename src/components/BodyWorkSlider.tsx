"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const bodyworkImages = [
  { title: 'ترميم الصدمات', desc: 'إعادة الهيكل لحالته الأصلية', src: 'https://picsum.photos/seed/body1/1200/800' },
  { title: 'الدهان الحراري', desc: 'استخدام أفضل أنواع الأصباغ العالمية', src: 'https://picsum.photos/seed/body2/1200/800' },
  { title: 'تلميع ساطع', desc: 'حماية النانو سيراميك', src: 'https://picsum.photos/seed/body3/1200/800' },
  { title: 'إصلاح دقيق', desc: 'أحدث معدات الشد والتعديل', src: 'https://picsum.photos/seed/body4/1200/800' },
];

export function BodyWorkSlider() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">قسم السمكرة والدهان</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            نحن فخورون بتقديم أفضل خدمات ترميم ودهان السيارات باستخدام تقنيات الوكالة وأصباغ مطابقة للون الأصلي تماماً.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {bodyworkImages.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0 bg-accent text-primary border-none hover:bg-accent/80" />
            <CarouselNext className="static translate-y-0 bg-accent text-primary border-none hover:bg-accent/80" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
