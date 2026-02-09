import React from 'react';
import { Truck, Wrench, BatteryCharging, Zap, Cpu, Activity, MapPin, Clock, Phone } from 'lucide-react';
import { FloatingContact } from '@/components/FloatingContact';
import { ServiceSection } from '@/components/ServiceSection';
import { BrandSlider } from '@/components/BrandSlider';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BodyWorkSlider } from '@/components/BodyWorkSlider';

const SERVICES = [
  { 
    id: 'mechanics', 
    name: 'Mobile Mechanics', 
    arabicName: 'الميكانيكا العامة', 
    icon: <Wrench className="w-5 h-5" />,
    imageUrlOverride: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/7.png'
  },
  { 
    id: 'battery', 
    name: 'Mobile Battery Replacement', 
    arabicName: 'تغيير بطارية السيارة', 
    icon: <BatteryCharging className="w-5 h-5" />,
    imageUrlOverride: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/ChatGPT-Image-9-%D9%81%D8%A8%D8%B1%D8%A7%D9%8A%D8%B1-2026%D8%8C-%04_57_45-%D9%85.png'
  },
  { 
    id: 'electrical', 
    name: 'Mobile Electrical Repairs', 
    arabicName: 'الأعطال الكهربائية', 
    icon: <Zap className="w-5 h-5" />,
    imageUrlOverride: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/4.png'
  },
  { 
    id: 'programming', 
    name: 'Mobile Car Computer Programming', 
    arabicName: 'برمجة كمبيوتر السيارة', 
    icon: <Cpu className="w-5 h-5" />,
    imageUrlOverride: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/2.png'
  },
  { 
    id: 'maintenance', 
    name: 'Mobile Routine Maintenance', 
    arabicName: 'الصيانة الدورية', 
    icon: <Activity className="w-5 h-5" />,
    imageUrlOverride: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/1.png'
  },
];

export default function Home() {
  const phoneNumber = "0565219735";
  const whatsappUrl = "https://wa.me/966565219735";
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-accent rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-primary tracking-tight">ورشة متنقلة للسيارات</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-primary">
            <a href="#mechanics" className="hover:text-accent transition-colors">الميكانيكا</a>
            <a href="#battery" className="hover:text-accent transition-colors">البطاريات</a>
            <a href="#electrical" className="hover:text-accent transition-colors">الكهرباء</a>
            <a href="#programming" className="hover:text-accent transition-colors">البرمجة</a>
            <a href="#maintenance" className="hover:text-accent transition-colors">الصيانة</a>
            <a href="#bodywork" className="hover:text-accent transition-colors">السمكرة</a>
          </nav>

          <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-6" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              حجز موعد
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover brightness-[0.4]"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block bg-accent text-primary font-bold px-4 py-1 rounded-sm text-sm uppercase tracking-widest mb-2 animate-bounce">
              خبير السيارات الألمانية والصينية
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              خدمة صيانة متنقلة تصلك <br />
              <span className="text-accent">أينما كنت</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              نقدم خدمة صيانة متنقلة ومحترفة في الرياض لجميع أنواع السيارات الألمانية والصينية. فريقنا مجهز بأحدث المعدات لتقديم خدمات الميكانيكا، الكهرباء، فحص الكمبيوتر، والصيانة الدورية في موقعك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg font-bold px-10 py-7" asChild>
                <a href={`tel:${phoneNumber}`}>
                  اتصل بنا الآن
                </a>
              </Button>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-10 py-7" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  حجز موعد
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-6">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4 text-white">
            <div className="flex items-center gap-3">
              <MapPin className="text-accent w-6 h-6" />
              <div>
                <p className="text-xs text-gray-400">موقعنا</p>
                <p className="font-bold">خدمة متنقلة في كل أنحاء الرياض</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-accent w-6 h-6" />
              <div>
                <p className="text-xs text-gray-400">ساعات العمل</p>
                <p className="font-bold">24/7 خدمة طوارئ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-accent w-6 h-6" />
              <div>
                <p className="text-xs text-gray-400">للحجز والاستفسار</p>
                <p className="font-bold">{phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services (AI Powered) */}
      <section id="services" className="bg-background">
        <div className="container mx-auto px-4 pt-20">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary">خدماتنا المتنقلة</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground">نقدم مجموعة متكاملة من الخدمات المتنقلة المصممة خصيصاً للسيارات الألمانية والصينية.</p>
          </div>
        </div>

        {/* Brand Showcase Section (Static Grid) */}
        <BrandSlider />

        {SERVICES.map((service, index) => (
          <ServiceSection
            key={service.id}
            id={service.id}
            name={service.name}
            arabicName={service.arabicName}
            icon={service.icon}
            isReversed={index % 2 !== 0}
            imageUrlOverride={service.imageUrlOverride}
          />
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-primary space-y-4">
              <h2 className="text-4xl font-black italic uppercase leading-none">لا تترك سيارتك تتعطل</h2>
              <p className="text-xl font-medium opacity-80">راحتك تهمنا، دع فريقنا المحترف يصل إليك ويخدم سيارتك في مكانها.</p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-xl font-black px-12 py-8 rounded-none shadow-[10px_10px_0px_0px_rgba(0, 48, 114, 1)]" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  اطلب الخدمة الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      </section>

      <BodyWorkSlider />

      {/* Footer */}
      <footer id="contact" className="bg-primary pt-20 pb-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center">
                  <Truck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-white">ورشة متنقلة للسيارات</h2>
              </div>
              <p className="text-white/60 text-lg max-w-md leading-relaxed">
                الورشة المتنقلة الأولى في الرياض المتخصصة في السيارات الألمانية والصينية. نجمع بين الخبرة وأحدث التقنيات المتنقلة لخدمتك في أي مكان.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold border-b-2 border-accent inline-block mb-4">خدماتنا</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#mechanics" className="hover:text-accent">الميكانيكا العامة</a></li>
                <li><a href="#battery" className="hover:text-accent">تغيير بطارية السيارة</a></li>
                <li><a href="#electrical" className="hover:text-accent">الأعطال الكهربائية</a></li>
                <li><a href="#programming" className="hover:text-accent">برمجة كمبيوتر السيارة</a></li>
                <li><a href="#maintenance" className="hover:text-accent">الصيانة الدورية</a></li>
                <li><a href="#bodywork" className="hover:text-accent">السمكرة والدهان</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold border-b-2 border-accent inline-block mb-4">تواصل معنا</h3>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>{phoneNumber}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>خدمة تغطي جميع أنحاء الرياض</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>متاحون 24/7 لخدمتكم</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} ورشة متنقلة للسيارات الألمانية والصينية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
