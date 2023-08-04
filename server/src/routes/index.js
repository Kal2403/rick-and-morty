const express = require("express");
const router = express.Router();

const { getCharById } = require("../controllers/getChartById");
const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorite");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav),
router.delete("/fa/:id", deleteFav);

module.exports = router;