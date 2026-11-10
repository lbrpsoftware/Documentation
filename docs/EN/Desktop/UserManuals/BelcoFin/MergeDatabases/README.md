# Desktop - BelcoFin - Merging databases

## 1. Introduction

With **Parameters > Databases samenvoegen** (Merge databases) you merge the data of another **Belcofin** database (for example a backup of a colleague's office or an old working database) with the database you are working in right now. All records, declarants, beneficiaries, directors and employees from the source file are **added** to the current database.

**Warning**: the merge is irreversible. The data are physically included in the target database; a completed merge cannot simply be rolled back.

## 2. Preparation

1. **Make a backup first** of the database you work in (see [Backup Database](../BackupDatabase/README.md)). Also note where the backup you want to merge is located.
2. Check in **Parameters > Algemene opties** (General options) the **reference settings** (numeric or alphabetic, reference length) of declarants, beneficiaries, directors and employees: **Belcofin** renumbers the references from the source file following these settings.
3. Make sure you are the only user: let nobody else work in the target or source database during the merge.

## 3. Running the merge

1. Choose **Parameters > Databases samenvoegen**.
2. **Belcofin** asks for the **backup** of the database you want to merge. Select the file.
3. **Belcofin** reads the data from the backup, **renumbers the identifiers and references** (declarants, beneficiaries, directors, employees, filings and sendings) so they do not collide with the existing records, and then adds everything to the open database.
4. Afterwards you see whether the merge succeeded; the filing references are updated in the options.

## 4. After the merge

1. Check the **declarants, beneficiaries and directors** for duplicates: the same person existing in both databases probably stands there twice now.
2. Go through the **check lists**: **Finprof > Controlelijst fiches 281.20 / weddefiches** and the overview of wages without record 281.20.
3. Check that the **sendings** from the source database came across correctly, so you do not file a return twice or incompletely.

## 5. Tips

- Run the merge **before** creating new returns, never during a return period.
- Discuss beforehand which database is the **target**: the database that is open during the merge receives the data.
- For large source databases it is wise to try the merge first on a copy of the target database.
