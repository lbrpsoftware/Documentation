# Developers Handleidingen

## 1. Omgevingen

Alle testen moeten in de **DEV** omgeving worden uitgevoerd.
- [https://abfapi.**DEV**.corpgroup.site](https://abfapi.dev.corpgroup.site/swagger)

De **PRD** omgeving is de productieomgeving en dient niet gebruikt te worden voor testen of implementatie.
- [https://abfapi.corpgroup.site](https://abfapi.corpgroup.site/health)

## 2. OpenAPI Documentatie

[https://abfapi.dev.corpgroup.site/swagger](https://abfapi.dev.corpgroup.site/swagger)

## 3. Request Headers

De volgende Headers **MOETEN** aanwezig zijn in een Request:

```
X-Version: 1.0
Api-Key:   te verkrijgen door LBRP
X-Legacy:  te verkrijgen door LBRP
```

De volgende Headers **MOGEN** aanwezig zijn in een Request:

```
Authorization: Bearer <AccessToken>
Organization:  <Organization Guid>
```

## 4. API Onderdelen

- [Identity Flow](Identity/README.md)
- [FOD](Fod/README.md)


## 5. Code Voorbeelden

- [Code Voorbeelden](Code/README.md)


