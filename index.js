// On importe le framework "Express"
const express = require("express");

// On crée une variable contenant "express"
const app = express();

// On lance le fichier "dbConfig"
require("./models/dbConfig");

// On l'appel dans l'index
const postsRoutes = require("./routes/postsController");

const bodyParser = require("body-parser");

// On importe "Mongoose"
const mongoose = require("mongoose");

// Afin que le site soit accessible depuis l'extérieur, on installe le paquet "Cors"
const cors = require("cors");

// Création d'un middleware avec "body-parser"
app.use(bodyParser.json());

// On crée un middleware
app.use(cors());

// On lui demande de surveiller quand il est sur la route "/" qu'il envois un "postsRoutes"
app.use("/posts", postsRoutes);

app.listen(5500, () => console.log("Server started: 5500"));
