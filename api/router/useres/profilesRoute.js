const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const proflie = require("../../controller/user/Profilecontroller");
const { profileupload } = require("../../midellwear/profile");
// const verifyToken = require("../../midellwear/auth");

// router.post(
//   "/createprofile",
//   verifyToken,
//   profileupload.fields([
//     {
//       name: "profileimg",
//       maxCount: 1,
//     },
//   ]),
//   proflie.createProfile
// );
// router.post("/createprofile", verifyToken, proflie.createProfile);
// router.post("/profileimgdelete", verifyToken, proflie.deleteimg);
// router.post("/getProfile", verifyToken, proflie.findprofile);

router.post(
  "/createprofile",

  profileupload.fields([
    {
      name: "profileimg",
      maxCount: 1,
    },
  ]),
  proflie.createProfile
);
// router.post("/createprofile", proflie.createProfile);
router.post("/profileimgdelete", proflie.deleteimg);
router.post("/getProfile", proflie.findprofile);

module.exports = router;
