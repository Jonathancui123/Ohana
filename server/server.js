if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const hash = require("./hash.js");
const app = express();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "us2",
  encrypted: true,
});

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})
app.listen(PORT, () => console.log(`Ohana server listening on port ${PORT}`));

// const MongoClient = require("mongodb").MongoClient;

// const uri = process.env.DATABASE_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// let db;

// client.connect(err => {
//     if (err !== undefined) {
//         console.log(err);
//     }
//     // TODO change database name to "CodePals"
//     files = client.db("todo").collection("files");
// });

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Ohana means family");
});

app.get("/newHash", (req, res) => {
  let newHash = hash.hash58();
  res.send(newHash);
});

app.post("/draw", (req, res) => {
  pusher.trigger("painting", "draw", req.body);
  res.json(req.body);
});

// app.get("/raw/:id", (req, res) => {
//     console.log(req.params.id);
//     files
//         .find({ _id: req.params.id })
//         .limit(1)
//         .forEach((document, err) => {
//             if (err) {
//                 console.log(err);
//             }
//             // TODO make sure document isnt empty
//             if (document) {
//                 res.send(document.data);
//             } else {
//                 res.sendStatus(301);
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// app.get("/:id", (req, res) => {
//     files
//         .find({ _id: req.params.id })
//         .limit(1)
//         .forEach((document, err) => {
//             if (err) {
//                 console.log(err);
//             }
//             // console.log(document)
//             // TODO make sure document isnt empty
//             if (document) {
//                 res.json({
//                     data: document.data
//                 });
//             } else {
//                 res.sendStatus(301);
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// app.post("/upload", (req, res) => {
//     let id = hash.hash58();
//     let file = {
//         _id: id,
//         data: req.body.data
//     };
//     files.insertOne(file, (err, result) => {
//         res.send({
//             id: id
//         });
//         if (err) return console.log(err);
//     });
// });
