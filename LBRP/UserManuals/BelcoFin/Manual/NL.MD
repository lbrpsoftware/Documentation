# 1. Inleiding

Met deze toepassing kan u

- Fiches 281.50 en 281.20 aanmaken en deze elektronisch indienen via Belcotax on web.
- Wedde-fiches aanmaken met de maandelijkse bezoldigingen van bedrijfsleiders voor de berekening van de bedrijfsvoorheffing.
- Aanmaken van de XML voor het elektronisch indienen van de bedrijfsvoorheffing via Finprof.
- Automatisch fiches 281.20 genereren vanuit fiches met de maandelijkse inkomsten van de bedrijfsleiders
- Een simulatie maken van een wedde : Bruto => netto of netto => bruto

Informatie over het gebruik van Belcotax en Finprof is te vinden op de websites van de overheid:

- http://www.belcotaxonweb.be/
- http://www.minfin.fgov.be/portail2/nl/e-services/finprof/index.htm

# 2. Basisbestanden

Vooraleer de fiches kunnen worden ingegeven moeten de nodige basisgegevens worden aangemaakt:

Deze vinden we onder het menu **Bestanden**

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031429312/original/wy6-48E9FHY-vV_1DZcUwz4cLgR2q0AEtQ.png?1663059238)

## 2.1 Medewerkers

Hier kunnen de gegevens van de medewerkers binnen het kantoor worden opgegeven, indien een medewerker gekoppeld is aan een aangever, worden de gegevens van de medewerker automatisch opgenomen in de email bij het verzenden van de aangiftes van de bedrijfsvoorheffing.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031429830/original/GeNEcX2E6TMjfK5yi2bhARenQW9NsGmwxw.png?1663059309)

## 2.2 Schuldenaars

Hier worden de fiches met de gegevens van de schuldenaars (dossiers) van de inkomsten aangemaakt. Deze kunnen worden gebruikt voor zowel de fiches 281.20 en 281.50 en de wedde fiches.

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031429961/original/WUrNb3-r3vxB8WgeGLXg1kl2vMnFEKHjkA.png?1663059335)

Tabblad "**_Gegevens_**"

- Naam + voornaam van de schuldenaar, adres + woonplaats. Voor een rechtspersoon moet steeds het ondernemingsnummer ingevuld worden.
- Voor een natuurlijke persoon: Nationaal nummer invullen. Indien het Nationaal nummer niet gekend is kan men dit oplossen door tussen de Naam en de Voornaam een komma te plaatsen zodat deze gegevens worden gescheiden in de aangifte. Natuurlijke personen met een ondernemingsnummer moeten het ondernemingsnummer invullen.
- Landcode: belangrijk voor het ophalen van de RSZ code van dat land. Voor België is dit 00000. Ieder ander land heeft een eigen RSZ code die overgenomen wordt in de aangifte.
- Periode aangifte BV: hier geeft u op of voor deze aangever maandelijks of per kwartaal de aangifte van de bedrijfsvoorheffing moet gebeuren.
- Ontvangkantoor: ontvangkantoor waaraan de bedrijfsvoorheffing dient betaald te worden. Deze wordt automatisch bepaald adhv de postcode. Indien er meerdere ontvangkantoren zijn voor een bepaalde postcode dan worden de mogelijke ontvangkantoren getoond en moet de gebruiker het juiste ontvangkantoor selecteren.

Tabblad "**_Bedrijfsleiders_**"

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031430636/original/4jjDYE5UmiIsRC6MVrYGZ2YTD2c0tQdIrw.png?1663059420)

- Lijst met de bedrijfsleiders van deze aangever

Tabblad "**_Dossierverantwoordelijke_**"

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031430452/original/O-yYFyQdHF_wXjfhNI-4GYlkL6tPmfGQUw.png?1663059386)

- Hier kan u de medewerker selecteren die verantwoordelijk is voor het dossier.

## 2.3 Begunstigden (genieters van commissies, erelonen ...) voor fiches 281.50

Hier worden de fiches met de gegevens van de begunstigden van commissies, erelonen enz... die een fiche 281.50 moeten ontvangen aangemaakt .

Hier gelden ook dezelfde voorwaarden voor rechtspersonen en natuurlijke personen zoals bij de schuldenaars (aangevers)

- Naam + voornaam van de schuldenaar, adres + woonplaats
- Voor een Belgisch rechtspersoon moet steeds het ondernemingsnummer ingevuld worden.
- In 2009 hebben alle natuurlijke personen die een vrij beroep (advocaat, arts, kinesist,…) uitoefenen een KBO-nummer ontvangen. Als u het KBO-nummer van de natuurlijk persoon kent vermeldt u dat in het vak ondernemingsnummer.
- Voor een natuurlijke persoon: Nationaal nummer invullen. Als natuurlijk persoon ondernemingsnummer heeft dan moet deze ingevuld worden.
- Landcode: zie schuldenaars. Als landcode verschillend is van B (België) dan wordt een extra veld getoond waarbij fiscaal identificatie (FIN) kan ingevuld worden. In het veld fiscaal identificatie kan elke identificatie van de buitenlandse begunstigde ingevuld worden. Dit kan dus een btw nummer zijn maar ook een handelsregister nummer, ...
- Soort: indien de ontvanger van de vergoedingen een sportbeoefenaar, trainer of opleider is, kan dit hier worden opgegeven.
- Aard: natuurlijk persoon of rechtspersoon.

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031430909/original/xNrk5Wi9ZApBW3wMgkSdkudEyd-NUfjoKA.png?1663059461)

## 2.4 Bedrijfsleiders met inkomsten waarvoor een fiche 281.20 wordt opgemaakt

Hier worden de fiches met de gegevens van de bedrijfsleider die een fiche 281.20 moeten ontvangen aangemaakt . De gegevens zijn opgenomen in 2 tabbladen:

Op het tabblad "Identificatie" kunnen de algemene persoonsgegevens worden ingevuld.

