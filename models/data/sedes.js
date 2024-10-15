import 'dotenv/config.js'
import '../../config/database.js'
import Tienda from '../Tienda.js'

const tiendas = [
    { nombre: "Supermercado El Ahorro", direccion: "Calle Falsa 123, Ciudad A", telefono: 5551234567 },
    { nombre: "Tienda La Esquina", direccion: "Av. Siempre Viva 456, Ciudad B", telefono: 5559876543 },
    { nombre: "Boutique Moda Central", direccion: "Boulevard Central 789, Ciudad C", telefono: 5556543210 },
    { nombre: "Ferretería El Tornillo", direccion: "Carrera 1 #23-45, Ciudad D", telefono: 5554321098 },
    { nombre: "Panadería Delicias", direccion: "Pasaje del Sol 321, Ciudad E", telefono: 5558765432 }
  ];
  

Tienda.insertMany(tiendas)