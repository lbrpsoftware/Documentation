# Desktop - BelcoFin - Import Data

## 1. Inleiding

Dit document beschrijft welke data en op welke manier deze data kan geïmporteerd worden in Belcofin.

Data kan op 2 manieren geïmporteerd worden in Belcofin.

Via de grafische manier dat manueel moet gedaan worden door de gebruiker of via command line. Door gebruik te maken van command line parameters kan de import eventueel via taakplanner ingepland worden om elke dag automatisch data te importeren.

Data kan geïmporteerd worden uit een CSV bestand, uit dossierlijst van Accowin, uit Kluwer Centraal Dossierbeheer, uit AdminIS2013/AdminConsult van Syneton of e-share.

Aangevers, bedrijfsleiders, begunstigden, dossierverantwoordelijken en fiches 281.50 kunnen geïmporteerd worden in Belcofin.

**Belangrijke opmerking voor de import van gegevens uit AdminIS/AdminConsult**:

Syneton heeft bij de update naar versie 7.5 de toegang tot hun gegevens aangepast.

Om Belcofin toegang te geven tot de gegevens van AdminIS heeft Syneton een kleine toepassing gemaakt die een toegang aanmaakt voor Belcofin in de database van AdminIS. Deze tool **AdminIS75ToBelcofin.exe** vindt u in de map **\_Tools** en moet 1x worden uitgevoerd zodat de toegang voor Belcofin tot de gegevens van AdminIS wordt aangemaakt.

<ins>Opgelet</ins>: de naam van de ODBC bron moet **Admin-Consult** zijn.

## 2. Hoe importeren

### 2.1 Grafisch importeren

#### 2.1.1 Selectie type import

Data kan grafisch geïmporteerd worden via menu > parameters > import

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031657952/original/gVExBMxkAFcArEhxVo-qwgWYvpjVLGBpEA.png?1663145305)

Type Import:

- CSV bestand: hierbij kan een CSV bestand geselecteerd worden en geïmporteerd in Belcofin.
- Kluwer centraal dossierbeheer Firebird database: dit is de standaard database dat Kluwer gebruikt om zijn data in te bewaren.
- Kluwer centraal dossierbeheer SQL database: naast Firebird wordt soms ook SQL server gebruikt door Kluwer om zijn data in te bewaren en dan kan deze optie gekozen worden.
- AdminIS 2013/AdminConsult: Importeren uit de toepassing AdminIS 2013/AdminConsult van Syneton
- E-Share: Importeren uit de toepassing e-share.

Algemene instellingen tijdens import zijn:

- Type overschrijven:
  - Toevoegen en update: hierbij wordt zowel nieuwe data toegevoegd als bestaande data geupdate.
  - Enkel toevoegen: hierbij worden enkel maar nieuwe data toegevoegd, bestaande data wordt niet overschreven
  - Enkel update: hierbij wordt enkel maar bestaande data geupdate. Nieuwe data wordt niet geimporteerd.
- Ontvangkantoren:
  - Ontvangkantoor Belcofin gebruiken: ook al staat in de import data een ontvangkantoor dan nog gaat Belcofin aan de hand van de postcode bepalen wat het ontvangkantoor is en deze bewaren op nieuwe van aangever.
  - Ontvangkantoor Import gebruiken: het ontvangkantoor dat in de import data staat wordt gebruikt ook al is deze volgens Belcofin anders.
  - Als ontvangkantoor Import en Belcofin verschillend dan foutmelding geven: als het ontvangkantoor van de import en dat volgens Belcofin, bepaald ahv de postcode van de aangever, verschillend zijn dan wordt de aangever niet geïmporteerd en wordt een fout getoond.
  - Ontvangkantoor Import gebruiken, als niet ingevuld dan van Belcofin gebruiken: eerst wordt ontvangkantoor uit de import gebruikt. Is deze niet ingevuld dan gaat Belcofin ahv de postcode het ontvangkantoor bepalen.
- Sleutel:
  - Referte: Het veld referte op aangever/bedrijfsleider/begunstigde/medewerker wordt gebruikt als sleutelveld om te weten wat moet geüpdatet of toegevoegd worden.
  - Referte extern systeem: Het veld ‘referte extern systeem’ wordt gebruikt als sleutelveld op aangever/bedrijfsleider/begunstigde/medewerker om te weten wat moet geüpdatet of toegevoegd worden.

#### 2.1.2 Import type specifieke schermen

##### 2.1.2.1 Import CSV bestand

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031660712/original/KPpXG5fo_w4ejNEW1kWqohgYO56Uy-iiKg.png?1663145774)

Er moet aangegeven worden waar het CSV bestand kan gevonden worden en welke type data dat in het CSV bestand zit.

Type bestand:

- Aan gever/Schuldenaar: het CSV bestand bevat de data van aangevers die moeten geïmporteerd worden.
- Bedrijfsleiders: het CSV bestand bevat data van bedrijfsleiders die moeten geïmporteerd worden.
- Dossierverantwoordelijken: het CSV bestand bevat data van dossierverantwoordelijken die moeten geïmporteerd worden.
- Link Aangever-Bedrijfsleider: het CSV bestand bevat data dat beschrijft welke bedrijfsleider aan welke aangever is gekoppeld.
- Begunstigden: het CSV bestand bevat data van begunstigden die moeten geïmporteerd worden.
- Fiches 281.50: het CSV bestand bevat data van fiches 281.50 die moeten geïmporteerd worden.

