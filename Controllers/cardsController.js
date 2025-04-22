const dotenv = require("dotenv");
const client = require("../db");
const axios = require("axios");

dotenv.config();

const TOKEN = process.env.TOKEN;
const API = process.env.API;

async function getCards(req, res) {
    try {
        await client.connect();
        const db = client.db("clash-royale-project");
        const collection = db.collection("cards");

        const cardsData = await collection.find().toArray();
        res.status(200).json({cards: cardsData});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    getCards
};