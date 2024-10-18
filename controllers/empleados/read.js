import Empleado from '../../models/Empleado.js'

let empleados = async (req, res) => {
    try {
        let todos = await Empleado.find()
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let empleadosPorCargo = async (req, res) => {
    try {

        let cargo = new RegExp(req.params.texto, 'i')
        let resultado = await Empleado.find({ cargo: cargo })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}
let precioMenor = async (req, res) => {
    try {

        let salario = req.params.numero
        let resultado = await Empleado.find({ salario: { $lt: salario } })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}
let precioMayor = async (req, res) => {
    try {

        let salario = req.params.numero
        let resultado = await Empleado.find({ salario: { $gt: salario } })
        return res.status(200).json({
            response: resultado
        })
    } catch (error) {
        next(error)
    }
}

export { empleados, empleadosPorCargo, precioMayor, precioMenor }