# Desktop - AccoWin - Backup Database

## 1. Introduction

There are 3 ways to make backups of Accowin:

- Manually via the graphical user interface
- Manually via command line parameters
- Automatic backup via task scheduler

It is recommended to definitely choose automatic backup so that your Accowin data is always backed up.

With every backup option you have the possibility to make a backup of one, several or all dossiers.

## 2. Manual Backup via Graphical User Interface

You can manually take a backup in the following way:

1. Start Accowin

2. Menu > Start > **Back-up**

3. You select the location where the backup should go and select whether a backup should only be made of the current dossier or of all dossiers.

4. If you check the option, a backup will be made of all dossiers; if this checkbox is not on, only a backup is made of the currently active dossier.

<table>
  <tbody>
    <tr>
      <td><img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101014437639/original/IKsTn0AJR1f6NcEOweaW6GV-jJFFWC1PLQ.png?1653473413" alt="Image 1" height="253"></td>
      <td><img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101014437672/original/7G2Lg7xpSoRJz7vkbMzdiHpVHGfHXUCh2A.png?1653473420" alt="Image 2" height="253"></td>
    </tr>
  </tbody>
</table>

5. Click on Start backup

6. The message Backup created at the bottom of the screen is shown if everything went well

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101014437986/original/aV2DDt8J_B4k8m0IHguMvSchAqe4uuK3ug.png?1653473504)

## 3. Manual Backup via command line parameters

Via the program AccowinCmd.exe, which you can find in the Accowin Client directory, you can make backups using command line parameters.

