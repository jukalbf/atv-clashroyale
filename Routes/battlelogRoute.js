import {Router} from "express";
import battlelogController from "../Controllers/battlelogController";

const router = Router();

router.get("/", battlelogController.getBattlelog);
router.post("/", battlelogController.postBattlelog);

module.exports = router;