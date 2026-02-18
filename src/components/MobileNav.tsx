'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Truck } from 'lucide-react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#mechanics', label: 'الميكانيكا' },
  { href: '#battery', label: 'البطاريات' },
  { href: '#electrical', label: 'الكهرباء' },
  { href: '#programming', label: 'البرمجة' },
  { href: '#maintenance', label: 'الصيانة' },
  { href: '#bodywork', label: 'السمكرة' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/966565219735";

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-primary" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-background p-6 flex flex-col">
          <div className="mb-8 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-accent rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-primary">ورشة متنقلة</h2>
          </div>
          <nav className="flex flex-1 flex-col gap-6">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
           <Button className="bg-accent text-primary hover:bg-accent/90 font-bold w-full" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              حجز موعد
            </a>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
