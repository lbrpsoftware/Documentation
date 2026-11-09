# Desktop - BelcoFin - FOD / Belcotax (BOW)

## 1. Inleiding

Vanaf inkomstenjaar 2026 gebruikt de FOD Financiën voor de fiscale fiches **281.20** (bezoldigingen bedrijfsleiders) en **281.50** (commissies, makelaarslonen, handelsrestorno's, vacatiegelden, erelonen) de nieuwe toepassing **Belcotax-On-Web (BOW)**. Het XML-bestand dat BelcoFin aanmaakt kan hiervoor niet langer manueel worden geüpload via de website, maar wordt via de **LBRP Cloud** ingediend.

De LBRP Cloud zet het XML-bestand om naar het nieuwe BOW-formaat (JSON Lines), dient het in bij de FOD via de bulk API, volgt de asynchrone validatie op en verwittigt de leden van de organisatie per e-mail.

## 2. Voorwaarden

- Er is een LBRP Cloud abonnement en u bent ingelogd in de cloud (menu Connect).
- De toepassing **FOD** is geactiveerd voor uw organisatie in de LBRP Cloud.
- Er is reeds een XML-bestand aangemaakt (menu Belcotax - Aanmaken XML 281.20 / 281.50, of via Gewijzigde verzendingen). Enkel definitieve verzendingen komen in aanmerking; bij een demolicentie is er niets om door te sturen.

## 3. Verzenden

Selecteer het menu **Connect - Belcotax Fiches Upload (BOW)**.

Op het tabblad **Send** kiest u het inkomstenjaar. Met de vinkjes **Fiches 281.20** en **Fiches 281.50** bepaalt u welke soorten fiches worden getoond. BelcoFin toont alle verzendingen van het geselecteerde inkomstenjaar waarvoor een definitief XML-bestand bestaat:

- **VerzendNr**: volgnummer van de verzending.
- **Indiendatum**: datum waarop het XML-bestand werd aangemaakt.
- **BestandsNaam**: het volledige pad van het XML-bestand.
- **SoortFiche**: het type fiche (281.20 / 281.50).
- **IdentificatieNr / Aanvaard**: het identificatienummer van de FOD zoals u het eventueel al manueel registreerde.
- **VorigeVerzendingID**: ingevuld bij een gegroepeerde verbetering (een correctie op een eerdere verzending).

Selecteer de verzending(en) die u wil doorsturen en voeg ze toe aan de verzendlijst met de pijlknoppen (enkele of alle regels). Klik vervolgens op **Send to Belcotax**.

BelcoFin stuurt het XML-bestand door naar de LBRP Cloud. De cloud zet het bestand om naar het nieuwe BOW-formaat en dient het in bij de FOD. Na het versturen wordt de verzending uit de verzendlijst gehaald; eventuele fouten worden in het statusvenster getoond.

Opmerking: er wordt alleen het **XML-bestand** doorgestuurd. Het ZIP-bestand dat BelcoFin optioneel naast het XML-bestand aanmaakt is enkel bedoeld voor de manuele webflow.

## 4. Opvolgen van de verzending (tabblad Outbound)

De indiening bij de FOD gebeurt asynchroon. Op het tabblad **Outbound** volgt u de status op per document:

- **Pending**: het bestand werd ontvangen door de cloud en wordt verwerkt.
- **Submitted**: het bestand werd ingediend bij de FOD en wacht op de validatie.
- **Accepted**: de FOD heeft de verzending goedgekeurd.
- **Error**: er is een fout opgetreden; bij de regel staat een toelichting in de kolom Remark. De leden van de organisatie ontvangen hierover ook een e-mail.

Met de vinkjes bovenaan (Created, Accepted, Error) en de datumfilter kunt u bepalen welke statussen en periode worden getoond. Klik op **Refresh** om de actuele status op te halen.

Selecteer één of meer verzendingen in de lijst en klik op **Download JSON** om de JSON-variant van een doorgestuurd XML-bestand te downloaden. De cloud haalt het bewaarde XML-bestand op, zet het om naar het nieuwe BOW-formaat (JSON Lines) en slaat het resultaat op in de map waar ook de Belcotax-opgaven worden bewaard (in te stellen via menu **Parameters - Algemene opties**). Het bestand krijgt dezelfde naam als het XML-bestand, maar met de extensie `.jsonl`. Bestaat het bestand al, dan wordt er een volgnummer toegevoegd (`_1`, `_2`, ...), zodat niets wordt overschreven. De resultaten per bestand verschijnen in het statusvenster.

Opmerking: dit is enkel een omzetting en download. Er wordt niets ingediend bij de FOD; gebruik hiervoor het tabblad Send.

## 5. Manuele flow en identificatienummer

De manuele manier (het XML-bestand zelf uploaden via de BOW-website en het identificatienummer daarna registreren via de knop in het venster na het aanmaken van het XML-bestand) blijft mogelijk als alternatief, bijvoorbeeld wanneer er geen cloudverbinding beschikbaar is.

Let op: een **gegroepeerde verbetering** heeft het identificatienummer van de vorige verzending nodig. Tijdens de overgang naar de cloudflow moet u het identificatienummer van de FOD voor een via de cloud ingediend bestand dus nog steeds manueel registreren indien u later een correctie wil indienen.
