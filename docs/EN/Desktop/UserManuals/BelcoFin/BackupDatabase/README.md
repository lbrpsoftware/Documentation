# Desktop - BelcoFin - Backup Database

## 1. Introduction

There are 3 ways to make backups of Belcofin:

- Manually via the graphical user interface
- Manually via command line parameters
- Automatic backup via task scheduler

It is recommended to definitely choose automatic backup so that your Belcofin data is always backed up.

With every backup option you have the possibility to back up, in addition to the data, also the XML and PDF files that were created by Belcofin. If these files are on the file server and they are backed up by the file server, then it is not necessary to also back up the XML and PDF files.

## 2. Manual Backup via Graphical User Interface

You can manually take a backup in the following way:

1. Start Belcofin

2. Menu>Start>Backup

3. You select the location where the backup should go and select whether, in addition to the backup of the data, the PDF and XML files created by Belcofin should also be backed up.

4. If you check the option 'Insert date in zip file', the current date and time will be added to the file name of the backup. If you do not do that, the name of the backup will be the name of the Belcofin database, which in most cases will be Belcofin.

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031739111/original/qmSqEL695kMUt0B2RGUcLaruNbD5xDjjBg.png?1663159298)

5. Click Start backup

6. The message Backup created at the bottom of the screen is shown if everything went well

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031739263/original/x-k1crlYxvSVWXfZuZRxAPBedodoqvGrAw.png?1663159316)

## 3. Manual Backup via command line parameters

Via the program BelcofinCmd.exe, which you can find in the Belcofin Client directory, you can make backups using command line parameters.

Possible command line parameters are:

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
      <td>The name of the Belcofin server</td>
      <td>X[①]</td>
    </tr>
    <tr>
      <td>/ipaddress:<ip address></td>
      <td>IP address of the Belcofin server.</td>
      <td>X①</td>
    </tr>
    <tr>
      <td>/port:<port number></td>
      <td>Port of the server. If not provided, the <br/> default port number is used.</td>
      <td></td>
    </tr>
    <tr>
      <td>/db:<database name></td>
      <td>Name of the database. If not provided, <br/> the default Belcofin database is <br/> used.</td>
      <td></td>
    </tr>
    <tr>
      <td>/language:<language></td>
      <td>The language of the error messages: <ul><li>N: Dutch</li> <li>F: French</li></ul></td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupPath:<path></td>
      <td>The path where the backup is saved</td>
      <td>X</td>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupXml</td>
      <td>If this parameter is used, the XML <br/> files created by Belcofin are also <br/> backed up.</td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupPdf</td>
      <td>If this parameter is used, the PDF <br/> files created by Belcofin are also <br/> backed up.</td>
      <td></td>
    </tr>
    <tr>
      <td>/BackupIncludeDate</td>
      <td>If this parameter is used, the <br/> current date and time are added to the <br/> name of the backup file.</td>
      <td></td>
    </tr>
    <tr>
      <td>/logfile: <file name></td>
      <td>The location and name of the file where the <br/> logging information of the backup is stored. If <br/> this parameter is not used, <br/> no log file is created.</td>
      <td></td>
    </tr>
    <tr>
      <td>/loginfo</td>
      <td>If this parameter is added, then <br/> in addition to the errors, extra logging <br/> information is also shown and/or written to the <br/> log file. </td>
      <td></td>
    </tr>
    <tr>
      <td>/overwritelog</td>
      <td>If this parameter is used, the <br/> log file is overwritten each time the <br/> program is executed. If the parameter <br/> is not used, the logging is always <br/> added to the existing log file.</td>
      <td></td>
    </tr>
  </tbody>
</table>

[①] Either the name of the server or the IP address is required. If both are provided, the host name is used.

<ins>Example</ins>:

belcofinCmd.exe /host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

## 4. Automatic backup via task scheduler

### 4.1 Introduction

**Important remarks** before you start the configuration of the automatic backup:

1. The automatic backup is preferably configured on the server and not on a workstation
2. The Belcofin Client must be installed on the server
3. If you set the backup at a time when the computer is not running, no backups will be taken; that is why automatic backups are preferably set up on a server because these are usually never turned off.

### 4.2 Windows 2003/Windows XP:

1. You open Scheduled Tasks by successively clicking the **Start** button <img src="https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031740447/original/k-Ynrl02L9DrNCyqI2LAulBU0sWWzKJs8w.png?1663159557" alt="Windows icon" width="41"> , on **Control Panel**, on **Scheduled Tasks**
2. Double-click **Add a new task**
3. A wizard will start, click **Next**

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031740480/original/OI22lNT88ezMEs1plBQi9OvsXSwkdQsQQQ.png?1663159565)

4. Click **Browse** to select the program **BelcofinCmd.exe**. By default this program is in C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe.

<strong><ins>Important</ins></strong>: You must select BelcofinCmd.exe and not Belcofin.exe!

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031740802/original/EIjr5YdOJWAWNa_7LZZ9G6Za5nauPLdlsg.png?1663159630)

