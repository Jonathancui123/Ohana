const express = require('express')
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://user:<password>@cluster0-ivfom.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {

  const collection = client.db("todo")

  const PORT = process.env.port || 3000 // Temp port
  app.listen(PORT, () => console.log(`Todo app listening on port ${PORT}`))
  
  // perform actions on the collection object
  client.close();
});


const app = express()

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

