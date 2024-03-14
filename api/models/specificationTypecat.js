const mongoose = require("mongoose");

const specificationTypecatSchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    subcategory: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    type_subcategory_id: {
        type: mongoose.Schema.ObjectId,
        require: true,
    },
    name: [{
        type: String,
        required: true,
    }],
});

specificationTypecatSchema.set("specificationTypecatSchema", true);

const speccificationsubcatetable = mongoose.model("specificationOFtypesubcat", specificationTypecatSchema);

module.exports = speccificationsubcatetable;
