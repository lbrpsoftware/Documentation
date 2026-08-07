# Desktop - AccoWin - Installation

## 1. Download Accowin

The file `AccowinSetup.exe` can be downloaded from the website: http://www.accowin.be/nl/accowin/download

After downloading the file Accowin2Setup.exe you must run the file. Installation Accowin (version 2) Version 2.0

## 2. Running Accowin2 Setup

### 2.1 Select components

After running Accowin2Setup.exe, after a few screens you arrive at the 'Select components' screen. This screen is important to determine what needs to be installed. Depending on the way you want to install Accowin, a different option must be selected here.

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012028402/original/BrhLi2N6dUN7Cz-3VWaFMeH3xh8iCDqI6A.png?1651657759)

**Possible options are**:

- **Local (without server) (max 1 user)**: This option is best chosen if Accowin is installed on 1 PC and is only used on that PC. The server does not need to be installed then. But it is intended for people who do not have a server and who work with, for example, Dropbox for synchronization of all their files to the cloud. The disadvantage of this option is that a maximum of 1 user can use Accowin at the same time.

- **Install client and server on the same machine**: If Accowin is installed on a network server, or if other PCs have access to Accowin via a network, you must use the Client/Server option and the server for the database must be installed. This option must be chosen if the Accowin Server and the File are the same machines.

- **Install client only**: This option must be chosen if you only want to install the Accowin client and the server is installed on another machine, or if you choose to do a local installation of the Accowin client separately on each workstation. This option is not recommended because the installation of updates in the future will then have to be performed on all workstations.

- **Install server only**: This option must be chosen if you only want to install the Accowin server on the server.

- **Install runtime only (BDE + CR)**: This runtime must be installed on every PC on which Accowin will be run. If a 'Local', 'Client and server' or Client installation was performed, the runtime has already been installed and this type of setup does not need to be run additionally.

**Note**: The options 'Install client only' and 'Install server only' should only be executed if the file server and the Accowin server are different computers. If this is not the case, it is best to choose the option 'Local' or 'Install client and server on the same machine'. This also makes it more convenient to perform updates in the future. Namely, an installation only needs to be done on the server instead of on each workstation.

### 2.2 Selection of installation directory

Depending on the components you selected in the previous screen, 1 directory or multiple directories must be filled in here:

- **Local (without server) (max 1 user)**: select path for client installation.
- **Install client and server on the same machine**: select path for client and for server
- **Client installation only**: select path for client installation
- **Server installation only**: select path for server installation
- **Runtime only**: no path is requested, the runtime is installed in the default location.

By default, the system will already suggest some directories which are best left as they are if you do not know what to choose.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012033307/original/VBbd0nK0v-WH81QPUSTRb1yf0w7cTpYOgQ.png?1651659325)

#### 2.2.1 Client location

The Accowin client will be installed in the client location. This location (in this example C:\\LBRP\\Clients) will afterwards also be shared with other users if you want to use Accowin on multiple computers. If the users already have a folder that is shared on the file server and you would like to use the same folder, then you must adjust the client location here. Do not forget to create the correct directory, otherwise the Accowin client will be installed directly in the selected folder. In other words, if you choose the location d:\\data then you must create the folder Accowin under d:\\data and then select d:\\data\\Accowin.

#### 2.2.2 Server location

This is the location where the Accowin server will be installed. This location will contain the Accowin server and the Accowin database. This location may not be accessible from client computers unless Accowin will only be used on 1 computer. **Note**:

If you were to change the server location to a location other than the default location, do not forget to create the correct directory, otherwise the Accowin server will be installed directly in the selected folder. In other words, if you choose the location d:\\servers then you must create the folder LbrpDbServer under d:\\servers and then select d:\\servers\\LbrpDbServer.

### 2.3 Select additional tasks

If you are going to install the Accowin Client, the setup will ask whether you want to put a shortcut to Accowin on your Desktop and whether you want to create a folder in the start menu. If you uncheck the boxes, no shortcut will be placed on the desktop and no folder will be added to the start button

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012033432/original/DDUMPtPPvMnuYg480Vp7aMCkAUww09El4Q.png?1651659361)

