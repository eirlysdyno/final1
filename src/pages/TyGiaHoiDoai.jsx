import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "/src/assets/images/logo-mbv.png"
import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import Logo_tygia from "../assets/images/logo-tygia.png"

function convertToBankRates(rates) {
  if (!rates || !rates.VND) return null

  const usdToVND = rates.VND

  const base = {
    USD: usdToVND,
    EUR: usdToVND / rates.EUR,
    JPY: usdToVND / rates.JPY,
    GBP: usdToVND / rates.GBP,
    SGD: usdToVND / rates.SGD,
    AUD: usdToVND / rates.AUD,
    CAD: usdToVND / rates.CAD,
    KRW: usdToVND / rates.KRW
  }

  const result = {}
  Object.entries(base).forEach(([code, value]) => {
    result[code] = {
      cashBuy: value * 0.995,
      transferBuy: value,
      sellCash: value * 1.01,
      sellTransfer: value * 1.015
    }
  })

  return result
}

export function TyGiaHoiDoai() {
  const [rates, setRates] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?base=USD", {
      headers: {
        apikey: import.meta.env.VITE_APILAYER_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        const converted = convertToBankRates(data?.rates)
        setRates(converted)
        setLoading(false)
      })
      .catch(() => {
        setRates(null)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Đang tải dữ liệu tỷ giá...
      </div>
    )
  }

  if (!rates) {
    return (
      <div className="p-8 text-center text-red-500">
        Không thể tải dữ liệu tỷ giá
      </div>
    )
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
                          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
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
                              <span className="text-black font-semibold">Tỷ giá hối đoái</span>
                            </div>
                            </div>
                  </header>
    <div className="bg-[#fde1dc] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <img src={Logo_tygia} className="h-16" />
          <h1 className="text-2xl font-bold uppercase">
            Tỷ giá hối đoái
          </h1>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th rowSpan={2} className="p-4 text-left">Loại tiền</th>
                <th colSpan={2} className="p-4">Mua</th>
                <th colSpan={2} className="p-4">Bán</th>
              </tr>
              <tr className="border-b text-gray-500">
                <th className="p-3">Tiền mặt</th>
                <th className="p-3">Chuyển khoản</th>
                <th className="p-3">Tiền mặt</th>
                <th className="p-3">Chuyển khoản</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(rates).map(([code, v], i) => (
                <tr key={code} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="p-4 font-medium">{code}</td>
                  <td className="p-4 text-right">
                    {Math.round(v.cashBuy).toLocaleString()}
                  </td>
                  <td className="p-4 text-right">
                    {Math.round(v.transferBuy).toLocaleString()}
                  </td>
                  <td className="p-4 text-right">
                    {Math.round(v.sellCash).toLocaleString()}
                  </td>
                  <td className="p-4 text-right">
                    {Math.round(v.sellTransfer).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-4 py-2 text-xs text-gray-500 bg-gray-50 border-t">
            Tỷ giá mang tính tham khảo, có thể thay đổi theo thời điểm giao dịch
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </PageWrapper>
  )
}
