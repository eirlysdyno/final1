import tlt from "../assets/images/tktralaitruoc.jpg"
import why1 from "../assets/images/why-1.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import truoc from "../assets/images/truoc.png"


export const TraLaiTruoc = {
  header: {
    image: tlt,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Tiết kiệm", href: "/tiet-kiem"},
    { label: "Tiết kiệm có kỳ hạn"},
    { label: "Tiền gửi tiết kiệm trả lãi trước"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TIỀN GỬI TIẾT KIỆM TRẢ LÃI TRƯỚC",
      cols: 3,
      items: [
        { img: why1, title: "Khách hàng nhận lãi ngay tại thời điểm gửi tiền." },
        { img: why3, title: "Lãi suất hấp dẫn và cạnh tranh." },
        { img: why4, title: "Được cầm cố TTK để vay vốn, bảo lãnh, chuyển giao quyền sở hữu ,..." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TIỀN GỬI TIẾT KIỆM TRẢ LÃI TRƯỚC",
      layout: "large-left",
      small: { img: truoc},
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
          title: "1. Tiết kiệm trả lãi trước có được mở bằng loại tiền ngoại tệ không?",
          content: "MBV trả lãi khoản tiền gửi trả lãi định kỳ vào tài khoản thanh toán của Khách hàng vào ngày thanh toán lãi định kỳ"
        },
        {
          title: "2. Nếu tôi quên không tất toán tiền gửi có kỳ hạn thì MBV sẽ xử lý khoản tiền gửi của tôi như thế nào?",
          content: "Tại thời điểm gửi tiền, KH và MBV thỏa thuận: Trường hợp vào ngày đến hạn mà KH không đến để thực hiện các thủ tục tất toán thì MBV sẽ tự động chuyển đổi toàn bộ số tiền tiết kiệm sang hình thức tiết kiệm trả lãi cuối kỳ với thời hạn tương ứng thời hạn ban đầu của TGTK hoặc ngắn hơn liền kề trong trường hợp không có thời hạn tương ứng với thời hạn ban đầu của TGTK trả lãi trước, mức lãi suất được áp dụng theo Biểu lãi suất Tiền gửi tiết kiệm trả lãi cuối kỳ do MBV công bố tại thời điểm chuyển đổi. Khoản TGTK trả lãi cuối kỳ này sẽ tuân theo Quy định về tiền gửi tiết kiệm trả lãi cuối kỳ của MBV trong từng thời kỳ."
        },
        {
          title: "3. Tôi có thể tất toán khoản TGCKH ở chi nhánh khác chi nhánh gửi tiền không?",
          content: "Khách hàng có thể đến bất kỳ điểm giao dịch nào của MBV để thực hiện tất toán khoản TGCKH."
        }
      ]
    },
  ],
}
