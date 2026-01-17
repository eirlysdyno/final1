import tdh from "../assets/images/sanxuat-2.png"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why4 from "../assets/images/why-4.jpg"
import work from "../assets/images/work.png"
import click1 from "../assets/images/click-1.png"
import hotline from "../assets/images/hotline.png"


export const TrungDaiHan = {
  header: {
    title: "Khách hàng dễ dàng vay kinh doanh bổ sung vốn trung dài hạn",
    subtitle: "Giúp khách hàng bổ sung dòng tiền thiếu hụt trung dài hạn để đầu tư vào kinh doanh",
    image: tdh,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Vay", href: "/vay"},
    { label: "Vay sản xuất kinh doanh"},
    { label: "Vay kinh doanh đầu tư trung dài hạn"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "LỢI ÍCH NỔI BẬT",
      cols: 3,
      items: [
        { img: why1, title: "Thủ tục đơn giản, nhanh chóng, lãi suất ưu đãi" },
        { img: why2, title: "Thời hạn vay linh hoạt" },
        { img: why4, title: "Hạn mức vay lớn" }
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU",
      layout: "large-left",
      small: { img: work},
      large: [
        { title: "Hồ sơ pháp lý", desc: "CMND/Hộ chiếu/CM quân nhân; Hộ khẩu; Xác nhận tạm trú; Giấy tờ xác nhận tình trạng hôn nhân." },
        { title: "Giấy tờ chứng minh thu nhập", desc: "Hợp đồng lao động/Quyết định lương và sao kê bảng lương trong vòng 03 tháng; Hoặc Hợp đồng thuê nhà và biên nhận tiền; Hoặc giấy tờ chứng minh các nguồn thu khác." },
        { title: "Các hồ sơ phương án vay vốn", desc: "Hợp đồng đặt cọc,..." },
        { title: "Các hồ sơ liên quan tới tài sản thế chấp", desc: "Giấy chứng nhận quyền sở hữu,..." },
      ],
    },

    {
      type: "form-cards",
      title: "HƯỚNG DẪN ĐĂNG KÝ - VAY KINH DOANH TRUNG DÀI HẠN",
      image: click1,
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
          title: "1. Tôi có cần chứng minh thành tựu và kinh nghiệm kinh doanh để được vay không?",
          content: "Không cần chứng minh thành tựu, tuy nhiên về kinh nghiệm kinh doanh yêu cầu hoạt động trong lĩnh vực SXKD liên tục tối thiểu 12 tháng"
        },
        {
          title: "2. Tôi có cần nộp hồ sơ, kế hoạch kinh doanh cho Ngân hàng hay không?",
          content: "Có. Đối với mục đích vay để SXKD KH cần có phương án, kế hoạch kinh doanh cho Ngân hàng."
        }
      ]
    },
  ],
}
