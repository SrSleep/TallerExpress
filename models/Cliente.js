import { Schema,model } from "mongoose";

let collection= 'clientes'
const schema = new Schema({
    nombre: { type: String, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true },
    vetado: { type: Boolean, default: false } // Campo vetado
}, {
    timestamps: true // Mongoose manejará createdAt y updatedAt
});

let  Cliente = model(collection, schema);

export default Cliente