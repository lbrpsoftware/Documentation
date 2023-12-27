# 1. Inleiding

Er zijn 3 manieren om backups van Finasset te maken:

- Manueel via de grafische user interface
- Manueel via command line parameters
- Automatische backup via taakplanner

Het wordt aangeraden om zeker te kiezen voor automatisch backup zodat uw gegevens van Finasset steeds worden gebackupped.

## 2. Manueel Backup via Grafische User Interface

Op volgende manier kunt u manueel een backup nemen:

1. Finasset opstarten
2. Menu ▶️ Start ▶️ Backup
3. U selecteert de locatie waar de backup moet bewaard worden.
4. Als u de optie 'Datum invoegen in zip-bestand' aanvinkt dan zal de huidige datum en tijd toegevoegd worden aan de bestandsnaam van de backup. Indien u dat niet doet zal de naam van de backup de naam van de Finasset database zijn wat in de meeste gevallen Finasset zal zijn.

![image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339832/original/-hO64DcNWSyk7WxkaxsrFrPZF8_BYpwyqw.png?1643376954)

5. Klik op Start
6. De melding Back-up gemaakt onderaan het scherm wordt getoond als alles goed is verlopen

![image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339833/original/DCFo4eNOuaSbXV8CVTPmZTiUB79lyKDzrg.png?1643376954)

<!--

width="40" height="40"

![]()
<img src="" alt="" width="400" >

-->

## 3. Manueel Backup via command line parameters

Via het programma FinassetCmd.exe, dat u in de Finasset Client directory kunt vinden, kunt u backups maken gebruik makend van command line parameters.

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
      <td>De naam van de Finasset server</td>
      <td>✅1️⃣</td>
    </tr>
    <tr>
      <td>/ipaddress:&lt;ip adres&gt;</td>
      <td>IP adres van de Finasset server.</td>
      <td>✅1️⃣</td>
    </tr>
    <tr>
      <td>/port:&lt;poort nummer&gt;</td>
      <td>Poort van de server. Als niet meegegeven dan wordt de<br> standaard poort nummer gebruikt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/db:&lt;database naam&gt;</td>
      <td>Naam van de database. Als niet meegegeven dan wordt<br> de standaard database van Finasset gebruikt.</td>
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
      <td>/BackupPath:&lt;pad&gt;</td>
      <td>Het pad waar de backup wordt bewaard</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>/BackupIncludeDate</td>
      <td>Als deze parameter gebruikt wordt dan wordt de huidige<br> datum en tijd toegevoegd aan de naam van het backup<br> bestand.</td>
      <td></td>
    </tr>
    <tr>
      <td>/logfile: &lt;bestandsnaam&gt;</td>
      <td>De locatie en naam van het bestand waar de logging<br> informatie van de backup in staat. Als deze parameter<br> niet gebruikt wordt dan wordt geen log bestand<br> aangemaakt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>Als deze parameter wordt toegevoegd dan wordt naast<br> de fouten ook extra logging informatie getoond en/of<br> weggeschreven in het log bestand.</td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>Als deze parameter gebruikt wordt dan wordt log<br> bestand overschreven telkens het programma wordt<br> uitgevoerd. Als de parameter niet wordt gebruikt dan<br> wordt de logging steeds toegevoegd aan bestaande<br> logbestand.</td>
      <td></td>
    </tr>
  </tbody>
</table>

1️⃣ Ofwel de naam van de server ofwel IP adres is verplicht. Als beide worden meegeven dan wordt de host naam gebruikt.

<strong><ins>Voorbeeld</ins></strong>:

FinassetCmd.exe <br>
/host:localhost /db:Finasset /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Finasset\\\_Backup

## 4. Automatische backup via taakplanner

### 4.1 Inleiding

<strong>Belangrijke opmerkingen</strong> voordat u aan de configuratie van de automatische backup begint:

