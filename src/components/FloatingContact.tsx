import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingContact() {
  const phoneNumber = "0565219735";
  const whatsappUrl = `https://wa.me/966565219735`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group flex items-center justify-center bg-green-500 text-white w-14 h-14 sm:w-auto sm:px-5 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="hidden sm:inline font-bold sm:text-lg whitespace-nowrap mr-2">
          راسلنا واتساب
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
      
      <a
        href={callUrl}
        aria-label="Call us"
        className="group flex items-center justify-center bg-primary text-white w-14 h-14 sm:w-auto sm:px-5 sm:py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="hidden sm:inline font-bold sm:text-lg whitespace-nowrap mr-2">
          اتصل بنا
        </span>
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}
