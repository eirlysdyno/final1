import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import Tintuc from "./pages/News"
import ChiTieu from "./pages/ChiTieu"
import TietKiem from "./pages/TietKiem"
import Vay from "./pages/Vay"
import BaoHiem from "./pages/BaoHiem"
import Tintucchitiet from "./pages/NewDetails"
import Chitieuchitiet from "./pages/ChiTieuDetails"
import {TaiKhoanThanhToan} from "./configs/TaiKhoanThanhToan.config.js"
import {ThanhToan} from "./configs/ThanhToan.config.js"
import {DinhCu} from "./configs/DinhCu.config.js"
import {DuHoc} from "./configs/DuHoc.config.js"
import {TroCap} from "./configs/TroCap.config.js"
import {KieuHoi} from "./configs/KieuHoi.config.js"
import Tietkiemchitiet from "./pages/TietKiemDetails"
import {TraLaiDinhKy} from "./configs/TraLaiDinhKy.config.js"
import {TraLaiTruoc} from "./configs/TraLaiTruoc.config.js"
import {TraLaiCuoiKy} from "./configs/TraLaiCuoiKy.config.js"
import {ThongMinh} from "./configs/ThongMinh.config.js"
import {Online} from "./configs/Online.config.js"
import {CoKyHan} from "./configs/CoKyHan.config.js"
import Vaychitiet from "./pages/VayDetails"
import {TaiTaiTro} from "./configs/TaiTaiTro.config.js"
import {NhaDuAn} from "./configs/NhaDuAn.config.js"
import {NhaDatO} from "./configs/NhaDatO.config.js"
import {VonLuuDong} from "./configs/VonLuuDong.config.js"
import {TrungDaiHan} from "./configs/TrungDaiHan.config.js"
import {TieuDungTSBĐ} from "./configs/TieuDungTSBĐ.config.js"
import {TieuDungKoTSBĐ} from "./configs/TieuDungKoTSBĐ.config.js"
import {OToTieuDung} from "./configs/OToTieuDung.config.js"
import {OToKinhDoanh} from "./configs/OToKinhDoanh.config.js"
import Baohiemchitiet from "./pages/BaoHiemDetails"
import {AnVuiTronDoi} from "./configs/AnVuiTronDoi.config.js"
import {LaiVay} from "./pages/LaiVay"
import {LaiTietKiem} from "./pages/LaiTietKiem"
import {TyGiaHoiDoai} from "./pages/TyGiaHoiDoai"

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tin-tuc" element={<Tintuc />} />
        <Route path="/tin-tuc/:slug" element={<Tintucchitiet />} />
        <Route path="/chi-tieu" element={<ChiTieu />} />
        <Route path="/chi-tieu/tai-khoan-thanh-toan" element={<Chitieuchitiet config={TaiKhoanThanhToan} />} />
        <Route path="/chi-tieu/thanh-toan-noi-dia/thanh-toan-hang-hoa-dich-vu-trong-nuoc" element={<Chitieuchitiet config={ThanhToan} />} />
        <Route path="/chi-tieu/thanh-toan-quoc-te/chuyen-tien-dinh-cu/chuyen-tien-quoc-te-chieu-di-chuyen-tien-dinh-cu" element={<Chitieuchitiet config={DinhCu} />} />
        <Route path="/chi-tieu/thanh-toan-quoc-te/chuyen-tien-du-hoc/chuyen-tien-du-hoc" element={<Chitieuchitiet config={DuHoc} />} />
        <Route path="/chi-tieu/thanh-toan-quoc-te/chuyen-tien-tro-cap-than-nhan/chuyen-tien-tro-cap-than-nhan" element={<Chitieuchitiet config={TroCap} />} />
        <Route path="/chi-tieu/thanh-toan-quoc-te/Nhan-kieu-hoi-tu-nguoc-ngoai-qua-western-union-swift/nhan-kieu-hoi-tu-nuoc-ngoai-qua-western-union-swift" element={<Chitieuchitiet config={KieuHoi} />} />
        <Route path="/tiet-kiem" element={<TietKiem />} />
        <Route path="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-dinh-ky" element={<Tietkiemchitiet config={TraLaiDinhKy} />} />
        <Route path="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-truoc" element={<Tietkiemchitiet config={TraLaiTruoc} />} />       
        <Route path="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-cuoi-ky" element={<Tietkiemchitiet config={TraLaiCuoiKy} />} />       
        <Route path="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-thong-minh-smartsaving" element={<Tietkiemchitiet config={ThongMinh} />} />       
        <Route path="/tiet-kiem/tiet-kiem-online/tien-gui-tiet-kiem-online" element={<Tietkiemchitiet config={Online} />} />       
        <Route path="/tiet-kiem/tien-gui-co-ky-han/tien-gui-co-ky-han" element={<Tietkiemchitiet config={CoKyHan} />} />       
        <Route path="/vay" element={<Vay />} />
        <Route path="/vay/vay-tai-tai-tro/cho-vay-tai-tai-tro" element={<Vaychitiet config={TaiTaiTro} />} />       
        <Route path="/vay/vay-bat-dong-san/vay-mua-nha-du-an" element={<Vaychitiet config={NhaDuAn} />} />       
        <Route path="/vay/vay-bat-dong-san/vay-mua-nha-o-dat-o" element={<Vaychitiet config={NhaDatO} />} />       
        <Route path="/vay/vay-san-xuat-kinh-doanh/vay-kinh-doanh-bo-sung-von-luu-dong" element={<Vaychitiet config={VonLuuDong} />} />       
        <Route path="/vay/vay-san-xuat-kinh-doanh/vay-kinh-doanh-dau-tu-trung-dai-han" element={<Vaychitiet config={TrungDaiHan} />} />       
        <Route path="/vay/vay-tieu-dung/vay-tieu-dung-co-tai-san-bao-dam" element={<Vaychitiet config={TieuDungTSBĐ} />} />       
        <Route path="/vay/vay-tieu-dung/vay-tieu-dung-khong-co-tai-san-bao-dam" element={<Vaychitiet config={TieuDungKoTSBĐ} />} />       
        <Route path="/vay/vay-mua-o-to/vay-mua-o-to-tieu-dung" element={<Vaychitiet config={OToTieuDung} />} />       
        <Route path="/vay/vay-mua-o-to/vay-mua-o-to-kinh-doanh" element={<Vaychitiet config={OToKinhDoanh} />} />       
        <Route path="/bao-hiem" element={<BaoHiem />} />
        <Route path="/bao-hiem/bao-hiem-mb-life/an-vui-tron-doi" element={<Baohiemchitiet config={AnVuiTronDoi} />} />
        <Route path="/cong-cu-tien-ich/cong-cu-tinh-lai-vay" element={<LaiVay />} />
        <Route path="/cong-cu-tien-ich/cong-cu-tinh-lai-suat-tiet-kiem" element={<LaiTietKiem />} />
        <Route path="/cong-cu-tien-ich/ty-gia-hoi-doai" element={<TyGiaHoiDoai />} />

      </Route>
    </Routes>
    </>
  )
}
export default App
