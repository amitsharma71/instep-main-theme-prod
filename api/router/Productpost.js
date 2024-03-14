const express = require("express");
const router = express.Router();
const postproductcontroller = require("../controller/postProductcontrollers");

const { upload } = require("../midellwear/diskstroge");

router.post(
  "/products",
  upload.fields([
    { name: "images", maxCount: 4 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  postproductcontroller.postproduct
);
router.post("/Getproducts", postproductcontroller.getproduct);
router.post("/FilterProducts", postproductcontroller.getfilter);
router.get("/category/:category", postproductcontroller.categoryfilter);
router.get(
  "/subcategory/:subcategory",
  postproductcontroller.subcategoryfilter
);
router.post(
  "/updateproducts",
  upload.fields([
    { name: "images", maxCount: 4 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  postproductcontroller.updateproduct
);
router.post("/singleproduct", postproductcontroller.getSingleProduct);
router.post("/productsdlt", postproductcontroller.deleteProduct);

router.post("/filteralldata", postproductcontroller.filterAll);
// spacifeactionpost
router.post("/productinfo", postproductcontroller.specificationpost);
// update
router.post(
  "/productupdateinfo",
  postproductcontroller.updateProductspecificationpost
);
//  after   DELIVERY ADDRESS done
router.post("/orderSummary", postproductcontroller.orderSummary);
router.post("/updateorderSummary", postproductcontroller.updateOrderStatus);

router.post("/getorderSummary", postproductcontroller.getorderSummary);
router.post("/masterfilter", postproductcontroller.spacifeaction);
router.post("/createmastertable", postproductcontroller.masterTablecreater);
router.post("/specificationpost", postproductcontroller.spacifeactionPost);
router.get("/specificationget", postproductcontroller.spacifeactionget);
router.post("/specificationupdate", postproductcontroller.specificationupdate);
router.post("/specificationdelete", postproductcontroller.specificationdelete);
router.post(
  "/spacifeactiongetbyId",
  postproductcontroller.spacifeactiongetbyId
);

module.exports = router;
