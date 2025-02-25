const express = require("express");
const app = express();
const port = 3000
const postsRouter = require("./routers/posts");
const cors = require("cors")


app.use(cors({
  origin:"http://localhost:5173"
}))


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
app.get("/", (req, res) => {
  // inviamo una risposta di verifica
  res.send("server del mio blog")
});

// middleware gestione 404
app.use(notFound);

// middleware gestione error server
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});