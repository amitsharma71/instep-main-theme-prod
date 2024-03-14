const express = require("express");
const router = express.Router();

const typeSubcategory = require("../controller/typesubcate");

router.post("/addtypesubcategory", typeSubcategory.create_typesubcategory);
router.post("/gettypesubcategory", typeSubcategory.get_typesubcategory);

router.post("/deletetypesubcategory", typeSubcategory.delete_typesubcat);




module.exports = router;
