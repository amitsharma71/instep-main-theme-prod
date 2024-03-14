const express = require("express");
const router = express.Router();
const Razercontrole = require("../controller/rajorPayment");

router.post("/order", Razercontrole.razorpayorders);
router.post("/capture", Razercontrole.captures);
router.post("/addCardDelete", Razercontrole.addCardDelete);


module.exports = router;
