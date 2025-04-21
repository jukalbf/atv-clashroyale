import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    id: {Number, unique: true},
    name: String,
    rarity: String,
    level: Number,
    iconsUrl: {
        medium: String,
    }
})

export default mongoose.model("Card", cardSchema);