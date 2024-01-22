# 1. Inleiding

Er zijn 3 manieren om back-ups van Accowin te maken:

- Manueel via de grafische user interface
- Manueel via command line parameters
- Automatische back-up via taakplanner

Het wordt aangeraden om zeker te kiezen voor automatisch back-up zodat uw gegevens van Accowin steedsworden geback-upped.

Bij elke back-up optie heeft u de mogelijkheid om van één, meerdere of alle dossiers een back-up te maken..

# 2. Manueel Back-up via Grafische User Interface

Op volgende manier kunt u manueel een back-up nemen:

1. Accowin opstarten

2. Menu > Start > **Back-up**

3. U selecteert de locatie waar de back-up moet komen en selecteert of er enkel een back-up moet worden gemaakt van het huidige dossier of van alle dossiers.

4. Als u de optie aanvinkt, zal van alle dossiers een back-up worden gemaakt, indien dit vinkje niet aan staat, wordt enkel een back-up gemaakt van het huidig actieve dossier.

<table>
  <tbody>
    <tr>
      <td><img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101014437639/original/IKsTn0AJR1f6NcEOweaW6GV-jJFFWC1PLQ.png?1653473413" alt="Image 1" height="253"></td>
      <td><img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101014437672/original/7G2Lg7xpSoRJz7vkbMzdiHpVHGfHXUCh2A.png?1653473420" alt="Image 2" height="253"></td>
    </tr>
  </tbody>
</table>

5. Klik op Start back-up

6. De melding Back-up gemaakt onderaan het scherm wordt getoond als alles goed is verlopen

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101014437986/original/aV2DDt8J_B4k8m0IHguMvSchAqe4uuK3ug.png?1653473504)

# 3. Manueel Back-up via command line parameters

Via het programma AccowinCmd.exe, dat u in de Accowin Client directory kunt vinden, kunt u back-ups maken gebruik makend van command line parameters.

