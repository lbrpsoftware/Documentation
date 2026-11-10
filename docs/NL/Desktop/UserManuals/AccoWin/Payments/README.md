# Desktop - AccoWin - Boekhouding - Afpunten

## 1. Inleiding

Afpunten koppelt betalingen aan de bijhorende facturen, zodat u ziet welke facturen nog openstaan. **Accowin** kent drie manieren om af te punten:

- **Handmatig afpunten**: per boeking, vanuit de historiek van de klant of leverancier.
- **Automatisch afpunten**: via **Boekhouding > Afpunten > Klanten** (of **Leveranciers**) laat u **Accowin** alle openstaande posten in één keer koppelen.
- **Tijdens het boeken**: in het financieel dagboek punt u de betaling meteen af (zie [Dagboeken](../Accounting/Journals/README.md)).

Een klant of leverancier wiens saldo nul wordt, is **logisch afgepunt**: alle posten zijn gekoppeld en het openstaande saldo is 0.

**Let op**: voor het manuele afpunten heeft uw gebruiker het recht **handmatig afpunt** nodig.

## 2. Handmatig afpunten vanuit de historiek

1. Open de klant of leverancier via [Basisbestanden](../Accounting/MasterFiles/README.md) en ga naar de tab **Historiek (F9)**.
2. Selecteer de betaling en klik op **Afpunten**. Het scherm **Afpunten** opent.
3. In de lijst **Afpunten boekingen** ziet u de openstaande posten met **dagboek**, **documentnummer**, **datum**, **valuta**, **kommentaar** en **betaalreferentie**.
4. Zet een vinkje bij de posten die u aan de betaling koppelt. Onderaan ziet u het **totaal afpuntingen** en het **bedrag** van de boeking.
5. Wijkt het totaal af van de betaling, dan ziet u dit onder **Afpuntingsverschillen** met het **verschil**. Met **Verschil inboeken als** boekt u het verschil meteen naar een rekening naar keuze, bijvoorbeeld een BTW- of valutaverschil.
6. Klik op **Opnemen (F12/F7)** om de afpunting te bewaren, of ga met **Verder (Shift+Page Down)** naar de volgende openstaande betaling. Met **Sluiten (F4)** verlaat u het scherm.

Met **Annul. afpuntingen** in de historiek maakt u een afpunting ongedaan.

## 3. Automatisch afpunten

1. Kies **Boekhouding > Afpunten > Klanten - logische afpunting en nulsaldo's** (of de leveranciersvariant).
2. **Accowin** zoekt alle betalingen die automatisch kunnen worden gekoppeld: op **bedrag** en op **betaalreferentie** (bijvoorbeeld de gestructureerde mededeling van de factuur).
3. Klik op **Start**. **Accowin** verwerkt de koppelingen en rapporteert wat is afgepunt.

De klanten en leveranciers die daarna op nul staan, zijn logisch afgepunt.

## 4. Afpunten en CODA

Wanneer u CODA-bestanden inleest (zie [Coda](../Coda/README.md)), probeert **Accowin** elke bankverrichting meteen af te punten:

- via de **betaalreferentie** die de klant vermeldt (gebruik gestructureerde mededelingen — zie [Facturatie](../Invoicing/README.md));
- via het **rekeningnummer** van de tegenpartij op de fiche;
- via **sleutelwoorden** en **verrichtingscodes** die u in de CODA-instellingen opgeeft.

Niet-herkende verrichtingen komen op de wachtrekening; u wijst ze handmatig toe en punt ze daarna af.

## 5. Tips

- Loop voor de [BTW-aangifte](../Vat/README.md) en de [boekjaarafsluiting](../YearEnd/README.md) de vervaldagenbalans na (zie [Rapporten](../Reports/Lists/README.md)): wat niet is afgepunt, blijft openstaan.
- Gebruik gestructureerde **betaalreferenties** in de facturatie: daarmee wordt het grootste deel van de betalingen automatisch afgepunt.
- Kleine verschillen (valuta, BTW) boekt u rechtstreeks weg via **Verschil inboeken als** in het afpuntscherm.
