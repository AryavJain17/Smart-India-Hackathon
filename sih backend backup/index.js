const express=require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors')
const Uploadrouter=require('./Routes/Upload')
const Apirouter=require('./Routes/Api')
const multerconfig  = require('./Controllers/MulterConfig');
const corsconfig={
    origin: '*', // Replace with the allowed origin(s) for your application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization', // Specify the allowed headers
    preflightContinue: false, // Disable preflight requests (OPTIONS)
    optionsSuccessStatus: 204, // Set the status code for successful OPTIONS requests
  };
  app.use(cors(corsconfig))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get("/",(req,res,next)=>{
    res.send("hi")
})
app.use('/upload',Uploadrouter)
app.use('/Api',Apirouter)

app.listen('80',()=>{
    console.log("server started ");
})
