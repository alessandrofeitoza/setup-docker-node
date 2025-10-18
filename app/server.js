import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor Node.js rodando através do Nginx!");
});

app.listen(3000, () => {
  console.log("Servidor Node rodando na porta 3000");
});

