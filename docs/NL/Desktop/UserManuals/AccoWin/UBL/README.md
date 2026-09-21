# Desktop - AccoWin - UBL

## 1 Algemeen

UBL (Universal Business Language) is de standaard voor elektronische facturen in XML-formaat. **AccoWin** leest UBL-facturen in (aankoop en verkoop), boek ze in de juiste dagboeken en kan uw verkoopfacturen ook zelf als UBL versturen, onder meer via het Europese **Peppol**-netwerk.

Alle UBL-functies vindt u terug in het menu **UBL** van het hoofdscherm:

- <ins>Instellingen UBL</ins>: de opties en mappen voor het verwerken van UBL-facturen (zie punt 2).
- <ins>UBL File Explorer</ins>: het dashboard om UBL-bestanden te bekijken en te beheren (zie punt 3).
- <ins>Import UBL from Cloud Platform</ins>: UBL- en PDF-documenten downloaden uit de LBRP Cloud (Peppol, FTP, PEP-IT) (zie punt 4).
- <ins>Inlezen UBL Bestanden</ins>: de gedownloade of binnengekomen UBL-facturen inboeken in de dagboeken (zie punt 5).
- <ins>Send UBL to Peppol</ins>: UBL-bestanden versturen via Peppol en de verzendingen opvolgen (zie punt 6).
- <ins>Conversion (PDF <-> UBL)</ins>: PDF's of afbeeldingen met AI omzetten naar UBL (en omgekeerd) (zie punt 7).

De menuopties zijn enkel actief als:

- er een boekjaar en dossier geselecteerd is;
- de licentie voor UBL inlezen actief is;
- de gebruiker de bijhorende rechten heeft (<ins>UBL instellingen</ins>, <ins>UBL bestanden lezen</ins>, <ins>UBL exporteren</ins>).

Verder bestaat in het menu **Verkoop** de optie <ins>Exporteer verkopen naar UBL</ins> om verkoopfacturen als UBL-bestand te exporteren.

## 2 Instellingen UBL

Het venster **Opties inlezen UBL facturen** opent u via menu **UBL** > **Instellingen UBL**. Via <ins>Bewaren</ins> slaat u de instellingen op, met <ins>Annuleren</ins> sluit u zonder te bewaren.

### 2.1 Algemeen

- <ins>Wachtrekening niet toegewezen verrichtingen (BTW code = NB)</ins>: de grootboekrekening voor verrichtingen die niet automatisch aan een rekening toegewezen konden worden.
- <ins>Zoeken naar UBL bestanden bij openen dossier</ins>: bij het openen van een dossier wordt meteen gecontroleerd of er nieuwe UBL-bestanden klaarstaan.
- <ins>Directory verplaatste UBL facturen</ins>: de map waarheen verplaatste facturen gaan.
- <ins>Default extensies voor UBL bestanden (punt mee vermelden!)</ins>: de bestandsextensies die als UBL herkend worden, bijvoorbeeld <ins>.xml</ins>.
- <ins>Automatisch het volgende UBL-bestand openen</ins>: na het inboeken van een factuur wordt meteen de volgende geopend.
- <ins>Automatisch het PDF bestand openen</ins>: het bijbehorende PDF-bestand wordt bij het inboeken getoond.
- <ins>Set Default Folders...</ins> / <ins>Reset Folders</ins> / <ins>Set Default Values</ins>: de mappen en waarden herstellen naar de standaardinstellingen.

### 2.2 Verkoopfacturen

- <ins>Omzetrekening verkopen</ins>, <ins>Rekening korting kontant</ins> en <ins>Verkopen buiten BTW</ins>: de standaard grootboekrekeningen (de laatste twee met BTW code NB).
- <ins>Dagboek verkopen</ins> en <ins>Dagboek kredietnota's verkopen</ins>: de dagboeken waarin de verkoopfacturen geboekt worden.
- <ins>Directory te verwerken UBL</ins>: de map met verkoopfacturen die wachten op verwerking.
- <ins>Directory verwerkte UBL facturen</ins>: nadat een factuur verwerkt is, wordt ze naar deze map verplaatst. <ins>Deze map is read-only: er kunnen geen bestanden toegevoegd, gewist of verplaatst worden.</ins>
- <ins>Directory met later te verwerken facturen</ins>: facturen die u bewust uitstelt, bijvoorbeeld tot een volgende periode.
- <ins>Toekennen factuurnummer</ins>: hoe het AccoWin-factuurnummer toegekend wordt.
- <ins>Stempel met boekingsdocument aanbrengen in PDF</ins>: het boekingsdocument wordt als stempel in de PDF geplaatst.
- <ins>Controleren op vreemde munt bij inlezen UBL (waarschuwing tonen)</ins>: een waarschuwing als de factuur in een andere munt staat dan de munt van het dossier.

