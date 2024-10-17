import { Schema, model } from "mongoose"

let collection = 'provedores'
const schema = new Schema({
    nombre: { type: String, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true },
}, {
    timestamps: true
})

let Provedor = model(collection, schema)
export default Provedor