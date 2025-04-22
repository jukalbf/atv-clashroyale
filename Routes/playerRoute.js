const {Router} = require("express");
const playerController = ("../controllers/playerController");

const router = Router();

router.get("/", playerController.getPlayers);
router.post("/:tag", playerController.postPlayer);

module.exports = router;