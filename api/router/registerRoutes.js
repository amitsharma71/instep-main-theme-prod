const express = require("express");7
const router = express.Router();

const { UserRegister } = require("../controller/registerControllers");

router.post("/register", UserRegister);


module.exports = router;
