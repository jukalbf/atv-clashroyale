import {Router} from "express";
import playerController from "../controllers/playerController";

const router = Router();

router.get("/", playerController.getPlayers);
router.post("/", playerController.postPlayer);

module.exports = router;