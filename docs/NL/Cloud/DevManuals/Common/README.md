# SFTP en e-mail inbound testen

Deze handleiding beschrijft hoe u de verwerking van inkomende documenten via **e-mail** en **SFTP** kunt testen.

## 1. Voorbereiding

- Het is handig als u eerst enkele testdocumenten aanmaakt. Zie [Documenten testen](../Documents/README.md).
- Er hoeven voor de werking in feite geen applicaties geactiveerd te worden. Omdat het **SFTP Inbound**-grid echter op de Peppol-pagina staat, is het beter dat de **Peppol-applicatie** ook actief is.
- Download de **UBL**- of **PDF**-versie van een document, naargelang wat u wilt testen.

## 2. E-mail versturen

1. Verstuur een e-mail naar `test+BE0000000000@corpgroup.site`.
2. Wijzig het btw-nummer naar hetzelfde nummer als dat van de organisatie (bijvoorbeeld `BE0662348959`).
3. Vermeld de provider die u wilt testen in het **onderwerp** (bijvoorbeeld `Lbrp`, `OnFact`, `Billit`, ...).
4. Voeg het bestand toe als **bijlage**.

   <img src="./test_email.png" alt="test_email.png" style="width:400px;" />

## 3. Processor starten

- Start een **EmailInboundService**-job.

   <img src="./email_inbound_service.png" alt="email_inbound_service.png" style="width:400px;" />

- Start een **SftpInboundService**-job.

   <img src="./sftp_inbound_service.png" alt="sftp_inbound_service.png" style="width:200px;" />

## 4. Resultaat controleren

Als alles correct is verwerkt, vindt u nu een record in het **SFTP Inbound**-grid:

**Peppol → Extra → FTP Inbound**

<img src="./test_result.png" alt="test_result.png" style="width:400px;" />
