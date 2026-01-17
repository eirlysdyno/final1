import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "/src/assets/images/logo-mbv.png"
import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"

const formatVND = (value) =>
        value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : ""

export function LaiVay() {
  const [amount, setAmount] = useState(null)
  const [rate, setRate] = useState(null)
  const [months, setMonths] = useState(null)
  const [method, setMethod] = useState("flat")
  const [result, setResult] = useState({
    monthly: 0,
    total: 0
    })


  const calculate = () => {
    const principalPerMonth = amount / months

    if (method === "flat") {
      const interestPerMonth = (amount * rate) / 12
      const monthly = principalPerMonth + interestPerMonth
      const total = amount + amount * rate * (months / 12)

      setResult({ monthly, total })
    } else {
      let remaining = amount
      let totalInterest = 0

      for (let i = 0; i < months; i++) {
        const interest = remaining * rate / 12
        totalInterest += interest
        remaining -= principalPerMonth
      }

      const monthlyFirst = principalPerMonth + (amount * rate) / 12
      const total = amount + totalInterest
      


      setResult({ monthly: monthlyFirst, total })
    }
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
                <Link to="/cong-cu-tien-ich/cong-cu-tinh-lai-vay" className="relative font-semibold">
                  Công cụ tính lãi vay
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
                </Link>
    
                <Link to="/cong-cu-tien-ich/cong-cu-tinh-lai-suat-tiet-kiem" className="hover:text-red-600">
                  Công cụ tính lãi suất tiết kiệm
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
                      <span className="text-black font-semibold">Công cụ tính lãi vay</span>
                    </div>
                    </div>
          </header>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Công cụ tính lãi vay</h2>

        <label>Số tiền vay</label>
        <input
        type="text"
        value={formatVND(amount)}
        onChange={(e) => {
            const raw = e.target.value.replace(/\./g, "")
            setAmount(raw ? Number(raw) : 0)
        }}
        className="w-full border rounded-lg p-2 mb-3"
        />


        <label>Kỳ hạn (tháng)</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(+e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        />

        <label>Lãi suất (% / năm)</label>
        <input
          type="number"
          value={rate * 100}
          onChange={(e) => setRate(+e.target.value / 100)}
          className="w-full border rounded-lg p-2 mb-3"
        />


        <div className="mb-4 space-y-2">
            <label className="flex items-center gap-2">
                <input
                type="radio"
                checked={method === "flat"}
                onChange={() => setMethod("flat")}
                />
                Trả trên dư nợ ban đầu
            </label>

            <label className="flex items-center gap-2">
                <input
                type="radio"
                checked={method === "reduce"}
                onChange={() => setMethod("reduce")}
                />
                Trả trên dư nợ giảm dần
            </label>
            </div>


        <button
          onClick={calculate}
          className="w-full bg-red-600 text-white py-2 rounded-lg"
        >
          Tính lãi vay
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow flex flex-col justify-center">
        {result && (
          <>
            <p className="text-center">Số tiền phải trả tháng đầu</p>
            <p className="text-center text-2xl text-red-600 font-bold">
              {Math.round(result.monthly).toLocaleString()} VND
            </p>
            <p className="text-center mt-4">Tổng tiền gốc và lãi</p>
            <p className="text-center text-2xl text-red-600 font-bold">
              {Math.round(result.total).toLocaleString()} VND
            </p>
          </>
        )}
      </div>
    </div>
    <Footer/>
    </PageWrapper>
  )
}
