// errore not found

function notFound(req, res, next){
    res.status(404).json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

// esportiamo la funzione
module.exports = notFound;