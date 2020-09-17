const Room = require('./models/Room')

function createRoom(hash) {
    const newRoom = new Room({
        roomId: hash,
    })
    newRoom.save()
    return hash
}

module.exports = {
    createRoom,
}
