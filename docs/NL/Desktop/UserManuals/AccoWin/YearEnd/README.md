# Desktop - AccoWin - Boekhouding - Boekjaarafsluiting

## 1. Inleiding

Aan het einde van het boekjaar sluit u de boekhouding af en start u het nieuwe boekjaar. De functies hiervoor staan in het menu **Parameters**:

- **Beheer Boekjaren en Periodes**
- **Afsluiting boekjaar**
- **Nieuw boekjaar aanmaken**
- **Opening boekjaar verwijderen**
- **Wissen eerste boekjaar**
- **Wissen laatste boekjaar**
- **Reorganisatie**

Met **Boekhouding > Boekjaar selecteren** wisselt u tijdens het werk van boekjaar.

De meeste van deze bewerkingen zijn **onherroepelijk**. Maak eerst een backup (zie [Backup Database](../BackupDatabase/README.md)) en controleer of er geen andere gebruikers in het dossier werken: **Accowin** blokkeert de jaarafsluiting en het wissen van boekjaren zolang andere gebruikers het dossier open hebben.

## 2. Voorbereiden

Voer volgende stappen uit vooraleer u het boekjaar afsluit:

1. Boek alle verrichtingen van het af te sluiten jaar in de dagboeken (zie [Dagboeken](../Accounting/Journals/README.md)).
2. Punt de betalingen af zodat de openstaande posten van klanten en leveranciers kloppen (zie [Basisbestanden](../Accounting/MasterFiles/README.md), historiek).
3. Druk de controles en eindafstemmingen af: dagboeklijsten, proef- en saldibalans, vervaldagenbalans.
4. Controleer de BTW-aangifte van de laatste periode (zie [Intervat](../Intervat/README.md)).
5. Maak een backup van het dossier (zie [Backup Database](../BackupDatabase/README.md)).

## 3. Beheer boekjaren en periodes

Via **Parameters > Beheer Boekjaren en Periodes** opent u het scherm **Boekjaren**. Per boekjaar ziet u:

- **Referte**: de naam van het boekjaar, bijvoorbeeld `2025`.
- **Vanaf** en **tot**: de begin- en einddatum van het boekjaar.
- **Aantal maanden**: de lengte van het boekjaar in maanden (12, of minder voor een verkort eerste jaar).
- **Aanslagjaar**: het aanslagjaar waartoe het boekjaar behoort.
- **Pro rata**: of de periodes pro rata worden berekend.
- **Sluiten**: of het boekjaar is afgesloten.
- **Model balans**: het balansmodel dat voor dit boekjaar wordt gebruikt.

Onder **Boekingperiodes** beheert u de periodes van het geselecteerde boekjaar:

- **Aanmaken**: de boekingsperiodes aanmaken, samen met de bijbehorende **BTW-periode**, het **jaar BTW** en de **IC-periode** (Intracom).
- **Openen** en **Sluiten**: een periode openen of sluiten. In een gesloten periode kan niet worden geboekt (zie [Dagboeken](../Accounting/Journals/README.md)).
- **Laatste wissen**: de laatst aangemaakte periode verwijderen.
- **Status**: toont per periode of ze open of gesloten is, met de datums (**begin** en **einde**) van elke periode.

## 4. Afsluiting boekjaar

Via **Parameters > Afsluiting boekjaar** opent u het scherm **Afsluiting van het boekjaar**:

- **Over te dragen verliezen**: de overdrachtrekening waarop het verlies van het jaar wordt geboekt.
- **Over te dragen winsten**: de overdrachtrekening waarop de winst van het jaar wordt geboekt.
- **Overgedragen resultaat**: de rekening waarop het resultaat wordt overgedragen naar het nieuwe boekjaar.
- **Type afsluiting**: het type afsluiting dat **Accowin** uitvoert.

Controleer de rekeningen en klik op **Start afsluiting**. **Accowin** boekt de afsluitingsverrichtingen en sluit het boekjaar af. Daarna wordt het dossier opnieuw geopend.

Voorwaarden:

- Er zijn geen andere gebruikers in het dossier.
- Uw licentie bevat de optie **Nieuw boekjaar aanmaken** en uw gebruiker heeft het recht om het boekjaar af te sluiten. Is dat niet zo, dan staat de menukeuze grijs.

## 5. Nieuw boekjaar aanmaken

Via **Parameters > Nieuw boekjaar aanmaken** opent u het scherm **Nieuw boekjaar aanmaken**. Bij **Aan te maken** staat het volgende boekjaar. Controleer de gegevens en klik op **Aanmaken**.

**Accowin** maakt het nieuwe boekjaar aan met de bijbehorende periodes en zet de opening over. De openingsboekingen zijn achteraf zichtbaar als gewone boekingen van het nieuwe jaar. Klopt er iets niet, dan verwijdert u de opening met **Opening boekjaar verwijderen** en maakt u ze opnieuw aan.

## 6. Opening boekjaar verwijderen

Via **Parameters > Opening boekjaar verwijderen** verwijdert u de openingsboekingen van het **actieve** boekjaar. **Accowin** vraagt een bevestiging en meldt wanneer de opening is verwijderd. Gebruik deze functie wanneer u na de jaarovergang nog iets moet corrigeren in het oude jaar: pas het oude jaar aan, verwijder de opening en maak ze daarna opnieuw.

## 7. Boekjaar wissen

Met **Wissen laatste boekjaar** en **Wissen eerste boekjaar** verwijdert u respectievelijk het laatste en het eerste boekjaar van het dossier. Deze functies werken alleen wanneer:

- alle vensters van het dossier zijn gesloten;
- het boekjaar niet het actieve boekjaar is (kies eerst een ander boekjaar via **Boekhouding > Boekjaar selecteren**);
- er geen andere gebruikers in het dossier werken.

In het scherm **Boekjaar verwijderen** ziet u welk boekjaar wordt gewist; bevestig met **OK**. Na het wissen heropent **Accowin** het dossier. Voer nadien een **Reorganisatie** uit (zie hierna).

## 8. Reorganisatie

Via **Parameters > Reorganisatie** bouwt **Accowin** de totalen van het dossier opnieuw op. Voer een reorganisatie uit:

- na het wissen van een boekjaar;
- wanneer de totalen of saldo's niet kloppen, bijvoorbeeld na een storing.

Sluit eerst alle vensters en zorg dat er geen andere gebruikers in het dossier werken. Een reorganisatie kan even duren, afhankelijk van de grootte van het dossier.

## 9. Samengevat: de volgorde van de jaarafsluiting

1. Boek alles, punt af en druk de controles af (zie 2).
2. Maak een backup.
3. Sluit de laatste periode van het jaar via **Beheer Boekjaren en Periodes**.
4. Sluit het boekjaar af via **Afsluiting boekjaar**.
5. Maak het nieuwe boekjaar aan via **Nieuw boekjaar aanmaken**.
6. Selecteer het nieuwe boekjaar via **Boekhouding > Boekjaar selecteren** en controleer de opening.
