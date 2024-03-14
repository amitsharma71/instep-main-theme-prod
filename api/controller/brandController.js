const Userproducts = require("../models/ProductsSchema");
const brandtable = require("../models/brandSchema");
const brands = require("../models/brandSchema");

const create_brand = async (req, res) => {
  try {
    const filter = {
      category_id: req.body.category_id,
      subcategory_id: req.body.subcategory_id,
      typesubcategory_id: req.body.typesubcategory_id,
    };

    if (req.body.typesubcategory_id) {
      filter.type_subcategory_id = req.body.typesubcategory_id;
      filter.brand = req.body.brand;
    } else if (req.body.brand) {
      filter.brand = req.body.brand;
    } else {
      console.log("nothing");
    }

    // console.log(req.body.typesubcategory_id, req.body.brand, "dddddddddddd");
    // Check if a brand with the same subcategory_id already exists.
    const existingBrand = await brands.findOne({ brand: req.body.brand });
    // console.log(existingBrand, "exist")

    if (existingBrand && existingBrand._id !== req.body._id) {
      res.status(200).send({
        success: false,
        msg: "Brand with the same subcategory already exists",
        data: existingBrand,
      });
    } else {
      // If no brand with the same subcategory_id is found, create a new brand.
      if (req.body._id) {
        console.log("update data");
        subCategory = await brands.findByIdAndUpdate(
          { _id: req.body._id },
          {
            brand: req.body.brand,
          }
        );
        res.status(200).send({
          success: true,
          msg: "Brand Details Update",
        });
      } else {
        const newBrand = new brands(filter);
        const brand_cat_data = await newBrand.save();
        res.status(200).send({
          success: true,
          msg: "Brand details created",
          data: brand_cat_data,
        });
      }
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const brandgetdata = async (req, res) => {
  try {
    const page = parseInt(req.body.page); // Default to page 1
    const perPage = parseInt(req.body.perPage); // Default to 10 items per page
    const skip = (page - 1) * perPage;

    const query = brands.find({
      $or: [{ brand: { $regex: req.body.search, $options: "i" } }],
    });
    const totalDocs = await brands.countDocuments(); // Count total documents

    if (page && perPage) {
      const getdata = await query.skip(skip).limit(perPage).exec();

      if (getdata.length > 0) {
        res
          .status(200)
          .send({ success: true, data: getdata, totalDocs: totalDocs });
      } else {
        res.status(200).send({
          success: false,
          msg: "No brands found for this page",
          totalDocs: totalDocs,
        });
      }
    } else {
      const getdata = await query.exec();

      if (getdata.length > 0) {
        res
          .status(200)
          .send({ success: true, data: getdata, totalDocs: totalDocs });
      } else {
        res.status(200).send({
          success: false,
          msg: "No brands found",
          totalDocs: totalDocs,
        });
      }
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const deletebrand = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res
        .status(400)
        .json({ error: "Invalid request, provide _id for brand deletion" });
    }

    // Assuming Userproducts and brands are properly defined or imported
    await Userproducts.deleteMany({ brand: _id });
    const deletedBrand = await brands.findByIdAndDelete(_id);

    if (!deletedBrand) {
      return res
        .status(404)
        .json({ error: "Brand not found", data: deletedBrand });
    }

    res
      .status(200)
      .json({ success: true, msg: "Deleted brand and related user products" });
  } catch (error) {
    // Handle specific errors here, e.g., validation error or database error
    res.status(500).json({ error: error.message });
  }
};

const filtertypesubbrand = async (req, res) => {
  try {

    const filter = await brandtable.find({
      typesubcategory_id: req.body.typesubcategory_id,
    });

    // res.status(200).send({ success: true, data: filter });
    res.status(200).send(filter);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  create_brand,
  brandgetdata,
  deletebrand,
  filtertypesubbrand,
};
