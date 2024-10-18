import Producto from '../../models/Producto.js'

let productos = async (req, res, next) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let productosPorNombre = async (req, res, next) => {
    try {

        let nombre = new RegExp(req.params.texto, 'i')
        let all = await Producto.find({ nombre: nombre })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let precioMenor = async (req, res, next) => {
    try {

        let precio = req.params.numero
        let all = await Producto.find({ precio: { $lt: precio } })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let precioMayor = async (req, res, next) => {
    try {

        let precio = req.params.numero
        let all = await Producto.find({ precio: { $gt: precio } })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { productos, productosPorNombre, precioMenor, precioMayor }