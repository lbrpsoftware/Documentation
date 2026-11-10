# Desktop - AccoWin - Accounting - Matching

## 1. Introduction

Matching (afpunten) links payments to their invoices, so you see which invoices are still open. **Accowin** knows three ways to match:

- **Manual matching**: per booking, from the history of the customer or supplier.
- **Automatic matching**: via **Boekhouding > Afpunten > Klanten** (or **Leveranciers**) you let **Accowin** link all open items at once.
- **While booking**: in the financial journal you match the payment right away (see [Journals](../Accounting/Journals/README.md)).

A customer or supplier whose balance becomes zero is **logically matched**: all items are linked and the open balance is 0.

**Note**: for manual matching your user needs the right **manual matching** (handmatig afpunt).

## 2. Manual matching from the history

1. Open the customer or supplier via [Master files](../Accounting/MasterFiles/README.md) and go to the tab **Historiek (History, F9)**.
2. Select the payment and click **Afpunten** (Match). The **Afpunten** (Matching) screen opens.
3. In the list **Afpunten boekingen** (Matched bookings) you see the open items with **journal**, **document number**, **date**, **currency**, **comment** and **payment reference**.
4. Check the items you link to the payment. At the bottom you see the **total matches** and the **amount** of the booking.
5. When the total differs from the payment, you see this under **Afpuntingsverschillen** (Matching differences) with the **difference**. With **Verschil inboeken als** (Book difference as) you book the difference to an account of your choice, for example a VAT or currency difference.
6. Click **Opnemen (F12/F7)** (Record) to save the match, or go with **Verder (Shift+Page Down)** (Next) to the next open payment. With **Sluiten (F4)** (Close) you leave the screen.

With **Annul. afpuntingen** (Cancel matches) in the history you undo a match.

## 3. Automatic matching

1. Choose **Boekhouding > Afpunten > Klanten - logische afpunting en nulsaldo's** (Customers - logical matching and zero balances) or the supplier variant.
2. **Accowin** looks for all payments that can be linked automatically: on **amount** and on **payment reference** (for example the structured communication of the invoice).
3. Click **Start**. **Accowin** processes the links and reports what was matched.

The customers and suppliers that are at zero afterwards are logically matched.

## 4. Matching and CODA

When you read CODA files (see [Coda](../Coda/README.md)), **Accowin** tries to match every bank transaction at once:

- via the **payment reference** the customer mentions (use structured communications — see [Invoicing](../Invoicing/README.md));
- via the **account number** of the counterparty on the record;
- via **keywords** and **transaction codes** you set in the CODA settings.

Unrecognised transactions go to the waiting account; you assign them manually and match them afterwards.

## 5. Tips

- Before the [VAT return](../Vat/README.md) and the [year-end closing](../YearEnd/README.md) check the due-date balance (see [Reports](../Reports/Lists/README.md)): what is not matched stays open.
- Use structured **payment references** in the invoicing: with them the largest part of the payments is matched automatically.
- Book small differences (currency, VAT) away directly with **Verschil inboeken als** in the matching screen.
