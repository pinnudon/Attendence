
require('./db/mongoose')
const User = require('./models/user')

const findanddelete= async (id,age)=>{
    const user= await User.findByIdAndUpdate(id,{age: age})
    const count= await User.countDocuments({age: age})
    return count

}


findanddelete('5dff9efbc58cf619fce1e1d5',28).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log('error!!!'+e)
})