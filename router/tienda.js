import { Router } from "express";
import { tiendas, tiendaPorDireccion, tiendaPornombre } from "../controllers/tiendas/read.js";
import { crearTienda, muchasTiendas } from "../controllers/tiendas/create.js";

const router = Router()

router.get('/todo', tiendas)
router.get('/direccion/:texto', tiendaPorDireccion)
router.get('/nombre/:texto', tiendaPornombre)
router.post('/crear', crearTienda)
router.post('/crearmuchas', muchasTiendas)


export default router