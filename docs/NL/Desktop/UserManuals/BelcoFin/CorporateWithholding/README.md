# Desktop - BelcoFin - Bedrijfsvoorheffing vennootschappen

## 1. Inleiding

Op de bezoldigingen van bedrijfsleiders houdt de vennootschap **bedrijfsvoorheffing** in en geeft ze die aan via de aangiften 274 (zie [Finprof](../Finprof/README.md)). **Belcofin** biedt twee controleschermen:

- **Controleer berekening Bedrijfsvoorheffing**: vergelijkt de opgeslagen bedrijfsvoorheffing met een herberekening;
- **Overzicht BV Grens Bedrag**: toont per maand de aangevers rond de drempel waarboven bedrijfsvoorheffing verschuldigd is.

## 2. Controleer berekening Bedrijfsvoorheffing

1. Kies **Finprof > Controleer berekening Bedrijfsvoorheffing**.
2. U krijgt een lijst per **aangever** en **bedrijfsleider** met twee kolommen:
   - **BV huidig**: de bedrijfsvoorheffing zoals die vandaag op de fiches staat;
   - **BV nieuw**: de bedrijfsvoorheffing die **Belcofin** met de huidige parameters opnieuw berekent;
   - daarnaast de **medewerker** die de fiche het laatst bewerkte.
3. Waar beide kolommen verschillen, klopt de opgeslagen berekening niet meer met de huidige regels of parameters.
4. Met **Export naar XLS** zet u de lijst in een spreadsheet voor verder onderzoek.

Gebruik deze controle na een programmarelease met aangepaste BV-berekening, na wijzigingen in de gezinstoestand van een bedrijfsleider of vóór het aanmaken van de XML-aangiftes. Fiches met een afwijkende berekening corrigeert u op de weddefiche en geeft u eventueel opnieuw aan.

## 3. Overzicht BV Grens Bedrag

1. Kies **Simulatie > Overzicht BV Grens Bedrag**.
2. Kies het **inkomstenjaar** en de **maand**; geef het **BV-grensbedrag** op waartegen u wilt controleren.
3. Met **Gegevens overnemen van** haalt u de instellingen van een eerder jaar op.
4. Het overzicht toont per **aangever** de bedrijfsleiders met hun bezoldigingen van die maand, zodat u meteen ziet wie boven of onder de drempel zit.

Zo controleert u snel of voor alle bedrijfsleiders bedrijfsvoorheffing moet worden ingehouden en aangegeven, en of een bezoldiging net onder de grens blijft.

## 4. Samenhang met de aangifte

- De inhouding zelf gebeurt op de weddefiche: het maandtabblad toont de berekende bedrijfsvoorheffing (zie [Handleiding](../Manual/README.md) §5.1.4).
- De aangifte en de betaling lopen via **Aangiftes 274** in het menu **Finprof**; de betaalopdrachten drukt u eveneens daar af (zie [Finprof](../Finprof/README.md)).
- Vergeet niet: ook de **aandelenopties** hebben een afzonderlijke bedrijfsvoorheffing (zie [Aandelenopties](../ShareOptions/README.md) §5).

## 5. Tips

- Draai de BV-controle **vóór elke aangifteperiode**: een verschil tussen oud en nieuw betekent een foutieve of verouderde aangifte.
- Controleer de grensbedragen telkens op maandbasis: een bezoldiging die per maand onder de drempel blijft, kan jaarlijks gezien wel degelijk aanspraak geven op inhouding.
- Houd de **gezinstoestand** van de bedrijfsleiders actueel: ze beïnvloedt de bedrijfsvoorheffing rechtstreeks.
