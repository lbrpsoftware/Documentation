# Finasset - Importeren van Data

## 1. Inleiding

Dit document beschrijft welke data en op welke manier deze data kan geïmporteerd worden in Finasset.

Data kan op 2 manieren geïmporteerd worden in Finasset. Via de grafische manier dat manueel moet gedaan worden door de gebruiker of via command line. Door gebruik te maken van command line parameters kan de import eventueel via taakplanner ingepland worden om elke dag automatisch data te importeren.

Data kan geïmporteerd worden uit een CSV bestand.

Dossiers, boekjaren, algemene rekeningen, investeringen, afschrijvingen en investeringsgroepen kunnen geïmporteerd worden in Finasset.

## 2. Hoe importeren

### 2.1 Grafisch importeren

#### 2.1.1 Selectie type import

Data kan grafisch geïmporteerd worden via Menu ▶️ Parameters ▶️ Import

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003321337/original/_5Bt2idNXPHXPaFDQL4AdYWo21Hct0aZLQ.png?1643361748)

Type Import:

- **CSV bestand**: hierbij kan een CSV bestand geselecteerd worden en geïmporteerd in Finasset.
- Andere type imports zijn voorlopig nog niet ondersteund.

Algemene instellingen tijdens import zijn:

- Type overschrijven:
  - Toevoegen en update: hierbij wordt zowel nieuwe data toegevoegd als bestaande data geupdate.
  - Enkel toevoegen: hierbij worden enkel maar nieuwe data toegevoegd, bestaande data wordt niet overschreven
  - Enkel update: hierbij wordt enkel maar bestaande data geupdate. Nieuwe data wordt niet geimporteerd.

#### 2.1.2 Import type specifieke schermen

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003321575/original/xfZQymPdS2ScZwB8p5iVUcDoEpPS4PopfQ.png?1643361899)

Bij aanvinken van vinkje gaat dit type bestand geïmporteerd worden. Indien er dus een bestandsnaam ingevuld staat maar het vinkje staat niet aan dan gaat dit niet geïmporteerd worden.

Bij het drukken op Volgende worden de ingevulde velden bewaard. Op deze manier kan eenvoudig opnieuw getest worden om te importeren zonder telkens opnieuw alle instellingen te moeten ingeven.

#### 2.1.3 Start Import

Na het invullen van de import specifieke instellingen afhankelijk van het type import kan de import gestart worden door op de knop Volgende te klikken.

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003321663/original/vl_5ebT-oDmVENrDampPg1LplrijCOVdjA.png?1643361994)

#### 2.1.4 Voortgang import

Tijdens de import kan je via een progress bar zien hoe ver de import reeds is en kun je ook zien of er reeds fouten zijn opgetreden tijdens de import en/of er al zaken zijn geïmporteerd.

#### 2.1.5 Einde import

Nadat alles is geïmporteerd wordt een overzicht getoond van wat er geïmporteerd is en waar er fouten waren. Als er fouten waren in een record dan wordt deze record niet geïmporteerd.

### 2.2 Via command line

Het command line programma FinassetCmd.exe kan gebruikt worden om CSV bestanden te importeren via de command line.

Het programma FinassetCmd.exe blijft actief zolang de import loopt. Eens de import gedaan is met of zonder fouten dan stopt het programma met uitvoeren en wordt een exit code teruggegeven. De exit code 0 wordt teruggegeven als de import succesvol verliep anders wordt een exit code verschillend van 0 teruggeven.

Al deze command line parameters worden ook gebruikt in de grafische manier om data te importeren. Meer uitleg over bepaalde parameters kan ook gevonden worden bij de grafische manier van importeren.
Mogelijke command line parameters zijn:

