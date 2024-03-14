const mongoose = require("mongoose");


const productsjson=[
      {
        "category": "electronics",
        "subcategory": ["Smartphone", "Laptop", "Speaker"],
        "brands": ["Apple", "Samsung", "Dell", "Sony", "Bose"]
      },
      {
        "category": "men",
        "subcategory": ["Men's Clothing",  "Footwear", "Glasses"],
        "brands": ["Nike", "Adidas", "Levi's", "Ray-Ban", "Puma"]
      },
      {
        "category": "women",
        "subcategory": ["Women's Clothing", "Footwear", "Glasses"],
        "brands": ["Zara", "Gucci", "H&M", "Prada", "Jimmy Choo"]
      },
      {
        "category": "Home & Kitchen",
        "subcategory": ["Kitchen & Dining",  "Decor"],
        "brands": ["KitchenAid", "Cuisinart", "IKEA", "H&M Home", "West Elm"]
      },
      {
        "category": "sports & More",
        "subcategory": ["Sports",  "Health & Wellness"],
        "brands": ["Nike", "Under Armour", "Reebok", "Adidas", "Fitbit"]
      },
      {
        "category": "APPLIANCES",
        "subcategories": ["Aircooler",  "Room Heaters"],
        "brands": ["Honeywell", "Dyson", "Bajaj", "Philips", "Vornado"]
      }
    ]

    // const  productsjson=mongoose.model("productsjson",productsjson)

module.exports=productsjson;