5. Fill in **Belcofin Backup** as the name and click **Daily** and then the **Next** button

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741102/original/LYLfvFzmsnI7xw_ZGx3Ms0ezn3Fynmh-Uw.png?1663159696)

6. Fill in a **time** at which the backup must be executed. Choose a time at which your computer is definitely on, otherwise no backups will be taken.
   As start date, a date equal to today or a day in the past must be set. No date in the future, because otherwise the backups will only be executed from that date.

Click **Next**.

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741103/original/Hea6GsawhRnrRRczAdadjvFWyQ392OufcQ.png?1663159696)

7. Fill in the Windows Username and Password of a user who has the following rights on this computer to be able to execute this task.

Press **Next**

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741105/original/UQ_2jA5A7EtmKc7PomPm_Jd0YoTqxAzuqg.png?1663159696)

8. Check the option '**Open advanced properties for this task when I click Finish**'.
   Click **Finish**

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741106/original/U-prCCRvzXMywEHwfiZKh_0V1CLX8VomFA.png?1663159697)

9. The value next to Run must be adjusted. The command line parameters for the backup must be added to it, such as what must be backed up, to where, ...
   More explanation about which parameters can be found above at 3 Manual Backup via command line parameters.
   An example of the value of Run can be: C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe /host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031741108/original/hO65aA95WU8Yy_Rqx2U_ZV4CnfombP0WPQ.png?1663159697)

10. Click **OK** and fill in the password of the windows user again

### 4.3 Windows 2008/Windows Vista/Windows 7:

1. The **Start** button ![small image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742052/original/hSIqatrr-pey3CgBAClc5D2nFkPj1rQxxQ.jpeg?1663159892), on **Control Panel**, on **System and Security** and on **Administrative Tools**, and then double-click **Task Scheduler**.‌ ![small image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742053/original/eoIsHshJkmDd-04cWJoNEiT0GP_VsbcHww.jpeg?1663159892) If you are asked for the administrator password or a confirmation, type the password or a confirmation.

2. Click the **Action** menu and click **Create Basic Task**.

3. Type 'Belcofin Backup' as the name for the task and click **Next**.

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742058/original/Q1etfUhf68vwFbLIXv5spfrTstJ4v05EXw.png?1663159892)

4. Click **Daily** if you want to make a backup of Belcofin daily and then click **Next**

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742056/original/krJRsG4a7vnZPRupFwKSVIAFJmPy3kOnUQ.png?1663159892)

5. Specify the desired schedule and click **Next**.

<strong><ins>Remarks</ins></strong>:

Choose a time at which your computer is definitely on, otherwise no backups will be taken

As start date, a date equal to today or a day in the past must be set. No date in the future, because otherwise the backups will only be executed from that date.

![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742059/original/uxAPvaBTbZUSGHdONLF2Clrh_9Nu_pYc3w.png?1663159892)

Click **Start a program** and click **Next**

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742062/original/Lx8UVnJzCLQduDM7LB7F4rmysGRNEfOBGg.png?1663159892)

Configuration of Start a program:

1. Click **Browse** to select the program **BelcofinCmd.exe**. By default this program is in C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe.
   <br/> <strong><ins>Important</ins></strong>: You must select BelcofinCmd.exe and not Belcofin.exe!
2. At 'Add arguments (optional)' you must fill in the parameters of the backup. More explanation about which parameters can be found above at 3 Manual Backup via command line parameters
   <br/> An example can be: /host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

3. Then click **Next**

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742060/original/XDH_4OR1SrDqhChU-sitjOjykGE_xf2dqQ.png?1663159892)

1.  Turn on the checkbox '**Open the Properties dialog for this task when I click Finish**' and click **Finish**.

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742064/original/a4Fc5YQZZ9rweWtTgyUMG_UoYA9Z139FNw.png?1663159892)

3. Turn on the option '**Run whether user is logged on or not**' and click **OK**.

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031742063/original/o2nRaxrNvxf_THJ1KQplnNYZXFpxYwr3WA.png?1663159892)

7. Configuration of Start a program:
   1. Click Browse to select the program BelcofinCmd.exe. By default this program is in C:\\LBRP\\Clients\\Belcofin\\BelcofinCmd.exe.

<strong><ins>Important</ins></strong>: You must select BelcofinCmd.exe and not Belcofin.exe!

    2. B. At 'Add arguments (optional)' you must fill in the parameters of the backup. More explanation about which parameters can be found above at 3 Manual Backup via command line parameters

An example can be:

/host:localhost /db:Belcofin /BackupXml /BackupPdf /BackupPath:C:\\LBRP\\Clients\\Belcofin\\\_Backup

C. Then click **Next**

8. Turn on the checkbox 'Open the Properties dialog for this task when I click Finish' and click
   Finish.

9. Turn on the option 'Run whether user is logged on or not' and click OK.

# 5. Restore backup

A backup can be restored by:

1. Starting Belcofin
2. Menu > Start > Restore
3. Selecting the backup file
4. Making a selection whether you also want to restore the XML and/or PDF files
5. Pressing the '**Start Restore**' button