[Possible command line parameters are](https://www.notion.so/b42f88cc0e0b49aca64f515f9c8784c3):

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/host:<host name></td>
      <td>The name of the Accowin server</td>
      <td>①</td>
    </tr>
    <tr>
      <td>/ipaddress:<ip address></td>
      <td>IP address of the Accowin server.</td>
      <td>①</td>
    </tr>
    <tr>
      <td>/port:<port number></td>
      <td>Port of the server. If not provided, the default port <br/> number is used</td>
      <td></td>
    </tr>
    <tr>
      <td>/LocalPath:<path></td>
      <td>The path where the Accowin configuration file is located if no <br/> server is installed. <br/> <strong><u>Example</u></strong>:
        <ul>
          <li>C:\LBRP\Clients\Accowin</li>
          <li>C:\Accowin</li>
        </ul>
      </td>
      <td>②</td>
    </tr>
    <tr>
      <td>/db:<database name></td>
      <td>Name of the database. If not provided, the default <br/> Accowin database is used.</td>
      <td></td>
    </tr>
    <tr>
      <td>/language:<language></td>
      <td>The language of the error messages:
        <ul>
          <li>N: Dutch</li>
          <li>F: French</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupPath:<path></td>
      <td>The path where the backup is saved</td>
      <td>X</td>
    </tr>
    <tr>
      <td>/BackupAll</td>
      <td>If this parameter is used, backups are made <br/> of all dossiers</td>
      <td>③</td>
    </tr>
    <tr>
      <td>/BackupDossier:<Dossier code></td>
      <td>If this parameter is used, a backup is made <br/> of the dossier with the specified dossier code; this parameter can <br/> be used multiple times to make a backup of multiple <br/> dossiers</td>
      <td>③</td>
    </tr>
    <tr>
      <td>/logfile: <file name></td>
      <td>The location and name of the file containing the logging information of the <br/> backup. If this parameter is not used, no <br/> log file is created.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>	If this parameter is added, then in addition to the errors, extra <br/> logging information is also shown and/or written to the log <br/> file.</td>
      <td></td>
    </tr>
    <tr>
      <td>/logserver</td>
      <td>If this parameter is added, the data exchanged with <br/> the server is also logged. (Only applicable if a <br/> server is installed)</td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>	If this parameter is used, the log file is overwritten <br/> each time the program is executed. If the parameter is not <br/> used, the logging is always added to the existing <br/> log file.</td>
      <td></td>
    </tr>
  </tbody>
</table>

① If Accowin was installed using the server, the name of the server or the IP address is required. If both are provided, the host name is used.

② If Accowin was installed without using a server (default when installing on 1 PC or when installing on a NAS), this parameter must be used.

③ The parameter BackupAll or BackupDossier must be used

<ins>Example for installation with server</ins>

AccowinCmd.exe /host:localhost /BackupPath:C:\\LBRP\\Clients\\Accowin\\\_Back-up /BackupAll

<ins>Example for installation without server</ins>

AccowinCmd.exe /LocalPath:C:\\LBRP\\Clients\\Accowin /BackupPath:C:\\LBRP\\Clients\\Accowin\\\_Back-up /BackupAll

## 4. Automatic backup via task scheduler

### 4.1 Introduction

**Important remarks** before you start configuring the automatic backup:

1. The automatic backup is preferably configured on the server and not on a workstation
2. The Accowin Client must be installed on the server
3. If you set the backup at a time when the computer is not running, then **no backups** will be taken; that is why automatic backups are preferably set up on a server, because these are usually never turned off.

### 4.2 Windows 2003/Windows XP

1. You open Scheduled Tasks by successively clicking the Start button, Control Panel, Scheduled Tasks

2. Double-click **Add a new task**

3. A wizard will start; click **Next**

![Image 4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23ff0702-7b5d-4a72-a181-9720c0f2c0ad/Untitled.png)

4. Click **Browse** to select the program **AccowinCmd.exe**. By default this program is in <br/> C:\\LBRP\\Clients\\Accowin\\AccowinCmd.exe. Important: You must select AccowinCmd.exe and not Accowin.exe!

![Image 5](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2581bc5-fcb3-464c-91e6-de775e3673f7/Untitled.png)

5. Enter **Accowin Back-up** as the name and click **Daily** and then the **Next** button

![Image 6](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/530e192d-3244-47df-941e-093512dc303d/Untitled.png)

6. Enter a time at which the backup should be executed. Choose a time at which your computer is definitely on, otherwise no backups will be taken. As start date, a date equal to today or a day in the past must be set. No date in the future, because otherwise the backups will only be executed from that date onwards. Click Next.

![Image 7](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79271199-1047-46ef-a351-175e9be71c98/Untitled.png)

7. Fill in the Windows Username and Password of a user who has the following rights on this computer to be able to execute this task. Press Next

![Image 8](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79271199-1047-46ef-a351-175e9be71c98/Untitled.png)

8. Check the option 'Open advanced properties for this task when I click Finish'. Click Finish

![Image 9](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/249f7625-0fa9-43bc-a40c-653adcb78f9f/Untitled.png)

9. The value next to Run must be adjusted. The command line parameters for the backup must be added to it, such as what should be backed up, to where, ... More explanation about which parameters can be found above at 3 Manual Backup via command line parameters. An example of the value of Run can be: <br/> AccowinCmd.exe/LocalPath:C:\\LBRP\\Clients\\AccowinBackupPath:C:\\LBRP\\Clients\\Accowin\\\_Backup/BackupAll

![Image 10](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f919c73c-194e-4c08-93dd-7e5d2008be63/Untitled.png)

10. Click OK and fill in the password of the Windows user again

![Image 11](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28bf2fd0-739d-427e-839d-9b1aa9eb37b1/Untitled.png)

### 4.3 Windows 2008/Windows Vista/Windows 7

1. The Start button, Control Panel, System and Security and Administrative Tools, and then double-click Task Scheduler. If you are asked for the administrator password or a confirmation, type the password or a confirmation.

2. Click the Action menu and click Create Basic Task.

3. Type 'Accowin Backup' as the name for the task and click Next.

![Image 12](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7215bc6b-3b9c-4a21-b079-cb13d47c59d6/Untitled.png)

4. Click Daily if you want to make a daily backup of Accowin and then click Next

![Image 13](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7246ef07-51d3-458d-98b5-35fd7129598b/Untitled.png)

5. Specify the desired schedule and click Next Remarks:

   1. Choose a time at which your computer is definitely on, otherwise no backups will be taken

   2. As start date, a date equal to today or a day in the past must be set. No date in the future, because otherwise the backups will only be executed from that date onwards.

   ![Image 14](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/615c0946-13eb-4a3e-b2cb-d6d5c2d89ad3/Untitled.png)

6. Click Start a program and click Next

![Image 15](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a264aa3-937e-454a-9d4c-ec66ea989b3b/Untitled.png)

7. Configuration of Start a program:

   1. Click Browse to select the program AccowinCmd.exe. By default this program is in <br/> C:\\LBRP\\Clients\\Accowin\\AccowinCmd.exe. Important: You must select AccowinCmd.exe and not Accowin.exe!
   2. At 'Add arguments (optional)' you must fill in the parameters of the backup. More explanation about which parameters can be found above at 3 Manual Backup via command line parameters

![Image 16](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/980036b0-ab67-4ac7-9d5f-1154e7952bc6/Untitled.png)

8.  Example with server: /Host:localhost /BackupPath:c:\\Accowin\\\_backup /BackupAll - Then click Next

9.  Turn on the checkbox 'Open the Properties dialog for this task when I click Finish' and click Finish.

![Image 17](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/709173a1-0cbe-48f3-b4f6-d5922380f492/Untitled.png)

10. Turn on the option 'Run whether user is logged on or not' and click OK.

![Image 18](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5e5f0ad-4b1d-44ce-8f77-7a7a48963456/Untitled.png)

## 5. Restoring the dossiers via Restore

A backup can be restored by starting Accowin and selecting the menu Start > Restore

The restoring of the dossiers is done dossier by dossier; however, it is not necessary to create the dossier in Accowin first. If the dossier does not exist yet, it is created automatically. Select the folder where the files that were created via the backup are located, and select a dossier there to restore. The details about the dossier are shown.

Click the button **_< Start Restore >_** to restore the data.

![Image 19](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e57ec31-396a-4e34-8cb1-b9e01928f0d4/Untitled.png)
