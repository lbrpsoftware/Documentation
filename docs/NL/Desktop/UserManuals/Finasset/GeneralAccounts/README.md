# Desktop - Finasset - Algemene rekeningen

## 1. Inleiding

De **algemene rekeningen** vormen het rekeningschema van het dossier binnen **Finasset**: elke investering wordt op een algemene rekening geboekt, en per rekening bepaalt u waar de afschrijvingen en kosten verschijnen. U beheert ze via:

- **Files > Algemene rekeningen**: het rekeningschema van het dossier;
- **Parameters > Standaard algemene rekeningen**: het basisschema dat nieuwe dossiers meekrijgen;
- **Parameters > Extra Values**: extra kenmerken en waarden bij rekeningen.

## 2. De rekeningfiche

Via **Files > Algemene rekeningen** opent u de lijst **Algemene rekeningen**. Op de fiche houdt u bij:

- **Referte**: het rekeningnummer;
- de omschrijvingen in vier talen: **Omschr NL**, **Omschr FR**, **Omschr EN** en **Omschr DE** — de taal van het dossier bepaalt welke omschrijving op de rapporten verschijnt;
- **AfschrRek**: de afschrijvingsrekening waarnaar de jaarlijkse afschrijving van investeringen op deze rekening wordt geboekt;
- **KostRek**: de kostenrekening;
- **Soort**: het soort rekening.

De combinatie van rekening, afschrijvingsrekening en kostenrekening bepaalt de journaalposten die u via het rapport **Journaalposten** (zie [Rapporten](../Reports/README.md)) naar uw boekhoudprogramma overzet.

## 3. Standaard algemene rekeningen

**Parameters > Standaard algemene rekeningen** bevat het basisschema dat **Finasset** kopieert wanneer u een nieuw dossier aanmaakt. Houd dit schema in lijn met het schema van uw boekhoudpakket (bijvoorbeeld **AccoWin**): dan kloppen de rekeningnummers in de journaalposten meteen zonder manuele correctie.

Wijzigingen aan het standaardschema gelden alleen voor **nieuwe** dossiers; bestaande dossiers behouden hun eigen rekeningen.

## 4. Extra Values

Met **Parameters > Extra Values** legt u extra kenmerken vast die u bij rekeningen en investeringen kunt gebruiken, bijvoorbeeld voor groeperingen in rapporten of voor de koppeling met het boekhoudprogramma.

## 5. Tips

- Vul altijd de **vier omschrijvingen** in; rapporten in een andere taal tonen anders een lege omschrijving.
- Controleer bij een nieuw dossier eerst of **AfschrRek** en **KostRek** overal ingevuld zijn: de afschrijvingsjournaalposten blijven anders onvolledig.
- Gebruik dezelfde nummering als uw boekhoudpakket, zodat de journaalposten (via het rapport **Journaalposten**) zonder omzetting kunnen worden overgenomen.
