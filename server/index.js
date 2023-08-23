const express =require('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const {mongoose}=require('mongoose')
const app=express();
const cookieParser=require('cookie-parser')

//DataBase Connnected:
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Databases Connected'))
.catch((err)=> console.log('Databases not connected',err))


//middleware:
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

//routes :
app.use('/',require('./routes/authRoutes'))


//port for server:
const port=8000;
app.listen(port,()=> console.log(`Server Is running on port ${port}`))