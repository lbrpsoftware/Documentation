# Desktop - AccoWin - Rappels

## 1 Algemeen

Met de rappelfunctie in **AccoWin** stuurt u betalingsherinneringen (rappels) naar klanten met openstaande, vervallen facturen. U kiest zelf welke klanten een rappel krijgen, of de rappel geprint of geëmaild wordt en welk rappelniveau (0 tot 4) gebruikt wordt.

Het rappelscherm wordt geopend via:

- Menu **Facturatie** > **Afdrukken rappels klanten**

![Image 1]()

<ins>Opmerking</ins>: de menuoptie is enkel zichtbaar/actief voor gebruikers met de rechten om facturen af te drukken.

## 2 Schermoverzicht

Het scherm **Afdrukken / emailen rappels** bestaat uit volgende onderdelen:

![Image 2]()

- <ins>Selectie</ins>: bepalen welke facturen en klanten in aanmerking komen (zie punt 3).
- <ins>Filter</ins>: beperken op verzendmethode en verkoopdagboek.
- <ins>Knoppen</ins>:
  - <ins>afdrukken / emailen</ins>: de rappels versturen (print of email, volgens de verzendmethode van elke klant).
  - <ins>Afdrukvoorbeeld</ins>: eerst een voorbeeld bekijken op het scherm, zonder iets te versturen.
  - <ins>Sessie Logs</ins>: het overzicht openen van de per email verstuurd geregistreerde rappels, met name van de mislukte verzendingen (zie punt 8).
- <ins>Tabs</ins>:
  - <ins>Per Klant</ins>: de klanten met hun vervallen facturen, totaalkolommen en hieronder de historiek van de vorige rappels van de geselecteerde klant. Afdrukken kan enkel vanuit deze tab.
  - <ins>Overzicht</ins>: een vlak overzicht van alle afzonderlijke vervallen facturen.
- <ins>Totals</ins>: totaal Bedrag, totaal Betaald en totaal Openstaand, telkens voor de volledige selectie en voor de door u geselecteerde klanten.

## 3 Selectie en filters

### 3.1 Selectie

- <ins>Klanten met vervallen facturen sinds</ins>: toon enkel klanten met facturen die vervallen zijn sinds de gekozen datum.
- <ins>Alle klanten met openstaande facturen (ook niet vervallen)</ins>: toon alle klanten met openstaande facturen, ook deze die nog niet vervallen zijn.
- <ins>Facturen na vervaldatum mee afdrukken</ins>: bij een klant die al een lopende rappel heeft, worden ook de reeds vervallen facturen die na de vorige rappeldatum vervielen mee op de rappel genomen.
- <ins>Selectie klanten</ins>: beperken tot enkel de actieve klanten of alle klanten.
- <ins>Sorteren op</ins>: het overzicht sorteren op klantnummer of op klantnaam.

### 3.2 Filter

- <ins>Methode verzenden doc.</ins>: beperken op hoe de klanten hun documenten ontvangen (alles, afdruk of email).
- <ins>Dagboek Verkoop</ins>: beperken op het verkoopdagboek waarin de facturen geboekt zijn.

## 4 Selecteren van klanten

Op de tab <ins>Per Klant</ins> kiest u welke klanten een rappel krijgen:

- Dubbelklik op een rij of de spatiebalk om één klant aan/af te vinken.
- De toetsen <ins>+</ins> en <ins>-</ins> op het numeriek toetsenbord om te selecteren/deselecteren.
- De knoppen <ins>selectie</ins> en <ins>filter</ins> om alle klanten in één keer te selecteren of te deselecteren.

![Image 3]()

De geselecteerde klanten krijgen een vinkje. In de totalen onderaan ziet u onmiddellijk het totaal Bedrag, Betaald en Openstaand van uw selectie.

## 5 Rappelniveau en acties

