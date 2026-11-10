# FOD

## 1. Introduction

The **FOD** (Federal Public Service Finance) delivers documents via **MyMinFin** and receives declarations via **Intervat** and **Belcotax-On-Web (BOW)**. The LBRP Cloud handles the complete exchange with the FOD:

- **MyMinFin documents** (inbound): the cloud retrieves the documents from your mailbox and stores them in the cloud database. The desktop applications (AccoWin, BelcoFin, Finasset) download them from there.
- **Intervat VAT declarations** and **Belcotax forms 281.20 / 281.50** (outbound): the desktop applications send the XML file to the cloud; the cloud converts it to the correct format, submits it to the FOD and follows up the status.

You find the technical endpoints in the [Developer Manuals - Fod](../../DevManuals/Fod/README.md).

## 2. Activate the application

Before you can use the **FOD** functionality, the application must be activated for your organization. This can be done in two ways:

1. **In the LBRP Cloud**: go to Organization - [Applications](../Identity/Applications/README.md) and activate the **FOD** application.
2. **In the desktop application** (AccoWin, BelcoFin or Finasset): in the cloud settings (Connect menu), Applications tab.

## 3. Connect to the FOD with itsme (one time)

The cloud needs access to your MyMinFin mailbox to retrieve documents, and a mandate to submit declarations to the FOD. You set up this connection **once** with a login via **itsme**.

Note: this login cannot be done from the desktop application. It is arranged via the LBRP Cloud and therefore normally has to be performed only once.

Follow these steps:

1. Make sure the **FOD** application is activated for your organization (see 2).
2. Request the login link for your organization from LBRP. The cloud generates a FOD login link for this.
3. Open the link in your browser. You land on the FOD login page (MyMinFin).
4. Choose **itsme** and log in with the itsme app on your smartphone.
5. Choose the company for which you grant access and confirm the mandate.
6. The FOD redirects you back to the LBRP Cloud. The cloud stores the login securely for your organization.

From then on the cloud renews the login automatically as long as the mandate stays active at the FOD. Only when the mandate is revoked, a new itsme login is needed.

## 4. What the cloud does next

After the one-time itsme login the cloud continues automatically:

- Every 6 hours a background task retrieves the new **MyMinFin documents** and stores them in the cloud database.
- **Outgoing declarations** (Intervat XML and Belcotax forms) are forwarded to the FOD periodically and converted to the correct format (for BOW: JSON Lines via the bulk API).
- The **status** of every submission is followed up (Pending, Submitted, Accepted, Error) and when an error occurs the members of the organization are notified by e-mail.

## 5. Use in the desktop applications

The FOD functionality is integrated in the desktop applications (see the Dutch manuals):

- **AccoWin** - MyMinFin documents, Intervat VAT declarations and Belcotax forms (BOW)
- **BelcoFin** - Belcotax forms (BOW) and MyMinFin documents per filer
- **Finasset** - MyMinFin documents per dossier
