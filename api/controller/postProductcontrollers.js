const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const Userproducts = require("../models/ProductsSchema");
const { UserState } = require("realm");
const { status } = require("express/lib/response");
const categorytable = require("../models/categorytable");
const subcategorytable = require("../models/subcategorytable");
const brandtable = require("../models/brandSchema");
const { default: mongoose } = require("mongoose");
const specification = require("../models/specificationSchema");
const SchemaOrder = require("../models/OrderSummary");
const MasterFilerTable = require("../models/MasterFilter");
const fs = require("fs");
const speccificationsubcatetable = require("../models/specificationTypecat");
dotenv.config();

const postproduct = expressAsyncHandler(async (req, res) => {
  // const userData = JSON.parse(req.body.userData);

  try {
    const userData = JSON.parse(req.body.userData);

    const imagesFilenames =
      req?.files &&
      req?.files["images"] &&
      req?.files["images"]?.map((file) => file.filename); // Array of image filenames

    const thumbnailFilename =
      req?.files && req?.files.thumbnail && req?.files?.thumbnail[0].filename;

    const discount = (userData.price * userData.discountpercentage) / 100;
    const priceAfterDiscount = userData.price - discount;

    // const taxAmount = (priceAfterDiscount * userData.tax) / 100;
    // const finalPrice = priceAfterDiscount;
    // const finalPrice = priceAfterDiscount + taxAmount;
    // console.log(finalPrice, "testetstetsstetts");

    // const productadd = new Userproducts({
    //   category: userData.category_id,
    //   description: userData.description,
    //   title: userData.title,
    //   price: userData.price,
    //   images: imagesFilenames,
    //   brand: userData.brand_id,
    //   rating: userData.rating,
    //   subcategory: userData.subcategory_id,
    //   thumbnail: thumbnailFilename,
    //   stock: userData.stock,
    //   discountpercentage: userData.discountpercentage,
    //   tax: userData.tax,
    //   totalprice: priceAfterDiscount,
    // });

    // await productadd.save();

    const productadd = await Userproducts.create({
      category: userData.category_id,
      description: userData.description,
      title: userData.title,
      price: userData.price,
      images: imagesFilenames,
      brand: userData.brand_id,
      rating: userData.rating,
      subcategory: userData.subcategory_id,
      type_subcategory_id: userData.type_subcategory_id,
      thumbnail: thumbnailFilename,
      stock: userData.stock,
      discountpercentage: userData.discountpercentage,
      tax: userData.tax,
      totalprice: priceAfterDiscount,
    });

    // Send a JSON response indicating success
    res
      .status(200)
      .json({ message: "Success: Product uploaded.", product: productadd });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// get all products
const getproduct = expressAsyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.body.page); // Default to page 1
    const perPage = parseInt(req.body.perPage); // Default to 10 items per page

    const skip = (page - 1) * perPage;

    if (page && perPage) {
      console.log("iffffffffff")
      const countQuery = [
        {
          $count: "totalCount",
        },
      ];

      const productsQuery = [
        // {
        //   $match: {
        //     title: { $regex: req.body.search, $options: 'i' } // Case-insensitive search
        //   }
        // },
        {
          $lookup: {
            from: "categorytables",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        {
          $lookup: {
            from: "subcategorytables",
            localField: "subcategory",
            foreignField: "_id",
            as: "subcategory",
          },
        },
        {
          $lookup: {
            from: "brandtables",
            localField: "brand",
            foreignField: "_id",
            as: "brand",
          },
        },
        {
          $skip: skip, // Skip items based on the page number
        },
        {
          $limit: perPage, // Limit the number of items per page
        },
      ];
      if (req.body.search) {
        console.log(req.body.id, "jsahdcjacacsabc");
        productsQuery.push({
          $match: {
            title: { $regex: req.body.search, $options: "i" }, // Case-insensitive search
          },
        });
      }

      if (req.body.id) {
        console.log(req.body.id, "tatysvcjacmavc d  ua n");
        productsQuery.push({
          $match: {
            _id: new mongoose.Types.ObjectId(req.body.id),
          },
        });
      }
      console.log(productsQuery, "productsQueryaaaaaa");

      const [countResult, productsResult] = await Promise.all([
        Userproducts.aggregate(countQuery),
        Userproducts.aggregate(productsQuery),
      ]);

      const totalCount = countResult.length > 0 ? countResult[0].totalCount : 0;

      // Log the products to inspect the results
      // console.log("Products:", JSON.stringify(productsResult, null, 2));

      if (productsResult.length > 0) {
        res.status(200).json({ products: productsResult, count: totalCount });
      } else {
        res.status(404).json({ result: "No products found" });
      }
    } else {
      console.log("elseeeeeeeeeeeeeeeee")

      let aggre = [
        {
          $lookup: {
            from: "categorytables",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        {
          $lookup: {
            from: "subcategorytables",
            localField: "subcategory",
            foreignField: "_id",
            as: "subcategory",
          },
        },
        {
          $lookup: {
            from: "brandtables",
            localField: "brand",
            foreignField: "_id",
            as: "brand",
          },
        },
      ]

      if (req.body.search) {
        aggre.push({
          $match: {
            title: { $regex: req.body.search, $options: 'i' } // Case-insensitive search
          }
        },)
      }
      const products = await Userproducts.aggregate(aggre);

      // Log the products to inspect the results
      const count = products.length; // Get the count of products

      // Log the products to inspect the results
      // console.log("Products:", JSON.stringify(products, null, 2));

      if (count > 0) {
        res.status(200).json({ products, count });
      } else {
        res.status(200).json({ result: "No products found" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching products", error });
  }
});

const updateproduct = expressAsyncHandler(async (req, res) => {
  try {
    console.log("aaaaaa", req.body);
    const userData = JSON.parse(req.body.userData);
    const product = userData.id;
    const dataproduct = await Userproducts.find({ _id: product }).exec();
    const updateFields = {};

    if (dataproduct.length > 0) {
      const updateImages =
        req.files &&
        req.files["images"] &&
        req.files["images"].map((file) => file.filename);
      // console.log(updateImages, "updateImages");

      const updateThumbnail =
        req.files && req.files.thumbnail && req.files.thumbnail[0]?.filename;
      // console.log(updateThumbnail, "updateThumbnail");
      // console.log(dataproduct[0]?.images, "dataproduct?.images")
      // console.log(dataproduct[0]?.thumbnail, "dataproduct?.thumbnail")

      const thumbnail = dataproduct[0]?.thumbnail;
      const img = dataproduct[0]?.images;

      function deleteFiles(thumbnails, text) {
        if (Array.isArray(thumbnails)) {
          console.log(thumbnails, "entered");
          thumbnails.map((e) => {
            fs.unlink(`./uploads/${e}`, (err) => {
              if (err) {
                console.error(`Error deleting ${e}: typr${text}`, err);
              } else {
                console.log(`${e}:type${text} deleted successfully...by api`);
              }
            });
          });
        } else {
          fs.unlink(`./uploads/${thumbnails}`, (err) => {
            if (err) {
              console.error(`Error deleting ${thumbnails}: typr${text}`, err);
            } else {
              console.log(
                `${thumbnails}:type${text} deleted successfully...by api`
              );
            }
          });
        }
      }
      if (updateThumbnail) {
        deleteFiles(thumbnail, "thumbnail");
        updateFields.thumbnail = updateThumbnail;
      }
      if (updateImages) {
        deleteFiles(img, "img");
        updateFields.images = updateImages;
      }
    } else {
      console.log("No product found");
    }
    updateFields.description = userData?.description;
    updateFields.title = userData?.title;
    updateFields.price = userData?.price;
    updateFields.rating = userData?.rating;
    updateFields.stock = userData?.stock;
    updateFields.discountPercentage = userData?.discountPercentage;
    updateFields.type_subcategory_id = userData?.typesubcategoryId;

    const findbyid = await Userproducts.findByIdAndUpdate(
      { _id: product },
      updateFields,
      { new: true }
    );
    console.log(findbyid, "pppppppppppppppppp");
    res.status(200).send({ data: findbyid, success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { _id } = req.body;

    const deletedProduct = await Userproducts.findByIdAndDelete(_id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    // console.log(deleteProduct, "test")
    const images = deletedProduct?.images;
    // console.log(images, "imaegs for test")
    const thumbnail = deletedProduct?.thumbnail;

    function deleteFiles(thumbnails, text) {
      if (Array.isArray(thumbnails)) {
        console.log(thumbnails, "entered");
        thumbnails.map((e) => {
          fs.unlink(`./uploads/${e}`, (err) => {
            if (err) {
              console.error(`Error deleting ${e}: typr${text}`, err);
            } else {
              console.log(`${e}:type${text} deleted successfully...by api`);
            }
          });
        });
      }
      if (thumbnails) {
        fs.unlink(`./uploads/${thumbnails}`, (err) => {
          if (err) {
            console.error(`Error deleting ${thumbnails}: typr${text}`, err);
          } else {
            console.log(
              `${thumbnails}:type${text} deleted successfully...by api`
            );
          }
        });
      } else {
        console.log("not file found");
        res.status(201).send({ msg: "some erro", success: false });
      }
    }

    if (deleteProduct) {
      deleteFiles(images, "images");
      deleteFiles(thumbnail, "thumbnail");
      // console.log("deleteProduct", "thumbnail images",thumbnail,images)
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// api category and subcategory,brand for admin filter
const getfilter = expressAsyncHandler(async (req, res) => {
  const {
    category,
    description,
    title,
    price,
    image,
    brand,
    rating,
    subcategory,
    thumbnail,
    stock,
    discountpercentage,
  } = req.body;

  if (req.body) {
    if (req.body.category) {
      const filter = await Userproducts.find({ category: category });

      console.log(filter);

      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no category products found" });
      }
    } else if (req.body.subcategory) {
      console.log("sssssssssssssss");
      const filter = await Userproducts.find({
        subcategory: req.body.subcategory,
      });

      console.log(filter, "filter");
      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no subcategory products found" });
      }
    } else if (req.body.brand) {
      const filter = await Userproducts.find({ brand: req.body.brand });
      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no brand products found" });
      }
    }
  } else {
    {
      res.send({ result: "no products found" });
    }
  }
});
// category find onlyyyyyy filter
// 25/08 category/id
const categoryfilter = expressAsyncHandler(async (req, res) => {
  try {
    const categoryId = req.params.category; // Assuming you're using "categoryid" as the parameter name
    // console.log(categoryId, "categoryId");
    // Use the Mongoose model for Userproducts
    const products = await Userproducts.aggregate([
      {
        $match: {
          category: new mongoose.Types.ObjectId(categoryId), // Convert categoryId to ObjectId
        },
      },
      {
        $lookup: {
          from: "categorytables",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "subcategorytables",
          localField: "subcategory",
          foreignField: "_id",
          as: "subcategory",
        },
      },
      {
        $lookup: {
          from: "brandtables",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
    ]);
    console.log(products, "ddd");
    if (products.length > 0) {
      // Assuming you want to return the first product found
      const product = products;
      console.log(product);
      // Extract category, subcategory, and brand
      const category = product.category;
      const subcategory = product.subcategory;
      const brand = product.brand;

      // Merge the extracted data into a single object
      const result = [...product, category, subcategory, brand];

      res.status(200).json(product);
    } else {
      res
        .status(404)
        .json({ message: "No products found for the given category ID" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message, message: "Server error" });
  }
});

// subcategory find onlyyyyyy filter
const subcategoryfilter = expressAsyncHandler(async (req, res) => {
  try {
    const subcategoryId = req.params.subcategory; // Assuming you're using "categoryid" as the parameter name
    // console.log(subcategoryId, "categoryId");
    // Use the Mongoose model for Userproducts
    const products = await Userproducts.aggregate([
      {
        $match: {
          subcategory: new mongoose.Types.ObjectId(subcategoryId), // Convert categoryId to ObjectId
        },
      },
      {
        $lookup: {
          from: "categorytables",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "subcategorytables",
          localField: "subcategory",
          foreignField: "_id",
          as: "subcategory",
        },
      },
      {
        $lookup: {
          from: "brandtables",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
    ]);
    console.log(products, "ddd");
    if (products.length > 0) {
      // Assuming you want to return the first product found
      const product = products;

      // Extract category, subcategory, and brand
      const category = product.category;
      const subcategory = product.subcategory;
      const brand = product.brand;

      // Merge the extracted data into a single object
      const result = {
        ...product,
        category,
        subcategory,
        brand,
      };

      res.status(200).json(result);
    } else {
      res
        .status(404)
        .json({ message: "No products found for the given subcategory ID" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message, message: "Server error" });
  }
});

// getSingleProduct
const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const productId = req.body._id; // Assuming the product ID is in the URL params
  console.log(productId, "product ID");

  try {
    const product = await Userproducts.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(productId) }, // Match the product by ID
      },
      {
        $lookup: {
          from: "categorytables",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "subcategorytables",
          localField: "subcategory",
          foreignField: "_id",
          as: "subcategory",
        },
      },
      {
        $lookup: {
          from: "brandtables",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
      {
        $lookup: {
          from: "spacifecations",
          localField: "spacifecations",
          foreignField: "_id",
          as: "spacifecations",
        },
      },
    ]);
    console.log(product, "product");

    if (product.length > 0) {
      // Since product is an array, return the first (and only) result
      const singleProduct = product[0];

      // Extract the category, subcategory, and brand objects from the arrays
      const category = singleProduct.category[0];
      const subcategory = singleProduct.subcategory[0];
      const brand = singleProduct.brand[0];

      // Merge the extracted data into a single object
      const result = {
        ...singleProduct,
        category,
        subcategory,
        brand,
      };

      res.status(200).json(result);
    } else {
      res.status(404).json({ result: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the product", error });
  }
});

// filter
const filterAll = expressAsyncHandler(async (req, res) => {
  try {
    const categoryId = req.query.categoryId;
    const subcategoryId = req.query.subcategoryId;
    const typesubcategory_id = req.query.typesubcategory_id;
    const brandId = req.query.brandId;
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);
    const minDiscount = parseFloat(req.query.minDiscount);

    const filter = {};

    // Validation and assignment
    if (categoryId && mongoose.Types.ObjectId.isValid(categoryId)) {
      filter.category = new mongoose.Types.ObjectId(categoryId);
    }
    console.log(filter, "categoryId");

    if (subcategoryId && mongoose.Types.ObjectId.isValid(subcategoryId)) {
      filter.subcategory = new mongoose.Types.ObjectId(subcategoryId);
    }
    if (
      typesubcategory_id &&
      mongoose.Types.ObjectId.isValid(typesubcategory_id)
    ) {
      filter.type_subcategory_id = new mongoose.Types.ObjectId(
        typesubcategory_id
      );
    }

    if (brandId && mongoose.Types.ObjectId.isValid(brandId)) {
      filter.brand = new mongoose.Types.ObjectId(brandId);
    }

    // Filtering based on price range
    if (!isNaN(minPrice) && !isNaN(maxPrice) && minPrice <= maxPrice) {
      filter.price = {
        $gte: minPrice,
        $lte: maxPrice,
      };
    }

    // Filtering based on minimum discount
    if (!isNaN(minDiscount) && minDiscount >= 0 && minDiscount <= 100) {
      filter.discountpercentage = {
        $gte: minDiscount,
      };
    }
    if (Object.keys(filter).length === 0) {
      return res.status(400).json({ message: "No filter criteria provided" });
    }

    console.log(filter, "filter");

    const products = await Userproducts.aggregate([
      { $match: filter },
      {
        $lookup: {
          from: "categorytables",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "subcategorytables",
          localField: "subcategory",
          foreignField: "_id",
          as: "subcategory",
        },
      },
      {
        $lookup: {
          from: "brandtables",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
    ]);
    console.log(products, "dfdfdfdddffd");

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res
        .status(404)
        .json({ message: "No products found for the given filters" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message, message: "Server error" });
  }
});

// spacifeaction create

const specificationpost = expressAsyncHandler(async (req, res) => {
  // console.log("test");

  if (req.body.ProductID) {
    try {
      // Destructure the values from req.body
      const {
        ProductID,
        color,
        size,
        Material,
        SizeChart,
        DesignStyle,
        KeyFeatures,
        TechnicalSpacifecation,
        DimensionsWeight,
        Display,
        BatteryPower,
        Connectivity,
        Camera,
        WarrantySupport,
        IncludedAccessories,
        Storage,
        UsageInstructions,
        PowerRequirements,
        InstallationRequirements,
        EnvironmentalImpact,
        AdditionalInformation,
        DimensionsSize,
        AssemblyInstructions,
      } = req.body;

      // Create a new instance of your Mongoose model
      const infoofproducts = new specification({
        ProductID: ProductID,
        color: color,
        size: size,
        Material: Material,
        SizeChart: SizeChart,
        DesignStyle: DesignStyle,
        KeyFeatures: KeyFeatures,
        TechnicalSpacifecation: TechnicalSpacifecation,
        DimensionsWeight: DimensionsWeight,
        Display: Display,
        BatteryPower: BatteryPower,
        Connectivity: Connectivity,
        Camera: Camera,
        WarrantySupport: WarrantySupport,
        IncludedAccessories: IncludedAccessories,
        Storage: Storage,
        UsageInstructions: UsageInstructions,
        PowerRequirements: PowerRequirements,
        InstallationRequirements: InstallationRequirements,
        EnvironmentalImpact: EnvironmentalImpact,
        AdditionalInformation: EnvironmentalImpact,
        DimensionsSize: DimensionsSize,
        AssemblyInstructions: AssemblyInstructions,
      });

      // Save the data to the database
      await infoofproducts.save();

      res
        .status(201)
        .json({ message: "Product specification saved successfully" });
    } catch (error) {
      // Handle any errors that might occur during processing.
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else {
    res.status(400).json({ message: "Invalid request. Missing ProductID." });
  }
});

// spacifeaction update

const updateProductspecificationpost = expressAsyncHandler(async (req, res) => {
  try {
    const productId = req.body.ProducttableID;
    console.log(productId, "Dddddddddddddfdfds");

    const updateFields = {
      ProductID: req.body.ProductID,
      color: req.body.color,
      size: req.body.size,
      Material: req.body.Material,
      SizeChart: req.body.SizeChart,
      DesignStyle: req.body.DesignStyle,
      KeyFeatures: req.body.KeyFeatures,
      TechnicalSpacifecation: req.body.TechnicalSpacifecation,
      DimensionsWeight: req.body.DimensionsWeight,
      Display: req.body.Display,
      BatteryPower: req.body.BatteryPower,
      Connectivity: req.body.Connectivity,
      Camera: req.body.Camera,
      WarrantySupport: req.body.WarrantySupport,
      IncludedAccessories: req.body.IncludedAccessories,
      Storage: req.body.Storage,
      UsageInstructions: req.body.UsageInstructions,
      PowerRequirements: req.body.PowerRequirements,
      InstallationRequirements: req.body.InstallationRequirements,
      EnvironmentalImpact: req.body.EnvironmentalImpact,
      AdditionalInformation: req.body.AdditionalInformation,
      DimensionsSize: req.body.DimensionsSize,
      AssemblyInstructions: req.body.AssemblyInstructions,
    };

    const product = await specification.findByIdAndUpdate(
      { _id: productId },
      updateFields,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product information updated successfully",
      updatedProduct: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

const orderSummary = expressAsyncHandler(async (req, res) => {
  try {
    console.log("test orderSummary");

    const {
      userid,
      deliveryAddress,
      productID,
      payment_id,
      amount,
      quantity,
      status,
    } = req.body;

    if (!userid || !productID) {
      return res.status(400).send({
        message: "User ID and Product ID are required",
        success: false,
      });
    }

    // Find the product by ID to update stock
    const findbyid = await Userproducts.findById(productID);

    if (!findbyid) {
      return res
        .status(404)
        .send({ message: "Product not found", success: false });
    }

    // Calculate new stock after deducting the ordered quantity
    const newStock = findbyid.stock - quantity;

    if (newStock < 0) {
      return res
        .status(400)
        .send({ message: "Insufficient stock", success: false });
    }
    const datastock = newStock == 0 ? "out of stock" : newStock;

    // Update the stock
    findbyid.stock = datastock;
    await findbyid.save();

    // Create a new order entry
    const newOrder = new SchemaOrder({
      userid,
      deliveryAddress,
      productID,
      payment_id,
      amount,
      quantity,
      status,
    });

    // Save the new order
    await newOrder.save();

    res.status(200).send({ save: newOrder, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
const updateOrderStatus = expressAsyncHandler(async (req, res) => {
  try {
    const { orderId, productID, newStatus } = req.body;

    // Validate orderId, productID, and newStatus
    if (!orderId || !productID || !newStatus) {
      return res.status(400).send({
        message: "Order ID, product ID, and new status are required",
        success: false,
      });
    }

    // Find the order by orderId
    const order = await SchemaOrder.findById(orderId);

    if (!order) {
      return res
        .status(404)
        .send({ message: "Order not found", success: false });
    }

    // Find the product within the order's products array
    const productToUpdate = order.products.find(
      (product) => product.productID.toString() === productID
    );

    if (!productToUpdate) {
      return res
        .status(404)
        .send({ message: "Product not found in the order", success: false });
    }

    // Update the status of the found product
    productToUpdate.status = newStatus;

    // Save the updated order
    await order.save();

    res.status(200).send({ updatedProduct: productToUpdate, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
const getorderSummary = expressAsyncHandler(async (req, res) => {
  try {
    const pageNo = req.body.pageNo ? req.body.pageNo : 1;
    const size = req.body.pageSize ? req.body.pageSize : 10;
    // const { userid } = req.body; // Assuming userId is passed as a parameter
    // console.log(userid, "userid");

    const ordersWithProducts = await SchemaOrder.aggregate([
      { $match: { userid: new mongoose.Types.ObjectId(req.body.userid) } },
      {
        $lookup: {
          from: "userproducts",
          localField: "productID", // Accessing the correct nested field
          foreignField: "_id",
          as: "productID",
        },
      },
      { $skip: (pageNo - 1) * size },

      {
        $sort: {
          createdAt: -1,
        },
      },
      { $limit: size },
    ]);

    const Count = await SchemaOrder.find().countDocuments({
      userid: new mongoose.Types.ObjectId(req.body.userid),
    });

    res.status(200).send({ ordersWithProducts, Count, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
// master filter
const spacifeaction = expressAsyncHandler(async (req, res) => {
  try {
    const findtable = await MasterFilerTable.find();
    console.log(findtable, "findtable");
    res.status(200).send({ data: findtable, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
const masterTablecreater = expressAsyncHandler(async (req, res) => {
  try {
    const { categoryID, types, name } = req.body; // Assuming these values come from the request body

    const newEntry = await MasterFilerTable.create({ categoryID, types, name });
    console.log(newEntry, "newEntry");

    res.status(201).send({ data: newEntry, success: true }); // Use 201 for successful creation
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});
const spacifeactionPost = expressAsyncHandler(async (req, res) => {
  try {
    const { category_id, subcategory, type_subcategory_id, name } = req.body;
    if (category_id && subcategory && type_subcategory_id && name) {
      console.log("first");
      const create = new speccificationsubcatetable({
        category_id: category_id,
        subcategory: subcategory,
        type_subcategory_id: type_subcategory_id,
        name: Array.isArray(name) ? name : [name], // Ensure name is an array
      });
      await create.save();
      res.status(200).send({ success: true, data: create });
    } else {
      res.status(400).send({
        success: false,
        msg: "Payload is missing category_id, subcategory, type_subcategory_id, or name",
      });
    }
  } catch (error) {
    res.status(500).send({ error: error.message, success: false });
  }
});
const spacifeactionget = expressAsyncHandler(async (req, res) => {
  try {
    const getdata = await speccificationsubcatetable.find();
    res.status(200).send({ data: getdata, success: true });
  } catch (error) {
    res.status(500).send({ error: error.message, success: false });
  }
});
const spacifeactiongetbyId = expressAsyncHandler(async (req, res) => {
  try {
    const { type_subcategory_id } = req.body;

    if (type_subcategory_id) {
      const datafind = await speccificationsubcatetable.find({
        type_subcategory_id: type_subcategory_id,
      });

      res.status(200).send({ data: datafind, success: true });
    } else {
      res
        .status(201)
        .send({ msg: "give  type_subcategory_id", success: false });
    }
  } catch (error) {
    res.status(500).send({ error: error, success: false });
  }
});
const specificationupdate = expressAsyncHandler(async (req, res) => {
  try {
    const { specificationID, ...name } = req.body;

    if (specificationID) {
      const find = await speccificationsubcatetable.findByIdAndUpdate(
        specificationID,
        { $set: name },
        { new: true }
      );

      if (find) {
        res.status(200).send({ success: true, data: find });
      } else {
        res
          .status(404)
          .send({ success: false, msg: "Specification not found" });
      }
    } else {
      res
        .status(400)
        .send({ msg: "Please provide specificationID", success: false });
    }
  } catch (error) {
    res.status(500).send({ error: error.message, success: false });
  }
});
const specificationdelete = expressAsyncHandler(async (req, res) => {
  try {
    const { specificationID } = req.body;

    if (specificationID) {
      const deleteby = await speccificationsubcatetable.findByIdAndDelete(
        specificationID
      );

      res.status(200).send({ msg: "deleted", success: true });
    } else {
      res.status(201).send({ msg: "give specificationID" });
    }
  } catch (error) {
    res.status(500).send({ error: error, success: false });
  }
});

module.exports = {
  postproduct,
  getproduct,
  getfilter,
  categoryfilter,
  subcategoryfilter,
  updateproduct,
  getSingleProduct,
  filterAll,
  specificationpost,
  updateProductspecificationpost,
  orderSummary,
  deleteProduct,
  spacifeaction,
  masterTablecreater,
  getorderSummary,
  spacifeactionPost,
  spacifeactionget,
  specificationupdate,
  specificationdelete,
  spacifeactiongetbyId,
  updateOrderStatus,
};
