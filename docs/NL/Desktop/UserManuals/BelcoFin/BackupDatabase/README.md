# Desktop - BelcoFin - Backup Database

## 1. Inleiding

Er zijn 3 manieren om backups van Belcofin te maken:

- Manueel via de grafische user interface
- Manueel via command line parameters
- Automatische backup via taakplanner

Het wordt aangeraden om zeker te kiezen voor automatisch backup zodat uw gegevens van Belcofin steeds worden gebackupped.

Bij elke backup optie heeft u de mogelijkheid om naast de data ook de XML en PDF bestanden die aangemaakt zijn door Belcofin te backuppen. Indien deze bestanden op de file server staan en deze worden gebackupped door de file server dan is het niet noodzakelijk om ook de XML en PDF bestanden te backuppen.

## 2. Manueel Backup via Grafische User Interface

Op volgende manier kunt u manueel een backup nemen:

1. Belcofin opstarten

2. Menu>Start>Backup

3. U selecteert de locatie waar de backup moet komen en selecteert of naast de backup van de data ook de PDF en XML bestanden die zijn aangemaakt door Belcofin moeten gebackupped worden.

4. Als u de optie 'Datum invoegen in zip-bestand' aanvinkt dan zal de huidige datum en tijd toegevoegd worden aan de bestandsnaam van de backup. Indien u dat niet doet zal de naam van de backup de naam van de Belcofin database zijn wat in de meeste gevallen Belcofin zal zijn.

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031739111/original/qmSqEL695kMUt0B2RGUcLaruNbD5xDjjBg.png?1663159298)

5. Klik op Start backup

6. De melding Back-up gemaakt onderaan het scherm wordt getoond als alles goed is verlopen

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031739263/original/x-k1crlYxvSVWXfZuZRxAPBedodoqvGrAw.png?1663159316)

## 3. Manueel Backup via command line parameters

Via het programma BelcofinCmd.exe, dat u in de Belcofin Client directory kunt vinden, kunt u backups maken gebruik makend van command line parameters.

Mogelijke command line parameters zijn:

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
      <td>X[①]</td>
    </tr>
    <tr>
      <td>/ipaddress:&lt;ip adres&gt;</td>
      <td>IP adres van de Belcofin server.</td>
      <td>X①</td>
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
      <td>De taal van de foutmeldingen: <ul><li>N: Nederlands</li> <li>F: Frans</li></ul></td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupPath:&lt;pad&gt;</td>
      <td>Het pad waar de backup wordt bewaard</td>
      <td>X</td>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupXml</td>
      <td>Als deze parameter gebruikt wordt dan worden <br> ook de XML bestanden, die aangemaakt zijn <br> door Belcofin, gebackupped.</td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupPdf</td>
      <td>Als deze parameter gebruikt wordt dan worden <br> ook de PDF bestanden, die aangemaakt zijn <br> door Belcofin, gebackupped.</td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupIncludeDate</td>
      <td>Als deze parameter gebruikt wordt dan wordt <br> de huidige datum en tijd toegevoegd aan de <br> naam van het backup bestand.</td>
      <td></td>
    </tr>
    <tr>
      <td>/logfile: &lt;bestandsnaam&gt;</td>
      <td>De locatie en naam van het bestand waar de <br> logging informatie van de backup in staat. Als <br> deze parameter niet gebruikt wordt dan wordt <br> geen log bestand aangemaakt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>Als deze parameter wordt toegevoegd dan <br> wordt naast de fouten ook extra logging <br> informatie getoond en/of weggeschreven in het <br> log bestand. </td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>Als deze parameter gebruikt wordt dan wordt <br> log bestand overschreven telkens het <br> programma wordt uitgevoerd. Als de parameter <br> niet wordt gebruikt dan wordt de logging steeds <br> toegevoegd aan bestaande logbestand.</td>
      <td></td>
    </tr>
  </tbody>
</table>

