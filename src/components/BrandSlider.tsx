"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

const brands = [
  { name: 'BMW', logo: 'https://picsum.photos/seed/bmw-logo/200/200' },
  { name: 'Mercedes-Benz', logo: 'https://picsum.photos/seed/merc-logo/200/200' },
  { name: 'Audi', logo: 'https://picsum.photos/seed/audi-logo/200/200' },
  { name: 'Porsche', logo: 'https://picsum.photos/seed/porsche-logo/200/200' },
  { name: 'Volkswagen', logo: 'https://picsum.photos/seed/vw-logo/200/200' },
  { name: 'Land Rover', logo: 'https://picsum.photos/seed/lr-logo/200/200' },
  { name: 'Jaguar', logo: 'https://picsum.photos/seed/jag-logo/200/200' },
  { name: 'Volvo', logo: 'https://picsum.photos/seed/volvo-logo/200/200' },
];

export function BrandSlider() {
  return (
    <div className="w-full bg-white py-8 border-y shadow-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6">
                <div className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="relative w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    {brand.name}
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
