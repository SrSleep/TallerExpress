import Cliente from "../../models/Cliente.js";

let crearCliente = async (req, res, next) => {
    try {
        let agregarCliente = req.body
        let cliente = await Cliente.create(agregarCliente)
        return res.status(201).json({
            response: cliente
        })
    } catch (error) {
        next(error)
    }
}

let muchosClientes = async (req, res, next) => {
    try {
        let arrayCliente = req.body
        let variosClientes = await Cliente.insertMany(arrayCliente)
        return res.status(201).json({
            response: variosClientes
        })
    } catch (error) {
        next(error)
    }
}

export{crearCliente, muchosClientes}