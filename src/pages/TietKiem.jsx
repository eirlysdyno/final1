import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import "./News.css"

import headertietkiem from "/src/assets/images/header-tietkiem.jpg"
import logo from "/src/assets/images/logo-mbv.png"

import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import TietKiemNav from "../components/TietKiemNav"

import cokyhan1 from "../assets/images/tkcokyhan-1.png"
import cokyhan2 from "../assets/images/tkcokyhan-2.png"
import cokyhan3 from "../assets/images/Home-3.png"
import cokyhan4 from "../assets/images/tkcokyhan-4.png"

import online from "../assets/images/tkonline.png"
import cokyhan5 from "../assets/images/tkcokyhan-2.png"
import tichluy from "../assets/images/tktichluy.png"


export default function TietKiem() {
  const [active, setActive] = useState("co-ky-han-1")

  const cokyhan1Ref = useRef(null)
  const onlineRef = useRef(null)
  const cokyhan2Ref = useRef(null)
  const tichluyRef= useRef(null)

  const handleChange = (id) => {
    setActive(id)

    const map = {
      "co-ky-han-1": cokyhan1Ref,
      "online": onlineRef,
      "co-ky-han-2": cokyhan2Ref,
      "tich-luy": tichluyRef,
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

            <Link to="/tiet-kiem" className="relative font-semibold">
              Tiết kiệm
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
            </Link>
            <Link to="/vay" className="hover:text-red-600">
              Vay
            </Link>
            <Link to="/bao-hiem" className="hover:text-red-600">
              Bảo hiểm
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
          backgroundImage: `url(${headertietkiem})`,
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
            <span className="text-black font-semibold">Tiết kiệm</span>
          </div>

          {/* Title */}
          <h1 className="font-mont font-bold text-black mb-4 text-4xl md:text-5xl leading-tight">
            Tiết kiệm toàn diện
          </h1>

          <h2 className="font-mont text-gray-600 text-[25px] mb-6 leading-tight">
            Giải pháp giúp bạn an tâm tích lũy cho tương lai trọn vẹn
          </h2>
        </div>
      </header>

      {/* ===== TIẾT KIỆM NAV (STICKY) ===== */}
      <div className="sticky top-[80px] z-40 mt-[-40px]">
        <TietKiemNav active={active} onChange={handleChange} />
      </div>

      {/* ===== SECTIONS ===== */}
      <section ref={cokyhan1Ref} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">TIẾT KIỆM CÓ KỲ HẠN</h2>
        <div className="space-y-8">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD LỚN */}
            <Link to="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-dinh-ky" className="md:col-span-7">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${cokyhan1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Tiền gửi tiết kiệm trả lãi định kỳ
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Giải pháp này phù hợp cho những ai mong muốn gia tăng tài sản ổn định, đồng thời có thêm nguồn thu nhập đều đặn trong suốt kỳ hạn gửi.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>

            {/* CARD NHỎ */}
            <Link to="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-truoc" className="md:col-span-5">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${cokyhan2})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Tiền gửi tiết kiệm trả lãi trước
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Giải pháp giúp khách hàng nhận trước lãi suất ngay khi mở sổ tiết kiệm
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
        </div>
        </Link>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD NHỎ */}
            <Link to="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-cuoi-ky" className="md:col-span-5">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${cokyhan3})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Tiền gửi tiết kiệm trả lãi cuối kỳ
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Một trong những sự lựa chọn tiết kiệm hấp dẫn cho khách hàng muốn nhận lãi suất cao hơn với phương thức thanh toán lãi vào cuối kỳ hạn
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>

            {/* CARD LỚN */}
            <Link to="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-thong-minh-smartsaving" className="md:col-span-7">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${cokyhan4})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Tiền gửi tiết kiệm thông minh Smartsaving
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Với Smartsaving, khách hàng có thể tự do lựa chọn kỳ hạn gửi và nộp thêm vào tài khoản bất cứ lúc nào để gia tăng số dư tiết kiệm.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>
        </div>
        </div>
        </section>
       
      <section ref={onlineRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">TIẾT KIỆM ONLINE</h2>
            <Link to="/tiet-kiem/tiet-kiem-online/tien-gui-tiet-kiem-online">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${online})` }}
            >
                <div className="mt-auto p-8 text-black">
                    <h3 className="text-[30px] font-bold mb-4">
                        Tiền gửi tiết kiệm online
                    </h3>
                    <p className="text-sm mb-6 max-w-7xl">
                        Thật tiện ích với một tài khoản tiết kiệm vừa giúp bạn tích lúy một cách linh hoạt nhất, vừa có thể rút tiền để sử dụng thanh toán bất cứ khi nào và ở đâu. Bạn hoàn toàn chủ động, tiết kiệm thời gian và chi phí khi thực hiện mở tài khoản tiết kiệm thông qua dịch vụ ngân hàng trực tuyến của MBV
                    </p>
                    <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>
        </section>

      <section ref={cokyhan2Ref} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">TIẾT KIỆM CÓ KỲ HẠN</h2>
            <Link to="/tiet-kiem/tien-gui-co-ky-han/tien-gui-co-ky-han">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${cokyhan5})` }}
            >
                <div className="mt-auto p-8 text-black">
                    <h3 className="text-[30px] font-bold mb-4">
                        Tiền gửi có kỳ hạn
                    </h3>
                    <p className="text-sm mb-6 max-w-7xl">
                        Giải pháp tiết kiệm với mức sinh lợi ổn định và an toàn, cho phép khách hàng lựa chọn linh hoạt kỳ hạn gửi từ ngắn hạn đến dài hạn tùy theo nhu cầu tài chính
                    </p>
                    <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>
        </section>

      <section ref={tichluyRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">TIẾT KIỆM TÍCH LŨY MỤC TIÊU</h2>
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${tichluy})` }}
            >
                <div className="mt-auto p-8 text-black">
                    <h3 className="text-[30px] font-bold mb-4">
                        Tiền gửi tích lũy mục tiêu
                    </h3>
                    <p className="text-sm mb-6 max-w-7xl">
                        Sản phẩm được thiết kế dành riêng cho những khách hàng mong muốn tích lũy một cách chủ động
                    </p>
                    <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </section>

      <Footer />
    </PageWrapper>
  )
}
