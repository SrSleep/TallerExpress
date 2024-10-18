import { Router } from "express";
import { proveedor, proveedorPorNombre, telefonoProveedor, proveedorCorreo } from '../controllers/proveedores/read.js'
import { crearProveedor, muchosProveedores } from "../controllers/proveedores/create.js";

const router = Router()

router.get('/todo', proveedor)
router.get('/nombre/:texto', proveedorPorNombre)
router.get('/numero/:numero', telefonoProveedor)
router.get('/correo/:texto', proveedorCorreo)
router.post('/crear', crearProveedor)
router.post('/crearmuchos',muchosProveedores )


export default router