import mongoose from "mongoose";
import playerSchema from "./playerModel";

const battlelogModel = new mongoose.Schema({
    opponent: [playerSchema],
    team: [playerSchema],
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