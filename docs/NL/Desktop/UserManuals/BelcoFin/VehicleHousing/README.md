# Desktop - BelcoFin - Voertuig en bewoning

## 1. Inleiding

De voordelen alle aard van een bedrijfswagen en een woning worden op de weddefiche berekend (zie [Voordelen alle aard](../Vaa/README.md)). Rond die berekening biedt **Belcofin** drie hulpmiddelen:

- **Simulatie voertuig en bewoning**: de volledige VAA-berekening van één bedrijfsleider afdrukken;
- **Overzicht fiches met voordeel bewoning**: alle fiches met een voordeel bewoning naast elkaar;
- **Febiac database**: de catalogus met officiële wagenwaarden die de voertuigberekening voedt.

## 2. Simulatie voertuig en bewoning

1. Kies **Simulatie > Simulatie voertuig en bewoning**.
2. Selecteer het **inkomstenjaar** en de **aangever**.
3. Kies de **bedrijfsleider** en stel de **naam** en **taal** in voor de afdruk.
4. Klik op **Berekening afdrukken**: **Belcofin** drukt de volledige berekening af van de voordelen voor voertuigen en bewoning van die bedrijfsleider voor het gekozen jaar.

Gebruik de simulatie om de berekening te controleren of aan de bedrijfsleider uit te leggen, vóór u iets op de fiche wijzigt.

## 3. Overzicht fiches met voordeel bewoning

Kies **Simulatie > Overzicht fiches met voordeel bewoning**. U kiest het **inkomstenjaar** en ziet alle fiches met een voordeel bewoning, met per fiche:

- of het voordeel **manueel** werd ingegeven of berekend;
- of het **zonder coefficient** werd behandeld;
- de **aangever** en de **bedrijfsleider**;
- of het kadastraal inkomen **geïnd**exeerd is en of de woning **gemeubeld** is;
- het **percentage privé** en de **omschrijving**.

Met **Gegevens overnemen van** neemt u de bewoningsgegevens van een eerder jaar over; met het vinkje daarnaast bepaalt u of die overname meteen **manueel** wordt opgenomen. Zo bouwt u het woningvoordeel voor een nieuw jaar op zonder alles opnieuw in te tikken. Sluiten doet u met **Sluiten (F4)**.

## 4. Febiac database

De **Febiac database** (Federaal Expertisecentrum voor de Auto- en door dewagenbedrijven) houdt de officiële cataloguswaarden bij van personenwagens: cataloguswaarde, CO2-uitstoot, brandstoftype en dergelijke. **Belcofin** gebruikt deze gegevens bij het voordeel alle aard van een voertuig.

1. Kies **Parameters > Febiac database**.
2. Met **Filter gebruiken (F2)** filtert u de lijst op merk, model of bouwjaar.
3. Selecteer de wagen van de bedrijfsleider met **Selecteren**: de cataloguswaarde en CO2-gegevens worden in het voertuigdetail van de VAA-berekening opgenomen.

Vernieuw de Febiac-gegevens jaarlijks zodat de waarden van nieuwe modellen beschikbaar zijn; oude jaren blijven nodig voor oudere wagens.

## 5. Tips

- Werk het **voertuigdetail** op de weddefiche altijd bij via de Febiac-gegevens: een verkeerde cataloguswaarde of CO2 geeft meteen een verkeerd voordeel.
- Controleer vóór het aanmaken van het XML-bestand het **overzicht fiches met voordeel bewoning**: ontbrekende of manuele bedragen vallen daar meteen op.
- Gebruik de simulatie bij elke wijziging van de privatiteitsgraad of de waardering; het afdrukblad toont de volledige berekening als onderbouwing.
