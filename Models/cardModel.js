const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    id: Number,
    name: String,
    rarity: String,
    level: Number,
    iconsUrl: {
        medium: String,
    }
})

module.exports = mongoose.model("Card", cardSchema);