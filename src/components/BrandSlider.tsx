
"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const brands = [
  { name: 'BMW', id: 'brand-bmw' },
  { name: 'Mercedes-Benz', id: 'brand-mercedes' },
  { name: 'Audi', id: 'brand-audi' },
  { name: 'Porsche', id: 'brand-porsche' },
  { name: 'Volkswagen', id: 'brand-vw' },
  { name: 'Land Rover', id: 'brand-landrover' },
  { name: 'Jaguar', id: 'brand-jaguar' },
  { name: 'Volvo', id: 'brand-volvo' },
];

export function BrandSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="w-full bg-white py-12 border-y shadow-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => {
              const brandImage = PlaceHolderImages.find(img => img.id === brand.id);
              if (!brandImage) return null;

              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="flex flex-col items-center justify-center p-2 group cursor-pointer">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-muted bg-white p-4 shadow-md transition-all duration-500 group-hover:border-accent group-hover:scale-105 overflow-hidden flex items-center justify-center">
                      <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:rotate-6">
                        <Image
                          src={brandImage.imageUrl}
                          alt={brand.name}
                          fill
                          className="object-contain"
                          data-ai-hint={brandImage.imageHint}
                        />
                      </div>
                    </div>
                    <span className="mt-4 text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                      {brand.name}
                    </span>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
