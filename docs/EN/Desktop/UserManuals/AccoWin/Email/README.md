# Desktop - AccoWin - E-mail

## 1. Introduction

**AccoWin** sends e-mails straight from the program: sales documents, reminders, records and sendings by e-mail. You manage the texts of those e-mails centrally; the sending happens via the screen **Email (SMTP)**.

## 2. E-mail texts

Choose **Parameters > Teksten email** (E-mail texts). In the screen **Email teksten** you manage the templates:

- every template gets a **description** and a **reference**;
- per language — **Dutch, French, German, English** — you set the **subject** and the **body**; with **Ctrl+Enter** you start a new line;
- in the text you use merge fields (customer name, document number, amount) that **AccoWin** fills in on sending.

## 3. Sending an e-mail

When you send a document, reminder or record by e-mail, the screen **Email (SMTP)** opens:

- **From e-mail address** and **From name**: the sender as the customer sees it;
- **To**, **CC** and **Bcc**: the addresses, separated by a semicolon; the customer's address comes automatically from his record;
- **Subject**: by default from the template;
- **Attachments**: the document itself, as PDF;
- **Message**: the e-mail text (Ctrl+Enter for a new line);
- **Priority** and **Read confirmation**: the urgency and a confirmation when the customer opens the mail.

## 4. E-mail merge for sendings

When sending [documents](../Invoicing/SalesDocuments/README.md) and [reminders](../Rappels/README.md) in series, **AccoWin** uses the **Teksten email** templates: every document gets its own e-mail with the right data of that customer. You choose the template in the send dialog; the attachments are added automatically.

## 5. Show E-mail State

Via **Show E-mail State** you follow the status of the running and last e-mail sendings: what was sent, what is still queued and which errors occurred (wrong address, SMTP rejection). Use this screen when customers report they did not receive an e-mail.

## 6. Tips

- Check the **sender address**: replies from customers otherwise end up in the wrong mailbox.
- Send the first e-mail of a new template to yourself first to test the layout and the merge fields.
- The sending runs via the SMTP server of your office; when the server is unreachable the mails stay in the queue until the connection returns — check them afterwards via **Show E-mail State**.
