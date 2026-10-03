let express=require('express');
let app=express();
let mongoose=require("mongoose");
let emproutes=require("./routes/employee_routes");
app.use(express.json());


// //localhost:3000/register
// app.post("/register",(req,res)=>{
//     res.send("register route called");
// });


// // local host:3000/viewstudent
// app.get("/viewstudent",(req,res)=>{
//     res.send("view student page called");
// })
// // nodemon index.js  (run in terminal)

mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>{console.log("db connect success")}).catch(
        (err)=>console.log(err));
    

let hrroutes=require('./routes/HR_routes');

app.use("/api/hr",hrroutes);
//localhost:3000/api/hr/viewemployees

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})