### 2.3 Aankoopfacturen

Dezelfde instellingen als bij de verkoopfacturen, maar dan voor aankopen: de grootboekrekeningen (<ins>Grootboekrekening aankopen</ins>, <ins>Rekening korting kontant</ins>, <ins>Aankopen buiten BTW</ins>), de dagboeken, de mappen (<ins>te verwerken</ins>, <ins>verwerkte</ins> en <ins>later te verwerken</ins>) en de opties voor de stempel en de vreemde munt. Daarnaast:

- <ins>Default BTW code aankopen BTW medecontractant</ins>: de standaard BTW-code voor aankopen bij een medecontractant.
- <ins>Default BTW code intracom aankopen</ins>: de standaard BTW-code voor intracommunautaire aankopen.

## 3 UBL File Explorer (dashboard)

De **UBL File Explorer** opent u via menu **UBL** > **UBL File Explorer**. Dit is het dashboard om de UBL-mappen te bekijken en te beheren.

### 3.1 Bestanden bekijken

- Linksboven kiest u met <ins>Verkoop / Aankoop</ins> tussen de map met verkoopfacturen en de map met aankoopfacturen uit de UBL-instellingen.
- Het pad boven de bestandslijst toont de map die u aan het bekijken bent. Zijn de mappen nog niet ingesteld, dan verschijnt de melding <ins>UBL FOLDERS NOT YET CONFIGURED</ins>.
- Met de vinkjes <ins>UBL</ins>, <ins>PDF</ins> en <ins>PNG</ins> filtert u de bestandslijst op bestandstype.
- Onder de bestandslijst ziet u de <ins>mappen</ins> onder de gekozen hoofdmap. Klik op een map om haar inhoud te tonen.

Selecteer een <ins>.xml</ins>-bestand om het te ontleden. Rechts verschijnen de tabs:

- <ins>Info</ins>: de belangrijkste velden van de factuur (documentnummer, data, bedragen, leverancier, klant).
- <ins>Lines</ins>: de factuurlijnen met omschrijving, aantal, prijs, bedrag en BTW.
- <ins>Extra</ins>: aanvullende gegevens zoals betaalwijze, IBAN, adressen en totalen.
- <ins>XML</ins>: de ruwe XML-tekst van het bestand (alleen lezen).

### 3.2 Zoeken op factuurinfo

Met het <ins>Filter</ins>-veld zoekt u in de bestandslijst op de inhoud van de facturen: de bestandsnaam én de velden van de tab <ins>Info</ins> (documentnummer, namen, BTW-nummers, bedragen...). Het filter is niet hoofdlettergevoelig en werkt alleen op <ins>.xml</ins>-bestanden. Met <ins>Exclude</ins> keert u de selectie om: alle bestanden die <ins>niet</ins> voldoen, worden getoond. Bij het filterlabel staat het aantal treffers.

### 3.3 Bestanden beheren

Met een rechtermuisklik op een bestand opent u het menu:

- <ins>Open</ins>: het bestand openen ter weergave (bijvoorbeeld een PDF).
- <ins>Move to</ins>: het bestand verplaatsen naar een andere map.
- <ins>Delete</ins>: het bestand wissen (samen met een eventueel gelijknamig <ins>.pdf</ins>-bestand), na bevestiging.

Met een rechtermuisklik op de mappenlijst maakt u een nieuwe map, of hernoemt of wist u een bestaande map (wissen gebeurt met heel haar inhoud).

Met de knop <ins>toevoegen</ins> kopieert u bestanden vanuit een dialoogvenster naar de map die u aan het bekijken bent.

### 3.4 Bijlagen (embedded documents)

UBL-facturen kunnen bijlagen bevatten, bijvoorbeeld de PDF van de factuur. Deze verschijnen in de lijst <ins>embedded documents</ins>:

- Dubbelklik op een bijlage om ze te bewaren naast het XML-bestand en te openen.
- Met een rechtermuisklik kunt u een bijlage <ins>openen</ins>, een nieuwe bijlage <ins>toevoegen</ins> of een bestaande <ins>verwijderen</ins> (dit past het XML-bestand aan, zie punt 3.6).

### 3.5 Naar Peppol en conversie

