# Desktop - Finasset - Investeringen

## 1. Inleiding

De **investering** is de kern van **Finasset**: elke vaste activum dat u aankoopt, afschrijft en uiteindelijk uitboekt. U beheert ze via:

- **Files > Investments**: de investeringslijst en -fiches;
- **Files > Investement groups**: de investeringsgroepen;
- **Tools > Add Invest to Group**: bestaande investeringen aan een groep toevoegen.

## 2. De investeringslijst

Via **Files > Investments** opent u de lijst met alle investeringen van het dossier. Met het vinkje **Enkel actieve investeringen** beperkt u de lijst tot de investeringen die nog niet volledig zijn uitgeboekt; met **Copy** kopieert u een investering als vertrekpunt voor een nieuwe.

## 3. De investeringsfiche

Op de fiche geeft u op:

- **Omschrijving** en **referte** van de investering;
- de **algemene rekening** waarop de investering wordt geboekt;
- het **aankoopboekjaar** (AKBoekjaar), de **aankoopdatum** en de **aankoopwaarde** (AKWaarde);
- de BTW-componenten: **aftrekbare** en **niet-aftrekbare** BTW, en het **investeerbedrag** (BedragInvest);
- de afschrijvingsgegevens: **methode** (AfschrType), **duur** in jaren, het **percentage** en de **restwaarde**;
- de **investeringsgroep**;
- bij een uitgeboekte investering: het **uitboekingsboekjaar**, de **uitboekingswaarde**, de BTW en het **type uitboeking**;
- **munt** en **koers** bij aankopen in vreemde valuta.

### 3.1 Extra aankoopgegevens

Op de tab **Investering** vult u aan: het **aankoopdocument** en de **leverancier**, of het een **investering uit splitsing/fusie** betreft, en de prorata-instelling: **prorata per dag** of **volledig afschrijven (geen prorata)** voor het eerste (gedeeltelijke) jaar.

### 3.2 Investeringsaftrek

Bij **Investeringsaftrek** kiest u de **soort** en het **type** van de aftrek. **Finasset** verwerkt de aftrek in het rapport **Investeringaftrek** (zie [Rapporten](../Reports/README.md)).

### 3.3 Extra uitboekingsgegevens

Wanneer de investering wordt verkocht of afgeboekt, vult u hier de **uitboekingsdatum**, het **document**, de **klant** en het **uitboekingsbedrag** in. Met **Afschrijving toelaten in jaar uitboeking** bepaalt u of er in het jaar van de uitboeking nog een afschrijving wordt toegepast.

### 3.4 Extra BTW-gegevens

Bij **Extra BTW Gegevens** stelt u het **BTW-type** in (aftrekbaar, niet aftrekbaar of gemengd), zodat de fiscale afschrijving juist wordt opgebouwd.

## 4. Investeringsgroepen

Met **Files > Investement groups** beheert u de groepen: per groep geeft u een **referte** en **omschrijving** op. Wijs op de investeringsfiche de groep toe, of voeg bestaande investeringen in één keer toe via **Tools > Add Invest to Group**. Groepen gebruiken de rapporten en de [herberekening](../Depreciation/README.md) om investeringen gezamenlijk te verwerken.

## 5. Tips

- Vul **duur**, **methode** en **restwaarde** steeds volledig in: zonder die gegevens kan **Finasset** geen afschrijvingstabel opstellen.
- Kies de prorata-instelling bewust: **prorata per dag** is het nauwkeurigst voor aankopen midden in het jaar.
- Houd de **investeringsgroepen** klein en functioneel (bijvoorbeeld per locatie of categorie); dat maakt de rapporten leesbaar.
- Voor destructieve bewerkingen (uitboeken, verwijderen) heeft uw gebruiker de juiste rechten nodig: vraag de beheerder om ze toe te wijzen.
