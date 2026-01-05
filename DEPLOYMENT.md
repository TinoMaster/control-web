# Guía de Deployment - Control Web (Vercel)

Esta guía describe cómo desplegar el proyecto Control Web en Vercel para obtener la URL pública requerida por Google Play Store.

---

## Prerrequisitos

- Cuenta en [Vercel](https://vercel.com) (gratis)
- Cuenta en GitHub (para conectar el repositorio)
- Código del proyecto subido a un repositorio Git

---

## Paso 1: Preparar el Repositorio

### 1.1 Inicializar Git (si no está hecho)

```bash
cd control-web
git init
git add .
git commit -m "Initial commit - Control Web with Privacy Policy and Data Deletion"
```

### 1.2 Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombre sugerido: `control-web` o `control-landing`
3. NO inicialices con README (ya tienes el proyecto localmente)

### 1.3 Conectar y Subir

```bash
git remote add origin https://github.com/TU_USUARIO/control-web.git
git branch -M main
git push -u origin main
```

---

## Paso 2: Desplegar en Vercel

### 2.1 Importar Proyecto

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New..."** → **"Project"**
3. Importa tu repositorio de GitHub
4. Autoriza a Vercel para acceder a tu repositorio si es necesario

### 2.2 Configuración del Proyecto

**Framework Preset:** Next.js (se detecta automáticamente)

**Build Command:**
```bash
pnpm build
```

**Output Directory:**
```
.next
```

**Install Command:**
```bash
pnpm install
```

### 2.3 Variables de Entorno

⚠️ **MUY IMPORTANTE**: Configura estas variables de entorno en Vercel:

| Variable | Valor para Producción | Descripción |
|----------|----------------------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://TU_DOMINIO_BACKEND/api/v1` | URL del backend en producción |
| `NEXT_PUBLIC_APP_URL` | `https://control-app.vercel.app` | URL de la app (se genera después del deploy) |
| `NEXT_PUBLIC_APP_NAME` | `Control` | Nombre de la aplicación |
| `NEXT_PUBLIC_APP_VERSION` | `1.0.0` | Versión actual |

**Cómo agregar variables:**
1. En Vercel Dashboard → Settings → Environment Variables
2. Agrega cada variable con su valor
3. Selecciona **Production**, **Preview**, y **Development**
4. Click en **Save**

### 2.4 Deploy

1. Click en **"Deploy"**
2. Espera 1-3 minutos mientras Vercel construye tu proyecto
3. Una vez completado, obtendrás una URL como: `https://control-app.vercel.app`

---

## Paso 3: Configurar Dominio (Opcional)

### 3.1 Dominio Personalizado

Si tienes un dominio propio (ej: `control-app.com`):

1. Ve a **Settings** → **Domains** en tu proyecto de Vercel
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel
4. Espera a que se verifique (puede tomar 24-48 horas)

### 3.2 Sin Dominio Personalizado

Usa el dominio gratuito de Vercel:
- `https://tu-proyecto.vercel.app`
- Ejemplo: `https://control-app.vercel.app`

---

## Paso 4: Verificar URLs para Google Play

Después del deployment, verifica que estas URLs funcionen:

### Privacy Policy
```
https://control-app.vercel.app/privacy-policy
```

### Data Deletion Request
```
https://control-app.vercel.app/data-deletion
```

### Home Page
```
https://control-app.vercel.app/home
```

---

## Paso 5: Actualizar Google Play Console

### 5.1 Ir a Play Console

1. Ve a [Google Play Console](https://play.google.com/console)
2. Selecciona tu aplicación
3. Ve a **Policy** → **App content**

### 5.2 Agregar Privacy Policy

1. Click en **Privacy Policy**
2. Ingresa la URL:
   ```
   https://control-app.vercel.app/privacy-policy
   ```
3. Click en **Save**

### 5.3 Agregar Data Deletion

1. Click en **Data safety** (o equivalente)
2. En la sección de eliminación de datos de usuario
3. Ingresa la URL:
   ```
   https://control-app.vercel.app/data-deletion
   ```
4. Click en **Save**

### 5.4 Enviar para Revisión

1. Guarda todos los cambios
2. Envía una nueva versión de tu app (si es necesario)
3. Google revisará y aprobará en 1-3 días

---

## Paso 6: Actualizar Environment Variable (Post-Deploy)

Después de obtener tu URL de Vercel:

1. Ve a **Settings** → **Environment Variables**
2. Edita `NEXT_PUBLIC_APP_URL`
3. Cambia de `http://localhost:3000` a tu URL real:
   ```
   https://control-app.vercel.app
   ```
4. Redeploy (Vercel hará un redeploy automático con la nueva variable)

---

## Configuración del Backend (Spring Boot)

⚠️ **CRÍTICO**: El backend debe tener el endpoint implementado

### Endpoint Requerido

```java
@PostMapping("/api/v1/public/data-deletion-request")
public ResponseEntity<IResponse<Void>> requestDataDeletion(
    @RequestBody DataDeletionRequestDTO request
) {
    // Guardar solicitud en base de datos
    dataDeletionService.createRequest(request);

    // Enviar email al admin
    emailService.notifyAdminDataDeletion(request);

    // Enviar confirmación al usuario
    emailService.sendUserConfirmation(request.getEmail());

    return ResponseEntity.ok(new IResponse<>(
        200,
        "Solicitud recibida. Recibirás un email de confirmación.",
        null
    ));
}
```

### Variables de Entorno del Backend

Si tu backend está en Heroku, Railway, AWS, etc., asegúrate de configurar:

```env
SPRING_MAIL_HOST=smtp.gmail.com
SPRING_MAIL_PORT=587
SPRING_MAIL_USERNAME=tu-email@gmail.com
SPRING_MAIL_PASSWORD=tu-app-password
CORS_ALLOWED_ORIGINS=https://control-app.vercel.app
```

---

## Comandos Útiles

### Deploy Local

```bash
# Instalar Vercel CLI (opcional)
pnpm install -g vercel

# Deploy desde la terminal
vercel

# Deploy a producción
vercel --prod
```

### Ver Logs

```bash
vercel logs [deployment-url]
```

### Eliminar Deployment

```bash
vercel remove [deployment-url]
```

---

## Troubleshooting

### Error: "API connection failed"

**Problema:** Frontend no puede conectar con el backend

**Solución:**
1. Verifica que `NEXT_PUBLIC_API_URL` esté correctamente configurada
2. Asegúrate de que el backend esté corriendo y accesible públicamente
3. Verifica CORS en el backend:
   ```java
   @CrossOrigin(origins = "https://control-app.vercel.app")
   ```

### Error: "Environment variable not found"

**Problema:** Variables de entorno no están disponibles

**Solución:**
1. Ve a Vercel Dashboard → Settings → Environment Variables
2. Verifica que todas las variables `NEXT_PUBLIC_*` estén configuradas
3. Redeploy el proyecto para aplicar cambios

### Error 404 en Privacy Policy o Data Deletion

**Problema:** Las páginas no se encuentran

**Solución:**
1. Verifica que los archivos existan en:
   - `src/app/privacy-policy/page.tsx`
   - `src/app/data-deletion/page.tsx`
2. Haz un nuevo commit y push:
   ```bash
   git add .
   git commit -m "Fix: Add privacy and data deletion pages"
   git push
   ```
3. Vercel hará deploy automáticamente

### Build Failed

**Problema:** El build falla en Vercel

**Solución:**
1. Revisa los logs de build en Vercel
2. Verifica que el build funcione localmente:
   ```bash
   pnpm build
   ```
3. Si hay errores TypeScript, corrígelos y vuelve a hacer push

---

## Actualizar el Proyecto

### Flujo de Trabajo

```bash
# 1. Hacer cambios en tu código local
# 2. Probar localmente
pnpm dev

# 3. Build local para verificar
pnpm build

# 4. Commit y push a GitHub
git add .
git commit -m "Update: descripción de cambios"
git push

# 5. Vercel desplegará automáticamente
# 6. Verifica en tu URL de producción
```

---

## Costo

**Vercel Free Tier incluye:**
- Deployments ilimitados
- 100 GB de bandwidth/mes
- SSL automático (HTTPS)
- Dominio `.vercel.app` gratis
- Redeploys automáticos desde GitHub

**Suficiente para:** Landing pages, sitios estáticos, proyectos pequeños

---

## URLs Finales para Google Play Store

Una vez desplegado, proporciona estas URLs en Google Play Console:

```
Privacy Policy URL:
https://control-app.vercel.app/privacy-policy

Data Deletion URL:
https://control-app.vercel.app/data-deletion
```

---

## Contacto y Soporte

Si tienes problemas durante el deployment:

1. Revisa la documentación de Vercel: https://vercel.com/docs
2. Revisa los logs del proyecto en Vercel Dashboard
3. Contacta soporte de Vercel (si es necesario)

---

## Checklist Final

Antes de enviar a Google Play:

- [ ] ✅ Proyecto desplegado en Vercel
- [ ] ✅ Privacy Policy accesible en `/privacy-policy`
- [ ] ✅ Data Deletion form accesible en `/data-deletion`
- [ ] ✅ Formulario de data deletion funciona (prueba enviando una solicitud)
- [ ] ✅ Backend endpoint `/api/v1/public/data-deletion-request` implementado
- [ ] ✅ Emails de confirmación configurados
- [ ] ✅ URLs agregadas en Google Play Console
- [ ] ✅ Cambios guardados en Play Console
- [ ] ✅ App enviada para revisión

---

**Estado:** Listo para deployment
**Fecha:** 2026-01-05
**Próximo paso:** Ejecutar deployment en Vercel
