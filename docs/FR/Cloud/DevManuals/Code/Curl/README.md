# Exemples de code: cURL


## 1. Identity

```bash
# Te voorzien van correcte waarden bij elke request
HEADER_APIKEY=
HEADER_ORGANIZATION=

USER_EMAIL="test@example.com"
USER_PWD="Str0ngP@ss!"
```

### 1.1 Login

```bash
RESPONSE=$(curl -s -X "POST" \
  "https://abfapi.dev.corpgroup.site/identity/login" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $HEADER_APIKEY" \
  -H "Organization: $HEADER_ORGANIZATION" \
  -d "{
        \"email\": \"$USER_EMAIL\",
        \"password\": \"$USER_PWD\"
      }")

# Show Response
echo $RESPONSE

# Voorbeeld om het 'Token' uit de RESPONSE te knippen (Linux)
ACCESS_TOKEN=$(echo "$RESPONSE" | grep -o '"token":"[^"]*' | cut -d'"' -f4)
REFRESH_TOKEN=$(echo "$RESPONSE" | grep -o '"refreshToken":"[^"]*' | cut -d'"' -f4)
```

### 1.2 Register

```bash
RESPONSE=$(curl -s -X "POST" \
  "https://abfapi.dev.corpgroup.site/identity/register" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $HEADER_APIKEY" \
  -d "{
        \"email\": \"$USER_EMAIL\",
        \"password\": \"$USER_PWD\"
      }")
```

### 1.3 Refresh

```bash
RESPONSE=$(curl -s -X "POST" \
  "https://abfapi.dev.corpgroup.site/identity/refresh" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $HEADER_APIKEY" \
  -d "{
        \"token\": \"$ACCESS_TOKEN\",
        \"refreshToken\": \"$REFRESH_TOKEN\"
      }")
```

## 2. Owner

### 1.1 List Organizations for Member

```bash
RESPONSE=$(curl -s -X "GET" \
  "https://abfapi.dev.corpgroup.site/owner/organization/member" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $HEADER_APIKEY" \
  -H "Authorization: Bearer $ACCESS_TOKEN")
```

### 1.2 List Applications for Member

```bash
RESPONSE=$(curl -s -X "GET" \
  "https://abfapi.dev.corpgroup.site/owner/application/organization" \
  -H "accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $HEADER_APIKEY" \
  -H "Organization: $HEADER_ORGANIZATION" \
  -H "Authorization: Bearer $ACCESS_TOKEN")
```