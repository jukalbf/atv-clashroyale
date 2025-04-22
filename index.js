const express = require("express");
const {MongoClient} = require("mongodb");
const playerRoutes = require("./Routes/playerRoute");
const cardsRoute = require("./Routes/cardsRoute");
const battlelogRoute = require("./Routes/battlelogRoute");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;

const client = new MongoClient(MONGO_URI);

app.use("/player", playerRoutes);
app.use("/battlelog", battlelogRoute);
app.use("/cards", cardsRoute);

app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})