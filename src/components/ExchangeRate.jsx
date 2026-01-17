import { useEffect, useState } from "react"
import Logo_tygia from "../assets/images/logo-tygia.png"
import Logo_congcu from "../assets/images/logo-congcu.png"
import Logo_congcu1 from "../assets/images/logo-congcu1.png"
import Logo_laisuat from "../assets/images/logo-laisuat.png"
import Logo_laisuat1 from "../assets/images/logo-laisuat1.png"
import Logo_bieuphi from "../assets/images/logo-bieuphi.png"

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
    KRW: usdToVND / rates.KRW,
  }

  const result = {}
  Object.entries(base).forEach(([code, value]) => {
    result[code] = {
      cashBuy: value * 0.995,
      transferBuy: value,
      sellCash: value * 1.01,
      sellTransfer: value * 1.015,
    }
  })

  return result
}



const toolPages = [
  {
    header: {
      icon: Logo_congcu,
      title: "CÔNG CỤ – TIỆN ÍCH",
    },
    items: [
      {
        icon: Logo_congcu1,
        title: "CÔNG CỤ TÍNH LÃI VAY",
        desc: "Hỗ trợ tính khoản vay có kỳ hạn",
        link: "/cong-cu-tien-ich/cong-cu-tinh-lai-vay",
      },
      {
        icon: Logo_congcu1,
        title: "CÔNG CỤ TÍNH LÃI SUẤT TIẾT KIỆM",
        desc: "Hỗ trợ tính toán tiền gửi có kỳ hạn",
        link: "/cong-cu-tien-ich/cong-cu-tinh-lai-suat-tiet-kiem",
      },
    ],
  },

  {
    header: {
      icon: Logo_laisuat,
      title: "LÃI SUẤT",
    },
    items: [
      {
        icon: Logo_laisuat1,
        title: "BIỂU LÃI SUẤT HUY ĐỘNG TIỀN GỬI VND DÀNH CHO KHÁCH HÀNG CÁ NHÂN",
        desc: "Các lãi suất hiện hành áp dụng tại ngân hàng MBV",
        link: "https://storage.mbv.com.vn/website/2025/11/12/cc70dad8af_BIEU_1-9_BLS_VND_KHCN.pdf",
      },
      {
        icon: Logo_laisuat1,
        title: "BIỂU LÃI SUẤT HUY ĐỘNG TIỀN GỬI USD DÀNH CHO KHÁCH HÀNG CÁ NHÂN",
        desc: "Các lãi suất hiện hành áp dụng tại ngân hàng MBV",
        link: "https://storage.mbv.com.vn/website/2025/11/11/25917f9935_BIEU_10_BLS_USD_KHCN.pdf",
      },
      {
        icon: Logo_laisuat1,
        title: "BIỂU LÃI SUẤT CƠ SỞ CHO VAY VND DÀNH CHO KHÁCH HÀNG CÁ NHÂN",
        desc: "Các lãi suất cơ sở cho vay áp dụng tại ngân hàng MBV",
        link: "https://storage.mbv.com.vn/website/2025/11/14/dcb487a819_LAI_SUAT_CO_SO_CHO_VAY_OI_VOI_KHACH_HANG_CA_NHAN_17112025_1.pdf",
      },
    ],
  },

  {
    header: {
      icon: Logo_bieuphi,
      title: "BIỂU PHÍ – BIỂU MẪU – ĐIỀU KHOẢN",
    },
    items: [
      {
        icon: Logo_bieuphi,
        title: "BIỂU PHÍ THẺ TÍN DỤNG PHI VẬT LÝ MBV THÔNG QUA NỀN TẢNG MOMO",
        link: "https://storage.mbv.com.vn/website/2025/12/04/070f15cf02_BAN_UP_WEBSITE_BIEU_PHI_dich_vu_MOMO_T11.2025.pdf",
      },
      {
        icon: Logo_bieuphi,
        title: "ĐIỀU KIỆN ĐIỀU KHỎA THẺ TÍN DỤNG PHI VẬT LÝ MBV THÔNG QUA NỀN TẢNG MOMO",
        link: "https://storage.mbv.com.vn/website/2025/03/19/54cdabd0a8_012025_BAN_UP_WEBSITE_DIEU_KIEN_DIEU_KHOAN_THE_TIN_DUNG_PHI_VAT_LY_MBV_TREN_NEN_TANG_MOMO.pdf",
      },
      {
        icon: Logo_bieuphi,
        title: "BIỂU PHÍ DỊCH VỤ KHÁCH HÀNG CÁ NHÂN",
        link: "https://storage.mbv.com.vn/website/2025/08/15/8e41c5ab89_BIEU_PHI_KHCN_THONG_THUONG.pdf",
      },
      {
        icon: Logo_bieuphi,
        title: "ĐIỀU KIỆN ĐIỀU KHOẢN SỬ DỤNG DỊCH VỤ",
        link: "https://storage.mbv.com.vn/website/2025/04/04/e73d70344e_ieu_kien_ieu_khoan_KHCN_4.2025.pdf",
      },
      {
        icon: Logo_bieuphi,
        title: "BIỂU PHÍ DỊCH VỤ KHÁCH HÀNG CÁ NHÂN ƯU TIÊN",
        link: "https://storage.mbv.com.vn/website/2025/12/11/76caf8b727_Bieu_phi_dich_vu_khach_hang_ca_nhan_uu_tien_KH_Premier.pdf"
      },
    ],
  },
]

