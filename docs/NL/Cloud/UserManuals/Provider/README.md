# Synchronisatie vanuit andere softwarepakketten

## Wat is dit?

Met behulp van onze **E-mail synchronisatie** automatiseer je de ontvangst van UBL-bestanden, PDF-bestanden en CODA-gegevens van populaire derde-partij boekhoudpakketten zoals **Billit**, **BillToBox**, **CoManage**, **OkiOki** en vele anderen.

Bestanden worden door de diverse providers naar ons cloud platform verzonden om daarna rechtstreeks te kunnen downloaden in een **AccoWin** dossier.

**Voordelen:**

- Geen handmatig downloaden of uploaden meer tussen verschillende pakketten
- Veilige en geautomatiseerde sync via E-mail.
- Geschikt voor boekhoudkantoren en zelfstandigen.

## Hoe werkt het (in het kort)?

1. AccoWin Setup: Activeer een speciaal E-mail adres in AccoWin om de bestanden naartoe te sturen.

   <a href="https://youtu.be/7Y2F0i6g_tY" target="_blank">
     <img src="./yt_mail.png" alt="Enabling E-mail sending via our CLOUD API & Mail Server" style="width:400px; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
   </a>

2. [Provider Setup](README.md#providers): Deel het E-mail adres met uw klant en configureer de koppeling in het boekhoudpakket van de provider.

   <img src="./accowin_mail.png" alt="accowin_mail.png" style="width:400px;"/>

3. Het boekhoudpakket stuurt bestanden naar ons cloud plaform dmv de ingestelde E-mail koppeling.
   Dit kan automatisch of handmatig zijn naargelang de mogelijkheden van de provider.
   
4. De bestanden kunnen in AccoWin worden gedownload via het menu **UBL > Import UBL from Cloud** of **CODA > Import CODA from Cloud**

**💡 Voor boekhoudkantoren**: Deel het speciale E-mail adres, per dossier, met uw klanten.  
**💡 Voor zelfstandigen**: Gebruik het E-mail adres van uw dossier om bestanden rechtstreeks te versturen.

### Het speciale E-mail adres

Het E-mail adres waar de synchronisatie op toekomt is dat van de **organisatie van de boekhouder**. Om te weten voor welke klant (dossier) een binnenkomend bestand bestemd is, wordt een **+tag** gevolgd door het **BTW-nummer van de klant** toegevoegd aan het adres.

**Voorbeeld:**

```
019fdb17-76f4-7cf3-a147-dcaf7bcff7a4+BE0464083632@dev.corpgroup.site
```

Hierbij is `019fdb17-76f4-7cf3-a147-dcaf7bcff7a4` het unieke deel van de organisatie en `+BE0464083632` de tag met het BTW-nummer van de klant. Zo worden binnenkomende bestanden automatisch aan het correcte dossier gekoppeld.


## Overwegingen bij synchronisatie via E-mail

Enkele overwegingen dienen in acht te worden genomen bij synchronisatie via E-mail:

- Slechts 1 email account moet worden aangemaakt in Accowin.
  _Het toevoegen van het BTW-nummer aan de naam van dit E-mail account is voldoende ter identificatie van het dossier van de verzender._
- Er moeten geen inlog-gegevens worden gedeeld met uw klant.
- Het versturen via E-mail moet bij sommige providers handmatig gebeuren.
- Wijzigingen aan de inhoud of structuur van de verzonden E-mail door een provider kan tijdelijke fouten veroorzaken bij het verwerken door ons.
- Het downloaden van bestanden in Accowin, voor alle dossiers, kan enkel in het eigen dossier gebeuren.
  Het BTW-nummer, dat werd gebruikt als toevoeging aan de naam van het E-mail account, zorgt ervoor dat binnenkomende bestanden naar het correcte dossier
  worden verplaatst.

## Providers

Hier een korte handleiding over de werkwijze om uw Provider in te stellen met het E-mail adres.
(*TODO)

- [Billit](Billit/README.md)
- [Bill-To-Box](BillToBox/README.md)
- [Blox](Blox/README.md)
- [Breex](Breex/README.md)
- [ClearFact](ClearFact/README.md)
- [CodaBox](CodaBox/README.md)
- [CodaClean](CodaClean/README.md)
- [CoManage](CoManage/README.md)
- [Dexxter](Dexxter/README.md)
- [Doccle](Doccle/README.md)
- [Eenvoudig Factureren](EenvoudigFactureren/README.md)
- [MyFact](MyFact/README.md)
- [Odoo](Odoo/README.md)
- [OkiOki](OkiOki/README.md)
- [Onfact](Onfact/README.md)
- [Optedo](Optedo/README.md)
- [Qweon](Qweon/README.md)
- [Salieri](Salieri/README.md)
- [Scrada](Scrada/README.md)
- [Team Leader](TeamLeader/README.md)
- [Yuki](Yuki/README.md)
- [Zen Factuur](ZenFactuur/README.md)
