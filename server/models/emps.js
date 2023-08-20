const mongoose=require('mongoose');
const {Schema}=mongoose

const employeeSchema=new Schema({
    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})

const EmployeeModel=moongoose.model('Employee',userSchema);

module.exports=EmployeeModel;