const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({message: "Welcome to game api"})
})

app.listen(3000,()=>{
    console.log(3000);
})