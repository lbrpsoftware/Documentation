# Desktop - BelcoFin - Installation

## 1. Download Belcofin

The file BelcofinSetup.exe can be downloaded from the Download website

[Latest version Belcofin](https://kutt.ctrl.corpgroup.site/belcofin-latest-setup)

After downloading the file BelcofinSetup.exe you must run the file.

## 2. Running BelcofinSetup

### 2.1 Select components

After running BelcofinSetup.exe, after a few screens you arrive at the 'Select components' screen. This screen is important to determine what must be installed. Depending on the way you want to install Belcofin, a different option must be selected here.

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769497/original/un8b5VMSBo74Kf7hj5XQxA3cfrt7sGTa5A.png?1663164873)

Possible options are:

- Install client and server on the same machine: This option must be chosen if the Belcofin Server and the File are the same machines.
- Install client only: This option must be chosen if you only want to install the Belcofin client and the server is installed on another machine, or if you choose to do a local installation of the Belcofin client separately on each workstation. This option is not recommended because the installation of updates in the future will then also have to be performed on all workstations.
- Install server only: This option must be chosen if you only want to install the Belcofin server on the server.
- Local (without server) (max 1 user): This option is best NOT chosen but is provided for people who do not have a server and who work with for example Dropbox for synchronization of all their files to the cloud. The disadvantage of this option is that a maximum of 1 user can use Belcofin at a time.

<strong><ins>Note</ins></strong>:

The options 'Install client only' and 'Install server only' should only be executed if the file server and the Belcofin server are different computers. If this is not the case, it is best to choose the option 'Install client and server on the same machine'. This also makes it more convenient to perform updates in the future. Namely, an installation only has to happen on the server instead of on each workstation.

### 2.2 Selection of installation directory

Depending on the components you selected in the previous screen, 1 directory or multiple directories must be filled in here:

- Install client and server on the same machine: select path for client and for server
- Client only installation: select path for client installation
- Server only installation: select path for server installation
- Local (without server) (max 1 user): select path for client installation

By default the system will already propose some directories which, if you do not know well what to choose, are best left as they are.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769494/original/UhR5bZrz0cq8wcfohOHEObWnaua9bCCmCg.png?1663164873)

#### 2.2.1 Client location

The Belcofin client will be installed in the client location. This location (in this example C:\\LBRP\\Clients) will afterwards also be shared with other users if you want to use Belcofin on multiple computers.

If the users already have a folder that is shared on the file server and you would like to use the same folder, then you must adjust the client location here.

**Do not forget to create the correct directory, otherwise the Belcofin client will be installed directly in the selected folder**. In other words, if you choose the location d:\\data then you must create the folder Belcofin under d:\\data and then select d:\\data\\Belcofin.

#### 2.2.2 Server location

This is the location where the Belcofin server is installed.

This location will contain the Belcofin server and the Belcofin database. This location may not be accessible from client computers unless Belcofin will only be used on 1 computer.

<strong><ins>Note</ins></strong>:

If you would change the server location to a location other than the default location, do not forget to create the correct directory, otherwise the Belcofin server will be installed directly in the selected folder. In other words, if you choose the location d:\\servers then you must create the folder LbrpDbServer under d:\\servers and then select d:\\servers\\LbrpDbServer.

### 2.3 Select Start menu folder

If you are going to install the Belcofin Client, the setup will ask in which folder in the start menu you want to place the shortcut to Belcofin. By default the system will place it in the Belcofin folder.

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769493/original/m2CwEjsNPpnXXfqTjnWLhzDWpHScWrhC5Q.png?1663164873)

### 2.4 Select additional tasks

If you are going to install the Belcofin Client, the setup will ask whether you want to put a shortcut of Belcofin on your Desktop. If you turn off the checkbox, no shortcut will be placed on the desktop by the setup.

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031769495/original/a4cuq85KqKSmLj90_hPQsneZkVm-DuC8uA.png?1663164873)

### 2.5 End of installation

If the setup has installed the client, it will ask whether the Belcofin client should be started after the installation. In this way Belcofin can already be set up to be used.

## 3. Firewall server configuration

If your server has a firewall, an extra firewall rule must be added so that the client computers can connect to your Belcofin server.

