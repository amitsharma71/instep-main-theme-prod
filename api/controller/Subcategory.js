const brandtable = require("../models/brandSchema");
const SUBCATEGORY = require("../models/subcategorytable");
const subcategorytable = require("../models/subcategorytable");
const typeofsubcategorytable = require("../models/typesubcarte");
const Userproducts = require("../models/ProductsSchema");

const create_subcategory = async (req, res) => {
  try {
    // const check_sub = await SUBCATEGORY.find({
    //   category_id: req.body.category_id,
    // });

    req.body.subcategoryData.map(async (item) => {
      console.log(item, "first");
      let subCategory
      if (item._id) {
        console.log("update data")
        subCategory = await SUBCATEGORY.findByIdAndUpdate(
          { _id: item._id },
          {
            subcategory: item.subcategory,
          }
        )
      } else {
        console.log("create data")
        subCategory = await SUBCATEGORY.create({
          category_id: item.category_id,
          subcategory: item.subcategory,
        });
      }
      // const sub_cat_data = new SUBCATEGORY.create({
      //   category_id: item.category_id,
      //   subcategory: item.subcategory,
      // });
      // const sub_cat_data = await subcategrySave.save();
      let sub_cat_data = await SUBCATEGORY.findById({
        _id: subCategory._id,
      })
      res
        .status(200)
        .send({ sucess: true, msg: "subcategory details", data: sub_cat_data });
    });
  } catch (error) {
    res.status(400).send({ sucess: false, msg: error.message });
  }
};

const subcategorydata = async (req, res) => {
  if (req.body.category_id) {

    const data = await SUBCATEGORY.find({
      category_id: req?.body?.category_id,
    });

    res.send({ data: data, sucess: true });

  } else {
    try {
      const page = parseInt(req.body.page); // Default to page 1
      const perPage = parseInt(req.body.perPage); // Default to 10 items per page
      const skip = (page - 1) * perPage;

      const query = SUBCATEGORY.find({
        $or: [{ subcategory: { $regex: req.body.search, $options: "i" } }],

      });
      const totalDocs = await SUBCATEGORY.countDocuments(); // Count total documents

      if (perPage && page) {
        const getdata = await query.skip(skip).limit(perPage).exec();

        if (getdata.length > 0) {
          res.send({ data: getdata, totalDocs: totalDocs });
        } else {
          res.send({ result: "No SUBCATEGORY found for this page", totalDocs: totalDocs });
        }
      } else {
        const getdata = await query.exec();

        if (getdata.length > 0) {
          res.send({ data: getdata, totalDocs: totalDocs });
        } else {
          res.send({ result: "No SUBCATEGORY found for this page", totalDocs: totalDocs });
        }
      }
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
  }

};


const deletesubcategory = async (req, res) => {
  try {
    if (req.body && req.body.subcategoryid) {
      const subcategoryId = req.body.subcategoryid;
      await Userproducts.deleteMany({ subcategory: subcategoryId });
      await brandtable.deleteMany({ subcategory_id: subcategoryId });
      await typeofsubcategorytable.deleteMany({
        subcategory_id: subcategoryId,
      });

      const productDlt = await subcategorytable.findByIdAndDelete({
        _id: subcategoryId,
      });

      res.status(200).send({
        result: productDlt,
        success: true,
        msg: "subcategory dlt,typesubcategorydlt , brand dlt and products",
      });
    } else {
      res
        .status(400)
        .send({ error: "Invalid request  give subcategoryid for delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const findsubacetgory = async (req, res) => {
  console.log("test");
  try {
    const category_id = req.body.category_id;
    const data = await subcategorytable.find({ category_id: category_id });

    if (data.length > 0) {
      res.status(200).send({ data: data, sucess: true });
    }
  } catch (error) {
    res.status(500).send({ sucess: false, msg: "error" });
  }
};

//  api for filter typesubcategory
const findtypesub = async (req, res) => {
  console.log("test");
  if (req.body.subcategory_id) {
    // console.log(req.body.subcategory_id, "ggggggg");
    let data = [];
    const filtertypesucat = await typeofsubcategorytable.find({
      subcategory_id: req.body.subcategory_id,
    });
    const filterbrand = await brandtable.find({
      subcategory_id: req.body.subcategory_id,
    });
    if (filtertypesucat?.length == 0) {
      data = filterbrand;
    } else {
      data = filtertypesucat;
    }
    console.log(data, "filter");
    try {
      res.send(data);
    } catch (error) {
      res.send({ result: "no subcategory id found" });
    }
  }
};
module.exports = {
  create_subcategory,
  subcategorydata,
  deletesubcategory,
  findtypesub,
  findsubacetgory,
};
