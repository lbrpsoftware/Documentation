# Desktop - AccoWin - Import (klassiek)

## 1. Inleiding

Met het submenu **Parameters > Import** leest u gegevens uit andere programma's in **AccoWin** in:

| Menu-item | Wat het importeert |
|-----------|--------------------|
| **Import Excel > Import Artikels** | Artikels uit een Excel-bestand (zie [Artikels](../Invoicing/Articles/README.md)) |
| **Import Excel > Import Klanten** | Klanten uit een Excel-bestand (zie [Basisbestanden](../Accounting/MasterFiles/README.md)) |
| **Import Excel > Import Leveranciers** | Leveranciers uit een Excel-bestand |
| **Import Cubic Dos** | Het volledige dossier uit het oude DOS-programma Cubic |
| **Import Bob 50** | Grootboek en fiches uit Bob 50 |
| **Import Winbooks** | Grootboek en fiches uit Winbooks |
| **Import Exact** | Grootboek en fiches uit Exact |

De moderne importkanalen staan elders: [UBL/Peppol](../UBL/README.md) (e-facturatie), [CODA](../Coda/README.md) (bankverrichtingen), [SODA](../Soda/README.md) (loonboekingen) en de [Backup Database](../BackupDatabase/README.md)-functie voor volledige dossiers.

## 2. Hoe een import verloopt

1. **Bereid het bronbestand voor**: een Excel-lijst met artikels, klanten of leveranciers, of een back-up/export van het brongrogramma.
2. Kies het juiste menu-item onder **Parameters > Import** en selecteer het bestand.
3. **AccoWin** leest de gegevens in en koppelt ze aan de juiste tabellen: artikels aan het artikelbestand, klanten en leveranciers aan het basisbestand, bij de programma-imports ook het dagboek en de historiek.
4. Controleer na de import de geïmporteerde fiches en het dagboek; corrigeer ontbrekende velden (rekeningen, BTW-codes, betaalwijzen) vóór u de gegevens in productie gebruikt.

## 3. Tips

- Importeer eerst een **kleine proeflijst** om de kolomindeling te valideren; pas daarna de volledige bestanden.
- Maak vóór elke grote import een **backup** van het dossier (zie [Backup Database](../BackupDatabase/README.md)).
- Bij de programma-imports (Cubic, Bob 50, Winbooks, Exact) geldt: importeer een dossier slechts één keer; dubbele imports geven dubbele fiches en boekingen.
