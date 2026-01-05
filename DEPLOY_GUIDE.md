# Guía Rápida de Deploy - Control Web

## ✅ Pre-requisitos Completados

- ✅ Página Privacy Policy: `/privacy-policy`
- ✅ Página Data Deletion: `/data-deletion`
- ✅ Schema Zod de validación
- ✅ Servicio API configurado
- ✅ Footer actualizado con links
- ✅ TypeScript sin errores
- ✅ Logeado en Vercel CLI

---

## 🚀 Deploy a Vercel

### Opción 1: Deploy desde CLI (Recomendado)

```bash
# 1. Hacer commit de los cambios (si hay alguno pendiente)
git add .
git commit -m "feat: Implement data deletion system for Google Play compliance"
git push

# 2. Deploy a Vercel
vercel

# 3. Para producción
vercel --prod
```

### Opción 2: Deploy desde Dashboard

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click en "Add New..." → "Project"
3. Importa el repositorio `control-web`
4. Vercel detectará Next.js automáticamente
5. Click en "Deploy"

---

## ⚙️ Variables de Entorno en Vercel

**IMPORTANTE**: Configura estas variables en Vercel Dashboard:

```env
NEXT_PUBLIC_API_URL=https://TU_BACKEND_URL/api/v1
NEXT_PUBLIC_APP_URL=https://control-web.vercel.app
NEXT_PUBLIC_APP_NAME=Control
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Cómo configurarlas:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable
4. Selecciona: Production, Preview, Development
5. Save

---

## 📋 URLs para Google Play Console

Una vez desplegado, usa estas URLs:

```
Privacy Policy:
https://TU-PROYECTO.vercel.app/privacy-policy

Data Deletion:
https://TU-PROYECTO.vercel.app/data-deletion
```

---

## ✅ Checklist Post-Deploy

- [ ] Verificar que `/privacy-policy` carga correctamente
- [ ] Verificar que `/data-deletion` carga correctamente
- [ ] Probar formulario de eliminación de datos
- [ ] Verificar que el backend reciba las solicitudes
- [ ] Copiar URLs para Google Play Console
- [ ] Actualizar Google Play Console con las URLs
- [ ] Enviar app para revisión

---

## 🔧 Backend Requirements

El backend debe tener implementado:

```java
@PostMapping("/api/v1/public/data-deletion-request")
public ResponseEntity<IResponse<Void>> requestDataDeletion(
    @RequestBody DataDeletionRequestDTO request
) {
    // Implementación
}
```

Y configurar CORS para permitir el dominio de Vercel:

```java
@CrossOrigin(origins = "https://TU-PROYECTO.vercel.app")
```

---

## 🐛 Troubleshooting

### Error: API connection failed

- Verifica `NEXT_PUBLIC_API_URL` en Vercel
- Verifica que el backend esté corriendo
- Verifica CORS en el backend

### Error: Variables de entorno no disponibles

- Asegúrate de usar el prefijo `NEXT_PUBLIC_`
- Redeploy después de agregar variables

### Error 404 en las páginas

- Verifica que los archivos existan en `src/app/`
- Haz git push y redeploy

---

**Fecha**: 5 de enero de 2026
**Estado**: Listo para deploy ✅
