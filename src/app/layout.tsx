import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoHaus Pro | أوتو هاوس برو لصيانة السيارات الأوروبية',
  description: 'مركز متخصص في صيانة السيارات الألمانية والأوروبية بأعلى معايير الجودة والاحترافية.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased rtl">
        {children}
      </body>
    </html>
  );
}
