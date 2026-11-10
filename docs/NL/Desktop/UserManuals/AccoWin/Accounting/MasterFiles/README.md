# Desktop - AccoWin - Boekhouding - Basisbestanden

## 1. Inleiding

Vooraleer u verrichtingen kunt boeken, maakt u eerst de basisbestanden aan:

- **Klanten (debiteuren)**: de relaties aan wie u verkoopt en factureert.
- **Leveranciers (crediteuren)**: de relaties bij wie u aankoopt.
- **Grootboekrekeningen**: het rekeningsstelsel (boekhoudplan) van het dossier.

U opent deze schermen via het menu **Boekhouding**:

- **Boekhouding > Klanten (debiteuren)**
- **Boekhouding > Leveranciers (crediteuren)**
- **Boekhouding > Grootboekrekeningen**

## 2. Het standaard fichescherm

Alle basisbestanden gebruiken hetzelfde scherm met bovenaan twee tabbladen:

- **Lijst**: het overzicht van alle fiches. U zoekt met het zoekveld, filtert op de eerste letter met **ALT-F3** en beperkt het aantal kolommen met **ALT-F2**.
- **Fiche**: de gegevens van de geselecteerde relatie of rekening. Dubbelklik in de lijst om de fiche te openen.

Met de knoppen onderaan maakt u een nieuwe fiche aan, bewerkt of verwijdert u een fiche. Druk **F9** om rechtstreeks naar het historiek-scherm te gaan.

## 3. Klanten en leveranciers

Klanten en leveranciers gebruiken hetzelfde fichescherm. Het menu waarmee u het scherm opent, bepaalt of het om een klant of een leverancier gaat. De belangrijkste velden:

### 3.1 Tab Algemeen

- **Referte**: de unieke sleutel van de fiche. Afhankelijk van de dossierinstellingen wordt de referte automatisch genummerd; in dat geval zoekt u de relatie op naam.
- **Naam, adres, land, postcode en gemeente**.
- **B.T.W. nr** met landcode: **Accowin** controleert het formaat en waarschuwt als hetzelfde BTW-nummer al op een andere fiche voorkomt. Via de VIES-controle controleert u het nummer online.
- **Telefoon, fax, G.S.M., e-mail en website**.
- **Valuta** en **grootboek**: de standaardrekening waartegen de verrichtingen van deze relatie worden geboekt.
- **Taal**: bepaalt de taal van documenten en teksten voor deze relatie.
- **Beroep, nationaal nummer, RSZ, aard en soort**: gegevens voor de fiscale fiches (onder andere fiche 281.50).
- **EU kode**: de code voor de Intracom-aangifte (binnenland, EEG-intra, export).
- **Actief**: vink deze optie uit om de relatie te deactiveren zonder ze te verwijderen.

### 3.2 Tab Algemeen 2

- **Bank nr, IBAN en BIC**: de rekening voor SEPA-betalingen en om tegenpartijen in CODA-bestanden te herkennen.
- **Leveringsadres** en **contactpersoon**.
- **Betalingstermijn**, **einde maand** en **limiet**: de standaardtermijnen voor de vervaldatum van facturen.
- **Kredietbeperking**: termijn en percentage voor kredietbeperking (KKB).
- **Korting**: de standaardkorting.
- **Factuur layout**, **verzendwijze** en **methode verzenden document**: hoe documenten voor deze relatie worden afgedrukt en verstuurd.
- **EMail Boekh./Fact.**: apart e-mailadres voor boekhouding en facturatie.
- **UBL factuur en Peppol**: of facturen elektronisch worden verstuurd, met het Peppol-adres, de EAS-code en het access point. Met **Check Peppol Registration** controleert u of de relatie op Peppol bereikbaar is.

### 3.3 Tab Memo

- **Internal**: vrije memo voor het kantoor. Met **Ctrl+Enter** begint u een nieuwe lijn.
- **Popup tekst**: tekst die bij het openen van de fiche in een popup verschijnt. Met **Popup tonen** schakelt u de popup in of uit; met **Afdrukken** geeft u aan of de tekst wordt afgedrukt.

