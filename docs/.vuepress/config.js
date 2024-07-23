import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: 'LBRP - Manuals, FAQ, Tutorials',

  locales: {
    '/EN/': {
      lang: 'en-US',
      title: 'LBRP Manuals',
      description: 'LBRP Manuals'
    },
    '/NL/': {
      lang: 'nl-NL',
      title: 'LBRP Handleidingen',
      description: 'LBRP Handleidingen'
    },
    '/FR/': {
      lang: 'fr-FR',
      title: 'Manuels LBRP',
      description: 'Manuels LBRP'
    }
  },

  theme: defaultTheme({
    logo: 'https://www.lbrp.be/sites/default/files/images/LBRP70x70.png',

    contributors: false,
    docsBranch: 'main',
    docsDir: 'docs',
    docsRepo: 'lbrpsoftware/Documentation',

    editLink: true,
    editLinkText: 'Edit this page on GitHub',

    navbar: [
      {
        text: 'Home',
        link: 'https://www.corpgroup.site'
      },
      {
        text: 'Documentation',
        children: [
          {
            text: 'User Manuals',
            link: '/',
          },
          {
            text: 'API',
            link: 'https://abfapi.dev.corpgroup.site/swagger'
          },
        ]
      },
      {
        text: 'Login',
        link: 'https://abfweb.dev.corpgroup.site/login'
      },
    ],

    locales: {
      '/EN/': {
        lang: 'en-US',
        selectLanguageName: 'English',
        title: 'LBRP Manuals',
        description: 'LBRP Manuals',
      },
      '/NL/': {
        lang: 'nl-NL',
        selectLanguageName: 'Nederlands',
        title: 'LBRP Handleidingen',
        description: 'LBRP Handleidingen',
        sidebar: [
          {
            text: 'Inhoud',
            link: '/NL/',
            children: [
              {
                text: 'Handleidingen',
                link: '/NL/UserManuals/',
                collapsable: true,
                children: [
                  {
                    text: 'AccoWin',
                    link: '/NL/UserManuals/AccoWin/',
                    children: [
                      {
                        text: 'Installatie',
                        link: '/NL/UserManuals/AccoWin/Installation/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/NL/UserManuals/AccoWin/BackupDatabase/',
                      },
                      {
                        text: 'Intervat',
                        link: '/NL/UserManuals/AccoWin/Intervat/',
                      },
                      {
                        text: 'Belco Tax',
                        link: '/NL/UserManuals/AccoWin/BelcoTax/',
                      },
                      {
                        text: 'Coda',
                        link: '/NL/UserManuals/AccoWin/Coda/',
                      },
                      {
                        text: 'Winst Marge',
                        link: '/NL/UserManuals/AccoWin/ProfitMargin/',
                      },
                    ]
                  },
                  {
                    text: 'BelcoFin',
                    link: '/NL/UserManuals/BelcoFin/',
                    children: [
                      {
                        text: 'Installatie',
                        link: '/NL/UserManuals/BelcoFin/Installation/',
                      },
                      {
                        text: 'Handleiding',
                        link: '/NL/UserManuals/BelcoFin/Manual/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/NL/UserManuals/BelcoFin/BackupDatabase/',
                      },
                      {
                        text: 'Import Data',
                        link: '/NL/UserManuals/BelcoFin/ImportData/',
                      },
                      {
                        text: 'Export Lonen',
                        link: '/NL/UserManuals/BelcoFin/ExportWages/',
                      },
                      {
                        text: 'Opruimen Gegevens',
                        link: '/NL/UserManuals/BelcoFin/CleanData/',
                      },
                    ]
                  },
                  {
                    text: 'Finasset',
                    link: '/NL/UserManuals/Finasset/',
                    children: [
                      {
                        text: 'Installatie',
                        link: '/NL/UserManuals/Finasset/Installation/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/NL/UserManuals/Finasset/BackupDatabase/',
                      },
                      {
                        text: 'Import Data',
                        link: '/NL/UserManuals/Finasset/ImportData/',
                      },
                    ]
                  },
                  {
                    text: 'Corporate Desk',
                    link: '/NL/UserManuals/CorpDesk/',
                    children: [
                    ]
                  },
                ]
              },
              {
                text: 'Veelgestelde vragen',
                link: '/NL/FAQ/',
                children: [
                  {
                    text: 'AccoWin',
                    link: '/NL/FAQ/AccoWin/',
                  },
                  {
                    text: 'BelcoFin',
                    link: '/NL/FAQ/BelcoFin/',
                  },
                  {
                    text: 'Finasset',
                    link: '/NL/FAQ/Finasset/',
                  },
                  {
                    text: 'Corporate Desk',
                    link: '/NL/FAQ/CorpDesk/',
                  },
                  {
                    text: 'General',
                    link: '/NL/FAQ/General/',
                  },
                ]
              },
              {
                text: 'Andere',
                link: '/NL/Other/',
                children: [
                ]
              },
            ]
          }
        ]
      },
      '/FR/': {
        lang: 'fr-FR',
        selectLanguageName: 'Francais',
        title: 'Manuels LBRP',
        description: 'Manuels LBRP'
      },
    }
  }),
  bundler: viteBundler(),
})
