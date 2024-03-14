const User=require("../models/RegisterSchema")
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const secretkey = "secretkey";
const dotenv = require("dotenv");
// const { model } = require("mongoose");
dotenv.config();

const userLogin=expressAsyncHandler(async(req,res)=>{

    const { email, password } = req.body;

    const UserEmail = await User.find({ email: email });
    if (!UserEmail) {
      res.send({ loginStatus: false, err: "User Does not Exist" });
    } else if (UserEmail) {
      const LoginVeryfy =
        UserEmail[0]?.email === email && UserEmail[0]?.password === password;
      if (LoginVeryfy) {
        console.log(UserEmail[0]);
  
        const token = jwt.sign(
          {
            userEmail: UserEmail[0]?.email,
            userRole: UserEmail[0]?.role,
            username: UserEmail[0].username,
            id: UserEmail[0]._id,
          },
  
          secretkey,
          {
            expiresIn: "8h",
          }
        );
  
        res.json({ loginStatus: LoginVeryfy, token: token });
        console.log(token, "token");
      } else if (!LoginVeryfy) {
        res.send({ loginStatus: false, err: "Password Dose not match" });
      }
    }

})
module.exports={userLogin}


