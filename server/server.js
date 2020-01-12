const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.port || 3000 // Temp port
app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log(`Todo app listening on port ${PORT}`))

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://usr:pass@cluster0-ivfom.gcp.mongodb.net/todo";
const client = new MongoClient(uri, { useNewUrlParser: true });
let db;

client.connect((err) => {
    console.log(err)
    files = client.db("todo").collection('files')
});

/* Routes 
app.use('/', (req, res) => {
    if (req.method == 'GET') {
        console.log(req.url) 
        res.send(`${req.url}`)
    }
})
*/

app.get('/:id', (req, res) => {
    console.log(req.params.id)
    files.findOne(
        { id: parseInt(req.params.id) }
    ).then((document, err) => {
        if (err) { console.log("[-] " + err) }
        console.log("[+] " + document);
        res.json({
            data: document['data']
        })
    }).catch((err) => {
        console.log("[-] " + err)
    })

})

app.post('/upload', (req, res) => {
    console.log(req.body)
    let file = {
        id: Math.floor((Math.random() * 1000)),
        data: req.body.data
    }
    files.insertOne(file, (err, result) => {
        if (err) return console.log(err)
    })
    res.redirect('/')
})

