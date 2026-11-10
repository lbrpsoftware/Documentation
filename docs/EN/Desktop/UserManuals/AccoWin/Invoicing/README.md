# Desktop - AccoWin - Invoicing

## 1. Introduction

With the invoicing module you create all sales documents for your customers: offers, sales orders, deliveries and invoices, plus subscriptions for recurring invoices. The documents follow each other in a logical flow:

1. **Sales offer**: a proposal to the customer.
2. **Sales order**: the confirmed order of the customer.
3. **Sales delivery**: the delivery of the goods (or the return).
4. **Sales invoice**: the invoice, booked directly in the sales journal.

You convert each document into the next type, so you never re-enter data. A closed sales invoice is booked in the sales journal (see [Journals](../Accounting/Journals/README.md)).

## 2. Parts

- [Articles](Articles/README.md): manage articles and article groups.
- [Sales documents](SalesDocuments/README.md): create, convert, print and generate offers, orders, deliveries and invoices.
- [Subscriptions](Subscriptions/README.md): recurring invoices for maintenance contracts and similar.

## 3. Before you start

- The module requires the **Verkoopsmodule** (Sales module) licence.
- Via **Parameters > Scherm opties**, tab **Verkoopsfactuur** (Sales invoice), you set the defaults, among others the type of **payment reference** (usually a structured communication). When the customer mentions that reference with the payment, the invoice is matched automatically when the CODA file is read (see [Coda](../Coda/README.md)).
- The invoice layout you select on the customer record determines the look of the printed documents.
