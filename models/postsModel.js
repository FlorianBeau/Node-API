// On importe "Mongoose"
const mongoose = require("mongoose");

// On crée un modèle de base de données
const PostsModel = mongoose.model(
  "test",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);

// On exporte le modèle
module.exports = { PostsModel };
