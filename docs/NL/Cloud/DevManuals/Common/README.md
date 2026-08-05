# SFTP en E-mail Inbound Testen

# Voorbereiding

Het is makkelijker als je eerst wat test documenten kunt aanmaken
Zie [Documenten Testen](../Documents/README.md)

Er hoeven voor de werking in feite geen Applicaties te worden geactiveerd, maar omdat
het SFTP-Inbound grid op de Peppol Pagina staat is het beter dat de Peppol Applicatie ook aan staat.

Download de UBL of PDF versie van een Document, naargelang wat je wil testen.

# Mail vertsturen

Verstuur een mail naar test+BE0000000000@corpgroup.site.
Wijzig het Vat Number naar hetzelfde als van de Organisatie (BE0662348959).

Zet de Provider die je wil testen in het onderwerp (Lbrp, OnFact, Billit, ...):

Voeg het bestand toe als Attachment

<img src="./test_email.png" alt="test_email.png" style="width:400px;" />

# Processor starten

- Start een EmailInboundService Job

   <img src="./email_inbound_service.png" alt="email_inbound_service.png" style="width:400px;" />

- Start een SftpInboundService Job

   <img src="./sftp_inbound_service.png" alt="sftp_inbound_service.png" style="width:200px;" />

# Resultaat

Je zou nu een record moeten hebben in de SftpInbound Grid:
Peppol -> Extra -> FTP Inbound

<img src="./test_result.png" alt="test_result.png" style="width:400px;" />
