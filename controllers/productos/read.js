import Producto from '../../models/Producto.js'

let productos = async (req, res) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let productosPorNombre = async (req, res) => {
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

let precioMenor = async (req, res) => {
    try {

        let precio = req.params.numero
        let all = await Producto.find({ precio: { $lt: precio } })
        next(error)
    } catch (error) {
        next(error)
    }
}

let precioMayor = async (req, res) => {
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