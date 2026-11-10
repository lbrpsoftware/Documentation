# Desktop - Finasset - Depreciations

## 1. Introduction

**Finasset** calculates the depreciations of all [investments](../Investments/README.md) automatically, based on the method, duration and residual value on the investment record and the **investment parameters** of the dossier (see [Dossiers](../Dossiers/README.md) §2). You can choose between straight-line and reducing-balance depreciation; the reducing-balance method is capped by the **maximum rate on the purchase value** and the **minimum percentage** of the dossier.

## 2. The depreciation table

Per investment **Finasset** builds a **depreciation table**: per financial year the depreciation amount and percentage, until the duration of the investment is used up or the residual value is reached. For the first year the pro rata setting of the investment applies (pro rata per day or fully depreciating).

You print the table in several forms via the **Reports** menu (see [Reports](../Reports/README.md)): the normal **depreciation table**, the **fiscal** variant, the **total lines per account** and the table **multiple years**.

## 3. Recalculate depreciations

When you change something that influences the depreciations (duration, method, residual value, purchase value, dossier parameters), you run a recalculation:

1. Choose **Tools > Herbereken afschrijvingen** (Recalculate depreciations).
2. Enter the **financial year** you want to recalculate.
3. If needed restrict to a range of accounts with **from account** to **to account**, or to one **group**.
4. Fill in the **% theoretical depreciation**: the threshold under which **Finasset** no longer adjusts the theoretical (expected) depreciation.
5. Click **Selecteren** (Select). **Finasset** recalculates the tables of all selected investments.

**Note**: the recalculation overwrites the existing depreciation amounts of the chosen financial year. Run it before you print the journal entries or returns.

## 4. Make depreciation year 0

With **Tools > Afschrijving boekjaar 0 maken** (Make depreciation financial year 0) you set the depreciations of the following financial year to zero. Use this when an investment is fully depreciated in the last financial year and you want to prevent amounts being generated in the next year, or when you prepare a new financial year and want to generate the amounts explicitly yourself.

## 5. Depreciations and disposals

On the sale or write-off of an investment you decide on the investment record whether **depreciation is allowed in the year of the disposal**. The [disposal](../Disposals/README.md) then calculates the book profit or loss from the applied depreciations (**up to depreciation of the previous FY**).

## 6. Tips

- After creating a new financial year check that the periods are correct before you generate depreciations (see [Dossiers](../Dossiers/README.md) §3).
- Always run the **recalculation** in the same order as your bookkeeping: first correct dossier parameters and records, then recalculate, then print.
- Keep the printed **fiscal depreciation table** with the dossier: it serves as the justification of the fiscal return.
