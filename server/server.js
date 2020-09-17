if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const hash = require("./hash.js");

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = (
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URI
    : "mongodb://localhost:27017/ohana"
)

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.listen(PORT, () => console.log(`Ohana server listening on port ${PORT}`));

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Error connecting to database: ${err}`))

app.get("/", (req, res) => {
  res.status(200);
  res.send("Ohana means family")
});

app.get("/newHash", (req, res) => {
  let newHash = hash.hash58();
  res.send(newHash);
});