- Naam + voornaam van de schuldenaar, adres + woonplaats
- Landcode: zie schuldenaars
- Nationaal nummer. Indien het Nationaal nummer niet gekend is moet de geboorteplaats en geboortedatum worden ingevuld. Voor buitenlanders moet het fiscaal identificatienummer (FIN) worden ingevuld op de tab "Aanvullende informatie"
- Naam en voornaam van de echtgeno(o)t(e) of wettelijk samenwonende
- Methode verzenden: hier kan u opgeven hoe de weddefiches worden verzonden naar de bedrijfsleiders
- Fiscaal identificatienummer (FIN)

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031431022/original/zIhzTFdXXq8UkRubpZh34GIxfuUkzMtSFA.png?1663059479)

Het tabblad "**_Aanvullende informatie_**" bevat de gegevens over de gezinstoestand, burgerlijke stand en personen ten laste

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031431210/original/e6Y6rh10XEJF0xafCbjbWxFAOnmxcp6rfQ.png?1663059513)

Het tabblad "**_Aangevers_**" bevat de lijst met de aangevers waarvan deze bedrijfsleider inkomsten kan ontvangen.

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031431302/original/ZiwA8DrVjWB--g3ZMWY8VdviJmTgScVIhA.png?1663059522)

Bij het toevoegen of wijzigen van de aangever kunnen volgende extra gegevens worden opgegeven:

- Paritair comité
- Datum in dienst of uit dienst

# 3. Fiches Belcotax bewerken en afdrukken

De fiches kunnen worden aangemaakt en afgedrukt met de opties in het menu Belcotax.

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031431484/original/Ky2BR5o7PL9uFEMIJ_k1llCAhLIvTasUIA.png?1663059543)

## 3.1 Bewerken van de fiches

### 3.1.1 Fiches 281.20: inkomsten van bedrijfsleiders

Op dit scherm worden de fiches 281.20 voor bedrijfsleiders aangemaakt.

In lijstweergave kan men van jaar wisselen door te klikken op de op- en neerknop naast het jaartal.

Er kan ook een selectie gemaakt worden op basis van de status van de fiche. Zo kan men bijvoorbeeld enkel de verzonden fiches tonen in de selectielijst

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031431634/original/yYCegvtq-95oPliZpE32n-CHCV6MqJA4IQ.png?1663059566)

**_Tip: met F11 (functietoets 11) springt men naar het invoerveld voor de bedrijfsvoorheffing_**.

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031439677/original/NIISWOqfMI0oCk2FVZ_VWbPI5-QKHcmyXw.png?1663060836)

#### 3.1.1.1 Aanmaken van een fiche voor een volgend jaar

Door te klikken op de knop "**_Nieuw jaar aanmaken (Alt - N)_**" worden de gegevens van de huidige geselecteerde fiche overgezet naar een fiche voor het volgende jaar.

Op deze nieuwe fiche kan men dan de gegevens aanpassen met de inkomsten voor dat nieuwe jaar.

#### 3.1.1.2 Bijkomende fiche maken voor dezelfde begunstigde in hetzelfde jaar

Door te klikken op de knop "**_Bijkomende fiche in dit jaar voor deze begunstigde maken_**" worden de gegevens van de aangever en bedrijfsleider overgenomen en kan men extra inkomsten aangeven voor hetzelfde jaar. Deze knop wordt enkel beschikbaar als de vorige fiche 281.20 van deze aangever/bedrijfsleider verzonden is.

#### 3.1.1.3 Voordelen alle aard (VAA)

Door te klikken op de knop "**_VAA afdrukken_**" kan een detail worden afgedrukt van de voordelen alle aard die werden opgenomen op de fiche.

Als het vinkje 'Detail invullen van VAA' aangevinkt is dan kan detail van de VAA ingevuld worden en kunnen de VAA van voertuig, bewoning, elektriciteit en verwarming automatisch berekend worden. Als het vinkje niet aangevinkt is dan kan het totaal bedrag van VAA op de fiche ingevuld worden en moet men manueel de vinkjes aanzetten over welke VAA het gaat.

![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031441058/original/eOgSiJ5k7rD7cXrCrb_3gZJjGsp7vIasTg.png?1663061077)

### 3.1.2 Fiches 281.50: genieters van commissies, erelonen

Hier worden de fiches 281.50 voor commissies, erelonen enz... aangemaakt. In lijstweergave kan men van jaar wisselen door te klikken op de op- en neerknop naast het jaartal. Er kan ook een selectie gemaakt worden op basis van de status van de fiche. Zo kan men bijvoorbeeld enkel de verzonden fiches tonen in de selectielijst

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031441689/original/lrPUSvluK82pUgXhWWj63XwrKPiFzG25rw.png?1663061168)

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031441728/original/H7H6c1SXyLPSJ3DhUm5vD5HUyKqnyENGaA.png?1663061179)

#### 3.1.2.1 Opvragen gegevens van aangever of begunstigde vanuit de fiche

Door te klikken op de **info-knop** wordt de fiche van de aangever of begunstigde getoond.

#### 3.1.2.2 Aanmaken van een fiche voor een volgend jaar.

Door te klikken op de knop **_Nieuw jaar aanmaken (Alt - N)_** worden de gegevens van de huidige geselecteerde fiche overgezet naar een fiche voor het volgende jaar. Op deze nieuwe fiche kan men dan de gegevens aanpassen met de inkomsten voor dat nieuwe jaar.

#### 3.1.2.3 Afdrukken fiche 281.50

Door te klikken op de knop **_afdrukken fiche 281.50_** wordt de fiche 281.50 voor deze begunstigde afgedrukt.

### 3.1.3 Afdrukken van de fiches en lijsten

#### 3.1.3.1 Afdrukken fiches 281.20 of het overzicht van de fiches 281.20

In het bovenste deel van het scherm kan het jaar geselecteerd worden en kan een selectie worden gemaakt op basis van de status, medewerker en/of de verzending van de fiches

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031443740/original/3AncmFHaeBKKEcd2gvJDtL37Is032_J5VQ.png?1663061491)

