require("dotenv").config();
const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Razorpay = require("razorpay");
const Usercart = require("../models/CartSchema");

const razorpayorders = expressAsyncHandler(async (req, res) => {
  // console.log("test", req.body);
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    // console.log(instance, "first");
    // console.log("first");

    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order)
      return res.status(400).send({ success: true, msg: "Some error occured" });

    // addCardDelete(req.body.productIDs)
    res.status(200).send({ success: true, order });
  } catch (error) {
    res.status(500).send(error);
  }
});

const addCardDelete = async (req, res) => {
  try {
    let allId = req.body.productIDs;
    allId.map(async (item) => {
      await Usercart.findOneAndDelete({
        // userid: userId,
        _id: item,
      });
    });

    return {
      success: true,
      message: "Deleted Successfully",
    };
  } catch (error) {
    res.status(500).send(error);
  }
};

const captures = expressAsyncHandler(async (req, res) => {
  try {
    // console.log(`RAZORPAY_KEY_ID: ${process.env.RAZORPAY_KEY_ID}`);
    // console.log(`RAZORPAY_SECRET: ${process.env.RAZORPAY_SECRET}`);
    console.log(req.body.paymentId);
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_SECRET}@api.razorpay.com/v1/payments/${req.body.paymentId}/capture`,
        form: {
          amount: 50 * 100, // amount == Rs 10 // Same As Order amount
          currency: "INR",
        },
      },

      async function (err, response, body) {
        console.log("Inside request callback");
        if (err) {
          console.log("ssssssssssssdsds");
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }
        console.log("Status:", response.statusCode);
        console.log("Headers:", JSON.stringify(response.headers));
        console.log("Response:", body);
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

module.exports = { razorpayorders, captures, addCardDelete };
