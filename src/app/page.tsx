
import React from 'react';
import { Wrench, Settings, Zap, Cpu, Paintbrush, Activity, Gauge, MapPin, Clock, Phone } from 'lucide-react';
import { FloatingContact } from '@/components/FloatingContact';
import { ServiceSection } from '@/components/ServiceSection';
import { BodyWorkSlider } from '@/components/BodyWorkSlider';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SERVICES = [
  { id: 'mechanics', name: 'Mechanics', arabicName: 'الميكانيكا العامة', icon: <Wrench className="w-5 h-5" /> },
  { id: 'engine', name: 'Engine Repair Overhaul', arabicName: 'توضيب المحركات', icon: <Gauge className="w-5 h-5" /> },
  { id: 'gearbox', name: 'Gearbox Overhaul', arabicName: 'توضيب الجيربوكس', icon: <Settings className="w-5 h-5" /> },
  { id: 'electrical', name: 'Electrical Repairs', arabicName: 'الأعطال الكهربائية', icon: <Zap className="w-5 h-5" /> },
  { id: 'programming', name: 'Car Computer Programming', arabicName: 'برمجة كمبيوتر السيارة', icon: <Cpu className="w-5 h-5" /> },
  { id: 'maintenance', name: 'Routine Maintenance', arabicName: 'الصيانة الدورية', icon: <Activity className="w-5 h-5" /> },
];

export default function Home() {
  const phoneNumber = "0505557816";
  const whatsappUrl = "https://wa.me/966505557816";
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-bold text-xl italic">A</span>
            </div>
            <h1 className="text-2xl font-bold text-primary tracking-tight">صيانة السيارات الاوربية والالمانية</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-primary">
            <a href="#bodywork" className="hover:text-accent transition-colors">السمكرة والدهان</a>
            <a href="#electrical" className="hover:text-accent transition-colors">الكهرباء</a>
            <a href="#mechanics" className="hover:text-accent transition-colors">الميكانيكا</a>
            <a href="#programming" className="hover:text-accent transition-colors">البرمجة وفحص الكمبيوتر</a>
            <a href="#maintenance" className="hover:text-accent transition-colors">الصيانة الدورية</a>
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
              خبير السيارات الألمانية
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              العناية الفائقة بسيارتك <br />
              <span className="text-accent">الأوروبية والألمانية</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              نحن نقدم خدمات صيانة متخصصة بمعايير عالمية لكل من مرسيدس، بي إم دبليو، أودي، بورش وغيرها. دقة متناهية، مهندسون خبراء، وقطع غيار أصلية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg font-bold px-10 py-7" asChild>
                <a href={`tel:${phoneNumber}`}>
                  اتصل بنا الآن
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg font-bold px-10 py-7" asChild>
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
                <p className="font-bold">الرياض، المنطقة الصناعية</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-accent w-6 h-6" />
              <div>
                <p className="text-xs text-gray-400">ساعات العمل</p>
                <p className="font-bold">8:00 صباحاً - 9:00 مساءً</p>
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
            <h2 className="text-4xl font-bold text-primary">خدماتنا المتخصصة</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            <p className="text-muted-foreground">نقدم مجموعة متكاملة من الخدمات الميكانيكية والكهربائية المصممة خصيصاً للسيارات الأوروبية الحديثة.</p>
          </div>
        </div>

        {SERVICES.map((service, index) => (
          <ServiceSection
            key={service.id}
            id={service.id}
            name={service.name}
            arabicName={service.arabicName}
            icon={service.icon}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>

      {/* Bodywork Slider Section */}
      <section id="bodywork">
        <BodyWorkSlider />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-primary space-y-4">
              <h2 className="text-4xl font-black italic uppercase leading-none">لا تترك سيارتك لأي أحد</h2>
              <p className="text-xl font-medium opacity-80">نحن ندرك تماماً قيمة سيارتك، ونتعامل معها بكل حب واحترافية.</p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-xl font-black px-12 py-8 rounded-none shadow-[10px_10px_0px_0px_rgba(30,58,138,1)]" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  احجز فحصك المجاني الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary pt-20 pb-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-2xl italic">A</span>
                </div>
                <h2 className="text-3xl font-bold text-white">صيانة السيارات الاوربية والالمانية</h2>
              </div>
              <p className="text-white/60 text-lg max-w-md leading-relaxed">
                المركز الأول في المملكة المتخصص حصرياً في صيانة السيارات الألمانية والأوروبية. نجمع بين الخبرة الطويلة وأحدث التقنيات العالمية.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold border-b-2 border-accent inline-block mb-4">روابط سريعة</h3>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-accent">الرئيسية</a></li>
                <li><a href="#services" className="hover:text-accent">الخدمات الميكانيكية</a></li>
                <li><a href="#bodywork" className="hover:text-accent">قسم السمكرة</a></li>
                <li><a href="#contact" className="hover:text-accent">تواصل معنا</a></li>
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
                  <span>المملكة العربية السعودية، الرياض</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>متاحون من السبت إلى الخميس</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} صيانة السيارات الاوربية والالمانية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
