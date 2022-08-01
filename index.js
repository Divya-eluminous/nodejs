const express= require('express');
const conn = require('./config/db.config');
const app = express();
const route = express.Router();
const port = process.env.PORT || 5000;
//app.use(roter);

app.get('/',(req,res)=>{
  res.send('Hello world');
});

//Import route for employee
const employeeRoute = require('./src/routes/employee.route');

app.use('/api/v1/employees',employeeRoute);
//app.use('api/v1/employees/')


app.listen(port,()=>{
    console.log(`Server is running at post ${port}`);
});
