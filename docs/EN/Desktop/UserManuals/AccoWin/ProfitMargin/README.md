# Desktop - AccoWin - Profit Margin

## 1 General

The profit margin module in Accowin can be used for:

- Keeping track of vehicle stock
- Printing stock lists
- Printing the comparison register
- Calculating the profit margin for vehicles that fall under the profit margin scheme

The VAT code WM is used to book purchase or sales invoices of vehicles according to the profit margin scheme.

## 2 Linking the module to a dossier

To be able to use the profit margin module, it must first be linked to the dossier:

- Menu>Start>Manage dossiers

![Image 1]()

- Select the dossier where you want to use the profit margin module and go to the Modules tab and click the 'Add' button at 'Other modules':

![Image 2]()

- Select the 'Profit margin vehicles' module and click the 'Select' button

![Image 3]()

- By saving the dossier, the 'Profit margin vehicles' module is linked to the dossier.

![Image 4]()

## 3 Menu options

![Image 5]()

The 'Profit margin vehicles' module has the following menu options:

- <ins>Parameters</ins>: here the parameters of the module can be set at dossier level.
- <ins>Purchases</ins>: here all purchases (invoices and credit notes) of vehicles can be consulted. If you want to convert a vehicle from the profit margin scheme to the VAT scheme, you must also do this via this menu option.
- <ins>Sales</ins>: here all sales (invoices and credit notes) of vehicles can be consulted.
- <ins>Calculate</ins>: via this option the profit margin is calculated and you can choose to automatically book a sales invoice to get the profit margin correctly on the VAT return and the accounting. The calculation can be printed.
- <ins>Print calculation</ins>: to print an old calculation.
- <ins>Stock</ins>: print the stock on a certain date
- <ins>Comparison register</ins>: report with an overview of the sold vehicles in a certain period together with information about the purchase.
- <ins>Print purchases</ins>: report with an overview of the purchased vehicles in a certain period together with information about the sale if the vehicle was sold in this period.

## 4

## 5 Configuring the module (Menu option parameters)

The accounts for the purchase (class 6) and the sale (class 7) are not created automatically. The user creates the accounts and links them in the Parameters of the profit margin module.

After the module has been linked to the dossier, it still needs to be configured for this dossier:

- Menu>Module>Profit margin vehicles>Parameters

![Image 6]()

- The parameter screen is divided into different parts and will be further explained below per part.

![Image 7]()

### 5.1 Entry of profit margin invoices (with VAT code WM):

- <ins>Accounts PU profit margin</ins>: the general ledger accounts where the purchases of vehicles that fall under the profit margin scheme are booked. On these general ledger accounts only the VAT code WM can be used. The general ledger accounts are separated by a comma.
- <ins>Temporary accounts SA profit margin</ins>: the general ledger accounts on which the sales of vehicles that fall under the profit margin scheme are booked. A temporary account is used because VAT grid 00 must be filled in correctly and this is only possible if we work with a temporary account. The temporary account is counter-booked during the generation of the sales invoice at the end of the period. At the end of the year, this temporary account will normally be at 0. On these general ledger accounts only the VAT code WM can be used. The VAT code WM does not appear on the VAT return. The general ledger accounts are separated by a comma.

### 5.2 Entry of invoices with VAT:

- <ins>Entry SA with VAT</ins>: via this option you can indicate whether the sales and purchases of vehicles with VAT should also be tracked by the module. If yes, then when purchasing a vehicle with VAT the details of the vehicle will have to be entered and when entering the sale of the vehicle the purchase will have to be selected. If no is selected, then no PU and SA accounts with VAT need to be filled in.
- <ins>Accounts PU with VAT</ins>: the general ledger accounts on which purchases of vehicles with VAT are booked. Several general ledger accounts can be filled in here, separated by a comma.
- <ins>Accounts SA with VAT</ins>: the general ledger accounts on which sales of vehicles with VAT are booked. Several general ledger accounts can be filled in here, separated by a comma.

### 5.3 Calculating the profit margin:

Everything that is configured here is used by the system to automatically book a sales invoice of the profit margin.

- <ins>Account SA profit margin</ins>: on this general ledger account the profit margin part is booked that must appear in grid 00 of the VAT return. More explanation can be found at the calculation method below.
- <ins>Account taxable base profit margin</ins>: on this general ledger account the profit margin part is booked that must appear in grid 03 (depending on the VAT code) of the VAT return. More explanation can be found at the calculation method below.
- <ins>VAT code</ins>: the VAT code that must be used to calculate the profit margin. Usually this is code 3.
- <ins>Customer</ins>: the customer on which the profit margin sales invoice is booked
- <ins>Journal</ins>: the journal in which the profit margin sales invoice is booked. This journal must be of the profit margin type. Therefore you will most likely still need to create a new journal.

