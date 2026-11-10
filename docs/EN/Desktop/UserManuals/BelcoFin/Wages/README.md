# Desktop - BelcoFin - Wage records and simulation

## 1. Introduction

The **wage record** (weddefiche) is the payroll record of the director: it bundles his remunerations, benefits in kind and withholdings per month, forms the basis of the **274 return** and feeds the **fiche 281.20**. The complete working of the record is in the [Manual](../Manual/README.md) §5: creating, income per month, [benefits in kind](../Vaa/README.md), additional data, [share options](../ShareOptions/README.md) and [rental requalification](../Requalification/README.md).

This page treats the **net-gross simulation**: the tool to calculate a remuneration before it ends up on the record.

## 2. Net-gross wage simulation

Choose **Simulatie > Simulatie wedde netto-bruto**. The screen **Wedde simulatie** contains three blocks.

### 2.1 Director data

Here you set the fiscal situation that determines the withholding tax:

- **marital status** and **family situation**;
- the number of **children** and **other dependants**, with per group the subdivisions **disabled**;
- persons **65 or older as dependants**, among which **in need of care**, and a **disabled partner**;
- the **name** and **language** for the printout.

### 2.2 Remuneration

You enter the components of the remuneration:

- **gross periodic remuneration**;
- **VAA without social contributions**: benefits in kind that do not trigger social contributions;
- **non-periodic remuneration**: for example a year-end premium or bonus;
- **net allowances** and the **meal voucher contribution**;
- the **requalified rent** (periodic and non-periodic) from the rental to the own company (see [Rental requalification](../Requalification/README.md));
- the **social contributions**.

### 2.3 Calculation type and result

With **Bruto -&gt; Netto** you run a gross remuneration through to the net salary; with **Netto -&gt; Bruto** you start from a wanted net amount and **Belcofin** calculates the required gross remuneration. The screen shows the calculated **withholding tax** and the **net** result. With **Berekening afdrukken** you print the complete simulation.

## 3. From simulation to record

1. Discuss the wanted net or gross amount with the declarant and simulate it in both directions.
2. Record the chosen remuneration on the wage record of the director ([Manual](../Manual/README.md) §5.1).
3. Check the month tab afterwards: the social contributions, the withholding tax and the net salary on the record must match the simulation.
4. The declaration and the payment run via [Finprof](../Finprof/README.md).

## 4. Tips

- The simulation is non-committal: nothing is saved. Keep the printout as justification of the agreements with the declarant.
- With a **Netto -&gt; Bruto** calculation watch the progression of the withholding tax: a small net gain can ask a big gross jump.
- Keep the family situation on the director's record in line with the simulation; one dependent child changes the withholding tax considerably.