<strong><ins>Note</ins></strong>:

If Belcofin client and server run on the same machine and no other clients use Belcofin, then no extra firewall rule needs to be defined.

<ins>Configuring a firewall rule on a windows 2008 server or higher</ins>:

1. The **Start** button ![small image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771614/original/x6KUtrfhiHkNLwHJTtZ7fMUh7APQseF1Dg.jpeg?1663165276), on **Administrative Tools** and on **Windows Firewall with Advanced Security**.‌ ![small image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771613/original/krn6ajowHM_LDn4wY5asB_C_DKRjHzcVbw.jpeg?1663165276) If you are asked for the administrator password or a confirmation, type the password or a confirmation.
2. Click **Inbound Rules**

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771615/original/HDBVPj2tiXHxDFm1Ves-sk_f58QWG8eSdw.png?1663165276)

3. Click in the menu on Action>New Rule...

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771616/original/4hfEWHYyY9zL8MRNqlwyZ-NsNf7k78-NMg.png?1663165276)

4. Select **Port** and then press **Next >**

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771618/original/2kkpokv-PHdkFgIUxV2zxILSihyVDPwS4A.png?1663165276)

5. Fill in at Specific local ports: 12010 and then press Next>

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771617/original/GF0vPefYRlC1wsbfjDaNuoCAN9r1txY_dg.png?1663165276)

6. Press **Next >**

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771622/original/cgea9XQzjCl4j7sfLyxhGEswpH30hO3kZg.png?1663165277)

7. Press **Next >**

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771620/original/lZcn1lljsHETkhf-eAUpoY943IaYmyIzlA.png?1663165277)

8. Fill in at **Name** LbrpDbServer and then press **Finish**

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771619/original/f70ejCFm9SVtYWVN9QFaO3IK6yb0mrAQgQ.png?1663165277)

## 4. Belcofin configuration at first use

### 4.1 Starting Belcofin

Either Belcofin is started after installation if the checkbox is checked. In the other case, Belcofin must be started manually by clicking the Belcofin shortcut on the desktop.

### 4.2 Connection type

After starting Belcofin, the screen is shown to ask how you want to connect:

- <ins>Client/server connection</ins>: You must select this option if you chose a client/server installation during the installation
- <ins>Do not use a server</ins>: You must select this option if you chose 'Local (without server) (max 1 user)' during the installation

![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031771621/original/P8c_qpNoaeRWF1oh2oXo0cxUbsqc5CdbBw.png?1663165277)

#### 4.2.1 Client/server connection : Server configuration

The system will ask where the Belcofin server is installed. By default the current computer name will be filled in. If Belcofin is on another server, the name of that server must be filled in here.

The port number should normally not be adjusted unless the Belcofin server runs on a different port.

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772663/original/d1IM4eB2z3LcBifgbB21vSudsUIpC423yA.png?1663165501)

When the data is filled in, you can click Next. When pressing next, the system will check whether it can connect to the server. If not, an error message is shown.

#### 4.2.2 Do not use a server: selection of path where database must be installed

By default the system will propose as path the location where Belcofin is installed. If desired you can adjust this, but we recommend leaving the proposed location as it is.

By clicking **Next** you can go to the next screen.

### 4.3 Creating the database

After the system could connect to the server, it will check whether it can already find a Belcofin database. Because this is a new installation, the system will propose to create a new database with the name Belcofin.

If the system can already find a Belcofin database, 'Existing database' is selected by default.

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772660/original/pE5tbl70442_YeFqyVWAwGgxTefxyCA4bg.png?1663165501)

When the correct database is selected or the name of a new database is filled in, you can click next. When clicking next, the system will create the new database. If the creation succeeded, a screen is shown that the database has been created.

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772662/original/B4Kess7tOiNOM73DsVMyfHvPV9SLyYh1Sw.png?1663165501)

By clicking **Next** you can go to the next screen.

### 4.4 Saving the configuration

By choosing the option that the configuration may be saved, the next time Belcofin is started the selected server and database will be used by Belcofin.

If you choose No, the next time Belcofin is started you will be asked again to configure the server and database.

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772665/original/JTPxNYu-BYy3bveGOnDzyzk_eM4U1hQW4A.png?1663165501)

