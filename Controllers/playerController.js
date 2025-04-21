const dotenv = require("dotenv");
const client = require("../db");
const axios = require("axios");

dotenv.config();

const TOKEN = process.env.TOKEN;
const API = process.env.API;

async function getPlayers(req, res) {
    try {
        await client.connect();
        const db = client.db("clash-royale-project");
        const collection = db.collection("players");

        const playersData = await collection.find().toArray();

        res.status(200).json({players: playersData});
    } catch (err) {
        res.status(500).json({error: err.message})
    } finally {
        await client.close();
    }
}

async function postPlayer(req, res) {
    try {
        const {tag} = req.params;

        const tagEncoded = encodeURIComponent("#" + tag);

        await client.connect();
        const db = client.db("clash-royale-project");
        const collection = db.collection("battlelogs");

        const result = await axios.get(`${API}/players/${tagEncoded}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });

        const playerInsert = await collection.insertOne(result.data);

        res.status(200).json({player: result.data});
    } catch(err) {
        res.status(500).json({error: err.message});
    } finally {
        await client.close();
    }
}

module.exports = {
    getPlayers,
    postPlayer
};