import { Link } from "react-router-dom"
import "./News.css"
import headernews from "/src/assets/images/header-news.jpg"
import logo from "/src/assets/images/logo-mbv.png"
import logonews from "/src/assets/images/logo-tintuc.png"
import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"


export default function News() {
  return (
    <PageWrapper bg="bg-white">
      {/* ===== HEADER (BACKGROUND IMAGE) ===== */}
      <header
        className="relative h-screen w-full"
        style={{
          backgroundImage: `url(${headernews})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ===== NAVBAR ===== */}
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
              <Link to="/tin-tuc" className="relative font-semibold">
                Tin tức - Ưu đãi
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></span>
              </Link>
              <Link to="/chi-tieu" className="hover:text-red-600">Chi tiêu</Link>
              <Link to="/tiet-kiem" className="hover:text-red-600">Tiết kiệm</Link>
              <Link to="/vay" className="hover:text-red-600">Vay</Link>
              <Link to="/bao-hiem" className="hover:text-red-600">Bảo hiểm</Link>

              <Link
                to="https://play.google.com/store/apps/details?id=com.mbv.mobilebanking&amp;pcampaignid=web_share"
                className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
              >
                Tải App MBV
              </Link>
            </nav>
          </div>
        </div>

        {/* ===== HEADER CONTENT ===== */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[100px]">
          {/* Breadcrumb */}
          <div className="text-sm mb-[150px] font-mont">
            <span className="text-gray-500">Trang chủ &gt; </span>
            <span className="text-gray-500">Khách hàng Cá nhân &gt; </span>
            <span className="text-black font-semibold">
              Tin tức - Ưu đãi
            </span>
          </div>

          {/* Title */}
          <h1 className="font-mont font-bold text-black text-4xl md:text-5xl leading-tight">
            Cập nhật tin tức <br />
            kinh doanh mới nhất
          </h1>

          {/* ===== TAB ===== */}
          <div className="mt-10 flex justify-center">
            <button
              className="
                relative
                px-6 py-3
                rounded-full
                bg-white
                text-red-600
                font-mont font-bold text-[12px]
                shadow
                flex flex-col items-center
              "
            >
              TẤT CẢ
              <span className="mt-1 w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
<section className="bg-white py-20">
  <div className="max-w-5xl mx-auto px-3">
    <h2 className="text-center font-mont font-bold text-2xl mb-14">
      TIN TỨC – ƯU ĐÃI
    </h2>

    {/* ===== GRID: CARD LỚN + CARD PHẢI ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
      
      {/* CARD LỚN */}
      <Link
        to="/tin-tuc/quay-vui-trung-lon-tren-app-mbv-bank"
        className="lg:col-span-8 block"
      >
        <div className="h-full rounded-3xl overflow-hidden shadow hover:scale-[1.02] transition flex flex-col bg-white">
          <img
            src="/src/assets/images/news-1.png"
            className="w-full h-[420px] object-cover"
            alt=""
          />
          <div className="p-6">
            <h3 className="font-mont font-bold text-lg mb-2">
              QUAY VUI TRÚNG LỚN TRÊN APP MBV BANK
            </h3>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <img src={logonews} className="w-6 h-6" />
              Tin tức -
            </span>
          </div>
        </div>
      </Link>

      {/* CARD PHẢI */}
      <Link
        to="/tin-tuc/uu-dai-lai-suat-khi-gui-tiet-kiem-mbv-tren-app-viettel-money"
        className="lg:col-span-4 block"
      >
        <div className="h-full rounded-3xl overflow-hidden shadow hover:scale-[1.02] transition flex flex-col bg-white">
          <img
            src="/src/assets/images/news-2.png"
            className="w-full h-[220px] object-cover"
            alt=""
          />
          <div className="p-6 flex flex-col flex-1">
            <h4 className="font-mont font-bold text-sm mb-2">
              Ưu đãi lãi suất khi gửi tiết kiệm MBV trên App Viettel Money
            </h4>
            <p className="text-sm text-black mb-auto">
              TỪ 100K ĐÃ CÓ THỂ TIẾT KIỆM - TIỀN ĐẺ RA TIỀN!
            </p>
            <span className="flex items-center gap-1 text-sm text-gray-600 mt-4">
              <img src={logonews} className="w-5 h-5" />
              Tin tức -
            </span>
          </div>
        </div>
      </Link>

    </div>

    {/* ===== GRID 3 CARD NGANG ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      
      <Link to="/tin-tuc/UuDaiSinhNhatMBV" className="block">
            <div className="rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white h-full">
              <img
                src="/src/assets/images/news-3.jpg"
                className="w-full h-[200px] object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="font-mont font-bold text-base mb-3 leading-snug">
                  Ưu đãi mừng sinh nhật MBV: Gửi tiết kiệm trúng xế, rước quà xinh, rinh lãi đỉnh
                </h3>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <img src={logonews} className="w-5 h-5" />
                  Tin tức -
                </span>
              </div>
            </div>
          </Link>

          {/* CARD ITEM */}
          <Link to="/tin-tuc/thong-bao-ve-chuyen-doi-he-thong" className="block">
            <div className="rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white h-full">
              <img
                src="/src/assets/images/news-4.png"
                className="w-full h-[200px] object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="font-mont font-bold text-base mb-6">
                  THÔNG BÁO VỀ CHUYỂN ĐỔI HỆ THỐNG
                </h3>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <img src={logonews} className="w-5 h-5" />
                  Tin tức -
                </span>
              </div>
            </div>
          </Link>

          {/* CARD ITEM */}
          <Link to="/tin-tuc/so-dep-trao-tay-nhan-ngay-qua-khung" className="block">
            <div className="rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white h-full">
              <img
                src="/src/assets/images/news-5.png"
                className="w-full h-[200px] object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="font-mont font-bold text-base mb-6">
                  SỐ ĐẸP TRAO TAY, NHẬN NGAY QUÀ KHỦNG
                </h3>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <img src={logonews} className="w-5 h-5" />
                  Tin tức -
                </span>
              </div>
            </div>
          </Link>

        </div>


    {/* ===== CARD NGANG LỚN ===== */}
    <Link to="/tin-tuc/thong-bao-danh-sach-khach-hang-trung-thuong-lan-1-ctkm-danh-cho-khach-hang-gui-tiet-kiem" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-3.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            Thông báo danh sách trúng thưởng lần 1 CTKM dành cho Khách hàng gửi tiết kiệm
          </h3>
          <p className="text-sm text-black mb-6">
            Lễ quay thưởng lần 1 dành cho các Khách hàng tham gia chương trình từ 17/11-30/11/2025 diễn ra vào 10h00 ngày 05/12/2025 đã xác định các Khách hàng đạt giải đầu tiên.
          </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>
    
    <Link to="/tin-tuc/thong-bao-to-chuc-le-quay-thuong-lan-1-ctkm-danh-cho-khach-hang-gui-tiet-kiem" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-7.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            TB: Tổ chức lễ quay thưởng lần 1 Chương trình ưu đãi dành cho Khách hàng gửi tiết kiệm
          </h3>
          <p className="text-sm text-black mb-6">
            Ngân hàng MBV trân trọng thông báo Lễ quay thưởng lần 1 của Chương trình ưu đãi dành cho Khách hàng gửi tiết kiệm.
          </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/mbv-va-viettel-money-hop-tac-mo-rong-he-sinh-thai-tai-chinh-so" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-2.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            MBV VÀ VIETTEL MONEY HỢP TÁC MỞ RỘNG HỆ SINH THÁI TÀI CHÍNH SỐ
          </h3>
          <p className="text-sm text-black mb-6">
            Ngân hàng MBV - một thành viên của MB Group - chính thức hợp tác cùng Viettel Money, nền tảng tài chính số thuộc Tập đoàn Viettel, nhằm mang đến cho người dùng trải nghiệm tài chính thuận tiện, minh bạch và an toàn ngay trên ứng dụng Viettel Money.
          </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/mua-ve-tau-ngay-tren-ung-dung-mbv-bank" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-7.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            MUA VÉ TÀU NGAY TRÊN ỨNG DỤNG MBV BANK!
          </h3>
          <p className="text-sm text-black mb-6">
            Từ ngày 06/11, người dùng MBV đã có thể đặt và thanh toán vé tàu trực tiếp trên ứng dụng MBV Bank thông qua EPAY.
          </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/lien-ket-vi-epay-voi-mbv-mo-khoa-trai-nghiem-thanh-toan-toan-dien" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-10.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            LIÊN KẾT VÍ EPAY VỚI MBV – MỞ KHÓA TRẢI NGHIỆM THANH TOÁN TOÀN DIỆN
          </h3>
          <p className="text-sm text-black mb-6">
            Chỉ với vài thao tác, tài khoản MBV được liên kết ngay trên Ví EPAY – Nhanh, mượt và an toàn
          </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/mua-gio-da-co-taxi-tren-app-mbv-tro-gia" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-11.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            MƯA GIÓ ĐÃ CÓ TAXI TRÊN APP MBV TRỢ GIÁ
          </h3>
          <p className="text-sm text-black mb-6">
            Mưa lớn để taxi trên app MBV Bank đưa đón bạn nhé! Chỉ cần đặt xe qua App MBV Bank, nhận voucher giảm giá 20k mỗi chuyến.
          </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/thong-bao-hoat-dong-thanh-toan-dip-nghi-le-29-9829" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-12.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            THÔNG BÁO HOẠT ĐỘNG THANH TOÁN DỊP NGHỈ LỄ 2/9
          </h3>
          <p className="text-sm text-black mb-6">
            MBV xin thông báo đến Quý Khách hàng
            </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/nap-sieu-toc-luot-sieu-muot" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-13.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            NẠP SIÊU TỐC – LƯỚT SIÊU MƯỢT
          </h3>
          <p className="text-sm text-black mb-6">
            Tận hưởng ưu đãi cực HOT, chẳng lo “mất kết nối” giữa chừng cùng MBV từ 15/8 đến hết 15/9
            </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>

    <Link to="/tin-tuc/nap-rut-lien-ngay-giao-dich-muot-tay" className="block">
      <div className="grid grid-cols-1 lg:grid-cols-12 mb-8 max-w-4xl mx-auto px-2 rounded-3xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/news-14.png"
            className="w-full h-full"
            alt=""
          />
        </div>

        <div className="lg:col-span-7 p-8 flex flex-col justify-center">
          <h3 className="font-mont font-bold text-lg mb-4">
            NẠP RÚT LIỀN NGAY, GIAO DỊCH MƯỢT TAY
          </h3>
          <p className="text-sm text-black mb-6">
            Nhân ngày MBV & MOMO chung đôi, chúng mình cùng kết nối ngay
            </p>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={logonews} className="w-5 h-5" />
            Tin tức -
          </span>
        </div>

      </div>
    </Link>
  </div>
</section>

      <Footer />
    </PageWrapper>
  )
}
