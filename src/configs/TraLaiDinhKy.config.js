import tldk from "../assets/images/tktralaidinhky.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import dinhky from "../assets/images/dinhky.png"




export const TraLaiDinhKy = {
  header: {
    image: tldk,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Tiết kiệm", href: "/tiet-kiem"},
    { label: "Tiết kiệm có kỳ hạn"},
    { label: "Tiền gửi tiết kiệm trả lãi định kỳ"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TIỀN GỬI TIẾT KIỆM TRẢ LÃI ĐỊNH KỲ",
      cols: 3,
      items: [
        { img: why3, title: "Lĩnh lãi định kỳ hàng tháng/quý, tự động trả lãi định kỳ vào tài khoản thanh toán của khách hàng." },
        { img: why4, title: "Lãi suất cạnh tranh." },
        { img: why2, title: "Được cầm cố TTK để vay vốn, bảo lãnh, chuyển giao Quyền sở hữu,...." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TIỀN GỬI TIẾT KIỆM TRẢ LÃI ĐỊNH KỲ",
      layout: "large-left",
      small: { img: dinhky},
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
          title: "1. Thời điểm nhận khoản tiền gửi trả lãi định kỳ của tôi là khi nào?",
          content: "MBV trả lãi khoản tiền gửi trả lãi định kỳ vào tài khoản thanh toán của Khách hàng vào ngày thanh toán lãi định kỳ"
        },
        {
          title: "2. Tôi phải làm gì nếu mất thỏa thuận tiền gửi?",
          content: "Khi phát hiện mất thẻ tiết kiệm, Quý khách ra điểm giao dịch của MBV để khai báo tình trạng mất sổ tiết kiệm. MBV không chịu trách nhiệm đối với thiệt hại xảy ra do Khách hàng chưa kịp khai báo hoặc mới khai báo mất thẻ tiết kiệm trong vòng 03 giờ giao dịch kể từ khi MBV nhận được \"Giấy báo mất TTK\"."
        },
        {
          title: "3. Trường hợp ngày đến hạn trùng vào ngày nghỉ, ngày lễ, số tiền lãi của khách hàng được tính thế nào?",
          content: "Trường hợp ngày đến hạn thanh toán lãi định kỳ rơi vào ngày nghỉ, ngày lễ thì lãi sé được chuyển vào tài khoản thanh toán của Khách hàng vào ngày làm việc tiếp theo liền sau ngày nghỉ, ngày lễ."
        }
      ]
    },
  ],
}
