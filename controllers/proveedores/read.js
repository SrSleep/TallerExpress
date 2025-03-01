import Proveedor from "../../models/Proveedor.js";

let proveedor = async (req, res, next) => {
    try {
        let todos = await Proveedor.find()
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        next(error)
    }
}

let proveedorPorNombre = async (req, res, next) => {
    try {

        let nombre = new RegExp(req.params.texto, 'i')
        let resultado = await Proveedor.find({ nombre: nombre })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

let telefonoProveedor = async (req, res, next) => {
    try {
        let telefono = req.params.numero
        let resultado = await Proveedor.find({ telefono: telefono })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

let proveedorCorreo = async (req, res, next) => {
    try {

        let correo = new RegExp(req.params.texto, 'i')
        let resultado = await Proveedor.find({ correo: correo })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

export { proveedor, proveedorPorNombre, telefonoProveedor, proveedorCorreo }