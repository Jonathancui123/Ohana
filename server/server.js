const express = require('express')
const admin = require('firebase-admin')

const serviceAccount = require('./todo-firebase-sdk.json');
const config = require('./config.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-7bd7f.firebaseio.com"
});

const db = admin.database()

const app = express()
const PORT = process.env.port || config.port || 3000 // Temp port

app.listen(PORT, () => console.log(`Todo app listening on port ${PORT}`))

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

