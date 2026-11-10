# Desktop - AccoWin - Facturatie - Artikels

## 1. Inleiding

In het artikelbestand houdt u de producten en diensten bij die u factureert. Op een artikel bewaart u de verkoop- en aankoopprijzen, de boekhoudrekeningen en de BTW-codes. Bij het ingeven van verkoop- en aankooplijnen hoeft u dan alleen het artikel te kiezen: **Accowin** vult prijzen, rekeningen en BTW automatisch aan.

U opent het artikelbestand via **Facturatie > Artikels**. De artikelgroepen beheert u via **Facturatie > Artikelgroepen**.

## 2. Artikels

Het scherm heeft zoals alle basisbestanden een tab **Lijst** en een tab **Fiche** (zie [Basisbestanden](../../Accounting/MasterFiles/README.md)).

### 2.1 Algemene gegevens

- **Referte**: de unieke code van het artikel.
- **Omschrijving** in vier talen: Nederlands, Frans, Engels en Duits. **Accowin** gebruikt de omschrijving in de taal van de klant.
- **Actief**: vink uit om het artikel te deactiveren.

### 2.2 Tab Gegevens

**Verkoop**

- **Verkoopprijs (EUR)**: de standaardverkoopprijs.
- **Rekening verkoop**: de grootboekrekening die wordt voorgesteld bij verkooplijnen.
- **B.T.W. - kode verkoop**: de standaard BTW-code voor verkopen.
- **Verpakking**: de verpakkingseenheid, bijvoorbeeld `stuk` of `doos`.

**Artikelinfo**

- **Groep**: de artikelgroep waartoe het artikel behoort. De groep wordt gebruikt in de artikeloverzichten (overzicht per artikelgroep).
- **Intrastat nummer**: de goederencode voor de Intrastat-aangifte (Intra &T in de documenten).
- **Barkode (EAN)**: de streepjescode van het artikel, te gebruiken met het scanvenster in de verkoopdocumenten.

**Aankoop**

- **Aankoopprijs (EUR)**, **rekening aankoop** en **B.T.W. - kode aankoop**: de tegenhangers voor aankooplijnen.
- **Verpakking** en de optie **Exclusief**: of de prijzen inclusief of exclusief BTW worden opgegeven.

**Bestelinformatie**

- **Bestelkode leverancier** en **leverancier**: voor wie artikelen bestelt bij vaste leveranciers (zie de bestelbon in [Verkoopdocumenten](../SalesDocuments/README.md)).

### 2.3 Tab Memo

Vrije tekst bij het artikel, met de opties **Popup tekst**, **Popup tonen** en **Afdrukken** (zie [Basisbestanden](../../Accounting/MasterFiles/README.md)).

## 3. Artikelgroepen

Via **Facturatie > Artikelgroepen** beheert u de groepen. Per groep geeft u de **referte** en de **omschrijvingen** in het Nederlands, Frans, Engels en Duits in. Wijs de groep toe op het artikel in het veld **Groep**.

Artikelgroepen worden gebruikt om artikelen te ordenen in de lijsten en het **overzicht per artikelgroep** (via **Facturatie > Afdrukken overzicht per artikel groep**).

## 4. Lijsten afdrukken

Via het menu **Facturatie** drukt u de artikelgegevens af:

- **Afdrukken artikellijsten**: de artikelen met prijzen en groepen.
- **Prijslijst**: de prijslijst voor klanten, ook per groep via **Rapporten > Facturatie > Prijslijst per groep**.
- **Stocklijst**: de stocklijst, ook per groep via **Rapporten > Facturatie > Stocklijst per groep**.

## 5. Tips

- Vul bij artikelen die u in het buitenland verkoopt het **Intrastat nummer** in, zodat de Intrastat-gegevens correct worden opgesteld.
- Gebruik de **barkode (EAN)** om artikelen met de scanner in te lezen in de verkoopdocumenten.
- Wijzigingen aan artikelen (prijzen, omschrijvingen) gelden voor nieuwe documenten; bestaande documenten behouden de lijnen zoals ze zijn ingegeven.
