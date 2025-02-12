// INDEX - Lista di tutti i post
const index = (req, res) => {
    res.send("Lista dei post");
  };
  
  // SHOW - Mostra un singolo post
  const show = (req, res) => {
    res.send(`Mostra il post con ID: ${req.params.id}`);
  };
  
  // CREATE - Crea un nuovo post
  const create = (req, res) => {
    res.send("Creazione di un nuovo post");
  };
  
  // UPDATE - Aggiorna un post
  const update = (req, res) => {
    res.send(`Aggiornamento del post con ID: ${req.params.id}`);
  };
  
  // DELETE - Cancella un post
  const destroy = (req, res) => {
    res.send(`Cancellazione del post con ID: ${req.params.id}`);
  };
  
  module.exports = { index, show, create, update, destroy };
  