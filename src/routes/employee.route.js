
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');
router.get('/',employeeController.employeelist);

//create route for get employee by id
router.get('/:id',employeeController.getEmployeeById);


module.exports = router;