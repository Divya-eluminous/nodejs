const EmployeeModel = require('../models/eployee.model');

//Get all employeelist
exports.employeelist= (req,resp) =>{
 console.log('all employee list');
 EmployeeModel.getAllEmployees((err,employee)=>{
    console.log('We are here');
    if(err)
    resp.send(err);
    console.log('employees',employee);
    resp.send(employee);


 });
}

// get employee by id
exports.getEmployeeById = (req,resp)=>{
    console.log('in get employee by id');
    EmployeeModel.getEmployeeById(req.param.id,(err,employee)=>{
          if(err)
          resp.send(err);
          console.log(' controller employee by id',employee);
          resp.send(employee);
    });

}