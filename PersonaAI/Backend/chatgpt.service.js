import OpenAI from "openai";
import dotenv from "dotenv";
import { transscript as hiteshtranscript } from "./hitesh.js"; // Importing the transcript for Hitesh's style
import { transscript as piyushtranscript } from "./piyujsh.js"; // Importing the transcript for Piyush's style

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.HEY_KEY,
});

export async function getChatCompletion(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content: [{ type: "text", text: "You are a helpful assistant." }],
        },
        { role: "user", content: [{ type: "text", text: message }] },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in ChatGPT Service:", error);
    throw error;
  }
}

export async function chatWithPersona(userMessage, personaId) {
  console.log("personaId", personaId);
  const transcript = personaId === "1" ? hiteshtranscript : piyushtranscript;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: [{ type: "text", text: transcript }],
      },
      { role: "user", content: [{ type: "text", text: userMessage }] },
    ],
  });

  return completion.choices[0].message.content;
}