- <ins>Send to Peppol</ins>: opent het venster <ins>Send UBL's to Peppol</ins> (zie punt 6) met het geselecteerde bestand al klaargezet in de verzendlijst.
- <ins>Convert</ins>: opent het conversievenster (zie punt 7) met de tab <ins>Converts</ins> gefilterd op het huidige bestand.
- <ins>Import from Cloud</ins>: downloadt nieuwe documenten uit de LBRP Cloud (zie punt 4) en vernieuwt daarna de bestandslijst.
- <ins>Analyze</ins>: laat de AI het geselecteerde bestand analyseren; kies eerst het <ins>AI-model</ins> in het keuzeveld. Hiervoor is een actieve cloudverbinding nodig.

### 3.6 Beveiliging

- De <ins>verwerkte</ins> mappen uit de UBL-instellingen (verkoop en aankoop) zijn <ins>read-only</ins>: u kunt er bestanden bekijken en openen, maar niet toevoegen, wissen, verplaatsen of bewerken. Ook de map zelf kan niet hernoemd of verwijderd worden.
- Het aanpassen van XML-bestanden — factuurgegevens bewerken en opslaan, bijlagen toevoegen of verwijderen — kan enkel door een gebruiker met de rol <ins>Beheerder</ins> of <ins>Superuser</ins>. Voor andere gebruikers zijn de bewerkbare velden en de knop <ins>bewaren</ins> uitgeschakeld.

## 4 Import UBL from Cloud Platform

Via menu **UBL** > **Import UBL from Cloud Platform** opent u het venster <ins>Download UBL</ins>. Hiermee haalt u nieuwe UBL- en PDF-documenten binnen vanuit de LBRP Cloud:

- <ins>Import From Peppol</ins>: de via Peppol binnengekomen facturen.
- <ins>Import From 3th-Party (FTP)</ins>: documenten die via een externe FTP-partner binnenkomen.
- <ins>Import from PEP-IT</ins>: documenten via PEP-IT.

Bovenaan ziet u de <ins>Organization</ins>, het <ins>Dossier</ins>, het <ins>BTW nummer</ins> en het <ins>E-mail</ins>-adres waarmee u op het cloudplatform geregistreerd staat. Met <ins>Save Status</ins> bewaart u de status van de download. Met <ins>FTP...</ins> en <ins>SMTP...</ins> stelt u indien nodig de FTP- en SMTP-gegevens in.

De gedownloade bestanden worden in de bij de UBL-instellingen horende <ins>te verwerken</ins>-mappen geplaatst. Daarna boek u ze in via <ins>Inlezen UBL Bestanden</ins> (zie punt 5).

## 5 Inlezen UBL bestanden (inboeken)

Via menu **UBL** > **Inlezen UBL Bestanden** opent u het venster <ins>UBL facturen</ins>. Hier leest u de klaarstaande facturen in en boekt u ze in de dagboeken.

- Links staat de lijst met de UBL-bestanden die wachten op verwerking, met per bestand het voorgestelde <ins>dagboek</ins> en de <ins>periode</ins>.
- Selecteer één of meer bestanden. Met <ins>Alles selecteren</ins> en <ins>Selectie wissen</ins> zet u de selectie in één keer aan of uit.
- Met <ins>Alle dagboeken wijzigen</ins> wijzigt u in één keer het dagboek van alle geselecteerde facturen (bijvoorbeeld alles naar het dagboek aankopen).
- Voor het geselecteerde bestand ziet u rechts de <ins>Info factuur</ins>: dagboek, datum, nummer, periode en bedrag. U past deze waarden aan vóór het inboeken. Bij <ins>Fout</ins> verschijnt een foutmelding als het bestand niet gelezen kon worden.
- Controleer de herkende <ins>leverancier of klant</ins> (naam, adres, BTW nummer). Met <ins>KBO</ins> zoekt u de onderneming op het KBO-nummer; bestaat de relatie nog niet, dan kunt u ze aanmaken. Met <ins>Tel.</ins> en <ins>E-mail</ins> vult u de contactgegevens aan.
- Bij <ins>Rek. nr</ins> staat de uitsplitsing van de factuurlijnen: rekeningnummer, omschrijving, BTW-code, percentage en totaal BTW.
- <ins>PDF</ins>: het bij de factuur horende PDF-bestand bekijken.
- <ins>Verplaatsen</ins>: het geselecteerde bestand verplaatsen, bijvoorbeeld naar de map <ins>later te verwerken</ins>.
- <ins>Facturen inboeken</ins>: de geselecteerde facturen in het gekozen dagboek en de periode inboeken. Afhankelijk van de UBL-instellingen wordt daarna meteen het volgende bestand geopend.
- In het venster <ins>Fouten bij inlezen</ins> ziet u de bestanden die niet ingeboekt konden worden, met de reden.

