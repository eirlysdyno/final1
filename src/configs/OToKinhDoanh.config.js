import oto from "../assets/images/otokinhdoanh.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import sign from "../assets/images/sign-1.png"
import click2 from "../assets/images/click-2.png"
import hotline from "../assets/images/hotline.png"


export const OToKinhDoanh = {
  header: {
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Vay", href: "/vay"},
    { label: "Vay mua ô tô"},
    { label: "Vay ô tô kinh doanh"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "LỢI ÍCH NỔI BẬT",
      cols: 3,
      items: [
        { img: why1, title: "Thủ tục đơn giản, nhanh chóng" },
        { img: why2, title: "Thời hạn vay linh hoạt" },
        { img: why3, title: "Lãi suất vay ưu đãi" },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU",
      layout: "large-left",
      small: { img: sign},
      large: [
        { title: "Hồ sơ pháp lý", desc: "CMND/Hộ chiếu/CM quân nhân; Hộ khẩu; Xác nhận tạm trú; Giấy tờ xác nhận tình trạng hôn nhân." },
        { title: "Giấy tờ chứng minh thu nhập", desc: "Hợp đồng lao động/Quyết định lương và sao kê bảng lương trong vòng 03 tháng; Hoặc Hợp đồng thuê nhà và biên nhận tiền; Hoặc giấy tờ chứng minh các nguồn thu khác." },
        { title: "Các hồ sơ phương án vay vốn", desc: "Hợp đồng đặt cọc,..." },
        { title: "Các hồ sơ liên quan tới tài sản thế chấp", desc: "Giấy chứng nhận quyền sở hữu,..." },
      ],
    },

    {
      type: "form-cards",
      title: "HƯỚNG DẪN ĐĂNG KÝ - VAY MUA Ô TÔ TIÊU DÙNG",
      image: click2,
      accordion: [
        {
          title: "Đăng ký tư vấn",
          content:
            "Khách hàng có thể đăng ký tư vấn online hoặc trực tiếp tại các điểm giao dịch của MBV.",
        },
        {
          title: "Chuẩn bị hồ sơ vay vốn",
          content: "Khách hàng chuẩn bị hồ sơ vay vốn theo danh mục được chuyên viên tín dụng tại MBV hướng dẫn."
        },
        {
          title: "Nhận thông báo kết quả phê duyệt",
          content: "MBV sẽ gửi thông báo kết quả phê duyệt hồ sơ vay vốn tới khách hàng."
        },
        {
          title: "Hoàn thiện thủ tục tài sản và giải ngân",
          content: "Khách hàng hoàn thiện các thủ tục liên quan tới tài sản bảo đảm và chờ Ngân hàng giải ngân khoản vay."
        },
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
          title: "1. Tôi có thể vay vốn mua bất kỳ thương hiệu ô tô con nào không?",
          content: "Khách hàng có thể vay vốn mua xe ô tô theo các thương hiệu phổ thông mà MBV cập nhập theo từng thời kỳ."
        },
        {
          title: "2. Tôi không có tài sản để thế chấp cho khoản vay mua ô tô, tôi có thể dùng tài sản của bố mẹ tôi cho khoản vay này được không?",
          content: "Được, KH có thể dùng tài sản là bất động sản đứng tên bố mẹ hoặc chính chiếc xe ô tô KH định mua để làm TSBĐ nếu đáp ứng tiêu chí theo quy định của MBV."
        },
        {
          title: "3. Trong trường hợp đến hạn thanh toán khoản vay, tôi chưa kịp thanh toán thì có bị phạt không?",
          content: "Có. Phạt chậm trả lãi trên số dư lãi chậm trả tương ứng với thời gian chậm trả."
        },
        {
          title: "4. Có yếu tố nào giúp giảm lãi suất vay hay không?",
          content: "Giảm lãi suất vay phụ thuộc vào lãi suất thị trường và lãi suất huy động đầu vào của ngân hàng, việc điều chỉnh lãi suất sẽ được quy định cụ thể tại các HĐCV giữa Ngân hàng và KH."
        }
      ]
    },
  ],
}
