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

const EmployeeModel=mongoose.model('Employee',employeeSchema);

module.exports=EmployeeModel;