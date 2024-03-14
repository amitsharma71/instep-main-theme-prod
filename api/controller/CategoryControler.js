const { response } = require("express");
const modelcategory = require("../models/categorytable");
const brandtable = require("../models/brandSchema");
const Userproducts = require("../models/ProductsSchema");
const subcategorytable = require("../models/subcategorytable");
const categorytable = require("../models/categorytable");
const typeofsubcategorytable = require("../models/typesubcarte");

const fs = require("fs");


// console.log(categorytable,"categorytable")

// const adddCategory = async (req, res) => {
//   console.log(req.body.userData, "data");

//   try {
//     const userData = JSON.parse(req.body.userData);

//     // const imagesFilenames = req.files["images"].map((file) => file.filename);
//     // console.log(req.files.images[0].filename, "req.files");

//     const imagesFilenames = req.files.images[0].filename;

//     const category_data = await modelcategory.find();
//     if (category_data.length > 0) {
//       let checking = false;
//       for (let i = 0; i < category_data.length; i++) {
//         if (
//           category_data[i]["category"].toLowerCase() ===
//           userData?.category.toLowerCase()
//         ) {
//           checking = true;
//           break;
//         }
//       }

//       if (checking == false) {
//         const savecategory = new modelcategory({
//           category: userData?.category,
//           images: imagesFilenames,
//         });
//         const cat_data = await savecategory.save();
//         res
//           .status(200)
//           .send({ success: true, msg: "category data", data: cat_data });
//       } else {
//         res.status(200).send({
//           success: true,
//           msg: "this category (" + userData?.category + ") is already exist.",
//         });
//       }
//     } else {
//       const savecategory = new modelcategory({
//         category: userData?.category,
//         images: imagesFilenames,
//       });
//       const cat_data = await savecategory.save();
//       res
//         .status(200)
//         .send({ success: true, msg: "category data", data: cat_data });
//     }
//   } catch (error) {
//     res.status(400).send({ succes: false, msg: error.message });
//   }
// };

const getcategorydata = async (req, res) => {
  try {
    const page = parseInt(req.body.page); // Default to page 1
    const perPage = parseInt(req.body.perPage); // Default to 10 items per page
    const skip = (page - 1) * perPage;

    const totalDocs = await modelcategory.countDocuments(); // Count total documents

    if (perPage && page) {
      const query = modelcategory.find({
        $or: [{ category: { $regex: req.body.search, $options: "i" } }],
      });
      const getdata = await query.skip(skip).limit(perPage).exec();

      if (getdata.length > 0) {
        res.send({ data: getdata, totalDocs: totalDocs });
      } else {
        res.send({ result: "No categories found", totalDocs: totalDocs });
      }
    } else {
      let query;

      if (req.body.search) {
        query = modelcategory.find({
          $or: [{ category: { $regex: req.body.search, $options: "i" } }],
        });
      } else {
        query = modelcategory.find();
      }

      const getdata = await query.exec();

      if (getdata.length > 0) {
        res.send({ data: getdata, totalDocs: totalDocs });
      } else {
        res.send({ result: "No categories found", totalDocs: totalDocs });
      }
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//  api for filter subvcategory
const getcategoryfind = async (req, res) => {
  if (!req.body.category_id) {
    const categories = await modelcategory.find();
    if (categories.length > 0) {
      res.send(categories);
    } else {
      res.send({ result: "No categories found" });
    }
  } else if (req.body.category_id) {
    try {
      const getdata = await subcategorytable.find({
        category_id: req.body.category_id,
      });
      if (getdata.length > 0) {
        res.send(getdata);
      } else {
        res.send({ result: "no category  found" });
      }
    } catch (error) {
      res.status(400).send({ succes: false, msg: error.message });
    }
  }
};

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
      const filter = await subcategorytable.find({
        category_id: category_id,
      });
      console.log(filter, "filter");
      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no category_id found" });
      }
    } else if (subcategory_id) {
      // console.log(subcategory_id, "ggggggg");
      let data = [];
      const filter = await typeofsubcategorytable.find({
        subcategory_id: subcategory_id,
      });
      if (filter?.length == 0) {
        data = filter;
      } else {
        const filter = await brandtable.find({
          subcategory_id: subcategory_id,
        });

        data = [filter];
      }
      console.log(filter, "filter");
      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no subcategory id found" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching categories" });
  }
};

// api of delete category and subcategory ,brand , products
const categoryfull = async (req, res) => {
  try {
    if (req.body && req.body.categoryid) {
      const categoryId = req.body.categoryid;

      await brandtable.deleteMany({ category_id: categoryId });
      await typeofsubcategorytable.deleteMany({ category_id: categoryId });

      await subcategorytable.deleteMany({ category_id: categoryId });
      await Userproducts.deleteMany({ category: categoryId });

      const productDlt = await categorytable.findByIdAndDelete({
        _id: categoryId,
      });

      res.status(200).send({ result: productDlt, success: true });
    } else {
      res.status(400).send({ error: "Invalid request" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "An error occurred while deleting categories and associated items",
    });
  }
};

const adddCategory = async (req, res) => {
  try {
    const userData = JSON.parse(req.body.userData);
    console.log(userData, "userData");

    // const imagesFilenames = req.files["images"].map((file) => file.filename);
    // console.log(req.files.images[0].filename, "req.files");

    const findCategoryData = await modelcategory.findOne({
      category: userData.category,
    });

    // console.log(findCategoryData.images,"findCategoryData.images")

    let imagesFilenames;
    if (req.files && req.files.images) {
      if (findCategoryData && findCategoryData.images) {
        // Delete the existing categoryimg image
        fs.unlink(`./categoryimg/${findCategoryData.images}`, (err) => {
          if (err) {
            console.error(`Error deleting ${findCategoryData.images}:`, err);
          } else {
            console.log(`${findCategoryData.images} deleted successfully`);
          }
        });
      }
      imagesFilenames = req.files.images[0].filename;
    }

    let createData;

    if (findCategoryData && findCategoryData._id.toString() !== userData._id) {
      console.log("iffffffffff");
      res.status(200).send({ success: true, msg: "duplicate Value" });
    } else if (userData._id) {
      console.log("elseIffffffffffffffffffff");
      createData = await modelcategory.findByIdAndUpdate(
        { _id: userData._id },
        {
          category: userData?.category,
          images: imagesFilenames,
        }
      );
    } else {
      console.log("aaaaaaaaaaaaaaaa");
      createData = await modelcategory.create({
        category: userData?.category,
        images: imagesFilenames,
      });
    }

    if (createData) {
      const cat_data = await modelcategory.findOne({
        _id: createData._id,
      });
      res
        .status(200)
        .send({ success: true, msg: "category data", data: cat_data });
    }
  } catch (error) {
    console.log(error, "errorrrrrrrrrrrrrrrrr");
    res.status(400).send({ succes: false, msg: error.message });
  }
};

module.exports = {
  adddCategory,
  filtercategory,
  getcategorydata,
  categoryfull,
  getcategoryfind,
};
