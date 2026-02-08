import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'مركز صيانة السيارات الأوروبية والألمانية بالرياض | قطع غيار أصلية',
  description: 'أفضل مركز صيانة سيارات أوروبية في الرياض. متخصصون في صيانة مرسيدس، بي إم دبليو، أودي، وبورش. توضيب محركات، جيربوكس، كهرباء وبرمجة بأحدث الأجهزة وقطع غيار أصلية.',
  keywords: 'صيانة سيارات أوروبية الرياض, صيانة مرسيدس, صيانة بي ام دبليو, توضيب محركات الرياض, مركز صيانة سيارات المانية, برمجة سيارات الرياض, قطع غيار سيارات اصلية',
  alternates: {
    canonical: 'https://autohaus-pro.com', // Replace with actual domain if known
  },
  openGraph: {
    title: 'مركز صيانة السيارات الأوروبية والألمانية بالرياض',
    description: 'خبرة طويلة في صيانة وتوضيب السيارات الألمانية والأوروبية بأعلى معايير الجودة.',
    type: 'website',
    locale: 'ar_SA',
  }
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
