# Synchronisatie vanuit andere softwarepakketten

## Wat is dit?

Met behulp van onze twee **synchronisatie** mogelijkheden, via E-mail of directe SFTP, automatiseer je de ontvangst van UBL-bestanden, PDF-bestanden en CODA-gegevens van populaire derde-partij boekhoudpakketten zoals **Billit**, **BillToBox**, **CoManage**, **OkiOki** en vele anderen.

Bestanden worden door de diverse providers naar ons cloud platform verzonden om daarna rechtstreeks te kunnen downloaden in een **AccoWin** dossier.

**Voordelen:**

- Geen handmatig downloaden of uploaden meer tussen verschillende pakketten
- Veilige en geautomatiseerde sync via E-mail of directe SFTP.
- Geschikt voor boekhoudkantoren en zelfstandigen.

## Hoe werkt het (in het kort)?

1. [AccoWin Setup](Accowin/README.md): Activeer een speciaal E-mail adres of maak de nodige SFTP-gebruiker(s) aan in AccoWin om de bestanden naartoe te sturen.
2. [Provider Setup](README.md#providers): Deel het E-mail adres of de SFTP-gegevens met uw klant en configureer de koppeling in het boekhoudpakket van de provider.
3. Het boekhoudpakket stuurt bestanden naar ons cloud plaform dmv de ingestelde koppeling.
   Dit kan automatisch of handmatig zijn naargelang de mogelijkheden van de provider en de gekozen synchronisatie methode.
4. De bestanden kunnen in AccoWin worden gedownload via het menu **UBL > Import UBL from Cloud**.

**💡 Voor boekhoudkantoren**: Deel het speciale E-mail adres, per dossier, met uw klanten.  
**💡 Voor zelfstandigen**: Gebruik SFTP voor een directe overdracht.

## Keuze van de geschikte synchronisatie methode

Enkel overwegingen dienen in acht te worden genomen bij de keuze van de synchronisatie methode die het best bij uw situatie past.

Indien u meerdere dossiers beheerd raden wij aan om via E-mail te synchroniseren (_bv. boekhouders_):

- Slechts 1 email account moet worden aangemaakt in Accowin.
  _Het toevoegen van het BTW-nummer aan de naam van dit E-mail account is voldoende ter identificatie van het dossier van de verzender._
- Er moeten geen inlog-gegevens worden gedeeld met uw klant. Dit is iets minder veilig - vergissingen zijn snel gemaakt.
- Het versturen via E-mail moet bij sommige providers handmatig gebeuren.
- Wijzigingen aan de inhoud of structuur van de verzonden E-mail door een provider kan tijdelijke fouten veroorzaken bij het verwerken door ons.
- Het downloaden van bestanden in Accowin, voor alle dossiers, kan enkel in het eigen dossier gebeuren.
  Het BTW-nummer, dat werd gebruikt als toevoeging aan de naam van het E-mail account, zorgt ervoor dat binnenkomende bestanden naar het correcte dossier
  worden verplaatst.

Indien u slechts 1 (of enkele) dossiers, en tevens de toegang tot de applicatie van een provider, onder eigen beheer hebt, kunt u best via SFTP synchroniseren.
Is dit niet het geval neem dan de volgende punten in acht:

- Dossiers die geen toegang mogen hebben tot bestanden van andere dossiers moeten expliciet unieke SFTP-gegevens krijgen.
  Het is altijd mogelijk om via andere tools (zoals FileZilla) een connectie te maken naar de SFTP-server, waardoor alle bestanden, voor die SFTP-gebruiker, kunnen worden bekeken.
  Indien dezelfde login-gegevens door meerdere partijden werd gebruikt is het dus mogelijk om bestanden van iemand anders te zien mbv tools zoals FileZilla.
- Per Dossier moet er een SFTP-gebruiker worden aangemaakt en gedeeld met de klant.
- Het versturen via SFTP, door andere providers, is meestal automatisch.
- Het downloaden van bestanden in Accowin moet in het dossier gebeuren waar de SFTP-gebruiker werd aangemaakt.
  
## Configuratie per Providers

- [Billit](Billit/README.md)
- [BillToBox](BillToBox/README.md)
- [CoManage](CoManage/README.md)
- [OkiOki](OkiOki/README.md)
