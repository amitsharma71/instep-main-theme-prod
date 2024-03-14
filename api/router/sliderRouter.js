const express = require("express");
const router = express.Router();
const slider = require("../controller/sliderController");
const { uploadForImages } = require("../midellwear/slider");

router.post(
  "/sliderpost",
  uploadForImages.fields([{ name: "sliderimg", maxCount: 4 }]),
  slider.slidercreate
);

router.post("/deleteSlider", slider.deleteSlider);

module.exports = router;
