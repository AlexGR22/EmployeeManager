import express from "express";
import { addEmployee, deleteEmployee, getEmployee, getEmployeeById, updateEmployee } from "../controllers/employeeController.js";
const router = express.Router()



router.post("/", addEmployee);

router.get("/", getEmployee)

router.get("/:id", getEmployeeById);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);


export default router