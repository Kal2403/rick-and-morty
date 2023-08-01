const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes('/rickandmorty/character')) {
    const id = req.url.split('/').pop();

    const data = require('./utils/data');

    const character = data.find((character) => character.id === parseInt(id));

    if(character) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(character));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({error: 'Personaje no encontrado'}))
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({error: 'Ruta no valida'}))
  }

})

server.listen(PORT, "localhost", () => {
  console.log(`Server listening in port ${PORT}`);
})