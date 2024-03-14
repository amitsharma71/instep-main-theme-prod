const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const { App } = require("realm");
const mongoose = require("mongoose");
const User = require("./models/RegisterSchema");
// const jwt = require("jsonwebtoken");
// const secretkey = "secretkey";
const dotenv = require("dotenv");
const multer = require("multer");
const productsjson = require("./home");
const Userproducts = require("./models/ProductsSchema");
const Usercart = require("./models/CartSchema");
const slidertable = require("./models/slider");
const afterbuying = require("./models/afterbuying");
const registerRoutes = require("./router/registerRoutes");
const loginRoutes = require("./router/loginRouters");
const postProductRouters = require("./router/Productpost");
const addnewcategory = require("./router/categoryRouter");
const addnewSubcategory = require("./router/subCategory");
const addnewbrand = require("./router/BrandRouter");
const addtocart = require("./router/addtocartRouter");
const typesubcategory = require("./router/typeSubcat");
const razorpay = require("./router/razorpay");
const address = require("./router/addressroute");
const profile = require("./router/useres/profilesRoute");
const wishList = require("./router/wishlistRouter")
const headerforuser = require("./router/adminRouter")
const sliderRoutes = require("./router/sliderRouter")

dotenv.config();

const DB =
  "mongodb+srv://noutiyalgopal:MDgopal87@cluster0.mo1orsr.mongodb.net/instepcart-backend?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection is mongoose  success`);
  })
  .catch((err) => console.log(`no connection`, err));

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use('/profile', express.static('profile'));
//register api

server.use("/api", registerRoutes);
server.use("/api", loginRoutes);
server.use("/api", postProductRouters);
server.use("/uploads", express.static("uploads"));

// http://localhost:5000/uploads/1693806012738-Capture.PNG
server.use("/categoryimg", express.static("categoryimg"));
server.use("/logo", express.static("logo"));


server.use("/api", addnewcategory);
server.use("/api", addnewSubcategory);
server.use("/api", addnewbrand);
// addto cart api
server.use("/api", addtocart);
server.use("/api", typesubcategory)
// /razerpay
server.use("/api", razorpay);
// address
server.use("/api", address);

server.use("/api", profile);
server.use("/api", wishList);
server.use("/api", headerforuser);
server.use("/api", sliderRoutes);

// http://localhost:5000/profile

////25/08
server.post("/api/Search", async (req, res) => {
  console.log(req.body, "hhhhhhhhhhhh");

  try {
    const keyword = req.body.name; // Get the search query parameter from the request body

    const searchResults = await Userproducts.find({
      // Customize this based on how you want to search (title, description, etc.)
      $or: [
        { title: { $regex: keyword, $options: "i" } }, // Case-insensitive search
        { description: { $regex: keyword, $options: "i" } },
        // { category: { $regex: keyword, $options: "i" } },
        // { brand: { $regex: keyword, $options: "i" } },
      ],
    });

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while searching." });
  }
});


//silder .push img

const IMGslider = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./slider");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadForImages = multer({
  storage: IMGslider,
});
// server.post(
//   "/api/sliderpost",
//   uploadForImages.fields([{ name: "sliderimg", maxCount: 4 }]),
//   async (req, res) => {
//     try {
//       const imagesFilenames = req.files["sliderimg"].map(
//         (file) => file.filename
//       );
//       console.log("Images  Filenames:", imagesFilenames);
//       const sildername = JSON.parse(req.body.sildername);
//       console.log(sildername, "sildername");

//       const sliderphotos = new slidertable({
//         images: imagesFilenames,
//         name: sildername.name,
//         url: sildername.url,
//       });
//       await sliderphotos.save();
//       res.status(200).send("Success: slider images uploaded." + sliderphotos);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }
// );

// get slider images
server.use("/slider", express.static("slider"));
// http://localhost:5000/uploads/1693806012738-Capture.PNG

server.post("/api/Getslider", async (req, resp) => {
  try {
    const imgslider = await slidertable.find();
    if (imgslider.length > 0) {
      resp.send(imgslider);
    } else {
      resp.send({ result: "no products found" });
    }
  } catch (error) {
    resp
      .status(500)
      .send({ error: "An error occurred while fetching products" });
  }
});

// after buying products  this api will
server.post("/api/buying", async (req, resp) => {
  const { productid, userid } = req.body;
  console.log(productid);
  try {
    if (productid) {
      const bestsell = new afterbuying({
        productid: productid,
        userid: userid,
      });

      console.log(bestsell, "bestsell");
      await bestsell.save();
      resp.status(200).send("Success: products is upload" + bestsell);
    } else {
      console.log("i need productid");
    }
  } catch (error) {
    resp
      .status(500)
      .send({ error: "An error occurred while fetching products" });
  }
});

// Top Trending Products

server.post("/api/Trending", async (req, resp) => {
  try {
    const bestproducts = await afterbuying.find();
    // find id
    const productIds = bestproducts.map((item) => item.productid);
    console.log(productIds, "productIds");

    const userProductDetails = await Userproducts.find({
      _id: { $in: productIds },
    });
    if (userProductDetails.length > 0) {
      resp.send(userProductDetails);
    } else {
      resp.send({ result: "no bestproducts found" });
    }
  } catch (error) {
    resp
      .status(500)
      .send({ error: "An error occurred while fetching products" });
  }
});

// Top Trending Products delete

server.post("/api/Trending/delete", async (req, res) => {
  const { _id } = req.body;

  try {
    // Check if the product with the given _id exists and delete it
    const deletedProduct = await afterbuying.findByIdAndDelete(_id);

    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the product" });
  }
});

// Top Trending Products

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
