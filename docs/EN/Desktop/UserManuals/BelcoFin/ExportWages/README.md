# Desktop - BelcoFin - Export Wages

## Menu : Parameters – General options, tab “Export wage bookings”

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031856674/original/Y9UUHNPwbSHvIbihFwAt_D7fXmTx80uuKA.png?1663226728)

Set here the folder where the files are placed to import into your accounting. <br/>
A subfolder is created per dossier (declarant).

**Adjusting the general ledger accounts to be used**:

Menu : Soda – Overview general ledger accounts soda

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031856673/original/0iM_Zmmnij50R4TJ9P_baUoVq8bfLhFv1g.png?1663226728)

Here you can specify an alternative account number for the wage bookings.

If the checkbox “Use wage record number” is checked, the general ledger account is adjusted with the number stated at the manager: e.g.: 618000 => 618001

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031856676/original/BBrwjVVffjGQxdEAccuTfOc_PdlA-o04vw.png?1663226728)

**Setting parameters per dossier (declarant)**:

Per dossier, the journal and the periods must still be set.

Possibly extra parameters must also be added here depending on the accounting program to which is exported.

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031856677/original/OU_zXMDXTlRekYjVDc--NV_8PyMzru0pyQ.png?1663226728)

**Export of the wage bookings: (Menu : Soda – Export wage bookings to various journals)**

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101031856675/original/pPE9BNzg2bzZZ9VSjavrSVlMSaaO0bCDIw.png?1663226728)

Select the declarants (dossiers), period(s) and the accounting program for the export.

If you turn on the checkbox “Include already exported bookings”, wage bookings that were already exported are included again in the export; this can be useful if a previous export was not read into the accounting program or if you still want to include the full month in one booking.

You can also turn on the checkbox “Only wages for which the WHT has already been declared”, so that only wage bookings for which the return 274 was made are booked.
## Export via Codabox (menu : Soda – Export wage bookings via Codabox)

This export prepares the file for sending to the bookkeeper of the dossier **via Codabox**, the accountants' platform. Select the declarants and the periods; the export uses the same folder settings and ledger accounts as above. The bookkeeper reads the file into his accounting program.

## Export wage bookings to Accowin (menu : Soda – Export wage bookings to Accowin)

Creates import files that **Accowin** (the **LBRP** accounting program) can read in directly. Choose the declarants and periods; in Accowin you read the file in via the import function of the journal involved (see the Accowin manual on journals). The bookings appear in the journal you set per dossier.

## Export wage bookings social secretariat format (menu : Soda – Export wage bookings social secretariat format)

Creates the file in the format a **social secretariat** expects, for dossiers where the payroll processing happens externally. Select the declarants and periods and deliver the file to the secretariat involved.

## Maintaining the SODA connection (menu : Soda)

- **Logingegevens verzenden Soda** (Send Soda login data): sends the logon data of the dossier to SODA for the digital declarations.
- **Mandaten vernieuwen** (Renew mandates): renews the mandates with which you may file for the declarants.

These functions support the SODA declarations; setting up SodaBox itself is described in [SodaBox](../SodaBox/README.md).

## Order of working

1. Set the **general options** (folder, accounts) and check the **SODA ledger accounts**.
2. Set the **journal and the periods** per dossier.
3. Export with the wanted menu item (various journals, Accowin, Codabox or social secretariat).
4. After reading the file into the accounting program, check that all periods came across.

