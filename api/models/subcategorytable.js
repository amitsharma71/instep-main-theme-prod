const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
});
subcategorySchema.set("subcategorySchema", true)
const subcategorytable = mongoose.model("subcategorytable", subcategorySchema)

module.exports = subcategorytable;