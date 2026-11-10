# Desktop - BelcoFin - Share options

## 1. Introduction

Companies reward their directors more and more with **share options** or **warrants**. That is a benefit in kind that must be declared as taxable income in the **274 return** and separately on the **fiche 281.20**, in the **share options** rubric. The tab **Aandelenopties** on the wage record supports the whole processing, from the grant to the fiche.

**Timing — the 60-day rule**: the benefit is taxable at the moment of the **offer**, provided the director **accepts it in writing within 60 days**. The fiscal grant date is the **60th day after the offer**; the benefit falls on the income line of that month.

## 2. Qualification of the plan

On the tab the first question is: **Does the plan fall under the law of 26 March 1999 (the option law)?**

- **Yes**: classic options and warrants. Process them on the **Aandelenopties** tab; the benefit appears on the fiche 281.20 in the share options rubric.
- **No**: for example **RSU**s (Restricted Stock Units) from foreign plans. Then it is a classic benefit in kind, taxable at the definitive acquisition (vesting). Enter it as a **miscellaneous VAA** (see [Benefits in kind](../Vaa/README.md) §3), not on the share options tab.

## 3. Entering grants

On **Toegekende aandelenopties (warrants) voor deze inkomstenlijn** (Granted share options for this income line) you enter per grant:

- **Description**: free description of the plan or the warrant;
- **Option type**: not listed, listed, or *in the money*;
- **Date of the offer** and **date of the written acceptance**: **Belcofin** checks the 60-day rule and determines the benefit date;
- **Real value of the share** at the moment of the offer;
- **Exercise price**, **number** of options/shares and the **term** in years.

Multiple grants in the same month are possible; each grant keeps its own percentage and amount.

## 4. Calculation of the benefit

**Belcofin** calculates the benefit following the option type:

- **Not listed** — flat rate: percentage × the real value of the share at the moment of the offer. The flat rate is **18%**, reduced to **9%** with a longer blocking period; beyond the 5th year of the term **1% per year** is added (0.5% with the reduced rate).
- **Listed** — real: the real value of the option, mostly the last closing price before the offer. The percentage then is **0**; on the fiche the convention **00.00** appears.
- **In the money** (not listed): when the exercise price is below the real value, **Belcofin** adds the certain benefit automatically: (value − exercise price) × number.

For all types holds: benefit = value per option/share × the **number** of granted options.

## 5. Processing

- The benefit is recorded on the **income line of the right month** and counts in the **274 return** in the taxable income.
- The **withholding tax** on the benefit is calculated and withheld separately; you see it apart on the month tab and the payslip.
- For grants by a **foreign (affiliated) company** the fiche 281.20 mentions the benefit separately (box 20 a)2) with the separate withholding tax.
- The tab **Aanvullende gegevens** (Additional data) is updated automatically from these grants and is then no longer editable manually.
- Everything ends up **exactly once** on the fiche 281.20, in the share options rubric, without double mention in the remunerations box.

## 6. Tips

- Note the **acceptance date** accurately: without written acceptance within 60 days the taxable moment shifts.
- Percentage **00.00** with listed options is normal: the benefit is real, not flat-rate.
- After entering, check that the **number** is correct — it multiplies the benefit per option over the whole grant.
