const express = require("express");
const router = express.Router();

const { userLogin } = require("../controller/loginControllers");

router.post("/login", userLogin);

module.exports = router;
