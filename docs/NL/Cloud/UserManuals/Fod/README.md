# FOD

## 1. Inleiding

De **FOD** (Federale Overheidsdienst Financiën) levert via **MyMinFin** documenten aan en ontvangt via **Intervat** en **Belcotax-On-Web (BOW)** aangiften. De LBRP Cloud staat in voor de volledige uitwisseling met de FOD:

- **MyMinFin-documenten** (inkomend): de cloud haalt de documenten uit uw postbus op en bewaart ze in de cloud-database. De desktopapplicaties (AccoWin, BelcoFin, Finasset) downloaden ze van daaruit.
- **Intervat btw-aangiften** en **Belcotax fiches 281.20 / 281.50** (uitgaand): de desktopapplicaties sturen het XML-bestand naar de cloud; de cloud zet het om naar het juiste formaat, dient het in bij de FOD en volgt de status op.

De technische endpoints vindt u in de [Developer Handleidingen - Fod](../../DevManuals/Fod/README.md).

## 2. Applicatie activeren

Om de **FOD**-functionaliteit te kunnen gebruiken, moet de applicatie eerst geactiveerd worden voor uw organisatie. Dit kan op twee manieren:

1. **In de LBRP Cloud**: ga naar Organization - [Applications](../Identity/Applications/README.md) en activeer de applicatie **FOD**.
2. **In de desktopapplicatie** (AccoWin, BelcoFin of Finasset): in de cloud-instellingen (menu Connect), tabblad Applications.

## 3. Verbinden met de FOD via itsme (eenmalig)

De cloud heeft toegang tot uw MyMinFin-postbus nodig om documenten op te halen, en een machtiging om aangiften in te dienen bij de FOD. Deze verbinding legt u **eenmalig** vast met een aanmelding via **itsme**.

Let op: deze aanmelding kan **niet** vanuit de desktopapplicatie. Zij wordt via de LBRP Cloud geregeld en moet dan ook slechts één keer uitgevoerd worden.

Volg hiervoor deze stappen:

1. Zorg dat de applicatie **FOD** geactiveerd is voor uw organisatie (zie 2).
2. Vraag bij LBRP de aanmeldlink voor uw organisatie aan. De cloud genereert hiervoor een aanmeldingslink voor de FOD.
3. Open de link in uw browser. U komt op de aanmeldpagina van de FOD (MyMinFin).
4. Kies **itsme** en log in met de itsme-app op uw smartphone.
5. Kies de onderneming waarvoor u toegang verleent en bevestig de machtiging.
6. De FOD stuurt u terug naar de LBRP Cloud. De cloud bewaart de aanmelding veilig voor uw organisatie.

Vanaf dan verlengt de cloud de aanmelding automatisch zolang de machtiging bij de FOD actief blijft. Alleen wanneer de machtiging wordt ingetrokken, is een nieuwe itsme-aanmelding nodig.

## 4. Wat doet de cloud daarna

Na de eenmalige itsme-aanmelding werkt de cloud verder automatisch:

- Om de 6 uur haalt een achtergrondtaak de nieuwe **MyMinFin-documenten** op en bewaart ze in de cloud-database.
- **Uitgaande aangiften** (Intervat XML en Belcotax fiches) worden periodiek doorgestuurd naar de FOD en omgezet naar het juiste formaat (voor BOW: JSON Lines via de bulk API).
- De **status** van elke verzending wordt opgevolgd (Pending, Submitted, Accepted, Error) en bij een fout worden de leden van de organisatie per e-mail verwittigd.

## 5. Gebruik in de desktopapplicaties

De FOD-functionaliteit is geïntegreerd in de desktopapplicaties:

- [AccoWin](../../../Desktop/UserManuals/AccoWin/Fod/README.md) - MyMinFin-documenten, Intervat btw-aangiften en Belcotax fiches (BOW)
- [BelcoFin](../../../Desktop/UserManuals/BelcoFin/Fod/README.md) - Belcotax fiches (BOW) en MyMinFin-documenten per aangever
- [Finasset](../../../Desktop/UserManuals/Finasset/Fod/README.md) - MyMinFin-documenten per dossier
