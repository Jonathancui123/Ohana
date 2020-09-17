const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
    },
    lines: {
        type: Array,
        required: true,
        default: [],
    }
});

const Room = new mongoose.model('rooms', RoomSchema);

module.exports = Room;