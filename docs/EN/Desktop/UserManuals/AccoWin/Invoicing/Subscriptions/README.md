# Desktop - AccoWin - Invoicing - Subscriptions

## 1. Introduction

With subscriptions you invoice recurring costs automatically: maintenance contracts, rent, subscriptions and similar. You enter the lines once per customer, and **Accowin** then generates the sales invoices at set times, including email, print or Peppol.

You manage the subscriptions via **Facturatie > Abonnementen** and generate the invoices via **Facturatie > Genereer verkoopsfacturen**.

## 2. Creating a subscription

In the **Abonnementen** (Subscriptions) screen you select the **customer** and enter:

- **Datum van ... tot** (Date from ... to): the period the subscription is valid for.
- **Frequentie** (Frequency): how often an invoice is created, for example monthly or per quarter.
- **Opmerking** (Remark): free text for the subscription.
- **Date last invoice** and **date next invoice**: maintained automatically by **Accowin**.
- **Dagboek** (Journal): the sales journal the invoices are booked in.
- **Totaal excl** (Total excl.): the total of the subscription.

Below you enter the invoice lines (articles or free lines) with **Lijn bewaren** (Save line), **Lijn wissen** (Delete line) and **Lijn invoegen** (Insert line).

### 2.1 Date display in the description

With **Weergave datum in omschrijvingsveld** (Date display in the description field) you decide which date goes on the invoice line, in the format **[part1:part2:part3]**. The supported parts:

| Part | Meaning |
|------|---------|
| **D** | day |
| **M** | month |
| **MS** | month written out |
| **Y** | year |
| **Q** | quarter |
| **DT** | date |

Example: a monthly rent invoice with `MS Y` shows `January 2025` in the description.

### 2.2 Due date

With **Aantal dagen voor vervaldatum factureren** (Invoice this many days before the due date) you enter how many days before the due date the invoice is created.

## 3. Generating sales invoices

Via **Facturatie > Genereer verkoopsfacturen** (Generate sales invoices) you create the subscription invoices. The screen has three steps:

1. **Selectie** (Selection): choose the **invoices up to date** and the **customer**. Also enter the **directory for UBL and PDF files**.
2. **Voorstel** (Proposal): **Accowin** shows the subscriptions that are due. With **Toon abonnement** (Show subscription) you view the subscription, with **Selectie wissen** (Clear selection) and **Alles selecteren** (Select all) you adjust the selection.
3. **Generatie** (Generation): choose the **next journal number** and the reports (**Rapport levernota's**, **Rapport facturen**) and click **Genereer facturen** (Generate invoices).

Afterwards you see the **generated invoices** with a **preview**, and you send them per invoice with **Emailen** (Email), **Afdrukken** (Print) or **Peppol**. With **Volgende** (Next) and **Vorige** (Previous) you browse the invoices.

## 4. Tips

- Make the frequency and the date display match what you promised the customer on paper, for example "quarterly invoicing, in advance".
- Always check the **proposal** after generating: subscriptions with an end date in the past are no longer proposed.
- Generated invoices appear directly in the sales journal; check them afterwards like any sales document (see [Sales documents](../SalesDocuments/README.md)).
