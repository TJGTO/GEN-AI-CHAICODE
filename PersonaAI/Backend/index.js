// index.js
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { getChatCompletion, chatWithPersona } from "./chatgpt.service.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// Health check
app.get("/", (req, res) => {
  res.send("✅ Person AI Backend is running!");
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, personaId } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await chatWithPersona(message, personaId);

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
