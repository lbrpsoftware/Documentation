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
            text: 'API - Swagger',
            link: 'https://abfapi.corpgroup.site/swagger'
          },
          {
            text: 'API - Docs',
            link: 'https://abfapi.corpgroup.site/api-docs'
          },
        ]
      },
      {
        text: 'Login',
        link: 'https://abfweb.corpgroup.site/identity/login'
      },
    ],

    locales: {
      '/': {
        sidebar: [
          {      
            text: 'Select your Language',
            children: [
              {
                text: 'English',
                link: '/EN/',
              },
              {
                text: 'Nederlands',
                link: '/NL/',
              },
              {
                text: 'Français',
                link: '/FR/',
              },
            ]
          }
        ]
      },
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
            text: '🖥️ Desktop Applications',
            link: '/NL/Desktop/',
            children: [
              {
                text: '📚 Handleidingen',
                link: '/NL/Desktop/UserManuals/',
                children: [
                  {
                    text: 'AccoWin',
                    link: '/NL/Desktop/UserManuals/AccoWin/',
                    children: [
                      {
                        text: 'Installatie',
                        link: '/NL/Desktop/UserManuals/AccoWin/Installation/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/NL/Desktop/UserManuals/AccoWin/BackupDatabase/',
                      },
                      {
                        text: 'Intervat',
                        link: '/NL/Desktop/UserManuals/AccoWin/Intervat/',
                      },
                      {
                        text: 'Belco Tax',
                        link: '/NL/Desktop/UserManuals/AccoWin/BelcoTax/',
                      },
                      {
                        text: 'Coda',
                        link: '/NL/Desktop/UserManuals/AccoWin/Coda/',
                      },
                      {
                        text: 'Winst Marge',
                        link: '/NL/Desktop/UserManuals/AccoWin/ProfitMargin/',
                      },
                    ]
                  },
                  {
                    text: 'BelcoFin',
                    link: '/NL/Desktop/UserManuals/BelcoFin/',
                    children: [
                      {
                        text: 'Installatie',
                        link: '/NL/Desktop/UserManuals/BelcoFin/Installation/',
                      },
                      {
                        text: 'Handleiding',
                        link: '/NL/Desktop/UserManuals/BelcoFin/Manual/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/NL/Desktop/UserManuals/BelcoFin/BackupDatabase/',
                      },
                      {
                        text: 'Import Data',
                        link: '/NL/Desktop/UserManuals/BelcoFin/ImportData/',
                      },
                      {
                        text: 'Export Lonen',
                        link: '/NL/Desktop/UserManuals/BelcoFin/ExportWages/',
                      },
                      {
                        text: 'Opruimen Gegevens',
                        link: '/NL/Desktop/UserManuals/BelcoFin/CleanData/',
                      },
                    ]
                  },
                  {
                    text: 'Finasset',
                    link: '/NL/Desktop/UserManuals/Finasset/',
                    children: [
                      {
                        text: 'Installatie',
                        link: '/NL/Desktop/UserManuals/Finasset/Installation/',
                      },
                      {
                        text: 'Licentie',
                        link: '/NL/Desktop/UserManuals/Finasset/License/',
                      },
                      {
                        text: 'Applicatie Delen',
                        link: '/NL/Desktop/UserManuals/Finasset/ShareClient/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/NL/Desktop/UserManuals/Finasset/BackupDatabase/',
                      },
                      {
                        text: 'Import Data',
                        link: '/NL/Desktop/UserManuals/Finasset/ImportData/',
                      },
                      {
                        text: 'Migreren',
                        link: '/NL/Desktop/UserManuals/Finasset/Migrate/',
                      },
                    ]
                  },
                  {
                    text: 'Corporate Desk',
                    link: '/NL/Desktop/UserManuals/CorpDesk/',
                    children: [
                    ]
                  },
                ]
              },
              {
                text: '🗯️ Veelgestelde vragen',
                link: '/NL/Desktop/FAQ/',
                children: [
                  {
                    text: 'AccoWin',
                    link: '/NL/Desktop/FAQ/AccoWin/',
                  },
                  {
                    text: 'BelcoFin',
                    link: '/NL/Desktop/FAQ/BelcoFin/',
                  },
                  {
                    text: 'Finasset',
                    link: '/NL/Desktop/FAQ/Finasset/',
                  },
                  {
                    text: 'Corporate Desk',
                    link: '/NL/Desktop/FAQ/CorpDesk/',
                  },
                  {
                    text: 'General',
                    link: '/NL/Desktop/FAQ/General/',
                  },
                ]
              },
              {
                text: '⁉️ Andere',
                link: '/NL/Desktop/Other/',
                children: [
                ]
              },
            ]
          },
          {
            text: '🌐 Cloud',
            link: '/NL/Cloud/',
            children: [
              {
                text: '📚 Handleidingen',
                link: '/NL/Cloud/UserManuals/',
                children: [
                  {
                    text: 'Identity',
                    link: '/NL/Cloud/UserManuals/Identity/',
                    children: [
                      {
                        text: 'Gebruikers',
                        link: '/NL/Cloud/UserManuals/Identity/Users/',
                      },
                      {
                        text: 'Organisaties',
                        link: '/NL/Cloud/UserManuals/Identity/Organizations/',
                      },
                      {
                        text: 'Leden',
                        link: '/NL/Cloud/UserManuals/Identity/Members/',
                      },
                      {
                        text: 'Applicaties',
                        link: '/NL/Cloud/UserManuals/Identity/Applications/',
                      },
                      {
                        text: 'Facturen',
                        link: '/NL/Cloud/UserManuals/Identity/Invoices/',
                      },
                      {
                        text: 'Menu',
                        link: '/NL/Cloud/UserManuals/Identity/Menu/',
                      },
                    ]
                  },
                  {
                    text: 'Books',
                    link: '/NL/Cloud/UserManuals/Books/',
                    children: [
                      {
                        text: 'Upload',
                        link: '/NL/Cloud/UserManuals/Books/Upload/',
                      },
                      {
                        text: 'Manage',
                        link: '/NL/Cloud/UserManuals/Books/Manage/',
                      },
                      {
                        text: 'View',
                        link: '/NL/Cloud/UserManuals/Books/View/',
                      },
                      {
                        text: 'AI',
                        link: '/NL/Cloud/UserManuals/Books/AI/',
                      },
                    ]
                  },
                  {
                    text: 'Globalization',
                    link: '/NL/Cloud/UserManuals/Globalization/',
                  },
                ]
              },
            ]
          },
          {
            text: '⚖️ Contracts',
            link: '/NL/Contracts/',
            children: [
            ]
          },
        ]
      },
      '/FR/': {
        lang: 'fr-FR',
        selectLanguageName: 'Français',
        title: 'Manuels LBRP',
        description: 'Manuels LBRP'
      },
    }
  }),
  bundler: viteBundler(),
})
