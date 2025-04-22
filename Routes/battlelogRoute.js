const {Router} = require("express");
const battlelogController = require("../Controllers/battlelogController");

const router = Router();

router.get("/", battlelogController.getAllBattlelogs);
router.post("/:tag", battlelogController.postBattlelogs);

module.exports = router;