const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {

  const { id } = req.params;

  axios(`${URL}${id}`)
  .then(({data}) => { 
    const {name, gender, species, origin, image, status } = data

    const character = { id, name, gender, species, origin, image, status }

    return character ? res.status(200).json(character) : res.status(404).send("No found")
  })
  .catch(error => res.status(500).send(error.message));
};

module.exports = {
  getCharById
}