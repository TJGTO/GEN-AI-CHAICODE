const express = require("express");
const bodyParser = require("body-parser");
const { SubstringTokenizer } = require("./tokenizer");

const app = express();
const tokenizer = new SubstringTokenizer();

app.use(bodyParser.json());

// POST /encode { text: "..." }
app.post("/encode", (req, res) => {
  const { text } = req.body;
  if (typeof text !== "string") {
    return res.status(400).json({ error: "Missing or invalid text" });
  }
  const ids = tokenizer.encode(text);
  res.json({ ids });
});

// POST /decode { ids: [1,2,3] }
app.post("/decode", (req, res) => {
  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.status(400).json({ error: "Missing or invalid ids" });
  }
  const text = tokenizer.decode(ids);
  res.json({ text });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tokenizer API running on port ${PORT}`);
});
