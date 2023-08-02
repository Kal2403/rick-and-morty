const http = require("http");
const { getCharById } = require("./controllers/getChartById")

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes('/rickandmorty/character')) {
    const urlParts = req.url.split('/');
    const id = urlParts[urlParts.length - 1];

    getCharById(res, +id)
  }
})

server.listen(PORT, "localhost")