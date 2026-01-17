import trocap from "../assets/images/trocap.png"

export const TroCap = {
  header: {
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Chi tiêu", href: "/chi-tieu"},
    { label: "Thanh toán quốc tế"},
    { label: "Chuyển tiền trợ cấp thân nhân"},
  ]
  },

  sections: [
    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - CHUYỂN TIỀN TRỢ CẤP THÂN NHÂN",
      layout: "large-left",
      small: { img: trocap},
      large: [
        { title: "CCCD/Hộ chiếu của người đi chuyển tiền" },
        { title: "Bản sao hộ chiếu và visa của người nhận thể hiện tư cách cư trú hợp pháp của người nhận" },
        { title: "Giấy tờ thể hiện mối quan hệ thân nhân" },
        { title: "Các bước đăng kí", desc: "Khách hàng vui lòng liên hệ Cán bộ MBV thông qua Call Center: 1800 58 88 15 hoặc các Chi nhánh MBV trên toàn quốc để được hỗ trợ" }      ],
    },
    {
      type: "text-box",
      title: "CÂU HỎI THƯỜNG GẶP",
      accordion: [
        {
          title: "1. Chúng tôi muốn chuyển tiền cho người nhà ở nước ngoài (tiền EUR) thì cách thức chuyển như thế nào và số lượng tiền được gửi tối đa là bao nhiêu?",
          content:
            "Để thực hiện giao dịch chuyển tiền quốc tế cho người thân tại nước ngoài, Khách hàng chỉ cần cung cấp được giấy tờ chứng minh quan hệ thân nhân và visa của người thân tại nước ngoài. Tùy vào số tiền KH muốn chuyển MBV sẽ tư vấn kỹ hơn về hồ sơ cung cấp. Hạn mức chuyển tiền sẽ tùy thuộc vào mục đích chuyển tiền của Khách hàng và tối đa là 1.000.000 USD/năm/người.",
        },
      ]
    },
  ],
}
