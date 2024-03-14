const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true,
  },
  subcategory_id: {
    type: String,
    required: true,
  },
  type_subcategory_id: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
});
brandSchema.set("brandSchema", true);
const brandtable = mongoose.model("brandtable", brandSchema);

module.exports = brandtable;
