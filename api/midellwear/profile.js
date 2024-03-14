
const multer = require("multer");

// Multer setup for file upload
const whitelist = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const profileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const profileupload = multer({
  storage: profileStorage,
  fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
      return cb(new Error("File type is not allowed"));
    }
    cb(null, true);
  },
});

module.exports = { profileupload };
