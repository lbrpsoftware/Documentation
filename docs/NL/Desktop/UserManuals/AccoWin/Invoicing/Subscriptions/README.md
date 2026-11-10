# Desktop - AccoWin - Facturatie - Abonnementen

## 1. Inleiding

Met abonnementen factureert u terugkerende kosten automatisch: onderhoudscontracten, huur, abonnementen en dergelijke. U geeft per klant één keer de lijnen in en **Accowin** genereert daarna op gezette tijden de verkoopsfacturen, inclusief e-mail, afdruk of Peppol.

U beheert de abonnementen via **Facturatie > Abonnementen** en genereert de facturen via **Facturatie > Genereer verkoopsfacturen**.

## 2. Een abonnement aanmaken

In het scherm **Abonnementen** kiest u de **klant** en geeft u op:

- **Datum van ... tot**: de periode waarvoor het abonnement geldt.
- **Frequentie**: hoe vaak een factuur wordt aangemaakt, bijvoorbeeld maandelijks of per kwartaal.
- **Opmerking**: een vrije tekst bij het abonnement.
- **Datum laatste factuur** en **datum volgende factuur**: houdt **Accowin** automatisch bij.
- **Dagboek**: het verkoopdagboek waarin de facturen worden geboekt.
- **Totaal excl**: het totaal van het abonnement.

Daaronder voert u de factuurlijnen in (artikels of vrije lijnen) met **Lijn bewaren**, **Lijn wissen** en **Lijn invoegen**.

### 2.1 Datumweergave in de omschrijving

Met **Weergave datum in omschrijvingsveld** bepaalt u welke datum op de factuurlijn komt, in het formaat **[deel1:deel2:deel3]**. De ondersteunde delen:

| Deel | Betekenis |
|------|-----------|
| **D** | dag |
| **M** | maand |
| **MS** | maand voluit geschreven |
| **Y** | jaar |
| **Q** | kwartaal |
| **DT** | datum |

Voorbeeld: een maandelijkse huurfactuur met `MS Y` toont in de omschrijving `januari 2025`.

### 2.2 Vervaldatum

Met **Aantal dagen voor vervaldatum factureren** geeft u op hoeveel dagen vóór de vervaldatum de factuur wordt aangemaakt.

## 3. Verkoopsfacturen genereren

Via **Facturatie > Genereer verkoopsfacturen** maakt u de facturen van de abonnementen. Het scherm heeft drie stappen:

1. **Selectie**: kies de **facturen tem datum** en de **klant**. Geef ook de **directory voor UBL en PDF bestanden** op.
2. **Voorstel**: **Accowin** toont de abonnementen die aan de beurt zijn. Met **Toon abonnement** bekijkt u het abonnement, met **Selectie wissen** en **Alles selecteren** past u de selectie aan.
3. **Generatie**: kies het **volgend nummer dagboek** en de rapporten (**Rapport levernota's**, **Rapport facturen**) en klik op **Genereer facturen**.

Daarna ziet u de **gegenereerde facturen** met een **preview**, en stuurt u ze per factuur met **Emailen**, **Afdrukken** of **Peppol**. Met **Volgende** en **Vorige** bladert u door de facturen.

## 4. Tips

- Laat de frequentie en de datumweergave samenvallen met wat u op papier beloofde aan de klant, bijvoorbeeld "facturatie per kwartaal, vooraf".
- Controleer na het genereren altijd het **voorstel**: abonnementen met een einddatum in het verleden worden niet meer voorgesteld.
- Gegenereerde facturen verschijnen meteen in het verkoopdagboek; controleer ze daarna zoals elk verkoopdocument (zie [Verkoopdocumenten](../SalesDocuments/README.md)).
