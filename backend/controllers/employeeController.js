import { Employee } from "../models/employeeModel.js";

const addEmployee = async(req, res) => {

    try {
        if (!req.body.name || 
            !req.body.age ||
            !req.body.workArea || 
            !req.body.yearsOfService || 
            !req.body.phone) {
               return res.send("Employee not added");
            }

        const newEmployee = {
            name: req.body.name,
            age: req.body.age,
            workArea: req.body.workArea,
            yearsOfService: req.body.yearsOfService,
            phone: req.body.phone
        }
        
        const employee = await Employee.create(newEmployee);

        await employee.save();
        return res.status(201).send(employee);

    } catch (error) {
        console.log(error);
    }
}

const getEmployee = async(req, res) => {
    try {
        const employees = await Employee.find();
        return res.send(employees);
    } catch (error) {
        console.log(error);
    }    
}

const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        return res.send(employee);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
}

const updateEmployee = async (req, res) => {
    try {
        if (!req.body.name || 
            !req.body.age ||
            !req.body.workArea || 
            !req.body.yearsOfService || 
            !req.body.phone) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const employeeEdit = req.body;
        const {id} = req.params;
        const isValidId = (id) => {
            return /^[0-9a-fA-F]{24}$/.test(id);
          };
          if (!isValidId(id)) {
            return res.status(400).send({ message: "Invalid ID" });
          }
        const employee = await Employee.findByIdAndUpdate(id, employeeEdit, { new: true });
        console.log(employee);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).send( {message: "Employee updated successfully"});
    } catch (error) {
        console.log(error);
        
        return res.status(500).send("Internal server error");
    }
}

const deleteEmployee =async (req, res) => {
    try {
        const {id} = req.params;
        
        const isValidId = (id) => {
            return /^[0-9a-fA-F]{24}$/.test(id);
          };
          if (!isValidId(id)) {
            return res.status(400).send({ message: "Invalid ID" });
          }
          
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).send( {message: "Employee deleted successfully"});
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
}

export {addEmployee, getEmployee, getEmployeeById, updateEmployee, deleteEmployee}
