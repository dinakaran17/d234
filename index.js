import express from "express"
import { PORT,mongodb } from "./config.js"
import mongoose from "mongoose"
const app=express()

mongoose.connect(mongodb).then(()=>
{
    console.log('mongoose connected')
    app.listen(PORT,()=>
{
    console.log(`server running  ${PORT}`)
})
})
.catch(err=>{
    console.log(err)
})
