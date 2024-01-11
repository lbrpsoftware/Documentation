# 1. Download Belcofin

Het bestand BelcofinSetup.exe kan gedownload worden van de website Download

Na downloaden van het bestand BelcofinSetup.exe moet u het bestand uitvoeren.

# 2. BelcofinSetup uitvoeren

## 2.1 Selecteer componenten

Na uitvoeren van BelcofinSetup.exe komt men na enkele schermen op de scherm 'Selecteer componenten'. Dit scherm is belangrijk om te bepalen wat er moet geïnstalleerd worden. Afhankelijk van de manier waarop u Belcofin wil installeren moet hier een andere optie geselecteerd worden.

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769497/original/un8b5VMSBo74Kf7hj5XQxA3cfrt7sGTa5A.png?1663164873)

Mogelijke opties zijn:

- Client en Server installeren op dezelfde machine: Deze optie moet gekozen worden als de Belcofin Server en de File dezelfde machines zijn.
- Enkel client installeren: Deze optie moet gekozen worden als men enkel de Belcofin client wil installeren en de server op een andere machine is geïnstalleerd of indien men kiest om op welk werkstation apart een lokale installatie te doen van de Belcofin client. Deze optie wordt niet aangeraden omdat ook de installatie van updates in de toekomst dan op alle werkstations moet uitgevoerd worden.
- Enkel server installeren: Deze optie moet gekozen worden als men enkel de Belcofin server wil installeren op de server.
- Lokaal (zonder server) (max 1 gebruiker): Deze optie wordt best NIET gekozen maar is voorzien voor mensen die geen server hebben en die werken met bijvoorbeeld Dropbox voor synchronisatie van al hun bestanden naar cloud. Het nadeel van deze optie is dat er maximum 1 gebruiker tegelijk Belcofin kan gebruiken.

<strong><ins>Opmerking</ins></strong>:

De opties 'Enkel client installeren' en 'Enkel server installeren' moeten enkel maar uitgevoerd worden als de file server en de Belcofin server verschillende computers zijn. Indien dit niet het geval is wordt er best gekozen voor de optie 'Client en server installeren op dezelfde machine'. Dit maakt het in de toekomst ook handiger om updates uit te voeren. Namelijk enkel op de server moet dan een installatie gebeuren ipv op elk werkstation.

## 2.2 Selectie van installatie directory

Afhankelijk van de componenten dat u geselecteerd heeft in het voorgaande scherm moet hier 1 directory of meerdere directories ingevuld worden:

- Client en server installeren op dezelfde machine: pad voor client en voor server selecteren
- Enkel client installatie: pad voor client installatie selecteren
- Enkel server installatie: pad voor server installatie selecteren
- Lokaal (zonder server) (max 1 gebruiker): pad voor client installatie selecteren

Standaard gaat het systeem reeds enkele directories voorstellen die als men niet goed weet wat te kiezen best laten staan.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769494/original/UhR5bZrz0cq8wcfohOHEObWnaua9bCCmCg.png?1663164873)

### 2.2.1 Client locatie

In de client locatie zal de Belcofin client geïnstalleerd worden. Deze locatie (in dit voorbeeld C:\\LBRP\\Clients) zal nadien ook gedeeld worden met andere gebruikers indien men Belcofin wil gebruiken op meerdere computers.

Indien de gebruikers reeds een folder hebben, die gedeeld is op de file server en u zou graag dezelfde folder gebruiken, dan moet u hier de client locatie aanpassen.

**Vergeet dan niet om de juiste directory aan te maken anders wordt Belcofin client geïnstalleerd rechtstreeks in de geselecteerde folder**. Maw kiest u voor de locatie d:\\data dan moet je de folder Belcofin aanmaken onder d:\\data en dan d:\\data\\Belcofin selecteren.

### 2.2.2 Server locatie

Dit is de locatie waar de Belcofin server wordt geïnstalleerd.

Deze locatie gaat de Belcofin server bevatten en de database van Belcofin. Deze locatie mag niet toegankelijk zijn van clients computers tenzij Belcofin maar op 1 computer gaat gebruikt worden.

<strong><ins>Opmerking</ins></strong>:

Indien u de server locatie zou aanpassen naar een andere locatie dan de standaard locatie vergeet dan niet om de juiste directory aan te maken anders wordt Belcofin server geïnstalleerd rechtstreeks in de geselecteerde folder. Maw kiest u voor de locatie d:\\servers dan moet je de folder LbrpDbServer aanmaken onder d:\\servers en dan d:\\servers\\LbrpDbServer selecteren.

## 2.3 Selecteer menu Start map

