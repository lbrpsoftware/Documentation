# UBL Cloud Import Overview

Via menu **UBL** > **UBL Cloud Import Overview** opent u het venster <ins>UBL Cloud Import Overview</ins>. Dit is het **permanente overzicht** van alle dossiers waarin UBL-bestanden geïmporteerd werden vanuit de LBRP Cloud (Peppol, FTP, PEP-IT).

Waar de succeslijst in het venster [Import UBL from Cloud Platform](../CloudImport/README.md) verdwijnt zodra u het venster sluit, blijft dit overzicht bewaard in de database van uw **hoofd-dossier** — het dossier met dezelfde organisatie-identiteit als waarmee u op het cloudplatform geregistreerd staat. Daarom kunt u het overzicht **vanuit elk dossier** openen, niet alleen vanuit het hoofd-dossier.

## Wat u ziet

- Bovenaan het <ins>Main Dossier</ins>: het hoofd-dossier waarin de importhistoriek wordt bijgehouden.
- Daaronder de lijst met dossiers waarin ooit UBL-bestanden uit de cloud zijn geïmporteerd, met per dossier:
  - de dossierreferentie en -naam;
  - het BTW-nummer;
  - het aantal geïmporteerde bestanden (<ins>Imports</ins>);
  - de datum en het uur van de laatste import en door welke gebruiker.

## Dossier openen

Dubbelklik op een dossier in de lijst (of selecteer het en klik op <ins>Open Dossier</ins>) om dat dossier direct te openen. Zijn er nog vensters open, dan wordt eerst gevraagd die te sluiten.

Met <ins>Refresh</ins> vernieuwt u de lijst. Zijn er nog geen imports geregistreerd, dan blijft de lijst leeg.

## Regel verwijderen

Selecteer een dossier in de lijst en klik op <ins>Remove Dossier</ins> om het uit het overzicht te halen. Na bevestiging wordt de overzichtregel van dat dossier definitief gewist.

De eerder geïmporteerde bestanden blijven gewoon in het dossier staan; enkel de regel in dit overzicht wordt verwijderd. Zodra er daarna opnieuw een UBL-bestand uit de cloud in dat dossier geïmporteerd wordt, verschijnt de regel automatisch opnieuw.

---

[Terug naar het UBL-overzicht](../README.md)
