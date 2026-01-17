import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import logo from "/src/assets/images/logo-chatbot.png"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Xin chào! 👋 Tôi là **Chatbot ngân hàng MBV**. Tôi có thể hỗ trợ bạn về **tiết kiệm, vay vốn và dịch vụ thanh toán**."
    }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMsg = { role: "user", content: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()

      setMessages(prev => [
        ...prev,
        { role: "bot", content: data.reply || "Xin lỗi, tôi chưa trả lời được." }
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "bot", content: "⚠️ Lỗi kết nối tới server." }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div style={styles.fab} onClick={() => setOpen(true)}>
        <img src={logo} alt="Chatbot" style={{ width: 34, height: 34 }} />
      </div>

      {open && (
        <div style={styles.wrapper}>
          <div style={styles.header}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={logo} alt="MBV" style={styles.logo} />
              <div>
                <div style={styles.title}>MBV Chatbot</div>
                <div style={styles.status}>● Online</div>
              </div>
            </div>
            <button style={styles.close} onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div style={styles.chatBox}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.message,
                  ...(msg.role === "user" ? styles.user : styles.bot)
                }}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            ))}

            {loading && (
              <div style={{ ...styles.message, ...styles.bot }}>
                ⏳ MBV đang trả lời...
              </div>
            )}
          </div>

          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Nhập câu hỏi..."
              style={styles.input}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.button}>
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  )
}


const RED = "#dc2626"

const styles = {
  fab: {
    position: "fixed",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    zIndex: 9999
  },
  wrapper: {
    position: "fixed",
    bottom: 90,
    right: 24,
    width: 360,
    height: 520,
    background: "#fff",
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    zIndex: 9999
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 14px",
    background: RED,
    color: "#fff",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14
  },
  close: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer"
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#fff",
    objectFit: "cover"
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  },
  status: {
    fontSize: 12,
    color: "#ffe4e6"
  },
  chatBox: {
    flex: 1,
    padding: 12,
    overflowY: "auto",
    background: "#f9fafb"
  },
  message: {
    maxWidth: "75%",
    padding: "10px 12px",
    borderRadius: 12,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 1.5,
    wordBreak: "break-word"
  },
  user: {
    marginLeft: "auto",
    background: RED,
    color: "#fff",
    borderBottomRightRadius: 2
  },
  bot: {
    marginRight: "auto",
    background: "#e5e7eb",
    color: "#000",
    borderBottomLeftRadius: 2
  },
  inputBox: {
    display: "flex",
    gap: 8,
    padding: 10,
    borderTop: "1px solid #ddd"
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    outline: "none"
  },
  button: {
    padding: "0 16px",
    borderRadius: 8,
    border: "none",
    background: RED,
    color: "#fff",
    cursor: "pointer"
  }
}
