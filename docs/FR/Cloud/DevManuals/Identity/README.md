# Flux d'identité

## 1. Utilisateurs

### 1.1 Enregistrement

<img src="../post.png" alt="post.png" /> [/identity/register](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%97%9D%EF%B8%8Fidentity/post_identity_register)

- La `Requête` pour l'enregistrement d'un nouvel **utilisateur** (***User***) garantit également qu'une **organisation** (***Organization***) est créée, dont ce nouvel utilisateur est un **membre** (***lid***).
- La `Réponse` vous renvoie un `Token` avec lequel vous pouvez appeler d'autres endpoints sécurisés.<br/>
  Saisissez ce `Token` dans l'en-tête **Authorization** d'une **requête**.

### 1.2 Connexion

<img src="../post.png" alt="post.png" /> [/identity/login](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%97%9D%EF%B8%8Fidentity/post_identity_login)

- Si vous avez déjà enregistré un **utilisateur** et une **organisation**, vous pouvez vous connecter avec les informations d'identification de l'utilisateur pour obtenir un `Token`.
- Vous pouvez immédiatement fournir une valeur `Identity` connue d'une **organisation** dans l'en-tête **Organization** de cette **requête**.
- **ATTENTION** : Lors du changement d'**organisation**, vous devez toujours demander un nouveau `Token` (*= connexion*).

### 1.3 Renouvellement du jeton

<img src="../post.png" alt="post.png" /> [/identity/refresh](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%97%9D%EF%B8%8Fidentity/post_identity_refresh)

- Vous pouvez renouveler un `Token` de 2 manières :
   - En vous **reconnectant**
   - En appelant cet endpoint `Refresh` avec un `Token` et un `RefreshToken` précédemment obtenus.


## 2. Organisations

### 2.1 Liste

<img src="../get.png" alt="get.png" /> [/owner/organization/member](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/get_owner_organization_member)

- Une fois l'en-tête **Authorization** d'une **requête** rempli avec un `Token`, vous pouvez récupérer une liste de toutes les **organisations** dont un **utilisateur** est **membre**.
- Pour appeler d'autres endpoints sécurisés qui dépendent de l'**organisation**, vous devez saisir la valeur `Identity` dans l'en-tête **Organization** d'une **requête**.
- **ASTUCE** : Vous pouvez éventuellement stocker la valeur `Identity` d'une **organisation** dans votre logiciel.

### 2.2 Modifier

<img src="../put.png" alt="put.png" /> [/owner/organization](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/put_owner_organization)

- Vous pouvez modifier les détails d'une **organisation** en appelant cet endpoint.

## 3. Applications

### 3.1 Liste

<img src="../get.png" alt="get.png" /> [/owner/application/organization](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/get_owner_application_organization)

- Une fois l'en-tête **Organization** d'une **requête** rempli avec la valeur `Identity` d'une **organisation**, vous pouvez récupérer une liste de toutes les **applications** accessibles à un **membre** d'une **organisation**.
- Le drapeau `Enabled` dans la `Réponse` indique si l'**application** est active.

### 3.2 Activer

<img src="../post.png" alt="post.png" /> [/owner/application/enable](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/post_owner_application_enable)

- Vous pouvez activer une **application** en appelant cet endpoint.
- La `Requête` suivante activera l'application **FOD** :

   ```json
   {
     "applicationType": 524288,
     "enabled": false  # contient la valeur actuelle de l'application
   }
   ```

- Cliquez sur **Schema** dans un **corps de requête** pour voir les valeurs possibles du **type d'application** :

   <img src="../swagger_schema.png" alt="swagger_schema.png" style="width:800px;" />
