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
        className="group flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105"
      >
        <span className="font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          راسلنا واتساب
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>
      
      <a
        href={callUrl}
        className="group flex items-center gap-3 bg-primary text-white px-4 py-3 rounded-full shadow-2xl hover:bg-primary/90 transition-all transform hover:scale-105"
      >
        <span className="font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          اتصل بنا
        </span>
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
