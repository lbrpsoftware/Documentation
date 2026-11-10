# Desktop - AccoWin - VAT

## 1. Introduction

The menu **Rapporten > BT&W** contains everything for the periodic VAT obligations: the VAT return, the Intracom statement, the VAT listing, the OSS and IOSS returns and the checks of the VAT numbers.

Two things are described elsewhere:

- **Filing** the VAT return and the IC statement goes via [Intervat](../Intervat/README.md).
- The **check reports** (history of VAT returns, detail of VAT boxes, comparison VAT-turnover, overview of VAT returns) are described under [Reports](../Reports/README.md), but they are also explained below because they belong to the return.

**Note**: the VAT functions are only available for dossiers in the standard currency (euro) and when your user has the right **BTW afdrukken** (print VAT).

## 2. Selecting the VAT period

With most VAT functions the screen **Selecteer BTW-periodes** (Select VAT periods) opens first:

- **B.T.W. Periode** (VAT period): the VAT period itself, for example `2025/01` for January or `2025/1K` for the first quarter.
- **Van** and **tot** (from / to): an alternative range of periods.
- **Boekjaar** and **boekperiode** (financial year and booking period): select on financial year and booking period instead of VAT period.

Click **Start afdruk** (Start print) to compose the report or return for the chosen period(s).

## 3. Preparing the VAT return

1. Choose **Rapporten > BT&W > BTW-aangifte** (VAT return) and select the period (see 2).
2. **Accowin** composes the boxes of the return from the booked transactions and the VAT codes of the general ledger accounts.
3. Check before filing:
   - **Detail BTW-vakken** (Detail VAT boxes): which bookings went into each box;
   - **Overeenstemming BTW - Omzet** (Comparison VAT-turnover): whether the VAT boxes match the booked turnover;
   - **Overzicht BTW-aangiften** (Overview of VAT returns): the returns per period side by side.
4. File the return via [Intervat](../Intervat/README.md).
5. With **Historiek BTW-aangiften** (History of VAT returns) you consult the filed returns afterwards.

## 4. Intracom statement

The **Intracom-aangifte** (Intracom statement, IC) lists the intra-community acquisitions and transfers per EU country, based on the EU codes on the records and the general ledger accounts. You prepare it per VAT period and file it together with the VAT return via [Intervat](../Intervat/README.md).

## 5. OSS and IOSS returns

For the VAT regimes of the One Stop Shop there are separate returns:

- **OSS return (Union scheme)**: the distance sales to private individuals in other EU countries, declared per country at the rate of that country.
- **IOSS return (Import scheme)**: the import of goods from outside the EU with a value up to 150 euro to private individuals.

Both returns use the same period screen as the VAT return (see 2). **Accowin** composes the amounts from the sales with the matching VAT codes; you file them via the portals of the FPS Finance.

## 6. VAT listing

The **BTW-listing** (VAT listing) is the yearly client listing: per client the total invoicing of the year, above the legal threshold. You prepare it via **Rapporten > BT&W > BTW-listing**:

1. First check the VAT numbers of the clients:
   - **Controle BTW-nummers** (Check VAT numbers): the check inside **Accowin** on format and consistency;
   - **Controle BTW-nummers online (VIES)**: the check against the VIES database of the EU.
2. In the screen **BTW-listing op diskette** (VAT listing on disk) enter the **declarant** (office, address, phone, VAT number, contact and email) and the **year of the return**.
3. Set the **minimum turnover**: clients below this amount stay out of the listing.
4. Choose the dossiers that go into the listing: with **+...** and **-...** you add or remove, with the **space bar** you toggle the selection of a dossier.
5. Enter the **file locations** for the listing and the IC statement, each with a **unique sequential number** (max 4 digits).
6. In the confirmation screen **BTW-listing Intervat** you see the created files. Copy them to the right location with **Locatie bestand kopiëren** (Copy file location) and open the website of the FPS with **website openen**.

With **Listing afdrukken** (Print listing) you print the listing as a check; with **Listing via Intervat** you file it electronically.

## 7. VIES check of clients

With **Rapporten > BT&W > Controleer BTW-nummers VIES** you check the VAT numbers of your clients against the European VIES database:

- **Klanten** (Clients) with **van** and **tot** (from/to): the range of client references to check.
- **Dagboeken en periode** (Journals and period): limit the check to the clients that occur in the chosen journals and period.
- **Sorteer op** (Sort by): the sort order of the result.

Click **Start afdruk** (Start print). The overview shows which numbers are valid and which are not; correct the records with an invalid number before booking invoices or filing the listing.

## 8. Overview of internal invoicing

The **Overzicht interne facturatie** (Overview of internal invoicing) is available for dossiers that belong to a **VAT unit**. It shows the invoicing between the dossiers of the unit, which is processed as internal transactions in the VAT return.

## 9. Tips

- Always follow the order: book → **detail VAT boxes** → **comparison VAT-turnover** → file. This way you find deviations before the return.
- Run the **VIES check** before every VAT listing and for new EU clients.
- The history of your returns stays available; use **Historiek BTW-aangiften** with questions from the audit and during the year-end closing.
