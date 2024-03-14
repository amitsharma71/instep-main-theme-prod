const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,

    required: true,
  },
  subcategory: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  type_subcategory_id: {
    type: mongoose.Schema.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
  },

  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  discountpercentage: {
    type: Number,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  totalprice: {
    type: String,
    require: true,
  },
  tax: {
    type: String,
    require: true,
  },
});

ProductSchema.set("productsof", true);

const Userproducts = mongoose.model("userproducts", ProductSchema);
module.exports = Userproducts;
