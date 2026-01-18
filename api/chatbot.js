import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { GoogleGenerativeAI } from "@google/generative-ai"
console.log("🔥 CHATBOT VERSION 2026-01-18 v3")

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load knowledge
let knowledge = []
try {
  const knowledgePath = path.resolve(__dirname, "data", "knowledge.json")
  knowledge = JSON.parse(fs.readFileSync(knowledgePath, "utf-8"))
  console.log("✅ Knowledge loaded:", knowledge.length)
} catch (err) {
  console.error("❌ Load knowledge failed:", err.message)
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
      throw new Error("Missing GEMINI_API_KEY")
    }

    console.log("🤖 Calling Gemini AI...")

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    })

    const prompt = `
Bạn là chatbot ngân hàng MBV.
Dữ liệu:
${knowledge.map(k => k.content).join("\n")}

Câu hỏi: ${message}
`

    const result = await model.generateContent(prompt)

    console.log("✅ Gemini responded")

    return res.json({
      reply: result.response.text()
    })

  } catch (err) {
    console.error("❌ Chatbot error:", err.message)
    return res.status(500).json({
      reply: "Hệ thống chatbot tạm thời gặp sự cố."
    })
  }
}