In de lijst kunnen de aangevers geselecteerd worden waarvoor fiches moeten worden afgedrukt.

- Met + ... kan men alle dossiers in eenmaal selecteren.
- Met - ... kan men de selectie ongedaan maken

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031444352/original/zwtKafU3zd3U4oKs2kMmED74pVVV5XxRFA.png?1663061563)

#### 3.1.3.2 Afdrukken van de fiches 281.50 of het overzicht van de fiches 281.50

Het selectiescherm is identiek aan het scherm van de fiches 281.20.

#### 3.1.3.3 Afdrukken van de lijst met het overzicht van de fiches.

De lijst van de fiches bevat een overzicht met de adresgegevens van de begunstigde en de bedragen die werden opgenomen op de fiches.

Selecteer voor het afdrukken van het overzicht het vinkje naast lijst.

![Image 17](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031444496/original/6MSkovtPLtNRKPf7_T4T1f-LvwWRq2UNlA.png?1663061579)

Bij het afdrukken van het overzicht kan men opgeven of de fiches per aangever op een afzonderlijke pagina moet worden gedrukt:

![Image 18](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031444515/original/rlZzQol24SCYQMkPRXi-Fr0tDHLW_thSYg.png?1663061587)

# 4. Aanmaken en verzenden van het XML-bestand

## 4.1 Parameters voor het verzenden van het XML-bestand

Om een XML-bestand naar Belcotax te kunnen verzenden moeten de juiste parameters worden opgegeven. Via het menu Parameters – Algemene opties kunnen de gegevens van de verzender worden opgegeven.

![Image 19](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031444811/original/OGQgyY9xtEiL9DWSTVsNI9RijYHrTdgbcQ.png?1663061627)

Op de 2e tab kan de map worden opgegeven waar het XML-bestand van de fiches 281.50 wordt bewaard.

Hier kan ook de nummering van de verzendingen worden aangepast. Het in te vullen nummer is het nummer van de laatste verzending. (Bij verzendingen voor een nieuw jaar moet dit op 0 worden gezet)

Er kan ook worden opgegeven welke statussen standaard worden opgenomen bij de selectie van de te verzenden aangiften in de XML.

![Image 20](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031444882/original/sgl5SsJy710wT398XxTV8ugVcV04F5-j8A.png?1663061648)

Op de 3e tab worden parameters voor Finprof (aangiftes 274) opgegeven:

- De paden voor het bewaren van de XML van de aangiftes 274 en de bewaarde PDF's van de aangiftes opgegeven.
- Hier kan ook worden opgegeven of bij het aanmaken van de XML de aangiftes in de bedrijfsvoorheffing automatisch mee worden afgedrukt of verzonden.

![Image 21](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031444947/original/zEDTqQtyi33uLdYXk0WNJ_zB9wTb3cx7cA.png?1663061661)

## 4.2 Aanmaken XML-Bestand met fiches 281.50 en 281.20

Selecteer het menu Belcotax – Aanmaken XML 281.....

U krijgt een selectielijst met de dossiers waarvoor fiches bestaan die via Belcotax kunnen worden doorgezonden.

Er kunnen extra filters toegepast worden op de status van de fiches en/of de medewerker

![Image 22](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031445360/original/PQ8RKiUYSepnqbNFo56hS2zmPflsNXqbdg.png?1663061740)

Er zijn 2 types van XML-bestand die kunnen worden aangemaakt:

**XML voor definitieve aangifte of XML voor testaangifte**.

<strong><ins>TIP</ins></strong>: _Maak eerst een testbestand aan om door te sturen naar Belcotax, hiermee kunt u nagaan of alle gegevens in het bestand correct verwerkt worden door Belcotax. Als bij de verwerking van het testbestand geen fouten worden gemeld door Belcotax, kan een definitieve aangifte worden doorgezonden_.

Selecteer de dossiers welke moeten worden opgenomen in het XML-bestand dat u wilt doorsturen via Belcotax en druk op de knop OK. Vervolgens wordt het scherm getoond om de BELCOTAX toepassing te starten.

## 4.3 Verzenden XML-bestand via Belcotax

Na het aanmaken van de XML, wordt het scherm getoond om de BELCOTAX toepassing te starten

Door te klikken op Locatie bestand kopiëren kan men de locatie in het geheugen plaatsen om dit achteraf te plakken als in de webtoepassing van Belcotax on Web gevraagd wordt naar het XML bestand.

![Image 23](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031499210/original/Kv-u5WOsgRHZK7pUBQMJdGRyUGcyhx9gvw.png?1663071214)

Log in op de BELCOTAX website om het bestand te verzenden.

![Image 24](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031508544/original/VvAAUvuQtkZZ5YAR1v83ov8LWA-lp9WBUw.png?1663072903)

De procedure om het bestand te verzenden, is beschreven op de website van Belcotax.

Klik op **Meer** bij vragen in het aanlogscherm of ga naar volgende link: http://minfin.fgov.be/portail2/nl/e-services/belcotaxonweb/faq/index.htm

![Image 25](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031510645/original/na99Br5mZ1b31RapGLXmMFmWInOtBaMp1A.png?1663073236)

Na het converteren toont BELCOTAX de fouten die gevonden zijn en die moeten verbeterd worden.

<strong>Indien men een '<ins>XML voor testaangifte</ins>' heeft aangemaakt dan krijg je de foutboodschap 'Lijn 5 Kolom: 24, Tag: v0010_bestandtype: Het veld \"Bestandtype\" moet de melding BELCOTAX dragen.' omdat het om een test bestand gaat. Deze foutmelding kunt u dus negeren. De andere foutmelding niet</strong>.

Is dit de enige foutmelding dan kunt u het definitieve XML -bestand aanmaken en doorsturen.

![Image 26](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031510983/original/ErBdG0PngrZBax_b3sIfg5aP4EyWhMD3dQ.png?1663073309)