![Image 8]()

- <ins>Calculation method profit margin</ins>:
  - <ins>Per period</ins>: the profit margin is calculated per VAT period. For a monthly declarant this is per month. For a quarterly declarant per quarter.
  - <ins>Per delivery</ins>: the profit margin is calculated per vehicle.

## 6 Purchases

### 6.1 Booking a purchase invoice

Booking a purchase invoice of a vehicle proceeds in the same way as booking a normal purchase invoice.

When booking a purchase invoice of a vehicle with margin, the VAT code WM must be used. When booking purchase invoices of a vehicle with VAT, the normal VAT codes must be used.

An example of booking a purchase invoice with profit margin is:

![Image 9]()

After booking a purchase invoice in which bookings have been made on the general ledger accounts 'Account PU profit margin' and/or 'Accounts PU VAT', which are configured in the parameters of the module, the system will show an extra screen per booking line in which the details of the vehicle can be filled in. If there are 2 vehicles on 1 purchase invoice, then 2 booking lines must be made on the general ledger accounts 'Account PU profit margin' and/or 'Accounts PU VAT'.

Example of entering vehicle information after booking a purchase invoice:

![Image 10]()

The text that is filled in in the Remarks field at booking line level is automatically copied into the Brand field at the vehicle details.

The details that can be filled in for a vehicle are:

- Brand: for example, Audi A3 Sportback can be filled in here
- Chassis of the vehicle
- Year of manufacture of the vehicle
- Remark about the vehicle

When clicking the Close button or F12, the vehicle details are written into the system.

### 6.2 Menu option purchases

Via this menu option you see all purchases and their detail. <br/> Overview screen:

![Image 11]()

Detail screen:

![Image 12]()

Via the menu option purchase you can:

- See all purchases of vehicles (both manually added and added by entry via the purchase journal)
- Modify vehicle details
- Add new vehicles
- Delete vehicles that were entered manually.

When entering a new vehicle, the user must make the selection about what kind of purchase it concerns:

- Invoice: purchase of a vehicle
- Credit note: taking back of a vehicle by the supplier

![Image 13]()

- Adjustment: vehicle switches from the profit margin scheme to the normal scheme.

<strong><ins>Note</ins></strong>:

Vehicles that were entered during the booking of purchase invoices can only be deleted via the purchase journal entry, for example by deleting the booking line or purchase invoice.

## 7 Sales

### 7.1 Booking a sales invoice

Booking a sales invoice of a vehicle proceeds in the same way as booking a normal sales invoice.

When booking a sales invoice of a vehicle with margin, the VAT code WM must be used. When booking sales invoices of a vehicle with VAT, the normal VAT codes must be used.

An example of booking a sales invoice with profit margin is:

![Image 14]()

After booking a sales invoice in which bookings have been made on the general ledger accounts 'Temporary account SA profit margin' and/or 'Accounts SA VAT', which are configured in the parameters of the module, the system will show an extra screen per booking line in which the vehicle that has been sold can be selected. If there are 2 vehicles on 1 sales invoice, then 2 booking lines must be made on the general ledger accounts 'Temporary account SA profit margin' and/or 'Accounts SA VAT'.

<strong><ins>Note</ins></strong>:

When selling a vehicle on margin, you only see vehicles that were purchased on margin. When entering the sale of a vehicle under the VAT scheme, you only see vehicles that were purchased under the VAT scheme or vehicles for which an adjustment has been entered that they switch from the margin scheme to the VAT scheme.

Example of vehicle selection after booking a sales invoice:

![Image 15]()

### 7.2 Menu option sales

Via this menu option you see all sales and their detail. <br/> Overview screen:

![Image 16]()

Detail screen:

![Image 17]()

Via the menu option sales you can:

- See all sales of vehicles (both manually added and added by entry via the sales journal)
- Select another vehicle for sale.
- Add a new sale of a vehicle
- Delete sales of vehicles that were added manually.

When entering a new sale of a vehicle, the user must make the selection about what kind of sale it concerns:

- Invoice: sale of a vehicle
- Credit note: cancellation of sale of a vehicle.

![Image 18]()

<strong><ins>Note</ins></strong>:

Vehicles that were entered during the booking of sales invoices can only be deleted via the sales journal entry, for example by deleting the booking line or sales invoice.

## 8 Calculation methods profit margin

The calculation methods will be explained using an example. The vehicles below are purchased and sold on profit margin. The VAT code 3 that corresponds to the VAT percentage 21% is used for the calculation of the profit margin.

Opening stock:

- Vehicle 1: 5000 EUR
- Vehicle 2: 4000 EUR

Quarter 1:

- Purchase vehicle 3: 7000 EUR
- Sale vehicle 1: 6000 EUR

