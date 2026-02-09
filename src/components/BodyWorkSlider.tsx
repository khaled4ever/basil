
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BodyWorkSlider() {
  // تصفية الصور الخاصة بقسم السمكرة
  const bodyworkImages = PlaceHolderImages.filter(img => img.id.startsWith('bodywork-'));

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">قسم السمكرة والدهان</h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            نحن فخورون بتقديم أفضل خدمات ترميم ودهان السيارات باستخدام تقنيات حديثة وأصباغ مطابقة للون الأصلي تماماً.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bodyworkImages.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/10">
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-accent mb-2">{item.description}</h3>
                <p className="text-white/80 text-sm leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  دقة متناهية في التنفيذ ومعايير جودة عالمية
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
