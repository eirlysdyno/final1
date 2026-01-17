import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import "./News.css"

import headervay from "/src/assets/images/header-vay.jpg"
import logo from "/src/assets/images/logo-mbv.png"

import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import VayNav from "../components/VayNav"

import taitaitro from "../assets/images/taitaitro.png"

import batdongsan1 from "../assets/images/batdongsan-1.png"
import batdongsan2 from "../assets/images/batdongsan-2.png"

import sanxuat1 from "../assets/images/sanxuat-1.png"
import sanxuat2 from "../assets/images/sanxuat-2.png"

import tieudung1 from "../assets/images/tieudung-1.png"
import tieudung2 from "../assets/images/tieudung-2.png"

import muaoto1 from "../assets/images/muaoto-1.png"
import muaoto2 from "../assets/images/muaoto-2.png"


export default function Vay() {
  const [active, setActive] = useState("tai-tai-tro")

  const taitaitroRef = useRef(null)
  const batdongsanRef = useRef(null)
  const sanxuatkinhdoanhRef = useRef(null)
  const tieudungRef = useRef(null)
  const muaotoRef = useRef(null)


  const handleChange = (id) => {
    setActive(id)

    const map = {
      "tai-tai-tro": taitaitroRef,
      "bat-dong-san": batdongsanRef,
      "san-xuat-kinh-doanh": sanxuatkinhdoanhRef,
      "tieu-dung": tieudungRef,
      "mua-o-to": muaotoRef,
    }

    map[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <PageWrapper bg="bg-[#f7e7da]">
      {/* ===== NAVBAR FIXED ===== */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" >
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo MBV" className="h-10 w-auto" />
            <span className="font-mont font-bold text-[12px] text-gray-600 uppercase">
              Khách hàng cá nhân
            </span>
          </div>
          </Link>

          {/* Menu */}
          <nav className="flex items-center gap-6 font-mont text-[14px] text-gray-800">
            <Link to="/tin-tuc" className="hover:text-red-600">
              Tin tức - Ưu đãi
            </Link>

            <Link to="/chi-tieu" className="hover:text-red-600">
              Chi tiêu
            </Link>

            <Link to="/tiet-kiem" className="hover:text-red-600">
              Tiết kiệm
            </Link>
            <Link to="/vay" className="relative font-semibold">
              Vay
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
            </Link>
            <Link to="/bao-hiem" className="hover:text-red-600">
              Bảo hiểm
            </Link>

            <Link
              to="https://apps.apple.com/us/app/mbv-bank/id6742386787?l=vi"
              className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
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
        className="relative h-screen w-full"
        style={{
          backgroundImage: `url(${headervay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ===== HEADER CONTENT ===== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[80px]">
          {/* Breadcrumb */}
          <div className="text-sm mb-[150px] font-mont">
            <span className="text-gray-500">Trang chủ &gt; </span>
            <span className="text-gray-500">Khách hàng Cá nhân &gt; </span>
            <span className="text-black font-semibold">Vay</span>
          </div>

          {/* Title */}
          <h1 className="font-mont font-bold text-black mb-4 text-4xl md:text-5xl leading-tight">
            Vay chủ động
          </h1>

          <h2 className="font-mont text-gray-600 text-[25px] mb-6 leading-tight">
            Giải pháp giúp bạn hiện thực hóa mọi dự định trong <br />
            cuộc sống
          </h2>

          <button className="px-6 py-3 rounded-full bg-red-600 text-white font-mont text-[20px] shadow">
            Mở tài khoản MBV
          </button>
        </div>
      </header>

      {/* ===== VAY NAV (STICKY) ===== */}
      <div className="sticky top-[80px] z-40 mt-[-40px]">
        <VayNav active={active} onChange={handleChange} />
      </div>

      {/* ===== SECTIONS ===== */}
      <section ref={taitaitroRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">VAY TÁI TRỢ</h2>
        <div className="space-y-8">

            <Link to="/vay/vay-tai-tai-tro/cho-vay-tai-tai-tro">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${taitaitro})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Vay tái tài trợ
                </h3>
                <p className="text-sm mb-6 max-w-7xl">
                    Giúp cho khách hàng cơ cấu lại khoản vay và được hưởng thêm nhiều ưu đãi khách
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>
        </div>
        </section>

      <section ref={batdongsanRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">VAY BẤT ĐỘNG SẢN</h2>
        <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            <Link to="/vay/vay-bat-dong-san/vay-mua-nha-du-an" className="md:col-span-6">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-7"
                style={{ backgroundImage: `url(${batdongsan1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Vay mua nhà dự án
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Lãi suất vay ưu đãi, với thời gian vay linh hoạt và hình thức trả nợ đa dạng.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>

            <Link to="/vay/vay-bat-dong-san/vay-mua-nha-o-dat-o" className="md:col-span-6">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${batdongsan2})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Vay mua nhà ở, đất ở
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Gói vay ưu đãi dành cho khách hàng cá nhân muốn vay vốn mua nhà ở hoặc đất ở
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>
        </div>
        </div>
        </section>

      <section ref={sanxuatkinhdoanhRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">VAY SẢN XUẤT KINH DOANH</h2>
        <div className="space-y-8">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            <Link to="/vay/vay-san-xuat-kinh-doanh/vay-kinh-doanh-bo-sung-von-luu-dong" className="md:col-span-6">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${sanxuat1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Vay kinh doanh bổ sung vốn lưu động
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Bổ sung vốn phục vụ cho hoạt động sản xuất kinh doanh ngắn hạn.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>

            <Link to="/vay/vay-san-xuat-kinh-doanh/vay-kinh-doanh-dau-tu-trung-dai-han" className="md:col-span-6">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${sanxuat2})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Vay kinh doanh đầu tư trung dài hạn
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Giải pháp tài chính hỗ trợ cho các mục đích đầu tưu dài hạn
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>
        </div>        
        </div>
      </section>

      <section ref={tieudungRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">VAY TIÊU DÙNG</h2>
        <div className="space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            <Link to="/vay/vay-tieu-dung/vay-tieu-dung-co-tai-san-bao-dam" className="md:col-span-6">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${tieudung1})` }}
            >
                <div className="mt-auto p-8 text-white">
                <h3 className="text-[30px] font-bold mb-4">
                    Vay tiêu dùng có TSBĐ
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Giúp khách hàng vay vốn với lãi suất ưu đãi, mức vay cao, đồng thời thủ tục vay đơn giản và nhanh chóng.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>


          <Link to="/vay/vay-tieu-dung/vay-tieu-dung-khong-co-tai-san-bao-dam" className="md:col-span-6">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${tieudung2})` }}
            >
            <div className="mt-auto p-8 text-white">
                <h3 className="text-[26px] font-bold mb-3">
                    Vay tiêu dùng không có TSBĐ
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Dành cho khách hàng cá nhân, cho phép vay vốn mà không có phải thế chấp tài sản.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </Link>
        </div>
        </div>
      </section>

      <section ref={muaotoRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">VAY MUA Ô TÔ</h2>
        <div className="space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            <Link to="/vay/vay-mua-o-to/vay-mua-o-to-tieu-dung" className="md:col-span-6">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${muaoto1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Vay mua ô tô tiêu dùng
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Điều kiện vay đơn giản, khách hàng có thể dễ dàng sở hữu chiếc ô tô mơ ước để sử dụng.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>


          <Link to="/vay/vay-mua-o-to/vay-mua-o-to-kinh-doanh" className="md:col-span-6">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${muaoto2})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Vay mua ô tô kinh doanh
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Sản phẩm này giúp khách hàng dễ dàng tiếp cận nguồn vốn để đầu tư vào phương tiện phục vụ quá trình phát triển kinh doanh
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </Link>
        </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  )
}
