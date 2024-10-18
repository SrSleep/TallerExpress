import Producto from "../../models/Producto.js";

let crearProducto = async (req, res, next) => {
    try {
        let agregarProducto = req.body
        let producto = await Producto.create(agregarProducto)
        return res.status(201).json({
            response: producto
        })
    } catch (error) {
        next(error)
    }
}

let muchosProductos = async (req, res, next) => {
    try {
        let arrayProductos = req.body
        let variosProductos = await Producto.create(arrayProductos)
        return res.status(201).json({
            response: variosProductos
        })
    } catch (error) {
        next(error)
    }
}

export { crearProducto, muchosProductos }