const express = require("express");
const { getorder, saveReview } = require("../controller/order");

const app = express.Router();
app.get("/order", getorder);
app.post("/review", saveReview);

module.exports = app;