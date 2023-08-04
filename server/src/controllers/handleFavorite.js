let myFavorite = [];

const postFav = (req, res) => {
  myFavorite.push(req.body);

  return res.status(200).json(myFavorite);
}

const deleteFav = (req, res) => {
  const { id } = req.params

  const deleteChar = myFavorite.filter((character) => character.id !== id)
  myFavorite = deleteChar;

  res.status(200).json(myFavorite);
}

module.exports = {
  postFav,
  deleteFav
}
