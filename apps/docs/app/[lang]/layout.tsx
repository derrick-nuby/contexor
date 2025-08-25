import '@/app/global.css';
import { Provider } from './provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string; }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider lang={lang}>
          {children}
        </Provider>
      </body>
    </html>
  );
}