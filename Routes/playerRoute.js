const {Router} = require("express");
const playerController = require("../controllers/playerController");

const router = Router();

router.get("/", playerController.getPlayers);
router.post("/:tag", playerController.postPlayer);

module.exports = router;