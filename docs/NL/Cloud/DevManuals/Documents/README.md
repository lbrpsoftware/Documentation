# Documenten Testen

Deze handleiding beschrijft hoe u een testorganisatie en testdocumenten kunt aanmaken in de **DEV**-omgeving.

## 1. Voorbereiding

- Zet het **btw-nummer** van de organisatie op een geregistreerd bedrijf in de Scrada-testomgeving.
- Gebruik bij voorkeur **0662348959** (indien deze nog vrij is). Dan hebt u meteen een test-btw-nummer voor zowel Scrada als de FOD-applicatie.
- Het **Plan Type** van de organisatie mag niet **Free** zijn; kies een hoger plan.

   <img src="./org.png" alt="org.png" style="width:600px;" />

LET OP 💡: Veel van de Test Scenario's gebruiken de Processor, de Rapport en de Mcp Server. Deze dienen in de DEV-omgeving omhoog te staan.

## 2. Testdata aanmaken (Seeding)

- Seed Relation Test Data

   <img src="./seed_relations.png" alt="seed_relations.png" style="width:200px;" />

- Seed Catalog Test Data

   <img src="./seed_catalogs.png" alt="seed_catalogs.png" style="width:200px;" />

## 3. Testdocument aanmaken

Maak een document (**SalesInvoice**) aan met uzelf als klant en voeg enkele documentlijnen toe.

<img src="./add_document.png" alt="add_document.png" style="width:400px;" />

## 4. Volgende stap

U kunt deze testdocumenten nu gebruiken om de **SFTP- en e-mailinbound**-verwerking te testen. Zie [SFTP en e-mail inbound testen](../Common/README.md).
