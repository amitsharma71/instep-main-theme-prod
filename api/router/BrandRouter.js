const express = require("express");
const router = express.Router();

const brandController = require("../controller/brandController");

router.post("/addbrand", brandController.create_brand);
router.post("/getOnlybrand", brandController.brandgetdata);
router.post("/Deletebrand", brandController.deletebrand);
router.post("/filtertypebrand", brandController.filtertypesubbrand);

module.exports = router;
