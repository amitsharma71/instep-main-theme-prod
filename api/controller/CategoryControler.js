const { response } = require("express")
const modelcategory = require("../models/categorytable")
const SUBCATEGORY = require("../models/subcategorytable")
const brandtable = require("../models/brandSchema")

const adddCategory = async (req, res) => {
    console.log(req.body.category, "data")
    const { category } = req.body;
    try {
        const category_data = await modelcategory.find()
        if (category_data.length > 0) {
            let checking = false;
            for (let i = 0; i < category_data.length; i++) {
                if (category_data[i]['category'].toLowerCase() === req.body.category.toLowerCase()) {
                    checking = true;
                    break;
                }
            }

            if (checking == false) {
                const savecategory = new modelcategory({ category: category })
                const cat_data = await savecategory.save()
                res.status(200).send({ success: true, msg: "category data", data: cat_data })
            }
            else {
                res.status(200).send({ success: true, msg: "this category (" + req.body.category + ") is already exist." })

            }
        } else {
            const savecategory = new modelcategory({ category: category })
            const cat_data = await savecategory.save()
            res.status(200).send({ success: true, msg: "category data", data: cat_data })

        }
    } catch (error) {
        res.status(400).send({ succes: false, msg: error.message })
    }



}


const filtercategory = async (req, res) => {
    const { category_id, subcategory_id } = req.body;

    try {
        if (!category_id && !subcategory_id) {
            const categories = await modelcategory.find();
            if (categories.length > 0) {
                res.send(categories);
            } else {
                res.send({ result: "No categories found" });
            }
        } else if (category_id) {
            console.log("sssssssssssssss");
            const filter = await SUBCATEGORY.find({
                category_id: category_id,
            });
            console.log(filter, "filter");
            try {
                res.send(filter);
            } catch (error) {
                res.send({ result: "no category_id found" });
            }
        } else if (subcategory_id) {
            console.log(subcategory_id, "ggggggg")
            const filter = await brandtable.find({ subcategory_id: subcategory_id })
            console.log(filter, "filter");
            try {
                res.send(filter);
            } catch (error) {
                res.send({ result: "no subcategory id found" });
            }

        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching categories" });
    }
};


module.exports = {
    adddCategory, filtercategory
}