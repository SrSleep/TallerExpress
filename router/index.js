import { Router } from "express";
import tiendaRouter from './tienda.js'
import productoRouter from './producto.js'
import empleadosRouter from './empleado.js'

const router = Router()

router.use('/tiendas',tiendaRouter)
router.use('/productos',productoRouter)
router.use('/empleados',empleadosRouter)


export default router