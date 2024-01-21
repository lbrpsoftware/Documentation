# 1. Download Accowin

Het bestand Accowin2Setup.exe kan gedownload worden van de website: http://www.accowin.be/nl/accowin/download

Na downloaden van het bestand Accowin2Setup.exe moet u het bestand uitvoeren. Installatie Accowin (versie 2) Versie 2.0

# 2. Accowin2Setup uitvoeren

## 2.1 Selecteer componenten

Na uitvoeren van Accowin2Setup.exe komt men na enkele schermen op de scherm 'Selecteer componenten'. Dit scherm is belangrijk om te bepalen wat er moet geïnstalleerd worden. Afhankelijk van de manier waarop u Accowin wil installeren moet hier een andere optie geselecteerd worden.

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012028402/original/BrhLi2N6dUN7Cz-3VWaFMeH3xh8iCDqI6A.png?1651657759)

**Mogelijke opties zijn**:

- **Lokaal (zonder server) (max 1 gebruiker)**: Deze optie wordt best gekozen indien Accowin geïnstalleerd wordt op een 1 PC en enkel op die PC wordt gebruikt. De server moet dan niet worden geïnstalleerd. Maar is voorzien voor mensen die geen server hebben en die werken met bijvoorbeeld Dropbox voor synchronisatie van al hun bestanden naar cloud. Het nadeel van deze optie is dat er maximum 1 gebruiker tegelijk Accowin kan gebruiken.

- **Client en Server installeren op dezelfde machine**: Indien Accowin geïnstalleerd wordt op een netwerkserver, of indien nog andere PC 's toegang hebben tot Accowin via een netwerk, moet u gebruik maken van de Client/Server optie en moet de server voor de database worden geïnstalleerd. Deze optie moet gekozen worden als de Accowin Server en de File dezelfde machines zijn.

- **Enkel client installeren**: Deze optie moet gekozen worden als men enkel de Accowin client wil installeren en de server op een andere machine is geïnstalleerd of indien men kiest om op elk werkstation apart een lokale installatie te doen van de Accowin client. Deze optie wordt niet aangeraden omdat ook de installatie van updates in de toekomst dan op alle werkstations moet uitgevoerd worden.

- **Enkel server installeren**: Deze optie moet gekozen worden als men enkel de Accowin server wil installeren op de server.

- **Enkel runtime installeren (BDE + CR)**: Deze runtime moet op elke PC worden geïnstalleerd waarop Accowin zal worden uitgevoerd. Indien een 'Lokaal', 'Client en server' of Client installatie werd uitgevoerd, werd de runtime reeds mee geïnstalleerd en moet dit type setup niet extra worden uitgevoerd.

**Opmerking**: De opties 'Enkel client installeren' en 'Enkel server installeren' moeten enkel maar uitgevoerd worden als de file server en de Accowin server verschillende computers zijn. Indien dit niet het geval is wordt er best gekozen voor de optie 'Lokaal' of 'Client en server installeren op dezelfde machine'. Dit maakt het in de toekomst ook handiger om updates uit te voeren. Namelijk enkel op de server moet dan een installatie gebeuren ipv op elk werkstation.

## 2.2 Selectie van installatie directory

Afhankelijk van de componenten dat u geselecteerd heeft in het voorgaande scherm moet hier 1 directory of meerdere directories ingevuld worden:

- **Lokaal (zonder server) (max 1 gebruiker)**: pad voor client installatie selecteren.
- **Client en server installeren op dezelfde machine**: pad voor client en voor server selecteren
- **Enkel client installatie**: pad voor client installatie selecteren
- **Enkel server installatie**: pad voor server installatie selecteren
- **Enkel runtime**: er wordt geen pad gevraagd, de runtime wordt op de standaard locatie geïnstalleerd.

Standaard gaat het systeem reeds enkele directories voorstellen die als men niet goed weet wat te kiezen best laten staan.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012033307/original/VBbd0nK0v-WH81QPUSTRb1yf0w7cTpYOgQ.png?1651659325)

### 2.2.1 Client locatie

In de client locatie zal de Accowin client geïnstalleerd worden. Deze locatie (in dit voorbeeld C:\\LBRP\\Clients) zal nadien ook gedeeld worden met andere gebruikers indien men Accowin wil gebruiken op meerdere computers. Indien de gebruikers reeds een folder hebben, die gedeeld is op de file server en u zou graag dezelfde folder gebruiken, dan moet u hier de client locatie aanpassen. Vergeet dan niet om de juiste directory aan te maken anders wordt Accowin client geïnstalleerd rechtstreeks in de geselecteerde folder. Maw kiest u voor de locatie d:\\data dan moet je de folder Accowin aanmaken onder d:\\data en dan d:\\data\\Accowin selecteren.

