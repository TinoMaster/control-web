export interface HelpArticle {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  content: string // HTML string
}

export const HELP_CATEGORIES = [
  { id: 'primeros-pasos', label: 'Primeros pasos' },
  { id: 'ventas', label: 'Ventas' },
  { id: 'empleados', label: 'Empleados' },
  { id: 'inventario', label: 'Inventario' },
  { id: 'configuracion', label: 'Configuración' },
]

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'getting-started',
    title: 'Cómo empezar con Control',
    description: 'Guía paso a paso para descargar la app, crear tu cuenta y configurar tu primer negocio.',
    category: 'Primeros pasos',
    readTime: '5 min de lectura',
    content: `
      <h2>Requisitos previos</h2>
      <ul>
        <li>Un teléfono Android (versión 8.0+) o iOS (versión 14+)</li>
        <li>Una cuenta de correo electrónico válida</li>
        <li>Conexión a Internet</li>
      </ul>

      <h2>Paso 1: Descargar la aplicación</h2>
      <ol>
        <li>Abre la <strong>Google Play Store</strong> o el <strong>App Store</strong></li>
        <li>Busca <strong>"Control - Gestión Empresarial"</strong></li>
        <li>Toca en <strong>Instalar</strong></li>
      </ol>

      <h2>Paso 2: Crear tu cuenta</h2>
      <ol>
        <li>Abre la aplicación Control</li>
        <li>Toca en <strong>"Registrarme"</strong></li>
        <li>Completa el formulario con tu nombre, email y contraseña</li>
        <li>Acepta los términos y condiciones</li>
        <li>Toca <strong>"Crear cuenta"</strong></li>
      </ol>
      <blockquote>Recibirás un email de confirmación. Revisa también tu carpeta de spam.</blockquote>

      <h2>Paso 3: Crear tu primer negocio</h2>
      <ol>
        <li>Toca en <strong>"Crear negocio"</strong></li>
        <li>Ingresa el nombre de tu negocio</li>
        <li>Selecciona el tipo (tienda, restaurante, servicio, etc.)</li>
        <li>Configura los datos de contacto</li>
        <li>Toca <strong>"Guardar"</strong></li>
      </ol>

      <h2>Primeros pasos recomendados</h2>
      <ul>
        <li>Configura tus empleados en <em>Gestión General → Empleados</em></li>
        <li>Agrega productos si usas el módulo POS</li>
        <li>Registra tu primer ingreso o venta</li>
        <li>Revisa el resumen al final del día en la pantalla Home</li>
      </ul>
    `,
  },
  {
    slug: 'sales-guide',
    title: 'Cómo registrar tus primeras ventas',
    description: 'Aprende a registrar ventas de servicios y productos usando el POS de Control.',
    category: 'Ventas',
    readTime: '7 min de lectura',
    content: `
      <h2>Tipos de ventas en Control</h2>
      <p>Control ofrece dos formas de registrar ventas:</p>
      <ul>
        <li><strong>Registros rápidos</strong>: Para servicios, cobros en efectivo o tarjeta</li>
        <li><strong>Punto de Venta (POS)</strong>: Para ventas de productos con inventario</li>
      </ul>

      <h2>Registrar una venta de servicio</h2>
      <ol>
        <li>Ve a la pestaña <strong>Registros</strong></li>
        <li>Toca en <strong>"Venta de servicios"</strong></li>
        <li>Selecciona el servicio vendido</li>
        <li>Ingresa el monto y el método de pago</li>
        <li>Asigna la venta a un empleado (opcional)</li>
        <li>Toca <strong>"Registrar"</strong></li>
      </ol>

      <h2>Usar el Punto de Venta (POS)</h2>
      <ol>
        <li>Toca en el ícono de <strong>Tienda</strong></li>
        <li>Selecciona o busca el producto</li>
        <li>Ajusta la cantidad con los botones + y -</li>
        <li>Toca <strong>"Agregar al carrito"</strong></li>
        <li>Toca <strong>"Cobrar"</strong> y selecciona el método de pago</li>
        <li>Toca <strong>"Confirmar venta"</strong></li>
      </ol>

      <h2>Anular una venta</h2>
      <p>Solo usuarios con rol ADMIN o superior pueden anular ventas:</p>
      <ol>
        <li>Ve al historial de ventas</li>
        <li>Toca sobre la venta que quieres anular</li>
        <li>Toca <strong>"Anular"</strong> y confirma</li>
      </ol>

      <h2>Generar reporte del día</h2>
      <ol>
        <li>Ve a <strong>Tienda → Reportes</strong></li>
        <li>Toca <strong>"Finalizar reporte del día"</strong></li>
        <li>El sistema calculará totales, comisiones y ganancias automáticamente</li>
      </ol>
    `,
  },
  {
    slug: 'employee-management',
    title: 'Gestión de empleados',
    description: 'Cómo agregar empleados, configurar salarios, registrar pagos y gestionar roles.',
    category: 'Empleados',
    readTime: '6 min de lectura',
    content: `
      <h2>Agregar un empleado</h2>
      <ol>
        <li>Ve a la pestaña <strong>Gestión General</strong></li>
        <li>Toca en <strong>"Empleados"</strong></li>
        <li>Toca el botón <strong>"+"</strong></li>
        <li>Completa nombre, contacto, cargo y tipo de salario</li>
        <li>Toca <strong>"Guardar"</strong></li>
      </ol>

      <h2>Tipos de salario</h2>
      <table>
        <thead><tr><th>Tipo</th><th>Descripción</th></tr></thead>
        <tbody>
          <tr><td><strong>Fijo</strong></td><td>Monto fijo por período</td></tr>
          <tr><td><strong>Comisión</strong></td><td>Porcentaje de las ventas</td></tr>
          <tr><td><strong>Mixto</strong></td><td>Salario base + comisión</td></tr>
        </tbody>
      </table>

      <h2>Registrar un pago</h2>
      <ol>
        <li>Ve a <strong>Gestión General → Empleados</strong></li>
        <li>Toca sobre el empleado</li>
        <li>Toca <strong>"Registrar pago"</strong></li>
        <li>Ingresa monto, fecha y concepto</li>
        <li>Toca <strong>"Confirmar"</strong></li>
      </ol>

      <h2>Roles y permisos</h2>
      <table>
        <thead><tr><th>Rol</th><th>Acceso</th></tr></thead>
        <tbody>
          <tr><td>USER</td><td>Operaciones básicas</td></tr>
          <tr><td>ADMIN</td><td>Gestión de empleados y reportes</td></tr>
          <tr><td>OWNER</td><td>Configuración del negocio y precios</td></tr>
          <tr><td>SUPERADMIN</td><td>Acceso total a todos los negocios</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    slug: 'inventory-management',
    title: 'Control de inventario',
    description: 'Gestiona tu stock, configura alertas de reposición y registra movimientos.',
    category: 'Inventario',
    readTime: '5 min de lectura',
    content: `
      <h2>¿Qué es el inventario en Control?</h2>
      <p>El módulo de inventario te permite gestionar los materiales, consumibles y productos de tu negocio con movimientos auditables y alertas automáticas.</p>

      <h2>Agregar un producto al inventario</h2>
      <ol>
        <li>Ve a <strong>Gestión del Negocio → Inventario</strong></li>
        <li>Toca el botón <strong>"+"</strong></li>
        <li>Ingresa nombre, categoría, unidad de medida y stock inicial</li>
        <li>Configura el stock mínimo para alertas</li>
        <li>Toca <strong>"Guardar"</strong></li>
      </ol>

      <h2>Registrar un movimiento de stock</h2>
      <p>Los movimientos pueden ser de entrada (compra, reposición) o salida (consumo, pérdida):</p>
      <ol>
        <li>Toca sobre el producto</li>
        <li>Toca <strong>"Registrar movimiento"</strong></li>
        <li>Selecciona el tipo: <em>Entrada</em> o <em>Salida</em></li>
        <li>Ingresa la cantidad y el motivo</li>
        <li>Toca <strong>"Confirmar"</strong></li>
      </ol>

      <h2>Alertas de stock bajo</h2>
      <p>Cuando el stock de un producto cae por debajo del mínimo configurado, recibirás una notificación automática y el producto aparecerá marcado en rojo en el listado.</p>

      <h2>Múltiples almacenes</h2>
      <p>Si tienes más de una ubicación, puedes crear almacenes separados y transferir stock entre ellos desde <strong>Gestión General → Almacenes</strong>.</p>
    `,
  },
]

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: string): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.category === category)
}