Indien u de Belcofin Client gaat installeren dan gaat de setup vragen in welke map in het start menu u de snelkoppeling naar Belcofin wil plaatsen. Standaard gaat het systeem deze plaatsen in de map Belcofin.

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769493/original/m2CwEjsNPpnXXfqTjnWLhzDWpHScWrhC5Q.png?1663164873)

## 2.4 Selecteer extra taken

Indien u de Belcofin Client gaat installeren dan gaat de setup vragen of u een snelkoppeling van Belcofin op uw Bureaublad wil zetten. Indien u het vinkje uit zet zal er geen snelkoppeling op het bureaublad gezet worden door de setup.

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769495/original/a4cuq85KqKSmLj90_hPQsneZkVm-DuC8uA.png?1663164873)

## 2.5 Einde installatie

Indien de setup de client heeft geïnstalleerd zal hij vragen of de Belcofin client moet opgestart worden na de installatie. Op deze manier kan Belcofin reeds ingesteld worden om te worden gebruikt.

# 3. Configuratie firewall server

Indien uw server een firewall heeft dan moet er een extra firewall regel toegevoegd worden zodat de client computers connectie kunnen maken met uw Belcofin server.

<strong><ins>Opmerking</ins></strong>:

Indien Belcofin client en server op dezelfde machine draaien en er geen andere clients Belcofin gebruiken dan moet er geen extra firewall regel gedefinieerd worden.

<ins>Een firewall regel configureren op een windows 2008 server of hoger</ins>:

1. De knop **Start** ![small image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771614/original/x6KUtrfhiHkNLwHJTtZ7fMUh7APQseF1Dg.jpeg?1663165276), op **Administrive Tools** en op **Windows Firewall with Advanced Security**.‌ ![small image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771613/original/krn6ajowHM_LDn4wY5asB_C_DKRjHzcVbw.jpeg?1663165276) Als u om het beheerderswachtwoord of een bevestiging wordt gevraagd, typt u het wachtwoord of een bevestiging..
2. Klik op **Inbound Rules**

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771615/original/HDBVPj2tiXHxDFm1Ves-sk_f58QWG8eSdw.png?1663165276)

3. Klik in het menu op Action>New Rule...

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771616/original/4hfEWHYyY9zL8MRNqlwyZ-NsNf7k78-NMg.png?1663165276)

4. Selecteer **Port** en druk vervolgens op **Next >**

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771618/original/2kkpokv-PHdkFgIUxV2zxILSihyVDPwS4A.png?1663165276)

5. Vul bij Specific local ports: 12010 in en druk vervolgens op Next>

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771617/original/GF0vPefYRlC1wsbfjDaNuoCAN9r1txY_dg.png?1663165276)

6. Druk op **Next >**

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771622/original/cgea9XQzjCl4j7sfLyxhGEswpH30hO3kZg.png?1663165277)

7. Druk op **Next >**

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771620/original/lZcn1lljsHETkhf-eAUpoY943IaYmyIzlA.png?1663165277)

8. Vul bij **Name** LbrpDbServer in en druk vervolgens op **Finish**

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771619/original/f70ejCFm9SVtYWVN9QFaO3IK6yb0mrAQgQ.png?1663165277)

# 4. Configuratie Belcofin bij eerste gebruik

## 4.1 Belcofin opstarten

Ofwel wordt Belcofin opgestart na installatie als het vinkje is aangevinkt. In het andere geval moet Belcofin manueel opgestart worden door op de snelkoppeling van Belcofin te klikken op het bureaublad.

## 4.2 Type connectie

Na het opstarten van Belcofin wordt het scherm getoond om te vragen hoe u connectie wil maken:

- <ins>Client/server connectie</ins>: U moet deze optie selecteren indien u gekozen heeft tijdens de installatie voor een client/server installatie
- <ins>Geen server gebruiken</ins>: U moet deze optie selecteren indien u gekozen heeft voor 'Lokaal (zonder server) (max 1 gebruiker)' tijdens de installatie

![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771621/original/P8c_qpNoaeRWF1oh2oXo0cxUbsqc5CdbBw.png?1663165277)

### 4.2.1 Client/server connectie : Configuratie server

Het systeem gaat vragen waar de server van Belcofin is geïnstalleerd. Standaard gaat de huidige computernaam ingevuld worden. Indien Belcofin op een andere server staat dan moet hier de naam van de deze server ingevuld worden.

Poort nummer moet normaal niet aangepast worden tenzij dat de Belcofin server op een andere poort draait.

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772663/original/d1IM4eB2z3LcBifgbB21vSudsUIpC423yA.png?1663165501)

