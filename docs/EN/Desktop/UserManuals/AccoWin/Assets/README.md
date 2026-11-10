# Desktop - AccoWin - Assets

## 1. Introduction

With the assets module you track the investments of the dossier: the purchase, the yearly depreciations, the investment deduction and the disposals. You find the functions in the **Activa** menu.

**Accowin** also has the program **Finasset** for full fixed asset management. When you work with investments extensively, Finasset is the right tool; the assets module in **Accowin** covers the most common needs inside the bookkeeping.

## 2. Managing investments

Via **Activa > Beheer activa** (Manage assets) you open the screen **Investeringen en afschrijvingen** (Investments and depreciations). The list shows per investment the **account**, the **document**, the **description**, the **amount** and the status (L/D: running or done). On the record you enter:

### 2.1 Depreciation

- **Method**: the depreciation method, for example straight-line or reducing balance.
- **Duration of the depreciation** and the **number of months first financial year**: for a shortened first year.
- **Year of purchase** and **purchase date**.
- **Purchase value (EUR)** and the **residual value**.
- **Legal deduction** and **private part**: the non-deductible part of the investment.
- **Year of sale or write-off**: the year in which the investment leaves the assets.
- **Pro rata**: with **pro rata per day** or **fully depreciate (no pro rata)** you decide how the first (partial) year is depreciated.

### 2.2 VAT and investment deduction

- **VAT type**: deductible, not deductible or partly (for example mixed or private use).
- **Investment deduction**: whether and how much deduction the investment gives; you set the percentages via **Activa > Investeringsaftrek** (and **Procenten investeringen**).

### 2.3 Booking accounts

- **Purchase value account** (the asset account) and the **general ledger account**.
- **Journal** and **sequence number**: where the depreciation bookings are booked.
- **Investment type** and **investment group**: for the grouping in the reports.

### 2.4 Depreciations

On the tab **Afschrijvingen** (Depreciations) you see the depreciation per year with percentages and amounts; **Accowin** calculates them from the given method and duration.

## 3. Disposal and transfer

- **Activa > Uitboeking** (Disposal): the screen **Uitboeken** books the sale or write-off of an investment. You see the **original** and **current** purchase value, the depreciations up to the previous financial year (**tot afschr vorig BJ**) and the **disposal value**. Enter the **date**, the **reason**, the **document number**, the **VAT**, the **customer** and optionally a **remark**, and click **Uitvoeren** (Execute). With **tem AK boekjaar** you limit up to which financial year is disposed.
- **Activa > Overboeking rekening** (Transfer account): transfer investments from one account to another.
- **Activa > Type uitboekingen** (Disposal types): manage the reason codes for disposals.

## 4. Processing depreciations

- **Activa > Herbereken afschrijvingen** (Recalculate depreciations): recalculate the depreciations. You choose the **financial year**, the range **from account** to **to account** and optionally a **group**, and click **Selecteren** (Select). Use this after changes to methods or amounts.
- **Activa > Afschrijving boekjaar 0 maken** (Make depreciation year 0): set the depreciation of the opening year to 0.

## 5. Groups

With **Activa > Investeringsgroepen** (Investment groups) and **Voeg investering toe aan investeringsgroep** (Add investment to group) you group investments for the reports and for joint processing.

## 6. Reports

Via the **Activa** menu you print: **Aanschaffingen** (Purchases), **Afschrijvingstabel** (Depreciation table, also via **Druk afschrijvingstabel**), **Jaaroverzicht** (Year overview), **Tabel der bedrijfsmiddelen** (Table of assets), **Overzicht uitboekingen** (Overview of disposals), **Investeringaftrek** (Investment deduction) and **Totaal rekeningen** (Total accounts). All reports first open the parameters screen (see [Reports](../Reports/README.md)).

## 7. Tips

- Fill in the **private part** and the **legal deduction** correctly for every investment: they determine the fiscal depreciation.
- Before the [year-end closing](../YearEnd/README.md) check that all investments of the year are entered and that the **depreciation table** is correct.
- After corrections on investments always run **Herbereken afschrijvingen** before printing.
