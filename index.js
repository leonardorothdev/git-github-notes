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

/*
Este é um servidor básico em Node.js para praticar comandos do Git.

Como executar:

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Clone o repositório (após criá-lo no GitHub) ou crie a pasta localmente.
3. Execute o seguinte comando no terminal:

  node index.js
  Acesse http://127.0.0.1:3333 ou localhost:3333 no navegador para ver a mensagem.
*/