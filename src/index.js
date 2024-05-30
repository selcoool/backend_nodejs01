import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
var app=express()

var  corsOptions  = {
    origin:["https://thegioimauxanh.com","http://localhost:3000","https://peaceful-sunflower-941f16.netlify.app"], //frontend url
    credentials: true,
    allowedHeaders:'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposedHeaders:'Content-Range, X-Content-Range'
  }


  app.use(cors(corsOptions));




  app.use(express.json({ limit: '30mb' }));
  app.use(express.urlencoded({ extended: true, limit: '30mb' }));


  app.listen(8000, ()=>{
    console.log(`Server started on port 8000`)
})