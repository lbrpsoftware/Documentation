import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: 'Corporate Software - Manuals, FAQ, Tutorials',

  locales: {
    // '/EN/': {
    //   lang: 'en-US',
    //   title: 'Corporate Software Manuals',
    //   description: 'Corporate Software Manuals'
    // },
    '/NL/': {
      lang: 'nl-NL',
      title: 'Corporate Software Handleidingen',
      description: 'Corporate Software Handleidingen'
    },
    '/FR/': {
      lang: 'fr-FR',
      title: 'Manuels Corporate Software',
      description: 'Manuels Corporate Software'
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
        link: 'https://corpgroup.site'
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
            link: 'https://abfapi.dev.corpgroup.site/swagger'
          },
          {
            text: 'API - Docs',
            link: 'https://abfapi.dev.corpgroup.site/api-docs'
          },
        ]
      },
      {
        text: 'Login',
        link: 'https://abfweb.corpgroup.site'
      },
    ],

    locales: {
      '/': {
        sidebar: [
          {      
            text: 'Select your Language',
            children: [
              // {
              //   text: 'English',
              //   link: '/EN/',
              // },
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
      // '/EN/': {
      //   lang: 'en-US',
      //   selectLanguageName: 'English',
      //   title: 'Corporate Software Manuals',
      //   description: 'Corporate Software Manuals',
      // },
      '/NL/': {
        lang: 'nl-NL',
        selectLanguageName: 'Nederlands',
        title: 'Corporate Software Handleidingen',
        description: 'Corporate Software Handleidingen',
        sidebar: [
          {
            text: '🖥️ Desktop Applications',
            link: '/NL/Desktop/',
            collapsed: true,
            children: [
              {
                text: '📚 Handleidingen',
                link: '/NL/Desktop/UserManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'AccoWin',
                    link: '/NL/Desktop/UserManuals/AccoWin/',
                    collapsed: true,
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
                    collapsed: true,
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
                      {
                        text: 'SodaBox',
                        link: '/NL/Desktop/UserManuals/BelcoFin/SodaBox/',
                      },
                    ]
                  },
                  {
                    text: 'Finasset',
                    link: '/NL/Desktop/UserManuals/Finasset/',
                    collapsed: true,
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
                    collapsed: true,
                    children: [
                    ]
                  },
                ]
              },
              {
                text: '🗯️ Veelgestelde vragen',
                link: '/NL/Desktop/FAQ/',
                collapsed: true,
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
                collapsed: true,
                children: [
                ]
              },
            ]
          },
          {
            text: '🌐 Cloud Platform',
            link: '/NL/Cloud/',
            collapsed: true,
            children: [
              {
                text: '📚 Gebruikers Handleidingen',
                link: '/NL/Cloud/UserManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'Identity',
                    link: '/NL/Cloud/UserManuals/Identity/',
                    collapsed: true,
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
                    text: 'Document',
                    link: '/NL/Cloud/UserManuals/Document/',
                  },
                  {
                    text: 'Relation',
                    link: '/NL/Cloud/UserManuals/Relation/',
                  },
                  {
                    text: 'Catalog',
                    link: '/NL/Cloud/UserManuals/Catalog/',
                  },                                                      
                  {
                    text: 'Scrada',
                    link: '/NL/Cloud/UserManuals/Scrada/',
                  },                                                      
                  {
                    text: 'Books',
                    link: '/NL/Cloud/UserManuals/Books/',
                    collapsed: true,
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
                  {
                    text: 'Connecties',
                    collapsed: true,
                    children: [
                      {
                        text: 'Companyweb',
                        link: '/NL/Cloud/UserManuals/CompanyWeb/',
                      },
                      {
                        text: 'CreditSafe',
                        link: '/NL/Cloud/UserManuals/CreditSafe/',
                      },
                      {
                        text: 'Vies',
                        link: '/NL/Cloud/UserManuals/Vies/',
                      },
                      {
                        text: 'Octopus',
                        link: '/NL/Cloud/UserManuals/Octopus/',
                      },
                      {
                        text: 'SodaBox',
                        link: '/NL/Cloud/UserManuals/SodaBox/',
                      },
                      {
                        text: 'Fod',
                        link: '/NL/Cloud/UserManuals/Fod/',
                      },
                      {
                        text: 'Providers',
                        link: '/NL/Cloud/UserManuals/Provider/',
                      },
                    ]
                  },
                ]
              },
              {
                text: '🦄 Developer Handleidingen',
                link: '/NL/Cloud/DevManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'Identity',
                    link: '/NL/Cloud/DevManuals/Identity/',
                  },
                  {
                    text: 'Fod',
                    link: '/NL/Cloud/DevManuals/Fod/',
                  },
                  {
                    text: 'Code',
                    link: '/NL/Cloud/DevManuals/Code/',
                  },
                ]
              },
            ]
          },
          {
            text: '⚖️ Contracts',
            link: '/NL/Contracts/',
            collapsed: true,
            children: [
            ]
          },
        ]
      },
      '/FR/': {
        lang: 'fr-FR',
        selectLanguageName: 'Français',
        title: 'Manuels Corporate Software',
        description: 'Manuels Corporate Software',
        sidebar: [
          {
            text: '🌐 Plateforme Cloud',
            link: '/FR/Cloud/',
            collapsed: true,
            children: [
              {
                text: '🦄 Manuels Développeur',
                link: '/FR/Cloud/DevManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'Identity',
                    link: '/FR/Cloud/DevManuals/Identity/',
                  },
                  {
                    text: 'Fod',
                    link: '/FR/Cloud/DevManuals/Fod/',
                  },
                  {
                    text: 'Code',
                    link: '/FR/Cloud/DevManuals/Code/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Delphi',
                        link: '/FR/Cloud/DevManuals/Code/Delphi/',
                      },
                      {
                        text: 'Curl',
                        link: '/FR/Cloud/DevManuals/Code/Curl/',
                      },
                      {
                        text: 'C#',
                        link: '/FR/Cloud/DevManuals/Code/CSharp/',
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    }
  }),
  bundler: viteBundler(),
})
