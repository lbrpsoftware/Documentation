# Desktop - BelcoFin - Databases samenvoegen

## 1. Inleiding

Met **Parameters > Databases samenvoegen** voegt u de gegevens van een andere **Belcofin**-database (bijvoorbeeld een back-up van een collega-kantoor of een oude werkdatabase) samen met de database waarin u momenteel werkt. Alle fiches, aangevers, begunstigden, bedrijfsleiders en medewerkers uit het bronbestand worden aan de huidige database **toegevoegd**.

**Waarschuwing**: het samenvoegen is onomkeerbaar. De gegevens worden fysiek in de doeldatabase opgenomen; een voltooide samenvoeging kunt u niet zomaar terugdraaien.

## 2. Voorbereiding

1. **Maak eerst een reservekopie** van de database waarin u werkt (zie [Backup Database](../BackupDatabase/README.md)). Noteer ook waar de back-up staat die u wilt samenvoegen.
2. Controleer in **Parameters > Algemene opties** de **referte-instellingen** (numeriek of alfabetisch, refertelengte) van aangevers, begunstigden, bedrijfsleiders en medewerkers: **Belcofin** hernummert de referenties uit het bronbestand volgens deze instellingen.
3. Zorg dat u de enige gebruiker bent: laat niemand anders in de doel- of brondatabase werken tijdens de samenvoeging.

## 3. Samenvoegen uitvoeren

1. Kies **Parameters > Databases samenvoegen**.
2. **Belcofin** vraagt naar de **back-up** van de database die u wilt samenvoegen. Selecteer het bestand.
3. **Belcofin** leest de gegevens uit de back-up, **hernummert de identificaties en refertes** (aangevers, begunstigden, bedrijfsleiders, medewerkers, opgaven en verzendingen) zodat ze geen botsing geven met de bestaande records, en voegt daarna alles toe aan de open database.
4. Na afloop ziet u of de samenvoeging is gelukt; de opgaverefertes worden in de opties bijgewerkt.

## 4. Na de samenvoeging

1. Controleer de **aangevers, begunstigden en bedrijfsleiders** op duplicaten: dezelfde persoon die in beide databases bestaat, staat daarna wellicht dubbel.
2. Loop de **controlelijsten** na: **Finprof > Controlelijst fiches 281.20 / weddefiches** en het overzicht weddes zonder fiche 281.20.
3. Controleer of de **verzendingen** uit de brondatabase juist zijn overgekomen, zodat u geen aangifte dubbel of onvolledig indient.

## 5. Tips

- Voer de samenvoeging uit **vóór** het aanmaken van nieuwe aangiftes, nooit tijdens een aangifteperiode.
- Bespreek vooraf welke database de **doeldatabase** is: de database die open staat bij het samenvoegen krijgt er de gegevens bij.
- Voor grote brondatabases is het verstandig de samenvoeging eerst uit te proberen op een kopie van de doeldatabase.
