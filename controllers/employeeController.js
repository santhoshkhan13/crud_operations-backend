// 



const Employee = require('../model/employeeModel');

async function addEmployee(req, res) {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function editEmployee(req, res) {
    const { id } = req.params;
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deleteEmployee(req, res) {
    const { id } = req.params;
    try {
        await Employee.findByIdAndDelete(id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Function to get a single employee by ID
async function getSingleEmployee(req, res) {
    const { id } = req.params;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Function to get all employees
async function getAllEmployees(req, res) {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addEmployee,
    editEmployee,
    deleteEmployee,
    getSingleEmployee,
    getAllEmployees
};