### 2.4 Starting the installation

The setup shows the selected options; press the 'Install' button to start the installation. The information shown in this screen depends on the chosen type of installation.

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012033648/original/GZHG8lfEZRyupaGJ9vCQhjaqTtAn7ENHnw.png?1651659443)

### 2.5 End of installation

If the setup has installed the client, it will ask whether the Accowin client should be started after the installation. In this way, Accowin can already be set up for use.

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046170/original/LXeD8aD9U2Br0lQIYBXJxHshd-UCgEVsxg.png?1651663907)

_After the installation you may need to restart the computer to activate the installed drivers_.

## 3. Server firewall configuration

If your server has a firewall, an extra firewall rule must be added so that the client computers can connect to your Accowin server.

**Note**: If the Accowin client and server run on the same machine and no other clients use Accowin, then no extra firewall rule needs to be defined.

**Configuring a firewall rule on a Windows 2008 server or higher**:

- The Start button, on Administrative Tools and on Windows Firewall with Advanced Security. If you are asked for the administrator password or a confirmation, type the password or a confirmation.

![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046968/original/TcS4FM_aJNc8BU0tdIHV8wKKEKEg_Au7Iw.png?1651664215)

- Click on Inbound Rules

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046373/original/YD9wBrPV53xsBM30hAj5jilFY4uR5-Gi6w.png?1651663992)

- In the menu, click Action>New Rule...

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046494/original/rqFq-O93wje917YUx8X6kxNVwSqZPpiZwQ.png?1651664043)

- Select Port and then press Next>

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046504/original/vLB7Y6bIXuflGELyYHBVQqfY43XtJZFFvQ.png?1651664054)

- At Specific local ports, enter: 12010 and then press Next>

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046585/original/k8EEUR7X_CppsNg5mYL3HPvfPU7NP8o2iQ.png?1651664074)

- Press Next>

![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046644/original/VxPc_E1sX1IvrLj62lYBs13o9el8qIxbeQ.png?1651664090)

- Press Next>

<!-- ![Image 12](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046704/original/FWCmWjpDyDoVsFZsVlZIE58Zmp3bJH7kEQ.png?1651664108) -->

- At Name, enter LbrpDbServer and then press Finish

![Image 13](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012046728/original/RrDvt19wFhZ3p28fHSrEtLXfU1CcC37teA.png?1651664129)

## 4. Accowin configuration at first use

### 4.1 Starting Accowin

Start Accowin by clicking the Accowin shortcut on the desktop.

### 4.2 Connection type

After starting Accowin, the screen is shown to ask how you want to connect: Client/server connection: You must select this option if you chose a client/server installation during the installation.

Do not use a server: You must select this option if you chose 'Local (without server) (max 1 user)' during the installation.

#### 4.2.1 Client/server connection: Server configuration

The system will ask where the Accowin server is installed. By default, the current computer name will be filled in. If Accowin is on a different server, the name of that server must be entered here.

The port number normally does not need to be changed unless the Accowin server runs on a different port.

![Image 14](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012059667/original/LUGQE_OBraWjcobjgFA9Y0ugVnVl8AeIJg.png?1651668621)

Once the details are filled in, you can click Next. When pressing next, the system will check whether it can connect to the server. If not, an error message is shown.

#### 4.2.2 Do not use a server: selection of the path where the database should be installed

By default, the system will suggest the location where Accowin is installed. If desired, you can change this, but we recommend leaving the suggested location as it is.

![Image 15](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070640/original/i2bCH-xrGqo46RpZgp84O2xmVUX3qNszjA.png?1651672346)

By clicking Next you can go to the next screen.

### 4.3 Creating the database

After the system was able to connect to the server, it will check whether it can already find an Accowin database. Because this is a new installation, the system will propose to create a new database with the name ACC_Accowin. ACC is the default prefix for the names of the central database and the dossier databases. In very exceptional cases it may be necessary to change this; consult the helpdesk first.

