import { Router } from "express";
import { tiendas, tiendaPorDireccion, tiendaPornombre } from "../controllers/tiendas/read.js";

const router = Router()

router.get('/todo', tiendas)
router.get('/direccion/:texto', tiendaPorDireccion)
router.get('/nombre/:texto', tiendaPornombre)

export default router