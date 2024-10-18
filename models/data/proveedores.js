import 'dotenv/config.js'
import '../../config/database.js'
import Proveedor from '../Proveedor.js';

const proveedores = [
  { nombre: "Proveedores del Norte", telefono: 3123456789, correo: "contacto@norte.com", direccion: "Calle 123 #45-67, Bogotá" },
  { nombre: "Distribuidora Andina", telefono: 3134567890, correo: "info@andina.com", direccion: "Carrera 10 #20-30, Cali" },
  { nombre: "Comercializadora Global", telefono: 3209876543, correo: "ventas@global.com", direccion: "Avenida 5N #24-30, Medellín" },
  { nombre: "Almacenes del Valle", telefono: 3101234567, correo: "servicio@valle.com", direccion: "Calle 25 #8-40, Cartagena" },
  { nombre: "Suministros Express", telefono: 3156789012, correo: "ventas@express.com", direccion: "Carrera 12 #15-20, Barranquilla" },
  { nombre: "Logística Total", telefono: 3123456788, correo: "logistica@total.com", direccion: "Calle 45 #20-25, Bucaramanga" },
  { nombre: "Productos La Sierra", telefono: 3145678901, correo: "contacto@sierra.com", direccion: "Carrera 15 #30-35, Pereira" },
  { nombre: "Distribuciones Sur", telefono: 3112345678, correo: "info@sur.com", direccion: "Avenida 7N #10-15, Manizales" },
  { nombre: "Proveedora Nacional", telefono: 3198765432, correo: "contacto@nacional.com", direccion: "Calle 50 #10-20, Cúcuta" },
  { nombre: "Suministros Industriales", telefono: 3187654321, correo: "ventas@industriales.com", direccion: "Carrera 22 #12-14, Ibagué" },
  { nombre: "Equipos & Más", telefono: 3176543210, correo: "contacto@equiposymas.com", direccion: "Avenida 19 #45-50, Popayán" },
  { nombre: "TecnoGlobal", telefono: 3165432109, correo: "servicio@tecnoglobal.com", direccion: "Calle 30 #8-10, Montería" },
  { nombre: "Comercial del Llano", telefono: 3154321098, correo: "info@llano.com", direccion: "Carrera 18 #30-40, Neiva" },
  { nombre: "Insumos Integrales", telefono: 3143210987, correo: "ventas@insumosintegrales.com", direccion: "Calle 60 #12-14, Villavicencio" },
  { nombre: "Materiales del Pacífico", telefono: 3132109876, correo: "ventas@pacifico.com", direccion: "Avenida 9 #45-50, Pasto" },
  { nombre: "Proveedora del Caribe", telefono: 3121098765, correo: "contacto@caribe.com", direccion: "Calle 70 #8-12, Armenia" },
  { nombre: "Distribuidora Costeña", telefono: 3110987654, correo: "ventas@costena.com", direccion: "Carrera 25 #30-35, Santa Marta" },
  { nombre: "Suministros Vanguardia", telefono: 3208765432, correo: "info@vanguardia.com", direccion: "Avenida 10 #5-10, Cartagena" },
  { nombre: "Proveedora Andina", telefono: 3197654321, correo: "ventas@proveedoraandina.com", direccion: "Calle 80 #20-30, Barranquilla" },
  { nombre: "Distribuidora Innovatech", telefono: 3186543210, correo: "servicio@innovatech.com", direccion: "Carrera 5 #12-15, Bogotá" },
  { nombre: "Proveedora Oriente", telefono: 3175432109, correo: "ventas@oriente.com", direccion: "Avenida 8 #18-20, Medellín" },
  { nombre: "Insumos del Llano", telefono: 3164321098, correo: "contacto@insumosdellano.com", direccion: "Calle 90 #30-35, Cali" },
  { nombre: "Comercializadora Pineda", telefono: 3153210987, correo: "info@comercialpineda.com", direccion: "Carrera 12 #22-25, Pereira" },
  { nombre: "Proveedores de Occidente", telefono: 3142109876, correo: "contacto@occidente.com", direccion: "Avenida 15 #8-12, Manizales" },
  { nombre: "Suministros Suárez", telefono: 3131098765, correo: "ventas@suarez.com", direccion: "Calle 100 #5-10, Cúcuta" }
];

Proveedor.insertMany(proveedores)