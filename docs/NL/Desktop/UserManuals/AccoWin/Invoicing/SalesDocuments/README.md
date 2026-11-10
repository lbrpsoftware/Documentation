# Desktop - AccoWin - Facturatie - Verkoopdocumenten

## 1. Inleiding

Alle verkoopdocumenten gebruiken hetzelfde scherm. U maakt ze aan via het menu **Facturatie**:

- **Opmaken verkoopsofferte**
- **Opmaken verkoopsorder**
- **Opmaken verkoopslevering/retour**
- **Opmaken verkoopsfactuur**

De documenten bouwen voort op elkaar: uit een offerte maakt u een order, uit een order een levering en uit een levering een factuur. U kan ook leveringen van meerdere orders combineren tot één factuur.

## 2. Het documentscherm

### 2.1 Algemeen

Bovenaan kiest u de **klant** (met **Ref. klant** zoekt u op de referentie van de klant) en ziet u de **status** van het document. Daaronder voert u de lijnen in: kies een **artikel** of typ een vrije omschrijving, geef de hoeveelheid en de prijs in. Met **Scanvenster openen** leest u barkodes in.

De knoppen rechtsboven:

- **Afdrukken**: het document afdrukken of versturen volgens de verzendmethode van de klant.
- **Document sluiten**: het document afsluiten, waarna het niet meer kan worden gewijzigd. Bij een verkoopsfactuur wordt het document geboekt in het verkoopdagboek.
- **Lijn sluiten**: de huidige lijn afsluiten.
- **Importeren / Exporteren**: documentgegevens uitwisselen.
- **Gelijke artikelen samenvoegen**: gelijke artikellijnen in het document samenvoegen.

### 2.2 Tab Facturatie

- **Vervaldag** en **betaling**: de vervaldatum en de betalingsvoorwaarden. **Accowin** stelt ze voor op basis van de klantfiche.
- **Korting** en de optie **Korting toepassen op alle lijnen**: de korting van het document.
- **KKB%** en **kredietbeperking %**: de kredietbeperking voor bouwsectorfacturen.
- **Ref. betaling**: de betaalreferentie van het document, bijvoorbeeld de gestructureerde mededeling.
- **Afgedrukt**: of het document al werd afgedrukt.

### 2.3 Tab Levering

De leveringsgegevens: **leveringsdatum**, **levertijd** (tot datum en uur), **verzendwijze**, het **leveringsadres** met **land** en **gemeente**, **transportnummer** en **contactpersoon**.

### 2.4 Memo

- **Memo**: interne tekst.
- **Opmerking kort**: een korte opmerking die op het document wordt afgedrukt.

### 2.5 Totalen en BTW

Onderaan ziet u het **totaal exclusief**, het **totaal BTW** en het **totaal inclusief**. Daarnaast:

- **Prijzen inclusief**: schakel om te bepalen of u prijzen inclusief of exclusief BTW ingeeft.
- **BTW toepassen**: de BTW herberekenen op de lijnen.
- **Intra &T**: de Intrastat-gegevens van de lijnen openen.
- **1 EUR =**: de koers bij een vreemde valuta.
- **Kredietbeperk.**: het bedrag van de kredietbeperking.

Bij het veld **Document** ziet u het gekoppelde **PDF**, het **gelinkte basisdocument** (waaruit dit document is gemaakt) en het **gelinkte doeldocument** (het vervolgdocument). Zo ziet u meteen de hele keten van offerte tot factuur.

## 3. Documenten omzetten

Terwijl een document openstaat, zet u het om in het volgende type:

- **Maak verkoopsofferte**: van het huidige document een offerte maken.
- **Maak verkoopsorder**: van de offerte een order maken.
- **Maak verkoopslevering**: van de order een levering maken.
- **Maak verkoopsfactuur**: van de levering een factuur maken.

Met **Dupliceer** maakt u een kopie van het huidige document, bijvoorbeeld voor een retour of een gelijkaardige order.

