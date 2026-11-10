# Desktop - BelcoFin - Finprof

## 1. Introduction

**Finprof** is the service of the Belgian tax office through which the **returns of withholding tax on remunerations (274)** for directors are filed. The **Finprof** menu in **Belcofin** bundles everything:

- the **wage records** (director remunerations) themselves;
- **printing** all documents around the return;
- **sending** them to declarants and directors;
- **creating** the XML return and following up the **sendings**.

The wage record itself is described extensively in the [Manual](../Manual/README.md) §5; this page treats the other menu functions.

## 2. Printing

In the **Afdrukken** (Print) group of the Finprof menu you find:

- **Afdrukken individuele rekeningen**: the individual account per director;
- **Afdrukken jaaroverzicht onderneming**: all remunerations of one declarant per year;
- **Afdrukken jaaroverzicht te betalen bedrijfsvoorheffing**: the total withholding tax to pay per declarant;
- **Afdrukken weddefiches**: the records themselves;
- **Afdrukken betaalopdrachten aangiftes in de bedrijfsvoorheffing**: the transfer forms for the payment;
- **Afdrukken rapport boekhouding**: the report you process in the bookkeeping of the declarant (payroll bookings in the right ledger accounts).

## 3. Sending

With the **Verzenden** (Send) items you send the same documents digitally:

- **Verzenden jaaroverzicht te betalen bedrijfsvoorheffing** to the declarant;
- **Verzenden weddefiches naar bedrijfsleiders**: every director receives his record by e-mail;
- **Verzenden betaalopdrachten aangiftes in de bedrijfsvoorheffing**.

You set the e-mail texts and recipients in the parameters and on the records of declarants and directors.

## 4. Creating the FINPROF XML

1. Choose **Finprof > Aanmaken XML FINPROF** (Create FINPROF XML) and select the **Finprof income year**.
2. **Belcofin** creates the XML file with all returns of the declarants that are not sent yet.
3. With **Finprof > Overzicht aan te maken XML FINPROF** (Overview of XML to create) you see beforehand which declarants and records will end up in the return, with the amounts.

Check the overview before you create the file: once declared, a change asks for a correcting return.

## 5. Returns 274

Choose **Finprof > Aangiftes 274**. Per **income year** you see the list of returns with:

- the **declarant** and whether the return was already **sent**;
- the type of **record** (fiche 281.x) the data come from;
- the amount of **withholding tax**.

Below that the **year return** shows per declarant the totals: **taxable amount** and **withholding tax**. With **Afdrukken** you print the return or the overview.

## 6. Sendings

**Finprof > Verzendingen** (Sendings) shows the history: which XML files were created and sent when, and for which declarants. This way you check afterwards what exactly was filed.

## 7. Finprof website

**Finprof > Website Finprof** opens the official website of Finprof, for the manuals and status messages of the service itself.

## 8. Tips

- Finish the wage records and the **withholding check** (see [Corporate withholding tax](../CorporateWithholding/README.md)) before you create the XML.
- Send one XML file per return period and keep the **sendings** as proof of filing.
- The fiches 281.20 for the directors are sent via the Belcotax fiches (see [Manual](../Manual/README.md) §4); the 274 return and the fiche 281.20 complement each other.
