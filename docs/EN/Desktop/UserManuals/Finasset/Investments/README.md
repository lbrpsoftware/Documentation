# Desktop - Finasset - Investments

## 1. Introduction

The **investment** is the core of **Finasset**: every fixed asset you buy, depreciate and finally dispose of. You manage them via:

- **Files > Investments**: the investment list and records;
- **Files > Investement groups**: the investment groups;
- **Tools > Add Invest to Group**: add existing investments to a group.

## 2. The investment list

Via **Files > Investments** you open the list with all investments of the dossier. With the checkbox **Enkel actieve investeringen** (Only active investments) you restrict the list to investments that are not fully disposed of yet; with **Copy** you copy an investment as the starting point for a new one.

## 3. The investment record

On the record you enter:

- the **description** and **reference** of the investment;
- the **general account** on which the investment is booked;
- the **purchase financial year** (AKBoekjaar), the **purchase date** and the **purchase value** (AKWaarde);
- the VAT components: **deductible** and **non-deductible** VAT, and the **investment amount** (BedragInvest);
- the depreciation data: **method** (AfschrType), **duration** in years, the **percentage** and the **residual value**;
- the **investment group**;
- for a disposed investment: the **disposal year**, the **disposal value**, the VAT and the **disposal type**;
- **currency** and **rate** for purchases in foreign currencies.

### 3.1 Extra purchase data

On the tab **Investering** (Investment) you add: the **purchase document** and the **supplier**, whether it is an **investment from a split/merger**, and the pro rata setting: **pro rata per day** or **fully depreciate (no pro rata)** for the first (partial) year.

### 3.2 Investment deduction

Under **Investeringsaftrek** (Investment deduction) you choose the **kind** and the **type** of the deduction. **Finasset** processes the deduction in the report **Investeringaftrek** (see [Reports](../Reports/README.md)).

### 3.3 Extra disposal data

When the investment is sold or written off, you fill in the **disposal date**, the **document**, the **customer** and the **disposal amount** here. With **Afschrijving toelaten in jaar uitboeking** (Allow depreciation in the year of disposal) you decide whether a depreciation still applies in the year of the disposal.

### 3.4 Extra VAT data

Under **Extra BTW Gegevens** (Extra VAT data) you set the **VAT type** (deductible, not deductible or mixed), so the fiscal depreciation is built up correctly.

## 4. Investment groups

With **Files > Investement groups** you manage the groups: per group you enter a **reference** and **description**. Assign the group on the investment record, or add existing investments in one go via **Tools > Add Invest to Group**. The reports and the [recalculation](../Depreciation/README.md) use groups to process investments together.

## 5. Tips

- Always fill in **duration**, **method** and **residual value** completely: without those data **Finasset** cannot build a depreciation table.
- Choose the pro rata setting consciously: **pro rata per day** is the most accurate for purchases halfway the year.
- Keep the **investment groups** small and functional (for example per location or category); it makes the reports readable.
- For destructive actions (disposals, deleting) your user needs the proper rights: ask the administrator to assign them.
