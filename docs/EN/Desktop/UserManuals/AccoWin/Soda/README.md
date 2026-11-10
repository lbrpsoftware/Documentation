# Desktop - AccoWin - SODA

## 1. Introduction

Social secretariats deliver the payroll processing of their customers as **SODA files**: standardised files with the payroll bookings the accountant reads into his bookkeeping program. With the functions under the **Soda** menu **AccoWin** reads those files in as bookings in the right journal:

- **Soda > Instellingen en directories** (Settings and directories): the import options;
- **Soda > Grootboekrekeningen** (General accounts) and **import**: the mapping between SODA accounts and your chart of accounts;
- **Soda > Inlezen SODA Bestanden** (Read SODA files): read and process the files.

## 2. Settings and directories

In **Opties inlezen SODA bestanden** (Options for reading SODA files) you set:

- the **waiting account**: general accounts that are not mapped are booked there until you make the link;
- the **journal** in which the SODA bookings land;
- the **reference of the supplier** (the social secretariat) on the bookings;
- the **directory of SODA files to process**: where **AccoWin** looks for new files, and the **directory of processed SODA files** where they go after processing;
- **Search for SODA files when opening a dossier**: then **AccoWin** checks at every dossier opening whether new files are waiting;
- the **year for the numbering of booking documents**.

## 3. General accounts

You link every account from the SODA file via **Soda > Grootboekrekeningen** to a general account of the dossier. Unlinked accounts end up on the waiting account; after completing the mapping you transfer them.

With **Grootboekrekeningen importeren** (Import general accounts) you import an existing mapping from another dossier or file, so you do not have to fill in the table again every time.

## 4. Reading SODA files

1. Put the SODA files of the secretariat in the **files to process** folder (or use the automatic check when opening the dossier).
2. Choose **Soda > Inlezen SODA Bestanden**.
3. **AccoWin** reads the files, books the payroll bookings in the set journal and moves the files to the **processed files** folder.
4. Afterwards check the waiting account: when amounts stand there, first complete the missing account mappings.

## 5. Tips

- After every import check the **journal** and the waiting account before you do the [closing](../YearEnd/README.md).
- Have the SODA files delivered in a fixed, separate folder: the automatic check at dossier opening only works when the files are there.
- Maintain the account mapping with every new secretariat or payroll change; a good mapping keeps the waiting account empty.
