let mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    name:string,
    email:string,
    password:string,
    role:{
        type:string,
        enum:["HR","EMPLOYEE"]
    }
})
let users=mongoose.model('users',userSchema);
module.exports={users};