### 2.2.2 Server locatie

Dit is de locatie waar de Accowin server wordt geïnstalleerd. Deze locatie gaat de Accowin server bevatten en de database van Accowin. Deze locatie mag niet toegankelijk zijn van clients computers tenzij Accowin maar op 1 computer gaat gebruikt worden. **Opmerking**:

Indien u de server locatie zou aanpassen naar een andere locatie dan de standaard locatie vergeet dan niet om de juiste directory aan te maken anders wordt Accowin server geïnstalleerd rechtstreeks in de geselecteerde folder. Maw kiest u voor de locatie d:\\servers dan moet je de folder LbrpDbServer aanmaken onder d:\\servers en dan d:\\servers\\LbrpDbServer selecteren.

## 2.3 Selecteer extra taken

Indien u de Accowin Client gaat installeren dan gaat de setup vragen of u een snelkoppeling van Accowin op uw Bureaublad wil zetten en of u een map wil aanmaken in het startmenu. Indien u de vinkjes uit zet zal er geen snelkoppeling op het bureaublad gezet worden en zal er geen map in de startknop worden toegevoegd

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012033432/original/DDUMPtPPvMnuYg480Vp7aMCkAUww09El4Q.png?1651659361)

## 2.4 Starten installatie

De setup toont de geselecteerde opties, druk op de knop 'Installeren' om de installatie te starten. De getoonde informatie in dit scherm, is afhankelijk van het gekozen type installatie.

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012033648/original/GZHG8lfEZRyupaGJ9vCQhjaqTtAn7ENHnw.png?1651659443)

## 2.5 Einde installatie

Indien de setup de client heeft geïnstalleerd zal hij vragen of de Accowin client moet opgestart worden na de installatie. Op deze manier kan Accowin reeds ingesteld worden om te worden gebruikt.

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046170/original/LXeD8aD9U2Br0lQIYBXJxHshd-UCgEVsxg.png?1651663907)

_Na de installatie moet u mogelijk de computer herstarten om de geïnstalleerde drivers actief te maken_.

# 3. Configuratie firewall server

Indien uw server een firewall heeft dan moet er een extra firewall regel toegevoegd worden zodat de client computers connectie kunnen maken met uw Accowin server.

**Opmerking**: Indien Accowin client en server op dezelfde machine draaien en er geen andere clients Accowin gebruiken dan moet er geen extra firewall regel gedefinieerd worden.

**Een firewall regel configureren op een windows 2008 server of hoger**:

- De knop Start , op Administrive Tools en op Windows Firewall with Advanced Security. Als u om het beheerderswachtwoord of een bevestiging wordt gevraagd, typt u het wachtwoord of een bevestiging..

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046968/original/TcS4FM_aJNc8BU0tdIHV8wKKEKEg_Au7Iw.png?1651664215)

- Klik op Inbound Rules

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046373/original/YD9wBrPV53xsBM30hAj5jilFY4uR5-Gi6w.png?1651663992)

- Klik in het menu op Action>New Rule...

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046494/original/rqFq-O93wje917YUx8X6kxNVwSqZPpiZwQ.png?1651664043)

- Selecteer Port en druk vervolgens op Next>

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046504/original/vLB7Y6bIXuflGELyYHBVQqfY43XtJZFFvQ.png?1651664054)

- Vul bij Specific local ports: 12010 in en druk vervolgens op Next>

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046585/original/k8EEUR7X_CppsNg5mYL3HPvfPU7NP8o2iQ.png?1651664074)

- Druk op Next>

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046644/original/VxPc_E1sX1IvrLj62lYBs13o9el8qIxbeQ.png?1651664090)

- Druk op Next>

<!-- ![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046704/original/FWCmWjpDyDoVsFZsVlZIE58Zmp3bJH7kEQ.png?1651664108) -->

- Vul bij Name LbrpDbServer in en druk vervolgens op Finish

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046728/original/RrDvt19wFhZ3p28fHSrEtLXfU1CcC37teA.png?1651664129)

# 4. Configuratie Accowin bij eerste gebruik

## 4.1 Accowin opstarten

