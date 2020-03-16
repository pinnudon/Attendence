const mongoose=require('mongoose')
const validator=require('validator')


const User=mongoose.model('User1',{
    username:{
        type: String
    },
    
        password: {
            type: String,
            required: true,
            trim:true,
            validate(value){
                if(value.toLowerCase().includes("password")){
                    throw new Error("password cannot be null or password")
                }
            }
        },
        age:{
            type:Number,
            default: 21
        },
        email:{
            type: String,
            required: true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Not a valid email")
                }
            }
        }
    
})


module.exports=User