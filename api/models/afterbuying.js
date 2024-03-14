const mongoose=require("mongoose")

const afterbuySchema=new mongoose.Schema({
    productid:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
    }

})


afterbuySchema.set("afterbuySchema",true);
const afterbuying=mongoose.model("afterbuy",afterbuySchema)
module.exports=afterbuying