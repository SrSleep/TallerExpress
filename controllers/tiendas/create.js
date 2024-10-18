import Tienda from '../../models/Tienda.js'

let crearTienda = async (req, res, next) => {
    try {
        let agregarTienda = req.body
        let tienda = await Tienda.create(agregarTienda)
        return res.status(201).json({
            response: tienda
        })
    } catch (error) {
        next(error)
    }
}

let muchasTiendas = async (req, res, next) => {
    try {
        let arrayTienda = req.body
        let variasTiendas = await Tienda.insertMany(arrayTienda)
        return res.status(201).json({
            response: variasTiendas
        })
    } catch (error) {
        next(error)
    }
}

export { crearTienda, muchasTiendas }