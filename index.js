const http = require("http");

const hostname = "127.0.0.1";
const port = 3333;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Olá! Bem-vindo ao seu servidor Node.js!");
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});