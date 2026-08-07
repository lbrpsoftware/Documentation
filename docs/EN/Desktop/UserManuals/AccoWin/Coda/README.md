# Desktop - AccoWin - Coda

## 1. Introduction

With this module you can import and process electronic bank statements from your bank in Accowin.

The module has various methods to recognize the bank transactions and assign them to the correct customer, supplier or general ledger account

## 2. Setting up the parameters for CODA

### 2.1 Settings for CODA

#### 2.1.1 General settings

Via the menu CODA - Settings the settings screen is shown:

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015161809/original/DcfW5MF6TM3GdyEgOU3SkKusgx6bdmIb0g.png?1654070813)

- Suspense account for unassigned transactions: <br/>
  Enter the account number for the transactions that cannot be assigned automatically; it is best to use a separate suspense account for this.
- Directory for manually processed CODA files: <br/>
  Select the folder to which the <ins>manually</ins> processed CODA files are moved after importing. <br/>
  In a following screen you can specify the folders for automatically processed CODA files received from services such as Codabox. <br/>
  If necessary, create the folder(s) in advance via Windows Explorer.
- Put year in front of bank statement number: <br/>
  It is recommended to put the year in front of the bank statement number; this is especially important when a financial year spans multiple calendar years.
- Search on name of the counterparty in coda: <br/>
  If this option is checked, the program will also search on the name of the counterparty of a bank transaction. If the customers or suppliers are created by retrieving the data via \"VIES\", they will be found faster.
- Search for CODA files when opening dossier: If this option is on and CODA files are available, the program shows a notification.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015161878/original/O9BkRufLtVecJatimxMex36QTaepq2CkNQ.png?1654070830)

#### 2.1.2 Directories for the received CODA files to be processed.

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015163558/original/LVYPLnKuVmXWv1mzvdoV_wU_J4I5Mqqe7w.png?1654071285)

In this screen you specify the folders where CODA files are received to be processed. Multiple folders can be included in the list. If there are multiple dossiers, separate folders must be created per dossier so that they can be assigned per dossier.
For each folder, also specify the folder to which the processed files must be moved.

#### 2.1.3 Keywords

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015163808/original/EMHo9DZKJL-wVa_Jt27aAV6ExHkUoyySwA.png?1654071354)

Via keywords, the program can assign a bank transaction to a customer / supplier or general ledger account based on the remark in the transaction. You can use wildcard characters.

Some examples:

- Keyword \"**WEDDE** \*\", book to 3.Gen **455000**: If the program finds the word WEDDE, it will book the transaction to general ledger account 455000.
- Direct debits from suppliers: For the keyword, enter the mandate number of the direct debit and for Book to select 2.sup and the supplier to assign the transaction to the supplier.

#### 2.1.4 Transaction codes

Each line in a CODA file contains a transaction code that is standard for all Belgian banks and indicates the type of transaction. In this screen you can link the transaction codes to the general ledger account on which they should be booked.

This way you can link all financial costs to a general ledger account 65.... or received interest to 75....

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164056/original/kHKfINHDNqwwBEd80H92AdNNK8ssmypOew.png?1654071421)

It is possible to link multiple transaction codes to the same general ledger account in one go.

Example: if different codes need to be booked to the general ledger account bank costs 655910, proceed as follows:

- select all codes by checking the checkbox at the front of the grid
- click the button ![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164137/original/NJdfJB5xS2uEe5hDYYg58i_Tvouy-Y-AFQ.png?1654071441)
- select the general ledger account on which to book.

You now get a message that the codes have been assigned to the general ledger account

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164138/original/DY-3jf3tzXxDb2kHgO7iy_xqaCka-U0vqw.png?1654071441)

**Tip: If the list is sorted by Description and Costs is entered in the filter, all transaction codes related to costs are grouped together in the list and can quickly be assigned to the general ledger account(s) on which the bank costs are booked**.

#### 2.1.4 Categories

Just like the transaction codes, a category is also linked to each line in a CODA file.

The procedure for categories is the same as for the transaction codes

### 2.2 Setting up the journals

Via the menu \"**Parameters > Manage journals**\" we can set up the journals for importing CODA files.

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164858/original/797pTzg2TPx28wSVDHyoN0TPt-QqiSuExg.png?1654071678)

At the bottom, enter the IBAN account number of the bank account for the journal.

Tip: if you want to automatically create an overview for CODABOX from the program, you must enter the following at name: Name of the bank followed by a colon; the part before ':' will be included as the name of the institution in the overview for CODABOX.

### 2.2 Setting the payment reference type

If the invoicing module is used, the program can automatically create a payment reference when drawing up an invoice.

Via the menu \"**Parameters > Screen options** \" you can specify on the Sales invoice tab which type of payment reference should be created. Usually a structured communication is chosen here.

If the customer mentions that structured communication with his payment, the invoice in question is automatically checked off when the bank statement is read.

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015165780/original/z_yAd_jN5Nksxe0lglqwxffQpFKP7mkLyQ.png?1654071898)

## 3. Recognizing customer or supplier based on a bank account

While processing the CODA files, the program searches the customers and suppliers for the account number of the counterparty. The account number of the customers and suppliers can be specified on the record in the tab \"**General 2**\".

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015170458/original/tKepc9uhg9Nanq1AlSpaMqgc0lz3QK5gPw.png?1654073037)

If, during the processing of the CODA files, we assign a line to a customer or supplier, the account number of the counterparty for that line can automatically be assigned to the customer.

(see further at: ![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015170838/original/6yl4jz60cvMibsrezY9H4AWhI06yn2bZUw.png?1654073155) )
