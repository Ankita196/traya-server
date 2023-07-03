const mongoose = require('mongoose')
require('../models/order');
const User = mongoose.model("User")


const getorder = async (req, res) => {
  try {
    const { user_id } = req.query;
    const orders = await User.findOne({ user_id: user_id });

    if (!orders) {
      return res.status(404).json({ msg: "User not found", status: 404 });
    }

    res.json({ orders, status: 200 });
  } catch (e) {
    res
      .status(400)
      .json({ status: 400, msg: "something went wrong", err: e.message });
  }
};

const saveReview = async (req, res) => {

  try {
    const { user_id, starRating, review } = req.body;
    const postReview = await User.findOneAndUpdate({ user_id: user_id }, {
      star: starRating,
      review: review
    },{
      new :true
    });
    if (!postReview) {
      return res.status(400).json({ msg: "error while saving", status: 400 });
    }
    res.json({ data: postReview, status: 200 });
  } catch (error) {
    res
      .status(400)
      .json({ status: 400, msg: "something went wrong", err: e.message });
  }
}

module.exports = { getorder, saveReview };