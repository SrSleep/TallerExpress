import { Router } from "express";
import tiendaRouter from './tienda.js'
import productoRouter from './producto.js'
import empleadosRouter from './empleado.js'
import proveedorRouter from './proveedor.js'

const router = Router()

router.use('/tiendas',tiendaRouter)
router.use('/productos',productoRouter)
router.use('/empleados',empleadosRouter)
router.use('/proveedores',proveedorRouter)

export default router