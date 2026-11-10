# Desktop - AccoWin - Import (classic)

## 1. Introduction

With the submenu **Parameters > Import** you read data from other programs into **AccoWin**:

| Menu item | What it imports |
|-----------|-----------------|
| **Import Excel > Import Artikels** (Articles) | Articles from an Excel file (see [Articles](../Invoicing/Articles/README.md)) |
| **Import Excel > Import Klanten** (Customers) | Customers from an Excel file (see [Master files](../Accounting/MasterFiles/README.md)) |
| **Import Excel > Import Leveranciers** (Suppliers) | Suppliers from an Excel file |
| **Import Cubic Dos** | The complete dossier from the old DOS program Cubic |
| **Import Bob 50** | Ledger and records from Bob 50 |
| **Import Winbooks** | Ledger and records from Winbooks |
| **Import Exact** | Ledger and records from Exact |

The modern import channels live elsewhere: [UBL/Peppol](../UBL/README.md) (e-invoicing), [CODA](../Coda/README.md) (bank transactions), [SODA](../Soda/README.md) (payroll bookings) and the [Backup Database](../BackupDatabase/README.md) function for complete dossiers.

## 2. How an import runs

1. **Prepare the source file**: an Excel list with articles, customers or suppliers, or a backup/export of the source program.
2. Choose the right menu item under **Parameters > Import** and select the file.
3. **AccoWin** reads the data and links them to the right tables: articles to the article file, customers and suppliers to the master files; with the program imports also the journal and the history.
4. Check the imported records and the journal afterwards; complete missing fields (accounts, VAT codes, payment methods) before you use the data in production.

## 3. Tips

- Import a **small test list** first to validate the column layout; only then the complete files.
- Make a **backup** of the dossier before every big import (see [Backup Database](../BackupDatabase/README.md)).
- For the program imports (Cubic, Bob 50, Winbooks, Exact) holds: import a dossier only once; double imports give double records and bookings.
