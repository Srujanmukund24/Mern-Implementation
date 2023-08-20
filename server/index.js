const express =require('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const {mongoose}=require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Databases Connected'))
.catch((err)=> console.log('Databases not connected',err))

const app=express();

app.use('/',require('./routes/authRoutes'))

const port=8000;
app.listen(port,()=> console.log(`Server Is running on port ${port}`))