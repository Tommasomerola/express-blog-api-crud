const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");

// importo i middleware
const notFound = require("./middleware/notFound")
const errorsHandler = require("./middleware/errorsHandler")

const bodyParser = require("body-parser");
// Permette di leggere JSON nelle richieste
app.use(bodyParser.json()); 

app.use(express.static("public"));

// Middleware per gestire JSON
app.use(express.json()); 
app.use("/posts", postsRouter);

// middleware gestione 404
app.use(notFound);

// middleware gestione error server
app.use(errorsHandler);

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});