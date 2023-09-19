
const express = require("express");
const router = express.Router();

const CategoryControlermain = require("../controller/CategoryControler");

router.post("/addcategory",CategoryControlermain.adddCategory );
router.post("/getcategory",CategoryControlermain.filtercategory );
router.get("/getOnlycategory",CategoryControlermain.getcategorydata );



module.exports = router;
