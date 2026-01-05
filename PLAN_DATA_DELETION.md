# Plan de Implementación - Data Deletion System

**Objetivo**: Cumplir requisitos de Google Play Store para privacidad de datos
**Prioridad**: 🔴 CRÍTICA
**Tiempo estimado**: 2-3 horas

---

## Contexto

Google Play Store requiere que las aplicaciones que recopilan datos de usuario proporcionen:

1. **Privacy Policy URL** - Política de privacidad accesible públicamente
2. **Data Deletion URL** - Proceso para que usuarios soliciten eliminación de sus datos
3. **Cumplimiento GDPR** - Derecho al olvido (Right to be forgotten)

---

## Arquitectura de la Solución

### Opción 1: Implementación Básica (RECOMENDADA para MVP)

**Tiempo**: 1-2 horas
**Complejidad**: Baja
**Suficiente para**: Aprobar revisión de Google Play

```
Usuario → Formulario Web → Email al administrador → Proceso manual
```

**Ventajas**:
- Rápido de implementar
- No requiere cambios complejos en backend
- Cumple requisitos legales
- Funciona desde día 1

**Desventajas**:
- Proceso manual
- No automatizado

### Opción 2: Implementación Completa (Futuro)

**Tiempo**: 8-12 horas
**Complejidad**: Alta

```
Usuario → Formulario → Backend API → Base de datos →
  → Email confirmación →
  → Sistema de tickets →
  → Proceso automatizado de eliminación
```

---

## Implementación Fase 1 (MVP - AHORA)

### 1. Páginas Web Necesarias

#### A. Privacy Policy (`/privacy-policy`)

**Contenido requerido**:
- Qué datos recopilamos
- Cómo usamos los datos
- Con quién compartimos datos
- Derechos del usuario (GDPR)
- Proceso de eliminación de datos
- Contacto para privacidad

**Implementación**:
- Página estática Next.js
- Markdown o componentes React
- SEO optimizado
- URL pública accesible

#### B. Data Deletion Request (`/data-deletion`)

**Funcionalidades**:
- Formulario de solicitud
- Campos:
  - Nombre completo
  - Email (registrado en la app)
  - Teléfono (opcional)
  - User ID (opcional)
  - Razón de eliminación (opcional)
  - Confirmación de términos
- Validación con Zod
- Envío por email o guardado en base de datos

**Implementación**:
```typescript
// Formulario → Backend endpoint → Email admin/soporte
POST /api/v1/public/data-deletion-request
{
  name: string
  email: string
  phone?: string
  userId?: string
  reason?: string
  confirmTerms: boolean
}
```

### 2. Backend Changes (Mínimos)

#### Opción A: Solo Email (MÁS RÁPIDO)

```java
// Spring Boot Controller
@PostMapping("/api/v1/public/data-deletion-request")
public ResponseEntity<IResponse<Void>> requestDataDeletion(
    @RequestBody DataDeletionRequestDTO request
) {
    // Enviar email al administrador
    emailService.sendDataDeletionRequest(request);

    // Responder al usuario
    return ResponseEntity.ok(new IResponse<>(
        200,
        "Solicitud recibida. Te contactaremos en 24-48 horas.",
        null
    ));
}
```

#### Opción B: Guardar en Base de Datos (MEJOR)

```java
// Entidad DataDeletionRequest
@Entity
public class DataDeletionRequest {
    @Id
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String userId;
    private String reason;
    private LocalDateTime requestDate;
    private String status; // PENDING, PROCESSING, COMPLETED
}

// Controller
@PostMapping("/api/v1/public/data-deletion-request")
public ResponseEntity<IResponse<Void>> requestDataDeletion(
    @RequestBody DataDeletionRequestDTO request
) {
    // Guardar solicitud
    dataDeletionService.createRequest(request);

    // Enviar email al admin
    emailService.notifyAdminDataDeletion(request);

    // Enviar email de confirmación al usuario
    emailService.sendUserConfirmation(request.getEmail());

    return ResponseEntity.ok(new IResponse<>(
        200,
        "Solicitud recibida. Recibirás un email de confirmación.",
        null
    ));
}
```

### 3. Frontend Implementation

```typescript
// src/app/data-deletion/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { dataDeletionSchema } from '@/lib/schemas/dataDeletion.schema'

export default function DataDeletionPage() {
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(dataDeletionSchema)
  })

  const onSubmit = async (data) => {
    // Llamar al backend
    const response = await dataDeletionService.requestDeletion(data)

    if (response.status === 200) {
      // Mostrar confirmación
      setShowSuccess(true)
    }
  }

  return (
    <Container>
      <Typography variant="h2">
        Solicitud de Eliminación de Datos
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campos del formulario */}
      </form>
    </Container>
  )
}
```

---

## Implementación Fase 2 (Futuro - Opcional)

### Features Avanzadas

1. **Sistema de Tickets**
   - Número de ticket único
   - Estado del proceso (Pending → Processing → Completed)
   - Tracking público del estado

2. **Verificación de Identidad**
   - Envío de código OTP por email
   - Verificación de propiedad de cuenta

3. **Proceso Automatizado**
   - Soft delete automático después de verificación
   - Eliminación programada (ej: 30 días después)
   - Backup antes de eliminar

