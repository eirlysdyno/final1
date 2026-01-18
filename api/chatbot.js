import dotenv from "dotenv"
dotenv.config()

import { GoogleGenerativeAI } from "@google/generative-ai"

export default async function chatbot(req, res) {
  try {
    const { message } = req.body || {}
    if (!message) {
      return res.status(400).json({ reply: "Câu hỏi trống" })
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    })

    const result = await model.generateContent(message)

    res.json({
      reply: result.response.text()
    })
  } catch (err) {
    console.error("❌ REAL ERROR:", err)
    res.status(500).json({
      reply: err.message
    })
  }
}
