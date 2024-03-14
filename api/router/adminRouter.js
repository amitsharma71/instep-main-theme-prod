const express = require("express");
const router = express.Router();
const header = require("../controller/admin");
const { uploadlogo } = require("../midellwear/logosite");

router.post(
  "/headerpost",
  uploadlogo.fields([
    {
      name: "logo",
      maxCount: 1,
    },
  ]),
  header.headerpost
);

router.post("/headerget", header.Getheader);
router.post("/headerdelete", header.headerdelete);

module.exports = router;
