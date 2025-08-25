"use client";
import { RootProvider } from "fumadocs-ui/provider";
import SearchDialog from "@/components/search";
import type { ReactNode } from "react";
import { Translations } from "fumadocs-ui/i18n";

export function Provider({ children, lang }: { children: ReactNode; lang: string; }) {
  return (
    <RootProvider
      search={{
        SearchDialog,
        enabled: true,
      }}
      i18n={{
        locale: lang,
        locales: [
          {
            name: 'English',
            locale: 'en',
          },
          {
            name: 'Français',
            locale: 'fr',
          },
        ],
        translations: {
          fr: {
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
          }
        } as Record<string, Partial<Translations>>
      }}
      theme={{
        defaultTheme: 'system',
        themes: ['light', 'dark', 'system'],
      }}
    >
      {children}
    </RootProvider>
  );
}