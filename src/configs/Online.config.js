import tkonline from "../assets/images/tkonline.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import online from "../assets/images/online.png"
import giaodien from "../assets/images/giaodien.png"
import hotline from "../assets/images/hotline.png"


export const Online = {
  header: {
    image: tkonline,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Tiết kiệm", href: "/tiet-kiem"},
    { label: "Tiết kiệm online"},
    { label: "Tiền gửi tiết kiệm online"},

  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TIỀN GỬI TIẾT KIỆM ONLINE",
      cols: 4,
      items: [
        { img: why1, title: "Giao dịch 24/7 qua các kênh online của MBV như Internet Banking, Mobile Banking" },
        { img: why2, title: "Không cần đến Điểm giao dịch của MBV" },
        { img: why3, title: "Lãi suất hấp dẫn, loại hình gửi tiền phong phú" },
        { img: why4, title: "Được cầm cố để vay vốn, bảo lãnh,..." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TIỀN GỬI TIẾT KIỆM ONLINE",
      layout: "large-left",
      small: { img: online},
      large: [
        { title: "Khách hàng cần đăng ký sử dụng dịch vụ Ngân hàng điện tử của MBV để gửi tiết kiệm online và các tiện ích khác kèm theo" },
        { title: "Số dư tiền gửi có sẵn trên tài khoản thanh toán của KH." },
      ],
    },

    {
      type: "form-cards",
      title: "HƯỚNG DẪN ĐĂNG KÝ - TIỀN GỬI TIẾT KIỆM ONLINE",
      image: giaodien,
      accordion: [
        { title: "Khách hàng mở app MBV mobile."},
        { title: "Khách hàng chọn các loại hình tiết kiệm tại app"},
        { title: "Khách hàng mở tiết kiệm theo nhu cầu"}
      ],
      form: {
        title: "Hãy để chúng tôi đồng hành cùng bạn",
        fields: ["name", "e-mail", "phone"],
        submitText: "Gửi đăng ký"
      },
      support: {
          label: "Tổng đài hỗ trợ 24/7",
          phone: "1900545456",
          logo: hotline,
        }
    },
    {
      type: "text-box",
      title: "CÂU HỎI THƯỜNG GẶP",
      accordion: [
        {
          title: "1. Khách hàng có thể mở tiết kiệm Online tại quầy giao dịch không?",
          content: "Khách hàng mở tiền gửi tiết kiệm online qua các kênh online của MBV có cung cấp tính năng gửi tiền online."
        },
        {
          title: "2. Số tiền tối thiểu khi gửi tiết kiệm Online là bao nhiêu?",
          content: "Số tiền tối thiểu khi gửi tiết kiệm Online là 500.000 VND"
        },
        {
          title: "3. Tiết kiệm Online có giới hạn tối đa số tiền gửi?",
          content: "Tiền gửi tiết kiệm Online không giới hạn tối đa số tiền gửi."
        },
        {
          title: "4. Tôi có thể mở tối đa bao nhiêu tài khoản tiết kiệm Online?",
          content: "MBV không giới hạn số tài khoản tiền gửi tiết kiệm Online của khách hàng."
        },
        {
          title: "5. Nếu tất toán trước hạn, tôi sẽ được hưởng lãi như thế nào?",
          content: "Trường hợp KH tất toán trước hạn, KH sẽ được hưởng mức lãi suất tiền gửi không kỳ hạn thấp nhất bằng đồng Việt Nam do MBV công bố tại thời điểm tất toán. Số tiền lãi đucợ tính trên số ngày gửi thực tế tại kỳ gửi tiền mà KH đề nghị tất toán trước hạn. Trường hợp KH đã lĩnh lãi định kỳ nhiều hơn số lãi được hưởng khi rút trước hạn thì MBV sẽ truy thu lãi phần lãi chênh lệch trước khi trả gốc và lãi cho KH."
        },
      ]
    }
  ],
}
