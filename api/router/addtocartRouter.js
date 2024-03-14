const express = require("express");
const router = express.Router();

const addtocartControler= require("../controller/addtocartController");

router.post("/Add-to-cart", addtocartControler.addtocart);
router.post("/get-cart", addtocartControler.getcartdata);
router.post("/remove-from-cart", addtocartControler.removeFromCart);




module.exports = router;
