import { Router } from "express";
import { productos, productosPorNombre, precioMenor, precioMayor } from "../controllers/productos/read.js";
import { crearProducto, muchosProductos } from "../controllers/productos/create.js";

const router = Router()

router.get('/todo', productos)
router.get('/nombre/:texto', productosPorNombre)
router.get('/preciomenor/:numero', precioMenor)
router.get('/preciomayor/:numero', precioMayor)
router.post('/crear', crearProducto)
router.post('/crearmuchos', muchosProductos)


export default router