const mongoose = require("mongoose");

const typesubcategorySchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true,
    },
    subcategory_id: {
        type: String,
        required: true,
    },
    typesubcategory: {
        type: String,
        required: true,
    }
});
typesubcategorySchema.set("typesubcategorySchema", true)
const typeofsubcategorytable = mongoose.model("typesubcategorySchema", typesubcategorySchema)

module.exports = typeofsubcategorytable;