# Desktop - AccoWin - Coda

## 1. Inleiding

Met deze module kan u elektronische bankafschriften van uw bank inlezen en verwerken in Accowin.

De module beschikt over verschillende methoden om de bankverrichtingen te herkennen en toe te wijzen aan de juiste klant, leverancier of algemene rekening

## 2. Instellen van de parameters voor CODA

### 2.1 Instelling voor CODA

#### 2.1.1 Algemene instelling

Via het menu CODA - Instellingen wordt het scherm voor de instellingen getoond:

![Image 1](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015161809/original/DcfW5MF6TM3GdyEgOU3SkKusgx6bdmIb0g.png?1654070813)

- Wachtrekening niet toegewezen verrichtingen: <br>
  Geef hier het rekeningnummer voor de verrichtingen die niet automatisch kunnen worden toegewezen, hiervoor gebruikt u best een afzonderlijke wachtrekening.
- Directory manueel verwerkte CODA bestanden: <br>
  Selecteer de map waarnaar de <ins>manueel</ins> verwerkte CODA bestanden worden verplaatst na het inlezen. <br>
  In een volgend scherm kan u de mappen opgeven voor automatisch te verwerken CODA bestanden die ontvangen worden van diensten zoals Codabox. <br>
  Maak eventueel vooraf de map(pen) aan via Windows verkenner.
- Jaartal voor nummer bankafschrift zetten: <br>
  Het is aan te raden het jaartal voor het nummer van het bankafschrift te zetten, dit is vooral belangrijk wanneer een boekjaar over meerdere kalenderjaren loopt.
- Zoeken op naam van de tegenpartij in coda: <br>
  Indien deze optie wordt aangevinkt, gaat het programma ook zoeken op de naam van de tegenpartij van een bankverrichting. Als de klanten of leveranciers worden aangemaakt via het ophalen van de gegevens via \"VIES\", worden deze sneller gevonden.
- Zoeken naar CODA bestanden bij openen dossier: Indien deze optie aan staat en er zijn CODA bestanden beschikbaar, toont het programma een melding.

![Image 2](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015161878/original/O9BkRufLtVecJatimxMex36QTaepq2CkNQ.png?1654070830)

#### 2.1.2 Directories voor de ontvangen te verwerken CODA bestanden.

![Image 3](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015163558/original/LVYPLnKuVmXWv1mzvdoV_wU_J4I5Mqqe7w.png?1654071285)

In dit scherm geeft u de mappen op waar CODA bestanden ontvangen worden om te worden verwerkt. Er kunnen meerdere mappen in de lijst worden opgenomen. Indien er meerdere dossiers zijn, moeten per dossier afzonderlijke mappen worden aangemaakt zodat deze per dossier kunnen worden toegewezen.
Geeft voor elke map ook de map op waarnaar de verwerkte bestanden moeten worden verplaatst.

#### 2.1.3 Sleutelwoorden

![Image 4](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015163808/original/EMHo9DZKJL-wVa_Jt27aAV6ExHkUoyySwA.png?1654071354)

Via sleutelwoorden kan het programma op basis van de opmerking in een bankverrichting deze gaan toewijzen aan een klant / leverancier of algemene rekening. U kan gebruik maken van joker-tekens.

Enkele voorbeelden:

- Sleutelwoord \"**WEDDE** \*\", boeken op 3.Alg **455000**: Als het programma het woord WEDDE vindt, gaat het de verrichting boeken op grootboekrekening 455000.
- Domicilieringen van leveranciers: Vul bij sleutelwoord het mandaatnummer in van de domiciliering en bij Boeken op selecteert u 2.lev en de leverancier om de verrichting aan de leverancier toe te wijzen.

#### 2.1.4 Verrichtingscodes

Elke lijn in een CODA Bestand is bevat een verrichtingscode die standaard is voor alle Belgische banken en het soort verrichting aangeeft. U kan in dit scherm de verrichtingscodes koppelen aan de grootboekrekening waarop ze moeten worden geboekt.