CSV bestandsnaam: de locatie en bestandsnaam van het CSV bestand

##### 2.1.2.2 Import Kluwer specifieke schermen

Voor import van Kluwer kan type database van Kluwer gekozen worden:

- Firebird
- SQL server

Afhankelijk van het type database dat gekozen is moeten andere instellingen ingevuld worden.

###### 2.1.2.2.1 Firebird specifiek scherm

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031660804/original/kIZA-MFYSFWh_k5xrQWJ8PwBMQXdWg1ZSQ.png?1663145792)

Als voor database Firebird wordt gekozen, moet volgende informatie ingevuld worden:

- Servernaam: Indien alles van kluwer op uw huidige computer staat dan moet geen servernaam ingevuld worden. Indien dit niet zo is dan moet de naam van de server ingevuld worden.

- Centraal dossierbeheer data bestand: op de server staat het database bestand van het centraal dossier beheer standaard in het pad c:\\kluwerdata\\FinFisc\\CDB\\CDB.FDB

- Hier moet dus het pad van de database van centraal dossierbeheer ingevuld worden zoals dit is volgens de server en niet het pad waarmee de client aan het database bestand kan.

- Wedde administratie data bestand: Indien men ook het pad kan opgeven van wedde-administratie dan kan nog extra data geïmporteerd worden zoals het inkomen van de partner. Is er geen wedde-administratie dan kan het inkomen van de partner niet geimporteerd worden.

- Op de server staat het database bestand van het centraal dossier beheer standaard in het pad c:\\kluwerdata\\FinFisc\\CDB\\WA&lt;jaartal&gt;.FDB waarbij &lt;jaartal&gt; moet vervangen worden door wel jaar van wedde-administratie men wil importeren. Dus voor 2012 wordt dit c:\\kluwerdata\\FinFisc\\CDB\\WA2012.FDB

- Hier moet dus het pad van de database van wedde-administratie ingevuld worden zoals dit is volgens de server en niet het pad waarmee de client aan het database bestand kan.

- Standaard gebruikersnaam en paswoord gebruiken: Indien deze optie aan staat wordt de standaard gebruikersnaam en wachtwoord van firebird gebruikt. Indien deze is aangepast dan moet dit vinkje uitgevinkt worden en kan men manueel gebruikersnaam en wachtwoord invullen.

Door op Volgende te klikken gaat het systeem controleren of de ingevulde data goed is. Dit kan men ook steeds doen door op de knop 'Test connecties' te klikken.

###### 2.1.2.2.2 SQL server specifiek scherm

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031660947/original/6SlbtW5mvcG5kHkXpftHMVJP7B94_Z3XkA.png?1663145811)

Als voor database 'SQL server' wordt gekozen, moet volgende informatie ingevuld worden:

- Servernaam: de naam van de server waar SQL-server draait. Indien een instance naam wordt gebruikt dan moet de naam servernaam\\naamInstance zijn.

- Database naam Centraal Dossierbeheer: standaard is dit CDB maar moest dit een andere naam zijn dan kan dit hier aangepast worden.

- Database naam Wedde-Administratie: standaard is dit WA&lt;jaartal&gt;001 waarbij &lt;jaartal&gt; moet vervangen worden door het jaartal van Wedde-Administratie men wenst te importeren. Is dit van 2012 dan wordt dit WA2012001.

- Indien men geen Wedde-Administratie heeft dan moet dit niet ingevuld worden. Als men geen Wedde-Administratie heeft dan kan het inkomen van de partner niet geïmporteerd worden. Alle andere informatie wel.

- Windows authenticatie gebruiken: indien aangevinkt dan moet men geen gebruikersnaam en wachtwoord invullen en wordt uw huidige gebruikersnaam en wachtwoord gebruikt om verbinding te maken met de server.

- Gebruikersnaam: De gebruikersnaam om verbinding te maken met de SQL server.

- Passwoord: Het wachtwoord van de gebruikersnaam om verbinding te maken met de SQL server

Door op Volgende te klikken gaat het systeem controleren of de ingevulde data goed is. Dit kan men ook steeds doen door op de knop 'Test connecties' te klikken.

###### 2.1.2.2.3 Selectie welke data te importeren uit Kluwer

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031661075/original/hBI-6mp_1wA_ypzrrZaoRYpsX1NO01jy3Q.png?1663145825)

Via dit scherm kan men bepalen of men enkel data wil importeren van een bepaalde groep of van een bepaalde gebruiker.

Aanvullende informatie uit centraal dossierbeheer kan geïmporteerd worden. Deze aanvullende informatie is data over het aantal kinderen, aantal anderen, aantal kinderen met handicap, aantal anderen met handicap, burgerlijke stand,

Aanvullende informatie van Wedde-Administratie kan geïmporteerd worden uit Wedde-Administratie als de Wedde-Administratie database ingevuld was. Indien niet dan zal de laatste optie niet kunnen geselecteerd worden. De extra informatie uit Wedde-Administratie is dezelfde als deze uit Centraal Dossierbeheer met dit verschil dat deze uit centraal dossier beheer zelf wordt opgebouwd uit alle data dat in Centraal Dossierbeheer zit en dat er in Wedde-Administratie ook welk inkomen de partner heeft kan geïmporteerd worden wat niet in het Centraal Dossierbeheer staat.

