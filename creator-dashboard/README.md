# Creator Dashboard

Dashboard de métricas para creadores de contenido — conectado con Instagram API.

## Setup en Render

### 1. Sube este proyecto a GitHub
- Crea un repositorio nuevo en github.com
- Sube todos estos archivos

### 2. Crea un Web Service en Render
- Ve a render.com → New → Web Service
- Conecta tu repositorio de GitHub
- Build Command: `npm install`
- Start Command: `node server.js`

### 3. Agrega las variables de entorno en Render
En el panel de Render → Environment → Add Environment Variable:

```
INSTAGRAM_ACCESS_TOKEN = tu_token_de_instagram
INSTAGRAM_ACCOUNT_ID = 17841446416120155
META_APP_ID = 969921579257899
META_APP_SECRET = tu_app_secret
```

### 4. Deploy
Render hace el deploy automáticamente. En 2-3 minutos tu dashboard está live.

## Variables de entorno necesarias

| Variable | Dónde encontrarla |
|----------|------------------|
| INSTAGRAM_ACCESS_TOKEN | Meta Developer Dashboard → Use cases → Generate token |
| INSTAGRAM_ACCOUNT_ID | 17841446416120155 (ya lo tienes) |
| META_APP_ID | 969921579257899 (ya lo tienes) |
| META_APP_SECRET | Meta Developer Dashboard → App settings → Basic → App Secret |
