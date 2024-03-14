const multer = require("multer");


const IMGslider = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./slider");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const uploadForImages = multer({
    storage: IMGslider,
  });

  
module.exports = { uploadForImages };  
