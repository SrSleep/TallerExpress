import { Router } from "express";
import { empleados, empleadosPorCargo, precioMayor, precioMenor } from "../controllers/empleados/read.js";
import { crearEmpleado, muchosEmpleados } from "../controllers/empleados/create.js";

const router = Router()

router.get('/todo', empleados)
router.get('/cargo/:texto', empleadosPorCargo)
router.get('/salariomayor/:numero', precioMayor)
router.get('/salariomenor/:numero', precioMenor)
router.post('/crear', crearEmpleado)
router.post('/crearmuchos', muchosEmpleados)


export default router