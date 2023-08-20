const Employee=require('../models/emps')


const test=(req,res)=>{
    res.json('test is working')
}

const registerEmployee=async (req,res)=>{
   try {
       const {username,email,password}=req.body;
       //check if username is typed 
       if(!username){
        return res.json({
            error:'username is must!'
        })
       };
       // check Password length
       if(!password || password.length<6){
        return res.json({
            error:'Password is Required and must be greater than 6 charecters'
        })
       };

       //check email is unique or not
       const  exist =await Employee.findOne({email});
       if(exist){
        return res.json({
            error:'Email Is already in use.'
        })
       };
       
       // Adding Applicant to the Database.
       const emp=await Employee.create({
          username,email,password
       })
       
       return res.json(emp);
   } catch (error) {
        console.log("error while register",error);
   }
}
module.exports={
    test,
    registerEmployee
}