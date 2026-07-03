# Fod

## 1. MyMinFin

Nadat een gebruiker zich heeft aangemeld bij **FOD**, zal er om de 6 uur een **taak** worden uitgevoerd om nieuwe documenten in onze database te plaatsen.<br/>
Deze database kan met de volgende endpoints worden aangesproken.

### 1.1 Lijst

<img src="../get.png" alt="get.png" /> [/fod/foddocument](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_foddocument)

### 1.2 Verwijderen

<img src="../delete.png" alt="delete.png" /> [/fod/foddocument/{id}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/delete_fod_foddocument__id_)

### 1.3 Downloaden

<img src="../get.png" alt="get.png" /> [/fod/minfin/view/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_minfin_view__documentId_)

### 1.3 Vlag `Processed` aanzetten

<img src="../get.png" alt="get.png" /> [/fod/minfin/accept/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_minfin_accept__documentId_)

## 2. InterVat

Declaraties kunnen verzonden worden in **XML**-formaat met behulp van het volgende eindpunt.
Periodiek zal een **taak** deze declaraties doorsturen naar de **FOD**.
De status `InterVatStateEnum` is hier belangrijk.

### 1.1 Verzenden

<img src="../post.png" alt="post.png" /> [/fod/intervat/send](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/post_fod_intervat_send)

### 1.2 Lijst

<img src="../get.png" alt="get.png" /> [/fod/fodintervat](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_fodintervat)

### 1.3 Verwijderen

<img src="../delete.png" alt="delete.png" /> [/fod/fodintervat/{id}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/delete_fod_fodintervat__id_)


### 1.4 Downloaden

<img src="../get.png" alt="get.png" /> [/fod/intervat/view/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_intervat_view__documentId_)