After selecting the option you can click the **Next** button.

### 4.5 Filling in the Belcofin parameters

After the server and the database have been created and the configuration saved, the system will ask to set the parameters of Belcofin. These parameters are the data of the office that Belcofin will use, the location where the belcotax and finprof files are saved, how emails should be sent, ...

![Image 17](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772666/original/YpjxZ9YnDvQW0uOioRimw6PA72ayE0aQ5A.png?1663165501)

<ins>Belcotax and Finprof tab</ins>:

The location to save the Belcotax and Finprof files are by default subdirectories of the Belcofin Client program. This can possibly be adjusted to another location.

<ins>Email Tab</ins>:

Here you can configure whether your local email client should be used or whether Belcofin may send the emails itself. If the local email client is chosen, it must be taken into account that every email must be confirmed before it is sent. So if you have to send many emails, it is recommended to let Belcofin send the emails and to turn off the option 'Show confirmation dialog per email before sending'.

<ins>References Tab</ins>:

Here you can configure whether Belcofin should generate the references (code) of new declarants, managers, dossier responsibles and beneficiaries itself or whether the user enters them himself.

When everything is filled in you can click the **Save** button.

### 4.6 End

After filling in the parameters, the screen is displayed that everything went well.

![Image 18](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772667/original/K4EALHyM_dwPWSDgM-aZ3r8Nl6pxVBDfPw.png?1663165501)

When pressing **Next** the Belcofin program will be started.

Because with a new installation there is no license yet, the message '**No key has been entered**' will be shown when starting Belcofin.

By pressing **OK** Belcofin is started but it runs in **Demo mode**.

![Image 19](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772661/original/455rI4aN2I5HWahq4DpCgQiDTPhIdFl-LA.png?1663165501)

If Demo is shown at the top of the screen, the program runs in Demo mode. Below you can find more information on how a license can be requested.

![Image 20](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772669/original/54GPh6QgNx6ZQ7rEG6sy1Vg5DCfYSBNF1w.png?1663165501)

## 5. License request

The procedure to request a license is as follows:

1. Start Belcofin
2. Menu > About > **License**

![Image 21](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772671/original/SzkNLTurylmh_WY4TiTwNXPSCP-Q7pgLrA.png?1663165501)

3. Click the '**Request License**' button

![Image 22](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772672/original/GqU8wzxffbsZ5yyYIkMhXOblQJDtXP4syQ.png?1663165501)

4. Fill in the data. Customer code can be found on the invoice. <br/>
   After filling in the data, click Request

![Image 23](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772673/original/BkVF7JL4eZZbfWjai_qeOs51l0J_SbrZ_w.png?1663165501)

5. If the request was successful, the message 'License has been requested' is shown.

![Image 24](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772668/original/x4O-ieolVrPnIG9NgySQYjVCg26WlXEOMA.png?1663165501)

License requests are processed manually by us and therefore it may take a while before you receive a license. The email describes how you can retrieve the license.

<strong><ins>Note</ins></strong>:

The Belcofin server must have access to the internet to request a License and to retrieve a License.

## 6. Making the Belcofin client accessible for other computers (workstations)

### 6.1 Sharing the Belcofin Client folder on the server

If you want to use Belcofin on multiple computers (workstations), a folder must be shared on the file server so that all computers can start the Belcofin client. If you installed the Belcofin client in an existing shared folder, no new shared folder needs to be created and you can go to the next step.

The Belcofin client must be in a shared folder on the file server. If this is not yet the case, you must share the folder C:\\LBRP\\Clients (or the folder where you installed the Belcofin client on the server) on the file server so that other users have access to this folder.

<strong><ins>Note</ins></strong>:

No client installation needs to be done on a workstation that wants to use Belcofin. Only the procedures below must be followed to use Belcofin on workstations.

### 6.2 Mapping a network drive on the workstation

If the server folder where the Belcofin Client is located is already mapped on the client, this procedure does not need to be performed and you can go to the next step.

<ins>Procedure to map a network drive on workstation/client</ins>:

1. Start This computer or windows explorer
2. Choose Menu > Tools > **Map network drive**. <br/>
   On windows 7 or windows vista you must first press alt to see the menu

