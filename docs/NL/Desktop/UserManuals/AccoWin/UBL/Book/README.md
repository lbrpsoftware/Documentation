# Hoe de UBL- bestanden importeren?

> **Let op:** dit is de oudere handleiding voor het scherm <ins>Inlezen UBL</ins> (`ImportUblForm`). De actuele beschrijving vindt u in [Inlezen UBL bestanden](../Import/README.md) en [Instellingen UBL](../Settings/README.md). Terug naar het [UBL-overzicht](../README.md).

Accowin voor het inlezen van UBL te installeren.

Via menu: UBL import - instellingen UBL

<img src="./1.png" alt="1.png" style="width:600px;"/>

U kan dan de parameters voor het verwerken van de UBL bestanden instellen via het menu “UB-import” – Instellingen UBL.
Billit gaat een map voorzien waarin uw aankoopfacturen in UBL formaat (en eventueel verkoopfacturen) worden geplaatst.

Deze mappen moet u opgeven op de verschillende tabbladen van de instellingen:

<img src="./2.png" alt="2.png" style="width:600px;"/>

De mappenstructuur kan u best als volgt opbouwen:

(Vergelijkbaar met de verwerking van CODA bestanden)

Een map voor elk dossier (0123456789)
Daaronder een map voor de aankopen en een map voor de verkopen
Onder deze mappen een submap voor de verwerkte facturen en eventueel voor facturen die u later wenst te verwerken omdat ze moeten worden nagekeken of reeds voor een volgende boekingsperiode zijn.

<img src="./3.png" alt="3.png" style="width:600px;"/>

Er wordt ook een map voorzien voor UBL facturen die u manueel zou verwerken.

Voor de verkopen dient u op te geven op welke grootboekrekeningen  en in welk dagboek standaard wordt geboekt, maar ik heb begrepen dat u de verkoopfacturen opleest via de XML van Accowin.

<img src="./4.png" alt="4.png" style="width:600px;"/>

Voor de aankopen geeft u het standaard dagboek, de standaard aankooprekening  en de rekeningen voor toepassing van korting kontant of aankopen vrijgesteld van BTW.
Geef ook de standaard BTW codes in voor aankopen medecontractant of intracom.

<img src="./5.png" alt="5.png" style="width:600px;"/>

Als u het vinkje aanzet bij “Stempel met boekingsdocument aanbrengen in PDF”, zal in de PDF van de factuur een stempel worden gezet met de verwijzing naar het dagboek en documentnummer van de boeking van de factuur.

<img src="./6.png" alt="6.png" style="width:600px;"/>

U kan de UBL facturen op 2 manieren verwerken:

1) Via het globaal scherm waar alle UBL facturen worden getoond die in de mappen van de aankopen en verkopen klaar staan:

Hier wordt per document een voorstel van boeking getoond.
Klanten / Leveranciers die niet bestaan, kunnen worden aangemaakt door op  te klikken.

<img src="./7.png" alt="7.png" style="width:600px;"/>

<img src="./8.png" alt="8.png" style="width:600px;"/>

Selecteer de facturen die u wenst in te boeken.

Deze worden dan naar het scherm voor het inboeken van de aankopen en verkopen gezonden om te worden ingeboekt.

(Deze methode wordt vooral gebruikt voor verkoopfacturen)

2) Via het scherm voor het inboeken van de aankopen of verkopen:

Selecteer het factuurnummer en druk op F2 of klik op de knop “UBL importeren (F2)”

<img src="./9.png" alt="9.png" style="width:600px;"/>

Zie dan de lijst met UBL bestanden.

Selecteer een bestand om in te lezen. De gegevens worden opgehaald en ingevuld in het scherm.

<img src="./10.png" alt="10.png" style="width:600px;"/>

In het afzonderlijk scherm wordt de PDF uit de UBL getoond. (Indien de PDF niet getoond word of u op de PDF wenst in te zoomen, kan u klikken op de knop

Indien de leverancier gekend is en op de leveranciersfiche werd een standaard boekingsrekening ingevuld, zal die grootboekrekening worden voorgesteld als boeking.

Als de boekingen kloppen, kan u de factuur goedkeuren via F12. (of de knop “Document inboeken”)

Na het inboeken van de factuur, wordt deze verplaatst naar de door u opgegeven map voor verwerkte facturen.

Omdat de PDF van de factuur beschikbaar is, kan u in de historiek bij de leveranciers (of klanten) de PDF oproepen.

<img src="./11.png" alt="11.png" style="width:600px;"/>

Klik met de rechter muisknop op de lijn van de boeking in de historiek en selecteer “Toon document”

De PDF zal worden getoond.

Documenten die niet of later moeten worden verwerkt kunnen worden verplaatst naar een afzonderlijke map

<img src="./12.png" alt="12.png" style="width:600px;"/>

Opties Verkoopfacturen

<img src="./13.png" alt="13.png" style="width:600px;"/>

Opties Aankoopfacturen

<img src="./14.png" alt="14.png" style="width:600px;"/>

Importeren van UBL facturen

<img src="./15.png" alt="15.png" style="width:600px;"/>

Datum en factuurnummer (enkel voor verkopen) kan worden aangepast.

Het factuurnummer voor verkopen wordt nu anders herkend zodat er minder risico is dat voor alle verkopen hetzelfde nummer wordt gegenereerd

01/2018 => 12018 en 02/208 => 22018 en niet meer 2018 voor beide facturen

Het scherm van de PDF kan beter worden geselecteerd.

<img src="./16.png" alt="16.png" style="width:600px;"/>