Elke klant heeft een rappelnummer van 0 tot en met 4. Hoe hoger het nummer, hoe strenger de rappel. Via de rechtermuisknop (menu <ins>Actions</ins>) kunt u voor de geselecteerde klanten:

![Image 4]()

- <ins>Rappel verhogen</ins>: het rappelniveau met één verhogen (maximum 4).
- <ins>Rappel verlagen</ins>: het rappelniveau met één verlagen (minimum 0).
- <ins>Methode verzenden doc</ins>: de verzendmethode van de geselecteerde klanten wijzigen naar email, brief-afdruk of terug alles (standaard instelling van de klant).

Na het afdrukken of emailen wordt het rappelnummer van elke verzonden klant automatisch met één verhoogd (via <ins>Rappel verhogen</ins> hoeft u dit dus niet manueel te doen voor de volgende ronde).

## 6 Rappelteksten onderhouden

Per rappelniveau (0 tot 4) kunt u de teksten en kosten onderhouden:

- Menu **Parameters** > **Teksten rappels**

![Image 5]()

- <ins>Nr</ins>: het rappelniveau.
- <ins>Referte</ins>: de referentie die op het document afgedrukt wordt.
- <ins>Penalty</ins>: de interestvoet (%) die vermeld wordt.
- <ins>ExtraCost</ins>: vaste kosten die aan de rappel toegevoegd worden.
- <ins>Titel, Begin en Einde</ins>: de titel, de inleiding en de afsluiting van de rappelbrief, per taal (NL, FR, EN, DE). Per klant wordt de tekst in de taal van de klant gebruikt.

## 7 Rappels afdrukken of emailen

- Met <ins>Afdrukvoorbeeld</ins> ziet u de rappels eerst op het scherm. Er wordt niets verzonden en de rappelniveaus worden niet aangepast.
- Met <ins>afdrukken / emailen</ins> worden de rappels van de geselecteerde klanten op de tab <ins>Per Klant</ins> verzonden:
  - klanten met verzendmethode <ins>brief-afdruk</ins> krijgen een afgedrukte rappel;
  - klanten met verzendmethode <ins>email</ins> krijgen de rappel per email. Elke emailrun wordt als een nieuwe sessie gelogd (zie punt 8).

Na het versturen:

- wordt het rappelnummer van elke afgedrukte/geëmailde klant met één verhoogd;
- verschijnt er een samenvatting van de emailrun: hoeveel emails gelukt zijn en welke klanten gefaald hebben (met de foutmelding).

![Image 6]()

## 8 Sessie logs (geëmailde rappels opvolgen)

Via de knop <ins>Sessie Logs</ins> opent u het log van alle per email verzonden rappels:

![Image 7]()

- <ins>Status</ins>: filter op <ins>Alles</ins>, <ins>OK</ins> (geslaagde verzendingen) of <ins>Mislukt</ins> (mislukte verzendingen).
- <ins>Verzonden vanaf</ins>: enkel verzendingen vanaf een gekozen datum tonen.

Het log toont per verzending:

- <ins>Sessie</ins>: het nummer van de emailrun waartoe de verzending behoort.
- <ins>Verzonden op</ins>: wanneer de email verstuurd is.
- <ins>Klant</ins> en <ins>Naam</ins>: de referte en de naam van de klant.
- <ins>Email</ins>: het emailadres waarnaar verstuurd is.
- <ins>Rappel nr</ins>: het rappelniveau van de verzonden rappel.
- <ins>OK</ins>: of de verzending geslaagd is.
- <ins>Fout</ins>: de foutmelding bij een mislukte verzending, bijvoorbeeld een foutief emailadres.

Zo ziet u onmiddellijk welke emails niet aankwamen en waarom. U corrigeert de klantgegevens en stuurt de rappel opnieuw.

## 9 Rappels voor één klant

Vanuit de klantenfiche kunt u de rappels van die ene klant raadplegen. Het scherm wordt dan automatisch gefilterd op die klant; de selectie- en sorteeropties zijn uitgeschakeld.

![Image 8]()

