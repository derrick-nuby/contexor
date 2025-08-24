import '@/app/global.css';
import { Provider } from './provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Translations } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';

const inter = Inter({
  subsets: ['latin'],
});

// French translations
const fr: Partial<Translations> = {
  search: 'Rechercher',
  searchNoResult: 'Aucun résultat trouvé',
  toc: 'Sur cette page',
  tocNoHeadings: 'Aucun titre',
  lastUpdate: 'Dernière mise à jour',
  chooseLanguage: 'Choisir la langue',
  nextPage: 'Suivant',
  previousPage: 'Précédent',
  chooseTheme: 'Choisir le thème',
  editOnGithub: 'Modifier sur GitHub',
};

// Available languages that will be displayed on UI
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Français',
    locale: 'fr',
  },
];


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
        <RootProvider>
          <Provider lang={lang}>
            {children}
          </Provider>
        </RootProvider>
      </body>
    </html>
  );
}