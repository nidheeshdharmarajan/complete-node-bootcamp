const express = require('express')

const app= express()
app.get('/',(req,res)=>{res.status(200).json({message:"hello from the server side",app:"naturo"})})
const port = 3000
app.listen(port,()=>{console.log(`app is running on the port: ${port}`)})