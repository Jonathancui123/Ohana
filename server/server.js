const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://usr:pass@cluster0-ivfom.gcp.mongodb.net/todo";
const client = new MongoClient(uri, { useNewUrlParser: true });
let db;

client.connect((err) => {
  console.log(err)
  db = client.db("todo")

  const PORT = process.env.port || 3000 // Temp port
  app.listen(PORT, () => console.log(`Todo app listening on port ${PORT}`))
  
});




/* Routes */
app.use('/', (req, res) => {
    if (req.method == 'GET') {
        console.log(req.url) 
        res.send(`${req.url}`)
    }
})

app.post('/upload', (req, res) => {
    let file = {
      id: Math.floor((Math.random()*1000)),
      data: req.body.data
    }
    db.collection('files').insertOne(file, (err, result) => {
      if (err) return console.log(err)
    })
    console.log(req)
    res.send(`Request received`)
    res.redirect('/')
})

