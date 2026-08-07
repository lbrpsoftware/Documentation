# Desktop - Finasset - Installation

## 1. Download Finasset

- [Installation file](http://kutt.ctrl.corpgroup.site/finasset-latest-setup)
- [Only the Desktop client](http://kutt.ctrl.corpgroup.site/finasset-latest-client)
- [Only the Database Server](http://kutt.ctrl.corpgroup.site/finasset-latest-dbserver)

Run the installation file `FinassetSetup.exe`.

## 2. Running Finasset Setup

-  Choose your **Language**

   <img src="./2-00.png" alt="2-00.png" style="width:300px;"/>

1. You see an introduction screen. Click **Next**.

   <img src="./2-01.png" alt="2-01.png" style="width:400px;"/>

2. Accept the license agreement and click **Next**. 

   <img src="./2-02.png" alt="2-02.png" style="width:400px;"/>

3. Fill in your **Username** and **Organization** and click **Next**.

   <img src="./2-03.png" alt="2-03.png" style="width:400px;"/>

4. Choose the **Installation type**.

   <img src="./2-04.png" alt="2-04.png" style="width:400px;"/>

   - Possible options:

      - **Local (*without database server, max. 1 user*)**: For installation on one PC, without network use. Synchronization via cloud possible (e.g. Dropbox). Maximum one user at a time.

      - **Install Client and Server**: For installation on a network server or multiple PCs that have access to Finasset via a network

5. Select the **Installation Directory** and indicate which components should be installed.

   <img src="./2-05.png" alt="2-05.png" style="width:400px;"/>

   - Possible options are:

     - **Install client and server on the same machine**: Both checkboxes must be on if you want to install the **database server** and the **application** on the same machine. It is best to do this on a server, installing the database on a protected **C drive**, and the application on a shared **network drive**. You can later share the application **shortcut** with other users.

     - **Install client only**: This option must be chosen if you only want to install the **application** and the database server is installed on another machine, or if you choose to do a local installation of the desktop application separately on each workstation. This option is not recommended because the installation of updates in the future will then also have to be performed on all workstations.

     - **Install server only**: This option must be chosen if you only want to install the database server on the server.

6. Choose whether you want to create a **shortcut** on the **desktop**.

   <img src="./2-06.png" alt="2-06.png" style="width:400px;"/>

7. Review the overview of your choices and click **Next**.

   <img src="./2-07.png" alt="2-07.png" style="width:400px;"/>

8. The installation now **copies** the necessary files.

   <img src="./2-08.png" alt="2-08.png" style="width:400px;"/>

9. Choose whether you want to **start** the program directly after the setup.

   <img src="./2-09.png" alt="2-09.png" style="width:400px;"/>

## 3. Firewall Configuration

During the installation, **port 12013** was automatically opened. If necessary, add extra firewall rules so that client computers can connect to your database server.

**Note**: If the application and database server run on the same machine and no other clients need to access the server, no extra firewall rules are needed.

[<strong><ins>Configuring a firewall rule on a Windows machine</ins></strong>:](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/tools)

<img src="./3-01.png" alt="3-01.png" style="width:800px;"/>

## 4. Finasset configuration at first use

### 4.1 Starting Finasset

Start Finasset by clicking the shortcut on the desktop.

### 4.2 Connection type

After starting, you are asked how you want to connect:

1. **Client/Server Connection**: Select this option if you chose a client/server installation during the installation.

2. **Do Not Use a Server**: Select this option if you chose **local use (*without server, max. 1 user*)** during the installation.

<img src="./4-01.png" alt="4-01.png" style="width:400px;"/>

#### 4.2.1 Client/Server connection

Enter the **server name** where Finasset is installed. By default, the current computer name is filled in. Only change the port if necessary.

<img src="./4-02.png" alt="4-02.png" style="width:400px;"/>

Click **Next** to check whether a connection can be made. If there are problems, an error message appears.

#### 4.2.2 Do not use a server

Check the proposed location where Finasset is installed. Adjust if necessary.

<img src="./4-03.png" alt="4-03.png" style="width:400px;"/>

Click **Next**.

### 4.3 Creating the database

If no existing Finasset database is found, the system proposes to create a new database. Fill in the name for the new database or select an existing one.

<img src="./4-04.png" alt="4-04.png" style="width:400px;"/>

Click **Next** to create the new database. Upon successful creation, a confirmation screen appears.

<img src="./4-05.png" alt="4-05.png" style="width:400px;"/>

Click **Next**.

### 4.4 Saving the configuration

Choose **Yes** to save the configuration for future use. At the next startup, the selected server and database are automatically used.

<img src="./4-06.png" alt="4-06.png" style="width:400px;"/>

Click **Next**.

### 4.5 End

After completing the configuration, it is confirmed that everything went well. Click **Next** to start Finasset. With a new installation, the message **No key has been entered** is shown. Click **OK** to start Finasset in demo mode.

<img src="./4-07.png" alt="4-07.png" style="width:300px;"/>

In demo mode, **Demo** appears on the screen. [Here](../License/README.md) you can find more information about requesting a license.

<img src="./4-08.png" alt="4-08.png" style="width:400px;"/>
