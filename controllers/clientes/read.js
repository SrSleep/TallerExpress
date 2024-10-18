import Cliente from "../../models/Cliente.js";

let cliente = async (req, res, next) => {
    try {
        let todos = await Cliente.find()
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        next(error)
    }
}

let clientePorNombre = async (req, res, next) => {
    try {

        let nombre = new RegExp(req.params.texto, 'i')
        let resultado = await Cliente.find({ nombre: nombre })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

let clienteVetado = async (req, res, next) => {
    try {
  
        let vetado = req.params.texto === 'vetado'? true :false       
        let resultado = await Cliente.find({ vetado: vetado })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

let clientePorCorreo = async (req, res, next) => {
    try {

        let correo = new RegExp(req.params.texto, 'i')
        let resultado = await Cliente.find({ correo: correo })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}


export { cliente, clientePorNombre, clienteVetado ,clientePorCorreo }