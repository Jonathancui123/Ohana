const Room = require('./models/Room')

function createRoom(hash) {
    const newRoom = new Room({
        roomId: hash,
    })
    newRoom.save()
    return hash
}

async function getCanvas(roomId) {
    const room = await Room.findOne({
        roomId,
    })
    return room.lines
}

async function updateCanvas(roomId, line) {
    const room = await Room.findOneAndUpdate({
        roomId
    }, {
        $push: {
            lines: line
        }
    })
    return room
}

module.exports = {
    createRoom,
    getCanvas,
    updateCanvas,
}
