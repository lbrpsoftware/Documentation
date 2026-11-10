# Desktop - AccoWin - Invoicing - Sales documents

## 1. Introduction

All sales documents use the same screen. You create them from the **Facturatie** (Invoicing) menu:

- **Opmaken verkoopsofferte** (Create sales offer)
- **Opmaken verkoopsorder** (Create sales order)
- **Opmaken verkoopslevering/retour** (Create sales delivery/return)
- **Opmaken verkoopsfactuur** (Create sales invoice)

The documents build on each other: from an offer you make an order, from an order a delivery and from a delivery an invoice. You can also combine deliveries of several orders into one invoice.

## 2. The document screen

### 2.1 General

At the top you select the **customer** (with **Ref. klant** you search on the customer reference) and you see the **status** of the document. Below you enter the lines: pick an **article** or type a free description, then enter the quantity and the price. With **Scanvenster openen** (Open scan window) you scan barcodes.

The buttons at the top right:

- **Afdrukken** (Print): print the document or send it according to the send method of the customer.
- **Document sluiten** (Close document): close the document, after which it can no longer be changed. For a sales invoice the document is booked in the sales journal.
- **Lijn sluiten** (Close line): close the current line.
- **Importeren / Exporteren** (Import / Export): exchange document data.
- **Gelijke artikelen samenvoegen** (Merge equal articles): merge equal article lines in the document.

### 2.2 Tab Facturatie (Invoicing)

- **Vervaldag** (Due date) and **betaling** (payment): the due date and the payment terms. **Accowin** proposes them from the customer record.
- **Korting** (Discount) and the option **Korting toepassen op alle lijnen** (Apply discount on all lines): the discount of the document.
- **KKB%** and **kredietbeperking %** (credit restriction %): the credit restriction for construction sector invoices.
- **Ref. betaling** (Payment reference): the payment reference of the document, for example the structured communication.
- **Afgedrukt** (Printed): whether the document was already printed.

### 2.3 Tab Levering (Delivery)

The delivery data: **leveringsdatum** (delivery date), **levertijd** (delivery time, until date and hour), **verzendwijze** (shipping method), the **delivery address** with **country** and **city**, **transport number** and **contact person**.

### 2.4 Memo

- **Memo**: internal text.
- **Opmerking kort** (Short remark): a short remark that is printed on the document.

### 2.5 Totals and VAT

At the bottom you see the **total excluding**, the **VAT total** and the **total including**. In addition:

- **Prijzen inclusief** (Prices including): switch to decide whether you enter prices including or excluding VAT.
- **BTW toepassen** (Apply VAT): recalculate the VAT on the lines.
- **Intra &T**: open the Intrastat data of the lines.
- **1 EUR =**: the exchange rate for a foreign currency.
- **Kredietbeperk.** (Credit restriction): the amount of the credit restriction.

In the **Document** field you see the linked **PDF**, the **linked base document** (from which this document was made) and the **linked target document** (the follow-up document). This shows the whole chain from offer to invoice.

## 3. Converting documents

While a document is open, you convert it to the next type:

- **Maak verkoopsofferte** (Make sales offer): turn the current document into an offer.
- **Maak verkoopsorder** (Make sales order): turn the offer into an order.
- **Maak verkoopslevering** (Make sales delivery): turn the order into a delivery.
- **Maak verkoopsfactuur** (Make sales invoice): turn the delivery into an invoice.

With **Dupliceer** (Duplicate) you copy the current document, for example for a return or a similar order.

To take over lines from an existing document without converting it, use **Inlezen verkoopsofferte**, **Inlezen verkoopsorder**, **Inlezen verkoopslevering** or **Inlezen verkoopsfactuur** (Read sales offer/order/delivery/invoice). You select the source document and the lines are taken over.

For the sales invoice there is also **Inlezen levernota's** (Read delivery notes): all delivery notes of the customer that were not invoiced yet are taken over at once (see also 8).

### 3.1 Sales invoice: special cases

- **6% BTW regeling woning > 10 jaar** (6% VAT scheme dwelling > 10 years): check this option for the sale of a dwelling older than ten years. **Accowin** then adds the legally required mention to the document, in the language of the customer.
- **Credit notes**: a sales invoice with negative amounts works as a credit note.

## 4. Templates

With **Template bewaren** (Save template) you save the current document as a template, and with **Template importeren** (Import template) you retrieve one. This way you create recurring documents quickly.

## 5. Open documents

Via **Facturatie > Open documenten** (Open documents) you see all documents that are not closed yet:

- Filter on **document type** and use **Filter gebruiken** (Use filter) for further selection.
- **Bekijk document** (View document): open the document.
- **Document sluiten** (Close document): close the document without invoicing it.
- **Leveren** (Deliver): register the delivery for the selected orders.
- **Afdrukken lijst** (Print list) and **Print orderboek** (Print order book): print the overview.

## 6. Generate sales invoices from deliveries

Via **Facturatie > Genereer verkoopsfacturen** (Generate sales invoices) you create invoices from the open deliveries in one go. The screen goes through three steps:

1. **Selectie** (Selection): choose the **delivery date from**, the **customer from/to**, the **delivery number from** and the **journal**.
2. **Voorstel** (Proposal): **Accowin** shows the deliveries that qualify. With **+...** and **-...** you add or remove, with **Toon levering** (Show delivery) you view a delivery.
3. **Generatie** (Generation): set the parameters:
   - **Journal** and **numbering starts from**.
   - **Invoice date** and **booking period/year**.
   - **Add extra line with doc nr and date of base document**: mentions the delivery on the invoice.
   - **Mention journal reference when taking over document**.
   - **Combine deliveries same customer into 1 invoice**.
   - **Extra blank line between 2 documents**.
   - **Directory for UBL and PDF files**: where the electronic versions are stored.

Click **Genereer facturen** (Generate invoices) to create and book the invoices.

## 7. Printing and sending

- With **Afdrukken** (Print) in the document you print it or send it according to the **methode verzenden document** (document send method) of the customer.
- Via **Facturatie > Afdrukken verkoopsdocumenten** (Print sales documents) you reprint existing documents.
- Via **Facturatie > Afdrukken overzicht per betaalwijze** (Print overview per payment method) and **Afdrukken overzicht per artikel groep** (per article group) you print the sales overviews.
- Via **Facturatie > Exporteer verkopen naar UBL** (Export sales to UBL) you create electronic invoice files.

## 8. Delivery note and order form

- **Facturatie > Levernota klant** (Delivery note to customer, screen **Levernota aan klant**): a delivery note for articles that are not on a sales document yet. With **Reeds gefactureerd** (Already invoiced) you see what was invoiced already. You take over delivery notes later in a sales invoice.
- **Facturatie > Bestelbon leverancier** (Order form to supplier, screen **Bestelbon aan leverancier**): an order form for the supplier with **delivery date**, **delivery address** and the article lines. You print it with **Afdrukken** (Print).
