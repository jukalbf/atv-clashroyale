import {Router} from 'express';
import cardsController from '../Controllers/CardsController';

const router = Router();

router.get("/", cardsController.getCards);
router.post("/", cardsController.postCard);

module.exports = router;