Na een testuitvoering moet men vanuit het programma terug het definitieve XML-bestand aanmaken om door te sturen.

Bij aanmaken van het definitief XML-bestand worden de fiches op de status 'Verzonden' gezet. Bij aanmaken van een test XML-bestand dan wordt de status niet aangepast.

## 4.4 Extra gegenereerde gegevens bij het aanmaken van het XML-bestand

### 4.4.1 Aangiften

Bij het aanmaken van het XML-bestand voor definitieve aangifte wordt voor elke aangever (schuldenaar) een aangifte aangemaakt die de gegevens van de aangever en de fiches van de begunstigden per aangever bevat.

![Image 27](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031511658/original/zUGrMzHRjtNQd5My6_whlxe8jp66fkmDbA.png?1663073415)

![Image 28](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031511657/original/-uDTNYewVF5VSSi02tNPHtRUMOkoCGkjFQ.png?1663073415)

Het scherm geeft ook de status (verzonden of niet-verzonden) weer en de naam van het XML-bestand van de verzending.

In de lijst wordt een overzicht getoond van de fiches die in deze aangifte zijn opgenomen.

### 4.4.2 Verzendingen

Lijst van de verzendingen:

- Datum van indiening van het XML bestand
- Verwijzing naar het XML bestand
- Type van fiches die werden opgenomen: Fiches 281.20 of 281.50

![Image 29](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031511980/original/wYPqgLzihUKVUhVa8WFpSXn4rN2VVMyZUw.png?1663073501)

Detail van een verzending:

![Image 30](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031511981/original/N0OmEeKp3hDVatkkjErG0GhripOv7DHQIg.png?1663073501)

Dit scherm bevat de gegevens van de verzendingen.

De locatie waar het XML-bestand werd opgeslagen wordt aangegeven en kan eventueel worden gekopieerd naar het klembord met de knop **Locatie bestand kopieren**.

De lijst toont een overzicht van de aangiften die zijn opgenomen in de verzending.

Met de knop **afdrukken fiches verzending** kunnen alle fiches die in de verzending zijn opgenomen worden afgedrukt.

**_Indien een verzending wordt gewist dan worden alle fiches in de verzending terug op de status 'In bewerking' gezet_**.

# 5. Wedde-administratie en aangifte bedrijfsvoorheffing voor bedrijfsleiders

Het beheer van de wedde-administratie gebeurt via het menu Finprof:

## 5.1 Wedde-fiche

De basis van de wedde-administratie is de wedde-fiche, deze bevat de informatie over de maandelijkse inkomsten die als basis dienen voor de aangifte in de bedrijfsvoorheffing en de extra voordelen die moeten worden opgenomen op de fiche 281.20.

![Image 31](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031529550/original/WABtQJfbldVe5pFfQmr5l6PUvPup_dU4uw.png?1663076610)

Het scherm van de wedde-fiche bevat verschillende tabbladen:

1. De basisgegevens voor het aanmaken van de maandelijkse inkomsten
2. Overzicht van de voordelen alle aard (VAA) op jaarbasis
3. Aanvullende gegevens nodig voor het genereren van de fiche 281.20
   of berekening van de bedrijfsvoorheffing.
4. Een overzicht van de inkomsten per maand van de bedrijfsleider.

![Image 32](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031529554/original/de3hZOOrXQIzIOb5HibHQjlfLjOW4kkVdg.png?1663076610)

5.1.1 Basisgegevens voor de wedde-administratie

1. De maandelijkse brutowedde van de bedrijfsleider.
2. Extra bezoldigingen die in bepaalde maanden extra worden toegekend zoals vakantiegeld of een eindejaarsbonus (deze worden in de aangegeven maanden automatisch overgenomen in de detail van de maandinkomsten).
3. Hier kan men aangeven voor welke maanden de extra bezoldiging wordt uitgekeerd.
4. Door op te klikken, kan het volledige jaar aanvinkt worden.
   De berekening van de bedrijfsvoorheffing gebeurt automatisch op basis van de opgegeven bezoldigingen en de voordelen, rekening houdend met de gezinstoestand van de bedrijfsleider zoals opgegeven op de fiche van de bedrijfsleider.
   Indien men vermoedt dat er andere inkomsten zijn die het eindbedrag van de te betalen belasting sterk kunnen beïnvloeden, is het mogelijk zelf het bedrag van de bedrijfsvoorheffing te bepalen dat zal worden opgenomen bij het aanmaken van de maandinkomsten en indienen van de aangifte in de bedrijfsvoorheffing. Om dit aan het programma duidelijk te maken moet het vakje "BV manueel ingeven" worden aangevinkt en het bedrag van de in aanmerking te nemen bedrijfsvoorheffing ingevuld in vak (5)
5. Bedrag dat maandelijks zal worden opgenomen als bedrijfsvoorheffing.
6. Bedrag van de vergoeding die de bedrijfsleider ontvangt als forfaitaire onkosten.
7. Gegevens voor de verwerking van maaltijdcheques toegekend aan de bedrijfsleider
8. Sociale bijdragen voor de bedrijfsleider die door de vennootschap worden betaald:
   Geef de periode en het bedrag / periode op, bij de berekening van de maandinkomsten zal dit worden verdeeld over de maanden van het jaar.

Knop ![Image 33](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031530352/original/m3I5UoYf354fH11lrr8PQ5XlVG7ufJFs0Q.png?1663076733)

Door te klikken op de knop "Inkomsten voor jaar aanmaken", kan men de inkomsten voor het jaar genereren.

Deze inkomsten komen in de tab "Inkomsten\" en zullen worden gebruikt voor de maand- of kwartaalaangifte van de bedrijfsvoorheffing.

![Image 34](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031530353/original/ztovJDS4ucST4wiew4XQRL10N1wK01DwxA.png?1663076733)

_Bij het aanmaken van de inkomsten zal voor de 'andere bezoldiging' rekening worden gehouden met de afgevinkte maanden **(3)**_

