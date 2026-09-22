# UBL File Explorer (dashboard)

De **UBL File Explorer** opent u via menu **UBL** > **UBL File Explorer**. Dit is het dashboard om de UBL-mappen te bekijken en te beheren.

## Bestanden bekijken

- Linksboven kiest u met <ins>Verkoop / Aankoop</ins> tussen de map met verkoopfacturen en de map met aankoopfacturen uit de [UBL-instellingen](../Settings/README.md).
- Het pad boven de bestandslijst toont de map die u aan het bekijken bent. Zijn de mappen nog niet ingesteld, dan verschijnt de melding <ins>UBL FOLDERS NOT YET CONFIGURED</ins>.
- Met de vinkjes <ins>UBL</ins>, <ins>PDF</ins> en <ins>PNG</ins> filtert u de bestandslijst op bestandstype.
- Onder de bestandslijst ziet u de <ins>mappen</ins> onder de gekozen hoofdmap. Klik op een map om haar inhoud te tonen.

Selecteer een <ins>.xml</ins>-bestand om het te ontleden. Rechts verschijnen de tabs:

- <ins>Info</ins>: de belangrijkste velden van de factuur (documentnummer, data, bedragen, leverancier, klant).
- <ins>Lines</ins>: de factuurlijnen met omschrijving, aantal, prijs, bedrag en BTW.
- <ins>Extra</ins>: aanvullende gegevens zoals betaalwijze, IBAN, adressen en totalen.
- <ins>XML</ins>: de ruwe XML-tekst van het bestand (alleen lezen).

## Zoeken op factuurinfo

Met het <ins>Filter</ins>-veld zoekt u in de bestandslijst op de inhoud van de facturen: de bestandsnaam én de velden van de tab <ins>Info</ins> (documentnummer, namen, BTW-nummers, bedragen...). Het filter is niet hoofdlettergevoelig en werkt alleen op <ins>.xml</ins>-bestanden. Met <ins>Exclude</ins> keert u de selectie om: alle bestanden die <ins>niet</ins> voldoen, worden getoond. Bij het filterlabel staat het aantal treffers.

## Bestanden beheren

Met een rechtermuisklik op een bestand opent u het menu:

- <ins>Open</ins>: het bestand openen ter weergave (bijvoorbeeld een PDF).
- <ins>Move to</ins>: het bestand verplaatsen naar een andere map.
- <ins>Delete</ins>: het bestand wissen (samen met een eventueel gelijknamig <ins>.pdf</ins>-bestand), na bevestiging.

Met een rechtermuisklik op de mappenlijst maakt u een nieuwe map, of hernoemt of wist u een bestaande map (wissen gebeurt met heel haar inhoud).

Met de knop <ins>toevoegen</ins> kopieert u bestanden vanuit een dialoogvenster naar de map die u aan het bekijken bent.

## Bijlagen (embedded documents)

UBL-facturen kunnen bijlagen bevatten, bijvoorbeeld de PDF van de factuur. Deze verschijnen in de lijst <ins>embedded documents</ins>:

- Dubbelklik op een bijlage om ze te bewaren naast het XML-bestand en te openen.
- Met een rechtermuisklik kunt u een bijlage <ins>openen</ins>, een nieuwe bijlage <ins>toevoegen</ins> of een bestaande <ins>verwijderen</ins> (dit past het XML-bestand aan, zie [Beveiliging](#beveiliging)).

## Naar Peppol en conversie

- <ins>Send to Peppol</ins>: opent het venster <ins>Send UBL's to Peppol</ins> (zie [Send UBL to Peppol](../SendToPeppol/README.md)) met het geselecteerde bestand al klaargezet in de verzendlijst.
- <ins>Convert</ins>: opent het conversievenster (zie [Conversion (PDF <-> UBL)](../Conversion/README.md)) met de tab <ins>Converts</ins> gefilterd op het huidige bestand.
- <ins>Import from Cloud</ins>: downloadt nieuwe documenten uit de LBRP Cloud (zie [Import UBL from Cloud Platform](../CloudImport/README.md)) en vernieuwt daarna de bestandslijst.
- <ins>Analyze</ins>: laat de AI het geselecteerde bestand analyseren; kies eerst het <ins>AI-model</ins> in het keuzeveld. Hiervoor is een actieve cloudverbinding nodig.

## Beveiliging

- De <ins>verwerkte</ins> mappen uit de UBL-instellingen (verkoop en aankoop) zijn <ins>read-only</ins>: u kunt er bestanden bekijken en openen, maar niet toevoegen, wissen, verplaatsen of bewerken. Ook de map zelf kan niet hernoemd of verwijderd worden.
- Het aanpassen van XML-bestanden — factuurgegevens bewerken en opslaan, bijlagen toevoegen of verwijderen — kan enkel door een gebruiker met de rol <ins>Beheerder</ins> of <ins>Superuser</ins>. Voor andere gebruikers zijn de bewerkbare velden en de knop <ins>bewaren</ins> uitgeschakeld.

---

[Terug naar het UBL-overzicht](../README.md)
