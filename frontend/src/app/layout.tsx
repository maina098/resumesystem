import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import { CVProvider } from '@/context/CVContext';

export const metadata: Metadata = {
  title: 'Resume Templates | Canva Clone',
  description: 'Land your dream job with captivating CVs you can professionally customize.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <CVProvider>
          <Header />
          {children}
        </CVProvider>
      </body>
    </html>
  );
}
