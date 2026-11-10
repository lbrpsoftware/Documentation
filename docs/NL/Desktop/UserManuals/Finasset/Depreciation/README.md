# Desktop - Finasset - Afschrijvingen

## 1. Inleiding

**Finasset** berekent de afschrijvingen van alle [investeringen](../Investments/README.md) automatisch, op basis van de methode, duur en restwaarde op de investeringsfiche en de **parameters investeringen** van het dossier (zie [Dossiers](../Dossiers/README.md) §2). U kunt kiezen tussen lineaire en degressieve afschrijvingen; de degressieve methode wordt begrensd door het **maximale tarief op de aankoopwaarde** en het **minimumpercentage** van het dossier.

## 2. De afschrijvingstabel

Per investering bouwt **Finasset** een **afschrijvingstabel** op: per boekjaar het afschrijvingsbedrag en -percentage, tot de duur van de investering is verbruikt of de restwaarde is bereikt. Voor het eerste jaar geldt de prorata-instelling van de investering (prorata per dag of volledig afschrijven).

U drukt de tabel af in verschillende vormen via het menu **Reports** (zie [Rapporten](../Reports/README.md)): de gewone **afschrijvingstabel**, de **fiscale** variant, de **totaallijnen per rekening** en de tabel **meerdere jaren**.

## 3. Herbereken afschrijvingen

Wanneer u iets wijzigt dat de afschrijvingen beïnvloedt (duur, methode, restwaarde, aankoopwaarde, dossierparameters), voert u een herberekening uit:

1. Kies **Tools > Herbereken afschrijvingen**.
2. Geef het **boekjaar** op waarvoor u wilt herberekenen.
3. Beperk desgewenst tot een reeks rekeningen met **vanaf rekening** tot **tem rekening**, of tot één **groep**.
4. Vul het **% theoretisch afschr.** in: de drempel waaronder **Finasset** de theoretische (verwachte) afschrijving niet meer aanpast.
5. Klik op **Selecteren**. **Finasset** herberekent de tabellen van alle geselecteerde investeringen.

**Let op**: de herberekening overschrijft de bestaande afschrijvingsbedragen van het gekozen boekjaar. Voer ze uit vóór u de journaalposten of aangiften afdrukt.

## 4. Afschrijving boekjaar 0 maken

Met **Tools > Afschrijving boekjaar 0 maken** zet u de afschrijvingen van het opvolgboekjaar op nul. Gebruik dit wanneer een investering in het laatste boekjaar volledig is afgeschreven en u wilt voorkomen dat er in het volgende jaar nog bedragen worden gegenereerd, of wanneer u een nieuw boekjaar voorbereidt en de bedragen expliciet zelf wilt genereren.

## 5. Afschrijvingen en uitboekingen

Bij de verkoop of afboeking van een investering beslist u op de investeringsfiche of **afschrijving is toegelaten in het jaar van de uitboeking**. De [uitboeking](../Disposals/README.md) berekent daarna de boekwinst of -verlies uit de reeds toegepaste afschrijvingen (**tot afschr vorig BJ**).

## 6. Tips

- Controleer na het aanmaken van een nieuw boekjaar of de periodes kloppen vóór u afschrijvingen genereert (zie [Dossiers](../Dossiers/README.md) §3).
- Voer de **herberekening** altijd in dezelfde volgorde uit als uw boekhouding: eerst dossierparameters en fiches corrigeren, dan herberekenen, dan afdrukken.
- Bewaar de afgedrukte **afschrijvingstabel fiscaal** bij het dossier: ze dient als onderbouwing van de fiscale aangifte.
