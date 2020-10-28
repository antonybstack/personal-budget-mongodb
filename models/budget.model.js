const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Budget = new Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  budget: {
    type: Number,
    required: "Budget is required",
  },
  color: {
    type: String,
    required: "Color is required",
  },
});

module.exports = Budget = mongoose.model("Budget", Budget);
