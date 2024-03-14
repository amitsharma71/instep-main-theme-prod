const express = require("express");
const router = express.Router();

const CategoryControlermain = require("../controller/CategoryControler");
const { categoeyupload } = require("../midellwear/diskcategory");

router.post(
  "/addcategory",
  categoeyupload.fields([{ name: "images", maxCount: 1 }]),
  CategoryControlermain.adddCategory
);
router.post("/getcategory", CategoryControlermain.filtercategory);
router.post("/getOnlycategory", CategoryControlermain.getcategorydata);
router.post("/getcategoryfind", CategoryControlermain.getcategoryfind);
router.post("/Deletecategory", CategoryControlermain.categoryfull);

module.exports = router;