Start Accowin door op de snelkoppeling van Accowin te klikken op het bureaublad.

## 4.2 Type connectie

Na het opstarten van Accowin wordt het scherm getoond om te vragen hoe u connectie wil maken: Client/server connectie: U moet deze optie selecteren indien u gekozen heeft tijdens de installatie voor een client/server installatie.

Geen server gebruiken: U moet deze optie selecteren indien u gekozen heeft voor 'Lokaal (zonder server) (max 1 gebruiker)' tijdens de installatie.

### 4.2.1 Client/server connectie : Configuratie server

Het systeem gaat vragen waar de server van Accowin is geïnstalleerd. Standaard gaat de huidige computernaam ingevuld worden. Indien Accowin op een andere server staat dan moet hier de naam van deze server ingevuld worden.

Poort nummer moet normaal niet aangepast worden tenzij dat de Accowin server op een andere poort draait.

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012059667/original/LUGQE_OBraWjcobjgFA9Y0ugVnVl8AeIJg.png?1651668621)

Als de gegevens ingevuld zijn kan men op Volgende klikken. Bij het drukken op volgende gaat het systeem controleren of hij verbinding kan maken met de server. Indien niet dan wordt een foutmelding getoond.

### 4.2.2 Geen server gebruiken: selectie pad waar database moet geïnstalleerd worden

Het systeem gaat standaard als de locatie voorstellen waar Accowin is geïnstalleerd. Indien gewenst kunt u dit aanpassen maar we raden aan om de voorgestelde locatie te laten staan.

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070640/original/i2bCH-xrGqo46RpZgp84O2xmVUX3qNszjA.png?1651672346)

Door op Volgende te klikken kan men naar het volgende scherm gaan.

## 4.3 Aanmaken database

Nadat het systeem verbinding kon maken met de server gaat het kijken of hij reeds een Accowin database kan vinden. Omdat dit om een nieuwe installatie gaat, gaat het systeem voorstellen om een nieuwe database met de naam ACC_Accowin aan te maken. ACC is de standaard prefix voor de namen van de centrale database en de dossier databases. In zeer uitzonderlijke gevallen kan het nodig zijn deze te wijzigen, raadpleeg hiervoor eerst de helpdesk.

Kan het systeem reeds een Accowin database vinden dan wordt standaard 'Bestaande database' geselecteerd.

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070748/original/vHvIQyT_C3Z26FjqyfgqM-QAydnRI2H6Jg.png?1651672398)

Als de juiste database is geselecteerd of de prefix van een nieuwe database is ingevuld dan kan men op volgende klikken. Bij het klikken op volgende gaat het systeem de nieuwe database aanmaken. Is de creatie gelukt dan wordt een scherm getoond dat de database is aangemaakt.

![Image 17](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070813/original/nPMyok-uuVqcWCy_tUvJHODdy73MigAPpQ.png?1651672420)

Door op Volgende te klikken kan men naar het volgende scherm gaan.

## 4.4 Configuratie bewaren

Door de optie te kiezen dat de configuratie mag bewaard worden zal bij de volgende keer dat Accowin opgestart wordt de geselecteerde server en database gebruikt worden door Accowin. Kiest men voor Nee dan zal bij de volgende keer als Accowin opgestart wordt terug gevraagd worden om de server en database te configureren.

![Image 18](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070901/original/5o9c8aeG0p_kxilvckL8f6w268Jk3Bx8vg.png?1651672447)

Na selecteren van de optie kan men op de knop Volgende klikken.

## 4.5 Einde

Na het invullen van de parameters wordt het scherm weergegeven dat alles goed is verlopen.

![Image 19](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071048/original/RKT2mK3vB2LldlUZtKMmG3wZuWrMTMYVuQ.png?1651672505)

Bij het drukken op Volgende zal het Accowin programma gestart worden. Omdat bij een nieuwe installatie er nog geen licentie is gaat het bij het opstarten van Accowin de melding 'Er is geen key ingevuld' getoond worden.

Door te drukken op OK wordt Accowin opgestart maar draait het in Demo mode.

![Image 20](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071163/original/LyOBHC_WhsqBKA8guWtgFN84w4B9KcM8hA.png?1651672546)

Als bovenaan het scherm Demo staat draait het programma in Demo mode. Hieronder kan meer informatie gevonden worden hoe een licentie kan aangevraagd worden.

