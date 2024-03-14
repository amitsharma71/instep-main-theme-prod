const express = require("express");
const router = express.Router();
const wishlistcontroler = require("../controller/WishListcontrole");

router.post("/wishlist/get", wishlistcontroler.getwishlist);

router.post("/wishlist/add", wishlistcontroler.Wishlistpost);

router.post("/wishlist/remove", wishlistcontroler.wishListdelete);

module.exports = router;