<table>
  <thead>
    <tr>
      <th>Naam</th>
      <th>Omschrijving</th>
      <th>Verplicht</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/host:&lt;host naam&gt;</td>
      <td>De naam van de Finasset server</td>
      <td>✅ 1️⃣</td>
    </tr>
    <tr>
      <td>/ipaddress:&lt;ip adres&gt;</td>
      <td>IP adres van de Finasset server</td>
      <td>✅ 1️⃣</td>
    </tr>
    <tr>
      <td>/port:&lt;poort nummer&gt;</td>
      <td>Poort van de server. Als niet meegegeven dan wordt de <br> standaard poort nummer gebruikt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/db:&lt;database naam&gt;</td>
      <td>Naam van de database. Als niet meegegeven dan wordt de <br> standaard database van Finasset gebruikt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/language:&lt;taal&gt;</td>
      <td>De taal van de foutmeldingen: <br> <strong>N</strong>: Nederlands <br> <strong>F</strong>: Frans</td>
      <td></td>
    </tr>
    <tr>
      <td>/itype:&lt;type import&gt;</td>
      <td>Type bron waarvan de data wordt geïmporteerd: <br> <strong>c</strong>: CSV bestand</td>
      <td></td>
    </tr>
    <tr>
      <td>/dtype:&lt;data type&gt;</td>
      <td>Welke soort data er moet geïmporteerd worden: <br> <strong>d</strong>: dossiers <br> <strong>y</strong>: boekjaren <br> <strong>a</strong>: investeringen <br> <strong>g</strong>: algemene rekeningen <br> <strong>o</strong>: investeringsgroepen</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>/otype:&lt;type import&gt;</td>
      <td>Type import: <br> <strong>i</strong>: enkel nieuwe data toevoegen <br> <strong>u</strong>: enkel bestaande data updaten <br> <strong>iu</strong>: zowel nieuwe als bestaande data importeren <br> Standaard waarde is iu.</td>
      <td></td>
    </tr>
    <tr>
      <td>/logfile: &lt;bestandsnaam&gt;</td>
      <td>De locatie en naam van het bestand waar de logging informatie <br> van de import in staat. Als deze parameter niet gebruikt wordt <br> dan wordt geen log bestand aangemaakt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>Als deze parameter wordt toegevoegd dan wordt naast de fouten <br> ook extra logging informatie getoond en/of weggeschreven in het <br> log bestand.</td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>Als deze parameter gebruikt wordt dan wordt log bestand <br> overschreven telkens het programma wordt uitgevoerd. Als de <br> parameter niet wordt gebruikt dan wordt de logging steeds <br> toegevoegd aan bestaande logbestand.</td>
      <td></td>
    </tr>
  </tbody>
</table>

1️⃣ Ofwel de naam van de server ofwel IP adres is verplicht. Als beide worden meegeven dan wordt de host naam gebruikt.

Parameters specifiek import CSV bestanden:

<table>
  <thead>
    <tr>
      <th>Naam</th>
      <th>Omschrijving</th>
      <th>Verplicht</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/iCsvDFile:&lt;bestandsnaam&gt;</td>
      <td>De bestandsnaam van het CSV bestand met dossiers</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>/iCsvYFile:&lt;bestandsnaam&gt;</td>
      <td>De bestandsnaam van het CSV bestand met boekjaren</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>/iCsvADFile:&lt;bestandsnaam&gt;</td>
      <td>De bestandsnaam van het CSV bestand met afschrijvingen van <br> de investeringen</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>/iCsvGFile:&lt;bestandsnaam&gt;</td>
      <td>De bestandsnaam van het CSV bestand met <br> grootboekrekeningen</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>/iCsvOFile:&lt;bestandsnaam&gt;</td>
      <td>De bestandsnaam van het CSV bestand met <br> investeringsgroepen</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

<strong><ins>Voorbeeld</ins></strong>:

FinassetCmd.exe /host:LBRPServer /itype:c /dtype:d /iCsvDFile:dossiers.csv

## 3. CSV bestandsstructuur

### 3.1 Algemene richtlijnen CSV bestand

De CSV bestanden moeten voldoen aan volgende richtlijnen:

- De eerste lijn van alle CSV bestanden bevat de veldnamen die moeten geïmporteerd worden.
- Vanaf lijn 2 staat de data dat moet geïmporteerd worden.
- De velden worden gesplitst door een tab.
- De records worden gesplitst door een .
- Als decimaal scheidingsteken moet punt gebruikt worden vb 1.21
- Datums hebben als formaat: JJJJMMDD vb: 20120309 wat staat voor 9 maart 2012
- De encoding van het bestand moet ANSI zijn.
- Als in document staat dat type Decimaal(2) is dan wil dit zeggen dat het getal maximum 2 getallen na het decimaal scheidingsteken kan bevatten
- Als een veld niet het CSV bestand zit dan wordt bij een toevoeging de standaard waarde of blanco geïmporteerd. Bij een update wordt het veld niet aangepast als het niet in het CSV bestand zit.

