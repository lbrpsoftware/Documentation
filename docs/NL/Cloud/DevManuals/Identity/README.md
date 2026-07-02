# Identity Flow

## 1. Gebruikers

### 1.1 Registratie

<img src="../post.png" alt="post.png" /> [/identity/register](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%97%9D%EF%B8%8Fidentity/post_identity_register)

- De `Request` voor het registreren van een nieuwe **Gebruiker** (***User***) zorgt er meteen voor dat ook een **Organisatie** (***Organization***) wordt aangemaakt waarvan deze nieuwe gebruiker beheerder (***Member***) van is.
- De `Response` geeft u een `Token` terug waarmee u andere, beveiligde, eindpunten kan oproepen.<br>
  Vul dit `Token` in in de **Authorization** `Header` van een **Request**.

### 1.2 Aanmelden

<img src="../post.png" alt="post.png" /> [/identity/login](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%97%9D%EF%B8%8Fidentity/post_identity_login)

- Indien u reeds een **Gebruiker** en **Organisatie** heb geregistreerd kunt u inloggen met de gebruikers credentials om een `Token` te verkrijgen.
- U kunt meteen een gekende `Identity` waarde van een **Organisatie** in de **Organization** `Header` van dit **Request** meegeven.
- **LET OP**: Bij het wisselen van een **Organisatie** moet u steeds opnieuw een `Token` aanvragen (*= Aanmelden*).

### 1.3 Token Vernieuwen

<img src="../post.png" alt="post.png" /> [/identity/refresh](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%97%9D%EF%B8%8Fidentity/post_identity_refresh)

- U kunt een `Token` op 2 manieren vernieuwen:
   - Door opnieuw **aan te melden**
   - Door dit `Refresh` eindpunt aan te roepen met een eerder verkregen `Token` en `RefreshToken`.


## 2. Organisaties

### 2.1 Lijst

<img src="../get.png" alt="get.png" /> [/owner/organization/member](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/get_owner_organization_member)

- Nadat de **Authorization** `Header` van een **Request** is ingevuld met een `Token` kunt u een lijst ophalen van alle **Organisaties** waarvan een **Gebruiker** **Lid** van is.
- Om andere beveiligde eindpunten aan te roepen die **Organisatie** afhankelijk zijn dient u de `Identity` waarde in de **Organization** `Header` van een **Request** in te vullen.
- **TIP**: U kunt de `Identity` waarde van een **Organisatie** evcentueel bewaren in uw software.

### 2.2 Aanpassen

<img src="../put.png" alt="put.png" /> [/owner/organization](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/put_owner_organization)

- U kunt de details van een **Organisatie** aanpassen door dit eindpunt aan te roepen.

## 3. Applicaties

### 3.1 Lijst

<img src="../get.png" alt="get.png" /> [/owner/application/organization](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/get_owner_application_organization)

- Nadat de **Organization** `Header` van een **Request** is ingevuld met de `Identity` waarde van een **Organisatie** kunt u een lijst ophalen van alle **Applicaties** toegankelijk voor een **Lid** van een **Organisatie**.
- Het `Enabled` vlagje in de `Response` toont aan of de **Applicatie** actief is.

### 3.2 Activeren

<img src="../post.png" alt="post.png" /> [/owner/application/enable](https://abfapi.dev.corpgroup.site/swagger/index.html#/%F0%9F%98%8Eowner/post_owner_application_enable)

- U kunt een **Applicatie** activeren door dit eindpunt aan te roepen.
