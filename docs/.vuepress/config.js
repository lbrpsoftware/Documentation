import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: 'Corporate Software - Manuals, FAQ, Tutorials',

  locales: {
    '/EN/': {
      lang: 'en-US',
      title: 'Corporate Software Manuals',
      description: 'Corporate Software Manuals'
    },
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
        title: 'Corporate Software Manuals',
        description: 'Corporate Software Manuals',
        sidebar: [
          {
            text: '🖥️ Desktop Applications',
            link: '/EN/Desktop/',
            collapsed: true,
            children: [
              {
                text: '📚 User Manuals',
                link: '/EN/Desktop/UserManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'AccoWin',
                    link: '/EN/Desktop/UserManuals/AccoWin/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Installation',
                        link: '/EN/Desktop/UserManuals/AccoWin/Installation/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/EN/Desktop/UserManuals/AccoWin/BackupDatabase/',
                      },
                      {
                        text: 'Intervat',
                        link: '/EN/Desktop/UserManuals/AccoWin/Intervat/',
                      },
                      {
                        text: 'Belco Tax',
                        link: '/EN/Desktop/UserManuals/AccoWin/BelcoTax/',
                      },
                      {
                        text: 'Coda',
                        link: '/EN/Desktop/UserManuals/AccoWin/Coda/',
                      },
                      {
                        text: 'Profit Margin',
                        link: '/EN/Desktop/UserManuals/AccoWin/ProfitMargin/',
                      },
                    ]
                  },
                  {
                    text: 'BelcoFin',
                    link: '/EN/Desktop/UserManuals/BelcoFin/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Installation',
                        link: '/EN/Desktop/UserManuals/BelcoFin/Installation/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/EN/Desktop/UserManuals/BelcoFin/BackupDatabase/',
                      },
                      {
                        text: 'Export Wages',
                        link: '/EN/Desktop/UserManuals/BelcoFin/ExportWages/',
                      },
                      {
                        text: 'Clean Data',
                        link: '/EN/Desktop/UserManuals/BelcoFin/CleanData/',
                      },
                      {
                        text: 'SodaBox',
                        link: '/EN/Desktop/UserManuals/BelcoFin/SodaBox/',
                      },
                      {
                        text: 'Cloud',
                        link: '/EN/Desktop/UserManuals/BelcoFin/Cloud/',
                      },
                    ]
                  },
                  {
                    text: 'Finasset',
                    link: '/EN/Desktop/UserManuals/Finasset/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Installation',
                        link: '/EN/Desktop/UserManuals/Finasset/Installation/',
                      },
                      {
                        text: 'License',
                        link: '/EN/Desktop/UserManuals/Finasset/License/',
                      },
                      {
                        text: 'Share Application',
                        link: '/EN/Desktop/UserManuals/Finasset/ShareClient/',
                      },
                      {
                        text: 'Backup Database',
                        link: '/EN/Desktop/UserManuals/Finasset/BackupDatabase/',
                      },
                      {
                        text: 'Migrate',
                        link: '/EN/Desktop/UserManuals/Finasset/Migrate/',
                      },
                    ]
                  },
                  {
                    text: 'Corporate Desk',
                    link: '/EN/Desktop/UserManuals/CorpDesk/',
                    collapsed: true,
                    children: [
                    ]
                  },
                ]
              },
              {
                text: '🗯️ Frequently Asked Questions',
                link: '/EN/Desktop/FAQ/',
                collapsed: true,
                children: [
                  {
                    text: 'AccoWin',
                    link: '/EN/Desktop/FAQ/AccoWin/',
                  },
                  {
                    text: 'BelcoFin',
                    link: '/EN/Desktop/FAQ/BelcoFin/',
                  },
                  {
                    text: 'Finasset',
                    link: '/EN/Desktop/FAQ/Finasset/',
                  },
                  {
                    text: 'Corporate Desk',
                    link: '/EN/Desktop/FAQ/CorpDesk/',
                  },
                  {
                    text: 'General',
                    link: '/EN/Desktop/FAQ/General/',
                  },
                ]
              },
              {
                text: '⁉️ Other',
                link: '/EN/Desktop/Other/',
                collapsed: true,
                children: [
                ]
              },
            ]
          },
          {
            text: '🌐 Cloud Platform',
            link: '/EN/Cloud/',
            collapsed: true,
            children: [
              {
                text: '📚 User Manuals',
                link: '/EN/Cloud/UserManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'Identity',
                    link: '/EN/Cloud/UserManuals/Identity/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Users',
                        link: '/EN/Cloud/UserManuals/Identity/Users/',
                      },
                      {
                        text: 'Organizations',
                        link: '/EN/Cloud/UserManuals/Identity/Organizations/',
                      },
                      {
                        text: 'Members',
                        link: '/EN/Cloud/UserManuals/Identity/Members/',
                      },
                      {
                        text: 'Applications',
                        link: '/EN/Cloud/UserManuals/Identity/Applications/',
                      },
                      {
                        text: 'Invoices',
                        link: '/EN/Cloud/UserManuals/Identity/Invoices/',
                      },
                      {
                        text: 'Menu',
                        link: '/EN/Cloud/UserManuals/Identity/Menu/',
                      },
                    ]
                  },
                  {
                    text: 'Document',
                    link: '/EN/Cloud/UserManuals/Document/',
                  },
                  {
                    text: 'Relation',
                    link: '/EN/Cloud/UserManuals/Relation/',
                  },
                  {
                    text: 'Catalog',
                    link: '/EN/Cloud/UserManuals/Catalog/',
                  },
                  {
                    text: 'Scrada',
                    link: '/EN/Cloud/UserManuals/Scrada/',
                  },
                  {
                    text: 'Books',
                    link: '/EN/Cloud/UserManuals/Books/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Upload',
                        link: '/EN/Cloud/UserManuals/Books/Upload/',
                      },
                      {
                        text: 'Manage',
                        link: '/EN/Cloud/UserManuals/Books/Manage/',
                      },
                      {
                        text: 'View',
                        link: '/EN/Cloud/UserManuals/Books/View/',
                      },
                      {
                        text: 'AI',
                        link: '/EN/Cloud/UserManuals/Books/AI/',
                      },
                    ]
                  },
                  {
                    text: 'Globalization',
                    link: '/EN/Cloud/UserManuals/Globalization/',
                  },
                  {
                    text: 'Connections',
                    collapsed: true,
                    children: [
                      {
                        text: 'Companyweb',
                        link: '/EN/Cloud/UserManuals/CompanyWeb/',
                      },
                      {
                        text: 'CreditSafe',
                        link: '/EN/Cloud/UserManuals/CreditSafe/',
                      },
                      {
                        text: 'Vies',
                        link: '/EN/Cloud/UserManuals/Vies/',
                      },
                      {
                        text: 'Octopus',
                        link: '/EN/Cloud/UserManuals/Octopus/',
                      },
                      {
                        text: 'SodaBox',
                        link: '/EN/Cloud/UserManuals/SodaBox/',
                      },
                      {
                        text: 'Fod',
                        link: '/EN/Cloud/UserManuals/Fod/',
                      },
                      {
                        text: 'Providers',
                        link: '/EN/Cloud/UserManuals/Provider/',
                        collapsed: true,
                        children: [
                          {
                            text: 'Billit',
                            link: '/EN/Cloud/UserManuals/Provider/Billit/',
                          },
                          {
                            text: 'BillToBox',
                            link: '/EN/Cloud/UserManuals/Provider/BillToBox/',
                          },
                          {
                            text: 'Blox',
                            link: '/EN/Cloud/UserManuals/Provider/Blox/',
                          },
                          {
                            text: 'Breex',
                            link: '/EN/Cloud/UserManuals/Provider/Breex/',
                          },
                          {
                            text: 'ClearFact',
                            link: '/EN/Cloud/UserManuals/Provider/ClearFact/',
                          },
                          {
                            text: 'CodaBox',
                            link: '/EN/Cloud/UserManuals/Provider/CodaBox/',
                          },
                          {
                            text: 'CodaClean',
                            link: '/EN/Cloud/UserManuals/Provider/CodaClean/',
                          },
                          {
                            text: 'CoManage',
                            link: '/EN/Cloud/UserManuals/Provider/CoManage/',
                          },
                          {
                            text: 'Dexxter',
                            link: '/EN/Cloud/UserManuals/Provider/Dexxter/',
                          },
                          {
                            text: 'Doccle',
                            link: '/EN/Cloud/UserManuals/Provider/Doccle/',
                          },
                          {
                            text: 'EenvoudigFactureren',
                            link: '/EN/Cloud/UserManuals/Provider/EenvoudigFactureren/',
                          },
                          {
                            text: 'MyFact',
                            link: '/EN/Cloud/UserManuals/Provider/MyFact/',
                          },
                          {
                            text: 'Odoo',
                            link: '/EN/Cloud/UserManuals/Provider/Odoo/',
                          },
                          {
                            text: 'OkiOki',
                            link: '/EN/Cloud/UserManuals/Provider/OkiOki/',
                          },
                          {
                            text: 'Onfact',
                            link: '/EN/Cloud/UserManuals/Provider/Onfact/',
                          },
                          {
                            text: 'Optedo',
                            link: '/EN/Cloud/UserManuals/Provider/Optedo/',
                          },
                          {
                            text: 'Qweon',
                            link: '/EN/Cloud/UserManuals/Provider/Qweon/',
                          },
                          {
                            text: 'Salieri',
                            link: '/EN/Cloud/UserManuals/Provider/Salieri/',
                          },
                          {
                            text: 'Scrada',
                            link: '/EN/Cloud/UserManuals/Provider/Scrada/',
                          },
                          {
                            text: 'TeamLeader',
                            link: '/EN/Cloud/UserManuals/Provider/TeamLeader/',
                          },
                          {
                            text: 'Yuki',
                            link: '/EN/Cloud/UserManuals/Provider/Yuki/',
                          },
                          {
                            text: 'ZenFactuur',
                            link: '/EN/Cloud/UserManuals/Provider/ZenFactuur/',
                          },
                        ]
                      },
                    ]
                  },
                ]
              },
              {
                text: '🦄 Developer Manuals',
                link: '/EN/Cloud/DevManuals/',
                collapsed: true,
                children: [
                  {
                    text: 'Identity',
                    link: '/EN/Cloud/DevManuals/Identity/',
                  },
                  {
                    text: 'Fod',
                    link: '/EN/Cloud/DevManuals/Fod/',
                  },
                  {
                    text: 'Testing Documents',
                    link: '/EN/Cloud/DevManuals/Documents/',
                  },
                  {
                    text: 'Testing SFTP and E-mail inbound',
                    link: '/EN/Cloud/DevManuals/Common/',
                  },
                  {
                    text: 'Testing Scrada inbound',
                    link: '/EN/Cloud/DevManuals/Scrada/',
                  },
                  {
                    text: 'Code',
                    link: '/EN/Cloud/DevManuals/Code/',
                    collapsed: true,
                    children: [
                      {
                        text: 'Delphi',
                        link: '/EN/Cloud/DevManuals/Code/Delphi/',
                      },
                      {
                        text: 'Curl',
                        link: '/EN/Cloud/DevManuals/Code/Curl/',
                      },
                      {
                        text: 'C#',
                        link: '/EN/Cloud/DevManuals/Code/CSharp/',
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            text: '⚖️ Contracts',
            link: '/EN/Contracts/',
            collapsed: true,
            children: [
              {
                text: 'AI Transparency Policy',
                link: '/EN/Contracts/AITransparancyPolicy/',
              },
              {
                text: 'Cookie Policy',
                link: '/EN/Contracts/CookiePolicy/',
              },
              {
                text: 'Data Processing Agreement',
                link: '/EN/Contracts/DPA/',
              },
              {
                text: 'GDPR',
                link: '/EN/Contracts/GDPR/',
              },
              {
                text: 'Privacy Policy',
                link: '/EN/Contracts/PrivacyPolicy/',
              },
              {
                text: 'Terms of Service',
                link: '/EN/Contracts/TermsOfService/',
              },
            ]
          },
        ]
      },
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
                      {
                        text: 'Rappels',
                        link: '/NL/Desktop/UserManuals/AccoWin/Rappels/',
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
                    text: 'Documenten testen',
                    link: '/NL/Cloud/DevManuals/Documents/',
                  },
                  {
                    text: 'SFTP en Ee-mail inbound testen',
                    link: '/NL/Cloud/DevManuals/Common/',
                  },
                  {
                    text: 'Scrada inbound testen',
                    link: '/NL/Cloud/DevManuals/Scrada/',
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
