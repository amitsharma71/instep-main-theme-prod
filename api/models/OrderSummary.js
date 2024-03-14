const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  deliveryAddress: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  productID: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered"],
    default: "pending",
  },
  quantity: {
    type: Number,
    required: true,
  },

  payment_id: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

const SchemaOrder = mongoose.model("Order", orderSchema);
module.exports = SchemaOrder;
