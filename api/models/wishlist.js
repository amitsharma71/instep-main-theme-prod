const mongoose = require('mongoose');

// Define the Wishlist schema
const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,

  },
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    unique: true
  }
});

// Create the Wishlist model
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
