const posts = require("../data/posts2");


// INDEX - Lista di tutti i post
const index = (req, res) => {
    res.json(posts);
  };

  
// SHOW - Mostra un singolo post
function show(req, res) {
    // res.send('visualizza un elemento')

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // controlliamo se il parametro inserito esiste
    if(!post) {
        // ritorno lo stato di errore 404, non trovato
        res.status(404);

        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
        // Restituiamolo sotto forma di JSON   
        res.json(post);
}
  
  // CREATE - Crea un nuovo post
  const create = (req, res) => {
    res.send("Creazione di un nuovo post");
  };
  
  // UPDATE - Aggiorna un post
  const update = (req, res) => {
    res.send(`Aggiornamento del post con ID: ${req.params.id}`);
  };
  


// funzione DESTROY
function destroy(req, res) {
    // res.send('Cancella post post' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // controlliamo se il parametro inserito esiste
    if(!post) {
        // ritorno lo stato di errore 404, non trovato
        res.status(404);

        // ritorno un messaggio di errore (formato json)
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // cancello il post
    posts.splice(posts.indexOf(post), 1);

    // log di riscontro di check su aggiornamento dati
    console.log(posts); 

    // ritorno la risposta positiva di avvenuta cancellazione
    res.sendStatus(204);
}
  module.exports = { index, show, create, update, destroy };
  