if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const mongoose = require("mongoose");

const hash = require("./hash.js");
const {
  createRoom,
  getCanvas,
  updateCanvas,
} = require('./utils')

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "us2",
  encrypted: true,
});

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = (
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URI
    : "mongodb://localhost:27017/ohana"
)

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Error connecting to database: ${err}`))

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
  createRoom(newHash)
  res.send(newHash);
});

app.get("/draw/:roomId", async (req, res) => {
  const { roomId } = req.params
  const lines = await getCanvas(roomId)
  res.send(lines)
})

app.post("/draw", (req, res) => {
  const { roomId, line } = req.body
  updateCanvas(roomId, line)
  pusher.trigger(roomId, "draw", req.body);
  res.json(req.body);
});

app.listen(PORT, () => console.log(`Ohana server listening on port ${PORT}`));
