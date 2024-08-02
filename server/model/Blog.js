const mongoose = require("mongoose");

/**
 * Here we create a model Schema for the application. how we want the data to be structured. the Body structure of the data.
 */

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
