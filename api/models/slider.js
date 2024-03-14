const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  url: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
});
sliderSchema.set("slider", true);
const slidertable = mongoose.model("slidertable", sliderSchema);
module.exports = slidertable;
