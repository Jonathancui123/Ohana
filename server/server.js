const express = require('express')
const cors = require('cors')
const hash = require('./hash.js')
const app = express()

const PORT = process.env.PORT
app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log(`Todo app listening on port ${PORT}`))

const MongoClient = require('mongodb').MongoClient;

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
let db;

client.connect((err) => {
    console.log(err)
    files = client.db("todo").collection('files')
});

app.get('/', (req, res) => {
    res.status(200)
})

app.get('/:id', (req, res) => {
    files.findOne(
        { _id: req.params.id }
    ).then((document, err) => {
        if (err) { console.log(err) }
        res.json({
            data: document.data
        })
    }).catch((err) => {
        console.log(err)
    })

})

app.post('/upload', (req, res) => {
    let id = hash.hash58()
    let file = {
        _id: id,
        data: req.body.data
    }
    files.insertOne(file, (err, result) => {
        res.send({
            id: id
        })
        if (err) return console.log(err)
    })
})

