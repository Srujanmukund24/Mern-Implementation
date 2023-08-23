const Employee=require('../models/emps')
const {hashPassword,comparePassword}=require('../helpers/auth')
const jwt =require('jsonwebtoken')

const test=(req,res)=>{
    res.json('test is working')
}

//Register a Applicant 
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
       

       const hashedPassword =await hashPassword(password)
       // Adding Applicant to the Database.
       const emp=await Employee.create({
          username,
          email,
          password:hashedPassword
       });
       
       return res.json(emp);
   } catch (error) {
        console.log("error while register",error);
   }
}

// Login Applicant :
    const loginEmployee= async(req,res)=>{
         try {
            const {email,password}=req.body;

            //check if Employee exists:
           const emp=await Employee.findOne({email});
           if(!emp){
            return res.json({
                error:'No User Found Plese Register!'
              })
           } 

           //check password match:
           const match=await comparePassword(password,emp.password)
          if(match){
              res.json('Password Matched')
              jwt.sign({
                email:emp.email,
                id:emp._id,
                username:emp.username},process.env.JWT_SECRET ,{},(err,token)=>{
                    if(err) throw err;
                    response.cookie('token',token).json(emp)
                })
          }
          else{
            res.json({
                error:'Password Incorrect.'
            })
          }
         }catch (error) {
             console.log('error');
         }
    }

    const getprofile=(req,res)=>{
        const {token}=req.cookies
        if(token){
            jwt.verify(token,process.env.JWT_SECRET,{},(err,emp)=>{
                if(err) throw err;
                res.json(emp);
            })
        }
        else{
            res.json(null)
        }
    }
     
module.exports={
    test,
    registerEmployee,
    loginEmployee,
    getprofile
}