Ingeboekte facturen worden automatisch naar de <ins>map met verwerkte facturen</ins> verplaatst.

## 6 Send UBL to Peppol

Via menu **UBL** > **Send UBL to Peppol** opent u het venster <ins>Send UBL's to Peppol</ins>. Hiermee verstuurt u uw UBL-verkoopfacturen over het Peppol-netwerk en volgt u de verzendingen op.

### 6.1 Send (versturen)

- Kies links de <ins>Directory te verwerken UBL</ins>: de map waaruit u facturen wilt versturen.
- Selecteer de te versturen bestanden in de lijst en voeg ze met <ins>toevoegen</ins> toe aan de verzendlijst rechts. Met de knoppen eronder voegt u <ins>alle</ins> bestanden toe of verwijdert u (een deel van) de verzendlijst.
- Bovenaan controleert u de <ins>Organization</ins>, het <ins>Dossier</ins> en het <ins>BTW nummer</ins> waarmee de facturen op Peppol geregistreerd worden. Dit zijn de gegevens van uw registratie op het LBRP Cloud platform.
- Met <ins>Send</ins> worden de bestanden in de verzendlijst één voor één naar Peppol gestuurd. De voortgang verschijnt in de statusbalk.

### 6.2 Outbound (opvolgen)

Op de tab <ins>Outbound</ins> volgt u de verzonden documenten op:

- <ins>State</ins>: filter op <ins>Created</ins> (verstuurd, wachtend), <ins>Processed</ins> (verwerkt), <ins>Error</ins> (fout), <ins>Not On Peppol</ins> (niet op Peppol terechtgekomen) of <ins>Other</ins>.
- <ins>"Created" older than</ins>: toon enkel documenten die ouder zijn dan een gekozen periode, bijvoorbeeld om trage leveringen op te sporen.
- <ins>Refresh</ins>: de lijst vernieuwen.

## 7 Conversion (PDF <-> UBL) met AI

Via menu **UBL** > **Conversion (PDF <-> UBL)** opent u het venster <ins>Convert To UBL</ins>. Hiermee laat u de AI van het LBRP Cloud platform facturen omzetten tussen formaten:

- een <ins>PDF</ins> (of een afbeelding, <ins>.png</ins> / <ins>.jpg</ins>) omzetten naar een UBL-bestand (<ins>.xml</ins>);
- een UBL-bestand omzetten naar een PDF.

### 7.1 Send (omzetten aanvragen)

- Kies eerst het <ins>AI-model</ins> voor de conversie (de lijst wordt automatisch uit de cloud geladen; is er geen verbinding, dan blijft de lijst leeg).
- Kies links de <ins>Directory te verwerken UBL</ins> en selecteer de bestanden die u wilt omzetten. Met de vinkjes <ins>UBL (.xml)</ins>, <ins>PDF</ins> en <ins>Afbeeldingen</ins> filtert u op bestandstype.
- Voeg de selectie toe aan de lijst en klik op <ins>Send to Conversion Tool</ins>. De bestanden worden naar de cloud gestuurd en de conversie start.

### 7.2 Converts (opvolgen)

Op de tab <ins>Converts</ins> volgt u de conversies op:

- <ins>State</ins>: filter op <ins>Pending</ins> (in behandeling), <ins>Processed</ins> (afgerond) of <ins>Failed</ins> (mislukt).
- <ins>"Created" older than</ins>: enkel conversies ouder dan een gekozen periode tonen.
- <ins>Refresh</ins>: de lijst vernieuwen.
- <ins>Download</ins>: het resultaat van een conversie downloaden naar uw UBL-map.
- <ins>Delete</ins>: een conversie uit de lijst verwijderen.

Met de knop <ins>Api-Keys</ins> beheert u de API-sleutels van de cloudverbinding.

## 8 Tips

- Werk de mappenstructuur in <ins>Instellingen UBL</ins> in het begin goed uit: de stappen downloaden, inboeken en opvolgen steunen er allemaal op.
- Controleer na het inboeken steeds de <ins>map met verwerkte facturen</ins>; daar vindt u de volledige historiek van wat al behandeld werd.
- Fouten bij het inlezen hebben meestal te maken met een onvolledige of onbekende tegenpartij; maak de relatie eerst aan en lees het bestand opnieuw in.
- Verstuur enkel facturen van klanten die op Peppol aangesloten zijn; de tab <ins>Outbound</ins> toont welke documenten niet aankwamen (<ins>Not On Peppol</ins> of <ins>Error</ins>).
