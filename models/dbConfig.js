// CONTACTS A LA BASE DE DONNES
// On importe la dépendence
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://FloleDev6942:Sbq3yueQAjI1sJLO@Custer0.vyoctbw.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error:" + err);
  }
);
