import 'dotenv/config.js'
import '../../config/database.js'
import Empleado from '../Empleado.js'

const empleados = [
    { nombre: "Juan David Pérez", cargo: "Gerente", salario: 55000 },
    { nombre: "María Fernanda Gómez", cargo: "Vendedora", salario: 30000 },
    { nombre: "Carlos Alberto Palacios", cargo: "Contador", salario: 40000 },
    { nombre: "Ana María Quintero", cargo: "Asistente", salario: 28000 },
    { nombre: "Pedro Pablo Chocó", cargo: "Vendedor", salario: 32000 },
    { nombre: "Laura Jiménez", cargo: "Cajera", salario: 25000 },
    { nombre: "Sofía Hernández", cargo: "Especialista en Marketing", salario: 32000 },
    { nombre: "Luis Miguel Mosquera", cargo: "Contador", salario: 38000 },
    { nombre: "Isabel Cristina Castaño", cargo: "Recursos Humanos", salario: 42000 },
    { nombre: "Javier Eduardo Valencia", cargo: "Diseñador", salario: 36000 },
    { nombre: "Claudia Marcela Londoño", cargo: "Asistente", salario: 37000 },
    { nombre: "Ricardo Andrés Caicedo", cargo: "Programador", salario: 48000 },
    { nombre: "Patricia Gutiérrez", cargo: "Gerente de Proyectos", salario: 60000 },
    { nombre: "David Alejandro Salazar", cargo: "Coordinador de Logística", salario: 33000 },
    { nombre: "Mariana Delgado", cargo: "Auxiliar Administrativo", salario: 29000 }
  ];

Empleado.insertMany(empleados)