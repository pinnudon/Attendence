const express=require('express')
const User=require('../models/user')
const router=new express.Router()


router.patch('/user/:id',async (req,res)=>{
    
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
           return res.status(404).send()
        }
        res.send(user)

    }catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/user/:id',async (req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/alldata/',async (req,res)=>{
    
    try{
        const all=await User.find()
        res.send(all)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/user/:id',async (req,res)=>{
    const _id=req.params.id
    try{
        const all=await User.find()
        const user= await User.findById(_id)
        
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/user',async (req,res)=>{
    const user =new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e) {
        res.status(400).send(e)
    }
   
})
module.exports=router