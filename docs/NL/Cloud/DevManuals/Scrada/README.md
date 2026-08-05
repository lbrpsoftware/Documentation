# Scrada inbound testen

Deze handleiding beschrijft hoe u de verwerking van inkomende documenten via **Scrada/Peppol** kunt testen.

## 1. Voorbereiding

- Het is handig als u eerst enkele testdocumenten aanmaakt. Zie [Documenten testen](../Documents/README.md).
- Activeer zeker de **Peppol-applicatie**.

## 2. Versturen naar Scrada/Peppol

Druk op de knop in een document om dit rechtstreeks naar Scrada te versturen:

<img src="./send_scrada.png" alt="send_scrada.png" style="width:200px;" />

## 3. Processor starten

- Start een **ScradaOutboundService**-job.

   <img src="./scrada_outbound_service.png" alt="scrada_outbound_service.png" style="width:400px;" />

- Wacht op verwerking door [Scrada](https://mytest.scrada.be).

   De **Outbound**-verwerking duurt een tiental minuten.

   <img src="./scrada_process_outbound.png" alt="scrada_process_outbound.png" style="width:400px;" />

    De verwerking door Peppol voor **Inbound** neemt eveneens enige tijd in beslag. Zodra het document door het Peppol-netwerk is doorgestuurd (naar uzelf):

   <img src="./scrada_process_inbound.png" alt="scrada_process_inbound.png" style="width:400px;" />

- Start een **ScradaInboundService**-job.

   <img src="./scrada_inbound_service.png" alt="scrada_inbound_service.png" style="width:200px;" />

## 4. Resultaat controleren

Als alles correct is verwerkt, vindt u nu een record in het **Peppol Inbound**-grid:

**Peppol → Inbound Documents**

<img src="./test_result.png" alt="test_result.png" style="width:600px;" />
