# Desktop - AccoWin - Accounting - Year end

## 1. Introduction

At the end of the financial year you close the bookkeeping and start the new financial year. The functions for this are in the **Parameters** menu:

- **Beheer Boekjaren en Periodes** (Manage financial years and periods)
- **Afsluiting boekjaar** (Close financial year)
- **Nieuw boekjaar aanmaken** (Create new financial year)
- **Opening boekjaar verwijderen** (Delete opening of financial year)
- **Wissen eerste boekjaar** (Delete first financial year)
- **Wissen laatste boekjaar** (Delete last financial year)
- **Reorganisatie** (Reorganisation)

With **Boekhouding > Boekjaar selecteren** (Select financial year) you switch between financial years while working.

Most of these operations are **irreversible**. Make a backup first (see [Backup Database](../BackupDatabase/README.md)) and check that no other users are working in the dossier: **Accowin** blocks the year-end closing and the deletion of financial years while other users have the dossier open.

## 2. Preparing

Complete these steps before closing the financial year:

1. Book all transactions of the year in the journals (see [Journals](../Accounting/Journals/README.md)).
2. Match the payments so the open items of customers and suppliers are correct (see [Master files](../Accounting/MasterFiles/README.md), history).
3. Print the checks and final reconciliations: journal lists, trial balance, due-date balance.
4. Check the VAT return of the last period (see [Intervat](../Intervat/README.md)).
5. Make a backup of the dossier (see [Backup Database](../BackupDatabase/README.md)).

## 3. Manage financial years and periods

Via **Parameters > Beheer Boekjaren en Periodes** you open the **Boekjaren** (Financial years) screen. Per financial year you see:

- **Referte** (Reference): the name of the financial year, for example `2025`.
- **From** and **to**: the start and end date of the financial year.
- **Number of months**: the length of the financial year in months (12, or less for a shortened first year).
- **Assessment year**: the assessment year the financial year belongs to.
- **Pro rata**: whether the periods are calculated pro rata.
- **Closed**: whether the financial year is closed.
- **Balance model**: the balance model used for this financial year.

Under **Boekingperiodes** (Booking periods) you manage the periods of the selected financial year:

- **Aanmaken** (Create): create the booking periods, together with the matching **VAT period**, the **VAT year** and the **IC period** (Intracom).
- **Openen** and **Sluiten** (Open and Close): open or close a period. You cannot book in a closed period (see [Journals](../Accounting/Journals/README.md)).
- **Laatste wissen** (Delete last): delete the period that was created last.
- **Status**: shows per period whether it is open or closed, with the dates (**begin** and **end**) of each period.

## 4. Closing the financial year

Via **Parameters > Afsluiting boekjaar** you open the screen **Afsluiting van het boekjaar** (Closing of the financial year):

- **Over te dragen verliezen** (Losses to carry over): the transfer account on which the loss of the year is booked.
- **Over te dragen winsten** (Profits to carry over): the transfer account on which the profit of the year is booked.
- **Overgedragen resultaat** (Carried-over result): the account on which the result is carried over to the new financial year.
- **Type afsluiting** (Type of closing): the type of closing that **Accowin** performs.

Check the accounts and click **Start afsluiting** (Start closing). **Accowin** books the closing transactions and closes the financial year. The dossier is then reopened.

Conditions:

- No other users are working in the dossier.
- Your licence contains the option **Nieuw boekjaar aanmaken** (Create new financial year) and your user has the right to close a financial year. If not, the menu item is greyed out.

## 5. Creating a new financial year

Via **Parameters > Nieuw boekjaar aanmaken** you open the screen **Nieuw boekjaar aanmaken** (Create new financial year). The next financial year is shown at **Aan te maken** (To create). Check the data and click **Aanmaken** (Create).

**Accowin** creates the new financial year with its periods and transfers the opening. The opening bookings are visible afterwards as normal bookings of the new year. If something is wrong, delete the opening with **Opening boekjaar verwijderen** and create it again.

## 6. Deleting the opening of a financial year

Via **Parameters > Opening boekjaar verwijderen** you delete the opening bookings of the **active** financial year. **Accowin** asks for confirmation and reports when the opening is deleted. Use this function when you still need to correct something in the old year after the year-end transition: adjust the old year, delete the opening and create it again afterwards.

## 7. Deleting a financial year

With **Wissen laatste boekjaar** (Delete last financial year) and **Wissen eerste boekjaar** (Delete first financial year) you delete the last and the first financial year of the dossier. These functions only work when:

- all windows of the dossier are closed;
- the financial year is not the active one (first select another year via **Boekhouding > Boekjaar selecteren**);
- no other users are working in the dossier.

In the screen **Boekjaar verwijderen** (Delete financial year) you see which year is deleted; confirm with **OK**. After the deletion **Accowin** reopens the dossier. Run a **Reorganisatie** afterwards (see next).

## 8. Reorganisation

Via **Parameters > Reorganisatie** **Accowin** rebuilds the totals of the dossier. Run a reorganisation:

- after deleting a financial year;
- when the totals or balances are wrong, for example after a crash.

Close all windows first and make sure no other users are working in the dossier. A reorganisation can take a while, depending on the size of the dossier.

## 9. Summary: the order of the year-end closing

1. Book everything, match the payments and print the checks (see 2).
2. Make a backup.
3. Close the last period of the year via **Beheer Boekjaren en Periodes**.
4. Close the financial year via **Afsluiting boekjaar**.
5. Create the new financial year via **Nieuw boekjaar aanmaken**.
6. Select the new financial year via **Boekhouding > Boekjaar selecteren** and check the opening.
