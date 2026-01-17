import tm from "../assets/images/tkthongminh.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import thongminh from "../assets/images/thongminh.png"


export const ThongMinh= {
  header: {
    image: tm,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Tiết kiệm", href: "/tiet-kiem"},
    { label: "Tiết kiệm có kỳ hạn"},
    { label: "Tiền gửi tiết kiệm thông minh Smartsaving"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TIỀN GỬI TIẾT KIỆM THÔNG MINH SMARTSAVING",
      cols: 3,
      items: [
        { img: why1, title: "Thời hạn gửi tiền linh hoạt theo ngày." },
        { img: why2, title: "Lãi suất hấp dẫn và cạnh tranh" },
        { img: why3, title: "Được cầm cố TTK để vay vốn, bảo lãnh, chuyển giao quyền sở hữu" },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TIỀN GỬI TIẾT KIỆM TRẢ LÃI CUỐI KỲ",
      layout: "large-left",
      small: { img: thongminh},
      large: [
        { title: "Giấy gửi tiền tiết kiệm (theo mẫu MBV)"},
        { title: "Giấy tờ tùy thân: CCCD/CMND/Hộ chiếu" },
      ],
    },

    {
      type: "text-box",
      title: "CÂU HỎI THƯỜNG GẶP",
      accordion: [
        {
          title: "1. Sản phẩm tiền gửi tiết kiệm Smart Savings có cho Khách hàng tất toán trước hạn không?",
          content: ""
        },
        {
          title: "2. Kỳ hạn của sản phẩm tiền gửi tiết kiệm Smart Savings có linh hoạt không?",
          content: "Tiền gửi tiết kiệm Smart Savings có kỳ hạn gửi tiền linh hoạt từ 30 ngày đến 1800 ngày. Khách hàng được quyền chủ động lựa chọn thời hạn gửi tiền theo ngày phù hợp với nhu cầu và kế hoạch tài chính của khách hàng."
        },
        {
          title: "3. Trường hợp ngày đến hạn trùng vào ngày nghỉ, ngày lễ, số tiền lãi của khách hàng được tính thế nào?",
          content: "Nếu ngày đến hạn của khoản tiền gửi trùng vào ngày nghỉ, ngày lễ, số tiền lãi của KH vẫn được tính đúng đến ngày đến hạn theo lãi suất áp dụng tại thời điểm gửi tiền hoặc thời điểm bắt đầu một thời hạn gửi tiền mới (trường hợp tái tục TGCKH)"
        }
      ]
    },
  ],
}