Als de gegevens ingevuld zijn kan men op Volgende klikken. Bij het drukken op volgende gaat het systeem controleren of hij verbinding kan maken met de server. Indien niet dan wordt een foutmelding getoond.

### 4.2.2 Geen server gebruiken: selectie pad waar database moet geïnstalleerd worden

Het systeem gaat standaard als pad voorstelen de locatie waar Belcofin is geïnstalleerd. Indien gewenst kunt u dit aanpassen maar we raden aan om de voorgestelde locatie te laten staan.

Door op **Volgende** te klikken kan men naar het volgende scherm gaan.

## 4.3 Aanmaken database

Nadat het systeem verbinding kon maken met de server gaat het kijken of hij reeds een Belcofin database kan vinden. Omdat dit om een nieuwe installatie gaat, gaat het systeem voorstellen om een nieuwe database met de naam Belcofin aan te maken.

Kan het systeem reeds een Belcofin database vinden dan wordt standaard 'Bestaande database' geselecteerd.

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772660/original/pE5tbl70442_YeFqyVWAwGgxTefxyCA4bg.png?1663165501)

Als de juiste database is geselecteerd of de naam van een nieuwe database is ingevuld kan met op volgende klikken. Bij het klikken op volgende gaat het systeem de nieuwe database aanmaken. Is de creatie gelukt dan wordt een scherm getoond dat de database is aangemaakt.

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772662/original/B4Kess7tOiNOM73DsVMyfHvPV9SLyYh1Sw.png?1663165501)

Door op **Volgende** te klikken kan men naar het volgende scherm gaan.

## 4.4 Configuratie bewaren

Door de optie te kiezen dat de configuratie mag bewaard worden zal bij de volgende keer dat Belcofin opgestart wordt de geselecteerde server en database gebruikt worden door Belcofin.

Kiest men voor Nee dan zal bij de volgende keer als Belcofin opgestart wordt terug gevraagd worden om de server en database te configureren.

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772665/original/JTPxNYu-BYy3bveGOnDzyzk_eM4U1hQW4A.png?1663165501)

Na selecteren van de optie kan men op de knop **Volgende** klikken.

## 4.5 Parameters van Belcofin invullen

Nadat de server en de database aangemaakt zijn en de configuratie bewaard gaat het systeem vragen om de parameters van Belcofin in te stellen. Deze parameters zijn de gegevens van het kantoor die Belcofin gaan gebruiken, de locatie waar de belcotax en finprof bestanden worden bewaard, hoe emails moeten verstuurd worden, ...

![Image 17](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772666/original/YpjxZ9YnDvQW0uOioRimw6PA72ayE0aQ5A.png?1663165501)

<ins>Belcotax en Finprof tab</ins>:

De locatie om de Belcotax en Finprof bestanden te bewaren zijn standaard subdirectories van het Belcofin Client programma. Dit kan eventueel aangepast worden naar een andere locatie.

<ins>Email Tab</ins>:

Hier kan geconfigureerd worden of uw lokale email client moet gebruikt worden of dat Belcofin zelf de emails mag sturen. Indien er wordt gekozen voor lokale email client dan moet rekening gehouden worden dat elke email moet bevestigd worden voordat hij wordt verzonden. Moet je dus veel emails versturen is het dus aan te raden om Belcofin de emails te laten versturen en de optie 'Bevestigingsdialoog per email tonen alvorens te verzenden' af te zetten.

<ins>Refertes Tab</ins>:

Hier kan geconfigureerd worden of Belcofin de refertes(code) van nieuwe aangevers, bedrijfsleiders, dossierverantwoordelijken en begunstigden zelf moet genereren of dat de gebruiker deze zelf ingeeft.

Als alles is ingevuld kan men op de knop **Bewaren** klikken.

## 4.6 Einde

Na het invullen van de parameters wordt het scherm weergegeven dat alles goed is verlopen.

![Image 18](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772667/original/K4EALHyM_dwPWSDgM-aZ3r8Nl6pxVBDfPw.png?1663165501)

Bij het drukken op **Volgende** zal het Belcofin programma gestart worden.

Omdat bij een nieuwe installatie er nog geen licentie is, gaat het bij het opstarten van Belcofin de melding '**Er is geen key ingevuld**' getoond worden.

Door te drukken op **OK** wordt Belcofin opgestart maar draait het in **Demo mode**.

![Image 19](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772661/original/455rI4aN2I5HWahq4DpCgQiDTPhIdFl-LA.png?1663165501)

Als bovenaan het scherm Demo staat dan draait het programma in Demo mode. Hieronder kan meer informatie gevonden worden hoe een licentie kan aangevraagd worden.

