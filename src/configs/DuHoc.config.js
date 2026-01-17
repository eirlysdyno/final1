import duhoc from "../assets/images/duhoc.png"

export const DuHoc = {
  header: {
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Chi tiêu", href: "/chi-tieu"},
    { label: "Thanh toán quốc tế"},
    { label: "Chuyển tiền du học"},
  ]
  },

  sections: [
    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - CHUYỂN TIỀN DU HỌC",
      layout: "large-left",
      small: { img: duhoc},
      large: [
        { title: "CCCD/Hộ chiếu của người đi chuyển tiền" },
        { title: "Thư tiếp nhận của cơ sở đào tạo nước ngoài (hoặc giấy tờ chứng minh đang học tập tại nước ngoài)" },
        { title: "Giấy thông báo chi phí của cơ sở đào tạo" },
        { title: "Bản sao hộ chiếu và visa (hoặc giấy tờ cấp phép lưu trú tại nước ngoài trong trường hợp không cần visa) của người đi du học" },
        { title: "Giấy tờ liên quan khác" },
        { title: "Các bước đăng kí", desc: "Khách hàng vui lòng liên hệ Cán bộ MBV thông qua Call Center: 1800 58 88 15 hoặc các Chi nhánh MBV trên toàn quốc để được hỗ trợ" }      ],
    },
    {
      type: "text-box",
      title: "CÂU HỎI THƯỜNG GẶP",
      accordion: [
        {
          title: "1. Tôi sẽ được những ưu đãi gì khi sử dụng sản phẩm chuyển tiền du học?",
          content:
            "Khách hàng được miễn phí chuyển tiền",
        },
        {
          title: "2. Làm thế nào để tôi biết được hồ sơ chuyển tiền du học cần những hồ sơ gì?",
          content:
            "Quý khách có thể tham khảo trên website của Ngân hàng MBV hoặc liên hệ với MBV qua Call Center: 1800 58 88 15 hoặc chi nhánh MBV trên toàn quốc.",
        },
      ]
    },
  ],
}
