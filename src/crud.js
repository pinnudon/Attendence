const express=require('express')
require('./db/mongoose')
const User = require('./models/user')
const Pinnu = require('./models/task')
const userRouter=require('./routers/user')

const app=express()
const port =process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)


app.listen(port,()=>{
    console.log("listening to port "+port)
})