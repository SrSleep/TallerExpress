import { Router } from "express";
import { cliente, clientePorNombre, clienteVetado, clientePorCorreo } from "../controllers/clientes/read.js";
import { crearCliente, muchosClientes } from "../controllers/clientes/create.js";

const router = Router()

router.get('/todo', cliente)
router.get('/nombre/:texto', clientePorNombre)
router.get('/vetados/:texto', clienteVetado)
router.get('/correo/:texto',clientePorCorreo)
router.post('/crear', crearCliente)
router.post('/crearmuchos',muchosClientes )


export default router