![Image 21](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071262/original/Q_4Yu25RcytQ50brogyNPnrLelJElVJ_eg.png?1651672573)

# 5. Aanvraag licentie

De procedure om een licentie aan te vragen is als volgt:

- Accowin opstarten
- Menu > About > Licentie

![Image 22](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071396/original/GhVxJ9fYypdsUx3ueFXzBDp5NedX5p24Pw.png?1651672626)

- Op de knop 'Licentie Aanvragen' klikken

![Image 23](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071766/original/5AHCOEoImsvC6vl11Y4qbqgtGYX7-ZLEoA.png?1651672773)

- Gegevens invullen. Klantcode kan op de factuur gevonden worden. Na invullen van de gegevens op Aanvragen klikken

![Image 24](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071980/original/81IPYyvzKMQFK25ObJJvawA-NqYdN5HiTg.png?1651672829)

Als de aanvraag succesvol is verlopen wordt de boodschap 'Licentie werd aangevraagd' getoond.

<!-- ![Image 25](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072094/original/ElVamDWAVCpCOc3Be-s5q-1W2-AhMWYF1w.png?1651672858) -->

Aanvragen van Licentie worden door ons manueel verwerkt en daarom kan het even duren voor u een licentie ontvangt. In de email staat beschreven hoe u de licentie kan ophalen.

**Opmerking**: Accowin moet toegang hebben tot het internet om een Licentie aan te vragen en om een Licentie op te vragen.

# 6. Accowin client toegankelijk maken voor andere computers (werkstations)

## 6.1 Accowin Client map delen op de server

Indien u Accowin op meerdere computers(werkstations) wenst te gebruiken moet er een folder gedeeld worden op de file server zodat alle computers de Accowin client kunnen opstarten. Indien u de Accowin client heeft geïnstalleerd in een bestaande gedeelde folder dan moet er geen nieuwe gedeelde map aangemaakt worden en kunt u naar de volgende stap gaan.

De Accowin client moet in een gedeelde map op de file server staan. Is dit nog niet het geval dan moet u de map C:\\LBRP\\Clients (of de map waar u Accowin client heeft geïnstalleerd op de server) op de file server delen zodat andere gebruikers toegang hebben tot deze map. Opmerking : Indien Accowin op een server of NAS werd geïnstalleerd, moet er een runtime installatie gedaan worden op elk werkstation dat Accowin wil gebruiken.

Start hiervoor op elke client Accowin2Setup.exe en selecteer de optie Enkel runtime installeren.

![Image 26](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072704/original/WYNyPEV8MdWjt48K8crnyf46m4aW49iokw.png?1651673009)

## 6.2 Netwerk map koppelen op werkstation

Indien de server map waar de Accowin Client staat reeds gekoppeld is op de client dan moet deze procedure niet uitgevoerd te worden en kan naar de volgende stap gegaan worden. Procedure om netwerk map te koppelen op werkstation/client:

- Deze computer opstarten of windows verkenner
- Menu > Extra >Netwerkverbinding maken kiezen. Op windows 7 of windows vista moet u eerst op alt drukken om het menu te zien

![Image 27](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072762/original/6X-BoLT_8aUCZ4qRN3eSbdEbdIbfIx4Fdg.png?1651673040)

- Bij station vult u Q in, bij pad \\\\servernaam\\gedeeltemap waarbij servernaam de naam moet zijn van de server en gedeeltemap de naam van uw gedeelde map vb \\\\servernaam\\LBRPClients en het vinkje Opnieuw verbinden bij aanmelden moet u aan zetten.

![Image 28](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072880/original/ZEytvGpfhT8D8N1Ay2BgZFbnIuNxdk8pcw.png?1651673081)

**Opmerking**: Gebruik op alle clients dezelfde gedeelde map letter.

## 6.3 Snelkoppeling naar Accowin Client

Snelkoppeling naar de Accowin client toevoegen aan het bureablad. De handigste manier hiervoor is:

1. Windows verkenner te openen
2. De map Q:\\Accowin\\ openen
3. Rechtermuis klik op het bestand Accowin.exe
4. Kopieren naar>Bureaublad (snelkoppeling maken)

![Image 29](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012073025/original/MvwaX3D98mOGorXGmibpIDfJHotR_3-Ctg.png?1651673125)

<!-- ![Image 30]() -->

<!-- ![Image 31]() -->

Vanaf Windows 7 kan men ook gebruik maken van de optie '**_Aan de taakbalk vastmaken_**' om een snelkoppeling op de taakbalk te maken.

