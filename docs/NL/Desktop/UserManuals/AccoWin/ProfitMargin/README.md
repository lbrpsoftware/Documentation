# Desktop - AccoWin - Winst Marge

## 1 Algemeen

De winstmarge module in Accowin kan gebruikt worden voor:

- Bijhouden voorraad voertuigen
- Stocklijsten afdrukken
- Vergelijkingsregister afdrukken
- Berekening winstmarge voor voertuigen die vallen onder winstmarge stelsel

De BTW kode WM wordt gebruikt om aankoop of verkoopfacturen te boeken van voertuigen volgens het winstmarge stelsel.

## 2 Module koppelen aan dossier

Om de winstmarge module te kunnen gebruiken moet deze eerst gekoppeld worden aan het dossier:

- Menu>Start>Dossiers beheren

![Image 1]()

- Dossier waar u de winstmarge module wil gebruiken selecteren en naar de tab Modules gaan en daar op de knop 'Toevoegen klikken' bij 'Andere modules':

![Image 2]()

- De module 'Winstmarge voertuigen' selecteren en op de knop 'Selecteren' klikken

![Image 3]()

- Door het dossier te bewaren wordt de 'Winstmarge voertuigen' module gekoppeld aan het dossier.

![Image 4]()

## 3 Menu opties

![Image 5]()

De module 'Winstmarge voertuigen' heeft volgende menu opties:

