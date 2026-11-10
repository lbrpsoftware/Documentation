# Desktop - Finasset - General accounts

## 1. Introduction

The **general accounts** form the chart of accounts of the dossier inside **Finasset**: every investment is booked on a general account, and per account you decide where the depreciations and costs appear. You manage them via:

- **Files > Algemene rekeningen** (General accounts): the chart of the dossier;
- **Parameters > Standaard algemene rekeningen** (Standard general accounts): the base chart new dossiers get;
- **Parameters > Extra Values**: extra characteristics and values on accounts.

## 2. The account record

Via **Files > Algemene rekeningen** you open the list **Algemene rekeningen**. On the record you keep:

- **Referte** (Reference): the account number;
- the descriptions in four languages: **Omschr NL, FR, EN, DE** — the language of the dossier determines which description appears on the reports;
- **AfschrRek**: the depreciation account to which the yearly depreciation of investments on this account is booked;
- **KostRek**: the cost account;
- **Soort** (Kind): the kind of account.

The combination of account, depreciation account and cost account determines the journal entries you transfer to your accounting program via the report **Journaalposten** (Journal entries, see [Reports](../Reports/README.md)).

## 3. Standard general accounts

**Parameters > Standaard algemene rekeningen** contains the base chart **Finasset** copies when you create a new dossier. Keep this chart in line with the chart of your accounting package (for example **AccoWin**): then the account numbers in the journal entries are correct right away without manual correction.

Changes to the standard chart only hold for **new** dossiers; existing dossiers keep their own accounts.

## 4. Extra Values

With **Parameters > Extra Values** you record extra characteristics you can use on accounts and investments, for example for groupings in reports or for the link with the accounting program.

## 5. Tips

- Always fill in the **four descriptions**; reports in another language otherwise show an empty description.
- With a new dossier first check that **AfschrRek** and **KostRek** are filled everywhere: the depreciation journal entries otherwise stay incomplete.
- Use the same numbering as your accounting package, so the journal entries (via the report **Journaalposten**) can be taken over without conversion.