##### 2.1.2.3 Import AdminIS 2013/AdminConsult specifieke schermen

###### 2.1.2.3.1 Selectie gegevensbron

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031661127/original/YMPC3-jmI4lMNRFpP0eu32deNjkc9qNd9w.png?1663145841)

Er moet aangegeven worden waar welke ODBC gegevensbron moet gebruikt worden om verbinding te maken met AdminIS 2013/AdminConsult. Maw dit moet uitgevoerd worden op een computer waar een client van AdminIS 2013/AdminConsult is op geïnstalleerd.

Er moet worden opgegeven welke versie van AdminIS/AdminConsult gebruikt wordt:

Versie van voor of na de update naar versie 7.5 van AdminIS/AdminConsult.

###### 2.1.2.3.2 Selectie welke data te importeren

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031671572/original/ZFhcU-JIDOWElQmWl3yYVWB_WucTAgkB4w.png?1663147471)

Via dit scherm kan men bepalen welke data men wil importeren. Bij importeren van welke dossierverantwoordelijke verantwoordelijk is voor welk dossier moet aangegeven worden welke rol in AdminIS 2013/AdminConsult overeenkomt met de rol van dossierverantwoordelijke.

De klantcode van de bedrijfsleiders en dossiers wordt gebruikt als referte in Belcofin. Enkel maar aangevers en bedrijfsleiders met een ingevuld en uniek klantcode worden geïmporteerd in Belcofin.

##### 2.1.2.4 Import e-share specifieke schermen

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031672265/original/RkyupKKI3NqVU6qHQtedO511MJOvRSwC0Q.png?1663147587)

Sleutel e-share kunt u ophalen op de website van e-share.

Als koppeling moet u kiezen welk veld u gaat gebruiken als koppel veld in Belcofin.

U heeft de keuze uit 3 velden:

- E-Share ID: dit is het interne ID dat e-share gebruikt voor de data
- Boekhoudlink
- Code

#### 2.1.3 Start Import

Na het invullen van de import specifieke instellingen afhankelijk van het type import kan de import gestart worden door op de knop Volgende te klikken.

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031672494/original/L5DmKI2iOgk-GbMiIvmI85AZc693GkSBtg.png?1663147631)

#### 2.1.4 Voortgang import

Tijdens de import kan je via een progress bar zien hoe ver de import reeds is en kun je ook zien of er reeds fouten zijn opgetreden tijdens de import en/of er al zaken zijn geïmporteerd.

#### 2.1.5 Einde import

Nadat alles is geïmporteerd wordt een overzicht getoond van wat er geïmporteerd is en waar er fouten waren. Als er fouten waren in een record dan wordt deze record niet geïmporteerd.

### 2.2 Via command line

Het command line programma BelcofinCmd.exe kan gebruikt worden om CSV bestanden te importeren via de command line.

Het programma BelcofinCmd.exe blijft actief zolang de import loopt. Eens de import gedaan is met of zonder fouten dan stopt het programma met uitvoeren en wordt een exit code teruggegeven. De exit code 0 wordt teruggegeven als de import succesvol verliep anders wordt een exit code verschillend van 0 teruggeven.

Al deze command line parameters worden ook gebruikt in de grafische manier om data te importeren. Meer uitleg over bepaalde parameters kan ook gevonden worden bij de grafische manier van importeren.

Mogelijke command line parameters zijn:

