import Empleado from "../../models/Empleado.js";

let crearEmpleado = async (req, res) => {
    try {
        let agregarEmpleado = req.body
        let empleado = await Empleado.create(agregarEmpleado)
        return res.status(201).json({
            response: empleado
        })
    } catch (error) {
        next(error)
    }
}

let muchosEmpleados = async (req, res, next) => {
    try {
        let arrayEmpleados = req.body
        let variosEmpleados = await Empleado.create(arrayEmpleados)
        return res.status(201).json({
            response: variosEmpleados
        })
    } catch (error) {
        next(error)
    }
}

export { crearEmpleado , muchosEmpleados}