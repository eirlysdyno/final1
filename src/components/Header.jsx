import { Link } from "react-router-dom"
import logo from "/src/assets/images/logo-mbv.png"
import headerBg from "/src/assets/images/header-bg.jpg"

export default function Header() {
  return (
    <header
      className="relative h-screen w-full text-white overflow-hidden"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        
        <div className="text-sm mb-48 font-mont">
          <span className="text-gray-500">Trang chủ &gt; </span>
          <span className="text-black font-semibold">
            Khách hàng Cá nhân
          </span>
        </div>

        <h1 className="font-mont font-extrabold text-4xl leading-tight mb-6">
          Ngân hàng TNHH MTV <br />
          Việt Nam Hiện Đại
        </h1>

        <p className="mt-4 font-mont text-[24px] text-white">
          Sống hiện đại. Sống kết nối
        </p>

        
          <div
            className="
              mt-20
              rounded-2xl
              px-6 py-4
              flex items-center justify-between
              backdrop-blur-md
              bg-white/5
              border border-white/5
              shadow-xl
            "
          >
          
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo MBV" className="h-12 w-auto" />
            <span className="font-mont font-bold text-[11px] text-gray-500 uppercase">
              Khách hàng cá nhân
            </span>
          </div>

          <nav className="flex items-center gap-6 font-mont font-medium text-[13px] text-white-700">
            <Link to="/tin-tuc" className="hover:text-white">Tin tức - Ưu đãi</Link>
            <Link to="/chi-tieu" className="hover:text-white">Chi tiêu</Link>
            <Link to="/tiet-kiem" className="hover:text-white">Tiết kiệm</Link>
            <Link to="/vay" className="hover:text-white">Vay</Link>
            <Link to="/bao-hiem" className="hover:text-white">Bảo hiểm</Link>

            <Link
              to="/"
              className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full font-semi hover:bg-red-700 transition"
            >
              Tải App MBV
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