Zo kan u alle financiële kosten koppelen aan een grootboekrekening 65.... of ontvangen intresten aan 75....

![Image 5](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164056/original/kHKfINHDNqwwBEd80H92AdNNK8ssmypOew.png?1654071421)

Het is mogelijk om in één keer meerdere verrichtingscodes te koppelen aan eenzelfde grootboekrekening.

Voorbeeld: indien verschillende codes moeten worden geboekt op de grootboekrekening bankkosten 655910, gaat u als volgt te werk:

- selecteert u alle codes door het vinkje vooraan in de grid aan te zetten
- klik op de knop ![Image 6](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164137/original/NJdfJB5xS2uEe5hDYYg58i_Tvouy-Y-AFQ.png?1654071441)
- selecteer de grootboekrekening waarop moet worden geboekt.

U krijgt nu een melding dat de codes werden toegewezen aan de grootboekrekening

![Image 7](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164138/original/DY-3jf3tzXxDb2kHgO7iy_xqaCka-U0vqw.png?1654071441)

**Tip: Als de lijst wordt gesorteerd op Omschrijving en bij filter Kosten wordt ingevoerd, komen alle verrichtingscodes die betrekking hebben op kosten bij mekaar te staan in de lijst en kunnen deze snel worden toegewezen aan de grootboekrekening(en) waarop de bankkosten worden geboekt**.

#### 2.1.4 Rubrieken

Net zoals de verrichtingscodes is er ook een rubriek gekoppeld aan elke lijn in een CODA Bestand.

De werkwijze voor rubrieken is dezelfde als voor de verrichtingscodes

### 2.2 Instellen van de dagboeken

Via het menu \"**Parameters > Beheer dagboeken**\" kunnen we de dagboeken instellen voor het inlezen van CODA Bestanden.

![Image 8](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015164858/original/797pTzg2TPx28wSVDHyoN0TPt-QqiSuExg.png?1654071678)

Vul onderaan het IBAN rekeningnummer in van de bankrekening voor het dagboek.

Tip: als u automatisch vanuit het programma een overzicht voor CODABOX wil aanmaken, moet u bij naam het volgende ingeven: Naam van de bank gevolgd door dubbele punt, het deel voor ':' zal als naam van de instelling worden opgenomen in het overzicht voor CODABOX.

### 2.2 Instellen type betaalreferte

Als gebruik gemaakt wordt van de module facturatie, kan het programma automatisch een betaalreferte aanmaken bij het opstellen van een factuur.

Via het menu \"**Parameters > Scherm opties** \" kan op de tab Verkoopsfactuur opgegeven worden welk type van betaalreferte moet worden aangemaakt. Meestal wordt hier gekozen voor een gestructureerde mededeling.

Als de klant die gestructureerde mededeling vermeldt bij zijn betaling, wordt bij het oplezen van het bankafschrift de desbetreffende factuur automatisch afgepunt.

![Image 9](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015165780/original/z_yAd_jN5Nksxe0lglqwxffQpFKP7mkLyQ.png?1654071898)

## 3. Herkennen klant of leverancier op basis van een bankrekening

Het programma zoekt tijdens het verwerken van de CODA bestanden bij klanten en leveranciers naar het rekeningnummer van de tegenpartij. Het rekeningnummer van de klanten en leveranciers kan op de fiche worden opgegeven in de tab \"**Algemeen 2**\".

![Image 10](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015170458/original/tKepc9uhg9Nanq1AlSpaMqgc0lz3QK5gPw.png?1654073037)

Als we bij de verwerking van de CODA bestanden een lijn toewijzen aan een klant of leverancier , kan het rekeningnummer van de tegenpartij voor die lijn automatisch worden toegewezen aan de klant.

(zie verder bij: ![Image 11](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/101015170838/original/6yl4jz60cvMibsrezY9H4AWhI06yn2bZUw.png?1654073155) )
