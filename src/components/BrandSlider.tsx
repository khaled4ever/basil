
"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BrandSlider() {
  const plugin = React.useRef(
    AutoScroll({ 
      speed: 1, 
      stopOnInteraction: false, 
      stopOnMouseEnter: false,
      playOnInit: true
    })
  );

  // سحب جميع الصور التي تبدأ بـ "brand-" من ملف الإعدادات
  const brandImages = PlaceHolderImages.filter(img => img.id.startsWith('brand-'));

  // نكرر العناصر لضمان وجود عدد كافٍ لجعل الحركة مستمرة وبدون فراغات في النهاية
  // نكررها 4 مرات لضمان تغطية كاملة للمساحة وبدء التكرار بسلاسة
  const duplicatedBrands = [...brandImages, ...brandImages, ...brandImages, ...brandImages];

  return (
    <div className="w-full bg-white py-12 border-y shadow-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {duplicatedBrands.map((brand, index) => (
              <CarouselItem key={`${brand.id}-${index}`} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex flex-col items-center justify-center p-2 group cursor-pointer">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-muted bg-white p-4 shadow-sm transition-all duration-500 group-hover:border-accent group-hover:scale-105 overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full transition-all duration-500 transform group-hover:rotate-6">
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
                  <span className="mt-4 text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors text-center px-2">
                    {brand.description}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
