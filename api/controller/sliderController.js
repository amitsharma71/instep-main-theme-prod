const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

const slidertable = require("../models/slider");
const { default: mongoose } = require("mongoose");
const fs = require("fs");

const slidercreate = expressAsyncHandler(async (req, res) => {
  try {
    const sildername = JSON.parse(req.body.sildername);
    // console.log(sildername, "sildername");

    // const imagesFilenames = req.files["sliderimg"].map((file) => file.filename);
    const findSliderData = await slidertable.findById({
      _id: new mongoose.Types.ObjectId(sildername._id),
    });
    console.log(findSliderData, "findSliderData");
    let imagesFilenames;

    if (req.files && req.files.sliderimg) {
      // console.log(req.files.sliderimg, "req.files.sliderimg");

      if (findSliderData && findSliderData.images) {
        // Delete the existing categoryimg image
        fs.unlink(`./slider/${findSliderData.images}`, (err) => {
          if (err) {
            console.error(`Error deleting ${findSliderData.images}:`, err);
          } else {
            console.log(`${findSliderData.images} deleted successfully`);
          }
        });
      }
      imagesFilenames = req.files.sliderimg[0].filename;
    }
    // console.log("Images  Filenames:", imagesFilenames);
    // const sildername = JSON.parse(req.body.sildername);
    // console.log(sildername, "sildername");

    if (sildername._id) {
      console.log("update data");
      subCategory = await slidertable.findByIdAndUpdate(
        { _id: sildername._id },
        {
          images: imagesFilenames,
          name: sildername.name,
          url: sildername.url,
        }
      );
      res.status(200).send({
        success: true,
        msg: "Slider Details Update",
      });
    } else {
      const sliderphotos = new slidertable({
        images: imagesFilenames,
        name: sildername.name,
        url: sildername.url,
      });
      await sliderphotos.save();
      res.status(200).send("Success: slider images uploaded." + sliderphotos);
    }
  } catch (error) {
    console.error(error,"errrrrrrrrrrrrrrr");
    res.status(500).send({ error: error.message });
  }
});

const deleteSlider = async (req, res) => {
  try {
    console.log(req.body._id, "aaaaaaaaaaaaaaaaaa");
    const deletedSlider = await slidertable.findByIdAndDelete({
      _id: req.body._id,
    });
    if (deletedSlider) {
      res.status(200).json({ success: true, msg: "Deleted data" });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  slidercreate,
  deleteSlider,
};