1. De automatische backup wordt bij voorkeur op de server geconfigureerd en niet op een werkstation
2. De Finasset Client moet op de server geïnstalleerd zijn
3. Als u de backup instelt op een tijdstip waarop de computer niet draait dan zullen er <strong>geen backups</strong> genomen worden vandaar dat bij voorkeur automatische backups op een server worden ingesteld omdat deze meestal nooit worden afgezet.

### 4.2 Windows 2003/Windows XP:

1. U opent Geplande taken door achtereenvolgens te klikken op de knop <strong>Start</strong> <img alt="Windows Start icon" src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339831/original/LiRpnw_fvi0uCk0rRXoViquF5Nr2ZxE1FA.png?1643376954" height="18" />, op <strong>Configuratiescherm</strong>, op <strong>Geplande taken</strong>
2. Dubbelklik op <strong>Een nieuwe taak toevoegen</strong>
3. Een wizard zal opstarte, klik op <strong>Volgende</strong> gebackupped

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339845/original/M60WxmgMGre2pczoZsTt9o6VIOV_mLxcTQ.png?1643376955)

4. Klik op <strong>Bladeren</strong> om het programma <strong>FinassetCmd.exe</strong> te selecteren. Standaard staat dit programma in C:\\LBRP\\Clients\\Finasset\\FinassetCmd.exe.

<strong><ins>Belangrijk</ins></strong>: U moet FinassetCmd.exe selecteren en niet Finasset.exe!

![image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339840/original/pb1vWG8Hrp_z7w5S7PP897p2_sB8j8aHgw.png?1643376955)

5. Vul als naam Finasset Backup en klik op Dagelijks en daarna op de knop Volgende

![image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339837/original/-211oubCxN8Qw2w1M3sQyJAQlGA1iICD7g.png?1643376955)

6. Vul een uur in waarop de backup moet uitgevoerd worden. Kies een uur waarop uw computer zeker aan staat anders worden er geen backups genomen.

   Als start datum moet een datum gelijk aan vandaag of een dag in het verleden worden ingesteld. Geen datum in de toekomst want anders gaan de backups pas vanaf deze datum worden uitgevoerd.

   Klik op <strong>Volgende</strong>.

   ![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339839/original/jDrlkeqiGt-NWNVA9wohJufXQ7DWCHmC9w.png?1643376955)

7. Windows Gebruikersnaam en Wachtwoord invullen van een gebruiker die volgende rechten heeft op deze computer om deze taak te kunnen uitvoeren.

   Druk op <strong>Volgende</strong>

   ![image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339843/original/8ySkVV9h68IVXKYbDZF0ejP_PswoR3ndBA.png?1643376955)

8. De optie '<strong>Geavanceerde eigenschappen voor deze taak openen wanneer ik op Voltooien klik</strong>' aanvinken.

   Op <strong>Voltooien</strong> klikken

9. De waarde naast <strong>Uitvoeren</strong> moet aangepast worden. De command line parameters voor de backup moeten er namelijk aan toegevoegd worden zoals wat er moet gebackupped worden, naar waar, ...

   Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Backup via command line parameters.

   Een voorbeeld van de waarde van Uitvoeren kan zijn: C:\\LBRP\\Clients\\Finasset\\FinassetCmd.exe /host:localhost /db:Finasset /BackupPath:C:\\LBRP\\Clients\\Finasset\\\_Backup

   ![image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339844/original/rTgKw6dFkFi0yAKeYvhkpdG_TnMZfM60tg.png?1643376955)

10. Op <strong>OK</strong> klikken en wachtwoord opnieuw invullen van de windows gebruiker

### 4.3 Windows 2008/Windows Vista/Windows 7