### 3.4 Tab Totalen

Per munt ziet u het **totaal debet**, het **totaal credit** en het **saldo** per boekjaar. Deze totalen worden automatisch bijgehouden bij het boeken.

### 3.5 Tab Historiek (F9)

Alle boekingen van de relatie, met filters op periode, dagboek, documentnummer, betaalreferentie, bedrag, datum en opmerking. Via **Geavanceerd filteren** combineert u meerdere voorwaarden. Per boeking kunt u:

- **Detail boeking** bekijken en met **Toon document** het gekoppelde document tonen.
- **Koppel een document** aan de boeking (bijvoorbeeld de factuur in PDF).
- **Opmerking aanpassen** aan de boeking.
- **Afpunten**: de betaling koppelen aan de openstaande factuur. Met **Annul. afpuntingen** maakt u een afpunting ongedaan en met **Auto afpunt** laat u **Accowin** automatisch betalingen en facturen koppelen.
- **Historiek drukken**.

### 3.6 Extra op de klantfiche

- **Verkoopdoc.**: overzicht van de openstaande verkoopdocumenten (offertes, orders, leveringen) van deze klant.
- **Rappel drukken**: meteen een rappel aanmaken voor deze klant (zie [Rappels](../../Rappels/README.md)).
- **Originele factuur afdrukken** en **Toon verzendinfo**: hoe documenten voor deze klant werden verstuurd.
- **Combine with...**: de boekingen van meerdere fiches samenvoegen in één fiche, bijvoorbeeld na een fusie of bij dubbels.
- **Licentie** en **Toegang**: beheer van de licentie en de toegang van de klant tot **Accowin**. Deze tabbladen zijn alleen zichtbaar in het beheerdossier.

### 3.7 Verwijderen

Een klant of leverancier met boekingen kan niet worden verwijderd. **Accowin** meldt dat er nog boekingen bestaan. Verwijder eerst de boekingen, of gebruik **Combine with...** om de relatie samen te voegen met een andere fiche. Een relatie die u niet meer gebruikt, deactiveert u met de optie **Actief**.

## 4. Grootboekrekeningen

U opent het rekeningsstelsel via **Boekhouding > Grootboekrekeningen**. In de lijst ziet u per rekening de omschrijving, het saldo en of ze actief is.

### 4.1 Tab Gegevens

- **Referte**: het rekeningnummer.
- **Omschrijving** in het Nederlands en het Frans.
- **Soort** en de groep van de balans: bepalen onder meer de indeling van de balans en de resultatenrekening.
- **Aftrekbaar percentage**, **wet** en **prive**: voor deels privé gebruikte rekeningen.
- **BTW kode** en **goederen kode**: de standaardcodes die het programma voorstelt bij het boeken op deze rekening.
- **Verwerking** en **rooster**: hoe de rekening in de BTW-aangifte wordt verwerkt.
- **Fiche 281.50**: de code voor de fiscale fiches.
- **Detail drukken per boeking**: het dagboekrapport per boeking in plaats van per rekening afdrukken.
- **Afpunten in grootboek**: afpuntingen binnen dezelfde rekening tonen.
- **Consolidatie** en **extra**: aanvullende instellingen.
- **Actief**: vink uit om de rekening te deactiveren.

### 4.2 Totalen, memo en historiek

De tabbladen **Totalen**, **Memo** en **Historiek (F9)** werken zoals bij klanten en leveranciers (zie 3.4 tot en met 3.5).

## 5. Tips

- Voer bij nieuwe klanten en leveranciers steeds het **IBAN** in: daarmee herkent **Accowin** de tegenpartij bij het inlezen van CODA-bestanden (zie [Coda](../../Coda/README.md)).
- Een correcte **EU kode** en **BTW-code** op de fiche zorgen ervoor dat het programma in de dagboeken de juiste BTW-behandeling voorstelt (binnenland, Intracom of export).
- U kan de standaard algemene rekeningen hergebruiken voor nieuwe dossiers via **Parameters > Algemene rekeningen - standaard**.
