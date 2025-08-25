import Link from 'next/link';

const translations = {
  en: {
    hello: 'Hello World',
    openDocs: 'You can open',
    andSee: 'and see the documentation.',
    docs: '/docs',
  },
  fr: {
    hello: 'Bonjour le monde',
    openDocs: 'Vous pouvez ouvrir',
    andSee: 'et voir la documentation.',
    docs: '/docs',
  },
};

export default function HomePage({ params }: { params: { lang: string; }; }) {
  const lang = params?.lang === 'fr' ? 'fr' : 'en';
  const t = translations[lang];
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{t.hello}</h1>
      <p className="text-fd-muted-foreground">
        {t.openDocs}{' '}
        <Link
          href={`/${lang}/docs`}
          className="text-fd-foreground font-semibold underline"
        >
          {t.docs}
        </Link>{' '}
        {t.andSee}
      </p>
    </main>
  );
}
