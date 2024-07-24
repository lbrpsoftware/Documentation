# Desktop - Finasset - Installatie

## 1. Download Finasset

Het bestand `FinassetSetup.exe` kan gedownload worden van de website:

[Laatste versie Finasset](https://kutt.ctrl.corpgroup.site/finasset-latest-setup)

Na downloaden van het bestand `FinassetSetup.exe` moet u het bestand uitvoeren.

## 2. Finasset setup uitvoeren

### 2.1 Selecteer componenten

Na uitvoeren van `FinassetSetup.exe` komt men na enkele schermen op de scherm 'Selecteer componenten'. Dit scherm is belangrijk om te bepalen wat er moet geïnstalleerd worden. Afhankelijk van de manier waarop u Finasset wil installeren moet hier een andere optie geselecteerd worden.

![IMAGE 1 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304335/original/6LTdbCpWb3DXvXSppSDPRK0z3GM5XUmBFw.png?1643311061)

Mogelijke opties zijn:

- **Lokaal (zonder server) (max 1 gebruiker)**: Deze optie wordt best gekozen indien Finasset geïnstalleerd wordt op een 1 PC en enkel op die PC wordt gebruikt. De server moet dan niet worden geïnstalleerd. Deze optie is ook voorzien voor mensen die geen server hebben en die werken met bijvoorbeeld Dropbox voor synchronisatie van al hun bestanden naar cloud. Het nadeel van deze optie is dat er maximum 1 gebruiker tegelijk Finasset kan gebruiken.
- **Client en Server installeren op dezelfde machine**: Indien Finasset geïnstalleerd wordt op een netwerkserver, of indien nog andere PC 's toegang hebben tot Finasset via een netwerk, moet u gebruik maken van de Client/Server optie en moet de server voor de database worden geïnstalleerd. Deze optie moet gekozen worden als de Finasset Server en de File dezelfde machines zijn.
- **Enkel client installeren**: Deze optie moet gekozen worden als men enkel de Finasset client wil installeren en de server op een andere machine is geïnstalleerd of indien men kiest om op elk werkstation apart een lokale installatie te doen van de Finasset client. Deze optie wordt niet aangeraden omdat ook de installatie van updates in de toekomst dan op alle werkstations moet uitgevoerd worden.
- **Enkel server installeren**: Deze optie moet gekozen worden als men enkel de Finasset server wil installeren op de server.

<strong><ins>Opmerking</ins></strong>:

De opties 'Enkel client installeren' en 'Enkel server installeren' moeten enkel maar uitgevoerd worden als de file server en de Finasset server verschillende computers zijn. Indien dit niet het geval is wordt er best gekozen voor de optie 'Lokaal' of 'Client en server installeren op dezelfde machine'. Dit maakt het in de toekomst ook handiger om updates uit te voeren. Namelijk enkel op de server moet dan een installatie gebeuren ipv op elk werkstation.

### 2.2 Selectie van installatie directory

Afhankelijk van de componenten dat u geselecteerd heeft in het voorgaande scherm moet hier 1 directory of meerdere directories ingevuld worden:

- **Lokaal (zonder server) (max 1 gebruiker)**: pad voor client installatie selecteren
- **Client en server installeren op dezelfde machine**: pad voor client en voor server selecteren
- **Enkel client installatie**: pad voor client installatie selecteren
- **Enkel server installatie**: pad voor server installatie selecteren

**<ins>Enkel runtime</ins>**:

Standaard gaat het systeem reeds enkele directories voorstellen die als men niet goed weet wat te kiezen best laten staan.

![IMAGE 2 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304496/original/nrJY0riAatctEhG6Klu4jmCiO1T7_O8MCw.png?1643311357)

#### 2.2.1 Client locatie

In de client locatie zal de Finasset client geïnstalleerd worden. Deze locatie (in dit voorbeeld `C:\LBRP\Clients`) zal nadien ook gedeeld worden met andere gebruikers indien men Finasset wil gebruiken op meerdere computers.

Indien de gebruikers reeds een folder hebben, die gedeeld is op de file server en u zou graag dezelfde folder gebruiken, dan moet u hier de client locatie aanpassen. Vergeet dan niet om de juiste directory aan te maken anders wordt Finasset client geïnstalleerd rechtstreeks in de geselecteerde folder. Maw kiest u voor de locatie _d:\data_ dan moet je de folder Finasset aanmaken onder **_d:\data_** en dan `d:\data\Finasset` selecteren.

#### 2.2.2 Server locatie

Dit is de locatie waar de Finasset server wordt geïnstalleerd.

Deze locatie gaat de Finasset server bevatten en de database van Finasset. Deze locatie mag niet toegankelijk zijn van clients computers tenzij Finasset maar op 1 computer gaat gebruikt worden.

<strong><ins>Opmerking</ins></strong>:

Indien u de server locatie zou aanpassen naar een andere locatie dan de standaard locatie vergeet dan niet om de juiste directory aan te maken anders wordt Finasset server geïnstalleerd rechtstreeks in de geselecteerde folder. Maw kiest u voor de locatie d:\servers dan moet je de folder LbrpDbServer aanmaken onder d:\servers en dan d:\servers\LbrpDbServer selecteren.

### 2.3 Selecteer menu Start map

Indien u de Finasset Client gaat installeren dan gaat de setup vragen in welke map in het start menu u de snelkoppeling naar Finasset wil plaatsen. Standaard gaat het systeem deze plaatsen in de map Finasset.

![IMAGE 3 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304620/original/7bFPe6IIFsr0pX8ov-81nLzD-Zav0cHH7A.png?1643311641)

### 2.4 Selecteer extra taken

Indien u de Finasset Client gaat installeren dan gaat de setup vragen of u een snelkoppeling van Finasset op uw Bureaublad wil zetten. Indien u het vinkje uit zet zal er geen snelkoppeling op het bureaublad gezet worden door de setup.

![IMAGE 4 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304664/original/CAcctWvK7iFCXjOZFUqJrzIA958O8Sbb3g.png?1643311688)

### 2.5 Starten installatie

De setup toont de geselecteerde opties, druk op de knop 'Installeren' om de installatie te starten.

![IMAGE 5 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304678/original/zyaSO3xpBL9GZrKs6W1ZaOcTJSS2czF86Q.png?1643311716)

De getoonde informatie in dit scherm, is afhankelijk van het gekozen type installatie.

### 2.6 Einde installatie

Indien de setup de client heeft geïnstalleerd zal hij vragen of de Finasset client moet opgestart worden na de installatie. Op deze manier kan Finasset reeds ingesteld worden om te worden gebruikt.

## 3. Configuratie firewall server

Indien uw server een firewall heeft dan moet er een extra firewall regel toegevoegd worden zodat de client computers connectie kunnen maken met uw Finasset server.

<strong><ins>Opmerking</ins></strong>:

Indien Finasset client en server op dezelfde machine draaien en er geen andere clients Finasset gebruiken dan moet er geen extra firewall regel gedefinieerd worden.

<ins>Een firewall regel configureren op een windows 2008 server of hoger</ins>:

1. De knop **Start**, op **Administrive Tools** en op **Windows Firewall with Advanced Security**.‌ Als u om het beheerderswachtwoord of een bevestiging wordt gevraagd, typt u het wachtwoord of een bevestiging.

![IMAGE 6 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304775/original/HpEKWxubqBtsozu6Hh6tMKGTvgLFAJvsjg.png?1643311953)

<!-- <img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304775/original/HpEKWxubqBtsozu6Hh6tMKGTvgLFAJvsjg.png?1643311953" alt="IMAGE 6 HERE" width="500" > -->

2. Klik op **Inbound Rules**

![IMAGE 7 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304777/original/9l_94CyTX4gkTV3KXMSig1hRwvP63gS_VQ.png?1643311961)

3. Klik in het menu op **Action ▶️ New Rule...**

![IMAGE 8 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304780/original/_qzEA79s3FN33dyEhRTEgNg0HKJMMUWHMw.png?1643311969)

<!--

width="40" height="40"

![]()
<img src="" alt="" width="400" >

-->

4. Selecteer **Port** en druk vervolgens op **Next** ▶️

![IMAGE 9 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304782/original/5ZDWl55idABfYO_6jrhf5oSf5aRsbeVdxw.png?1643311976)

5. Vul bij **Specific local ports**: 12010 in en druk vervolgens op **Next** ▶️

![IMAGE 10 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304783/original/1RY5bbbeaqkgzkVicZUVZBiZSXK11BxyFQ.png?1643311983)

6. Druk op **Next** ▶️

![IMAGE 11 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304787/original/OcCoYUW2r7tIS41pjfImpBrQ72mVVykkkw.png?1643311989)

7. Druk op **Next** ▶️

![IMAGE 12 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304788/original/5BorTPAbzyMg1y1aNzonIfeZSn6bVgQvPA.png?1643311997)

8. Vul bij **Name** LbrpDbServer in en druk vervolgens op **Finish**

![IMAGE 12.2 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304789/original/VuU1Vq_yeh0FNIjRU8vNMnE4N1sSo82bwA.png?1643312005)

## 4. Configuratie Finasset bij eerste gebruik

### 4.1 Finasset opstarten

Start Finasset door op de snelkoppeling van Finasset te klikken op het bureaublad.

### 4.2 Type connectie

Na het opstarten van Finasset wordt het scherm getoond om te vragen hoe u connectie wil maken:

1. **Client/server connectie**: U moet deze optie selecteren indien u gekozen heeft tijdens de installatie voor een client/server installatie
2. **Geen server gebruiken**: U moet deze optie selecteren indien u gekozen heeft voor 'Lokaal (zonder server) (max 1 gebruiker)' tijdens de installatie

``
![IMAGE 13 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304905/original/ec2CYMlGECr7d_l_QKNBks_5ge5ilBfmdQ.png?1643312324)

#### 4.2.1 Client/server connectie: Configuratie server

Het systeem gaat vragen waar de server van Finasset is geïnstalleerd. Standaard gaat de huidige computernaam ingevuld worden. Indien Finasset op een andere server staat dan moet hier de naam van de deze server ingevuld worden. Poort nummer moet normaal niet aangepast worden tenzij dat de Finasset server op een andere poort draait.

![IMAGE 14 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003304924/original/VUWB_esQpXBQyWoLfKJUx7v6qF6Pa3Vp4Q.png?1643312362)

Als de gegevens ingevuld zijn kan men op Volgende klikken. Bij het drukken op volgende gaat het systeem controleren of hij verbinding kan maken met de server. Indien niet dan wordt een foutmelding getoond.

#### 4.2.2 Geen server gebruiken: selectie pad waar database moet geïnstalleerd worden

Het systeem gaat standaard als de locatie voorstellen waar Finasset is geïnstalleerd. Indien gewenst kunt u dit aanpassen maar we raden aan om de voorgestelde locatie te laten staan.

![IMAGE 15 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305178/original/xsflzfbnrtYeuqdl_nGuUqSN7Unwk9MxEw.png?1643313019)

Door op Volgende te klikken kan men naar het volgende scherm gaan.

### 4.3 Aanmaken database

Nadat het systeem verbinding kon maken met de server gaat het kijken of hij reeds een Finasset database kan vinden. Omdat dit om een nieuwe installatie gaat, gaat het systeem voorstellen om een nieuwe database met de naam Finasset aan te maken.

Kan het systeem reeds een Finasset database vinden dan wordt standaard 'Bestaande database' geselecteerd.

![IMAGE 16 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305211/original/MNjSOuvh8y8ZnGUEEWajWvq3M7FRCkm0iw.png?1643313139)

Als de juiste database is geselecteerd of de naam van een nieuwe database is ingevuld kan met op volgende klikken. Bij het klikken op volgende gaat het systeem de nieuwe database aanmaken. Is de creatie gelukt dan wordt een scherm getoond dat de database is aangemaakt.

![IMAGE 17 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305238/original/kG76asJMWR2HIYQqOJcMO_XvauaZfYGTZQ.png?1643313183)

Door op Volgende te klikken kan men naar het volgende scherm gaan.

### 4.4 Configuratie bewaren

Door de optie te kiezen dat de configuratie mag bewaard worden zal bij de volgende keer dat Finasset opgestart wordt de geselecteerde server en database gebruikt worden door Finasset. Kiest men voor Nee dan zal bij de volgende keer als Finasset opgestart wordt terug gevraagd worden om de server en database te configureren.

![IMAGE 18 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305255/original/McFOJzJ8oiI9ABFvVyfqKLOm1kZtgBSdVQ.png?1643313217)

Na selecteren van de optie kan men op de knop Volgende klikken.

### 4.5 Einde

Na het invullen van de parameters wordt het scherm weergegeven dat alles goed is verlopen.

Bij het drukken op Volgende zal het Finasset programma gestart worden. Omdat bij een nieuwe installatie er nog geen licentie is gaat het bij het opstarten van Finasset de melding 'Er is geen key ingevuld' getoond worden. Door te drukken op OK wordt Finasset opgestart maar draait het in Demo mode.

![IMAGE 19 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305297/original/WIeZq056ILaTlESxD4zZ14QrHoQbYPI4Sg.png?1643313283)

Als bovenaan het scherm **Demo** staat draait het programma in Demo mode. Hieronder kan meer informatie gevonden worden hoe een licentie kan aangevraagd worden.

``
![IMAGE 20 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305314/original/qUL0afkSzyJPOz_C2_usndioAH7thWEwVQ.png?1643313325)

## 5. Aanvraag licentie

De procedure om een licentie aan te vragen is als volgt:

1. Finasset opstarten
2. Menu ▶️ About ▶️ Licentie

![IMAGE 21 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305375/original/EWD-NQPqUfu8OyfLPhYAgVC_rse-Qvcw3A.png?1643313550)

3. Op de knop 'Licentie Aanvragen' klikken

![IMAGE 22 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305380/original/eUEvci_AhCPlPFSwKto82U53NReNfhm3Lw.png?1643313573)

4. Gegevens invullen. Klantcode kan op de factuur gevonden worden. Na invullen van de gegevens op Aanvragen klikken

![IMAGE 23 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305381/original/gf1uuODkvQ49tOxkY9JfhL5uwhMLat-ltA.png?1643313582)

5. Als de aanvraag succesvol is verlopen wordt de boodschap 'Licentie werd aangevraagd' getoond.

![IMAGE 24 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305382/original/S0EF6vMHkWXMN79jTqusI_La6JASNLTUWw.png?1643313588)

Aanvragen van Licentie worden door ons manueel verwerkt en daarom kan het even duren voor u een licentie ontvangt. In de email staat beschreven hoe u de licentie kan ophalen.

<strong><ins>Opmerking</ins></strong>:

Finasset moet toegang hebben tot het internet om een Licentie aan te vragen en om een Licentie op te vragen.

## 6. Finasset client toegankelijk maken voor andere computers

### 6.1 Finasset Client map delen op de server

Indien u Finasset op meerdere computers(werkstations) wenst te gebruiken moet er een folder gedeeld worden op de file server zodat alle computers de Finasset client kunnen opstarten. Indien u Finasset client heeft geïnstalleerd in een bestaande gedeelde folder dan moet er geen nieuwe gedeelde map aangemaakt worden en kunt u naar de volgende stap gaan.

De Finasset client moet in een gedeelde map op de file server staan. Is dit nog niet het geval dan moet u de map C:\LBRP\Clients (of de map waar u Finasset client heeft geïnstalleerd op de server) op de file server delen zodat andere gebruikers toegang hebben tot deze map.

<strong><ins>Opmerking</ins></strong>:

Er moet geen client installatie gedaan worden op een werkstation dat Finasset wil gebruiken. Enkel onderstaande procedures moeten doorlopen te worden om Finasset te gebruiken op werkstations.

### 6.2 Netwerk map koppelen op werkstation

Indien de server map waar de Finasset Client staat reeds gekoppeld is op de client dan moet deze procedure niet uitgevoerd te worden en kan naar de volgende stap gegaan worden.

<ins>Procedure om netwerk map te koppelen op werkstation/client</ins>:

1. Deze computer opstarten of windows verkenner
2. Menu>Extra>Netwerkverbinding maken kiezen. Op windows 7 of windows vista moet u eerst op alt drukken om het menu te zien

![IMAGE 25 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305533/original/P4RkClYx61Wty9j5YrypnewN3uHdheSnVA.png?1643313940)

3. Bij station vult u Q in, bij pad `\\servernaam\gedeeltemap` waarbij servernaam de naam moet zijn van de server en gedeeltemap de naam van uw gedeelde map vb `\\servernaam\LBRPClients` en het vinkje Opnieuw verbinden bij aanmelden moet u aan zetten.

![IMAGE 26 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305537/original/n7zuGzGJhmEhj7AaWNLigovFSoab1-B2Yg.png?1643313946)

<strong><ins>Opmerking</ins></strong>:

Gebruik op alle clients dezelfde gedeelde map letter.

### 6.3 Snelkoppeling naar Finasset Client

Snelkoppeling naar de Finasset client toevoegen aan het bureablad. De handigste manier hiervoor is:

1. Windows verkenner te openen
2. De map `Q:\Finasset\` openen
3. Rechtermuis klik op het bestand Finasset.exe
4. Kopieren naar>Bureaublad (snelkoppeling maken)

![IMAGE 27 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305566/original/BV3b3hEizQToAwlF5jz7RfjUGIgkzHXsjw.png?1643313993)

Vanaf Windows 7 kan men ook gebruik maken van de optie '**Aan de taakbalk vastmaken**' om een snelkoppeling op de taakbalk te maken.

## 7. Backups

Meer informatie over hoe backups van Finasset moeten genomen worden kan gevonden worden in de handleiding "**Finasset Backup NL.pdf**". Deze handleiding staat onder de directory `\_doc`. Indien u de voorgestelde paden niet aangepast heeft, tijdens de installatie, dan kunt u dit bestand vinden in de directory `C:\LBRP\Clients\Finasset\_doc`

<strong><ins>Opmerking</ins></strong>:

Het is zeer belangrijk om backups te nemen zoals beschreven in de handleiding. Indien u enkel een copy maakt van de harde schijf waar Finasset op staat dan bestaat de mogelijkheid dat deze copy geen goeie backup is van Finasset.

## 8. Finasset overzetten naar nieuwe server

Finasset kan op 2 manieren overgezet worden naar een nieuwe server:

1. Dmv back-up en restore Finasset overzetten (voorkeur manier)
2. Dmv kopie van bestanden

### 8.1 Overzetten dmv backup en restore (voorkeur manier)

De procedure hiervoor is:

1. Back-up nemen (menu>start>backup). Voor meer uitleg zie hierboven.
2. Dit back-up bestand op een memorystick plaatsen om deze op de nieuwe server te zetten
3. ([FinassetSetup.exe](https://kutt.ctrl.corpgroup.site/finasset-latest-setup)) downloaden van onze website op de nieuwe server
4. De installatie uitvoeren op de nieuwe server van Finasset (zie hierboven voor meer uitleg)
5. Restore doen van back-up bestand op de nieuwe server

### 8.2 Oververzetten dmv kopie van bestanden

Deze procedure wordt afgeraden omdat hierbij zaken kunnen fout lopen waardoor de data beschadigd geraakt. Maar in sommige gevallen is dit de enige manier.

Procedure:

1. Finasset (([FinassetSetup.exe](https://kutt.ctrl.corpgroup.site/finasset-latest-setup))) downloaden van onze website en te installeren op de nieuwe server. Meer informatie over de installatie kan hierboven gevonden worden.
2. Finasset te installeren in dezelfde locatie als op de oude server.
3. De service 'LBRP Database Server' op de nieuwe server stoppen
   1. Configuratie scherm van Windows openen
   2. Dubbelklikken op Systeembeheer
   3. Dubbelklikken op Services
   4. Rechtermuis knop op de service met naam 'LBRP Database Server' en dan te kiezen voor 'Stoppen'

![IMAGE 28 HERE](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003305751/original/osDKttA3RvR2ZgQFwjQIab32O6xzFtMMmw.png?1643314423)

4. De folder van de oude computer copieren over de locatie van de nieuwe server
5. Nieuwe server opnieuw opstarten
6. Bij starten van Finasset zou de oude data terug moeten zichtbaar zijn

## 9. Finasset overzetten

van server naar NAS Finasset kan draaien als een server maar kan ook werken op een NAS. Het nadeel van werken op een NAS is dat Finasset trager gaat werken en dat maar 1 persoon tegelijk de data mag aanpassen.

Procedure om Finasset over te zetten van server naar NAS is:

1. Backup nemen van Finasset op de server (Finasset opstarten, menu>start>backup)
2. Backup bestand op memory stick plaatsen
3. Finasset de-installeren van de server en clients als deze in de toekomst Finasset gaan gebruiken vanaf de NAS
4. Finasset ([FinassetSetup.exe](https://kutt.ctrl.corpgroup.site/finasset-latest-setup)) downloaden van onze website
5. Tijdens de installatie kiezen voor Lokaal (zonder server) (max 1 gebruiker) en als locatie en map op de NAS schijf waar Finasset moet komen.
6. Na installatie Finasset opstarten en kiezen voor de optie 'Geen server gebruiken-Lokaal-Maximum 1 gebruiker' en wizard doorlopen
7. Na de installatie kunt u via menu>restore, het back-up bestand selecteren en terugzetten. Hierbij wordt dan de back-up teruggezet op de NAS.
