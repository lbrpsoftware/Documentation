# Desktop - BelcoFin - Vehicle and housing

## 1. Introduction

The benefits in kind for a company car and housing are calculated on the wage record (see [Benefits in kind](../Vaa/README.md)). Around that calculation **Belcofin** offers three tools:

- **Simulatie voertuig en bewoning** (Vehicle and housing simulation): print the complete VAA calculation of one director;
- **Overzicht fiches met voordeel bewoning** (Overview of records with housing benefit): all records with a housing benefit side by side;
- **Febiac database**: the catalogue with official car values that feeds the vehicle calculation.

## 2. Vehicle and housing simulation

1. Choose **Simulatie > Simulatie voertuig en bewoning**.
2. Select the **income year** and the **declarant**.
3. Choose the **director** and set the **name** and **language** for the printout.
4. Click **Berekening afdrukken** (Print calculation): **Belcofin** prints the complete calculation of the vehicle and housing benefits of that director for the chosen year.

Use the simulation to check the calculation or to explain it to the director, before you change anything on the record.

## 3. Overview of records with housing benefit

Choose **Simulatie > Overzicht fiches met voordeel bewoning**. You choose the **income year** and see all records with a housing benefit, per record:

- whether the benefit was entered **manually** or calculated;
- whether it was treated **without coefficient**;
- the **declarant** and the **director**;
- whether the cadastral income is **indexed** and whether the house is **furnished**;
- the **private percentage** and the **description**.

With **Gegevens overnemen van** (Take over data from) you take over the housing data of an earlier year; the checkbox next to it decides whether that takeover is **recorded manually** right away. This way you build up the housing benefit for a new year without retyping everything. Close with **Sluiten (F4)**.

## 4. Febiac database

The **Febiac database** (the Belgian automotive federation) keeps the official catalogue values of passenger cars: catalogue value, CO2 emission, fuel type and similar. **Belcofin** uses these data for the benefit in kind of a vehicle.

1. Choose **Parameters > Febiac database**.
2. With **Filter gebruiken (F2)** (Use filter) you filter the list on brand, model or year of construction.
3. Select the director's car with **Selecteren** (Select): the catalogue value and CO2 data are included in the vehicle detail of the VAA calculation.

Refresh the Febiac data yearly so the values of new models are available; older years stay needed for older cars.

## 5. Tips

- Always update the **vehicle detail** on the wage record via the Febiac data: a wrong catalogue value or CO2 immediately gives a wrong benefit.
- Before creating the XML file check the **overview of records with housing benefit**: missing or manual amounts stand out right away.
- Use the simulation with every change of the private share or the valuation; the printout shows the complete calculation as justification.
