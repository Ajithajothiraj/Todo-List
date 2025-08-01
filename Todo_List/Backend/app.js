const express=require('express');
const app=express();
const path=require('path');
const mysql=require('mysql2')
const cors=require('cors')
const PORT=3000;

app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Kapil@1362005',
    database:'todolist'

})
db.connect((err)=>{
    if(err){
        console.log("There is an error in connection");
    }
    else{
        console.log("Database connected");
    }
})

app.get("/data",(req,res)=>{
    const sql=`SELECT * FROM task`;
    db.query(sql,(err,result)=>{
        if(err){
            console.log("there is an erro");
        }
        res.status(200).json({
            message:'success',
            data:result
        })
    })
})





app.listen(PORT,()=>{(console.log(`The db is running in the ${PORT}`))})