<!-- TABLE 1 GOES HERE -->
<table>
  <thead>
    <tr>
      <th>Naam</th>
      <th>Omschrijving</th>
      <th>Verplicht</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/host:&lt;host naam&gt;</td>
      <td>De naam van de Belcofin server</td>
      <td>X[1]</td>
    </tr>
    <tr>
      <td>/ipaddress:&lt;ip adres&gt;</td>
      <td>IP adres van de Belcofin server.</td>
      <td>X<sup>①</sup></td>
    </tr>
    <tr>
      <td>/port:&lt;poort nummer&gt;</td>
      <td>Poort van de server. Als niet meegegeven dan <br> wordt de standaard poort nummer gebruikt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/db:&lt;database naam&gt;</td>
      <td>Naam van de database. Als niet meegegeven <br> dan wordt de standaard database van Belcofin <br> gebruikt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/language:&lt;taal&gt;</td>
      <td>De taal van de foutmeldingen:
        <ul>
          <li>N: Nederlands</li>
          <li>F: Frans</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/itype:&lt;type import&gt;</td>
      <td>Type bron waarvan de data wordt <br> geïmporteerd:
        <ul>
          <li>c: CSV bestand</li>
          <li>ks: Kluwer SQL server database</li>
          <li>kf: Kluwer Firebird database</li>
          <li>a: Accowin</li>
          <li>s: AdminIS/AdminConsult</li>
          <li>e: e-share</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/dtype:&lt;data type(s)&gt;</td>
      <td>Welke soort data er moet geïmporteerd worden:
        <ul>
          <li>z: bedrijfsleiders</li>
          <li>a: aangevers/dossiers</li>
          <li>v: dossierverantwoordelijken</li>
          <li>i: link aangever-bedrijfsleider</li>
          <li>s: begunstigden (enkel voor import <br> type CSV)</li>
          <li>5: fiches 281.50 (enkel voor import <br> type CSV)</li>
        </ul>
        Bij import van CSV bestand kan er maar 1 <br> soort data gedefinieerd worden bv a. Bij import <br> van Kluwer kunnen er meerdere soorten data <br> ingevuld worden die moeten geïmporteerd <br> worden bv azl dan wordt aangever, <br> bedrijfsleider en link aangever-bedrijfsleider <br> geïmporteerd.
      </td>
      <td>X</td>
    </tr>
    <tr>
      <td>/otype:&lt;type import&gt;</td>
      <td>Type import:
        <ul>
          <li>i: enkel nieuwe data toevoegen</li>
          <li>u: enkel bestaande data updaten</li>
          <li>iu: zowel nieuwe als bestaande data <br> importeren</li>
        </ul>
        Standaard waarde is iu.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/rtype:&lt;sleutelveld&gt;</td>
      <td>Welk veld van Belcofin moet gebruikt worden <br> als sleutelveld om te importeren:
        <ul>
          <li>r: veld 'Referte'</li>
          <li>e: veld 'Referte extern systeem'</li>
        </ul>
        Standaard waarde is r.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/idistricttype:&lt;waarde&gt;</td>
      <td>Dit heeft aan hoe het ontvangkantoor moet <br> geïmporteerd worden:
        <ul>
          <li>b: ontvangkantoor laten bepalen <br> door Belcofin en deze van de import <br> negeren</li>
          <li>i: ontvangkantoor van de import <br> gebruiken</li>
          <li>e: als ontvangkantoor van de import <br> en deze volgens Belcofin <br> verschillend zijn dan foutmelding <br> geven</li>
          <li>ib: ontvangkantoor van de import <br> gebruiken, indien niet ingevuld deze <br> laten bepalen door Belcofin</li>
        </ul>
        Standaard waarde is: ib
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/logfile: &lt;bestandsnaam&gt;</td>
      <td>De locatie en naam van het bestand waar de <br> logging informatie van de import in staat. Als <br> deze parameter niet gebruikt wordt dan wordt <br> geen log bestand aangemaakt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>Als deze parameter wordt toegevoegd dan <br> wordt naast de fouten ook extra logging <br> informatie getoond en/of weggeschreven in het <br> log bestand.</td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>Als deze parameter gebruikt wordt dan wordt <br> log bestand overschreven telkens het <br> programma wordt uitgevoerd. Als de parameter <br> niet wordt gebruikt dan wordt de logging steeds <br> toegevoegd aan bestaande logbestand.</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Parameters specifiek import CSV bestanden</strong>:</td>
    </tr>
    <tr>
      <td>/ifile:&lt;bestandsnaam&gt;</td>
      <td>De bestandsnaam van het CSV bestand</td>
      <td>X[2]</td>
    </tr>
    <tr>
      <td colspan="3"><strong>Parameters specifiek import Kluwer</strong>:</td>
    </tr>
    <tr>
      <td>/iservername:&lt;server naam&gt;</td>
      <td>De server naam waar data van kluwer staat.</td>
      <td>X[3]</td>
    </tr>
    <tr>
      <td>/idbuser:&lt;gebruikersnaam&gt;</td>
      <td>De gebruikersnaam om verbinding te maken <br> met de database van kluwer. Dit is <strong>niet</strong> de <br> gebruikersnaam waarmee je aanlogt in Kluwer. <br> Indien windows authenticatie wordt gebruikt <br> voor SQL server of standaard gebruikersnaam <br> bij Firebird dan is deze parameter niet nodig</td>
      <td></td>
    </tr>
    <tr>
      <td>/idbpassw:&lt;wachtwoord&gt;</td>
      <td>Wachtwoord van de database gebruiker</td>
      <td></td>
    </tr>
    <tr>
      <td>/idbnamecdb:&lt;database CDB&gt;</td>
      <td>De database van Centraal Dossierbeheer:
        <ul>
          <li>SQL server: de database naam</li>
          <li>Firebird: pad en bestandsnaam op <br> de server van Centraal dossier <br> beheer database</li>
        </ul>
        Meer informatie hierover kan ook gevonden <br> worden in \"2.1.2.2 Import Kluwer specifieke <br> schermen\" hierboven.
      </td>
      <td>X[4]</td>
    </tr>
    <tr>
      <td>/idbnamewa:&lt;database WA&gt;</td>
      <td>De database van Wedde-Administratie:
        <ul>
          <li>SQL server: de database naam</li>
          <li>Firebird: pad en bestandsnaam op <br> de server van Wedde-Administratie <br> database</li>
        </ul>
        Meer informatie hierover kan ook gevonden <br> worden in \"2.1.2.2 Import Kluwer specifieke <br> schermen\" hierboven.
      </td>
      <td>X④</td>
    </tr>
    <tr>
      <td>/iwindowsauthentication</td>
      <td>Deze parameter kan enkel gebruikt worden bij <br> Kluwer SQL server. Indien deze parameter <br> gedefinieerd dan gaat windows authenticatie <br> gebruikt worden om verbinding te maken met <br> SQL server.</td>
      <td></td>
    </tr>
    <tr>
      <td>/idefaultuserandpassw</td>
      <td>Deze parameter kan enkel gebruikt worden bij <br> Kluwer Firebird database. Als deze parameter <br> gedefinieerd dan wordt de standaard <br> gebruikersnaam en wachtwoord van Firebird <br> gebruikt om verbinding te maken.</td>
      <td></td>
    </tr>
    <tr>
      <td>/iuser:&lt;GUID user&gt;</td>
      <td>Als deze parameter gedefinieerd dan worden <br> enkel maar dossiers (aangevers en <br> bedrijfsleiders) van deze gebruiker <br> geïmporteerd. <br> De GUID van de gebruiker in de Kluwer <br> Centraal Dossier Beheer tabel</td>
      <td></td>
    </tr>
    <tr>
      <td>/igroup:&lt;GUID groep&gt;</td>
      <td>Als deze parameter gedefinieerd dan worden <br> enkel maar dossiers (aangevers en <br> bedrijfsleiders) van deze groep geïmporteerd. <br> De GUID van de groep in de Kluwer Centraal <br> Dossier Beheer tabel.</td>
      <td></td>
    </tr>
    <tr>
      <td>/ionlydossierswithperiodBV</td>
      <td>Als deze parameter gedefinieerd dan worden <br> enkel maar dossiers (aangevers) waarbij de <br> periode van de bedrijfsvoorheffing is ingevuld <br> geïmporteerd</td>
      <td></td>
    </tr>
    <tr>
      <td>/ionlydossiersthatareworking</td>
      <td>Als deze parameter is gedefinieerd dan worden <br> enkel maar bedrijfsleiders die werkzaam zijn op <br> dit moment geïmporteerd.</td>
      <td></td>
    </tr>
    <tr>
      <td>/iextrainfo</td>
      <td>Als deze parameter gedefinieerd dan wordt ook <br> extra informatie zoals aantal kinderen, <br> burgerlijke stand, ... van een bedrijfsleider <br> geimporteerd</td>
      <td></td>
    </tr>
    <tr>
      <td>/iextrainfowa</td>
      <td>Als deze parameter gedefinieerd en Wedde-<br>Administratie database is ingevuld dan wordt <br> de extra informatie uit de Wedde-Administratie <br> database geimprteerd samen met het inkomen <br> van de partner.</td>
      <td></td>
    </tr>
    <tr>
      <td>/idepperswithfromdt</td>
      <td>Enkel maar personen die ten laste zijn van een <br> bedrijfsleider importeren die een Vanaf datum <br> hebben ingevuld. Dit is de standaard manier <br> waarop Kluwer de data inleest in Wedde-<br>Administratie.</td>
      <td></td>
    </tr>
    <tr>
      <td>/iprefix</td>
      <td>De prefix die voor de referte van de aangever, <br> bedrijfsleider en medewerker moet gezet <br> worden. Standaard is deze blanco.</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Parameters specifiek Accowin</strong>:</td>
    </tr>
    <tr>
      <td>/ipath:&lt;directory&gt;</td>
      <td>De directory waar Accowin geïnstalleerd staat.</td>
      <td>X[5]</td>
    </tr>
    <tr>
      <td colspan="3"><strong>Parameters specifiek AdminIS 2013/AdminConsult</strong>:</td>
    </tr>
    <tr>
      <td>/idatasourcename:<br>&lt;gegevensbron&gt;</td>
      <td>De ODBC gegevensbron van <br> AdminIS2013/AdminConsult dat gebruikt wordt <br> om verbinding te maken met <br> AdminIS2013/AdminConsult</td>
      <td>X[6]</td>
    </tr>
    <tr>
      <td>/idatasourceversion75</td>
      <td>Deze parameter moet worden gebruikt als <br> versie 7.5 of later van AdminIS/AdminConsult <br> wordt gebruikt</td>
      <td></td>
    </tr>
    <tr>
      <td>/inameroleresponseemployee:<br>&lt;rol&gt;</td>
      <td>De rol dat moet gebruikt worden voor als <br> dossierverantwoordelijke</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Parameters specifiek e-share</strong>:</td>
    </tr>
    <tr>
      <td>/iesharelinkfield:&lt;veld&gt;</td>
      <td>Welk veld van e-share moet gebruikt worden <br> als koppelveld:
        <ul>
          <li>c: code</li>
          <li>a: boekhoudlink</li>
          <li>i: interne ID van e-share</li>
        </ul>
        Standaard waarde is c.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/iesharekey:&lt;sleutel&gt;</td>
      <td>Software sleutel van e-share. Deze kan <br> gevonden worden op de website van e-share</td>
      <td>X</td>
    </tr>
    <tr>
      <td>/ieshareurl:&lt;url&gt;</td>
      <td>De URL van e-share. Standaard is dit <br> https://www.e-share.be</td>
      <td></td>
    </tr>

  </tbody>