Knop ![Image 35](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031530355/original/oKiAr1RHe-5RvFvX_v5xfK6lidcoA9H31w.png?1663076733) .

Indien de basisgegevens wijzigen (bv: door aanpassing van het maandloon) en de inkomsten voor een jaar reeds werden aangemaakt, kan men deze wijzigingen laten opnemen in de maanden waarvoor nog geen aangifte werd gedaan. (Zie 5.1.4.4)

Met de knop ![Image 36](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031530356/original/JBjESuSo9Ni_SWBoy1Qyqlc1Y-lNjxVqRQ.png?1663076733) kan de module worden opgeroepen om een simulatie te maken van bruto => netto of van netto => bruto.

Met de knop ![Image 37](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031530357/original/mw5Or9jL7x9ieEXhxS8ug045EpuWtkM5Wg.png?1663076733) worden de basisgegevens van de fiche overgezet naar een nieuwe fiche in het volgende jaar (Zie: Aanmaken van een fiche voor een volgend jaar)

### 5.1.2 Voordelen alle aard op jaarbasis

Deze tab bevat de gegevens over de voordelen alle aard die aan de bedrijfsleider zijn toegekend

![Image 38](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031531404/original/zdLYAxm9L_GzI_PkMuZ5YtDpVFQwvpAHkg.png?1663076917)

Bij het wijzigen van de voordelen zal het programma vragen of de voordelen moeten worden herverdeeld over de nog niet aangegeven maanden. Indien men gekozen heeft deze niet te verdelen over de maanden, worden deze opgenomen bij de extra inkomsten in de lijn \"sup\". Wil men nadien deze toch verdelen over de nog niet aangegeven maanden, kan dit via de knop

![Image 39](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031531400/original/FAKeMKPAtbqazXCstTIMr3Byb9WDN1_Wcw.png?1663076917)

Voor de voordelen van bewoning en bedrijfswagens wordt een extra invulvenster getoond waar de specifieke parameters voor de berekening kunnen worden opgegeven.

<ins>Detail gegevens voor berekening voordeel voor een voertuig</ins>

![Image 40](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031531401/original/G0AUZjOAY3igemGOKzV7rp6hp9TuSMtvhA.png?1663076917)

<ins>Detail gegevens voor de berekening van het voordeel van een woning</ins>

![Image 41](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031531402/original/YdvevBUkJyyRtYz9HU_i1lmlAtisAJ4iFQ.png?1663076917)

### 5.1.3 Aanvullende gegevens

Deze tab bevat de aanvullende gegevens voor het aanmaken van de fiche 281.20 en de informatie over de gezinstoestand die nodig zijn voor de berekening van de bedrijfsvoorheffing.

Bij de selectie van een bedrijfsleider worden de gegevens over de gezinstoestand overgenomen van de fiche van de bedrijfsleider.

### 5.1.4 Overzicht en detail van de inkomsten

#### 5.1.4.1 Tabblad \"Inkomsten\"

In de tab "Inkomsten" heeft men een overzicht en de detail van de inkomsten en voordelen per maand.

![Image 42](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031532124/original/3VQyHEp-iS0VQ7kJJ6vgV2Xn7xdCMUm1Dg.png?1663077035)

