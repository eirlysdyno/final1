import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { GoogleGenerativeAI } from "@google/generative-ai"

export const config = {
  runtime: "nodejs"
}

// detect __dirname trong ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let knowledge = []

try {
  // 👉 VERCEL
  if (process.env.VERCEL) {
    const data = await import("../api/data/knowledge.json", {
      assert: { type: "json" }
    })
    knowledge = data.default
  } 
  // 👉 LOCALHOST
  else {
    const knowledgePath = path.join(__dirname, "../api/data/knowledge.json")
    knowledge = JSON.parse(fs.readFileSync(knowledgePath, "utf-8"))
  }
} catch (err) {
  console.error("❌ Load knowledge failed:", err)
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

    const context = knowledge.length
      ? knowledge.map(k => k.content).join("\n")
      : "Dữ liệu ngân hàng MBV"

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