4. **Dashboard Admin**
   - Ver todas las solicitudes
   - Aprobar/Rechazar
   - Ejecutar eliminación
   - Logs de auditoría

---

## Checklist de Implementación (MVP)

### Frontend (Next.js)

- [ ] Crear página `/privacy-policy`
  - [ ] Contenido completo en español
  - [ ] Secciones requeridas
  - [ ] Links a data deletion
  - [ ] Metadata SEO

- [ ] Crear página `/data-deletion`
  - [ ] Formulario con validación
  - [ ] Zod schema
  - [ ] UI/UX clara
  - [ ] Confirmación de envío
  - [ ] Metadata SEO

- [ ] Crear servicio API
  - [ ] `dataDeletion.service.ts`
  - [ ] Integración con backend

- [ ] Crear schema Zod
  - [ ] Validación de campos
  - [ ] Mensajes de error

- [ ] Agregar links en Footer
  - [ ] Privacy Policy
  - [ ] Data Deletion

### Backend (Spring Boot)

- [ ] Crear DTO
  - [ ] `DataDeletionRequestDTO`
  - [ ] Validaciones

- [ ] Crear Entity (Opción B)
  - [ ] `DataDeletionRequest`
  - [ ] Repository
  - [ ] Service

- [ ] Crear Controller
  - [ ] Endpoint público `/api/v1/public/data-deletion-request`
  - [ ] Validación de datos
  - [ ] Response estándar

- [ ] Configurar Email Service
  - [ ] Template email admin
  - [ ] Template email usuario
  - [ ] SMTP configurado

- [ ] Actualizar SecurityConfig
  - [ ] Permitir acceso público al endpoint

### Deploy

- [ ] Variables de entorno
  - [ ] `NEXT_PUBLIC_API_URL` para producción
  - [ ] Email SMTP credentials

- [ ] Vercel deploy
  - [ ] Conectar repositorio
  - [ ] Configurar variables
  - [ ] Deploy

- [ ] Testing
  - [ ] Probar formulario
  - [ ] Verificar emails
  - [ ] Probar en móvil

- [ ] Google Play Store
  - [ ] Copiar URL de Privacy Policy
  - [ ] Copiar URL de Data Deletion
  - [ ] Actualizar configuración en Play Console

---

## URLs Finales Esperadas

```
Privacy Policy:
https://control-app.vercel.app/privacy-policy

Data Deletion:
https://control-app.vercel.app/data-deletion
```

Estas URLs se proporcionarán en Google Play Console.

---

## Proceso Manual de Eliminación (Temporal)

Mientras se implementa la automatización completa:

1. **Usuario envía solicitud** → Se guarda en BD o se envía email
2. **Admin recibe notificación** → Email o revisar dashboard
3. **Verificar identidad** → Responder email pidiendo confirmación
4. **Ejecutar eliminación manual**:
   ```sql
   -- Soft delete del usuario
   UPDATE users SET deleted_at = NOW() WHERE email = 'user@example.com';

   -- Eliminar datos asociados (según política)
   DELETE FROM user_sessions WHERE user_id = X;
   DELETE FROM user_tokens WHERE user_id = X;
   -- etc.
   ```
5. **Confirmar al usuario** → Email de confirmación
6. **Marcar solicitud como completada**

---

## Texto Legal Recomendado

### Para Privacy Policy

```
Eliminación de Datos

Los usuarios tienen derecho a solicitar la eliminación completa de sus
datos personales en cualquier momento. Para ejercer este derecho:

1. Visita nuestra página de eliminación de datos: [URL]
2. Completa el formulario con tu información
3. Recibirás un email de confirmación
4. Procesaremos tu solicitud en un plazo máximo de 30 días

Una vez completada la eliminación, todos tus datos personales serán
eliminados permanentemente de nuestros servidores, incluyendo:
- Información de perfil
- Datos de negocio
- Historial de transacciones
- Logs de actividad

Nota: Algunos datos pueden retenerse por requisitos legales o fiscales
durante el período establecido por ley.

Para más información, contacta: privacy@control-app.com
```

### Para Data Deletion Page

```
Solicitud de Eliminación de Datos

En Control respetamos tu privacidad y tu derecho a controlar tus datos
personales. Si deseas eliminar tu cuenta y todos los datos asociados,
completa el siguiente formulario.

¿Qué se eliminará?
- Tu cuenta de usuario
- Información de perfil
- Datos de tu(s) negocio(s)
- Transacciones y reportes
- Información de clientes
- Toda la información personal almacenada

Tiempo de procesamiento: 24-48 horas (máximo 30 días)

Importante: Esta acción es irreversible. Asegúrate de exportar cualquier
información importante antes de continuar.
```

---

## Próximos Pasos INMEDIATOS

1. **Implementar Privacy Policy** (30 min)
2. **Implementar Data Deletion Form** (45 min)
3. **Crear endpoint backend básico** (30 min)
4. **Deploy a Vercel** (15 min)
5. **Actualizar Google Play Console** (5 min)

**Total: ~2 horas para MVP funcional**

---

**Autor**: Claude Code
**Fecha**: 2026-01-05
**Estado**: Plan aprobado - Listo para implementación
