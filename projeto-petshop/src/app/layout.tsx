import { Header } from '@/components/header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const interTight = Inter({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['300'],
});

export const metadata: Metadata = {
  title: 'Mudno Pet',
  description: 'Aqui você pode ver todos os clientes e serviços do Mudno Pet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <Header />

        <div className="max-w-3xl mx-auto">
          <main className="flex-1 flex flex-col mt-12">
            {children}
            <Toaster position="top-right" />
          </main>
        </div>
      </body>
    </html>
  );
}
