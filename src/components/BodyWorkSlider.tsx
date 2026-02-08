
"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BodyWorkSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  // Filter all images starting with 'bodywork-' from the JSON
  const bodyworkImages = PlaceHolderImages.filter(img => img.id.startsWith('bodywork-'));

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
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group">
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={item.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-accent mb-1">{item.description}</h3>
                    <p className="text-white/80 text-sm leading-tight">أفضل معايير الجودة والدقة</p>
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
