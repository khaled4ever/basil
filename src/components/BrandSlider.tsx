
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BrandSlider() {
  // سحب جميع الصور التي تبدأ بـ "brand-" من ملف الإعدادات
  const brandImages = PlaceHolderImages.filter(img => img.id.startsWith('brand-'));

  return (
    <div className="w-full bg-white py-12 border-y shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14">
          {brandImages.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center group animate-in fade-in duration-500">
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-muted bg-white p-3 shadow-sm transition-all duration-300 group-hover:border-accent group-hover:shadow-md group-hover:scale-105 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={brand.imageUrl}
                    alt={brand.description}
                    fill
                    unoptimized
                    className="object-contain"
                    data-ai-hint={brand.imageHint}
                  />
                </div>
              </div>
              <span className="mt-3 text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest text-center group-hover:text-primary transition-colors">
                {brand.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
