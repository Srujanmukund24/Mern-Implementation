const express=require('express')
const router=express.Router();
const cors=require('cors');
const {test,registerEmployee,loginEmployee,getprofile} =require('../controllers/authController')

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173'
    })
)

router.get('/',test)
router.post('/registeremployee',registerEmployee)
router.post('/loginemployee',loginEmployee)
router.get('/profile',getprofile);

module.exports=router