# Fod

## 1. MyMinFin

Après qu'un utilisateur se soit connecté à **FOD**, une **tâche** sera exécutée toutes les 6 heures pour placer de nouveaux documents dans notre base de données.<br/>
Cette base de données peut être interrogée via les endpoints suivants.

### 1.1 Liste

<img src="../get.png" alt="get.png" /> [/fod/foddocument](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_foddocument)

### 1.2 Supprimer

<img src="../delete.png" alt="delete.png" /> [/fod/foddocument/{id}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/delete_fod_foddocument__id_)

### 1.3 Télécharger

<img src="../get.png" alt="get.png" /> [/fod/minfin/view/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_minfin_view__documentId_)

### 1.3 Activer le drapeau `Processed`

<img src="../get.png" alt="get.png" /> [/fod/minfin/accept/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%A7%F0%9F%87%AAfod/get_fod_minfin_accept__documentId_)

## 2. InterVat

Les déclarations peuvent être envoyées au format **XML** à l’aide de l’endpoint suivant.  
Périodiquement, une **tâche** enverra ces déclarations à la **FOD**.  
Le statut `InterVatStateEnum` est important ici.

### 1.1 Envoyer

<img src="../post.png" alt="post.png" /> [/fod/intervat/send](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%AB%F0%9F%87%B7fod/post_fod_intervat_send)

### 1.2 Liste

<img src="../get.png" alt="get.png" /> [/fod/fodintervat](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%AB%F0%9F%87%B7fod/get_fod_fodintervat)

### 1.3 Supprimer

<img src="../delete.png" alt="delete.png" /> [/fod/fodintervat/{id}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%AB%F0%9F%87%B7fod/delete_fod_fodintervat__id_)

### 1.4 Télécharger

<img src="../get.png" alt="get.png" /> [/fod/intervat/view/{documentId}](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%87%AB%F0%9F%87%B7fod/get_fod_intervat_view__documentId_)
