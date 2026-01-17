import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import kieuhoi from "../assets/images/kieuhoi.png"


export const KieuHoi = {
  header: {
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Chi tiêu", href: "/chi-tieu"},
    { label: "Nhận kiều hối từ nước ngoài qua Western Union, Swift"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - NHẬN KIỀU HỐI TỪ NƯỚC NGOÀI QUA WESTERN UNION, SWIFT",
      cols: 2,
      items: [
        { img: why2, title: "Khách hàng không cần có tài khoản tại MBV" },
        { img: why3, title: "Đáp ứng nhu cầu đa dạng của KH", desc: "Du học, chữa bệnh, công tác, định cư ở nước ngoài, thừa kế, chuyển nguồn thu nhập hợp pháp..." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU VÀ CÁC BƯỚC ĐĂNG KÝ - NHẬN KIỀU HỐI TỪ NƯỚC NGOÀI QUA WESTERN UNION, SWIFT",
      layout: "large-left",
      small: { img: kieuhoi},
      large: [
        { title: "Giấy tờ tùy thân của người chuyển và các giấy tờ khác theo quy định"},
        { title: "Các bước đăng ký", desc: "Khách hàng vui lòng liên hệ Cán bộ MBV thông qua Call Center: 1800 58 88 15 hoặc các Chi nhánh MBV trên toàn quốc để được hỗ trợ" },
      ],
    },

    {
      type: "text-box",
      title: "CÂU HỎI THƯỜNG GẶP",
      accordion: [
        {
          title: "1. Tôi có tài khoản tại MBV, xin hỏi tôi có thể chuyển tiền từ nước ngoài vào tài khoản đó được không?",
          content: "Quý khách có thể chuyển tiền từ nước ngoài về tài khoản ngoại tệ tương ứng hoặc tài khoản VND của Quý khách tại ngân hàng."
          },
        ]
    },
  ],
}