Om lijnen uit een bestaand document over te nemen zonder het document om te zetten, gebruikt u **Inlezen verkoopsofferte**, **Inlezen verkoopsorder**, **Inlezen verkoopslevering** of **Inlezen verkoopsfactuur**. U selecteert het bronbestand en de lijnen worden in het huidige document overgenomen.

Bij de verkoopsfactuur bestaat daarnaast **Inlezen levernota's**: alle levernota's van de klant die nog niet zijn gefactureerd, worden in één keer overgenomen (zie ook 8).

### 3.1 Verkoopsfactuur: bijzondere gevallen

- **6% BTW regeling woning > 10 jaar**: vink deze optie aan voor de verkoop van een woning ouder dan tien jaar. **Accowin** voegt dan automatisch de wettelijk verplichte vermelding toe aan het document, in de taal van de klant.
- **Creditnota's**: een verkoopsfactuur met negatieve bedragen werkt als creditnota.

## 4. Templates

Met **Template bewaren** slaat u het huidige document op als template en met **Template importeren** haalt u een template op. Zo maakt u terugkerende documenten snel aan.

## 5. Open documenten

Via **Facturatie > Open documenten** ziet u alle documenten die nog niet zijn afgesloten:

- Filter op **document type** en gebruik **Filter gebruiken** voor verdere selectie.
- **Bekijk document**: het document openen.
- **Document sluiten**: het document afsluiten zonder het te factureren.
- **Leveren**: van de geselecteerde orders de levering registreren.
- **Afdrukken lijst** en **Print orderboek**: het overzicht afdrukken.

## 6. Genereer verkoopsfacturen uit leveringen

Via **Facturatie > Genereer verkoopsfacturen** maakt u in één keer facturen van de openstaande leveringen. Het scherm doorloopt drie stappen:

1. **Selectie**: kies de **leveringsdatum vanaf**, de **klant van/tot**, het **leveringsnummer vanaf** en het **dagboek**.
2. **Voorstel**: **Accowin** toont de leveringen die in aanmerking komen. Met **+...** en **-...** voegt u toe of verwijdert u, met **Toon levering** bekijkt u een levering.
3. **Generatie**: stel de parameters in:
   - **Dagboek** en **nummering start vanaf**.
   - **Datum factuur** en **boekingsperiode/jaar**.
   - **Extra lijn toevoegen met doc nr en datum van basis document**: vermeldt de levering op de factuur.
   - **Dagboek referte vermelden bij overname document**.
   - **Combineer leveringen zelfde klant tot 1 factuur**.
   - **Extra blanco lijn tussen 2 documenten**.
   - **Directory voor UBL en PDF bestanden**: waar de elektronische versies worden bewaard.

Klik op **Genereer facturen** om de facturen te maken en te boeken.

## 7. Afdrukken en verzenden

- Via **Afdrukken** in het document drukt u het document af of stuurt u het volgens de **methode verzenden document** van de klant.
- Via **Facturatie > Afdrukken verkoopsdocumenten** drukt u gemaakte documenten opnieuw af.
- Via **Facturatie > Afdrukken overzicht per betaalwijze** en **Afdrukken overzicht per artikel groep** drukt u de overzichten van de verkopen af.
- Via **Facturatie > Exporteer verkopen naar UBL** maakt u elektronische factuurbestanden (zie [UBL](../../UBL/README.md)).

## 8. Levernota en bestelbon

- **Facturatie > Levernota klant** (scherm **Levernota aan klant**): een leveringsbon voor artikelen die nog niet op een verkoopdocument staan. Met **Reeds gefactureerd** ziet u wat al werd gefactureerd. Levernota's neemt u later over in een verkoopsfactuur.
- **Facturatie > Bestelbon leverancier** (scherm **Bestelbon aan leverancier**): een bestelbon voor de leverancier met **leverdatum**, **leveringsadres** en de artikellijnen. U drukt ze af met **Afdrukken**.
