const jwt = require("jsonwebtoken");
const User = require("../models/RegisterSchema");

const secretKey = "secretkey";

const verifyToken = (req, res, next) => {

  const tokenWithBearer = req.headers.authorization;

  const token = tokenWithBearer.split(" ")[1];
  console.log(token, "tokenWithBearer");
  if (!token) {
    return res.status(403).send({ message: "Token not provided" });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Failed to authenticate token", err: err });
    }
    let id = decoded.id;
    if (id) {
      try {
        const foundUser = await User.findById(id);
        if (!foundUser) {
          return res.status(404).send({ message: "User not found" });
        }
        if (foundUser) {
          foundUser.email = decoded?.email;
          foundUser.userRole = decoded?.userRole;
          foundUser.username = decoded?.username;
          next();
        } else {
        }
      } catch (error) {
        return res
          .status(500)
          .send({ message: "Error finding user by ID", error });
      }
    } else {
      return res
        .status(401)
        .send({ message: "Failed to authenticate user ID" });
    }
  });
};

module.exports = verifyToken;
