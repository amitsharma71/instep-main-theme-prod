const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    productid:{
        type:mongoose.Schema.ObjectId,
        require:true
    },
    userid:{
        type:mongoose.Schema.ObjectId,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },

})


cartSchema.set("products",true);
const Usercart=mongoose.model("Usercart",cartSchema)
module.exports=Usercart