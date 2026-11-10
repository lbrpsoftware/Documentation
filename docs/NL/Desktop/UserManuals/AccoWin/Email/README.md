# Desktop - AccoWin - E-mail

## 1. Inleiding

**AccoWin** verstuurt e-mails rechtstreeks uit het programma: verkoopdocumenten, rappels, fiches en verzendingen per e-mail. De tekst van die e-mails beheert u centraal; het versturen gebeurt via het scherm **Email (SMTP)**.

## 2. Teksten email

Kies **Parameters > Teksten email**. In het scherm **Email teksten** beheert u de sjablonen:

- elk sjabloon krijgt een **omschrijving** en een **referte**;
- per taak — **Nederlands, Frans, Duits, Engels** — stelt u het **onderwerp** en de **tekst** in; met **Ctrl+Enter** begint u een nieuwe lijn;
- in de tekst gebruikt u samenvoegvelden (naam klant, documentnummer, bedrag) die **AccoWin** bij verzending invult.

## 3. Een e-mail versturen

Wanneer u een document, rappel of fiche per e-mail verstuurt, opent het scherm **Email (SMTP)**:

- **Van e-mail adres** en **Van naam**: de afzender zoals de klant die ziet;
- **Aan**, **CC** en **Bcc**: de adressen, gescheiden met een puntkomma; het adres van de klant komt automatisch van zijn fiche;
- **Onderwerp**: standaard uit het sjabloon;
- **Bijlagen**: het document zelf, als PDF;
- **Bericht**: de e-mailtekst (Ctrl+Enter voor een nieuwe lijn);
- **Prioriteit** en **Leesbevestiging**: de urgentie en een bevestiging wanneer de klant de mail opent.

## 4. E-mail merge bij verzendingen

Bij het [verzenden van documenten](../Invoicing/SalesDocuments/README.md) en [rappels](../Rappels/README.md) in serie gebruikt **AccoWin** de sjablonen van **Teksten email**: elk document krijgt zijn eigen e-mail met de juiste gegevens van die klant. U kiest in de verzenddialoog het sjabloon; de bijlagen worden automatisch toegevoegd.

## 5. Show E-mail State

Via **Show E-mail State** volgt u de status van de lopende en laatste e-mailverzendingen: wat is verstuurd, wat staat nog in de wachtrij en welke fouten zijn opgetreden (foutief adres, SMTP-weigering). Gebruik dit scherm wanneer klanten melden dat zij geen e-mail ontvingen.

## 6. Tips

- Controleer het **afzenderadres**: antwoorden van klanten landen anders in een verkeerde mailbox.
- Stuur de eerste e-mail van een nieuwe sjabloon eerst naar uzelf om de opmaak en de samenvoegvelden te testen.
- De verzending loopt via de SMTP-server van uw kantoor; is de server onbereikbaar, dan blijven de mails in de wachtrij staan tot de verbinding terug is — controleer ze daarna via **Show E-mail State**.
