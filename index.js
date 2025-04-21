const express = require("express");
const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
const playerController = require("./Controllers/playerController");
const battlelogController = require("./Controllers/battlelogController");
const cors = require("cors");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const TOKEN = process.env.TOKEN;
const API = process.env.API;

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;

const client = new MongoClient(MONGO_URI);

app.get("/player", playerController.getPlayers);
app.post("/player/:tag", playerController.postPlayer);
app.get("/player/battlelog", battlelogController.getAllBattlelogs);
app.post("/player/battlelog/:tag", battlelogController.postBattlelogs);

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})