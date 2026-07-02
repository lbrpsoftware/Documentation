# Developers Handleidingen

## 1. Omgevingen

Alle testen moeten in de **DEV** omgeving worden uitgevoerd.
- [https://abfapi.**DEV**.corpgroup.site](https://abfapi.dev.corpgroup.site/swagger)

De **PRD** omgeving is de productieomgeving en dient niet gebruikt te worden voor testen of implementatie.
- [https://abfapi.corpgroup.site](https://abfapi.corpgroup.site/health)

## 2. OpenAPI Documentatie

[https://abfapi.dev.corpgroup.site/swagger](https://abfapi.dev.corpgroup.site/swagger)

## 3. Request Headers

De volgende header **MOET** aanwezig zijn in een `Request`:

```
API-Key: te verkrijgen door LBRP
```

De volgende headers **MOGEN** aanwezig zijn in een `Request`:

```
X-Legacy:  te verkrijgen door LBRP
X-Version: 1.0 # Indien niet aanwezig, standaard 1.0
```

De volgende header **MOET** aanwezig zijn in een geauthenticeerd `Request`:

```
Authorization: Bearer <AccessToken>
```

De volgende header **MOET** aanwezig zijn in een geauthenticeerd `Request` op organisatieniveau:

```
Organization:  <Organization Guid>
```

U kunt deze `header` waarden in **Swagger** invullen door op de knop **Authorize 🔒** te klikken:

<img src="./swagger_header.png" alt="swagger_header.png" style="width:400px;" />

## 4. Requests/Responses

### 4.1 Algemene Velden

De meeste **JSON-contracten** hebben altijd de volgende velden:

- `identity`:     **Primaire** databasesleutel als `Guid`.
- `id`:           <br/>Extra sleutelwaarde als `Integer`.<br/>*❗Wordt momenteel niet gebruikt ❗*<br/><br/>
- `lastModified`: Tijdstip van laatste **wijziging**.
- `created`:      Tijdstip van **toevoeging**.
- `createdBy`:    Gebruiker die het record heeft aangemaakt.

**LET OP**: Indien er een `id` als parameter moet worden meegeven is dit **NIET** de waarde van het `id`-veld, maar van het `identity`- veld:

<img src="./swagger_identity.png" alt="swagger_identity.png" style="width:400px;" />

### 4.2 Algemene Response

Indien de `Response` geen `entiteit` bevat maar de `statuscode` **200** (***OK***) is, dan geven we meestal een `GeneralSuccessResponse` terug al dan niet met enkele berichten:

```json
{
  "messages": [
    "OK"
  ]
}
```

Indien de `Response` de `statuscode` **400** (***Bad Request***) is, dan geven we meestal een `GeneralFailResponse` terug al dan niet met enkele berichten:

```json
{
  "errors": [
    "Validation failed",
    "Email is required"
  ],
  "statusCode": 400
}
```

Indien de `Response` een resultaat is van een `bulkbeweging`, dan geven we meestal een `GeneralCombinedResponse` terug.<br/>
Deze bevat een lijst van zowel mogelijke `GeneralSuccessResponse` als `GeneralFailResponse`.

```json
{
  "failures": [
    {
      "errors": [
        "Validation failed",
        "Email is required"
      ],
      "statusCode": 400
    },
    {
      "errors": [
        "Unauthorized access"
      ],
      "statusCode": 401
    }
  ],
  "successes": [
    {
      "messages": [
        "OK"
      ]
    },
    {
      "messages": [
        "User created successfully"
      ]
    }
  ]
}
```

Indien de `Response` een lijst van `entiteiten` is, dan krijg je een `PagedResponse` terug per pagina.

```json
{
  "data": [
    {
      "id": 1,
      "name": "Item 1"
    },
    {
      "id": 2,
      "name": "Item 2"
    }
  ],
  "pageNumber": 1,
  "pageSize": 20,
  "sortBy": "",
  "filterBy": "",
  "count": 2,
  "hasNextPage": false,
  "hasPreviousPage": false
}
```

## 5. API Onderdelen

- [Identity Flow](Identity/README.md)
- [FOD](Fod/README.md)

## 6. Code Voorbeelden

- [Code Voorbeelden](Code/README.md)
