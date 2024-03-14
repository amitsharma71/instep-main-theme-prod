const User = require("../models/RegisterSchema")
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

const UserRegister = expressAsyncHandler(async (req, res) => {
  const { email, password, lastname, firstname, number } = req.body;

  const role = "user";
  const data = new User({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    number: number,
    role: role,
  });

  try {
    const useremail = await User.findOne({ email: email });

    if (useremail) {
      res
        .status(200)
        .send({ success: false, msg: "this email is already exists" });
    } else {
      const dataToSave = await data.save();
      res.status(200).send({ success: true });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = { UserRegister };
