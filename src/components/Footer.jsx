import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa"
import branchIcon from "../assets/images/logo-mbv.png"
import footer_image from "../assets/images/Footer.png"

export default function Footer() {
  return (
    <footer className="px-4 py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-[36px] p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-6 text-[20px] text-black">
            <img src={branchIcon} 
              className="h-12 w-auto" 
              alt="Chi nhánh" />


            <div className="border-b border-transparent pb-5">
              <a
                href="https://storage.mbv.com.vn/website/2025/10/20/27aa9de51b_DANH_SACH_CHI_NHANH_MBV_2025.pdf"
                className="font-medium"
              >
                Danh sách chi nhánh
              </a>
            </div>

            <div className="border-b border-transparent pb-5">
              <a
                href="mailto:support@mbv.com.vn"
                className="font-medium block"
              >
                EMAIL: support@mbv.com.vn
              </a>

              <a
                href="mailto:hr@mbv.com.vn"
                className="font-medium"
              >
                EMAIL (TUYỂN DỤNG): hr@mbv.com.vn
              </a>
            </div>

            <div className="border-b border-transparent pb-5">
              <a
                href="tel:1800588815"
                className="font-medium block"
              >
                HOTLINE: 1800 58 88 15
              </a>

              <a
                href="tel:+842437726789"
                className="font-medium"
              >
                QUỐC TẾ: (+84-24) 3772 6789
              </a>
            </div>

            <div className="border-b border-transparent pb-5">
              <a
                href="https://storage.mbv.com.vn/website/2025/03/04/452b83e9e1_Danh_sach_ATM-web.pdf"
                className="font-medium"
              >
                Danh sách ATM
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.mbv.com.vn/"
                target="_blank"
                className="text-[#0a66c2] hover:scale-110 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.facebook.com/NganhangVietNamHienDai"
                target="_blank"
                className="text-[#1877f2] hover:scale-110 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.mbv.com.vn/"
                target="_blank"
                className="text-[#ff0000] hover:scale-110 transition"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://www.mbv.com.vn/"
                target="_blank"
                className="text-[#e1306c] hover:scale-110 transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <div className="border-t border-transparent pt-4 font-bold text-[10px] text-gray-600 leading-relaxed">
              <p>
                BẢN QUYỀN © 2024 THUỘC VỀ NGÂN HÀNG TNHH MTV VIỆT NAM HIỆN ĐẠI.
                BẢO LƯU MỌI QUYỀN.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <a href="https://storage.mbv.com.vn/website/2025/04/04/e73d70344e_ieu_kien_ieu_khoan_KHCN_4.2025.pdf" >
                  Điều khoản sử dụng
                </a>
                <a href="https://storage.mbv.com.vn/website/2025/11/20/7c51327cc7_An_toan_bao_mat.pdf" >
                  An toàn bảo mật
                </a>
                <a href="tel:1800588815">
                  Kết nối với chúng tôi
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] overflow-hidden">
            <img
              src={footer_image} 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </footer>
  )
}