If the system can already find an Accowin database, then 'Existing database' is selected by default.

![Image 16](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070748/original/vHvIQyT_C3Z26FjqyfgqM-QAydnRI2H6Jg.png?1651672398)

Once the correct database has been selected or the prefix of a new database has been filled in, you can click next. When clicking next, the system will create the new database. If the creation was successful, a screen is shown that the database has been created.

![Image 17](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070813/original/nPMyok-uuVqcWCy_tUvJHODdy73MigAPpQ.png?1651672420)

By clicking Next you can go to the next screen.

### 4.4 Saving the configuration

By choosing the option that the configuration may be saved, the next time Accowin is started, the selected server and database will be used by Accowin. If you choose No, then the next time Accowin is started, you will be asked again to configure the server and database.

![Image 18](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012070901/original/5o9c8aeG0p_kxilvckL8f6w268Jk3Bx8vg.png?1651672447)

After selecting the option, you can click the Next button.

### 4.5 End

After filling in the parameters, the screen is displayed that everything went well.

![Image 19](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071048/original/RKT2mK3vB2LldlUZtKMmG3wZuWrMTMYVuQ.png?1651672505)

When pressing Next, the Accowin program will be started. Because with a new installation there is no license yet, the message 'No key has been entered' will be shown when starting Accowin.

By pressing OK, Accowin is started but it runs in Demo mode.

![Image 20](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071163/original/LyOBHC_WhsqBKA8guWtgFN84w4B9KcM8hA.png?1651672546)

If the top of the screen says Demo, the program is running in Demo mode. Below, more information can be found on how to request a license.

![Image 21](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071262/original/Q_4Yu25RcytQ50brogyNPnrLelJElVJ_eg.png?1651672573)

## 5. License request

The procedure to request a license is as follows:

- Start Accowin
- Menu > About > License

![Image 22](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071396/original/GhVxJ9fYypdsUx3ueFXzBDp5NedX5p24Pw.png?1651672626)

- Click the 'Request License' button

![Image 23](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071766/original/5AHCOEoImsvC6vl11Y4qbqgtGYX7-ZLEoA.png?1651672773)

- Fill in the details. The customer code can be found on the invoice. After filling in the details, click Request

![Image 24](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012071980/original/81IPYyvzKMQFK25ObJJvawA-NqYdN5HiTg.png?1651672829)

If the request was successful, the message 'License has been requested' is shown.

<!-- ![Image 25](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072094/original/ElVamDWAVCpCOc3Be-s5q-1W2-AhMWYF1w.png?1651672858) -->

License requests are processed manually by us and therefore it may take a while before you receive a license. The email describes how you can retrieve the license.

**Note**: Accowin must have access to the internet to request a License and to retrieve a License.

## 6. Making the Accowin client accessible to other computers (workstations)

### 6.1 Sharing the Accowin Client folder on the server

If you want to use Accowin on multiple computers (workstations), a folder must be shared on the file server so that all computers can start the Accowin client. If you have installed the Accowin client in an existing shared folder, then no new shared folder needs to be created and you can go to the next step.

The Accowin client must be in a shared folder on the file server. If this is not yet the case, you must share the folder C:\\LBRP\\Clients (or the folder where you installed the Accowin client on the server) on the file server so that other users have access to this folder. Note: If Accowin was installed on a server or NAS, a runtime installation must be done on every workstation that wants to use Accowin.

For this, start Accowin2Setup.exe on each client and select the option Install runtime only.

![Image 26](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072704/original/WYNyPEV8MdWjt48K8crnyf46m4aW49iokw.png?1651673009)

### 6.2 Mapping a network drive on the workstation

If the server folder where the Accowin Client is located is already mapped on the client, then this procedure does not need to be executed and you can go to the next step. Procedure to map a network drive on the workstation/client:

- Start This PC or Windows Explorer
- Menu > Tools > Map network drive. On Windows 7 or Windows Vista you must first press alt to see the menu

![Image 27](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072762/original/6X-BoLT_8aUCZ4qRN3eSbdEbdIbfIx4Fdg.png?1651673040)

