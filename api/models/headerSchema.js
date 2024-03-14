const mongoose = require("mongoose");

const HeaderSchema = new mongoose.Schema({
    adminID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    heading1: {
        type: String
    },
    Email: {
        type: String
    },
    logo: {
        type: String
    },
    sitename: {
        type: String
    }

});
HeaderSchema.set("HeaderSchema", true);
const Headerschema = mongoose.model("Headerschema", HeaderSchema);

module.exports = Headerschema;
