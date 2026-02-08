"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { generateServiceImages } from '@/ai/flows/generate-service-images';
import { generateServiceExplanations } from '@/ai/flows/generate-service-explanations';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ServiceSectionProps {
  id: string;
  name: string;
  arabicName: string;
  icon: React.ReactNode;
  isReversed?: boolean;
}

export function ServiceSection({ id, name, arabicName, icon, isReversed }: ServiceSectionProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAIContent() {
      try {
        const [imgRes, expRes] = await Promise.all([
          generateServiceImages({ serviceType: name }),
          generateServiceExplanations({ serviceName: arabicName })
        ]);
        setImageUrl(imgRes.imageUrl);
        setExplanation(expRes.explanation);
      } catch (error) {
        console.error("Error loading AI content:", error);
      } finally {
        setLoading(false);
      }
    }
    loadAIContent();
  }, [name, arabicName]);

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
              خدمات {arabicName} المتخصصة
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed min-h-[100px]">
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              ) : (
                <p>{explanation}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">قطع غيار أصلية</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">ضمان على العمل</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">فحص كمبيوتر مجاني</Badge>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative w-full aspect-video lg:aspect-square group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
              {loading || !imageUrl ? (
                <Skeleton className="w-full h-full" />
              ) : (
                <Image
                  src={imageUrl}
                  alt={arabicName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-bold text-xl">{arabicName} الاحترافية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