const TOTAL_PAGES = 1 + toolPages.length


export default function ExchangeRateAndTools() {
  const [rates, setRates] = useState(null)
  const [pageIndex, setPageIndex] = useState(0)

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?base=USD", {
      headers: {
        apikey: import.meta.env.VITE_APILAYER_KEY,
      },
    })
      .then(res => res.json())
      .then(data => {
        const converted = convertToBankRates(data?.rates)
        if (converted) setRates(converted)
      })
      .catch(() => setRates(null))
  }, [])

  if (!rates) {
  return (
    <div className="p-8 text-center text-gray-500">
      Không thể tải dữ liệu tỷ giá. Vui lòng thử lại sau.
    </div>
  )
}

  return (
    <div className="bg-[#fde1dc] py-12">
      <div className="relative max-w-6xl mx-auto">

        {/* NÚT TRÁI */}
        {pageIndex > 0 && (
          <button
            onClick={() => setPageIndex(pageIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#b11226] text-3xl font-bold shadow-lg hover:bg-[#b11226] hover:text-white transition z-10"
          >
            ‹
          </button>
        )}

        {pageIndex < TOTAL_PAGES - 1 && (
          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-[#b11226] text-3xl font-bold shadow-lg hover:bg-[#b11226] hover:text-white transition z-10"
          >
            ›
          </button>
        )}

        {pageIndex === 0 && (
          <div className="px-16">
            <div className="flex items-center gap-3 mb-6">
              <img src={Logo_tygia} className="h-20" />
              <h2 className="text-2xl font-bold uppercase">Tỷ giá</h2>
            </div>

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
                      <td className="p-4 text-right">{Math.round(v.cashBuy).toLocaleString()}</td>
                      <td className="p-4 text-right">{Math.round(v.transferBuy).toLocaleString()}</td>
                      <td className="p-4 text-right">{Math.round(v.sellCash).toLocaleString()}</td>
                      <td className="p-4 text-right">{Math.round(v.sellTransfer).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-2 text-xs text-gray-500 bg-gray-50 border-t">
              Tỷ giá mang tính tham khảo, có thể thay đổi theo thời điểm giao dịch.
            </div>
            </div>
          </div>
        )}

        {pageIndex > 0 && (
  <div className="px-16">
    {/* HEADER */}
    <div className="flex items-center gap-3 mb-6">
      <img
        src={toolPages[pageIndex - 1].header.icon}
        className="h-20"
        alt=""
      />
      <h2 className="text-2xl font-bold uppercase">
        {toolPages[pageIndex - 1].header.title}
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-6">
      {toolPages[pageIndex - 1].items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-2xl p-6 flex gap-4 items-center shadow hover:shadow-lg transition"
        >
          <img src={item.icon} className="w-12 h-12" />
          <div>
            <p className="font-semibold">{item.title}</p>
            {item.desc && (
              <p className="text-sm text-gray-500">{item.desc}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  </div>
)}
      </div>
    </div>
  )
}
