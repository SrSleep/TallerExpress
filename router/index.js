import { Router } from "express";
import tiendaRouter from './tienda.js'
import productoRouter from './producto.js'
import empleadosRouter from './empleado.js'
import proveedorRouter from './proveedor.js'
import clienteRouter from './cliente.js'

const router = Router()

router.use('/tiendas',tiendaRouter)
router.use('/productos',productoRouter)
router.use('/empleados',empleadosRouter)
router.use('/proveedores',proveedorRouter)
router.use('/clientes',clienteRouter)

export default router