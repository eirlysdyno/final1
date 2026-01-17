import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import "./News.css"

import headerchitieu from "/src/assets/images/header-chitieu.jpg"
import logo from "/src/assets/images/logo-mbv.png"

import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import ChiTieuNav from "../components/ChiTieuNav"

import taikhoan1 from "../assets/images/taikhoan-1.png"
import taikhoan2 from "../assets/images/taikhoan-2.png"
import taikhoan3 from "../assets/images/taikhoan-3.png"
import taikhoan4 from "../assets/images/taikhoan-4.png"

import noidia1 from "../assets/images/thanhtoannoidia-1.png"
import noidia2 from "../assets/images/thanhtoannoidia-2.png"
import noidia3 from "../assets/images/thanhtoannoidia-3.png"
import noidia4 from "../assets/images/thanhtoannoidia-4.png"

import quocte1 from "../assets/images/thanhtoanquocte-1.png"
import quocte2 from "../assets/images/thanhtoanquocte-2.png"
import quocte3 from "../assets/images/thanhtoanquocte-3.png"
import quocte4 from "../assets/images/thanhtoanquocte-4.png"


export default function ChiTieu() {
  const [active, setActive] = useState("tai-khoan")

  const taiKhoanRef = useRef(null)
  const theMBVRef = useRef(null)
  const noiDiaRef = useRef(null)
  const quocTeRef = useRef(null)

  const handleChange = (id) => {
    setActive(id)

    const map = {
      "tai-khoan": taiKhoanRef,
      "the-mbv": theMBVRef,
      "noi-dia": noiDiaRef,
      "quoc-te": quocTeRef,
    }

    map[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <PageWrapper bg="bg-[#f1e8e0]">
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

            <Link to="/chi-tieu" className="relative font-semibold">
              Chi tiêu
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
            </Link>

            <Link to="/tiet-kiem" className="hover:text-red-600">
              Tiết kiệm
            </Link>
            <Link to="/vay" className="hover:text-red-600">
              Vay
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
          backgroundImage: `url(${headerchitieu})`,
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
            <span className="text-black font-semibold">Chi tiêu</span>
          </div>

          {/* Title */}
          <h1 className="font-mont font-bold text-black mb-4 text-4xl md:text-5xl leading-tight">
            Thanh toán toàn diện
          </h1>

          <h2 className="font-mont text-gray-600 text-[25px] mb-6 leading-tight">
            Giải pháp giúp bạn tự do tận hưởng mọi khoảnh khắc <br />
            của cuộc sống
          </h2>

          <button className="px-6 py-3 rounded-full bg-red-600 text-white font-mont text-[20px] shadow">
            Mở tài khoản MBV
          </button>
        </div>
      </header>

      {/* ===== CHI TIÊU NAV (STICKY) ===== */}
      <div className="sticky top-[80px] z-40 mt-[-40px]">
        <ChiTieuNav active={active} onChange={handleChange} />
      </div>

      {/* ===== SECTIONS ===== */}
      <section ref={taiKhoanRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">TÀI KHOẢN</h2>
        <div className="space-y-8">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD LỚN */}
            <Link to="/chi-tieu/tai-khoan-thanh-toan" className="md:col-span-7">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${taikhoan1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Tài khoản thanh toán
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Tài khoản thanh toán (tài khoản vãng lai) là công cụ giúp bạn quản lý chi tiêu mà vẫn sinh lời, đáp ứng mọi nhu cầu của bạn về chuyển tiền và thanh toán trong nước.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>

            {/* CARD NHỎ */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${taikhoan2})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Tài khoản thấu chi
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Sản phẩm tài khoản thấu chi/Cho vay rút vốn nhanh cá nhân của MBV sẽ gỡ rối cho bạn, để bạn có thể sử dụng số tiền vượt quá số tiền trong tài khoản thanh toán một cách nhanh chóng và thuận tiện.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD NHỎ */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${taikhoan3})` }}
            >
            <div className="mt-auto p-8 text-white">
                <h3 className="text-[26px] font-bold mb-3">
                    Tài khoản ngoại tệ
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Dịch vụ hữu ích dành cho khách hàng cá nhân này đã giúp MBV chính thức trở thành ngân hàng tiên phong tại Việt trong hành trình chuyển đổi số thông minh, giúp khách hàng giao dịch an toàn, thuận tiện nhất.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>

            {/* CARD LỚN */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-7"
            style={{ backgroundImage: `url(${taikhoan4})` }}
            >
            <div className="mt-auto p-8 text-white">
                <h3 className="text-[30px] font-bold mb-4">
                    Tài khoản chuyên dùng
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Hỗ trợ bạn tới 80% nhu cầu tài chính.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </div>
        </div>
        </section>

      <section ref={theMBVRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">THẺ MBV</h2>
        <div className="space-y-8">
         {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD LỚN */}
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-7"
                style={{ backgroundImage: `url(${taikhoan1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Thẻ MBV ATM
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Thẻ ghi nợ nội địa MBV ATM là thẻ do MBV phát hành trong lãnh thổ Việt Nam, cho phép chủ thẻ thực hiện giao dịch thẻ trong phạm vi số dư khả dụng trên tài khoản thanh toán của chủ thẻ mở tại MBV. Thẻ MBV ATM có khả năng lưu trữ và mã hóa thông tin với độ bảo mật cao và tích hợp công nghệ thanh toán không tiếp xúc giúp cho giao dịch được thực hiện nhanh chóng, an toàn, tiện lợi.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>

            {/* CARD NHỎ */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${taikhoan1})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Thẻ visa credit
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Chẳng còn đắn đo việc mở thẻ tín dụng quốc tế, khi giờ đây MBV đã miễn 100% phí phát hành và phí thường niên! Việc chi tiêu - mua sắm giờ đây đã trở nên tiện lợi và đơn giản hơn bao giờ hết, cho bạn thoải mái tận hưởng niềm vui cuộc sống.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </div>
        </div>
        </section>

      <section ref={noiDiaRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">THANH TOÁN NỘI ĐỊA</h2>
        <div className="space-y-8">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD LỚN */}
            <Link to="/chi-tieu/thanh-toan-noi-dia/thanh-toan-hang-hoa-dich-vu-trong-nuoc" className="md:col-span-7">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${noidia1})` }}
            >
                <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Thanh toán hàng hóa dịch vụ trong nước
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Với thẻ MBV Visa Hybrid và App MBV trong tay, bạn có thể ngồi tại nhà để thực hiện thanh toán mọi hóa đơn: điện, truyền hình CAB, Internet, nạp thẻ điện thoại, thanh toán học phí, phí bảo hiểm, thanh toán QR Code... một cách nhanh chóng, an toàn và tiện lợi.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>

            {/* CARD NHỎ */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${noidia2})` }}
            >
            <div className="mt-auto p-8 text-white">
                <h3 className="text-[26px] font-bold mb-3">
                    Nộp Ngân sách nhà nước
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Dịch vụ thu hộ Ngân sách Nhà nước (NSNN) là dịch vụ MBV hợp tác với Tổng cục Thuế, Tổng cục Hải quan để thực hiện thu hộ các loại thuế, phí, lệ phí và các khoản thu NSNN khác của tổ chức, hộ kinh doanh, các nhân hoạt động trong lãnh thổ Việt Nam.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD NHỎ */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-5"
            style={{ backgroundImage: `url(${noidia3})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Thanh toán hóa đơn
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Với thẻ MBV Visa Hybrid và App MBV trong tay, bạn có thể ngồi tại nhà để thực hiện thanh toán mọi hóa đơn: điện, truyền hình CAB, Internet, nạp thẻ điện thoại, thanh toán học phí, phí bảo hiểm, thanh toán QR Code… một cách nhanh chóng, an toàn và tiện lợi.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>

            {/* CARD LỚN */}
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex md:col-span-7"
            style={{ backgroundImage: `url(${noidia4})` }}
            >
            <div className="mt-auto p-8 text-white">
                <h3 className="text-[30px] font-bold mb-4">
                    Thu chi hộ tiền mặt
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Dịch vụ Thu chi hộ tiền mặt của MBV giúp cá nhân quản lý dòng tiền hiệu quả bằng cách thu hộ và chi hộ trực tiếp tại quầy hoặc qua các kênh khác của ngân hàng
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </div>
        </div>
      </section>

      <section ref={quocTeRef} className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 flex justify-center">THANH TOÁN QUỐC TẾ</h2>
        <div className="space-y-8">

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD LỚN */}
            <Link to="/chi-tieu/thanh-toan-quoc-te/chuyen-tien-dinh-cu/chuyen-tien-quoc-te-chieu-di-chuyen-tien-dinh-cu" className="md:col-span-7">
            <div
                className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
                style={{ backgroundImage: `url(${quocte1})` }}
            >
                <div className="mt-auto p-8 text-white">
                <h3 className="text-[30px] font-bold mb-4">
                    Chuyển tiền định cư
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Với mong muốn hỗ trợ tối đa nhu cầu chuyển tiền ra nước ngoài nhằm mục đích định cư ở nước ngoài, đem đến giải pháp chuyển tiền linh hoạt và hiệu quả nhất cho các khách hàng, đáp ứng kịp thời nhu cầu tài chính và tạo tâm lý an tâm, vứng vàng cho khách hàng của MBV.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
                </div>
            </div>
            </Link>

            {/* CARD NHỎ */}

          <Link to="/chi-tieu/thanh-toan-quoc-te/chuyen-tien-du-hoc/chuyen-tien-du-hoc" className="md:col-span-5">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${quocte2})` }}
            >
            <div className="mt-auto p-8 text-white">
                <h3 className="text-[26px] font-bold mb-3">
                    Chuyển tiền du học
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Với mong muốn hỗ trợ tối đa nhu cầu chuyển tiền học phí, sinh hoạt phí cho mục đích du học, sản phẩm "Chuyển tiền Du học" sẽ đem đến giải pháp chuyển tiền linh hoạt và hiệu quả nhất cho các khách hàng của MBV, đáp ứng kịp thời nhu cầu tài chính và tạo tâm lý an tâm, vững vàng cho du học sinh trong việc học tập, sinh sống tại nước ngoài.
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
        </Link>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* CARD NHỎ */}
            <Link to="/chi-tieu/thanh-toan-quoc-te/chuyen-tien-tro-cap-than-nhan/chuyen-tien-tro-cap-than-nhan" className="md:col-span-5">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${quocte3})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[26px] font-bold mb-3">
                    Chuyển tiền trợ cấp thân nhân
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Với mong muốn mang lại sự thuận tiện, nhanh chóng và an toàn cho Khách hàng, sản phẩm Chuyển tiền trợ cấp thân nhân từ Việt Nam ra nước ngoài của MBV là hoạt động chuyển khoản một số tiền ra nước ngoài cho đối tượng người có quốc tịch Việt Nam đang sinh sống ở nước đó. Công dân Việt Nam được phép mua ngoại tệ để chuyển ra nước ngoài trợ cấp cho thân nhân. 
                </p>
                <span className="text-sm mb-6 max-w-xl">Tìm hiểu thêm →</span>
            </div>
            </div>
            </Link>
            {/* CARD LỚN */}
            <Link to="/chi-tieu/thanh-toan-quoc-te/Nhan-kieu-hoi-tu-nguoc-ngoai-qua-western-union-swift/nhan-kieu-hoi-tu-nuoc-ngoai-qua-western-union-swift" className="md:col-span-7">
            <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${quocte4})` }}
            >
            <div className="mt-auto p-8 text-black">
                <h3 className="text-[30px] font-bold mb-4">
                    Nhận kiều hối từ nước ngoài qua Western Union, Swift
                </h3>
                <p className="text-sm mb-6 max-w-xl">
                    Dịch vụ chuyển tiền về Việt Nam từ nước ngoài của MBV giúp khách hàng có thể nhận tiền về từ bất cứ ngân hàng nào trên thế giới một cách nhanh chóng và an toàn thông qua hệ thống thanh toán liên ngân hàng toàn cầu SWIFT và thông qua dịch vụ Western Union là một trong những dịch vụ chuyển tiền nhanh Quốc tế có trụ sở chính tạ Mỹ và có mạng lưới đại lý trên toàn cầu.
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
