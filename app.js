const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");

const bodyParser = require("body-parser");
// Permette di leggere JSON nelle richieste
app.use(bodyParser.json()); 

app.use(express.static("public"));

// Middleware per gestire JSON
app.use(express.json()); 
app.use("/posts", postsRouter);

app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});