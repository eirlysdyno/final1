import cokyhan from "../assets/images/tkcokyhan.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import kyhan from "../assets/images/kyhan.png"



export const CoKyHan = {
  header: {
    image: cokyhan,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Tiết kiệm", href: "/tiet-kiem"},
    { label: "Tiết gửi có kỳ hạn"},
    { label: "Tiết gửi có kỳ hạn"},

  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TIỀN GỬI CÓ KỲ HẠN",
      cols: 3,
      items: [
        { img: why1, title: "Áp dụng cho cả KH là người nước ngoài" },
        { img: why2, title: "Thời hạn gửi tiền linh hoạt theo ngày, Lãi suất hấp dẫn và cạnh tranh." },
        { img: why3, title: "Được cầm cố để vay vốn, xác nhận số dư, chuyển giao Quyền sở hữu,.." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TIỀN GỬI TIẾT KIỆM ONLINE",
      layout: "large-left",
      small: { img: kyhan},
      large: [
        { title: "Giấy gửi tiền tiết kiệm (theo mẫu MBV)." },
        { title: "Giấy tờ tùy thân: CCCD/CMND/Hộ chiếu." },
      ],
    },
    {
      type: "text-box",
      title: "CÂU HỎI THƯỜNG GẶP",
      accordion: [
        {
          title: "1. Nếu có nhu cầu đột xuất phát sinh, tôi có thể rút tiền tiết kiệm bất cứ lúc nào được không?",
          content: ""
        },
        {
          title: "2. Tôi cần làm những thủ tục gì để gửi tiền gửi có kỳ hạn tại quầy?",
          content: "Khách hàng cần xuất trình giấy tờ tùy thân (CCCD/CMND/Hộ chiều còn thời hạn) khi đến làm thủ tục gửi tiền gửi có kỳ hạn tại quầy."
        },
        {
          title: "3. Tôi có thể tất toán khoản TGCKH ở chi nhánh khác chi nhánh gửi tiền không?",
          content: "Khách hàng có thể đến bất kỳ điểm giao dịch nào của MBV để thực hiện tất toán khoản TGCKH"
        }
      ]
    }
  ],
}
