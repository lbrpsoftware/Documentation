# Desktop - Finasset - Dossiers and financial years

## 1. Introduction

**Finasset** works per **dossier** (the company whose fixed assets you manage) and per **financial year**. Before you enter investments, you choose the dossier and the financial year you work with; all screens and reports show the data of that combination.

- **Start > Select dossier**: choose the active dossier (also via the **Dossiers** toolbar button).
- **Start > Dossiers**: manage the dossier records.
- **Start > Dossier updaten** (Update dossier): update the database of the selected dossier to the current program version (after a new release).
- **Files > Select default financial year**: choose the default financial year that is active when you open a dossier.
- **Files > Financial years**: manage the financial years.

## 2. The dossier record

On the list **Toewijzing dossiers** (Dossier assignment) you keep per dossier: **name**, **reference**, **address** with **country** and **municipality**, **enterprise number**, **e-mail**, **language**, **telephone** and **fax**, and the **type** of dossier.

Under **Parameters investeringen** (Investment parameters) you set the depreciation rules of the dossier:

- **Maximale tarief voor degressieve afschrijvingen op aankoopwaarde** (Maximum rate for reducing-balance depreciation on the purchase value): the cap for the reducing-balance method;
- **Minimum percentage afschrijving** (Minimum depreciation percentage): the lower bound per year;
- **Standaard methode** and **standaard duur** (Standard method and duration): the values **Finasset** proposes for every new investment of this dossier.

These parameters determine how **Finasset** calculates depreciations and validate what you can enter on the investment record.

## 3. Financial years

Via **Files > Financial years** you manage the financial years of the dossier. On the record you enter:

- **Reference** and the **status** (open or closed) — with the buttons **Open** and **Sluiten** (Close) you switch status;
- the period **from** to **to** and the **taxation year**; **number of months** shows the length of the financial year;
- the **scheme** and whether **pro rata** applies for depreciations in the first year;
- **size criteria** and **extra information** for the fiscal annotation;
- **periods**: the depreciation periods of the financial year (buttons **generate**, **new**, **delete**, **open**, **close**);
- **referte aanpassen** (Adjust reference) to change the reference of the financial year.

Only close a financial year when all investments, disposals and depreciations in it are processed; a closed financial year is meant as a control measure.

## 4. Working with dossier and financial year

1. Choose **Start > Select dossier** and select the dossier.
2. Check at the bottom of the main window which **financial year** is active; switch with **Select year** on the toolbar if needed.
3. Carry out the mutations (investments, disposals, recalculations) in the right financial year: every booking falls in the financial year that was active when you entered it.

## 5. Tips

- Run **Start > Dossier updaten** as soon as a new **Finasset** version is installed; without the update new features cannot use the dossier.
- Set the **investment parameters** per dossier before the first investment: afterwards they act as validation limits.
- Keep at most one financial year **open**; that prevents bookings accidentally ending up in the wrong year.
