const express = require ("express");
const router = express.Router();

// index - lista dei post
router.get("/", (req, res)=> {
    res.send("lista dei post");
});

// show - mostra un singolo post
router.get("/:id", (req, res)=> {
    res.send(`Mostra il post con ID: ${req.params.id}`);
});

// create - crea nuovo post
router.post("/", (req, res) => {
    res.send("creazione nuovo post")
})

// update - aggiorna un post esistente
router.put("/:id", (req, res) =>{
    res.send (`Aggiornamento del post con ID: ${req.params.id}`);
})

// delete - Cancella un post
router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post con ID: ${req.params.id}`);
  });
  
// esportiamo il router per app js
module.exports = router