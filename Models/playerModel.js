const mongoose = require("mongoose");
const cardSchema = require("./cardModel");

const playerSchema = new mongoose.Schema({
    name: String,
    tag: {
        type: String,
        unique: true,
    },
    trophies: Number,
    bestTrophies: Number,
    battleCount: Number,
    wins: Number,
    losses: Number,
    cards: [{type: mongoose.Schema.Types.ObjectId, ref: "Card"}],
})

module.exports = mongoose.model("Player", playerSchema);