const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: [
    {
      type: String,
      required: true,
    },
  ],
  Profileimage: {
    type: String,
  },
  firstname: {
    type: String,
    required: true,
   
  },
  lastname: String,
  role: {
    type: String,
  },
});
userSchema.set("timestamps", true);

const User = mongoose.model("user", userSchema);

module.exports = User;
