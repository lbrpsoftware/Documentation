# Desktop - BelcoFin - Parameters en basisbestanden

## 1. Inleiding

De instellingen van **Belcofin** zitten in het menu **Parameters**; de basisbestanden (aangevers, begunstigden, bedrijfsleiders, medewerkers) opent u via het menu **Bestanden**. De basisbestanden staan beschreven in de [Handleiding](../Manual/README.md) §2. Deze pagina geeft een overzicht van het menu **Parameters**.

## 2. Taal en weergave

- **Taal**: schakelt de gebruikersinterface om tussen **Nederlands** en **Frans**.
- **Themes**: kies het kleurenthema van het programma.

## 3. Algemene opties

**Parameters > Algemene opties** bevat de hoofdinstellingen van het programma, onder andere:

- de **referte-instellingen** van aangevers, begunstigden, bedrijfsleiders en medewerkers (numeriek of alfabetisch, en de refertelengte);
- de opgaverefertes voor Belcotax en Finprof;
- de tab **Export loonboekingen** met de map voor de exportbestanden (zie [Export Lonen](../ExportWages/README.md)).

## 4. Teksten

- **Parameters > Teksten emails**: de standaardtekst van de e-mails rond de bedrijfsvoorheffing. U geeft de tekst per taal in (**Nederlands, Frans, Duits, Engels**); met **Veld invoegen** voegt u samenvoegvelden toe (naam, bedrag, datum) die **Belcofin** per verzending invult. Nieuwe lijn in de tekst doet u met **Ctrl+Enter**.
- **Parameters > Teksten algemeen**: de algemene vrije teksten die u in brieven en rapporten kunt oproepen.

## 5. Ontvangkantoren

**Parameters > Ontvangkantoren**: het bestand van de ontvangstkantoren van de FOD Financiën, voor fiches en aangiftes die naar een kantoor worden verstuurd.

## 6. Febiac database

**Parameters > Febiac database**: de catalogus met officiële wagenwaarden voor het voordeel alle aard van voertuigen. Zie [Voertuig en bewoning](../VehicleHousing/README.md) §4.

## 7. Coefficienten

**Parameters > Coefficienten**: de coefficients waarmee **Belcofin** de voordelen alle aard berekent, **per inkomstenjaar**:

- **Divers**: de percentages voor **verwarming**, **elektriciteit**, **internet**, **pc persoonlijk gebruik**, **GSM/tablet** en **telefoonabonnement**;
- **Bewoning**: de coefficients bij een **niet-geïndexeerd kadastraal inkomen** (coef 1 teller/noemer, coef 2 onder en boven de grens) en de **gemeubeld**-verhouding (teller/noemer).

Wijzig uitsluitend de coefficients wanneer de officiële percentages veranderen; de waarden gelden voor alle fiches van het inkomstenjaar.

## 8. Rapporten

**Parameters > Rapporten**: beheer van de rapportdefinities en -sjablonen van **Belcofin**.

## 9. Import, samenvoegen en queries

- **Parameters > Import**: gegevens uit externe bronnen inlezen (Kluwer, AdminIS, e-share, CSV) — zie [Import Data](../ImportData/README.md).
- **Parameters > Databases samenvoegen**: een back-up van een andere Belcofin-database samenvoegen met de huidige — zie [Databases samenvoegen](../MergeDatabases/README.md).
- **Parameters > Queries**: vrij opgestelde overzichten over de database.

## 10. Tips

- Controleer na elke jaarwisseling de **coefficienten** van het nieuwe inkomstenjaar vóór u fiches maakt.
- Houd de **teksten emails** per taal gelijk: bedrijfsleiders met een andere taal ontvangen anders een lege of verkeerde tekst.
- De referte-instellingen wijzigen is alleen verstandig vóór er fiches bestaan; daarna houdt **Belcofin** de gekozen volgorde aan.
