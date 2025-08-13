// index.js
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { getChatCompletion } from "./chatgpt.service.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Health check
app.get("/", (req, res) => {
  res.send("✅ ChatGPT API is running!");
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await getChatCompletion(message);

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
