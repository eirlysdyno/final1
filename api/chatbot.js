import fs from "fs"
import path from "path"
import { GoogleGenerativeAI } from "@google/generative-ai"

let knowledge = []

// Load knowledge an toàn cho serverless
try {
  const knowledgePath = path.join(process.cwd(), "data", "knowledge.json")
  if (fs.existsSync(knowledgePath)) {
    knowledge = JSON.parse(fs.readFileSync(knowledgePath, "utf-8"))
  }
} catch (err) {
  console.error("❌ Failed to load knowledge.json:", err)
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
      console.error("❌ Missing GEMINI_API_KEY")
      return res.status(500).json({
        reply: "Hệ thống chưa cấu hình API key"
      })
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    const context = knowledge.length
      ? knowledge.map(k => k.content).join("\n")
      : "Dữ liệu ngân hàng MBV"

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    })

    const result = await model.generateContent(
      `Bạn là chatbot ngân hàng MBV.
Dựa trên dữ liệu sau để trả lời:

${context}

Câu hỏi: ${message}`
    )

    return res.status(200).json({
      reply: result.response.text()
    })

  } catch (err) {
    console.error("❌ Chatbot error:", err)

    if (err.message?.includes("429")) {
      return res.json({
        reply: "Hiện hệ thống đang quá tải. Vui lòng thử lại sau khoảng 1 phút."
      })
    }

    return res.status(500).json({
      reply: "Hệ thống chatbot tạm thời gặp sự cố."
    })
  }
}