![Image 20](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772669/original/54GPh6QgNx6ZQ7rEG6sy1Vg5DCfYSBNF1w.png?1663165501)

# 5. Aanvraag licentie

De procedure om een licentie aan te vragen is als volgt:

1. Belcofin opstarten
2. Menu > About > **Licentie**

![Image 21](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772671/original/SzkNLTurylmh_WY4TiTwNXPSCP-Q7pgLrA.png?1663165501)

3. Op de knop '**Licentie Aanvragen**' klikken

![Image 22](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772672/original/GqU8wzxffbsZ5yyYIkMhXOblQJDtXP4syQ.png?1663165501)

4. Gegevens invullen. Klantcode kan op de factuur gevonden worden. <br>
   Na invullen van de gegevens op Aanvragen klikken

![Image 23](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772673/original/BkVF7JL4eZZbfWjai_qeOs51l0J_SbrZ_w.png?1663165501)

5. Als de aanvraag succesvol is verlopen wordt de boodschap 'Licentie werd aangevraagd' getoond.

![Image 24](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772668/original/x4O-ieolVrPnIG9NgySQYjVCg26WlXEOMA.png?1663165501)

Aanvragen van Licentie worden door ons manueel verwerkt en daarom kan het even duren voor u een licentie ontvangt. In de email staat beschreven hoe u de licentie kan ophalen.

<strong><ins>Opmerking</ins></strong>:

De Belcofin server moet toegang hebben tot het internet om een Licentie aan te vragen en om een Licentie op te vragen.

# 6. Belcofin client toegankelijk maken voor andere computers (werkstations)

## 6.1 Belcofin Client map delen op de server

Indien u Belcofin op meerdere computers(werkstations) wenst te gebruiken moet er een folder gedeeld worden op de file server zodat alle computers de Belcofin client kunnen opstarten. Indien u Belcofin client heeft geïnstalleerd in een bestaande gedeelde folder dan moet er geen nieuwe gedeelde map aangemaakt worden. en kunt u naar de volgende stap gaan.

De Belcofin client moet in een gedeelde map op de file server staan. Is dit nog niet het geval dan moet u de map C:\\LBRP\\Clients (of de map waar u Belcofin client heeft geïnstalleerd op de server) op de file server delen zodat andere gebruikers toegang hebben tot deze map.

<strong><ins>Opmerking</ins></strong>:

Er moet geen client installatie gedaan worden op een werkstation dat Belcofin wil gebruiken. Enkel onderstaande procedures moeten doorlopen te worden om Belcofin te gebruiken op werkstations.

## 6.2 Netwerk map koppelen op werkstation

Indien de server map waar de Belcofin Client staat reeds gekoppeld is op de client dan moet deze procedure niet uitgevoerd te worden en kan naar de volgende stap gegaan worden.

<ins>Procedure om netwerk map te koppelen op werkstation/client</ins>:

1. Deze computer opstarten of windows verkenner
2. Menu > Extra > **Netwerkverbinding maken** kiezen. <br>
   Op windows 7 of windows vista moet u eerst op alt drukken om het menu te zien

![Image 25](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772670/original/OCRSk3lHH-WLoaMMcmPFSQoH5H2LlKraJQ.png?1663165501)

3. Bij station vult u Q in, bij pad \\\\servernaam\\gedeeltemap waarbij servernaam de naam moet zijn van de server en gedeeltemap de naam van uw gedeelde map vb \\\\servernaam\\LBRPClients en het vinkje Opnieuw verbinden bij aanmelden moet u aan zetten.

![Image 26](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772675/original/hmD2s2H7GJgrVwcAg3wmOJSZSYRTo0yLCA.png?1663165501)

<strong><ins>Opmerking</ins></strong>: Gebruik op alle clients dezelfde gedeelde map letter..

## 6.3 Snelkoppeling naar Belcofin Client

Snelkoppeling naar de Belcofin client toevoegen aan het bureablad. De handigste manier hiervoor is:

1. Windows verkenner te openen

2. De map Q:\\Belcofin\\ openen

3. Rechtermuis klik op het bestand Belcofin.exe

4. Kopieren naar>Bureaublad (snelkoppeling maken)

![Image 27](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772676/original/84QuI5x8BVT8_ivYPBHgFpMR82uqavlg1g.png?1663165501)

<!-- ![Image 2]() -->

# 7. Backups

Meer informatie over hoe backups van Belcofin moeten genomen worden kan gevonden worden in de handleiding "[**Belcofin Backup NL.pdf**](https://support.corpgroup.site/nl/support/solutions/articles/101000171535)".

Deze handleiding staat onder de directory \\\_doc.

