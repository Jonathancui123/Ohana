const {
    updateCanvas,
    clearCanvas,
} = require('./utils')

module.exports = io => {
    io.on('connection', socket => {
        socket.on('join', roomId => {
            socket.join(roomId)
        })

        socket.on('draw', data => {
            const { roomId, line } = data
            updateCanvas(roomId, line)
            io.to(roomId).emit('draw', data)
        })

        socket.on('clear', roomId => {
            clearCanvas(roomId)
            io.to(roomId).emit('clear')
        })
    })
}
