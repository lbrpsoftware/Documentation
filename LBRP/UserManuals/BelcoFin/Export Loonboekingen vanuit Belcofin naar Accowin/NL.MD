# 1. Inleiding

Met deze toepassing kan u

- Loonboekingen exporteren via een XML naar Accowin.

> [!TIP] 
> Als u een licentie van zowel Belcofin als Accowin heeft, is deze module **gratis** voor u. 
> Hier kan u ons voor contacteren per mail info@lbrp.be, dan zetten we deze module actief op uw licentie.

# 2. Waar kan ik de optie vinden in de menu?

U kan de optie vinden in het menu onder: SODA - **Loonboekingen exporteren naar Accowin**

![alt text](<NL/Belcofin - Menu Export loonboekingen naar Accowin.png>)

# 3. Uitleg over het scherm

![alt text](<NL/Belcofin - Venster Loonboekingen exporteren naar Accowin.png>)

      - Inkomstenjaar: Hier kan u het inkomstenjaar selecteren.
      
      - Medewerker: Hier kan u de medewerker kiezen.
      
      - Maanden: Hier kan u de maanden selecteren waarvan u een loonboeking wilt exporteren.
      
      - Reeds verz.: Hier kan u het vinkje aanzetten als u de reeds verzonden SODA of geëxporteerde XML mee wilt opnemen.
      
      - Enkel weddes: Als u dit vinkje aanzet, dan selecteert het enkel de wedde waarvoor de BV reeds werd aangegeven.
      
      - Overzichtsscherm: Hier ziet u een overzichtsscherm van de mogelijke loonboekingen om te exporteren naar Accowin.
      
      - Volledig selecteren / deselecteren: Hiermee kan u de volledige lijst selecteren of deselecteren. 
      
      - Design: ???
      
      - OK: Hiermee start u de export van de loonboekingen voor het aanmaken van de XML.
      
      - Annuleren: Hiermee gaat u alles annuleren en zal het scherm sluiten.

# 4. Hoe een XML maken om te exporteren naar Accowin?

U gaat naar in het menu naar SODA - **Loonboekingen exporteren naar Accowin**

![alt text](<NL/Belcofin - Venster Loonboekingen exporteren naar Accowin.png>)

In dit venster kiest u de maanden van de loonboekingen die u wilt exporteren naar Accowin.

U selecteert in het overzicht van de loonboekingen, de naam die u wilt exporteren naar Accowin.

![alt text](<NL/Belcofin - Venster Loonboekingen exporteren - Met selectie.png>)

We klikken nu op **OK**

We krijgen nu een PDF te zien van de geselecteerde loonboekingen.

![alt text](<NL/Belcofin - PDF loonboeking.png>)

Als u wilt kan u hier de PDF:

      - Printen
      - Opslaan op uw harde schijf
      - Exporteren naar een PDF bestand op uw harde schijf
      - Versturen per e-mail
      - Exporteren naar een Excel bestand op uw harde schijf

Als u de PDF gaat sluiten, gaat hij de XML verder aanmaken.  U krijgt dan de locatie te zien waar hij deze heeft opgeslagen. ( U kan het bestand terug vinden op volgende locatie: C:\LBRP\Clients\Belcofin\_ExportToAccowin\0000010292\BF_0000010292_202402_240307103549381.xml)

> [!IMPORTANT]
> De locatie hangt af van waar u Belcofin heeft geïnstalleerd.

# 5. Overschakelen naar Accowin

Open Accowin en het dossier waar u de loonboeking wilt gaan inboeken.

## 5.1 Waar kan ik de XML inlezen?

U gaat in het menu naar: Boekhouding - Ingave dagboeken - **Oplezen Facturen**

![alt text](<NL/Accowin - Venster Documenten importeren (oplezen facturen).png>)

## 5.2 Menu: Oplezen Facturen

![alt text](<NL/Accowin - Venster Documenten importeren (oplezen facturen).png>)

### 5.2.1 Uitleg over het scherm

- **Bestandstype**: Hier kan u het bestandstype gaan selecteren: Accowin XML Bestand

- **Bestand selecteren (gele mapje)**: Via het gele mapje kan je het XML bestand gaan selecteren om in te laden in Accowin

- **BTW nummer**: Als het BTW nummer verschillend is tussen import en Accowin, kan je hier het BTW nummer zetten dat overeenkomt met dat in het XML bestand

- **Start oplezen**: Hiermee start u het oplezen van de factuur / Loonboeking

- **Sluiten**: Hiermee sluit u het venster

## 5.3 Inlezen van het XML bestand

Selecteer het XML bestand via het gele mapje en start het oplezen van het bestand in Accowin.

Ga naar de Belcofin map op uw harde schijf of server.

Daar kiest u voor de map _ExportToAccowin

![alt text](<NL/Accowin - Browse scherm 2 - Map Belcofin - Pijltjes.png>)

Kies hier de juist referte van uw bedrijfsleider.

![alt text](<NL/Accowin - Browse scherm 3 - Map ExportToAccowin.png>)

Selecteer het aangemaakte XML bestand en klik op openen (of dubbelklik op de het bestand zelf)

![alt text](<NL/Accowin - Browse scherm 4 - Selectie XML.png>)

Het bestand staat nu in de lijst en je kan op **"start oplezen"** klikken

![alt text](<NL/Accowin - Documenten import met XML file.png>)

### 5.3.1 Foutmeldingen

Het kan natuurlijk voorvallen dat er iets mis gaat. Hieronder lijsten we alle mogelijke foutmeldingen op met een mogelijke oplossing.

#### 5.3.1.1 Fout tijdens importeren: Periode is niet gevonden of is niet open.

![alt text](<NL/Accowin - Foutmelding 1 - Fout bij importeren - Periode niet gevonden.png>)

      Dit wilt zeggen dat de periode van de loonboeking nog niet open staat.
      U zal dus de periode moeten open zetten bij de boekjaren.
      
##### 5.1.1.2 Hoe een boekjaar / periode open zetten?

U gaat in het menu naar Parameters - **Beheer Boekjaren en Periodes**.

![alt text](<NL/Accowin - Menu Parameters_Beheer Boekjaren en Periodes.png>)

Hier ziet u een overzicht van al de beschikbare boekjaren.

![alt text](<NL/Accowin - Venster - Boekjaren en Periodes.png>)

We kiezen het boekjaar van de loonboeking, **2024**.

![alt text](<NL/Accowin - Venster Boekjaren - Boekingperiodes.png>)

Hier kunnen we de periodes gaan openen en sluiten.

Zoals je kan zien staat de periode 2 (februari) nog **niet** open. We gaan deze periode nu open zetten.

![alt text](<NL/Accowin - Venster Boekjaren - Boekingperiodes - Rood vierkant + Pijltje.png>)

U gaat op de lijn staan van de 2e periode en daarna selecteert u het bolletje van **"geopend"**. 

![alt text](<NL/Accowin - Venster Boekjaren - Boekingperiodes - Zonder pijltje.png>)

Druk nu op het vinkje om de wijziging op te slaan.

![alt text](<NL/Accowin - Venster Boekjaren - Boekingperiodes - 2e periode open.png>)

Er staat nu een O bij de 2e periode.

#### 5.3.1.2 Fout bij importeren: **Referte** 618910 bestaat niet.

![alt text](<NL/Accowin - Foutmelding 2 - Fout bij importeren - Referte bestaat niet.png>)

>Dit wil zeggen dat de referte (code zie foutmelding) niet bestaat. U zal deze referte moeten aanmaken.


