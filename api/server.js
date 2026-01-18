import express from "express"
import dotenv from "dotenv"
import chatbot from "./chatbot.js"

dotenv.config({ path: "./.env" }) // 👈 CHỈNH DÒNG NÀY

const app = express()
app.use(express.json())

app.post("/api/chatbot", chatbot)

app.listen(3000, () => {
  console.log("🚀 Local API running at http://localhost:3000")
})
