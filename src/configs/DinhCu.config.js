import why1 from "../assets/images/why-1.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import dinhcu from "../assets/images/dinhcu.png"



export const DinhCu = {
  header: {
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Chi tiêu", href: "/chi-tieu"},
    { label: "Thanh toán quốc tế"},
    { label: "Chuyển tiền quốc tế chiều đi - Chuyển tiền định cư"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - CHUYỂN TIỀN QUỐC TẾ CHIỀU ĐI",
      cols: 3,
      items: [
        { img: why1, title: "Giảm phí chuyển tiền lên tới 100%" },
        { img: why3, title: "Ưu đãi tỷ giá" },
        { img: why4, title: "Hồ sơ, thủ tục nhanh gọn" },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - CHUYỂN TIỀN QUỐC TẾ CHIỀU ĐI",
      layout: "large-left",
      small: { img: dinhcu},
      large: [
        { title: "Yêu cầu mua, chuyển ngoại tệ ra nước ngoài (theo mẫu của MBV)" },
        { title: "Hộ chiếu, visa/thẻ cư trú còn hạn hoặc Hộ chiếu do cơ quan có thẩm quyền của nước định cư cấp" },
        { title: "Hồ sơ chứng minh nguồn tiền chuyển" },
        { title: "Giấy tờ tủy thân của người chuyển tiền còn hiệu lực" },
        { title: "Văn bản ủy quyền hợp pháp trong trường hợp người chuyển tiền là người được ủy quyền (nếu có)" },
        { title: "Giấy tờ liên quan khác" },
        { title: "Các bước đăng ký", desc: "Khách hàng vui lòng liên hệ Cán bộ MBV thông qua Call Center: 1800 58 88 15 hoặc các Chi nhánh MBV trên toàn quốc để được hỗ trợ" },
      ],
    },
  ],
}
