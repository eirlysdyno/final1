import tlck from "../assets/images/tktralaicuoiky.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import cuoiky from "../assets/images/cuoiky.png"


export const TraLaiCuoiKy= {
  header: {
    image: tlck,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Tiết kiệm", href: "/tiet-kiem"},
    { label: "Tiết kiệm có kỳ hạn"},
    { label: "Tiền gửi tiết kiệm trả lãi cuối kỳ"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TIỀN GỬI TIẾT KIỆM TRẢ LÃI CUỐI KỲ",
      cols: 4,
      items: [
        { img: why1, title: "Thời hạn gửi tiền đa dạng: tuần, tháng" },
        { img: why2, title: "Lãi suất hấp dẫn và cạnh tranh" },
        { img: why3, title: "Được cầm cố tiền tiết kiệm để vay vốn, bảo lãnh, chuyển giao Quyền sở hữu" },
        { img: why4, title: "Hỗ trợ xác nhận số dư tiền gửi tại thời điểm khách hàng yêu cầu." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TIỀN GỬI TIẾT KIỆM TRẢ LÃI CUỐI KỲ",
      layout: "large-left",
      small: { img: cuoiky},
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
          title: "1. Thẻ tiết kiệm lĩnh lãi cuối kỳ có được tất toán trước hạn không?",
          content: "Khách hàng được tất toán thẻ tiết kiệm lĩnh lãi cuối kỳ và tùy thuộc vào từng loại tiền gửi KH sẽ được hưởng mức lãi suất tiền gửi không kỳ hạn thấp nhất do MBV công bố tại thời điểm tất toán trước hạn, tiền lãi được tính trên số ngày gửi thực tế tại kỳ gửi tiền mà KH đề nghị tất toán trước hạn."
        },
        {
          title: "2. Tôi gửi tiết kiệm ở hình thức nhận lãi cuối kỳ có thể đăng ký nhận lãi qua tài khoản thanh toán cá nhân của tôi được không?",
          content: "Khách hàng có thể đăng ký nhận lãi qua tài khoản thanh toán cá nhân tại thời điểm gửi tiền."
        }
      ]
    },
  ],
}
