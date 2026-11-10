# Desktop - AccoWin - Boekhouding - Dagboeken

## 1. Inleiding

In de dagboeken voert u alle verrichtingen van het dossier in. **Accowin** heeft vier types dagboeken:

- **Verkoopdagboek**: verkoopfacturen en creditnota's van klanten.
- **Aankoopdagboek**: aankoopfacturen en creditnota's van leveranciers.
- **Financieel dagboek**: betalingen en ontvangsten via kas en bank.
- **Diversen dagboek**: alle overige verrichtingen (onder andere salarissen en sociale lasten).

U opent een dagboek via **Boekhouding > Ingave dagboeken** en kiest vervolgens **Verkopen**, **Aankopen**, **Financieel** of **Diversen**.

## 2. Dagboeken beheren

Via **Parameters > Beheer dagboeken** stelt u per dagboek de eigenschappen in:

- **Referte en naam**: de afkorting en naam van het dagboek, bijvoorbeeld `VEN` voor verkoop.
- **Soort**: verkoop, aankoop, financieel of diversen. In het ingavescherm ziet u alleen de dagboeken van het juiste soort.
- **Rekening**: de tegenrekening die het programma voorstelt, bijvoorbeeld de bankrekening bij een financieel dagboek.
- **Munt dagboek** en **koers**: voor dagboeken in een vreemde munt.
- **Bankrekening / IBAN**: het rekeningnummer van de bankrekening. **Accowin** gebruikt dit nummer om CODA-bestanden aan het juiste dagboek toe te wijzen (zie [Coda](../../Coda/README.md)).
- **Meerdere CODA bestanden voor 1 bankafschrift**: vink aan wanneer de bank het afschrift over meerdere bestanden verspreidt.
- **Actief**: vink uit om het dagboek te deactiveren.

## 3. Een verrichting ingeven: algemene werkwijze

Elk dagboek gebruikt hetzelfde ingavescherm. Bovenaan geeft u op:

- **Dagboek**: selecteer het dagboek. De lijst bevat alleen dagboeken van het juiste soort.
- **Periode**: de openstaande periode van het boekjaar. De status toont of de periode open of gesloten is; in een gesloten periode kan niet worden geboekt.
- **Document**: het documentnummer. Met de pijltjes naast het nummer bladert u door de bestaande documenten. Voert u een nieuw nummer in, dan start u een nieuw document.
- **Datum en periode** van het document zelf.

Daarna voert u de lijnen van het document in. De functietoetsen zijn in alle dagboeken gelijk:

| Toets | Functie |
|-------|---------|
| **F12 / F7** | Document inboeken |
| **F11 / F6** | Lijn bewaren |
| **F10** | Lijn invoegen |
| **F5** | Lijn wissen |
| **F4** | Afsluiten |

Een document blijft regelbaar tot u het inboekt. Boekt u een document opnieuw nadat u het aanpaste, dan zet **Accowin** eerst de oude totalen terug en schrijft daarna de nieuwe boekingen weg. Zo blijven de saldo's en totalen steeds correct.

## 4. Verkoopdagboek

Het verkoopdagboek opent u via **Boekhouding > Ingave dagboeken > Verkopen** (scherm **Ingave verkopen en C.N.**).

1. Kies de **klant**. Het programma haalt de factuur- en leveringsgegevens van de klantfiche op.
2. Vul de **factuurdatum** en de **vervaldatum** in. **Accowin** stelt de vervaldatum voor op basis van de betalingstermijn van de klant.
3. Voer de lijnen in met **grootboekrekening**, **omschrijving** en **bedrag**. Op basis van de EU-code en de BTW-code van de klant stelt het programma de juiste **BTW-code** voor: binnenland, Intracom (EEG) of export.
4. Controleer met **Verschil BTW** of de geboekte BTW overeenstemt met de factuur en met **Contr. B&TW** of balans en BTW-aangifte in evenwicht zijn.
5. Boek het document met **F12 / F7**.

Wie met de UBL-module werkt, kan elektronische verkoopfacturen vanuit dit scherm aanmaken en versturen (zie [UBL](../../UBL/README.md)).

