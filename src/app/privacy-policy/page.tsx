import type { Metadata } from 'next'
import { Box, Container, Typography, Divider, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de Control - Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  robots: 'index, follow',
}

export default function PrivacyPolicyPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
            }}
          >
            Política de Privacidad
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Última actualización: 5 de enero de 2026
          </Typography>

          <Divider sx={{ mb: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Introducción */}
          <Section title="1. Introducción">
            <Text>
              En <Strong>Control</Strong>, respetamos tu privacidad y nos comprometemos a proteger tus
              datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos,
              almacenamos y protegemos la información que nos proporcionas al usar nuestra aplicación
              móvil y servicios web.
            </Text>
            <Text>
              Al usar Control, aceptas las prácticas descritas en esta política. Si no estás de
              acuerdo con alguna parte de esta política, por favor no uses nuestros servicios.
            </Text>
          </Section>

          {/* Información que recopilamos */}
          <Section title="2. Información que Recopilamos">
            <SubSection title="2.1 Información de Cuenta">
              <Text>
                Cuando te registras en Control, recopilamos:
              </Text>
              <List
                items={[
                  'Nombre completo',
                  'Correo electrónico',
                  'Número de teléfono',
                  'Contraseña (encriptada)',
                  'Información de tu negocio (nombre, tipo, dirección)',
                ]}
              />
            </SubSection>

            <SubSection title="2.2 Información de Uso">
              <Text>
                Durante el uso de la aplicación, recopilamos:
              </Text>
              <List
                items={[
                  'Datos de ventas y transacciones',
                  'Información de productos e inventario',
                  'Datos de clientes y empleados que ingresas',
                  'Reportes financieros generados',
                  'Registros de actividad y uso de la aplicación',
                  'Información del dispositivo (modelo, sistema operativo, versión de la app)',
                ]}
              />
            </SubSection>

            <SubSection title="2.3 Información Técnica">
              <Text>
                Automáticamente recopilamos:
              </Text>
              <List
                items={[
                  'Dirección IP',
                  'Tipo de navegador o dispositivo',
                  'Sistema operativo',
                  'Identificadores únicos del dispositivo',
                  'Datos de registro (logs) para diagnóstico de errores',
                ]}
              />
            </SubSection>
          </Section>

          {/* Cómo usamos tu información */}
          <Section title="3. Cómo Usamos tu Información">
            <Text>
              Utilizamos la información recopilada para:
            </Text>
            <List
              items={[
                'Proporcionar y mantener nuestros servicios',
                'Procesar transacciones y generar reportes',
                'Autenticar tu identidad y proteger tu cuenta',
                'Mejorar y personalizar tu experiencia',
                'Enviar notificaciones importantes sobre tu cuenta',
                'Proporcionar soporte técnico',
                'Analizar el uso de la aplicación para mejoras',
                'Cumplir con obligaciones legales y fiscales',
                'Prevenir fraude y garantizar la seguridad',
              ]}
            />
          </Section>

          {/* Compartir información */}
          <Section title="4. Compartir tu Información">
            <Text>
              <Strong>No vendemos ni alquilamos</Strong> tu información personal a terceros. Solo
              compartimos información en las siguientes circunstancias:
            </Text>

            <SubSection title="4.1 Proveedores de Servicios">
              <Text>
                Podemos compartir información con proveedores que nos ayudan a operar nuestros
                servicios (hosting, almacenamiento, notificaciones push). Estos proveedores están
                obligados a proteger tu información.
              </Text>
            </SubSection>

            <SubSection title="4.2 Cumplimiento Legal">
              <Text>
                Podemos divulgar información si es requerido por ley, orden judicial, o para
                proteger nuestros derechos legales.
              </Text>
            </SubSection>

            <SubSection title="4.3 Con tu Consentimiento">
              <Text>
                Compartiremos tu información con terceros cuando nos des tu consentimiento explícito
                para hacerlo.
              </Text>
            </SubSection>
          </Section>

          {/* Seguridad */}
          <Section title="5. Seguridad de los Datos">
            <Text>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu
              información:
            </Text>
            <List
              items={[
                'Encriptación de datos en tránsito (HTTPS/TLS)',
                'Encriptación de contraseñas (bcrypt)',
                'Autenticación mediante JWT (JSON Web Tokens)',
                'Copias de seguridad regulares',
                'Acceso restringido a datos personales',
                'Monitoreo de seguridad y detección de amenazas',
              ]}
            />
            <Text>
              Sin embargo, ningún método de transmisión por Internet es 100% seguro. Aunque hacemos
              nuestro mejor esfuerzo, no podemos garantizar la seguridad absoluta.
            </Text>
          </Section>

          {/* Retención de datos */}
          <Section title="6. Retención de Datos">
            <Text>
              Conservamos tu información personal mientras tu cuenta esté activa o según sea
              necesario para proporcionar servicios. Podemos retener ciertos datos por más tiempo si
              es requerido por ley o para fines legítimos de negocio.
            </Text>
            <Text>
              Cuando eliminas tu cuenta, tus datos son marcados para eliminación y se eliminan
              permanentemente dentro de 30 días, excepto los datos que debamos retener por
              obligaciones legales o fiscales.
            </Text>
          </Section>

          {/* Derechos del usuario (GDPR) */}
          <Section title="7. Tus Derechos (GDPR)">
            <Text>
              De acuerdo con el Reglamento General de Protección de Datos (GDPR) y leyes locales de
              privacidad, tienes los siguientes derechos:
            </Text>

            <SubSection title="7.1 Derecho de Acceso">
              <Text>
                Puedes solicitar una copia de todos los datos personales que tenemos sobre ti.
              </Text>
            </SubSection>

            <SubSection title="7.2 Derecho de Rectificación">
              <Text>
                Puedes actualizar o corregir tu información personal en cualquier momento desde la
                configuración de tu cuenta.
              </Text>
            </SubSection>

            <SubSection title="7.3 Derecho de Eliminación (Derecho al Olvido)">
              <Text>
                Puedes solicitar la eliminación completa de tus datos personales. Para ejercer este
                derecho:
              </Text>
              <List
                items={[
                  <>
                    Visita nuestra{' '}
                    <MuiLink
                      component={Link}
                      href={ROUTES.DATA_DELETION}
                      sx={{ color: '#00abc2', textDecoration: 'underline' }}
                    >
                      página de eliminación de datos
                    </MuiLink>
                  </>,
                  'Completa el formulario con tu información',
                  'Recibirás un email de confirmación',
                  'Procesaremos tu solicitud en un plazo máximo de 30 días',
                ]}
              />
            </SubSection>

            <SubSection title="7.4 Derecho de Portabilidad">
              <Text>
                Puedes solicitar una copia de tus datos en un formato estructurado y de uso común
                (JSON, CSV).
              </Text>
            </SubSection>

            <SubSection title="7.5 Derecho de Oposición">
              <Text>
                Puedes oponerte al procesamiento de tus datos para ciertos fines, como marketing
                directo.
              </Text>
            </SubSection>

            <SubSection title="7.6 Derecho de Restricción">
              <Text>
                Puedes solicitar que limitemos el procesamiento de tus datos en ciertas
                circunstancias.
              </Text>
            </SubSection>
          </Section>

          {/* Eliminación de datos */}
          <Section title="8. Proceso de Eliminación de Datos">
            <Text>
              Si deseas eliminar tu cuenta y todos los datos asociados, sigue estos pasos:
            </Text>
            <List
              items={[
                <>
                  Visita:{' '}
                  <MuiLink
                    component={Link}
                    href={ROUTES.DATA_DELETION}
                    sx={{ color: '#00abc2', textDecoration: 'underline' }}
                  >
                    {process.env.NEXT_PUBLIC_APP_URL || 'https://control-app.vercel.app'}
                    {ROUTES.DATA_DELETION}
                  </MuiLink>
                </>,
                'Completa el formulario de solicitud',
                'Recibirás un email de confirmación en tu dirección registrada',
                'Procesaremos tu solicitud en un plazo de 24-48 horas (máximo 30 días)',
              ]}
            />

            <SubSection title="8.1 Qué se Elimina">
              <Text>
                Al solicitar la eliminación de datos, se eliminarán permanentemente:
              </Text>
              <List
                items={[
                  'Tu cuenta de usuario',
                  'Información de perfil',
                  'Datos de tu(s) negocio(s)',
                  'Productos e inventario',
                  'Transacciones y reportes',
                  'Información de clientes que hayas ingresado',
                  'Información de empleados',
                  'Toda la información personal almacenada',
                ]}
              />
            </SubSection>

            <SubSection title="8.2 Datos Retenidos por Ley">
              <Text>
                Algunos datos pueden ser retenidos por períodos establecidos por ley (obligaciones
                fiscales, contables) incluso después de eliminar tu cuenta. Estos datos se
                mantienen de forma segura y confidencial.
              </Text>
            </SubSection>

            <SubSection title="8.3 Proceso Irreversible">
              <Text>
                <Strong>Importante:</Strong> La eliminación de datos es irreversible. Asegúrate de
                exportar cualquier información importante antes de continuar.
              </Text>
            </SubSection>
          </Section>

          {/* Cookies */}
          <Section title="9. Cookies y Tecnologías Similares">
            <Text>
              Usamos cookies y tecnologías similares para mejorar tu experiencia:
            </Text>
            <List
              items={[
                'Cookies de sesión para mantener tu autenticación',
                'Cookies de preferencias para recordar tu configuración',
                'Cookies analíticas para entender cómo usas la app (anónimas)',
              ]}
            />
            <Text>
              Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar la
              funcionalidad de nuestros servicios.
            </Text>
          </Section>

          {/* Menores de edad */}
          <Section title="10. Privacidad de Menores">
            <Text>
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos
              intencionalmente información de menores. Si descubrimos que hemos recopilado datos de
              un menor, los eliminaremos inmediatamente.
            </Text>
          </Section>

          {/* Transferencias internacionales */}
          <Section title="11. Transferencias Internacionales">
            <Text>
              Tus datos pueden ser transferidos y almacenados en servidores ubicados fuera de tu
              país. Nos aseguramos de que cualquier transferencia cumpla con las leyes de protección
              de datos aplicables y que tus datos estén protegidos adecuadamente.
            </Text>
          </Section>

          {/* Cambios a la política */}
          <Section title="12. Cambios a esta Política">
            <Text>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre
              cambios significativos mediante:
            </Text>
            <List
              items={[
                'Notificación en la aplicación',
                'Email a tu dirección registrada',
                'Aviso destacado en nuestro sitio web',
              ]}
            />
            <Text>
              El uso continuado de nuestros servicios después de los cambios constituye tu aceptación
              de la nueva política.
            </Text>
          </Section>

          {/* Contacto */}
          <Section title="13. Contacto">
            <Text>
              Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de
              Privacidad o el manejo de tus datos personales, contáctanos:
            </Text>
            <Box sx={{ mt: 2, p: 3, bgcolor: 'rgba(0, 171, 194, 0.1)', borderRadius: 2 }}>
              <Text>
                <Strong>Email de Privacidad:</Strong>{' '}
                <MuiLink
                  href="mailto:privacy@control-app.com"
                  sx={{ color: '#00abc2', textDecoration: 'underline' }}
                >
                  privacy@control-app.com
                </MuiLink>
              </Text>
              <Text>
                <Strong>Email de Soporte:</Strong>{' '}
                <MuiLink
                  href="mailto:support@control-app.com"
                  sx={{ color: '#00abc2', textDecoration: 'underline' }}
                >
                  support@control-app.com
                </MuiLink>
              </Text>
              <Text>
                <Strong>Eliminación de Datos:</Strong>{' '}
                <MuiLink
                  component={Link}
                  href={ROUTES.DATA_DELETION}
                  sx={{ color: '#00abc2', textDecoration: 'underline' }}
                >
                  {ROUTES.DATA_DELETION}
                </MuiLink>
              </Text>
            </Box>
          </Section>

          {/* Jurisdicción */}
          <Section title="14. Jurisdicción y Ley Aplicable">
            <Text>
              Esta Política de Privacidad se rige por las leyes de privacidad aplicables,
              incluyendo el GDPR (Reglamento General de Protección de Datos de la UE) y las leyes
              locales de protección de datos del país donde operas.
            </Text>
          </Section>

          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Footer */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2 }}
            >
              Esta política es efectiva desde el 5 de enero de 2026
            </Typography>
            <MuiLink
              component={Link}
              href={ROUTES.HOME}
              sx={{
                color: '#00abc2',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              ← Volver al Inicio
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

// Helper Components

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          color: '#00abc2',
          fontWeight: 600,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 2, ml: 2 }}>
      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 500,
          mb: 1,
          fontSize: '1.1rem',
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}

function Text({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body1"
      sx={{
        color: 'rgba(255, 255, 255, 0.8)',
        mb: 2,
        lineHeight: 1.7,
      }}
    >
      {children}
    </Typography>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <Box component="strong" sx={{ color: 'white', fontWeight: 600 }}>
      {children}
    </Box>
  )
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <Box component="ul" sx={{ mb: 2, pl: 3 }}>
      {items.map((item, index) => (
        <Box
          key={index}
          component="li"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 1,
            lineHeight: 1.7,
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  )
}
