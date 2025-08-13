import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

console.log("OpenAI API Key:", process.env.HEY_KEY);
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