</table>

<ins>Voorbeeld</ins>:

belcofinCmd.exe /host:LBRPServer /itype:c /dtype:z /ifile:zaakvoerders.csv

[1] Ofwel de naam van de server ofwel IP adres is verplicht. Als beide worden meegeven dan wordt de host naam gebruikt.

[2] Als import type CSV is dan is deze parameter verplicht

[3] Als database SQL server is dan moet de naam van de SQL server ingevuld worden. Voor Firebird database moet enkel maar de naam van de server ingevuld worden als deze op een andere machine staat.

[4] Als import type Kluwer is dan is deze parameter verplicht

[5] Als import type Accowin is dan is deze parameter verplicht

[6] Als import type AdminIS2013/AdminConsult is dan is deze parameter verplicht

## 3. CSV bestandsstructuur

### 3.1 Algemene richtlijnen CSV bestand

De CSV bestanden moeten voldoen aan volgende richtlijnen:

- De eerste lijn van alle CSV bestanden bevat de veldnamen die moeten geïmporteerd worden.
- Vanaf lijn 2 staat de data dat moet geïmporteerd worden.
- De velden worden gesplitst door een tab.
- De records worden gesplitst door een .
- Als decimaal scheidingsteken moet punt gebruikt worden vb 1.21
- Datums hebben als formaat: JJJJMMDD vb: 20120309 wat staat voor 9 maart 2012
- De encoding van het bestand moet ANSI zijn.

