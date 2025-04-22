const mongoose = require("mongoose");
const playerSchema = require("./playerModel");

const battlelogSchema = new mongoose.Schema({
    opponent: [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}],
    team: [{type: mongoose.Schema.types.ObjectId, ref: "Player"}],
    newTowersDestroyed: Number,
    prevTowersDestroyed: Number,
    isLadderTournament: Boolean,
    gameMode: {
        id: Number,
        name: String,
    },
    challengeWinCountBefore: Number,
    arena: {
        id: Number,
        iconUrls: {
            medium: String,
        }
    }
});

module.exports = mongoose.model("Battlelog", battlelogSchema);