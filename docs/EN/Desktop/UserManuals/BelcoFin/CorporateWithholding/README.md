# Desktop - BelcoFin - Corporate withholding tax

## 1. Introduction

On the remunerations of directors the company withholds **withholding tax** and declares it via the 274 returns (see [Finprof](../Finprof/README.md)). **Belcofin** offers two checking screens:

- **Controleer berekening Bedrijfsvoorheffing** (Check withholding calculation): compares the stored withholding tax with a recalculation;
- **Overzicht BV Grens Bedrag** (Overview of withholding threshold amount): shows per month the declarants around the threshold above which withholding tax is due.

## 2. Check withholding calculation

1. Choose **Finprof > Controleer berekening Bedrijfsvoorheffing**.
2. You get a list per **declarant** and **director** with two columns:
   - **BV huidig** (withholding current): the withholding tax as it stands on the records today;
   - **BV nieuw** (withholding new): the withholding tax **Belcofin** recalculates with the current parameters;
   - next to it the **employee** who last edited the record.
3. Where both columns differ, the stored calculation no longer matches the current rules or parameters.
4. With **Export naar XLS** you put the list in a spreadsheet for further analysis.

Use this check after a program release with an adjusted withholding calculation, after changes in the family situation of a director, or before creating the XML returns. Correct records with a deviating calculation on the wage record and declare them again if needed.

## 3. Overview of withholding threshold amount

1. Choose **Simulatie > Overzicht BV Grens Bedrag**.
2. Choose the **income year** and the **month**; enter the **withholding threshold amount** you want to check against.
3. With **Gegevens overnemen van** (Take over data from) you retrieve the settings of an earlier year.
4. The overview shows per **declarant** the directors with their remunerations of that month, so you see right away who sits above or below the threshold.

This way you quickly check whether withholding tax must be withheld and declared for all directors, and whether a remuneration stays just under the threshold.

## 4. Connection with the return

- The withholding itself happens on the wage record: the month tab shows the calculated withholding tax (see [Manual](../Manual/README.md) §5.1.4).
- The declaration and the payment run via **Aangiftes 274** in the **Finprof** menu; the payment orders are printed there as well (see [Finprof](../Finprof/README.md)).
- Do not forget: the **share options** also have a separate withholding tax (see [Share options](../ShareOptions/README.md) §5).

## 5. Tips

- Run the withholding check **before every return period**: a difference between old and new means a wrong or outdated return.
- Check the thresholds on a month basis: a remuneration that stays under the threshold per month can still give a right to withholding seen yearly.
- Keep the **family situation** of the directors up to date: it influences the withholding tax directly.
