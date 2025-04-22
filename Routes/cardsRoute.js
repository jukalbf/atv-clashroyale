const {Router} = require('express');
const cardsController = require('../Controllers/CardsController');

const router = Router();

router.get("/", cardsController.getCards);

module.exports = router;