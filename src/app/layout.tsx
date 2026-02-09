import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ورشة متنقلة لصيانة السيارات الألمانية والصينية بالرياض',
  description: 'أفضل ورشة متنقلة في الرياض لصيانة السيارات الألمانية والصينية. نصلك أينما كنت لخدمات الميكانيكا، الكهرباء، البرمجة، والصيانة الدورية بأحدث الأجهزة.',
  keywords: 'ورشة متنقلة الرياض, صيانة سيارات ألمانية, صيانة سيارات صينية, كهربائي سيارات متنقل, ميكانيكي متنقل الرياض, برمجة سيارات متنقلة',
  alternates: {
    canonical: 'https://autohaus-pro.com', // Replace with actual domain if known
  },
  openGraph: {
    title: 'ورشة متنقلة لصيانة السيارات الألمانية والصينية بالرياض',
    description: 'خبرة واحترافية في صيانة السيارات الألمانية والصينية تصلك إلى باب بيتك أو مكان عملك.',
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