Indien u de voorgestelde paden niet aangepast heeft, tijdens de installatie, dan kunt u dit bestand vinden in de directory C:\\LBRP\\Clients\\Belcofin\\\_doc

<strong><ins>Opmerking</ins></strong>: Het is zeer belangrijk om backups te nemen zoals beschreven in de handleiding. Indien u enkel een copy maakt van de harde schijf waar Belcofin op staat dan bestaat de mogelijkheid dat deze copy geen goeie backup is van Belcofin.

# 8. Belcofin overzetten naar nieuwe server

Belcofin kan op 2 manieren overgezet worden naar een nieuwe server:

- Dmv back-up en restore Belcofin overzetten (voorkeur manier)
- Dmv kopie van bestanden

## 8.1 Overzetten dmv backup en restore (voorkeur manier)

De procedure hiervoor is:

1. Back-up nemen (menu>start>backup). Voor meer uitleg zie hierboven.

2. Dit back-up bestand op een memorystick plaatsen om deze op de nieuwe server te zetten

3. BelcofinSetup.exe downloaden van onze website ([ACCOWIN DOWNLOADEN OF UPDATEN](http://www.belcofin.be/nl/belcofin/download)) op de nieuwe server

4. De installatie uitvoeren op de nieuwe server van Belcofin (zie hierboven voor meer uitleg)

5. Restore doen van back-up bestand op de nieuwe server

## 8.2 Overzetten dmv kopie van bestanden

Deze procedure wordt afgeraden omdat hierbij zaken kunnen fout lopen waardoor de data beschadigd geraakt. Maar in sommige gevallen is dit de enige manier.

<strong><ins>Procedure</ins></strong>:

1. Belcofin (BelcofinSetup.exe) downloaden van onze website (http://www.belcofin.be/nl/belcofin/download) en te installeren op de nieuwe server. Meer informatie over de installatie kan hierboven gevonden worden.

2. Belcofin te installeren in dezelfde locatie als op de oude server.

3. De service 'LBRP Database Server' op de nieuwe server stoppen
   1. Configuratie scherm van Windows openen
   2. Dubbelklikken op Systeembeheer
   3. Dubbelklikken op Services
   4. Rechtermuis knop op de service met naam 'LBRP Database Server' en dan te kiezen voor 'Stoppen'

![Image 28](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772674/original/XG057xuOLedIBSQDzF_n6jzY-DO5bt0sNA.png?1663165501)

5. De folder van de oude computer copieren over de locatie van de nieuwe server

6. Nieuwe server opnieuw opstarten

7. Bij starten van Belcofin zou de oude data terug moeten zichtbaar zijn

# 9. Belcofin overzetten van server naar NAS

Belcofin kan draaien als een server, maar kan ook werken op een NAS. Het nadeel van werken op een NAS is dat Belcofin trager gaat werken en dat maar 1 persoon tegelijk de data mag aanpassen.

Procedure om Belcofin over te zetten van server naar NAS is:

1. Backup nemen van Belcofin op de server (Belcofin opstarten, menu>start>backup)

2. Backup bestand op memory stick plaatsen

3. Belcofin de-installeren van de server en clients als deze in de toekomst Belcofin gaan gebruiken vanaf de NAS

4. Belcofin (BelcofinSetup.exe) downloaden van onze website (http://www.belcofin.be/nl/belcofin/download)

5. Tijdens de installatie kiezen voor Lokaal (zonder server) (max 1 gebruiker) en als locatie en map op de NAS schijf waar Belcofin moet komen.

6. Na installatie Belcofin opstarten en kiezen voor de optie 'Geen server gebruiken-Lokaal-Maximum 1 gebruiker' en wizard doorlopen

7. Na de installatie kunt u via menu>restore, het back-up bestand selecteren en terugzetten. Hierbij wordt dan de back-up teruggezet op de NAS.

<!-- Text from:

✅ https://support.corpgroup.site/nl/support/solutions/articles/101000241233--installatie-van-belcofin
✅ 2549 words, 16059 characters
✅ STANDARD package is $30 for max of 3700 words

📌 I changed the all occurrences of Next> to Next >
📌 Added a colon after "Belcotax en Finprof tab" and "Email Tab" to match "Refertes Tab"
📌 I noticed a link that was in quotes and bold black text. I accidentally found out that it was a link. I changed it to a markdown link. The other files I did not have a link like that; I keep an eye out for those in future files.
📌 There are https links in sections 8.1, 8.2, and 9 - they will eventually need to be put into actual links tags with link text - they all go to "ACCOWIN DOWNLOADEN OF UPDATEN". Let me know if I should change them all. As an example, I changed the link in section 8.1

-->
