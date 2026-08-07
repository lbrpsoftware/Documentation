# Testing SFTP and email inbound

This manual describes how you can test the processing of incoming documents via **email** and **SFTP**.

## 1. Preparation

- It is useful if you first create some test documents. See [Testing documents](../Documents/README.md).
- In fact, no applications need to be activated for it to work. However, because the **SFTP Inbound** grid is on the Peppol page, it is better that the **Peppol application** is also active.
- Download the **UBL** or **PDF** version of a document, depending on what you want to test.

## 2. Sending an email

1. Send an email to `test+BE0000000000@corpgroup.site`.
2. Change the VAT number to the same number as that of the organization (for example `BE0662348959`).
3. Mention the provider you want to test in the **subject** (for example `Lbrp`, `OnFact`, `Billit`, ...).
4. Add the file as an **attachment**.

   <img src="./test_email.png" alt="test_email.png" style="width:400px;" />

## 3. Starting the Processor

- Start an **EmailInboundService** job.

   <img src="./email_inbound_service.png" alt="email_inbound_service.png" style="width:400px;" />

- Start an **SftpInboundService** job.

   <img src="./sftp_inbound_service.png" alt="sftp_inbound_service.png" style="width:200px;" />

## 4. Checking the result

If everything has been processed correctly, you will now find a record in the **SFTP Inbound** grid:

**Peppol → Extra → FTP Inbound**

<img src="./test_result.png" alt="test_result.png" style="width:400px;" />
