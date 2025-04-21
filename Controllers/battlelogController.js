const dotenv = require("dotenv");
const axios = require("axios");
const client = require("../db");

dotenv.config();

const API = process.env.API;
const TOKEN = process.env.TOKEN;

async function getAllBattlelogs(req, res) {
    try {
        await client.connect();
        const db = client.db("clash-royale-project");
        const collection = db.collection("battlelogs");

        const result = await collection.find().toArray();

        res.status(200).json({battlelogs: result});
    } catch (err) {
        res.status(500).send({message: err.message});
    } finally {
        await client.close();
    }
}

async function postBattlelogs(req, res) {
    const {tag} = req.params;
    const tagEncoded = encodeURIComponent("#" + tag);

    try {
        await client.connect();
        const db = client.db("clash-royale-project");
        const collection = db.collection("battlelogs");

        const result = await axios.get(`${API}/players/${tagEncoded}/battlelog`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });

        await collection.insertMany(result.data);
        res.status(200).json({battlelog: result.data});
    } catch (err) {
        res.status(500).send({message: err.message});
    } finally {
        await client.close();
    }
}

module.exports = {
    getAllBattlelogs,
    postBattlelogs,
}
