# Desktop - BelcoFin - Settings and master files

## 1. Introduction

The settings of **Belcofin** live in the **Parameters** menu; the master files (declarants, beneficiaries, directors, employees) you open via the **Bestanden** (Files) menu. The master files are described in the [Manual](../Manual/README.md) §2. This page gives an overview of the **Parameters** menu.

## 2. Language and appearance

- **Taal** (Language): switches the user interface between **Dutch** and **French**.
- **Themes**: choose the colour theme of the program.

## 3. General options

**Parameters > Algemene opties** (General options) contains the main settings of the program, among others:

- the **reference settings** of declarants, beneficiaries, directors and employees (numeric or alphabetic, and the reference length);
- the filing references for Belcotax and Finprof;
- the tab **Export loonboekingen** (Export payroll bookings) with the folder for the export files (see [Export Wages](../ExportWages/README.md)).

## 4. Texts

- **Parameters > Teksten emails** (E-mail texts): the standard text of the e-mails around the withholding tax. You enter the text per language (**Dutch, French, German, English**); with **Veld invoegen** (Insert field) you add merge fields (name, amount, date) that **Belcofin** fills in per sending. A new line in the text goes with **Ctrl+Enter**.
- **Parameters > Teksten algemeen** (General texts): the general free texts you can call up in letters and reports.

## 5. Receiving offices

**Parameters > Ontvangkantoren** (Receiving offices): the file of the receiving offices of the tax office, for records and returns that are sent to an office.

## 6. Febiac database

**Parameters > Febiac database**: the catalogue with official car values for the benefit in kind of vehicles. See [Vehicle and housing](../VehicleHousing/README.md) §4.

## 7. Coefficients

**Parameters > Coefficienten** (Coefficients): the coefficients with which **Belcofin** calculates the benefits in kind, **per income year**:

- **Divers** (Miscellaneous): the percentages for **heating**, **electricity**, **internet**, **personal PC**, **GSM/tablet** and **telephone subscription**;
- **Bewoning** (Housing): the coefficients with a **non-indexed cadastral income** (coef 1 numerator/denominator, coef 2 below and above the limit) and the **furnished** ratio (numerator/denominator).

Only change the coefficients when the official percentages change; the values hold for all records of the income year.

## 8. Reports

**Parameters > Rapporten** (Reports): management of the report definitions and templates of **Belcofin**.

## 9. Import, merge and queries

- **Parameters > Import**: read data from external sources (Kluwer, AdminIS, e-share, CSV) — see [Import Data](../ImportData/README.md).
- **Parameters > Databases samenvoegen** (Merge databases): merge a backup of another Belcofin database with the current one — see [Merging databases](../MergeDatabases/README.md).
- **Parameters > Queries**: freely composed overviews over the database.

## 10. Tips

- After every year change check the **coefficients** of the new income year before you create records.
- Keep the **e-mail texts** per language aligned: directors with another language otherwise receive an empty or wrong text.
- Changing the reference settings is only wise before records exist; afterwards **Belcofin** keeps the chosen order.
