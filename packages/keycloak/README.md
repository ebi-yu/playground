# Description

- keyclokaのログインを試す用

## 手順

### 1. keycloakの設定

- Realm : develop
- Client : test-client
- Valid Redirect Url : <http://localhost:3000>

### 2. nextauth-exampleの設定

- NEXTAUTH_URL : <http://localhost:3000>
- KEYCLOAK_ID : test-client
- KEYCLOAK_SECRET : Client設定のCredentialsのClient Secret
- KEYCLOAK_ISSUER : <http://localhost:8080/realms/develop>
