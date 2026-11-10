# Desktop - BelcoFin - Benefits in kind (VAA)

## 1. Introduction

Benefits in kind (voordelen alle aard, VAA) are benefits the company puts at the disposal of its director next to the salary: a company car, housing, electricity, heating and similar. **Belcofin** calculates the fiscal benefit and includes it in the 274 return and on the fiche 281.20.

You work with VAA in two places:

- on the **wage record** (weddefiche) of the director, tab **VAA** (year basis) — the calculation;
- on the **fiche 281.20**, with the checkbox **Detail invullen van VAA** (Fill in VAA detail) and the button **VAA afdrukken** (Print VAA) (see [Manual](../Manual/README.md) §3.1.1.3).

## 2. The VAA tab on the wage record

The tab shows the granted benefits in a grid with **description** (remark), **amount**, **manual**, **type** and **period**. Check **manual** when you fix the amount yourself instead of letting **Belcofin** calculate it.

When you change a benefit, **Belcofin** asks whether the benefits must be redistributed over the months that are not declared yet. Without redistribution the difference goes to the line **sup** of the monthly overview (see [Manual](../Manual/README.md) §5.1.4). Redistributing later is always possible.

### 2.1 Vehicles

On the list **Ter beschikking gestelde voertuigen** (Vehicles made available) you enter each vehicle with **type** (aard), **registration** (number plate) and the period **from** to **to**. The detail window shows:

- **CO2** emission and **value** of the vehicle: together they determine the benefit;
- **own contribution** (eigen inbreng): the part the director paid himself;
- **fuel compensation (fuel card)**: fuel paid by the company raises the benefit;
- **end date counted** (einddatum meetellen): until when the vehicle stays in the calculation;
- the calculated **vehicle total**.

**Belcofin** calculates the benefit automatically from these data. With the buttons **edit** (wijzigen), **add** (toevoegen) and **delete** (wissen) you manage the list.

### 2.2 Housing

For the housing you enter the **cadastral income (K.I.)**; **Belcofin** works with the **indexed C.I.** Next you enter:

- the **private part of the house** in percent: the part the director uses privately;
- the **ownership company** (eigendom venn.) in percent: the company's share in the property;
- whether the house is **furnished**;
- the periods **from** to **to** for which the calculation holds.

From these data **Belcofin** calculates the **housing total** benefit.

### 2.3 Declarations

With **Meldingen bewoning** and **Meldingen voertuig** (housing and vehicle declarations) you see whether the mandatory fiscal declarations (attestations) are present. Check this before submitting the fiches.

## 3. Miscellaneous benefits

For all other benefits (electricity, heating, meal vouchers, share options from plans outside the option law, and so on) you use a **miscellaneous VAA line**: you choose the type and enter the amount. These benefits count in the total taxable income of the 274 return.

For share options under the law of 26 March 1999 a separate tab exists (see [Share options](../ShareOptions/README.md)); plans that do not fall under that law you enter here as miscellaneous VAA.

## 4. Simulation

With **Simulatie voertuig en bewoning** (Vehicle and housing simulation) in the menu you run the benefit of a vehicle or house through **before** you record it on the fiche. This way you compare hypotheses (other CO2, other private share) against their fiscal cost.

## 5. Printing

- On the fiche 281.20 you print the detail of the benefits with **VAA afdrukken**.
- In the VAA reports you add your own fields with **Selecteer in te voegen veld** (Select field to insert): choose in the list with **description** and **variable** which data field must appear in the report.

## 6. Tips

- Always fill in the complete detail data for vehicles and housing: without CO2 and value (vehicle) or C.I. and percentages (housing) the benefit cannot be calculated automatically.
- Check the **declarations** before creating the XML file: missing attestations give remarks from the tax office.
- Keep the periods (from/to) accurate: the benefit only counts for the months in which the asset was available.