# 7. Accowin overzetten naar nieuwe server

Accowin kan op 2 manieren overgezet worden naar een nieuwe server:

- Dmv back-up en restore Accowin overzetten (voorkeur manier)
- Dmv kopie van bestanden

## 7.1 Overzetten dmv backup en restore (voorkeur manier)

De procedure hiervoor is:

1. Back-up nemen (menu > start > backup). Voor meer uitleg zie Backup nemen.
2. Dit back-up bestand op een memorystick plaatsen om deze op de nieuwe server te zetten
3. Accowin2Setup.exe downloaden van onze website: (http://www.Accowin.be/nl/Accowin/download) op de nieuwe server
4. De installatie uitvoeren op de nieuwe server van Accowin (zie hierboven voor meer uitleg)
5. Restore doen van back-up bestand op de nieuwe server. Zie: **_Terugzetten van de dossiers via Restore_**

### 7.1.1 Backup nemen

Maak een backup van alle dossiers via het menu 'Start > Backup'. Selecteer de plaats waar de back-ups moeten komen, best is dit een externe schijf of USB-disk. Zet het vinkje aan zodat van alle dossiers een back-up wordt gemaakt, indien dit vinkje niet aan staat, wordt enkel een back-up gemaakt van het huidig actieve dossier. Per dossier wordt er een bestand aangemaakt.

### 7.1.2 Terugzetten van de dossiers via Restore

Het terugzetten van de dossiers gebeurt dossier per dossier, het is echter niet nodig eerst het dossier aan te maken in Accowin. Indien het dossier nog niet bestaat, wordt dit automatisch aangemaakt. Selecteer de map waar de bestanden die zijn aangemaakt via de back-up, en selecteer daar een dossier om terug te zetten. De gegevens over het dossier worden getoond.

## 7.2 Overzetten dmv kopie van bestanden

Deze procedure wordt **_afgeraden_**, omdat hierbij zaken kunnen fout lopen waardoor de data beschadigd geraakt. Maar in sommige gevallen is dit de enige manier. Procedure:

1. Accowin (Accowin2Setup.exe) downloaden van onze website (http://www.Accowin.be/nl/Accowin/download) en te installeren op de nieuwe server. Meer informatie over de installatie kan hierboven gevonden worden.
2. Accowin te installeren in dezelfde locatie als op de oude server.
3. De service 'LBRP Database Server' op de nieuwe server stoppen:
   1. Configuratie scherm van Windows openen
   2. Dubbelklikken op Systeembeheer
   3. Dubbelklikken op Services
   4. Rechtermuis knop op de service met naam '**_LBRP Database Server_**' en dan te kiezen voor '**_Stoppen_**'
4. De folder van de oude computer copieren over de locatie van de nieuwe server.
5. Nieuwe server opnieuw opstarten
6. Bij starten van Accowin zou de oude data terug moeten zichtbaar zijn
7. Accowin overzetten van server naar NAS

Accowin kan draaien als een server maar kan ook werken op een NAS. Het nadeel van werken op een NAS is dat Accowin trager gaat werken en dat maar 1 persoon tegelijk de data mag aanpassen.

Procedure om Accowin over te zetten van server naar NAS is:

1. Backup nemen van Accowin op de server (Accowin opstarten, menu>start>backup)
2. Backup bestand op memory stick plaatsen
3. Accowin de-installeren van de server en clients als deze in de toekomst Accowin gaan gebruiken vanaf de NAS
4. Accowin (Accowin2Setup.exe) downloaden van onze website (http://www.Accowin.be/nl/Accowin/download)
5. Tijdens de installatie kiezen voor Lokaal (zonder server) (max 1 gebruiker) en als locatie en map op de NAS schijf waar Accowin moet komen.
6. Na installatie Accowin opstarten en kiezen voor de optie 'Geen server gebruiken-Lokaal-Maximum 1 gebruiker' en wizard doorlopen
7. Na de installatie kunt u via menu>restore, het back-up bestand selecteren en terugzetten. Hierbij wordt dan de back-up teruggezet op de NAS.

<!-- Text from:

✅ AccoWin/Installation: https://support.corpgroup.site/nl/support/solutions/articles/101000171115
✅ 2526 words
✅ 7400-3867-2526 = 1007 left (1453 over from previous order)

📌 Double backslashes (\\) for file paths in this file as well

-->
