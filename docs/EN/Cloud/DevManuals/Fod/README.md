# Fod

## 1. MyMinFin

After a user has signed in with **FOD**, a **task** will be executed every 6 hours to place new documents in our database.<br/>
This database can be accessed with the following endpoints.

### 1.1 List

<img src="../get.png" alt="get.png" /> [/fod/foddocument](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_foddocument)

### 1.2 Deleting

<img src="../delete.png" alt="delete.png" /> [/fod/foddocument/{id}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/delete_fod_foddocument__id_)

### 1.3 Downloading

<img src="../get.png" alt="get.png" /> [/fod/minfin/view/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_minfin_view__documentId_)

### 1.3 Setting the `Processed` flag

<img src="../get.png" alt="get.png" /> [/fod/minfin/accept/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_minfin_accept__documentId_)

## 2. InterVat

Declarations can be sent in **XML** format using the following endpoint.
Periodically, a **task** will forward these declarations to the **FOD**.
The status `InterVatStateEnum` is important here.

### 1.1 Sending

<img src="../post.png" alt="post.png" /> [/fod/intervat/send](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/post_fod_intervat_send)

### 1.2 List

<img src="../get.png" alt="get.png" /> [/fod/fodintervat](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_fodintervat)

### 1.3 Deleting

<img src="../delete.png" alt="delete.png" /> [/fod/fodintervat/{id}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/delete_fod_fodintervat__id_)


### 1.4 Downloading

<img src="../get.png" alt="get.png" /> [/fod/intervat/view/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_intervat_view__documentId_)
