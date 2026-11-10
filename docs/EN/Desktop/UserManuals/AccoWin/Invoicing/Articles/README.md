# Desktop - AccoWin - Invoicing - Articles

## 1. Introduction

In the article file you maintain the products and services you invoice. On an article you store the sales and purchase prices, the ledger accounts and the VAT codes. When you enter sales and purchase lines, you only pick the article: **Accowin** fills in prices, accounts and VAT automatically.

You open the article file via **Facturatie > Artikels** (Invoicing > Articles). The article groups are managed via **Facturatie > Artikelgroepen**.

## 2. Articles

The screen has a **Lijst** (List) tab and a **Fiche** (Record) tab, like all master files (see [Master files](../../Accounting/MasterFiles/README.md)).

### 2.1 General details

- **Referte** (Reference): the unique code of the article.
- **Description** in four languages: Dutch, French, English and German. **Accowin** uses the description in the language of the customer.
- **Active**: clear to deactivate the article.

### 2.2 Tab Gegevens (Details)

**Verkoop (Sales)**

- **Sales price (EUR)**: the default sales price.
- **Sales account**: the general ledger account proposed on sales lines.
- **VAT code sales**: the default VAT code for sales.
- **Packaging**: the packaging unit, for example `piece` or `box`.

**Artikelinfo (Article info)**

- **Groep (Group)**: the article group of the article. The group is used in the article overviews (overview per article group).
- **Intrastat number**: the goods code for the Intrastat declaration (Intra &T in the documents).
- **Barcode (EAN)**: the barcode of the article, for use with the scan window in the sales documents.

**Aankoop (Purchase)**

- **Purchase price (EUR)**, **purchase account** and **VAT code purchase**: the counterparts for purchase lines.
- **Packaging** and the option **Excluding**: whether prices are entered including or excluding VAT.

**Bestelinformatie (Order information)**

- **Order code supplier** and **supplier**: for ordering articles from fixed suppliers (see the order form in [Sales documents](../SalesDocuments/README.md)).

### 2.3 Tab Memo

Free text for the article, with the options **Popup text**, **Show popup** and **Print** (see [Master files](../../Accounting/MasterFiles/README.md)).

## 3. Article groups

Via **Facturatie > Artikelgroepen** you manage the groups. Per group you enter the **reference** and the **descriptions** in Dutch, French, English and German. Assign the group on the article in the **Groep** (Group) field.

Article groups are used to organise articles in the lists and the **overview per article group** (via **Facturatie > Afdrukken overzicht per artikel groep**).

## 4. Printing lists

Via the **Facturatie** menu you print the article data:

- **Afdrukken artikellijsten** (Print article lists): the articles with prices and groups.
- **Prijslijst** (Price list): the price list for customers, also per group via **Rapporten > Facturatie > Prijslijst per groep**.
- **Stocklijst** (Stock list): the stock list, also per group via **Rapporten > Facturatie > Stocklijst per groep**.

## 5. Tips

- Enter the **Intrastat number** for articles you sell abroad, so the Intrastat data is prepared correctly.
- Use the **barcode (EAN)** to scan articles in the sales documents.
- Changes to articles (prices, descriptions) apply to new documents; existing documents keep the lines as they were entered.
