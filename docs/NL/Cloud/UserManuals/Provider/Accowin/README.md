# 02. AccoWin Cloud Instellen

## Terug naar [Hoofdmenu](../README.md) | [01. Inleiding](01-Introduction.md)

Voordat je providers kunt koppelen, stel je de cloud-configuratie in AccoWin in. Dit doe je één keer voor je hoofdorganisatie.

## Stap 1: Organisatie en Gebruiker Registreren
- Open AccoWin en volg de registratie (gebruikersnaam, wachtwoord, BTW-nummer bedrijf).
- Dit creëert automatisch een gebruiker en organisatie. Je wordt lid van je eigen organisatie.

Zie ook: [Identity Gebruikers en Organisaties](../Identity/README.md), [Registratie](../Identity/Users/register.png).

**💡 Dit scherm gebruik je zelden na eerste keer.**

## Stap 2: Peppol Applicatie Activeren
De SFTP-sync valt onder de **Peppol** applicatie.

1. Ga naar **Applicaties** in de cloud-portal.
2. Schakel **Peppol** in (prijs afhankelijk van je plan: Free/Basic/Team/Enterprise).

![Applicaties overzicht](../Identity/Applications/applications.png)

Zie: [Applicaties](../Identity/Applications/README.md).

## Stap 3: E-mail Account Aanmaken (Aanbevolen voor Kantoren)
1. In de cloud-portal: Druk op knop om e-mailaccount te maken voor je organisatie.
2. Krijg uniek e-mailadres (Org-GUID + BTW@domain).
3. Deel dit per dossier met klant: Open dossier → Toon e-mailadres (bevat BTW klant).

![Placeholder: E-mail account knop](email-create.png)

## Stap 4: SFTP Accounts Aanmaken (Voor Directe Koppeling)
**Optie A: Hoofdorganisatie (globale FTP per provider)**
- In cloud-portal: Maak FTP-account voor organisatie.

**Optie B: Per Dossier (aanbevolen voor veiligheid)**
1. Open dossier in AccoWin.
2. Ga naar **UBL-menu > Import UBL from Cloud**.
3. Kies provider → Maak SFTP-account.
4. Noteer credentials (host, poort, gebruiker, wachtwoord).

![Placeholder: Import UBL from Cloud form](import-ubl-cloud.png)

**💡 Gebruik e-mail voor veel dossiers (geen credentials delen). SFTP voor eigen beheer.**

## Klaar voor Providers?
- [03. Hoe het Werkt](03-How-It-Works.md)
- [Provider gidsen](README.md#providers)

---
*Na setup: Bestanden syncen automatisch. Download in dossier via UBL-menu.*