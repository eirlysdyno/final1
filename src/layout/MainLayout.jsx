import { Outlet } from "react-router-dom"
import Chatbot from "../components/Chatbot"

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
      <Chatbot />
    </div>
  )
}