Quarter 2:

- Sale vehicle 3: 11000 EUR

Quarter 3:

- Nothing

Quarter 4:

- Sale vehicle 2: 3500 EUR
- Purchase vehicle 4: 6500 EUR

Closing stock:

- Vehicle 4: 6500 EUR

### 8.1 Calculation method delivery

With the calculation method per delivery, the profit margin is calculated per vehicle. The value of the sold purchases is stated in box 00 at each period return.

If there is a negative margin, then the amount of the sale is regarded as the value of the sold purchase.

<strong><ins>Quarter 1</ins></strong>:

- Sale vehicle 1 for 6000 EUR and was purchased for 5000 EUR
- Margin: 1000 EUR (6000 EUR – 5000 EUR)
- Grid 00: 5000 EUR (value of the purchase)
- Grid 03: 826.45 (1000 EUR / 1.21) (the taxable base of the margin)
- Grid 54: 173.55 (The VAT from the margin)

<ins>Calculation screen</ins>:

![Image 19]()

<ins>Calculation report</ins>:

![Image 20]()

Booked sales invoice:

![Image 21]()

The sales invoice that is created with the calculation method delivery will have a reference in the remarks field per booking line of which sales invoice the profit margin was calculated from.

<strong><ins>Quarter 2</ins></strong>:

- Sale vehicle 3 for 11000 EUR and was purchased for 7000 EUR
- Margin: 4000 EUR(11000 EUR – 7000 EUR)
- Grid 00: 7000 EUR (value of the purchase)
- Grid 03: 3305.79 (4000 EUR / 1.21) (the taxable base of the margin)
- Grid 54: 694.21 EUR (the VAT from the margin)

<ins>Calculation screen</ins>:

![Image 22]()

<ins>Calculation report</ins>:

![Image 23]()

<ins>Booked sales invoice</ins>:

![Image 24]()

<strong><ins>Quarter 3</ins></strong>:

▪ Nothing

<strong><ins>Quarter 4</ins></strong>:

- Sale vehicle 2 for 3500 EUR and was purchased at 4000 EUR
- Margin: -500 EUR (3500 EUR – 4000 EUR)
- Grid 00: 3500 EUR (margin is negative so value of the sale is used)
- Grid 03: blank
- Grid 54: blank

At the end of each period, the system will book a sales invoice.

### 8.2 Calculation method period

With the calculation method per period, the margin is calculated per VAT period:

- <ins>Determination of margin first period</ins>: <br/>
  Margin = sales period – (purchases period + opening stock)
- <ins>Determination of margin during the year</ins>: <br/>
  Margin = sales period – (purchases period + transfer negative margin previous period)
- <ins>Determination of margin last period</ins>: <br/>
  Margin = Sales full year – (purchases full year + opening stock – closing stock) – Already declared positive margins)

Grid 00 is only calculated and filled in at the end of the year. During the year, grid 00 is blank.

<strong><ins>Quarter 1</ins></strong>:

- Margin = sales period – (purchases period + opening stock)
- Margin = 6000 EUR – (7000 EUR + (5000 EUR + 4000 EUR)) = -10000 EUR
- Margin is negative so transfer to next period
- Grid 00: blank
- Grid 03: blank
- Grid 54: blank

<ins>Calculation screen</ins>:

![Image 25]()

<ins>Calculation report</ins>:

![Image 26]()

<strong><ins>Quarter 2</ins></strong>:

- Margin = sales period – (purchases period + transfer negative margin previous period)
- Margin = 11000 – (0 + 10000) = 1000 EUR
- Grid 00: blank
- Grid 03: 826.45 EUR (1000 / 1.21) (the taxable base of the margin)
- Grid 54: 173.55 EUR (the VAT of the margin)

<ins>Calculation screen</ins>:

![Image 27]()

<ins>Calculation report</ins>:

![Image 28]()

<ins>Booked invoice WMD/2</ins>:

![Image 29]()

<strong><ins>Quarter 3</ins></strong>:

- Margin = sales period – (purchases period + transfer negative margin previous period)
- Margin = 0 – (0 + 0)
- Grid 00: blank
- Grid 03: blank
- Grid 54: blank

<strong><ins>Quarter 4</ins></strong>:

- Margin = Sales full year – (purchases full year + opening stock – closing stock) – Already declared positive margins)
- Margin = (6000+11000+3500) - ((7000+6500) + (5000+4000) – (6500)) – (1000) = 3500
- Grid 00: Outgoing purchases - non-transferable negative margin of last period = (5000 + 7000 + 4000) – (0) = 16000
- Grid 03: 2892.56 (3500 / 1.21) (the taxable base of the margin)
- Grid 54: 607.44 (the VAT of the margin)
