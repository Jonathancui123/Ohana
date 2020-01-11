const fs = require('fs')
const express = require('express')

const app = express()
const PORT = process.env.port || config.port || 3000 // Temp port

app.listen(PORT, () => console.log(`Example app listening on port ${port}`))

fs.appendFile("log.txt", "Hello! \n", (error) => {
    if (error) { console.log(error) }
});

/* Routes */
app.use('/', (req, res) => {
    if (req.method == 'GET') {
        console.log(req.url) 
        res.send(`${req.url}`)
    }
})

app.post('/upload', (req, res) => {
    console.log(req)
    res.send(`Request received`)
})

