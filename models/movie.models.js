const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: [{ type: String }],
  image: { type: String },
  description: { type: String },
  creator: { type: String },
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