De lijn "Sup" geeft het verschil weer tussen de oorspronkelijk gegenereerde inkomsten en eventuele wijzigingen die nadien werden doorgevoerd, (bv.: door wijzigen van voordelen in natura of aanpassingen aan het voordeel van de bedrijfswagen(s). Een cel in de lijn Sup wordt rood gekleurd indien er een getal verschillend van 0 in staat. Op deze manier wordt de aandacht van de gebruiker hierop gevestigd en kan hij eventueel de voordelen terug verdelen over de nog niet aangegeven maanden.

#### 5.1.4.2 Tabblad "Detail maand"

De tab "Detail maand" geeft het detail van de inkomsten voor de maand die geselecteerd is in de grid van maandoverzicht. Hier kunnen de gegenereerde gegevens voor de maand nog worden aangepast.

![Image 43](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031532324/original/00Dml0PCuspr5ixHbsaIee1hHZfADyfT1A.png?1663077080)

Door te klikken op de knop "Weddefiche afdrukken" kan de weddefiche van de bedrijfsleider voor de geselecteerde maand worden afgedrukt.

Door te klikken op de knop "Druk individuele rekening" kan men de individuele rekening van het inkomstenjaar van de bedrijfsleider afdrukken.

#### 5.1.4.3 Knoppenbalk

De werkbalk bevat de knoppen waarmee de gegevens kunnen worden aangepast of afgedrukt

![Image 44](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031533949/original/mn7T2FwSNUzJe1ZHV-yCzTL4Y-8NVd4PIg.png?1663077369)

##### 5.1.4.3.1 Wijzigen van de inkomsten voor de geselecteerde maand

Indien er nog geen aangifte werd gemaakt voor de geselecteerde maand kunnen er nog wijzigingen worden aangebracht. De knop ![Image 45](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031534715/original/Ma8glhTDRvDPLETdavsg-TeJOZ3QBYUljA.png?1663077525) maakt het scherm actief om wijzigingen in te voeren.

##### 5.1.4.3.2 Toevoegen van een nieuwe maand

Met de knop ![Image 46](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031534875/original/REKENo_YNb6tY2kbl1vJAQmCnwSLXRxiGw.png?1663077570) kunnen blanco lijnen voor de verschillende maanden van het jaar worden aangemaakt. Selecteer de te genereren maanden in de linker lijst.

Indien voor een maand waarvoor reeds een aangifte werd gemaakt, nog bijkomende inkomsten moeten worden ingebracht, kan een extra lijn worden aangemaakt, selecteer hiervoor de maand in de rechter lijst.

![Image 47](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031534876/original/AuryvQ6VSUg_r9ETnKluzoWZiYaIUn3WXg.png?1663077570)

##### 5.1.4.3.3 Verwijderen van de inkomsten voor het ganse jaar

Indien er nog geen aangiften werden gemaakt voor het jaar, kan men de gegenereerde inkomsten wissen met de knop volledig jaar wissen in de tab "Inkomsten"

![Image 48](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031535550/original/sANdgWueRMPv-dMCbm1knWEYMilx3jWY8A.png?1663077685)

##### 5.1.4.3.4 Afdrukken weddefiche en individuele rekening

Met de knop ![Image 49](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031535841/original/S3w3_aYP5lBv5yhHKE0Q8rT5WiW8HqxSDw.png?1663077718) kan de weddefiche van de geselecteerde maand worden afgedrukt.

Met de knop ![Image 50](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031535842/original/2SfmR6TQjnsYpmPucb2pbs7NIv1ldXTElw.png?1663077718) wordt de individuele rekening van de bedrijfsleider voor het jaar afgedrukt

##### 5.1.4.3.5 Berekening

De knop 'Berekening' is enkel beschikbaar als de bedrijfsvoorheffing automatisch wordt berekend. Via de knop kan dan een overzicht bekomen worden hoe het systeem aan de berekende bedrijfsvoorheffing is gekomen voor de geselecteerde maand.

#### 5.1.4.4 Inkomsten aanpassen aan gewijzigde basisgegevens

Indien de basisgegevens wijzigen (bv: door aanpassing van het maandloon) en de inkomsten voor een jaar reeds werden aangemaakt, kan men deze wijzigingen laten opnemen in de maanden waarvoor nog geen aangifte in de bedrijfsvoorheffing werd gedaan door op Knop ![Image 51](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031536493/original/8T1kKYbKBL4MGEvwVH8HBzCZukwFm-17MA.png?1663077840) te klikken.

#### 5.1.4.5 Aanmaken van een fiche voor een volgend jaar

Door te klikken op de knop ![Image 52](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031536225/original/J46YWqaUF9EDDOTwgBP7SnRN2Rk95BvOyg.png?1663077784) op het tabblad \"Basisgegevens\" worden de gegevens van de huidige geselecteerde fiche overgezet naar een fiche voor het volgende jaar.

Op deze nieuwe fiche kan men dan eventueel eerst de parameters aanpassen om dan de inkomsten voor dat nieuwe jaar te genereren.

## 5.2 Afdrukken en verzenden van de weddefiches en overzichten

In de selectieschermen verschijnt de lijst met aangevers (dossiers) om een selectie te maken.

Eventueel kan het jaar worden gewijzigd. ![Image 52](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031536994/original/CdubXlNA-J4m1CWPzmWdMxKbZYadLBCt7w.png?1663077922)

Een selectie op medewerker is mogelijk in alle selectieschermen.

Met de knop ![Image 53](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031536993/original/9-EjO4NWDAdEUnI8v3EliH73oF1Sqqd_6Q.png?1663077923) worden alle dossiers geselecteerd.

Met de knop ![Image 54](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031536995/original/4gciWdHkkDQWytx_3_Bw0F15ge4EGs-Onw.png?1663077923) wordt de selectie ongedaan gemaakt.

Individuele selectie van dossiers is mogelijk door het aanvinken van de lijn in de lijst.

Teksten van email kunnen aangepast worden via het **Menu > Parameters > Teksten E-mails**.

### 5.2.1 Afdrukken individuele rekeningen

De individuele rekening geeft een overzicht van de inkomsten van de bedrijfsleider(s) voor het geselecteerde jaar.

![Image 55](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031538795/original/KeWcTaddK3UEE-C9Uokf3e_8jE5chy0-zQ.png?1663078221)

### 5.2.2 Afdrukken jaaroverzicht onderneming

Het "**jaaroverzicht onderneming**" geeft een overzicht van de inkomsten van alle bedrijfsleiders per onderneming voor het geselecteerde jaar met totalen per maand en eventueel per kwartaal.

![Image 56](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031538938/original/9k_J1NsvRJQy4JF51B32VumQUmooclZ7LQ.png?1663078246)

### 5.2.3 Afdrukken jaaroverzicht te betalen bedrijfsvoorheffing

Het "Overzicht te betalen bedrijfsvoorheffing bedrijfsleiders" geeft een overzicht van de betalingen die in de loop van het jaar zullen moeten worden uitgevoerd voor de betaling van de bedrijfsvoorheffing.

Onder de lijst van de uit te voeren betalingen staan de gegevens van het ontvangkantoor waaraan de betaling moet gebeuren.

![Image 57](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031540237/original/xtDANu-scrtWMH46WPX7OCTPtyM83lpQ-g.png?1663078478)

Door het aan- of uitvinken van de extra selecties kan de lijst gefilterd worden op de wijze van verzenden van documenten zoals deze is opgegeven bij "<strong><ins>Methode van verzenden van documenten</ins></strong>" op de fiche van de aangevers (zie: Schuldenaars)

Door het vinkje bij "**Reeds verzonden brieven/emails mee opnemen**" aan te vinken kan men opgeven dat aangevers waarvoor de documenten reeds verzonden zijn, opnieuw moeten worden geselecteerd.

**Er kan een extra tekst opgegeven worden die op het document moet afgedrukt worden. Deze tekst kan geconfigureerd worden via menu>parameters>teksten algemeen**.

### 5.2.4 Weddefiches afdrukken

De afgedrukte weddefiche geeft een overzicht van de inkomsten van de bedrijfsleider voor een maand.

![Image 58](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031646209/original/9cm7ptLkywJvh1n-wveNrH4ZCZZ5K_bpBA.png?1663143399)

In het selectiescherm voor de weddefiches kunnen de maanden worden opgegeven waarvan de fiches moeten worden gedrukt.

- Door het aan- of uitvinken van de extra selecties kan de lijst gefilterd worden op de wijze van verzenden van documenten zoals deze is opgegeven bij "**Methode verzenden**" op de fiche van de bedrijfsleider. <br>
  (Zie: _Bedrijfsleiders met inkomsten waarvoor een fiche 281.20 wordt opgemaakt_)
- Door het vinkje bij "**Reeds verzonden weddefiches mee opnemen**" aan te vinken kan men opgeven dat bedrijfsleiders waarvoor de weddefiches reeds verzonden zijn, opnieuw moeten worden opgenomen in de selectielijst.

### 5.2.5 Afdrukken betaalopdrachten aangiftes in de bedrijfsvoorheffing

![Image 59](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031647015/original/hr98UMV6wp9H3EXNK9_5EfHH7GzWGhqOMQ.png?1663143532)

De "**betaalopdracht bedrijfsvoorheffing**" is een brief per aangever waarin alle gegevens vermeld staan over de te betalen bedrijfsvoorheffing voor de geselecteerde periode.

- Door het aan- of uitvinken van de extra selecties kan de lijst gefilterd worden op de wijze van verzenden van documenten zoals deze is opgegeven bij "<strong><ins>Methode van verzenden van documenten</ins></strong>" op de fiche van de aangevers (zie: Schuldenaars)
- Door het vinkje bij "**Reeds verzonden brieven/emails mee opnemen**" aan te vinken kan men opgeven dat aangevers waarvoor de betaalopdrachten reeds verzonden zijn, opnieuw moeten worden opgenomen in de selectielijst.

### 5.2.6 Verzenden jaaroverzicht te betalen bedrijfsvoorheffing

Hier worden dezelfde documenten aangemaakt als bij \"Afdrukken jaaroverzicht te betalen bedrijfsvoorheffing\", maar ze worden verzonden via email als de verzendwijze op email staat bij de aangever. Als de verzendwijze op brief staat of de verzending via email lukt niet dan worden ze getoond om te worden afgedrukt.

### 5.2.7 Verzenden weddefiches naar bedrijfsleiders

Hiermee worden de weddefiches via email verzonden naar de bedrijfsleiders waar de verzendwijze op email staat bij de bedrijfsleider. Als de verzendwijze op brief staat of de verzending via email niet lukt dan worden ze getoond op scherm om te worden afgedrukt.

### 5.2.8 Verzenden betaalopdrachten aangiftes in de bedrijfsvoorheffing

Hiermee worden de betaalopdrachten verzonden via email naar de aangevers waar de verzendwijze op email staat bij de aangever. Als de verzendwijze op brief staat of de verzending via email niet lukt dan worden ze getoond om te worden afgedrukt.

![Image 60](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031648044/original/L51nc05Nx74xdz8h2Ufp9LtntEBv3ruFUg.png?1663143692)

Als het vinkje \"Weddefiches mee verzenden met email\" wordt aangezet, worden de weddefiches waarvoor de bedrijfsvoorheffing wordt aangegeven automatisch per email naar de bedrijfsleiders verzonden.

# 6. Aanmaken en verzenden van aangiften in de bedrijfsvoorheffing

## 6.1 Parameters voor het verzenden van de aangiften

Via het menu Parameters – Algemene opties kan worden opgegeven of emails worden verzonden via het standaard email programma (IMAP) of rechtstreeks via SMTP.

Indien gekozen wordt voor het verzenden via email server, moeten de parameters van de SMTP server worden opgegeven. Hier kan ook worden opgegeven of er voor het verzenden per email een bevestigingsdialoog wordt getoond.

![Image 61](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031648944/original/ZVCJHiKD9wYVixSzu-vjTmuC9iefkga3_A.png?1663143817)

Voorbeeld van de bevestigingsdialoog bij het verzenden via **SMTP**

![Image 62](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031649125/original/QYN9_Se-9ifxWS4c1_duie5YcehFDU86mg.png?1663143848)

## 6.2 Aanmaken aangiften 274 en verzenden via XML-bestand naar FinProf

Via het menu "Finprof – Aanmaken XML FINPROF" komen we in het selectiescherm.

In dit scherm kunnen we de periode en dossiers selecteren waarvoor we de bedrijfsvoorheffing willen aangeven.

![Image 63](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031649696/original/A-08rKI1atHsewVwl3AyPPIySxqf4PKTmg.png?1663143945)

Voor de periode kunnen we een selectie maken op maand of kwartaal, bij selectie van een maand wordt nagegaan of deze op het einde van een kwartaal valt, in dat geval zal het kwartaal ook worden geselecteerd en zullen er ook aangiftes worden gemaakt voor de kwartaalaangevers. Wordt een kwartaal geselecteerd, zal het programma ook de maandaangevers voorstellen waarvoor inkomsten bestaan voor de laatste maand van het opgegeven kwartaal.

Het programma toont enkel de dossiers rekening houdend met maand- of kwartaalaangifte en stelt enkel dossiers voor waarvoor inkomsten bestaan voor de geselecteerde periode en die actief zijn.

Dossiers waarvoor reeds een aangifte werd ingediend, worden niet meer opgenomen in de selectielijst zodat er geen dubbele aangifte mogelijk is.

Indien voor een aangever reeds een aangifte werd aangemaakt, maar deze niet verzonden werd of manueel geschrapt via de website van Finprof, dan kan men de bewaarde aangifte in het programma wissen via het scherm met het overzicht van de aangiften (menu "Finprof – Aangiften 274").

Nadat de aangifte werd gewist, zal het programma het dossier terug opnemen in de lijst Te maken aangiften.

Na de selectie kunnen de aangiften worden gegenereerd door op de OK-knop te klikken.

Het programma maakt het XML-bestand aan en toont een overzicht van de aangiften die werden opgenomen in het XML-bestand.

![Image 64](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031649898/original/YB3I_yvZVgO-eOUNLRavzoDXh5k4s7GmOA.png?1663143970)

Deze lijst kan worden afgedrukt of worden geëxporteerd naar verschillende formaten. De lijst wordt ook als PDF bewaard, en kan opnieuw worden afgedrukt vanuit het scherm met de aangiften voor Finprof.

Na het sluiten van het afdrukscherm, start het programma met het drukken of verzenden van de aangiften.

Voor het verzenden van de aangiften zijn er 2 mogelijkheden:

- Verzenden via email
- Afdrukken (of faxen)

Deze verzendwijze kan per aangever worden geselecteerd op de fiche van de aangevers.

Indien de optie \"Aangiftes afdrukken/emailen\" is aangevinkt, genereert het programma een email voor alle aangevers waarvoor deze optie is opgegeven of drukt de betaalopdracht.

Deze email bevat een PDF-document met een afdruk van de aangifte in de bedrijfsvoorheffing zoals deze normaal wordt afgedrukt. De aangifte wordt ook bewaard om later opnieuw te kunnen drukken.

In dit document zijn het bedrag, de instructies met de gestructureerde mededeling, bankrekening en gegevens van het ontvangkantoor voor de betaling van de bedrijfsvoorheffing opgenomen.

Na het genereren van de emails worden de brieven gedrukt voor de aangevers waarvoor als optie het afdrukken van een brief is opgegeven.

Vervolgens wordt het scherm getoond om verder te gaan naar de website van Finprof om het XML-bestand met de aangiften in te dienen. Door de klikken op Locatie bestand kopiëren kan men de locatie in het geheugen plaatsen om achteraf te plakken in de browser.

![Image 65](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031650509/original/WdgtVMTUFGZXDvH2ZXdWMWve6Es7ORIXcg.png?1663144080)

## 6.3 Extra gegenereerde gegevens bij het aanmaken van het XML-bestand

Zoals bij het aanmaken van het XML-bestand voor Belcotax worden er hier ook bestanden aangemaakt met de gegevens van de aangiften en de verzending.

### 6.3.1 Aangiften 274 bedrijfsvoorheffing

Bij het aanmaken van het XML-bestand wordt voor elke aangever (schuldenaar) een aangifte aangemaakt die de gegevens van de aangever en de bedragen van het belastbaar bedrag en de bedrijfsvoorheffing bevat.

![Image 66](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031651147/original/paPrs7AmAt-FfeNKkSOss0nQuqDuLipcjw.png?1663144154)

![Image 67](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031651148/original/izbQcrSgr1BHt26ZpONViKDZtfR3KoddbQ.png?1663144154)

Het scherm geeft ook de status (verzonden of niet-verzonden) weer en de naam van het XML-bestand van de verzending.

In de lijst wordt een overzicht getoond van de fiches die in deze aangifte zijn opgenomen.

Voor kwartaalaangiftes zullen de verschillende maanden van het kwartaal getoond worden.

Met de knop ![Image 68](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031651404/original/5Fr71khTam-9mnxuEl6z2_ffVGB3A7RvOg.png?1663144187) kan de aangifte opnieuw worden afgedrukt

### 6.3.2 Verzendingen

![Image 68](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031651832/original/kwdQkF6JDRXl16SsY-2jYbqEaSeVeGHpGA.png?1663144257)

Detail van een verzending:

![Image 69](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031651834/original/20sD1Emr_WCGmbKJ_f0MN6QspyCCfssupQ.png?1663144257)

Dit scherm bevat de gegevens van de verzendingen.

De lijst toont een overzicht van de aangiften die zijn opgenomen in de verzending.

Met de knop ![Image 70](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031651833/original/4zfZKH6RaU1-uVLJC8XdN1imyzK14JAFrg.png?1663144257) kan het overzicht met de aangiften uit de geselecteerde verzending opnieuw worden afgedrukt.

# 7. Genereren fiches 281.20 vanuit de wedde-administratie

![Image 71](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031533038/original/IygGWGimDEtq5G11ilVfrDGdZcAONldIYw.png?1663077207)

Op basis van de wedde-administratie kunnen automatisch de fiches 281.20 voor de bedrijfsleiders worden aangemaakt. Deze fiches 281.20 kunnen dan via het menu Belcotax worden doorgezonden naar de overheid.

In de selectielijst wordt een overzicht getoond van de aangevers die bedrijfsleiders hebben waarvoor inkomsten bestaan voor het geselecteerde jaar.

Door te klikken in de eerste kolom of door dubbel te klikken op de lijn van de aangever wordt deze geselecteerd.

![Image 72](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031533153/original/RGWRYu8Q12a9IyR7Tbx1W_D4lQJnHqIK1g.png?1663077226)

Indien de optie ![Image 73](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031533152/original/jxNowrc7DfORihA3IK1njDeuCbKdP5rYdg.png?1663077226) wordt aangezet, worden bestaande fiches 281.20 overschreven met de gegenereerde fiche.

Als op de knop "OK" wordt geklikt, maakt het programma een lijst aan met tijdelijke fiches 281.20.

![Image 74](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031533155/original/2sLP8B3bP0ISCih50FaofrtBkhAJF0ONrA.png?1663077226)

Om de detail van een fiche te bekijken selecteren we de tab "Fiche", hier kunnen we nog de nodige aanpassingen aanbrengen.

Met de knop ![Image 75](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031533154/original/eaYEhSYaoc8pDQo9i76SVk0KlzQn4cso2g.png?1663077226) kunnen we de fiches definitief overzetten naar de module Belcotax om ze in te dienen bij de overheid. (zie **3.1.1** fiches 281.20)

Via het menu \"Overzicht weddes zonder fiche 281.20\" kan een lijst worden gedrukt van de weddefiches waarvoor nog geen fiche 281.20 werd gegenereerd.

<!-- Text from:

✅ Belcofin/Manual: https://support.corpgroup.site/nl/support/solutions/articles/101000241236
✅ 4828 words
✅ 7400 - 2549 - 1265 - 211 = 3375 - 4828 = 1453 over the $60 Premium package so I will apply that to the next Premium order

📌 Changed all double quotes to the proper form: ""
📌 Added ending double-quote that was missing here: Nieuw jaar aanmaken (Alt - N)
📌 Th text "5.2 Afdrukken en verzenden van de weddefiches en overzichten" seems like it should be a heading but it's a paragraph on the web page. I set it to an H2

-->
