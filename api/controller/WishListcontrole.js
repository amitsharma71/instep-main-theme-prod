const expressAsyncHandler = require("express-async-handler");
const Wishlist = require("../models/wishlist");
const { default: mongoose } = require("mongoose");

const getwishlist = expressAsyncHandler(async (req, res) => {
    try {
        const wishlist = await Wishlist.aggregate([
            {
                $match: { userId: new mongoose.Types.ObjectId(req.body.userId) },
            },
            {
                $lookup: {
                    from: "userproducts", // Assuming "userproducts" is the name of the collection
                    localField: "items",
                    foreignField: "_id",
                    as: "products", // Renaming the field to "products" after lookup
                },
            },
        ]);

        res.status(200).json({ data: wishlist, success: true });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});


const Wishlistpost = expressAsyncHandler(async (req, res) => {
    const { userId, items } = req.body;

    try {
        const wishlist = new Wishlist({ userId: userId, items: items });
        const x = await wishlist.save();
        res.status(200).send({ data: x, success: true });
    } catch (err) {


        res.status(500).json({ message: err.message });

    }
});

// Endpoint to remove an item from the wishlist

const wishListdelete = expressAsyncHandler(async (req, res) => {
    const { itemId, userId } = req.body;

    try {
        // Find the wishlist item based on the itemId
        const wishlistItem = await Wishlist.findOne({ items: itemId });

        if (!wishlistItem) {
            return res.status(404).json({ message: "Wishlist item not found" });
        }

        // Assuming userId needs to match with wishlistItem.userId
        if (userId !== wishlistItem.userId.toString()) {
            return res.status(403).json({ message: "Unauthorized access to delete item" });
        }

        // Delete the wishlist item if userId matches and item exists
        const deletedItem = await Wishlist.findOneAndDelete({ items: itemId });

        if (!deletedItem) {
            return res.status(500).json({ message: "Failed to delete item from the wishlist" });
        }

        res.json({ message: "Item deleted from the wishlist", deletedItem });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = { getwishlist, Wishlistpost, wishListdelete };
