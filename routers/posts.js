const express = require ("express");
const router = express.Router();
const postsController = require("../controllers/postController")

// index - lista dei post
router.get("/", postsController.index);

// show - mostra un singolo post
router.get("/:id",  postsController.show);

// create - crea nuovo post
router.post("/",  postsController.create)

// update - aggiorna un post esistente
router.put("/:id",  postsController.update)

// delete - Cancella un post
router.delete("/:id",  postsController.destroy);
  
// esportiamo il router per app js
module.exports = router;