### 3.2 Standaard codes

#### 3.2.1 Landen

**ISO 3166-1 standaard 2-letters** wordt gebruikt als land codes binnen Finasset.

<strong><ins>Voorbeeld</ins></strong>:

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BE</td>
      <td>Belgie</td>
    </tr>
    <tr>
      <td>NL</td>
      <td>Nederland</td>
    </tr>
    <tr>
      <td>FR</td>
      <td>Frankrijk</td>
    </tr>
    <tr>
      <td>DE</td>
      <td>Duitsland</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

### 3.3 Mapping velden

Hieronder staat per type import beschreven welke velden er kunnen geïmporteerd worden en wat de headernaam(veldnaam) van elk veld is, ...

#### 3.3.1 Dossiers

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld <br> (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Code</td>
      <td>Code</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Naam</td>
      <td>Tekst(250)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Address</td>
      <td>Adres</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>CountryCode</td>
      <td>Land code (zie hierboven)</td>
      <td>Tekst(2)</td>
      <td></td>
      <td>BE</td>
    </tr>
    <tr>
      <td>ZipCode</td>
      <td>Postcode</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>City</td>
      <td>Gemeente</td>
      <td>Tekst(250)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>Telefoonnummer</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Fax</td>
      <td>Fax</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Email</td>
      <td>Email adres</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>CompanyType</td>
      <td>Type bedrijf: <br> 1: Vennootschap <br> 2: VZW <br> 3: Natuurlijk persoon</td>
      <td>Nummer</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Language</td>
      <td>Taal code: <br> 1: Nederlands <br> 2: Frans <br> 3: Engels <br> 4: Duits</td>
      <td>Nummer</td>
      <td></td>
      <td>1</td>
    </tr>
    <tr>
      <td>CompanyNumber</td>
      <td>Ondernemingsnummer. Punten, <br> spaties en streepjes worden <br> automatisch verwijderd uit <br> nummer en als nummer 9 lang is <br> wordt deze omgevormd naar 10 <br> door er een 0 voor te zetten.</td>
      <td>Tekst(30)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>AssetMaxPercDig</td>
      <td>Maximale tarief voor degressieve <br> afschrijvingen op aankoopwaarde. <br> Indien 40% dan moet de waarde <br> hier 40 zijn.</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal 40.</td>
    </tr>
    <tr>
      <td>AssetMinPerc</td>
      <td>Minimum percentage afschrijving</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal 0,05</td>
    </tr>
    <tr>
      <td>AssetAutoDigLin</td>
      <td>Y: Automatische overgang van <br> degressief naar lineair bij <br> afschrijving <br> N: geen automatisch overgang</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: Y</td>
    </tr>
    <tr>
      <td>AssetBelowMinAddLastPer</td>
      <td>Y: Indien afschrijving onder min <br> percentage dan toevoegen aan <br> laaste periode <br> N: Indien afschrijving onder min <br> percentage dan toevoegen aan <br> eerste periode</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: Y</td>
    </tr>
    <tr>
      <td>AssetDefaultDepreciationType</td>
      <td>Type afschrijving: <br> L: Lineair <br> D: Degressief</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: L</td>
    </tr>
    <tr>
      <td>AssetDefaultPerc</td>
      <td>Afschrijvingspercentage. Indien <br> afschrijvingspercentage 20 is dan <br> is dit afschrijven over 5 jaar</td>
      <td>Decimaal(4)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: 20</td>
    </tr>
    <tr>
      <td>AssetDefaultNumberOfYear</td>
      <td>Aantal jaren afschrijven. Indien <br> aantal jaar 5 is dan is percentage <br> 20</td>
      <td>Decimaal(4)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: 5</td>
    </tr>
    <tr>
      <td>AssetWarnNoPurchaseDate</td>
      <td>Y: Er wordt een melding getoond <br> bij bewaren van investering als er <br> geen AK datum ingevuld is <br> N: Er wordt geen melding getoond</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: Y</td>
    </tr>
    <tr>
      <td>AssetWarnNoDerecognitionDate</td>
      <td>Y: Er wordt een melding getoond <br> bij bewaren van investering als er <br> geen uitboekingsdatum ingevuld <br> is <br> N: Er wordt geen melding getoond</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: Y</td>
    </tr>
    <tr>
      <td>AssetWarnNoVATPurchaseDate</td>
      <td>Y: Er wordt een melding getoond <br> bij bewaren van investering als er <br> geen btw datum ingevuld is <br> N: Er wordt geen melding getoond</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: Y</td>
    </tr>
    <tr>
      <td>AssetCopyPurchDtToVATDtIfEmpty</td>
      <td>Y: Als de AK datum ingevuld is en <br> de BTW datum is leeg dan wordt <br> de AK datum ook bewaard in het <br> BTW datum veld. <br> N: Er wordt niets gedaan</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Parameter <br> applicatie. <br> Normaal: Y</td>
    </tr>
  </tbody>
</table>

#### 3.3.2 Boekjaren

Bij toevoegen van een boekjaar gaat systeem de afschrijving voor de bestaande investeringen in dat boekjaar berekenen en invoegen.

- Startdatum kan enkel aangepast worden voor het eerste boekjaar.
- Einddatum kan enkel aangepast worden voor het laatste boekjaar.

Als start en/of einddatum aangepast wordt dan worden de afschrijvingen voor dat boekjaar en de volgende boekjaren NIET herberekend.

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld <br> (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> dit boekjaar behoort (zie <br> hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Code</td>
      <td>Code. Deze code moet uniek <br> zijn binnen het dossier</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>StartDate</td>
      <td>Begindatum van het boekjaar</td>
      <td>Datum</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>EndDate</td>
      <td>Einddatum van het boekjaar</td>
      <td>Datum</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>ProRataType</td>
      <td>Type pro rata: <br> 1: Geen pro rata <br> 2: Per dag afschrijving <br> berekenen</td>
      <td>Nummer</td>
      <td></td>
      <td>1</td>
    </tr>
    <tr>
      <td>BalanceType</td>
      <td>Type balans: <br> 1: VKT <br> 2: VOLL</td>
      <td>Nummer</td>
      <td></td>
      <td>1</td>
    </tr>
  </tbody>
</table>

#### 3.3.3 Algemene rekeningen

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld <br> (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> deze algemene rekening <br> behoort (zie hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Code</td>
      <td>Rekeningnummer. Kan enkel <br> cijfers bevatten. Deze code <br> moet uniek zijn binnen het <br> dossier</td>
      <td>Tekst(10)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Omschrijving van de algemene <br> rekening</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GenAccDep</td>
      <td>Rekeningnummer waarop de <br> afschrijvingen worden geboekt <br> van deze algemene rekening. <br> Kan enkel cijfers bevatten</td>
      <td>Tekst(10)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GenAccCost</td>
      <td>De kostenrekening waarop de <br> afschrijvingen worden geboekt. <br> Kan enkel cijfers bevatten</td>
      <td>Tekst(10)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GenAccType</td>
      <td>cell2</td>
      <td>Nummer</td>
      <td>Type algemene rekening: <br> 1: Kapitaalsubsidies & gespreid <br> te belasten meerwaarden (1) <br> 2: Oprichtingskosten (20) <br> 3: IVA-Onderzoek en <br> ontwikkeling (210) <br> 4: IVA-Concessies, octrooien, <br> licenties, knowhow, merken en <br> soortelijke rechten (211) <br> 5: IVA-Goodwill (212) <br> 6: IVA-Vooruitbetalingen (213) <br> 7: MVA-Industriële, <br> administratieve of commerciële <br> gebouwen (22) <br> 8: MVA-Installaties, machines <br> en uitrusting(23) <br> 9: MVA-Rollend materieel (24) <br> 10: MVA-Kantoormaterieel en <br> meubilair (24) <br> 11: MVA-Leasing en soortgelijke <br> rechten (25) <br> 12: MVA-Andere materiële vaste <br> activa (26) <br> 13: MVA-Activa in aanbouw en <br> vooruitbetalingen (27)</td>
      <td>Indien niet <br> ingevuld wordt <br> automatisch <br> bepaald adhv <br> rekeningnummer. <br> Bij <br> rekeningnummer <br> 24xxxx wordt <br> standaard 24 <br> genomen</td>
    </tr>
  </tbody>
</table>

#### 3.3.4 Investeringsgroepen

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld <br> (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> deze investeringsgroep behoort <br> (zie hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Code</td>
      <td>De code van de <br> investeringsgroep</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Omschrijving van de <br> investeringsgroep</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 3.3.5 Investeringen

Bij toevoegen van investering gaat systeem automatisch de afschrijvingen berekeningen en invoegen.

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> deze investering behoort (zie <br> hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Code</td>
      <td>De code van de investering. <br> Deze code moet uniek zijn <br> binnen het dossier.</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Omschrijving</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GenAccCode</td>
      <td>De code van de algemene <br> rekening</td>
      <td>Tekst(10)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseYearCode</td>
      <td>De code van het <br> aankoopboekjaar</td>
      <td>Tekst(50)</td>
      <td>✅ 1️⃣</td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseYear</td>
      <td>Aankoopboekjaar waarbij <br> boekjaar niet gedefinieerd is in <br> het systeem. Dit is handig voor <br> zeer oude investeringen. Deze <br> investeringen moeten wel <br> liggen voor het eerste boekjaar <br> aangemaakt voor dit dossier</td>
      <td>Nummer</td>
      <td>✅ 3️⃣</td>
      <td></td>
    </tr>
    <tr>
      <td>AssetGroupCode</td>
      <td>De code van de groep waartoe <br> deze investering behoort</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseValue</td>
      <td>De aankoopwaarde van de <br> investering zonder BTW</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>PurchaseVATDeducted</td>
      <td>Bedrag afgetrokken BTW</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>PurchaseVATNotDeducted</td>
      <td>Bedrag niet afgetrokken BTW</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>PurchaseVATNotDeductedAsset</td>
      <td>Y: niet aftrekbare BTW <br> toevoegen aan de investering <br> om af te schrijven <br> N: Niet aftrekbare BTW niet <br> toevoegen aan de investering <br> om af te schrijven</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td>AssetDepreciationType</td>
      <td>Type afschrijving: <br> L: Lineair <br> D: Degressief</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>Standaard <br> waarde op <br> dossier niveau</td>
    </tr>
    <tr>
      <td>AssetPerc</td>
      <td>Afschrijvingspercentage. Ofwel <br> dit ofwel AssetNumberOfYear <br> moet ingevuld zijn. Indien beide <br> dan moet de omrekening <br> kloppen.</td>
      <td>Decimaal(4)</td>
      <td></td>
      <td>Standaard <br> waarde op <br> dossier niveau</td>
    </tr>
    <tr>
      <td>AssetNumberOfYear</td>
      <td>Aantal jaren afschrijven. Ofwel <br> dit ofwel AssetNumberOfYear <br> moet ingevuld zijn. Indien beide <br> dan moet de omrekening <br> kloppen.</td>
      <td>Decimaal(4)</td>
      <td></td>
      <td>Standaard <br> waarde op <br> dossier niveau</td>
    </tr>
    <tr>
      <td>ResidualValue</td>
      <td>Restwaarde. Indien investering <br> die afgeschreven wordt op 0 <br> jaar zoals terreinen dan is <br> restwaarde gelijk aan <br> aankoopwaarde+niet <br> afgetrokken BTW</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>PurchaseDate</td>
      <td>Aankoopdatum</td>
      <td>Datum</td>
      <td>✅ 2️⃣</td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseJournal</td>
      <td>Aankoopdagboek</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseDocNumber</td>
      <td>Aankoop document nummer</td>
      <td>Nummer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseSupplier</td>
      <td>Leverancier</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutTypeCode</td>
      <td>Uitboekings type code: <br> 00000001: Verkoop <br> 00000002: Diefstal <br> 00000003: Verlies <br> 00000004: Buitengebruikstelling <br> … : Of zelf gedefinieerde <br> uitboekingstypes <br> Indien veld blanco dan is er <br> geen uitboekingstype</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutYearCode</td>
      <td>De code van het <br> uitboekingsboekjaar. Kan enkel <br> ingevuld zijn als <br> uitboekingstype ingevuld is</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutValue</td>
      <td>Uitboekingswaarde zonder <br> BTW</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>BookingOutVAT</td>
      <td>BTW uitboekingswaarde</td>
      <td>ceDecimaal(2)ll3</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>BookingOutDate</td>
      <td>Uitboekingsdatum</td>
      <td>Datum</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutJournal</td>
      <td>Uitboekingsdagboek</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutDocNumber</td>
      <td>Uitboekingsdocumentnummer</td>
      <td>Nummer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutCustomer</td>
      <td>Klant</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>InvestmentDeductionKind</td>
      <td>Investeringsaftrek soort: <br> 1: Eénmalig <br> 2: Gespreid <br> Indien niets ingevuld dan geen <br> investeringsaftrek</td>
      <td>Nummer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>InvestmentDeductionType</td>
      <td>Investeringsaftrek type: <br> 1: Onderzoek en ontwikkeling <br> 2: Energiebesparende <br> investeringen <br> 3: Beveiliging beroepslokalen <br> 4: Rookafzuig- of <br> verluchtingssys <br> 5: Octrooien <br> 7: Zeeschepen <br> 8: Hergebruik verpakking <br> 99: Andere investering <br> Type investeringsaftrek is <br> afhankelijk van type bedrijf en <br> soort investeringsaftrek. Moet <br> ingevuld zijn indien <br> InvestmentDeductionKind  <br> ingevuld is anders moet het <br> leeg zijn. </td>
      <td>Nummer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>Kommentaar</td>
      <td>Tekst(1024)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>VATDate</td>
      <td>BTW Datum recht van aftrek</td>
      <td>Datum</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>VATType</td>
      <td>Soort BTW: <br> 1: 5j (Roerend) <br> 2: 15j (Onroerend) <br> 3: 0j (< 1000 EUR)</td>
      <td>Nummer</td>
      <td></td>
      <td>1</td>
    </tr>
    <tr>
      <td>AllowDepInYearBookingOut</td>
      <td>Y: Afschrijving toelaten in <br> boekjaar uitboeking <br> N: Geen afschrijving toelaten in <br> boekjaar uitboeking</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>N</td>
    </tr>
    <tr>
      <td>TotalDepPreviousYears</td>
      <td>Mag enkel ingevuld zijn als het <br> veld PurchaseYear ingevuld is. <br> Dit veld bevat het totaal bedrag <br> dat reeds afgeschreven is.</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
  </tbody>
</table>

1️⃣ PurchaseYearCode of PurchaseYear moet ingevuld zijn. Beide mogen niet tegelijk ingevuld zijn.

2️⃣ Aankoopdatum moet verplicht ingevuld worden als aankoopboekjaar pro rata is.

#### 3.3.6 Afschrijvingen

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> deze afschrijving behoort (zie <br> hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>AssetCode</td>
      <td>Code van de investering <br> waartoe deze afschrijving <br> behoort (zie hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>cDepreciationYearell1</td>
      <td>Code afschrijvingsboekjaar (zie <br> hierboven)</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Depreciation</td>
      <td>Afschrijvingsbedrag</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td>0</td>
    </tr>
  </tbody>
</table>

#### 3.3.7 Overboekingen investering naar andere algemen rekening

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> de investering behoort de we <br> gaan overboeken</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>AssetCode</td>
      <td>Code van de investering die we <br> gaan overboeken naar andere <br> rekening</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>NewAssetCode</td>
      <td>	
De code van de nieuwe <br> investering die zal aangemaakt <br> worden op de andere <br> algemene rekening</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>GenAccDep</td>
      <td>Nieuw rekeningnummer voor <br> deze investering</td>
      <td>Tekst(10)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutTypeCode</td>
      <td>Uitboekings type: Voorbeeld <br> 00000005: Uitboeking</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>YearCode</td>
      <td>De code van het boekjaar <br> waarin de algemene rekening <br> verandert</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Date</td>
      <td>Datum waarop deze <br> overboeking moet gebeuren</td>
      <td>Datum</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Journal</td>
      <td>Dagboek waarin deze <br> overboeking wordt gedaan</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>DocNumber</td>
      <td>Documentnummer waarin deze <br> overboeking wordt gedaan</td>
      <td>Nummer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>Opmerking over deze <br> overboeking</td>
      <td>Tekst(1024)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 3.3.8 Uitboeking investering

Als de uitboeking 100% is dan kan dit onmiddellijk gedaan worden bij importeren van de investering door BookingOutTypeCode en BookingOutYearCode in te vullen.

Is de uitboeking NIET 100% dan moet dit gedefinieerd worden in een extra bestand.

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>Code van het dossier waartoe <br> de investering behoort dat we <br> gedeeltelijk gaan uitboeken</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>AssetCode</td>
      <td>Code van de investering die <br> gedeeltelijk gaan uitboeken</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>NewAssetCode</td>
      <td>De code van de nieuwe <br> investering die zal aangemaakt <br> worden als we gedeeltelijk <br> gaan uitboeken</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutTypeCode</td>
      <td>Uitboekings type code: <br> 00000001: Verkoop <br> 00000002: Diefstal <br> 00000003: Verlies <br> 00000004: <br> Buitengebruikstelling <br> … : Of zelf gedefinieerde <br> uitboekingstypes</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>YearCode</td>
      <td>De code van het boekjaar <br> waarin de uitboeking wordt <br> gedaan</td>
      <td>Tekst(50)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseValueMinus</td>
      <td>De aankoopwaarde van de <br> investering zonder BTW dat <br> uitgeboekt wordt</td>
      <td>Decimaal(2)</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseVATDeductedMinus</td>
      <td>Bedrag afgetrokken BTW dat <br> uitgeboekt wordt</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PurchaseVATNotDeductedMinus</td>
      <td>Bedrag niet afgetrokken BTW <br> dat uitgeboekt wordt</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>DepreciationMinus</td>
      <td>Bedrag afschrijvingen dat <br> uitgeboekt wordt</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutDate</td>
      <td>Uitboekingsdatum</td>
      <td>Datum</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutJournal</td>
      <td>Uitboekingsdagboek</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutDocNumber</td>
      <td>Uitboekingsdocumentnummer</td>
      <td>Nummer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutValue</td>
      <td>Uitboekingswaarde zonder <br> BTW</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutVAT</td>
      <td>BTW uitboekingswaarde</td>
      <td>Decimaal(2)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>BookingOutCustomer</td>
      <td>Klant</td>
      <td>Tekst(250)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>Opmerking over deze <br> uitboeking</td>
      <td>Tekst(1024)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<!-- https://support.corpgroup.site/nl/support/solutions/articles/101000241366 -->

### 3.4 Voorbeeld Excel bestand

De CSV bestanden kunnen aangemaakt worden via Excel. Hierbij moet het volgende gedaan worden:

- Eerste rij bevat de veldnamen

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003326050/original/tPrC47gb4u6wbWqBnLJv5N962L8iEqHXug.png?1643364930)

- De volgende rijen bevatten de data dat moet geïmporteerd worden
- Zorg dat datums en getallen in het juiste formaat worden geformatteerd zoals hierboven beschreven. Door rechtermuis te klikken op een cel kan de formattering ingesteld worden. Hierbij kan dus ingesteld worden dat de formattering van een datum veld jjjjmmdd moet zijn. Hieronder een voorbeeld om de datum 25/01/1951 te laten formattering zoals deze nodig is voor Finasset.

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003326066/original/ypM2cW3Iq60qqN0a1PMyCOnhQDSRizkmKQ.png?1643364941)

- Excel bestand kunt u bewaren als .xls of .xlsx bestand. Maar een .xls of .xlsx bestand kan niet geïmporteerd worden in Finasset. Hiervoor moet het bestand eerst bewaard worden als eens \"Text (Tab delimited) (\*.txt)\" bestand.

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003326081/original/36M3ZTs0Ru9frEaaENuXoOv0zIc5MZ9b4g.png?1643364948)

<!-- Text from:

✅ https://support.corpgroup.site/nl/support/solutions/articles/101000241366
✅ 2610 words, x18637xx characters
✅ STANDARD package is $30 for max of 3700 words

📌 In the table in section 3.3.5 should 99: Andere investering be just 9 instead?
📌 In the table in section 3.3.5 I removed the space before the ending period in column 2 in the last row
📌 Below 3.3.5 is a 2 and I added an emoji 2 to match the "1" above

-->
