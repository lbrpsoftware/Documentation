# Desktop - AccoWin - Accounting - Master files

## 1. Introduction

Before you can book transactions, you first create the master files:

- **Customers (debtors)**: the relations you sell to and invoice.
- **Suppliers (creditors)**: the relations you buy from.
- **General ledger accounts**: the chart of accounts of the dossier.

You open these screens from the **Boekhouding** (Accounting) menu:

- **Boekhouding > Klanten (debiteuren)** (Customers)
- **Boekhouding > Leveranciers (crediteuren)** (Suppliers)
- **Boekhouding > Grootboekrekeningen** (General ledger accounts)

## 2. The standard file screen

All master files use the same screen with two tabs at the top:

- **Lijst** (List): the overview of all records. You search with the search field, filter on the first letter with **ALT-F3** and limit the number of columns with **ALT-F2**.
- **Fiche** (Record): the details of the selected relation or account. Double-click in the list to open the record.

Use the buttons at the bottom to create a new record or to edit or delete one. Press **F9** to go directly to the history screen.

## 3. Customers and suppliers

Customers and suppliers use the same record screen. The menu you open the screen from determines whether it is a customer or a supplier. The most important fields:

### 3.1 Tab Algemeen (General)

- **Referte** (Reference): the unique key of the record. Depending on the dossier settings the reference is numbered automatically; in that case you look up the relation by name.
- **Name, address, country, postal code and city**.
- **VAT number** with country code: **Accowin** checks the format and warns when the same VAT number already exists on another record. With the VIES check you validate the number online.
- **Phone, fax, mobile, email and website**.
- **Currency** and **general ledger account**: the default account the transactions of this relation are booked against.
- **Language**: the language of documents and texts for this relation.
- **Profession, national number, RSZ, nature and type**: data for the fiscal forms (among others form 281.50).
- **EU code**: the code for the Intracom declaration (domestic, EU-intra, export).
- **Active**: clear this option to deactivate the relation without deleting it.

### 3.2 Tab Algemeen 2 (General 2)

- **Bank account, IBAN and BIC**: the account for SEPA payments and to recognise counterparties in CODA files.
- **Delivery address** and **contact person**.
- **Payment term**, **end of month** and **limit**: the default terms for the due date of invoices.
- **Credit restriction**: term and percentage for credit restriction (KKB).
- **Discount**: the default discount.
- **Invoice layout**, **shipping method** and **document send method**: how documents for this relation are printed and sent.
- **Email bookkeeping/invoicing**: separate email address for bookkeeping and invoicing.
- **UBL invoice and Peppol**: whether invoices are sent electronically, with the Peppol address, the EAS code and the access point. With **Check Peppol Registration** you check whether the relation is reachable on Peppol.

### 3.3 Tab Memo

- **Internal**: free note for the office. Use **Ctrl+Enter** to start a new line.
- **Popup text**: text that appears in a popup when you open the record. **Popup tonen** (Show popup) toggles the popup; **Afdrukken** (Print) indicates whether the text is printed.

### 3.4 Tab Totalen (Totals)

Per currency you see the **total debit**, the **total credit** and the **balance** per financial year. These totals are updated automatically when you book.

### 3.5 Tab Historiek (History, F9)

All bookings of the relation, with filters on period, journal, document number, payment reference, amount, date and remark. With **Geavanceerd filteren** (Advanced filtering) you combine several conditions. Per booking you can:

- View the **booking detail** and use **Toon document** (Show document) to show the linked document.
- **Koppel een document** (Link a document) to the booking, for example the invoice as a PDF.
- **Opmerking aanpassen** (Change remark) of the booking.
- **Afpunten** (Match): link the payment to the outstanding invoice. With **Annul. afpuntingen** (Cancel matches) you undo a match, and with **Auto afpunt** you let **Accowin** match payments and invoices automatically.
- **Historiek drukken** (Print history).

### 3.6 Extra on the customer record

- **Verkoopdoc.** (Sales documents): overview of the open sales documents (offers, orders, deliveries) of this customer.
- **Rappel drukken** (Print reminder): create a reminder for this customer right away.
- **Originele factuur afdrukken** (Print original invoice) and **Toon verzendinfo** (Show send info): how documents for this customer were sent.
- **Combine with...**: merge the bookings of several records into one, for example after a merger or with duplicates.
- **Licentie** and **Toegang** (Access): management of the licence and the access of the customer to **Accowin**. These tabs are only visible in the management dossier.

### 3.7 Deleting

A customer or supplier with bookings cannot be deleted. **Accowin** reports that bookings still exist. Delete the bookings first, or use **Combine with...** to merge the relation into another record. To stop using a relation, deactivate it with the **Active** option.

## 4. General ledger accounts

You open the chart of accounts via **Boekhouding > Grootboekrekeningen**. The list shows the description, the balance and whether each account is active.

### 4.1 Tab Gegevens (Details)

- **Referte** (Reference): the account number.
- **Description** in Dutch and French.
- **Type** and the balance sheet group: among others they determine the layout of the balance sheet and the income statement.
- **Deductible percentage**, **law** and **private**: for accounts that are partly private.
- **VAT code** and **goods code**: the default codes the program proposes when you book on this account.
- **Processing** and **schedule**: how the account is processed in the VAT return.
- **Fiche 281.50**: the code for the fiscal forms.
- **Print detail per booking**: print the journal report per booking instead of per account.
- **Match in general ledger**: show matches within the same account.
- **Consolidation** and **extra**: additional settings.
- **Active**: clear to deactivate the account.

### 4.2 Totals, memo and history

The tabs **Totalen** (Totals), **Memo** and **Historiek** (History, F9) work the same as for customers and suppliers (see 3.4 to 3.5).

## 5. Tips

- Always enter the **IBAN** for new customers and suppliers: **Accowin** uses it to recognise the counterparty when reading CODA files (see [Coda](../../Coda/README.md)).
- A correct **EU code** and **VAT code** on the record make sure the program proposes the right VAT treatment in the journals (domestic, Intracom or export).
- You can reuse the default general ledger accounts for new dossiers via **Parameters > Algemene rekeningen - standaard**.