![Image 25](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772670/original/OCRSk3lHH-WLoaMMcmPFSQoH5H2LlKraJQ.png?1663165501)

3. At drive you fill in Q, at path \\\\servername\\sharedfolder where servername must be the name of the server and sharedfolder the name of your shared folder e.g. \\\\servername\\LBRPClients and you must turn on the checkbox Reconnect at sign-in.

![Image 26](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772675/original/hmD2s2H7GJgrVwcAg3wmOJSZSYRTo0yLCA.png?1663165501)

<strong><ins>Note</ins></strong>: Use the same shared drive letter on all clients.

### 6.3 Shortcut to Belcofin Client

Adding a shortcut to the Belcofin client to the desktop. The most convenient way for this is:

1. Open Windows explorer

2. Open the folder Q:\\Belcofin\\

3. Right-click on the file Belcofin.exe

4. Copy to>Desktop (create shortcut)

![Image 27](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772676/original/84QuI5x8BVT8_ivYPBHgFpMR82uqavlg1g.png?1663165501)

<!-- ![Image 2]() -->

## 7. Backups

More information about how backups of Belcofin should be taken can be found in the manual "[**Belcofin Backup NL.pdf**](https://support.corpgroup.site/nl/support/solutions/articles/101000171535)".

This manual is under the directory \\\_doc.

If you have not adjusted the proposed paths during the installation, you can find this file in the directory C:\\LBRP\\Clients\\Belcofin\\\_doc

<strong><ins>Note</ins></strong>: It is very important to take backups as described in the manual. If you only make a copy of the hard disk on which Belcofin is installed, there is a possibility that this copy is not a good backup of Belcofin.

## 8. Moving Belcofin to a new server

Belcofin can be moved to a new server in 2 ways:

- By means of back-up and restore moving Belcofin (preferred way)
- By means of copying files

### 8.1 Moving by means of backup and restore (preferred way)

The procedure for this is:

1. Take a back-up (menu>start>backup). For more explanation see above.

2. Place this back-up file on a memory stick to put it on the new server

3. Download BelcofinSetup.exe from our website ([Latest version Belcofin](https://kutt.ctrl.corpgroup.site/belcofin-latest-setup)) on the new server

4. Run the installation of Belcofin on the new server (see above for more explanation)

5. Do a restore of the back-up file on the new server

### 8.2 Moving by means of copying files

This procedure is discouraged because things can go wrong, damaging the data. But in some cases this is the only way.

<strong><ins>Procedure</ins></strong>:

1. Download Belcofin (BelcofinSetup.exe) from our website ([Latest version Belcofin](https://kutt.ctrl.corpgroup.site/belcofin-latest-setup)) and install it on the new server. More information about the installation can be found above.

2. Install Belcofin in the same location as on the old server.

3. Stop the service 'LBRP Database Server' on the new server
   1. Open the Windows Control Panel
   2. Double-click Administrative Tools
   3. Double-click Services
   4. Right-click the service with the name 'LBRP Database Server' and then choose 'Stop'

![Image 28](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031772674/original/XG057xuOLedIBSQDzF_n6jzY-DO5bt0sNA.png?1663165501)

5. Copy the folder from the old computer over the location of the new server

6. Restart the new server

7. When starting Belcofin, the old data should be visible again

## 9. Moving Belcofin from server to NAS

Belcofin can run as a server, but can also work on a NAS. The disadvantage of working on a NAS is that Belcofin will work more slowly and that only 1 person may modify the data at a time.

The procedure to move Belcofin from server to NAS is:

1. Take a backup of Belcofin on the server (start Belcofin, menu>start>backup)

2. Place the backup file on a memory stick

3. Uninstall Belcofin from the server and clients if these will use Belcofin from the NAS in the future

4. Download Belcofin (BelcofinSetup.exe) from our website ([Latest version Belcofin](https://kutt.ctrl.corpgroup.site/belcofin-latest-setup))

5. During the installation choose Local (without server) (max 1 user) and as location and folder on the NAS drive where Belcofin should be placed.

6. After installation start Belcofin and choose the option 'Do not use a server-Local-Maximum 1 user' and go through the wizard

7. After the installation you can select the back-up file via menu>restore and restore it. The back-up will then be restored on the NAS.