### 3.2 Standaard codes

#### 3.2.1 Landen

<ins>ISO 3166-1 standaard 2-letters</ins> wordt gebruikt als land codes binnen Belcofin behalve voor België, hiervoor wordt de code B gebruikt ipv BE.

Voorbeeld:

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>B</td>
      <td>Belgie</td>
    </tr>
    <tr>
      <td>NL</td>
      <td>Nederland</td>
    </tr>
    <tr>
      <td>FR</td>
      <td>Frankrijk</td>
    </tr>
    <tr>
      <td>DE</td>
      <td>Duitsland</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

### 3.3 Mapping velden

Hieronder staat per type import beschreven welke velden er kunnen geïmporteerd worden en wat de headernaam(veldnaam) van elk veld is, ...

#### 3.3.1 Aangevers

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld <br> (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Code</td>
      <td>Code</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Naam</td>
      <td>Tekst(100)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>Address</td>
      <td>Adres</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>CountryCode</td>
      <td>Land code</td>
      <td>Tekst(3)</td>
      <td></td>
      <td>B</td>
    </tr>
    <tr>
      <td>ZipCode</td>
      <td>Postcode</td>
      <td>Tekst(10)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>City</td>
      <td>Gemeente</td>
      <td>Tekst(50)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>Telefoonnummer</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Fax</td>
      <td>Fax</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GSM</td>
      <td>GSM</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Email</td>
      <td>Email adres</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Language</td>
      <td>Taal code: <br> 0: Nederlands, 1: Frans, 2: Engels, 3: Duits</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Activity</td>
      <td>Activiteit aangever</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>CompanyNumber</td>
      <td>Ondernemingsnummer. Punten, spaties en <br> streepjes worden automatisch verwijderd <br> uit nummer en als nummer 9 lang is wordt <br> deze omgevormd naar 10 door er een 0 <br> voor te zetten.</td>
      <td>Tekst(10)</td>
      <td>X[1]</td>
      <td></td>
    </tr>
    <tr>
      <td>NationalNumber</td>
      <td>Rijksregisternummer. Punten, spaties en <br> streepjes worden automatisch verwijderd <br> uit nummer</td>
      <td>Tekst(14)</td>
      <td>X⑦</td>
      <td></td>
    </tr>
    <tr>
      <td>NationalNumberPartner</td>
      <td>Rijksregisternummer van partner. Punten, <br> spaties en streepjes worden automatisch <br> verwijderd uit nummer</td>
      <td>Tekst(14)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>PayrollPeriod</td>
      <td>Periode aangifte BV: <br> 4: Kwartaalaangifte <br> 12: Maandaangifte</td>
      <td>Nummer</td>
      <td></td>
      <td>4</td>
    </tr>
    <tr>
      <td>SendType</td>
      <td>Methode verzenden documenten: <br> 0: Brief - Afdrukken <br> 1: Email</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>ReceiptDistrict</td>
      <td>Gewestelijk directie kantoor code.[2] <br> Als niet ingevuld wordt deze automatisch <br>  adv de postcode bepaald.</td>
      <td>Tekst(9)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ReceiptOffice</td>
      <td>Ontvangstkantoor code.⑧</td>
      <td>Tekst(9)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ResponsibleCode</td>
      <td>De code van de verantwoordelijke van deze <br> aangever/dossier</td>
      <td>Tekst(25)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>TaxType</td>
      <td>Type belasting: <br> 1 : Personenbelasting <br> 2 : Rechtspersonenbelasting (VZW) <br> 3 : Vennootschapsbelasting (vennootschap <br> of VZW)</td>
      <td>Nummer</td>
      <td></td>
      <td>3</td>
    </tr>
  </tbody>
</table>

[1] Ondernemingsnummer of rijksregisternummer is verplicht

[2] Gewestelijk directie kantoor code en ontvangstkantoor code kan gevonden worden in excel bestand op de website http://minfin.fgov.be/portail2/downloads/e-services/finprof/recettes.xls

#### 3.3.2 Bedrijfsleiders

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld <br> (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Code</td>
      <td>Code</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>FirstName</td>
      <td>Voornaam</td>
      <td>Tekst(50)</td>
      <td>X[1]</td>
      <td></td>
    </tr>
    <tr>
      <td>LastName</td>
      <td>Achternaam</td>
      <td>Tekst(100)</td>
      <td>X⑨</td>
      <td></td>
    </tr>
    <tr>
      <td>Address</td>
      <td>Adres</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>CountryCode</td>
      <td>Land code</td>
      <td>Tekst(3)</td>
      <td></td>
      <td>B</td>
    </tr>
    <tr>
      <td>ZipCode</td>
      <td>Postcode</td>
      <td>Tekst(10)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>City</td>
      <td>Gemeente</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>Telefoonnummer</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Fax</td>
      <td>Fax</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GSM</td>
      <td>GSM</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Email</td>
      <td>Email adres</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Language</td>
      <td>Taal code: <br> 0: Nederlands <br> 1: Frans <br> 2: Engels <br> 3: Duits</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NationalNumber</td>
      <td>Rijksregisternummer. Punten, spaties <br> en streepjes worden automatisch <br> verwijderd uit nummer</td>
      <td>Tekst(14)</td>
      <td>X⑨</td>
      <td></td>
    </tr>
    <tr>
      <td>PlaceOfBirth</td>
      <td>Geboorteplaats</td>
      <td>Tekst(50)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>DateOfBirth</td>
      <td>Geboortedatum</td>
      <td>Datum</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>NamePartner</td>
      <td>Naam van de partner</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>NationalNumberPartner</td>
      <td>Rijksregisternummer van partner</td>
      <td>Tekst(14)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>MaritalStatus</td>
      <td>Burgelijk stand: <br> 0: niet gekend <br> 1: ongehuwd <br> 2: gehuwd of wettelijk samenwonend <br> 3: weduwnaar of weduwe <br> 4: uit de echt gescheiden of gescheiden van tafel en bed <br> 5: feitelijk gescheiden</td>
      <td>Nummer</td>
      <td></td>
      <td>1</td>
    </tr>
    <tr>
      <td>FamilyStatus</td>
      <td>Gezinstoestand: <br> 0: alleenstaande <br> 1: partner heeft persoonlijke <br> beroepsinkomsten <br> 2: partner heeft geen <br> beroepsinkomsten of pensioen, <br> rente <= 130 EURO netto per maand <br>(inkomstenjaar 2016) <br> 3: partner enkel beroepsinkomsten <br> <=216 EURO (inkomstenjaar 2016) <br> 4: partner enkel pensioen, rente <br> >130 en < 432 EURO (inkomstenjaar <br> 2016) <br> </td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NumberOfChildren</td>
      <td>Aantal kinderen (zowel met als <br> zonder handicap) <sup>(zie</sup> <br> <sup>NumberOfOtherHandicap voor extra info)<sup></td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NumberOfOther</td>
      <td>Aantal anderen ten laste leeftijd < 65 <br> jaar (zowel met als zonder <br> handicap) <sup>(zie NumberOfOtherHandicap voor <br> extra info)</sup></td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NumberOfChildrenHandicap</td>
      <td>Aantal kinderen die een handicap <br> hebben <sup>(zie NumberOfOtherHandicap voor <br> extra info)</sup></td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NumberOfOtherHandicap</td>
      <td>Aantal anderen ten laste leeftijd < 65 <br> jaar die een handicap hebben[2]</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Handicap</td>
      <td>Gehandicapt: <br> N: Nee <br> H: Ja</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>N</td>
    </tr>
    <tr>
      <td>HandicapPartner</td>
      <td>Partner gehandicapt: <br> N: Nee <br> H: Ja</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>N</td>
    </tr>
    <tr>
      <td>OtherPeople</td>
      <td>Diverse gezinslast: <br> N: Nee <br> X: Ja</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>N</td>
    </tr>
    <tr>
      <td>FIN</td>
      <td>Fiscaal ident. FIN</td>
      <td>Tekst(27)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>SendType</td>
      <td>Methode verzenden documenten: <br> 0: Brief - Afdrukken <br> 1: Email</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NumberOfPlus65</td>
      <td>Aantal anderen ten laste leeftijd <br> >= <br> 65 (zowel met als zonder <br> handicap) <sup>(zie NumberOfOtherHandicap voor <br> extra info)</sup></td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>NumberOfPlus65Handicap</td>
      <td>Aantal anderen ten laste leeftijd <br> >=65 die een handicap hebben <sup>(zie <br> NumberOfOtherHandicap voor extra info)</sup></td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
  </tbody>
</table>

[1] Rijkregisternummer of achternaam en voornaam zijn verplicht

[2] Indien een persoon 3 kinderen ten laste heeft waarvan 1 kind met een handicap dan zal veld NumberOfChilderen 3 zijn en veld NumberOfChilderenHandicap 1 zijn. Dezelfde wijze moet toegepast worden voor anderen ten laste.

#### 3.3.3 Dossierverantwoordelijken

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Code</td>
      <td>Code</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Naam dossier verantwoordelijke</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>Telefoonnummer</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Fax</td>
      <td>Fax</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>GSM</td>
      <td>GSM</td>
      <td>Tekst(20)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Email</td>
      <td>Email adres</td>
      <td>Tekst(254)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 3.3.4 Link aangever-bedrijfsleider

Dit bestand beschrijft welke bedrijfsleider tot welk dossier behoort. Een bedrijfsleider kan dus behoren tot meerdere dossiers en een dossier kan meerdere bedrijfsleiders hebben.

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DossierCode</td>
      <td>De code van aangever/dossier</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>ManagerCode</td>
      <td>De code van bedrijfsleider/zaakvoerder</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>JointCommittee</td>
      <td>Paritair comite</td>
      <td>Tekst(6)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Start</td>
      <td>In dienst</td>
      <td>Datum</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Stop</td>
      <td>Uit dienst</td>
      <td>Datum</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 3.3.5 Begunstigden

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031735651/original/nNrOR7jfut3UuDbTqLwuU93SvgvnK1hj0g.png?1663158653)

[1] Afhankelijk van aard begunstigde is bepaalde data verplicht:

1. Voor natuurlijke personen moet ofwel rijksregisternummer ofwel naam, voornaam en volledig adres ofwel zijn ondernemingsnummmer ingevuld worden.
2. Voor een Belgisch bedrijf moet altijd ondernemingsnummer ingevuld worden

Voor buitenlandse begunstigden zo volledig mogelijk invullen (naam, voornaam, adres, ...)

#### 3.3.6 Fiche 281.50

**De bedragen die hieronder vermeld staan zijn uitgedrukt in eurocent**. Maw er komt geen decimaal scheidingsteken voor in de getallen. Als u het bedrag 100,05 EUR heeft dan moet dit ingevuld worden als 10005 bij de velden waar een bedrag moet ingevuld worden.

<table>
  <thead>
    <tr>
      <th>Veldnaam</th>
      <th>Omschrijving</th>
      <th>Type veld (max)</th>
      <th>Verplicht</th>
      <th>Standaard <br> waarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Year</td>
      <td>Inkomstenjaar</td>
      <td>Nummer</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>DossierCode</td>
      <td>De code van aangever/dossier</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>SupplierCode</td>
      <td>De code van de begunstigde</td>
      <td>Tekst(25)</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td>Commissions</td>
      <td>Commissies, makelaarslonen, <br> handelsrestorno's, ... uitgedrukt in <br> eurocent. Als commissie 100,00 EUR is dan <br> moet hier 10000 ingevuld worden.</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Fees</td>
      <td>Erelonen of vacatiegelden uitgedrukt in <br> eurocent. Als ereloon 100,00 EUR is dan <br> moet hier 10000 ingevuld worden.</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Advantage</td>
      <td>Voordelen van alle aard uitgedrukt in <br> eurocent.</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>AdvantageNature</td>
      <td>Aard van de voordelen</td>
      <td>Tekst(32)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Costs</td>
      <td>Kosten gedaan voor rekening van de <br> verkrijger uitgedrukt in eurocent</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>SportRemuneration</td>
      <td>Het bedrag uitgedrukt in eurocent uit het <br> totaal dat betrekking heeft op vergoedingen <br> uitgekeurd aan sportbeoefenaars</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>ManagerRemuneration</td>
      <td>Het bedrag uitgedrukt in eurocent uit het <br> totaal dat betrekking heeft op vergoedingen <br> uitgekeurd aan opleiders, trainers en <br> begeleiders voor hun activiteiten ten <br> behoeve van sportbeoefenaars</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Payed</td>
      <td>Indien het totaal niet betaald dit jaar dan <br> moet hier het bedrag in eurocent ingevuld <br> worden dat betaald is dit jaar.</td>
      <td>Nummer</td>
      <td></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Nihil</td>
      <td>Mogelijke waardes: <br> Y: Indien er niets betaald is dit jaar <br> N: Indien niet van toepassing</td>
      <td>Tekst(1)</td>
      <td></td>
      <td>N</td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>Commentaar voor Belcotax</td>
      <td>Tekst(363)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### 3.4 Voorbeeld Excel bestand

De CSV bestanden kunnen aangemaakt worden via Excel. Hierbij moet het volgende gedaan worden:

- Eerste rij bevat de veldnamen

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031731933/original/hdOP2QXqB8i1X4N96rRaBSdPR4xJgr_U1Q.png?1663157993)

- De volgende rijen bevatten de data dat moet geïmporteerd worden

- Zorg dat datums en getallen in het juiste formaat worden geformatteerd zoals hierboven beschreven. Door rechtermuis te klikken op een cel kan de formattering ingesteld worden. Hierbij kan dus ingesteld worden dat de formattering van een datum veld jjjjmmdd moet zijn. Hieronder een voorbeeld om de datum 25/01/1951 te laten formattering zoals deze nodig is voor Belcofin.

![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031731934/original/n0oD_9iSCpY4VOpThysFlaT6j-S0iUHf2w.png?1663157993)

- Excel bestand kunt u bewaren als .xls of .xlsx bestand. Maar een .xls of .xlsx bestand kan niet geïmporteerd worden in Belcofin. Hiervoor moet het bestand eerst bewaard worden als eens \"Text (Tab delimited) (\*.txt)\" bestand.

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031731935/original/LYts_6AcR2P9R872_yvDkZnGheZb3uhzQg.png?1663157993)
