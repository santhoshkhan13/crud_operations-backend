// employeeRouter.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Routes
router.post('/', employeeController.addEmployee);
router.put('/:id', employeeController.editEmployee);
router.delete('/:id', employeeController.deleteEmployee);
router.get('/:id', employeeController.getSingleEmployee);
router.get('/', employeeController.getAllEmployees);

module.exports = router;
