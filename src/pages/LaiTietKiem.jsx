import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "/src/assets/images/logo-mbv.png"
import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"

const formatVND = (value) =>
        value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : ""

export function LaiTietKiem() {
  const [amount, setAmount] = useState(null)
  const [rate, setRate] = useState(null)
  const [months, setMonths] = useState(null)
  const [result, setResult] = useState(null)

  const calculate = () => {
    const interest = amount * rate * (months / 12)
    setResult({
      interest: Math.round(interest),
      total: Math.round(amount + interest),
    })
  }

  return (
    <PageWrapper bg="bg-[#f1e8e0]">
              {/* ===== NAVBAR FIXED ===== */}
              <div className="fixed top-0 left-0 w-full z-50 bg-white">
                <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo MBV" className="h-10 w-auto" />
                    <span className="font-mont font-bold text-[12px] text-gray-600 uppercase">
                      CÔNG CỤ TIỆN ÍCH
                    </span>
                  </div>
        
                  {/* Menu */}
                  <nav className="flex items-center gap-6 font-mont text-[14px] text-gray-800">
                    <Link to="/cong-cu-tien-ich/cong-cu-tinh-lai-vay" className="hover:text-red-600">
                      Công cụ tính lãi vay
                    </Link>
        
                    <Link to="/cong-cu-tien-ich/cong-cu-tinh-lai-suat-tiet-kiem" className="relative font-semibold">
                      Công cụ tính lãi suất tiết kiệm
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
                    </Link>
        
                    <Link to="/cong-cu-tien-ich/ty-gia-hoi-doai" className="hover:text-red-600">
                      Tỷ giá hối đoái
                    </Link>
        
                    <Link
                      to="/"
                      className="ml-4 bg-black text-white px-5 py-2 rounded-full hover:bg-black transition"
                    >
                      Tải App MBV
                    </Link>
                  </nav>
                </div>
              </div>
    
              {/* Spacer cho navbar fixed */}
                    <div className="h-[70px]" />
              
                    {/* ===== HEADER (BACKGROUND IMAGE) ===== */}
                    <header
                    >
                      {/* ===== HEADER CONTENT ===== */}
                      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[80px]">
                        {/* Breadcrumb */}
                        <div className="text-sm mb-[40px] font-mont">
                          <span className="text-gray-500">Trang chủ &gt; </span>
                          <span className="text-gray-500">Công cụ tiện ích &gt; </span>
                          <span className="text-black font-semibold">Công cụ tính lãi suất tiết kiệm</span>
                        </div>
                        </div>
              </header>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Công cụ tính lãi suất tiết kiệm</h2>

        <label>Số tiền gửi</label>
        <input
        type="text"
        value={formatVND(amount)}
        onChange={(e) => {
            const raw = e.target.value.replace(/\./g, "")
            setAmount(raw ? Number(raw) : 0)
        }}
        className="w-full border rounded-lg p-2 mb-3"
        />

        <label>Lãi suất (% / năm)</label>
        <input
          type="number"
          value={rate * 100}
          onChange={(e) => setRate(+e.target.value / 100)}
          className="w-full border rounded-lg p-2 mb-3"
        />

        <label>Kỳ hạn (tháng)</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(+e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
        />

        <button
          onClick={calculate}
          className="w-full bg-red-600 text-white py-2 rounded-lg"
        >
          Tính lãi gửi tiết kiệm
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow flex flex-col justify-center">
        {result && (
          <>
            <p className="text-center">Tiền lãi nhận được cuối kỳ</p>
            <p className="text-center text-2xl text-red-600 font-bold">
              {result.interest.toLocaleString()} VND
            </p>
            <p className="text-center mt-4">Tổng tiền nhận được</p>
            <p className="text-center text-2xl text-red-600 font-bold">
              {result.total.toLocaleString()} VND
            </p>
          </>
        )}
      </div>
    </div>
    <Footer/>
    </PageWrapper>
  )
}