// On importe le framework "Express"
const express = require("express");

// On appel le framework avec la méthode "Router" pour joindre l'objet router d'Express
const router = express.Router();

// On va chercher
const ObjectID = require("mongoose").Types.ObjectId;

// On va chercher notre modèle de message de Post et on dit que c'est égal à "postModel"
const { PostsModel } = require("../models/postsModel");

// On affiche le contenu de la base de données
router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
});

router.post("/", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating new data : " + err);
  });
});

// Update
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
});

// On exporte le router
module.exports = router;
