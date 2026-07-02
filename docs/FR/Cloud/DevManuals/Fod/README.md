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
