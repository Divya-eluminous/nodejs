const mysql = require('mysql');
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'nodejs'
});

conn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('database connected');
    }
}); 

module.exports=conn;