1. De knop <strong>Start</strong> ![image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339842/original/4eISMDy82XRRUkajOYH88fuzsB2SjdYQAg.jpeg?1643376955), op <strong>Configuratiescherm</strong>, op <strong>Systeem en beveiliging</strong> en op <strong>Systeembeheer</strong>, en vervolgens te dubbelklikken op <strong>Taakplanner</strong>.‌ ![image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339838/original/kczUalE8ifIpjMh67oyJk_VAVrkF0vx7Ew.jpeg?1643376955) Als u om het beheerderswachtwoord of een bevestiging wordt gevraagd, typt u het wachtwoord of een bevestiging..
2. Klik op het menu <strong>Actie</strong> en klik op <strong>Basistaak maken</strong>.
3. Typ als naam 'Finasset Backup' voor de taak en klik op <strong>Volgende</strong>.

   ![image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339847/original/4xlK50P7aJUElsCiwHzo6zShhAbSafcCFg.png?1643376955)

4. Klik op <strong>Dagelijks</strong> als u dagelijks een backup wil maken van Finasset en daarna op <strong>Volgende</strong>

   ![image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339846/original/w23sTT-ToWdhLxN_g3Mn6xZdBwyxz6KY_A.png?1643376955)

5. Geef de gewenste planning op en klik op Volgende.

   <strong><ins>Opmerkingen</ins></strong>:

   1. Kies een uur waarop uw computer zeker aan staat anders worden er geen backups genomen
   2. Als start datum moet een datum gelijk aan vandaag of een dag in het verleden worden ingesteld. Geen datum in de toekomst want anders gaan de backups pas vanaf deze datum worden uitgevoerd.

![image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339848/original/JZF5Bc1_DGyEKL2tCLQ_E0VA3Nb7ixQeng.png?1643376955)

1. Klik op <strong>Programma starten</strong> en klik op <strong>Volgende</strong>

   ![image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339849/original/p7blqLL50axcdG_s_KAaonhVcsdZjWAQ9w.png?1643376955)

2. Configuratie van Programma starten:

   1. Klik op <strong>Bladeren</strong> om het programma <strong>FinassetCmd.exe</strong> te selecteren. Standaard staat dit programma in C:\\LBRP\\Clients\\Finasset\\FinassetCmd.exe <br>

      <strong><ins>Belangrijk</ins></strong>: U moet FinassetCmd.exe selecteren en niet Finasset.exe!

   2. Bij'Parameters toevoegen (optioneel)' moet u de parameters van de backup invullen. Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Backup via command line parameters

Een voorbeeld kan zijn: /host:localhost /db:Finasset /BackupPath:C:\\LBRP\\Clients\\Finasset\\\_Backup

1. Klik vervolgens op <strong>Volgende</strong>

![image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339850/original/faeVhgF_KXQ-taZDjOhU3EHUCfmXxd53OQ.png?1643376955)

1. Het vinkje '<strong>Het dialoogvenster Eigenschappen van deze taak openen als ik op Voltooien klik</strong>' aanzetten en op <strong>Voltooien</strong> klikken

   ![image 17](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339851/original/5f_b8YsM39fgsIWb6mmKsMQVC5it0Xt7Kg.png?1643376955)

2. De optie '<strong>Uitvoeren ongeacht of gebruiker wel of niet is aangemeld</strong>' aanzetten en op <strong>OK</strong> klikken.

   ![image 18](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101003339852/original/z4H6b3vgQNrXpn1rnzpOdJdYh3tkdOkW4Q.png?1643376955)

## 5. Restore backup

Een backup kan teruggezet worden door:

1. Finasset opstarten
2. Menu > Start > Restore
3. Het backup bestand selecteren
4. Op de 'Start Restore' knop drukken

[①] Ofwel de naam van de server ofwel IP adres is verplicht. Als beide worden meegeven dan wordt de host naam gebruikt.

<!-- Text from:

✅ https://support.corpgroup.site/nl/support/solutions/articles/101000241368
✅ 1,041 words, 6,761 characters
✅ BASIC package is $15 for max of 1600 words

📌 Format question: look at the test under "Voorbeeld" - the web page shows 2 lines. Should it be 1 line with a colon after .exe and all the apaces removed? Let me know.
📌 FYI, I'm using <strong> tags instead of double asterisks because it's easier. Let me know if you prefr the asterisks instead.
📌 There is a change in the left margin starting at list item 6 - let me know what you think

-->
