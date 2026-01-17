import dotenv from "dotenv"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const knowledgePath = path.join(__dirname, "data", "knowledge.json")
const knowledge = fs.existsSync(knowledgePath)
  ? JSON.parse(fs.readFileSync(knowledgePath, "utf-8"))
  : []

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  
  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (!req.body) {
  req.body = JSON.parse(await new Promise((resolve) => {
    let body = ""
    req.on("data", chunk => body += chunk)
    req.on("end", () => resolve(body))
  }))
}
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" })
  }

  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ reply: "Câu hỏi trống" })
    }

    const context = knowledge.length
      ? knowledge.map(k => k.content).join("\n")
      : "Dữ liệu ngân hàng MBV"

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
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
    console.error(err)

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