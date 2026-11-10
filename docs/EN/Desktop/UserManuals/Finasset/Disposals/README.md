# Desktop - Finasset - Disposals and transfers

## 1. Introduction

When an investment is sold, demolished, written off or moved, you process it in **Finasset** via the **Tools** menu:

- **Uitboeking** (Disposal): book a (partial) disposal;
- **Overboeking rekening** (Transfer account): move investments to another general account;
- additionally you manage the reason codes via **Parameters > Type uitboekingen** (Disposal types), and you print the **overview of disposals** via the **Reports** menu.

**Warning**: disposals are far-reaching actions. Your user needs the proper rights for them; whoever lacks them does not see the functions.

## 2. Disposal

1. Choose **Tools > Uitboeking**. The screen **Gedeeltelijk uitboeken** (Partial disposal) opens.
2. Select the **investment** and enter the **reason** (the disposal type).
3. Fill in the **financial year**, the **date**, the **document number** and optionally a **remark**.
4. For a **partial** disposal set the **percentage** of the purchase value that is disposed of. **Finasset** shows the purchase value and the depreciations up to the previous financial year (**up to depreciation of the previous FY**) and calculates the part to be disposed of. If needed fill in a **new investment reference** for the part that keeps existing.
5. Click **Uitvoeren** (Execute); **Annuleren** (Cancel) breaks off the action without changes.

On the [investment record](../Investments/README.md) §3.3 you fill in the additional disposal data (customer, document, disposal amount) and choose whether a depreciation is still allowed in the year of the disposal.

## 3. Disposal types

Via **Parameters > Type uitboekingen** you manage the reason codes (sale, demolition, transfer, and so on). Every type gets its own treatment in the reports and the fiscal annotation: this way the **overview of disposals** distinguishes sales from write-offs.

## 4. Transfer account

With **Tools > Overboeking rekening** you move investments from one general account to another, for example after a reorganisation of the chart of accounts. Select the source account and the target account; **Finasset** adapts the investments and their depreciation history to the new account.

## 5. Overview of disposals

The report **Uitboekingen** (Disposals) in the **Reports** menu shows all disposals of the dossier (see [Reports](../Reports/README.md)): per investment the purchase value, the applied depreciations, the disposal value and the result.

## 6. Tips

- With a partial disposal work with a **percentage**, not with rounded amounts: that keeps the components (VAT, depreciations) consistent over the disposed and the kept part.
- Always choose the right **reason**: sales have a different fiscal treatment than demolitions or transfers.
- After the disposals print the **overview of disposals** and check the result before you process the bookkeeping.
