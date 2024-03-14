const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // userID is required
  },
  name: {
    type: String,
    required: true, // name is required
  },
  mobilenumber: {
    type: Number,
    required: true, // mobilenumber is required
  },
  pincode: {
    type: Number,
    required: true, // pincode is required
  },
  Locality: {
    type: String,
    required: true, // Locality is required
  },
  addresstype: {
    type: String,
    required: true, // addresstype is required
  },
  address: {
    type: String,
    required: true, // address is required
  },
  state: {
    type: String,
    required: true, // state is required
  },
  landmark: {
    type: String,
    required: true, // landmark is required
  },
  AlternateNumber: {
    type: Number,
    required: true, // AlternateNumber is required
  },
});

const UserAddress = mongoose.model("Address", addressSchema);

module.exports = UserAddress;