[Mogelijke command line parameters zijn](https://www.notion.so/b42f88cc0e0b49aca64f515f9c8784c3):

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
      <td>De naam van de Accowin server</td>
      <td>①</td>
    </tr>
    <tr>
      <td>/ipaddress:&lt;ip adres&gt;</td>
      <td>IP adres van de Accowin server.</td>
      <td>①</td>
    </tr>
    <tr>
      <td>/port:&lt;poort nummer&gt;</td>
      <td>Poort van de server. Als niet meegegeven dan wordt de standaard poort <br> nummer gebruikt</td>
      <td></td>
    </tr>
    <tr>
      <td>/LocalPath:&lt;pad&gt;</td>
      <td>Het pad waar het configuratiebestand van Accowin staat als er geen <br> server is geïnstalleerd. <br> <strong><u>Voorbeeld</u></strong>:
        <ul>
          <li>C:\LBRP\Clients\Accowin</li>
          <li>C:\Accowin</li>
        </ul>
      </td>
      <td>②</td>
    </tr>
    <tr>
      <td>/db:&lt;database naam&gt;</td>
      <td>Naam van de database. Als niet meegegeven dan wordt de standaard <br> database van Accowin gebruikt.</td>
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
      <td>Het pad waar de back-up wordt bewaard</td>
      <td>X</td>
    </tr>
    <tr>
      <td>/BackupAll</td>
      <td>Als deze parameter gebruikt wordt, dan worden er back-ups gemaakt <br> van alle dossiers</td>
      <td>③</td>
    </tr>
    <tr>
      <td>/BackupDossier:&lt;Dossierkode&gt;</td>
      <td>Als deze parameter gebruikt wordt, wordt er een back-up gemaakt <br> van het dossier met de opgegeven dossiercode, deze parameter kan <br> meermaals worden gebruikt om een back-up te maken van meerdere <br> dossiers</td>
      <td>③</td>
    </tr>
    <tr>
      <td>/logfile: &lt;bestandsnaam&gt;</td>
      <td>De locatie en naam van het bestand waar de logging informatie van de <br> back-up in staat. Als deze parameter niet gebruikt wordt dan wordt geen <br> log bestand aangemaakt.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>	Als deze parameter wordt toegevoegd dan wordt naast de fouten ook <br> extra logging informatie getoond en/of weggeschreven in het log <br> bestand.</td>
      <td></td>
    </tr>
    <tr>
      <td>/logserver</td>
      <td>Als deze parameter wordt toegevoegd dan worden de gegevens die met <br> de server worden uitgewisseld ook gelogd. (Enkel van toepassing als <br> server is geïnstalleerd)</td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>	Als deze parameter gebruikt wordt dan wordt log bestand overschreven <br> telkens het programma wordt uitgevoerd. Als de parameter niet wordt <br> gebruikt dan wordt de logging steeds toegevoegd aan bestaande <br> logbestand.</td>
      <td></td>
    </tr>
  </tbody>
</table>

① Indien Accowin werd geïnstalleerd met gebruik van de server, is de naam van de server ofwel het IP adres verplicht. Als beide worden meegeven dan wordt de host naam gebruikt.

② Indien Accowin werd geïnstalleerd zonder gebruik van een server (standaard bij installatie op 1 PC of op bij installatie op een NAS, moet deze parameter worden gebruikt.

③ De parameter BackupAll of BackupDossier moet worden gebruikt

<ins>Voorbeeld bij installatie met server</ins>

AccowinCmd.exe /host:localhost /BackupPath:C:\\LBRP\\Clients\\Accowin\\\_Back-up /BackupAll

<ins>Voorbeeld bij installatie zonder server</ins>

AccowinCmd.exe /LocalPath:C:\\LBRP\\Clients\\Accowin /BackupPath:C:\\LBRP\\Clients\\Accowin\\\_Back-up /BackupAll

# 4. Automatische back-up via taakplanner

## 4.1 Inleiding

**Belangrijke opmerkingen** voordat u aan de configuratie van de automatische back-up begint:

1. De automatische back-up wordt bij voorkeur op de server geconfigureerd en niet op een werkstation
2. De Accowin Client moet op de server geïnstalleerd zijn
3. Als u de back-up instelt op een tijdstip waarop de computer niet draait dan zullen er **geen back-ups** genomen worden vandaar dat bij voorkeur automatische back-ups op een server worden ingesteld, omdat deze meestal nooit worden afgezet.

## 4.2 Windows 2003/Windows XP

1. U opent Geplande taken door achtereenvolgens te klikken op de knop Start , op Configuratiescherm, op Geplande taken

2. Dubbelklik op **Een nieuwe taak toevoegen**

3. Een wizard zal opstarte, klik op **Volgende**

![Image 4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23ff0702-7b5d-4a72-a181-9720c0f2c0ad/Untitled.png)

4. Klik op **Bladeren** om het programma **AccowinCmd.exe** te selecteren. Standaard staat dit programma in <br> C:\\LBRP\\Clients\\Accowin\\AccowinCmd.exe. Belangrijk: U moet AccowinCmd.exe selecteren en niet Accowin.exe!

![Image 5](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2581bc5-fcb3-464c-91e6-de775e3673f7/Untitled.png)

5. Vul als naam **Accowin Back-up** en klik op **Dagelijks** en daarna op de knop **Volgende**

![Image 6](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/530e192d-3244-47df-941e-093512dc303d/Untitled.png)

6. Vul een uur in waarop de back-up moet uitgevoerd worden. Kies een uur waarop uw computer zeker aan staat anders worden er geen back-ups genomen. Als start datum moet een datum gelijk aan vandaag of een dag in het verleden worden ingesteld. Geen datum in de toekomst want anders gaan de back-ups pas vanaf deze datum worden uitgevoerd. Klik op Volgende.

![Image 7](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79271199-1047-46ef-a351-175e9be71c98/Untitled.png)

7. Windows Gebruikersnaam en Wachtwoord invullen van een gebruiker die volgende rechten heeft op deze computer om deze taak te kunnen uitvoeren. Druk op Volgende

![Image 8](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79271199-1047-46ef-a351-175e9be71c98/Untitled.png)

8. De optie 'Geavanceerde eigenschappen voor deze taak openen wanneer ik op Voltooien klik' aanvinken. Op Voltooien klikken

![Image 9](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/249f7625-0fa9-43bc-a40c-653adcb78f9f/Untitled.png)

9. De waarde naast Uitvoeren moet aangepast worden. De command line parameters voor de back-up moeten er namelijk aan toegevoegd worden zoals wat er moet geback-upped worden, naar waar, ... Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Back-up via command line parameters. Een voorbeeld van de waarde van Uitvoeren kan zijn: <br> AccowinCmd.exe/LocalPath:C:\\LBRP\\Clients\\AccowinBackupPath:C:\\LBRP\\Clients\\Accowin\\\_Backup/BackupAll

![Image 10](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f919c73c-194e-4c08-93dd-7e5d2008be63/Untitled.png)

10. Op OK klikken en wachtwoord opnieuw invullen van de windows gebruiker

![Image 11](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28bf2fd0-739d-427e-839d-9b1aa9eb37b1/Untitled.png)

## 4.3 Windows 2008/Windows Vista/Windows 7

1. De knop Start , op Configuratiescherm, op Systeem en beveiliging en op Systeembeheer , en vervolgens te dubbelklikken op Taakplanner. Als u om het beheerderswachtwoord of een bevestiging wordt gevraagd, typt u het wachtwoord of een bevestiging..

2. Klik op het menu Actie en klik op Basistaak maken.

3. Typ als naam 'Accowin Backup' voor de taak en klik op Volgende.

![Image 12](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7215bc6b-3b9c-4a21-b079-cb13d47c59d6/Untitled.png)

4. Klik op Dagelijks als u dagelijks een back-up wil maken van Accowin en daarna op Volgende

![Image 13](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7246ef07-51d3-458d-98b5-35fd7129598b/Untitled.png)

5. Geef de gewenste planning op en klik op Volgende Opmerkingen:

   1. Kies een uur waarop uw computer zeker aan staat anders worden er geen back-ups genomen

   2. Als start datum moet een datum gelijk aan vandaag of een dag in het verleden worden ingesteld. Geen datum in de toekomst want anders gaan de back-ups pas vanaf deze datum worden uitgevoerd.

   ![Image 14](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/615c0946-13eb-4a3e-b2cb-d6d5c2d89ad3/Untitled.png)

6. Klik op Programma starten en klik op Volgende

![Image 15](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a264aa3-937e-454a-9d4c-ec66ea989b3b/Untitled.png)

7. Configuratie van Programma starten:

   1. Klik op Bladeren om het programma AccowinCmd.exe te selecteren. Standaard staat dit programma in <br> C:\\LBRP\\Clients\\Accowin\\AccowinCmd.exe. Belangrijk: U moet AccowinCmd.exe selecteren en niet Accowin.exe!
   2. Bij'Parameters toevoegen (optioneel)' moet u de parameters van de back-up invullen. Meer uitleg over welke parameters kunt u vinden hierboven bij 3 Manueel Back-up via command line parameters

![Image 16](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/980036b0-ab67-4ac7-9d5f-1154e7952bc6/Untitled.png)

8.  Voorbeeld met server: /Host:localhost /BackupPath:c:\\Accowin\\\_backup /BackupAll - Klik vervolgens op Volgende

9.  Het vinkje 'Het dialoogvenster Eigenschappen van deze taak openen als ik op Voltooien klik' aanzetten en op Voltooien klikken.

![Image 17](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/709173a1-0cbe-48f3-b4f6-d5922380f492/Untitled.png)

10. De optie 'Uitvoeren ongeacht of gebruiker wel of niet is aangemeld' aanzetten en op OK klikken.

![Image 18](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5e5f0ad-4b1d-44ce-8f77-7a7a48963456/Untitled.png)

# 5. Terugzetten van de dossiers via Restore

Een back-up kan teruggezet worden door Accowin te starten en het menu Start > Restore te selecteren

Het terugzetten van de dossiers gebeurt dossier per dossier, het is echter niet nodig eerst het dossier aan te maken in Accowin. Indien het dossier nog niet bestaat, wordt dit automatisch aangemaakt. Selecteer de map waar de bestanden die zijn aangemaakt via de back-up, en selecteer daar een dossier om terug te zetten. De gegevens over het dossier worden getoond.

Klik op de knop **_< Start Restore >_**om de gegevens terug te zetten.

![Image 19](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e57ec31-396a-4e34-8cb1-b9e01928f0d4/Untitled.png)

<!-- Text from:

✅ AccoWin/BackupDatabase: https://support.corpgroup.site/nl/support/solutions/articles/101000240163
✅ 1195 words
✅ 7400-3867-2526 = 1007-1195 = +188 over (+1453 over from previous order) = +1641 over

📌 Double backslashes (\\) for file paths in this file as well
📌 The images in section "2. Manueel Back-up via Grafische User Interface" are side by side so they are in a table. The 2nd image is much larger than the 1st so I set both images to be the height of the 1st": height="253"
📌 The images in the section "4.2 Windows 2003/Windows XP" have bad src attribute values but I copied those values rather than leave them blank
📌 The same is true for the images in sections 4.3 and 5
📌 In 4.3 for "7. Configuratie van Programma starten:" I had to move the image below the sub-items because it messed up the ordering of the sub-list items

-->