- <ins>Parameters</ins>: hierbij kunnen de parameters van de module op dossierniveau ingesteld worden.
- <ins>Aankopen</ins>: hier kunnen alle aankopen (facturen en creditnota's) van voertuigen geraadpleegd worden. Indien u een voertuig van winstmarge stelsel naar BTW stelsel wil omzetten moet u dit ook doen via deze menu optie.
- <ins>Verkopen</ins>: hier kunnen alle verkopen (facturen en creditnota's) van voertuigen geraadpleegd worden.
- <ins>Bereken</ins>: via deze optie wordt de winstmarge berekend en kan er gekozen worden om automatisch een verkoopfactuur te laten boeken om de winstmarge juist op de BTW-aangifte en de boekhouding te krijgen. De berekening kan afgedrukt worden.
- <ins>Afdruk berekening</ins>: om een oude berekening af te drukken.
- <ins>Stock</ins>: de stock op een bepaalde datum af te drukken
- <ins>Vergelijkingsregister</ins>: rapport met overzicht van de verkochte voertuigen in een bepaalde periode met daarbij informatie over de aankoop.
- <ins>Aankopen afdrukken</ins>: rapport met overzicht van de aangekochte voertuigen in een bepaalde periode met daarbij informatie over de verkoop indien het voertuig verkocht is in deze periode.

## 4

## 5 Module configureren (Menu optie parameters)

De rekeningen voor de aankoop (klasse 6) en de verkoop ( klasse 7) worden niet automatisch aangemaakt. De gebruiker maakt de rekeningen aan en koppelt deze in de Parameters van de winstmargemodule.

Nadat de module is gekoppeld aan het dossier moet ze nog geconfigureerd worden voor dit dossier:

- Menu>Module>Winstmarge voertuigen>Parameters

![Image 6]()

- Het parameter scherm is verdeeld in verschillende onderdelen en zal hieronder per onderdeel verder uitgelegd worden.

![Image 7]()

### 5.1 Ingave winstmarge facturen (met BTW code WM):

- <ins>Rekeningen AK winstmarge</ins>: de algemene rekeningen waar de aankopen van voertuigen worden geboekt die onder het winstmarge stelsel vallen. Op deze algemene rekeningen zal enkel de BTW code WM kunnen gebruikt worden. De algemene rekeningen worden gescheiden door een komma.
- <ins>Tijdelijke rekeningen VK winstmarge</ins>: de algemene rekeningen waar de verkopen van voertuigen worden op geboekt die onder het winstmarge stelsel vallen. Er wordt gewerkt met een tijdelijke rekening omdat BTW rooster 00 correct moet ingevuld worden en dit kan enkel maar als we werken met een tijdelijke rekening. De tijdelijke rekening wordt tegengeboekt tijdens het genereren van de verkoopfactuur op het einde van de periode. Op het einde van het jaar zal deze tijdelijke rekening normaal op 0 staan. Op deze algemene rekeningen zal enkel de BTW code WM kunnen gebruikt worden. De BTW code WM komt niet op de BTW- aangifte. De algemene rekeningen worden gescheiden door een komma.

### 5.2 Ingave facturen met BTW:

- <ins>Ingave VK met BTW</ins>: via deze optie kan aangegeven worden of ook de verkopen en aankopen van voertuigen met BTW moeten worden bijgehouden door de module. Indien ja dan zal bij de aankoop van een voertuig met BTW de gegevens van het voertuig moeten ingegeven worden en zal bij ingave van de verkoop van het voertuig de aankoop moeten geselecteerd worden. Indien nee wordt geselecteerd dan moeten geen rekeningen AK en VK met BTW worden ingevuld.
- <ins>Rekeningen AK met BTW</ins>: de algemene rekeningen waar aankopen van voertuigen met BTW worden op geboekt. Hier kunnen verschillende algemene rekeningen ingevuld worden gescheiden door een komma.
- <ins>Rekeningen VK met BTW</ins>: de algemene rekeningen waar verkopen van voertuigen met BTW worden op geboekt. Hier kunnen verschillende algemene rekeningen ingevuld worden gescheiden door een komma.

### 5.3 Winstmarge berekenen:

Alles wat hier geconfigueerd wordt, wordt gebruikt door het systeem om automatisch een verkoopfactuur te boeken van de winstmarge.

- <ins>Rekening VK winstmarge</ins>: op deze algemene rekening wordt het winstmarge gedeelte geboekt die in rooster 00 moet komen van de BTW-aangifte. Meer uitleg kan gevonden worden bij de berekeningsmanier hieronder.
- <ins>Rekening maatstaf winstmarge</ins>: op deze algemene rekening wordt het winstmarge gedeelte geboekt dat in rooster 03 (afhankelijk van de BTW kode) moet komen van de BTW-aangifte. Meer uitleg kan gevonden worden bij de berekeningsmanier hieronder.
- <ins>BTW kode</ins>: de BTW kode dat moet gebruikt worden om de winstmarge te berekenen. Meestal is dit kode 3.
- <ins>Klant</ins>: de klant waarop de winstmarge verkoopfactuur wordt geboekt
- <ins>Dagboek</ins>: het dagboek waarin de winstmarge verkoopfactuur wordt geboekt. Dit dagboek moet wel van het type winstmarge zijn. Daarom gaat u hoogstwaarschijnlijk nog een nieuw dagboek moeten aanmaken.

![Image 8]()

- <ins>Berekeningsmanier winstmarge</ins>:
  - <ins>Per periode</ins>: de winstmarge wordt berekend per BTW periode. Bij een maandaangever is dit per maand. Bij een kwartaal aangever per kwartaal.
  - <ins>Per levering</ins>: de winstmarge wordt berekend per voertuig.

## 6 Aankopen

### 6.1 Inboeken aankoopfactuur

Het inboeken van een aankoopfactuur van een voertuig verloopt op dezelfde manier als gewone aankoopfactuur inboeken.

Bij inboeken van een aankoopfactuur van een voertuig met marge moet de BTW code WM gebruikt worden. Bij inboeken van aankoopfacturen van een voertuig met BTW moeten de normale BTW codes gebruikt worden.

Een voorbeeld van inboeken van een aankoopfactuur met winstmarge is:

![Image 9]()

Na inboeken van een aankoopfactuur waarbij boekingen zijn gedaan op de algemene rekeningen 'Rekening AK winstmarge' en/of 'Rekeningen AK BTW', die geconfigureerd staan bij de parameters van de module, zal het systeem een extra scherm tonen per boekingslijn waarbij de gegevens van het voertuig kunnen ingevuld worden. Indien er 2 voertuigen op 1 aankoopfactuur staan dan moeten er 2 boekingslijnen op de algemene rekeningen 'Rekening AK winstmarge' en/of 'Rekeningen AK BTW' gebeuren.

Voorbeeld ingave voertuig informatie na inboeken aankoopfactuur:

![Image 10]()

De tekst die ingevuld wordt in het Opmerkingen veld op boekingslijn niveau wordt automatisch gecopieerd in het veld Merk bij de voertuig gegevens.

De gegevens die kunnen ingevuld worden voor een voertuig zijn:

- Merk: hier kan bijvoorbeeld ingevuld worden Audi A3 Sportback
- Chassis van het voertuig
- Bouwjaar van het voertuig
- Opmerking over het voertuig

Bij klikken op de knop Sluiten of F12 worden de voertuig gegevens weggeschreven in het systeem.

### 6.2 Menu optie aankopen

Via deze menu optie zie je alle aankopen en hun detail. <br> Overzichtsscherm:

![Image 11]()

Detail scherm:

![Image 12]()

Via de menu optie aankoop kun je:

- Alle aankopen van voertuigen zien (zowel manueel toegevoegd als toegevoegd door ingave via aankoopdagboek)
- Voertuiggegevens aanpassen
- Nieuwe voertuigen toevoegen
- Voertuigen verwijderen die manueel zijn ingegeven.

Bij ingave van een nieuw voertuig moet de gebruiker de selectie maken over welk soort aankoop het gaat:

- Factuur: aankoop van een voertuig
- Creditnota: terugname van voertuig door de leverancier

![Image 13]()

- Aanpassing: voertuig gaat over van winstmarge stelsel naar normaal stelsel.

<strong><ins>Opmerking</ins></strong>:

Voertuigen die ingegeven zijn tijdens het inboeken van aankoopfacturen kunnen enkel maar verwijderd worden via ingave aankoopdagboek, door bijvoorbeeld de boekingslijn of aankoopfactuur te verwijderen.

## 7 Verkopen

### 7.1 Inboeken verkoopfactuur

Het inboeken van een verkoopfactuur van een voertuig verloopt op dezelfde manier als inboeken van een gewone verkoopfactuur.

Bij inboeken van een verkoopfactuur van een voertuig met marge moet de BTW code WM gebruikt worden. Bij inboeken van verkoopfacturen van een voertuig met BTW moeten de normale BTW codes gebruikt worden.

Een voorbeeld van inboeken van een verkoopfactuur met winstmarge is:

![Image 14]()

Na inboeken van een verkoopfactuur waarbij boekingen zijn gedaan op de algemene rekeningen 'Tijdelijke rekening VK winstmarge' en/of 'Rekeningen VK BTW', die geconfigureerd staan bij de parameters van de module, zal het systeem een extra scherm tonen per boekingslijn waarbij het voertuig kan geselecteerd worden dat verkocht is. Indien er 2 voertuigen op 1 verkoopfactuur staan dan moeten er 2 boekingslijnen op de algemene rekeningen 'Tijdelijke rekening VK winstmarge' en/of 'Rekeningen VK BTW' gebeuren.

<strong><ins>Opmerking</ins></strong>:

Bij verkoop van een voertuig op marge zie je enkel maar voertuigen die aangekocht zijn op marge. Bij ingave van verkoop van een voertuig onder BTW stelsel zie je enkel maar voertuigen die aangekocht zijn onder het BTW stelsel of voertuigen waarvoor er een aanpassing is ingegeven dat ze overschakelen van marge stelsel naar BTW stelsel.

Voorbeeld selectie voertuig na inboeken verkoopfactuur:

![Image 15]()

### 7.2 Menu optie verkopen

Via deze menu optie zie je alle verkopen en hun detail. <br> Overzichtsscherm:

![Image 16]()

Detail scherm:

![Image 17]()

Via de menu optie verkopen kun je:

- Alle verkopen van voertuigen zien (zowel manueel toegevoegd als toegevoegd door ingave via verkoopdagboek)
- Ander voertuig selecteren voor verkoop.
- Nieuwe verkoop van voertuig toevoegen
- Verkoop van voertuigen verwijderen die manueel zijn toegevoegd.

Bij ingave van een nieuwe verkoop van een voertuig moet de gebruiker de selectie maken over welk soort verkoop het gaat:

- Factuur: verkoop van een voertuig
- Creditnota: annulatie van verkoop van een voertuig.

![Image 18]()

<strong><ins>Opmerking</ins></strong>:

Voertuigen die ingegeven zijn tijdens het inboeken van verkoopfacturen kunnen enkel maar verwijderd worden via ingave verkoopdagboek, door bijvoorbeeld de boekingslijn of verkoopfactuur te verwijderen.

## 8 Berekeningsmanieren winstmarge

De berekeningsmanieren zal uitgelegd worden aan de hand van een voorbeeld. De voertuigen hieronder worden aangekocht en verkocht op winstmarge. De BTW code 3 die overeenkomt met het BTW percentage 21% wordt gebruikt voor berekening van de winstmarge.

Beginstock:

- Voertuig 1: 5000 EUR
- Voertuig 2: 4000 EUR

Kwartaal 1:

- Aankoop voertuig 3: 7000 EUR
- Verkoop voertuig 1: 6000 EUR

Kwartaal 2:

- Verkoop voertuig 3: 11000 EUR

Kwartaal 3:

- Niets

Kwartaal 4:

- Verkoop voertuig 2: 3500 EUR
- Aankoop voertuig 4: 6500 EUR

Eindstock:

- Voertuig 4: 6500 EUR

### 8.1 Berekeningsmanier levering

Bij de berekeningsmanier per levering wordt per voertuig de winstmarge berekend. Hierbij wordt de waarde van de verkochte aankopen vermeld in vak 00 bij elke periode aangifte.

Indien er een negatieve marge is dan wordt het bedrag van de verkoop aanzien als de waarde van de verkochte aankoop.

<strong><ins>Kwartaal 1</ins></strong>:

- Verkoop voertuig 1 voor 6000 EUR en was aangekocht voor 5000 EUR
- Marge: 1000 EUR (6000 EUR – 5000 EUR)
- Rooster 00: 5000 EUR (waarde van de aankoop)
- Rooster 03: 826,45 (1000 EUR / 1,21) (de maatstaf van de marge)
- Rooster 54: 173,55 (De btw uit de marge)

<ins>Scherm berekening</ins>:

![Image 19]()

<ins>Rapport berekening</ins>:

![Image 20]()

Geboekte verkoopfactuur:

![Image 21]()

De verkoopfactuur die aangemaakt wordt bij de berekeningsmanier levering zal in het opmerkingen veld per boekingslijn een verwijzing hebben van welke verkoopfactuur de winstmarge is berekend.

<strong><ins>Kwartaal 2</ins></strong>:

- Verkoop voertuig 3 voor 11000 EUR en was aangekocht voor 7000 EUR
- Marge: 4000 EUR(11000 EUR – 7000 EUR)
- Rooster 00: 7000 EUR (waarde van de aankoop)
- Rooster 03: 3305,79 (4000 EUR / 1,21) (de maatstaf van de marge)
- Rooster 54: 694,21 EUR (de btw uit de marge)

<ins>Scherm berekening</ins>:

![Image 22]()

<ins>Rapport berekening</ins>:

![Image 23]()

<ins>Geboekte verkoopfactuur</ins>:

![Image 24]()

<strong><ins>Kwartaal 3</ins></strong>:

▪ Niets

<strong><ins>Kwartaal 4</ins></strong>:

- Verkoop voertuig 2 voor 3500 EUR en was aangekocht aan 4000 EUR
- Marge: -500 EUR (3500 EUR – 4000 EUR)
- Rooster 00: 3500 EUR (marge is negatief dus waarde van de verkoop wordt gebruikt)
- Rooster 03: blanco
- Rooster 54: blanco

Op het einde van elke periode zal het systeem een verkoopfactuur boeken.

### 8.2 Berekeningsmanier periode

Bij berekeningsmanier per periode wordt de marge berekend per BTW periode:

- <ins>Bepaling marge eerste periode</ins>: <br>
  Marge = verkoop periode– (aankoop periode+ beginstock)
- <ins>Bepaling marge in de loop van het jaar</ins>: <br>
  Marge = verkoop periode– (aankoop periode+ overdracht negatieve marge vorige periode)
- <ins>Bepaling marge laatste periode</ins>: <br>
  Marge = Verkoop volledig jaar – (aankoop volledig jaar + beginstock – eindstock) – Reeds aangegeven positieve marges)

Rooster 00 wordt enkel op het einde van het jaar berekend en ingevuld. Gedurende het jaar is rooster 00 blanco.

<strong><ins>Kwartaal 1</ins></strong>:

- Marge = verkoop periode– (aankoop periode+ beginstock)
- Marge = 6000 EUR – (7000 EUR + (5000 EUR + 4000 EUR)) = -10000 EUR
- Marge is negatief dus overdracht naar volgende periode
- Rooster 00: blanco
- Rooster 03: blanco
- Rooster 54: blanco

<ins>Scherm berekening</ins>:

![Image 25]()

<ins>Rapport berekening</ins>:

![Image 26]()

<strong><ins>Kwartaal 2</ins></strong>:

- Marge = verkoop periode– (aankoop periode+ overdracht negatieve marge vorige periode)
- Marge = 11000 – (0 + 10000) = 1000 EUR
- Rooster 00: blanco
- Rooster 03: 826,45 EUR (1000 / 1,21) (de maatstaf van de marge)
- Rooster 54: 173,55 EUR (de BTW van de marge)

<ins>Scherm berekening</ins>:

![Image 27]()

<ins>Rapport berekening</ins>:

![Image 28]()

<ins>Geboekte factuur WMD/2</ins>:

![Image 29]()

<strong><ins>Kwartaal 3</ins></strong>:

- Marge = verkoop periode– (aankoop periode+ overdracht negatieve marge vorige periode)
- Marge = 0 – (0 + 0)
- Rooster 00: blanco
- Rooster 03: blanco
- Rooster 54: blanco

<strong><ins>Kwartaal 4</ins></strong>:

- Marge = Verkoop volledig jaar – (aankoop volledig jaar + beginstock – eindstock) – Reeds aangegeven positieve marges)
- Marge = (6000+11000+3500) - ((7000+6500) + (5000+4000) – (6500)) – (1000) = 3500
- Rooster 00: Uitgegane aankopen - niet-overdraagbare negatieve marge van laatste periode= (5000 + 7000 + 4000) – (0) = 16000
- Rooster 03: 2892,56 (3500 / 1,21) (de maatstaf van de marge)
- Rooster 54: 607,44 (de BTW van de marge)
