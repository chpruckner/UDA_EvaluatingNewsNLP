const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
  	dotenv.config();
const port = 3000;
//const textEvaluation = {};
const app = express();

app.use(express.static("dist"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(__dirname);

// Server setup
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

// GET Route
/* app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get("/all", (req, res) => {
  res.send(textEvaluation);
}); */

// POST route
app.post('/add', async (req, res) => {
  const url = req.body.url;
  const apiKey = process.env.API_KEY;
  const inputLang = "auto"; // detects input language
  const outputLang = "en";
  const verbose = "y";
  const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=${inputLang}&ilang=${outputLang}&verbose=${verbose}&url=${url}`);

  try {
    const data = await response.json();
    res.send(data);
  } catch (err) {
      console.error(err);
  }
});
