# Desktop - AccoWin - UBL

## Algemeen

UBL (Universal Business Language) is de standaard voor elektronische facturen in XML-formaat. **AccoWin** leest UBL-facturen in (aankoop en verkoop), boek ze in de juiste dagboeken en kan uw verkoopfacturen ook zelf als UBL versturen, onder meer via het Europese **Peppol**-netwerk.

Alle UBL-functies vindt u terug in het menu **UBL** van het hoofdscherm:

- <ins>Instellingen UBL</ins>: de opties en mappen voor het verwerken van UBL-facturen — zie [Instellingen UBL](Settings/README.md).
- <ins>UBL File Explorer</ins>: het dashboard om UBL-bestanden te bekijken en te beheren — zie [UBL File Explorer](Explorer/README.md).
- <ins>Import UBL from Cloud Platform</ins>: UBL- en PDF-documenten downloaden uit de LBRP Cloud (Peppol, FTP, PEP-IT) — zie [Import UBL from Cloud Platform](CloudImport/README.md).
- <ins>Inlezen UBL Bestanden</ins>: de gedownloade of binnengekomen UBL-facturen inboeken in de dagboeken — zie [Inlezen UBL bestanden](Import/README.md).
- <ins>Send UBL to Peppol</ins>: UBL-bestanden versturen via Peppol en de verzendingen opvolgen — zie [Send UBL to Peppol](SendToPeppol/README.md).
- <ins>Conversion (PDF <-> UBL)</ins>: PDF's of afbeeldingen met AI omzetten naar UBL (en omgekeerd) — zie [Conversion (PDF <-> UBL)](Conversion/README.md).

De menuopties zijn enkel actief als:

- er een boekjaar en dossier geselecteerd is;
- de licentie voor UBL inlezen actief is;
- de gebruiker de bijhorende rechten heeft (<ins>UBL instellingen</ins>, <ins>UBL bestanden lezen</ins>, <ins>UBL exporteren</ins>).

Verder bestaat in het menu **Verkoop** de optie <ins>Exporteer verkopen naar UBL</ins> om verkoopfacturen als UBL-bestand te exporteren.

## Oud handboek "Inlezen UBL"

De oudere, uitgebreide handleiding voor het scherm <ins>Inlezen UBL</ins> (`ImportUblForm`) — met schermafbeeldingen van de instellingen, de mappenstructuur en het inlezen van UBL-bestanden — vindt u in [Book/README.md](Book/README.md). De actuele beschrijving van dit scherm staat in [Inlezen UBL bestanden](Import/README.md).

## Tips

- Werk de mappenstructuur in de [UBL-instellingen](Settings/README.md) in het begin goed uit: de stappen downloaden, inboeken en opvolgen steunen er allemaal op.
- Controleer na het inboeken steeds de <ins>map met verwerkte facturen</ins>; daar vindt u de volledige historiek van wat al behandeld werd.
- Fouten bij het inlezen hebben meestal te maken met een onvolledige of onbekende tegenpartij; maak de relatie eerst aan en lees het bestand opnieuw in.
- Verstuur enkel facturen van klanten die op Peppol aangesloten zijn; de tab <ins>Outbound</ins> van [Send UBL to Peppol](SendToPeppol/README.md) toont welke documenten niet aankwamen (<ins>Not On Peppol</ins> of <ins>Error</ins>).
