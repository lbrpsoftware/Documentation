# Desktop - AccoWin - FOD (MyMinFin, Intervat & Belcotax)

## 1. Inleiding

Via de LBRP Cloud wisselt AccoWin documenten uit met de **FOD Financiën** (Federale Overheidsdienst). De cloud staat in voor de volledige communicatie met de FOD:

- **MyMinFin-documenten** (inkomend): de cloud haalt de documenten uit uw MyMinFin-postbus op en AccoWin downloadt ze lokaal.
- **Intervat btw-aangiften** (uitgaand): de aangiften worden via de cloud ingediend bij de FOD.
- **Belcotax fiches 281.20 en 281.50** (uitgaand): de fiches worden via de cloud ingediend bij Belcotax-On-Web (BOW).

## 2. Voorwaarden

- Er is een LBRP Cloud abonnement en u bent ingelogd in de cloud (menu Connect).
- De toepassing **FOD** is geactiveerd voor uw organisatie. Dit kan in AccoWin via de cloud-instellingen (tabblad Applications) of in de LBRP Cloud zelf (Organization - Applications).
- Er is eenmalig een **itsme**-verbinding met de FOD gemaakt via de LBRP Cloud. Dit gebeurt normaal slechts één keer. Zie [FOD](../../../../Cloud/UserManuals/Fod/README.md) in het gedeelte over de LBRP Cloud.
- Voor het versturen van aangiften en fiches is er reeds een definitief XML-bestand aangemaakt.

## 3. MyMinFin-documenten ophalen

Selecteer het menu **Connect - MyMinFin Documents**. AccoWin werkt standaard met de organisatie van het openstaande dossier (bovenaan ziet u Organization, Dossier en BTWNr.).

### 3.1 Tabblad Inbound

- Met **Refresh** haalt u de beschikbare documenten op uit de cloud.
- Met het vinkje **Only not Downloaded** toont AccoWin enkel de documenten die nog niet werden gedownload. Zet u het vinkje uit, dan filtert u op de datum **Search after...** (standaard 7 dagen terug).
- Verwerpte documenten worden met een groene achtergrond weergegeven.
- Selecteer de documenten die u wil downloaden (met de selecteerknoppen kiest u alle of geen regels) en klik op **Download**.

AccoWin bewaart de gedownloade bestanden in de downloadmap, per btw-nummer van het dossier in een eigen submap. De bestandsnaam wordt uniek gemaakt met de datum van het document en zo nodig een volgnummer, zodat niets wordt overschreven. Gedownloade documenten worden in de cloud als verwerkt gemarkeerd en verschijnen daarna niet meer bij **Only not Downloaded**. Het resultaat per bestand verschijnt in het statusvenster; de voortgang ziet u in de tijdbalk.

Dubbelklik op een regel om het bestand te openen.

### 3.2 Tabblad Downloads

Op het tabblad **Downloads** beheert u de gedownloade bestanden:

- **Root Directory**: de map waar de documenten worden bewaard.
- **Archive**: verplaatst de geselecteerde bestanden naar de submap Archived.
- **Delete**: verwijdert de geselecteerde bestanden.
- Dubbelklik opent het geselecteerde bestand.

## 4. BTW-aangiften indienen (Intervat)

Selecteer het menu **Intervat - Intervat Documents Upload**.

### 4.1 Tabblad Send

- Kies bij **Type** het type aangifte. Enkel **BTW-aangiftes** wordt momenteel ondersteund door de FOD; de andere types zijn niet actief.
- AccoWin toont de aangiften van het huidige boekjaar waarvoor een definitief XML-bestand bestaat en die nog niet werden verzonden.
- Selecteer de aangiften die u wil doorsturen en voeg ze toe aan de verzendlijst met de pijlknoppen (enkele of alle regels).
- Klik op **Send to Intervat** om de bestanden te uploaden naar de LBRP Cloud.

De cloud dient de aangiften daarna in bij de FOD. Dit gebeurt niet onmiddellijk: de cloud stuurt de aangiften periodiek door. De status volgt u op via het tabblad Outbound. Fouten worden in het statusvenster getoond.

### 4.2 Tabblad Outbound

Op het tabblad **Outbound** volgt u per aangifte de status op:

- **Pending**: het bestand werd ontvangen door de cloud en wordt verwerkt.
- **Created**: de aangifte werd doorgestuurd naar de FOD en verwerkt.
- **Error**: er is een fout opgetreden; de toelichting vindt u in de kolom Remark.

