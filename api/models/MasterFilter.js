const mongoose = require("mongoose");

const masterTable = new mongoose.Schema({
  categoryID: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  types: {
    type: String,
    enum: [
      "waistsize",
      "inseamlength",
      "jeancolour",
      "pantfit",
      "pattern",
      "clothingpattern",
      "typejeanstyleformen",
      "womensize",
      "waistsizeofwomen",
      "colourofjeanswomen",
      "pantfitwomen",
      "typeofjeansstyleformen",
      "patternforwomen",
      "closuretypeforwomenz",
    ],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

masterTable.set("Masterfilter", true);

const MasterFilerTable = mongoose.model("masterTable", masterTable);
module.exports = MasterFilerTable;
