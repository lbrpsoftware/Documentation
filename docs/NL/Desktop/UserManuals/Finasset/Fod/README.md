# Desktop - Finasset - FOD (MyMinFin)

## 1. Inleiding

Via de LBRP Cloud haalt Finasset documenten op uit uw **MyMinFin**-postbus bij de **FOD Financiën** (Federale Overheidsdienst). De cloud verzamelt de documenten voor uw organisatie; Finasset downloadt ze per bedrijf (dossier) naar uw pc.

## 2. Voorwaarden

- Er is een LBRP Cloud abonnement en u bent ingelogd in de cloud (menu Connect).
- De toepassing **FOD** is geactiveerd voor uw organisatie. Dit kan in Finasset via de cloud-instellingen (tabblad Applications) of in de LBRP Cloud zelf (Organization - Applications).
- Er is eenmalig een **itsme**-verbinding met de FOD gemaakt via de LBRP Cloud. Dit gebeurt normaal slechts één keer. Zie [FOD](../../../../Cloud/UserManuals/Fod/README.md) in het gedeelte over de LBRP Cloud.

## 3. MyMinFin-documenten ophalen

Selecteer het menu **Connect - MyMinFin Documents**.

Finasset werkt standaard met de organisatie van het actieve dossier (bovenaan ziet u Organization, Dossier en BTWNr.). Is er aan het dossier geen cloud-organisatie gekoppeld of is er geen dossier open, dan valt Finasset terug op uw eigen organisatie van de cloud-aanmelding.

### 3.1 Tabblad Inbound

- Met **Refresh** haalt u de beschikbare documenten op uit de cloud.
- Met het vinkje **Only not Downloaded** toont Finasset enkel de documenten die nog niet werden gedownload. Zet u het vinkje uit, dan filtert u op de datum **Search after...** (standaard 7 dagen terug).
- Verwerpte documenten worden met een groene achtergrond weergegeven.
- Selecteer de documenten die u wil downloaden (met de selecteerknoppen kiest u alle of geen regels) en klik op **Download**.

Finasset zoekt bij elk geselecteerd document het bedrijf op aan de hand van het ondernemingsnummer (10 cijfers) in uw dossiers (rekening houdend met uw gebruikersrechten) en bewaart het bestand in de map van dat bedrijf. De bestandsnaam wordt uniek gemaakt met de datum van het document en zo nodig een volgnummer, zodat niets wordt overschreven. Gedownloade documenten worden in de cloud als verwerkt gemarkeerd en verschijnen daarna niet meer bij **Only not Downloaded**. Het resultaat per bestand verschijnt in het statusvenster; de voortgang ziet u in de tijdbalk.

Dubbelklik op een regel om het bestand te openen.

### 3.2 Tabblad Downloads

Op het tabblad **Downloads** beheert u de gedownloade bestanden:

- **Root Directory**: de map waar de documenten worden bewaard.
- **Archive**: verplaatst de geselecteerde bestanden naar de submap Archived.
- **Delete**: verwijdert de geselecteerde bestanden.
- Dubbelklik opent het geselecteerde bestand.

## 4. Zie ook

- [FOD in de LBRP Cloud](../../../../Cloud/UserManuals/Fod/README.md) - de toepassing activeren en de eenmalige itsme-aanmelding