[①] Ofwel de naam van de server ofwel IP adres is verplicht. Als beide worden meegeven dan wordt de host naam gebruikt.

<ins>Voorbeeld</ins>:

belcofinCmd.exe /host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

## 4. Automatische backup via taakplanner

### 4.1 Inleiding

**Belangrijke opmerkingen** voordat u aan de configuratie van de automatische backup begint:

1. De automatische backup wordt bij voorkeur op de server geconfigureerd en niet op een werkstation
2. De Belcofin Client moet op de server geïnstalleerd zijn
3. Als u de backup instelt op een tijdstip waarop de computer niet draait dan zullen er geen backups genomen worden vandaar dat bij voorkeur automatische backups op een server worden ingesteld omdat deze meestal nooit worden afgezet.

### 4.2 Windows 2003/Windows XP:

1. U opent Geplande taken door achtereenvolgens te klikken op de knop **Start** <img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031740447/original/k-Ynrl02L9DrNCyqI2LAulBU0sWWzKJs8w.png?1663159557" alt="Windows icon" width="41"> , op **Configuratiescherm**, op **Geplande taken**
2. Dubbelklik op **Een nieuwe taak toevoegen**
3. Een wizard zal opstarte, klik op **Volgende** gebackupped

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031740480/original/OI22lNT88ezMEs1plBQi9OvsXSwkdQsQQQ.png?1663159565)

4. Klik op **Bladeren** om het programma **BelcofinCmd.exe** te selecteren. Standaard staat dit programma in C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe.

<strong><ins>Belangrijk</ins></strong>: U moet BelcofinCmd.exe selecteren en niet Belcofin.exe!

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031740802/original/EIjr5YdOJWAWNa_7LZZ9G6Za5nauPLdlsg.png?1663159630)

5. Vul als naam **Belcofin Backup** en klik op **Dagelijks** en daarna op de knop **Volgende**

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741102/original/LYLfvFzmsnI7xw_ZGx3Ms0ezn3Fynmh-Uw.png?1663159696)

6. Vul een **uur** in waarop de backup moet uitgevoerd worden. Kies een uur waarop uw computer zeker aan staat anders worden er geen backups genomen.
   Als start datum moet een datum gelijk aan vandaag of een dag in het verleden worden ingesteld. Geen datum in de toekomst want anders gaan de backups pas vanaf deze datum worden uitgevoerd.

Klik op **Volgende**.

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741103/original/Hea6GsawhRnrRRczAdadjvFWyQ392OufcQ.png?1663159696)

7. Windows Gebruikersnaam en Wachtwoord invullen van een gebruiker die volgende rechten heeft op deze computer om deze taak te kunnen uitvoeren.

Druk op **Volgende**

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741105/original/UQ_2jA5A7EtmKc7PomPm_Jd0YoTqxAzuqg.png?1663159696)

8. De optie '**Geavanceerde eigenschappen voor deze taak openen wanneer ik op Voltooien klik**' aanvinken.
   Op **Voltooien** klikken

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741106/original/U-prCCRvzXMywEHwfiZKh_0V1CLX8VomFA.png?1663159697)

9. De waarde naast Uitvoeren moet aangepast worden. De command line parameters voor de backup moeten er namelijk aan toegevoegd worden zoals wat er moet gebackupped worden, naar waar, ...
   Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Backup via command line parameters.
   Een voorbeeld van de waarde van Uitvoeren kan zijn: C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe /host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741108/original/hO65aA95WU8Yy_Rqx2U_ZV4CnfombP0WPQ.png?1663159697)

10. Op **OK** klikken en wachtwoord opnieuw invullen van de windows gebruiker

### 4.3 Windows 2008/Windows Vista/Windows 7:

