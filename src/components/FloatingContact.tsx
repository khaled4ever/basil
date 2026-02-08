import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingContact() {
  const phoneNumber = "0505557816";
  const whatsappUrl = `https://wa.me/966505557816`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-green-500 text-white px-5 py-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="font-bold text-lg whitespace-nowrap animate-radiant-pulse">
          راسلنا واتساب
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
      
      <a
        href={callUrl}
        className="group flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-full shadow-[0_0_20px_rgba(30,58,138,0.4)] hover:bg-primary/90 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="font-bold text-lg whitespace-nowrap animate-radiant-pulse">
          اتصل بنا
        </span>
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}