Met de vinkjes **Created** en **Error** en de datumfilter **"Created" older than** bepaalt u welke aangiften worden getoond (standaard 2 dagen terug). Klik op **Refresh** om de actuele status op te halen.

## 5. Fiches 281.20 / 281.50 indienen (Belcotax-On-Web)

Vanaf inkomstenjaar 2026 gebruikt de FOD Financiën voor de fiscale fiches **281.20** (bezoldigingen bedrijfsleiders) en **281.50** (commissies, makelaarslonen, handelsrestorno's, vacatiegelden, erelonen) de nieuwe toepassing **Belcotax-On-Web (BOW)**. Het XML-bestand dat AccoWin aanmaakt kan hiervoor niet langer manueel worden geüpload via de website, maar wordt via de **LBRP Cloud** ingediend.

De LBRP Cloud zet het XML-bestand om naar het nieuwe BOW-formaat (JSON Lines), dient het in bij de FOD via de bulk API, volgt de asynchrone validatie op en verwittigt de leden van de organisatie per e-mail.

Selecteer het menu **Belcotax - Belcotax Fiches Upload (BOW)**.

### 5.1 Verzenden (tabblad Send)

Op het tabblad **Send** kiest u het inkomstenjaar. Met de vinkjes **Fiches 281.20** en **Fiches 281.50** bepaalt u welke soorten fiches worden getoond. AccoWin toont alle verzendingen van het geselecteerde inkomstenjaar waarvoor een definitief XML-bestand bestaat:

- **VerzendNr**: volgnummer van de verzending.
- **Indiendatum**: datum waarop het XML-bestand werd aangemaakt.
- **BestandsNaam**: het volledige pad van het XML-bestand.
- **SoortFiche**: het type fiche (281.20 / 281.50).
- **IdentificatieNr / Aanvaard**: het identificatienummer van de FOD zoals u het eventueel al manueel registreerde.
- **VorigeVerzendingID**: ingevuld bij een gegroepeerde verbetering (een correctie op een eerdere verzending).

Selecteer de verzending(en) die u wil doorsturen en voeg ze toe aan de verzendlijst met de pijlknoppen (enkele of alle regels). Klik vervolgens op **Send to Belcotax**.

Opmerking: er wordt alleen het **XML-bestand** doorgestuurd. Het ZIP-bestand dat AccoWin optioneel naast het XML-bestand aanmaakt is enkel bedoeld voor de manuele webflow.

### 5.2 Opvolgen van de verzending (tabblad Outbound)

De indiening bij de FOD gebeurt asynchroon. Op het tabblad **Outbound** volgt u de status op per document:

- **Pending**: het bestand werd ontvangen door de cloud en wordt verwerkt.
- **Submitted**: het bestand werd ingediend bij de FOD en wacht op de validatie.
- **Accepted**: de FOD heeft de verzending goedgekeurd.
- **Error**: er is een fout opgetreden; bij de regel staat een toelichting in de kolom Remark. De leden van de organisatie ontvangen hierover ook een e-mail.

Met de vinkjes (Created, Accepted, Error) en de datumfilter kunt u bepalen welke statussen en periode worden getoond. Klik op **Refresh** om de actuele status op te halen.

Selecteer één of meer verzendingen in de lijst en klik op **Download JSON** om de JSON-variant van een doorgestuurd XML-bestand te downloaden. De cloud haalt het bewaarde XML-bestand op, zet het om naar het nieuwe BOW-formaat (JSON Lines) en slaat het resultaat op in de map waar ook de Belcotax-opgaven worden bewaard. Het bestand krijgt dezelfde naam als het XML-bestand, maar met de extensie `.jsonl`. Bestaat het bestand al, dan wordt er een volgnummer toegevoegd, zodat niets wordt overschreven.

Opmerking: dit is enkel een omzetting en download. Er wordt niets ingediend bij de FOD; gebruik hiervoor het tabblad Send.

## 6. Zie ook

- [FOD in de LBRP Cloud](../../../../Cloud/UserManuals/Fod/README.md) - de toepassing activeren en de eenmalige itsme-aanmelding
- [Intervat](../Intervat/README.md) - btw-aangiften aanmaken
- [Belco Tax](../BelcoTax/README.md) - Belcotax fiches aanmaken