import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knowledgePath = path.join(__dirname, "data", "knowledge.json");
const knowledge = fs.existsSync(knowledgePath)
  ? JSON.parse(fs.readFileSync(knowledgePath, "utf-8"))
  : [];

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("🔑 GEMINI_API_KEY =", process.env.GEMINI_API_KEY);


app.post("/api/chat", async (req, res) => {
  try {
    console.log("📥 Body:", req.body);

    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "Câu hỏi trống" });
    }

    console.log("🔑 GEMINI:", process.env.GEMINI_API_KEY);

    const context = knowledge.length
      ? knowledge.map(k => `${k.content}`).join("\n")
      : "Dữ liệu ngân hàng MBV";

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(
      `Bạn là chatbot ngân hàng MBV.
Dựa trên dữ liệu sau để trả lời:

${context}

Câu hỏi: ${message}`
    );

    res.json({ reply: result.response.text() });

  } catch (err) {
  console.error(err);

  if (err.message?.includes("429")) {
    return res.json({
      reply: "Hiện hệ thống đang quá tải. Vui lòng thử lại sau khoảng 1 phút."
    });
  }

  res.status(500).json({
    reply: "Hệ thống chatbot tạm thời gặp sự cố."
  });
}
});

app.listen(PORT, () => {
  console.log(`🤖 Chatbot server chạy tại http://localhost:${PORT}`);
});