import { GoogleGenerativeAI } from "@google/generative-ai"
import knowledge from "./api/data/knowledge.js"

export const config = {
  runtime: "nodejs"
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" })
  }

  try {
    const { message } = req.body || {}
    if (!message) {
      return res.status(400).json({ reply: "Câu hỏi trống" })
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ reply: "Thiếu API key" })
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    const context = knowledge.map(k => k.content).join("\n")

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    })

    const result = await model.generateContent(`
Bạn là chatbot ngân hàng MBV.
Dựa trên dữ liệu sau để trả lời:

${context}

Câu hỏi: ${message}
`)

    return res.json({ reply: result.response.text() })

  } catch (err) {
    console.error("❌ Chatbot error:", err)
    return res.status(500).json({
      reply: "Hệ thống chatbot tạm thời gặp sự cố."
    })
  }
}
