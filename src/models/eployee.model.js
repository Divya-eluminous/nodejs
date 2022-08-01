var dbconn = require('../../config/db.config');
var Employee = (employee) =>{
   this.first_name = employee.first_name;
   this.last_name = employee.last_name;
   this.created_at = new Date();
   this.updated_at = new Date();

}
//get all employees

Employee.getAllEmployees = (result) =>{
    dbconn.query('select * from employee',(err,res)=>{
       if(err){
           console.log('err while fetching employee');
           result(null,err);
       }else{
           console.log('Employee fetched successfully');
           result(null,res);
       }
    });
}

//get employee by id
Employee.getEmployeeById=(id,result)=>{
    console.log('in model of get employee by id'+id);

  dbconn.query('select * from employee where id=?',[id],(err,res)=>{
    if(err){
        console.log('err while fetching employee by id');
        result(null,err);
    }else{
        console.log('employee fetched by id');
        result(null,res);
    }
  });
}


module.exports = Employee;