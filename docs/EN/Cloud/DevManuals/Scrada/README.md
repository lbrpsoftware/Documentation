# Testing Scrada inbound

This manual describes how you can test the processing of incoming documents via **Scrada/Peppol**.

## 1. Preparation

- It is useful if you first create some test documents. See [Testing documents](../Documents/README.md).
- Be sure to activate the **Peppol application**.

## 2. Sending to Scrada/Peppol

Press the button in a document to send it directly to Scrada:

<img src="./send_scrada.png" alt="send_scrada.png" style="width:200px;" />

## 3. Starting the Processor

- Start a **ScradaOutboundService** job.

   <img src="./scrada_outbound_service.png" alt="scrada_outbound_service.png" style="width:400px;" />

- Wait for processing by [Scrada](https://mytest.scrada.be).

   The **Outbound** processing takes about ten minutes.

   <img src="./scrada_process_outbound.png" alt="scrada_process_outbound.png" style="width:400px;" />

    The processing by Peppol for **Inbound** also takes some time. As soon as the document has been forwarded through the Peppol network (to yourself):

   <img src="./scrada_process_inbound.png" alt="scrada_process_inbound.png" style="width:400px;" />

- Start a **ScradaInboundService** job.

   <img src="./scrada_inbound_service.png" alt="scrada_inbound_service.png" style="width:200px;" />

## 4. Checking the result

If everything has been processed correctly, you will now find a record in the **Peppol Inbound** grid:

**Peppol → Inbound Documents**

<img src="./test_result.png" alt="test_result.png" style="width:600px;" />