- At drive, enter Q; at path, enter \\\\servername\\sharedfolder where servername must be the name of the server and sharedfolder the name of your shared folder, e.g. \\\\servername\\LBRPClients, and you must turn on the checkbox Reconnect at sign-in.

![Image 28](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012072880/original/ZEytvGpfhT8D8N1Ay2BgZFbnIuNxdk8pcw.png?1651673081)

**Note**: Use the same shared drive letter on all clients.

### 6.3 Shortcut to the Accowin Client

Add a shortcut to the Accowin client to the desktop. The most convenient way for this is:

1. Open Windows Explorer
2. Open the folder Q:\\Accowin\\
3. Right-click on the file Accowin.exe
4. Copy to > Desktop (create shortcut)

![Image 29](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101012073025/original/MvwaX3D98mOGorXGmibpIDfJHotR_3-Ctg.png?1651673125)

<!-- ![Image 30]() -->

<!-- ![Image 31]() -->

From Windows 7 onwards, you can also use the option '**_Pin to taskbar_**' to create a shortcut on the taskbar.

## 7. Moving Accowin to a new server

Accowin can be moved to a new server in 2 ways:

- Moving Accowin by means of backup and restore (preferred method)
- By means of copying files

### 7.1 Moving by means of backup and restore (preferred method)

The procedure for this is:

1. Take a backup (menu > start > backup). For more explanation, see Taking a backup.
2. Put this backup file on a memory stick to put it on the new server
3. Download Accowin2Setup.exe from our website: (http://www.Accowin.be/nl/Accowin/download) on the new server
4. Run the installation of Accowin on the new server (see above for more explanation)
5. Restore the backup file on the new server. See: **_Restoring the dossiers via Restore_**

#### 7.1.1 Taking a backup

Make a backup of all dossiers via the menu 'Start > Backup'. Select the place where the backups should go; preferably this is an external drive or USB disk. Turn on the checkbox so that a backup is made of all dossiers; if this checkbox is not on, only a backup is made of the currently active dossier. One file is created per dossier.

#### 7.1.2 Restoring the dossiers via Restore

The restoring of the dossiers is done dossier by dossier; however, it is not necessary to create the dossier in Accowin first. If the dossier does not exist yet, it is created automatically. Select the folder where the files that were created via the backup are located, and select a dossier there to restore. The details about the dossier are shown.

### 7.2 Moving by means of copying files

This procedure is **_not recommended_**, because things can go wrong, causing the data to become damaged. But in some cases this is the only way. Procedure:

1. Download Accowin (Accowin2Setup.exe) from our website (http://www.Accowin.be/nl/Accowin/download) and install it on the new server. More information about the installation can be found above.
2. Install Accowin in the same location as on the old server.
3. Stop the 'LBRP Database Server' service on the new server:
   1. Open the Windows Control Panel
   2. Double-click Administrative Tools
   3. Double-click Services
   4. Right-click the service with the name '**_LBRP Database Server_**' and then choose '**_Stop_**'
4. Copy the folder from the old computer over the location of the new server.
5. Restart the new server
6. When starting Accowin, the old data should be visible again
7. Moving Accowin from server to NAS

Accowin can run as a server but can also work on a NAS. The disadvantage of working on a NAS is that Accowin will work more slowly and that only 1 person may modify the data at a time.

The procedure to move Accowin from server to NAS is:

1. Take a backup of Accowin on the server (start Accowin, menu>start>backup)
2. Put the backup file on a memory stick
3. Uninstall Accowin from the server and clients if they will use Accowin from the NAS in the future
4. Download Accowin (Accowin2Setup.exe) from our website (http://www.Accowin.be/nl/Accowin/download)
5. During the installation, choose Local (without server) (max 1 user) and as location a folder on the NAS drive where Accowin should be placed.
6. After installation, start Accowin and choose the option 'Do not use a server - Local - Maximum 1 user' and go through the wizard
7. After the installation, you can select and restore the backup file via menu>restore. The backup is then restored on the NAS.
