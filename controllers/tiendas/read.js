import Tienda from '../../models/Tienda.js'

let tiendas = async (req, res) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let tiendaPorDireccion = async (req, res) => {
    try {

        let direccion = new RegExp(req.params.texto, 'i')
        let all = await Tienda.find({ direccion: direccion })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let tiendaPornombre = async (req, res) => {
    try {

        let nombre = new RegExp(req.params.texto, 'i')
        let all = await Tienda.find({ nombre: nombre })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { tiendas, tiendaPorDireccion, tiendaPornombre }