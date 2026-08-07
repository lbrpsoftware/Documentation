# Testing Documents

This manual describes how you can create a test organization and test documents in the **DEV** environment.

## 1. Preparation

- Set the **VAT number** of the organization to a registered company in the Scrada test environment.
- Preferably use **0662348959** (if it is still available). That way you immediately have a test VAT number for both Scrada and the FOD application.
- The **Plan Type** of the organization may not be **Free**; choose a higher plan.

   <img src="./org.png" alt="org.png" style="width:600px;" />

NOTE 💡: Many of the Test Scenarios use the Processor, the Report and the Mcp Server. These need to be running in the DEV environment.

## 2. Creating test data (Seeding)

- Seed Relation Test Data

   <img src="./seed_relations.png" alt="seed_relations.png" style="width:200px;" />

- Seed Catalog Test Data

   <img src="./seed_catalogs.png" alt="seed_catalogs.png" style="width:200px;" />

## 3. Creating a test document

Create a document (**SalesInvoice**) with yourself as the customer and add some document lines.

<img src="./add_document.png" alt="add_document.png" style="width:400px;" />

## 4. Next step

You can now use these test documents to test the following matters

- [Testing SFTP and Email Inbound](../Common/README.md)
- [Testing Scrada Inbound](../Scrada/README.md)
