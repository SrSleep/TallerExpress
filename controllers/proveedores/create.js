import Proveedor from "../../models/Proveedor.js";

let crearProveedor = async (req, res, next) => {
    try {
        let agregarProveedor = req.body
        let proveedor = await Proveedor.create(agregarProveedor)
        return res.status(201).json({
            response: proveedor
        })
    } catch (error) {
        next(error)
    }
}

let muchosProveedores = async (req, res, next) => {
    try {
        let arrayProveedor = req.body
        let variosProveedores = await Proveedor.insertMany(arrayProveedor)
        return res.status(201).json({
            response: variosProveedores
        })
    } catch (error) {
        next(error)
    }
}

export { crearProveedor ,muchosProveedores }