1. De knop **Start** ![small image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742052/original/hSIqatrr-pey3CgBAClc5D2nFkPj1rQxxQ.jpeg?1663159892), op **Configuratiescherm**, op **Systeem en beveiliging** en op **Systeembeheer** , en vervolgens te dubbelklikken op **Taakplanner**.‌ ![small image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742053/original/eoIsHshJkmDd-04cWJoNEiT0GP_VsbcHww.jpeg?1663159892) Als u om het beheerderswachtwoord of een bevestiging wordt gevraagd, typt u het wachtwoord of een bevestiging..

2. Klik op het menu **Actie** en klik op **Basistaak maken**.

3. Typ als naam 'Belcofin Backup' voor de taak en klik op **Volgende**.

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742058/original/Q1etfUhf68vwFbLIXv5spfrTstJ4v05EXw.png?1663159892)

4. Klik op **Dagelijks** als u dagelijks een backup wil maken van Belcofin en daarna op **Volgende**

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742056/original/krJRsG4a7vnZPRupFwKSVIAFJmPy3kOnUQ.png?1663159892)

5. Geef de gewenste planning op en klik op **Volgende**.

<strong><ins>Opmerkingen</ins></strong>:

Kies een uur waarop uw computer zeker aan staat anders worden er geen backups genomen

Als start datum moet een datum gelijk aan vandaag of een dag in het verleden worden ingesteld. Geen datum in de toekomst want anders gaan de backups pas vanaf deze datum worden uitgevoerd.

![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742059/original/uxAPvaBTbZUSGHdONLF2Clrh_9Nu_pYc3w.png?1663159892)

Klik op **Programma starten** en klik op **Volgende**

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742062/original/Lx8UVnJzCLQduDM7LB7F4rmysGRNEfOBGg.png?1663159892)

Configuratie van Programma starten:

1. Klik op **Bladeren** om het programma **BelcofinCmd.exe** te selecteren. Standaard staat dit programma in C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe.
   <br> <strong><ins>Belangrijk</ins></strong>: U moet BelcofinCmd.exe selecteren en niet Belcofin.exe!
2. Bij'Parameters toevoegen (optioneel)' moet u de parameters van de backup invullen. Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Backup via command line parameters
   <br> Een voorbeeld kan zijn: /host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

3. Klik vervolgens op **Volgende**

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742060/original/XDH_4OR1SrDqhChU-sitjOjykGE_xf2dqQ.png?1663159892)

1.  Het vinkje '**Het dialoogvenster Eigenschappen van deze taak openen als ik op Voltooien klik**' aanzetten en op **Voltooien** klikken.

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742064/original/a4Fc5YQZZ9rweWtTgyUMG_UoYA9Z139FNw.png?1663159892)

3. De optie '**Uitvoeren ongeacht of gebruiker wel of niet is aangemeld**' aanzetten en op **OK** klikken.

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742063/original/o2nRaxrNvxf_THJ1KQplnNYZXFpxYwr3WA.png?1663159892)

7. Configuratie van Programma starten:
   1. Klik op Bladeren om het programma BelcofinCmd.exe te selecteren. Standaard staat dit programma in C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe.

<strong><ins>Belangrijk</ins></strong>: U moet BelcofinCmd.exe selecteren en niet Belcofin.exe!

    2. B. Bij 'Parameters toevoegen (optioneel)' moet u de parameters van de backup invullen. Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Backup via command line parameters

Een voorbeeld kan zijn:

/host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

C. Klik vervolgens op **Volgende**

8. Het vinkje 'Het dialoogvenster Eigenschappen van deze taak openen als ik op Voltooien klik' aanzetten en op
   voltooien klikken.

9. De optie 'Uitvoeren ongeacht of gebruiker wel of niet is aangemeld' aanzetten en op OK klikken.

# 5. Restore backup

Een backup kan teruggezet worden door:

1. Belcofin opstarten
2. Menu > Start > Restore
3. Het backup bestand selecteren
4. Selectie maken of u eventueel ook de XML en/of PDF bestanden wilt terugplaatsen
5. Op de '**Start Restore**' knop drukken
