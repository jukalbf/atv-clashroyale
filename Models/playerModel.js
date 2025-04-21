import mongoose from "mongoose";
import cardSchema from "./cardModel";

export const playerSchema = new mongoose.Schema({
    name: String,
    tag: String,
    trophies: Number,
    bestTrophies: Number,
    battleCount: Number,
    wins: Number,
    losses: Number,
    cards: [cardSchema],
})

export default mongoose.model("Player", playerSchema);