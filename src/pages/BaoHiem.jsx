import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import "./News.css"

import headerbaohiem from "/src/assets/images/header-tietkiem.jpg"
import logo from "/src/assets/images/logo-mbv.png"

import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import BaoHiemNav from "../components/BaoHiemNav"

import mblife1 from "../assets/images/mblife-1.png"
import mblife2 from "../assets/images/mblife-2.png"
import mblife3 from "../assets/images/mblife-3.png"

import mic1 from "../assets/images/mic-1.png"
import mic2 from "../assets/images/mic-2.png"
import mic3 from "../assets/images/mic-3.png"
import mic4 from "../assets/images/mic-4.png"



export default function BaoHiem() {
  const [active, setActive] = useState("mb-life")

  const mblifeRef = useRef(null)
  const micRef = useRef(null)

  const handleChange = (id) => {
    setActive(id)

    const map = {
      "mb-life": mblifeRef,
      "mic": micRef,
    }

    map[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <PageWrapper bg="bg-[#f6dbeb]">
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
            <Link to="/vay" className="hover:text-red-600">
              Vay
            </Link>
            <Link to="/bao-hiem" className="relative font-semibold">
              Bảo hiểm
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />

            </Link>

            <Link
              to="https://play.google.com/store/apps/details?id=com.mbv.mobilebanking&amp;pcampaignid=web_share"
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
          backgroundImage: `url(${headerbaohiem})`,
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
            <span className="text-black font-semibold">Bảo hiểm</span>
          </div>

          {/* Title */}
          <h1 className="font-mont font-bold text-black mb-4 text-4xl md:text-5xl leading-tight">
            Bảo vệ toàn diện
          </h1>

          <h2 className="font-mont text-gray-600 text-[25px] mb-6 leading-tight">
            Giải pháp giúp bạn an tâm tận hưởng mọi khoảnh <br />
            khắc của cuộc sống
          </h2>
        </div>
      </header>

      {/* ===== BẢO HIỂM NAV (STICKY) ===== */}
      <div className="sticky top-[80px] z-40 mt-[-40px]">
        <BaoHiemNav active={active} onChange={handleChange} />
      </div>

      {/* ===== SECTIONS ===== */}
      <section ref={mblifeRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">BẢO HIỂM MB LIFE</h2>
        <div className="space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* CARD LỚN */}
        <Link
            to="/bao-hiem/bao-hiem-mb-life/an-vui-tron-doi"
            className="md:col-span-7"
        >
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${mblife1})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                An tâm vui trọn đời
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                Bỏ lại đằng sau những lo âu ngăn cản Bạn lập kế hoạch tài chính chủ động, với Sản phẩm bảo hiểm Liên kết chung Quẳng Gánh Âu Lo.
                </p>
                <span>Tìm hiểu thêm →</span>
            </div>
            </div>
        </Link>

        {/* CỘT PHẢI – 2 CARD NHỎ */}
        <div className="md:col-span-5 flex flex-col gap-8">

            <div
            className="relative rounded-[32px] min-h-[240px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${mblife2})` }}
            >
            <div className="mt-auto p-6 text-black">
                <h3 className="text-[22px] font-bold mb-2">
                Sống trọn ước mơ
                </h3>
                <p className="text-sm">
                Mỗi người sẽ có một ước mơ, định nghĩa riêng cho mình về sự thành công và chinh phục. Với MB Life, chúng tôi lựa chọn là người đồng hành cùng Bạn để hiện thực hóa ước mơ.
                </p>
            </div>
            </div>

            <div
            className="relative rounded-[32px] min-h-[240px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${mblife3})` }}
            >
            <div className="mt-auto p-6 text-black">
                <h3 className="text-[22px] font-bold mb-2">
                Phụ nữ tỏa sáng
                </h3>
                <p className="text-sm">
                Gửi gắm thông điệp “Phụ Nữ Toả Sáng - Sống Trọn Thảnh Thơi”, sản phẩm bảo hiểm mới nhất của MB Life như một món quà tri ân, tôn vinh vẻ đẹp quyến rũ nhất của người phụ nữ hiện đại.
                </p>
            </div>
            </div>

        </div>
        </div>

        </div>
        </section>

        <section ref={micRef} className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-6 flex justify-center">BẢO HIỂM MIC</h2>
                <div className="space-y-8">
        
                {/* ===== ROW 1 ===== */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
                    {/* CARD LỚN */}
                    <div
                        className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-7"
                        style={{ backgroundImage: `url(${mic1})` }}
                    >
                        <div className="mt-auto p-8 text-black">
                        <h3 className="text-[30px] font-bold mb-4">
                            MIC care
                        </h3>
                        <p className="text-sm mb-6 max-w-xl">
                            Vốn quý của con người là Sức Khỏe. Đảm bảo một sức khỏe tốt sẽ giúp chúng ta an tâm thực hiện những ước mơ, hoài bão. Bảo hiểm Sức khỏe MIC Care ra đời như một giải pháp giúp nâng cao chất lượng cũng như giá trị cuộc sống.
                        </p>
                        <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                        </div>
                    </div>
        
                    {/* CARD NHỎ */}
                    <div
                    className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
                    style={{ backgroundImage: `url(${mic2})` }}
                    >
                    <div className="mt-auto p-8 text-black">
                        <h3 className="text-[26px] font-bold mb-3">
                            Bảo hiểm vật chất xe
                        </h3>
                        <p className="text-sm mb-6 max-w-xl">
                            Đền bù chi phí thực tế và hợp lý để khắc phục thiệt hại trong những trường hợp tai nạn bất ngờ, nằm ngoài sự kiểm soát của chủ xe.
                        </p>
                        <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                    </div>
                    </div>
                </div>
                </div>
        
                {/* ===== ROW 2 ===== */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
                    {/* CARD NHỎ */}
                    <div
                    className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
                    style={{ backgroundImage: `url(${mic3})` }}
                    >
                    <div className="mt-auto p-8 text-black">
                        <h3 className="text-[26px] font-bold mb-3">
                            Bảo hiểm nhà tư nhân
                        </h3>
                        <p className="text-sm mb-6 max-w-xl">
                            Cho dù cuộc sống càng hiện đại và phát triển thì với người Việt Nam ngôi nhà là yếu tố đem đến cảm giác thoải mái hoặc giúp bạn thoát khỏi thế giới bên ngoài.
                        </p>
                        <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                    </div>
                    </div>
        
                    {/* CARD LỚN */}
                    <div
                    className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-7"
                    style={{ backgroundImage: `url(${mic4})` }}
                    >
                    <div className="mt-auto p-8 text-black">
                        <h3 className="text-[30px] font-bold mb-4">
                            Bảo an tài chính toàn diện Plus
                        </h3>
                        <p className="text-sm mb-6 max-w-xl">
                            Bảo hiểm Bảo an tài chính toàn diện Plus như “cây dù che mưa gió” - Giải pháp bảo vệ tài chính và chăm sóc sức khỏe toàn diện dành riêng cho khách hàng vay vốn thông qua hệ thống ngân hàng MBV trên toàn quốc.
                        </p>
                        <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                    </div>
                    </div>
                </div>
                </section>
    <Footer />
    </PageWrapper>
  )
}
