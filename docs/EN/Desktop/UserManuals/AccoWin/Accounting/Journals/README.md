# Desktop - AccoWin - Accounting - Journals

## 1. Introduction

In the journals you enter all transactions of the dossier. **Accowin** has four journal types:

- **Sales journal**: sales invoices and credit notes from customers.
- **Purchase journal**: purchase invoices and credit notes from suppliers.
- **Financial journal**: payments and receipts through cash and bank.
- **Miscellaneous journal**: all other transactions (among others salaries and social contributions).

You open a journal via **Boekhouding > Ingave dagboeken** (Accounting > Journal entry) and then choose **Verkopen** (Sales), **Aankopen** (Purchases), **Financieel** (Financial) or **Diversen** (Miscellaneous).

## 2. Managing journals

Via **Parameters > Beheer dagboeken** (Manage journals) you set the properties of each journal:

- **Reference and name**: the abbreviation and name of the journal, for example `VEN` for sales.
- **Type**: sales, purchase, financial or miscellaneous. The entry screen only shows the journals of the right type.
- **Account**: the contra account the program proposes, for example the bank account of a financial journal.
- **Journal currency** and **exchange rate**: for journals in a foreign currency.
- **Bank account / IBAN**: the account number of the bank account. **Accowin** uses this number to assign CODA files to the right journal (see [Coda](../../Coda/README.md)).
- **Multiple CODA files for 1 bank statement**: check this when the bank spreads the statement over several files.
- **Active**: clear to deactivate the journal.

## 3. Entering a transaction: general workflow

Every journal uses the same entry screen. At the top you enter:

- **Journal**: select the journal. The list only contains journals of the right type.
- **Period**: the open period of the financial year. The status shows whether the period is open or closed; you cannot book in a closed period.
- **Document**: the document number. Use the arrows next to the number to browse the existing documents. When you enter a new number, you start a new document.
- **Date and period** of the document itself.

Then you enter the lines of the document. The function keys are the same in every journal:

| Key | Function |
|-----|----------|
| **F12 / F7** | Book the document |
| **F11 / F6** | Save the line |
| **F10** | Insert a line |
| **F5** | Delete the line |
| **F4** | Close |

A document stays editable until you book it. When you book a document again after changes, **Accowin** first reverses the old totals and then writes the new bookings. This way the balances and totals always stay correct.

## 4. Sales journal

You open the sales journal via **Boekhouding > Ingave dagboeken > Verkopen** (screen **Ingave verkopen en C.N.**).

1. Select the **customer**. The program loads the invoicing and delivery data from the customer record.
2. Enter the **invoice date** and the **due date**. **Accowin** proposes the due date from the payment term of the customer.
3. Enter the lines with **general ledger account**, **description** and **amount**. Based on the EU code and the VAT code of the customer the program proposes the right **VAT code**: domestic, Intracom (EU) or export.
4. Check with **Verschil BTW** (VAT difference) whether the booked VAT matches the invoice, and with **Contr. B&TW** whether balance sheet and VAT return are in balance.
5. Book the document with **F12 / F7**.

Users of the UBL module can create and send electronic sales invoices from this screen.

## 5. Purchase journal

You open the purchase journal via **Boekhouding > Ingave dagboeken > Aankopen** (screen **Ingave aankopen en C.N.**).

1. Select the **supplier** and enter the invoice and due date.
2. Enter the lines with general ledger account, description and amount. The **VAT allocation** determines how the VAT is treated: **deductible**, **not deductible**, **co-contractor** or **Intracom**.
3. With **BTW aanpassen (F8)** (Change VAT) you adjust the proposed VAT codes per line, for example with mixed use.
4. Check with **Verschil BTW** and **Contr. B&TW**.
5. Book the document with **F12 / F7**.

Imported **UBL supplier invoices** open in this screen. You check the proposed bookings, book them, and the source file moves to the processed folder.

## 6. Financial journal

You open the financial journal via **Boekhouding > Ingave dagboeken > Financieel** (screen **Ingave financiële verrichtingen**).

- At the top you see the **opening balance** and **closing balance** of the bank account, so you can check that everything is entered.
- Every line has a **transaction date**. For a foreign currency you enter the **exchange rate**.
- Per line you choose the **account**: a customer, a supplier or a general ledger account. Use **F2** to look up the account and **Lijn zoeken** (Find line) to search the existing lines.
- With **Afpunten** (Match) you link the payment directly to the outstanding invoices of the customer or supplier.
- With **Wijs bankrekening toe** (Assign bank account) you assign the account number of the counterparty to the customer or supplier, so future CODA files are recognised automatically.
- **Extra info** and **Memo** keep additional information.
- In a financial journal with a bank account you read electronic **CODA** files (see [Coda](../../Coda/README.md)).

## 7. Miscellaneous journal

You open the miscellaneous journal via **Boekhouding > Ingave dagboeken > Diversen** (screen **Ingave diverse verrichtingen**).

- Per line you choose with **Deb/Cred** whether you book on a customer, a supplier or a general ledger account.
- The screen shows the **total debit** and **total credit**, with the amount that is **booked** and the amount **still to book**.
- With **0 lijnen wissen** (Delete 0 lines) you remove all empty lines of the document at once.
- **Afpunten** (Match) and **Memo** work the same as in the financial journal.
- Files from the social secretariat (**SODA**) are read into this journal.

## 8. Templates

You enter recurring transactions faster with templates:

- In the financial and miscellaneous journal you save a document as a template with **Template bewaren** (Save template) and retrieve it with **Template importeren** (Import template).
- Via **Boekhouding > Template boekingen** you manage all templates of the dossier.

## 9. Daily receipts

Via **Boekhouding > Dagontvangsten** (screen **Ingave dagontvangsten**) you enter the receipts of a day or period. You enter the **period from/to**, enter the receipts per customer and confirm. This function is meant for cash sales and loose receipts.

## 10. Related topics

- **Boekhouding > Boekjaar selecteren** (Select financial year): switch the active financial year and period.
- **Boekhouding > Saldo fin. dagboek**: consult the balance of a financial journal.
- **Boekhouding > Afpunten**: the logical matching of customers and suppliers (see [Master files](../MasterFiles/README.md), history).
- **Boekhouding > Export**: export sales or create the annual accounts.
