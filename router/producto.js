import { Router } from "express";
import { productos, productosPorNombre, precioMenor, precioMayor } from "../controllers/productos/read.js";

const router = Router()

router.get('/todo', productos)
router.get('/nombre/:texto', productosPorNombre)
router.get('/preciomenor/:numero', precioMenor)
router.get('/preciomayor/:numero', precioMayor)


export default router