## 5. Aankoopdagboek

Het aankoopdagboek opent u via **Boekhouding > Ingave dagboeken > Aankopen** (scherm **Ingave aankopen en C.N.**).

1. Kies de **leverancier** en vul de factuur- en vervaldatum in.
2. Voer de lijnen in met grootboekrekening, omschrijving en bedrag. De **BTW-ventilatie** bepaalt hoe de BTW wordt behandeld: **aftrekbaar**, **niet aftrekbaar**, **medecontractant** of **Intracom**.
3. Met **BTW aanpassen (F8)** past u de voorgestelde BTW-codes per lijn aan, bijvoorbeeld bij gemengd gebruik.
4. Controleer met **Verschil BTW** en **Contr. B&TW**.
5. Boek het document met **F12 / F7**.

Geïmporteerde **UBL-leveranciersfacturen** openen in dit scherm. U controleert de voorgestelde boekingen, boekt ze en het bronbestand wordt verplaatst naar de map met verwerkte bestanden (zie [UBL](../../UBL/README.md)).

## 6. Financieel dagboek

Het financieel dagboek opent u via **Boekhouding > Ingave dagboeken > Financieel** (scherm **Ingave financiële verrichtingen**).

- Bovenaan ziet u het **beginsaldo** en **eindsaldo** van de bankrekening, zodat u controleert of alles is ingegeven.
- Elke lijn heeft een **datum verrichting**. Bij een vreemde munt voert u de **koers** in.
- Per lijn kiest u de **rekening**: een klant, een leverancier of een grootboekrekening. Met **F2** zoekt u de rekening en met **Lijn zoeken** doorzoekt u de bestaande lijnen.
- Met **Afpunten** koppelt u de betaling rechtstreeks aan de openstaande facturen van de klant of leverancier.
- Met **Wijs bankrekening toe** wijst u het rekeningnummer van de tegenpartij toe aan de klant of leverancier, zodat volgende CODA-bestanden automatisch worden herkend.
- **Extra info** en **Memo** houden bijkomende informatie bij.
- In een financieel dagboek met bankrekening leest u elektronische **CODA**-bestanden in (zie [Coda](../../Coda/README.md)).

## 7. Diversen dagboek

Het diversen dagboek opent u via **Boekhouding > Ingave dagboeken > Diversen** (scherm **Ingave diverse verrichtingen**).

- Per lijn kiest u met **Deb/Cred** of u boekt op een klant, een leverancier of een grootboekrekening.
- Het scherm toont het **totaal debet** en **totaal credit**, met het bedrag dat **geboekt** is en het bedrag dat **nog te boeken** is.
- Met **0 lijnen wissen** verwijdert u in één keer alle lege lijnen van het document.
- **Afpunten** en **Memo** werken zoals in het financieel dagboek.
- Bestanden van het sociaal secretariaat (**SODA**) worden in dit dagboek ingelezen.

## 8. Templates

Terugkerende verrichtingen voert u sneller in met templates:

- In het financieel en diversen dagboek slaat u een document op als template met **Template bewaren** en haalt het terug met **Template importeren**.
- Via **Boekhouding > Template boekingen** beheert u alle templates van het dossier.

## 9. Dagontvangsten

Via **Boekhouding > Dagontvangsten** (scherm **Ingave dagontvangsten**) geeft u de ontvangsten van een dag of periode in. U geeft de **periode van/tot** op, voert de ontvangsten per klant in en sluit af. Deze functie is bedoeld voor kassaverkopen en losse ontvangsten.

## 10. Verwante onderwerpen

- **Boekhouding > Boekjaar selecteren**: het actieve boekjaar en de periode wisselen.
- **Boekhouding > Saldo fin. dagboek**: het saldo van een financieel dagboek opvragen.
- **Boekhouding > Afpunten**: de logische afpunting van klanten en leveranciers (zie [Basisbestanden](../MasterFiles/README.md), historiek).
- **Boekhouding > Export**: verkopen exporteren of de jaarrekening aanmaken.
