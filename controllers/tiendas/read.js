import Tienda from '../../models/Tienda.js'

let tiendas = async (req, res, next) => {
    try {
        let todos = await Tienda.find()
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        next(error)
    }
}

let tiendaPorDireccion = async (req, res, next) => {
    try {

        let direccion = new RegExp(req.params.texto, 'i')
        let resultado = await Tienda.find({ direccion: direccion })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

let tiendaPornombre = async (req, res, next) => {
    try {

        let nombre = new RegExp(req.params.texto, 'i')
        let resultado = await Tienda.find({ nombre: nombre })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

export { tiendas, tiendaPorDireccion, tiendaPornombre }