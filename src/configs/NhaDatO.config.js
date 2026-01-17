import nhadato from "../assets/images/vaynhadato.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import click1 from "../assets/images/click-1.png"
import click2 from "../assets/images/click-2.png"
import hotline from "../assets/images/hotline.png"


export const NhaDatO = {
  header: {
    title: "Dễ dàng sở hữu nhà nhà đất, căn hộ nhanh chóng",
    subtitle: "Giúp khách hàng tối ưu hóa dòng tiền",
    image: nhadato,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Vay", href: "/vay"},
    { label: "Vay bất động sản"},
    { label: "Vay mua nhà ở, đất ở"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "LỢI ÍCH NỔI BẬT",
      cols: 4,
      items: [
        { img: why1, title: "Thủ tục đơn giản, nhanh chóng, lãi suất ưu đãi" },
        { img: why2, title: "Thời hạn vay lên tới 420 tháng (30 năm)" },
        { img: why3, title: "Hạn mức lên đến 80% tổng nhu cầu vốn" },
        { img: why4, title: "Thời gian ân hạn gốc lên tới 60 tháng (tùy theo chương trình cụ thể của MBV từng thời kỳ)" },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU",
      layout: "large-left",
      small: { img: click1},
      large: [
        { title: "Hồ sơ pháp lý", desc: "CMND/Hộ chiếu/CM quân nhân; Hộ khẩu; Xác nhận tạm trú; Giấy tờ xác nhận tình trạng hôn nhân." },
        { title: "Giấy tờ chứng minh thu nhập", desc: "Hợp đồng lao động/Quyết định lương và sao kê bảng lương trong vòng 03 tháng; Hoặc Hợp đồng thuê nhà và biên nhận tiền; Hoặc giấy tờ chứng minh các nguồn thu khác." },
        { title: "Các hồ sơ phương án vay vốn", desc: "Hợp đồng đặt cọc,..." },
        { title: "Các hồ sơ liên quan tới tài sản thế chấp", desc: "Giấy chứng nhận quyền sở hữu,..." },
      ],
    },

    {
      type: "form-cards",
      title: "HƯỚNG DẪN ĐĂNG KÝ - VAY MUA NHÀ DỰ ÁN",
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
          title: "1. Tôi không có tài sản để thế chấp cho khoản vay mua nhà, tôi có thể dùng tài sản của bố mẹ tôi cho khoản vay này được không?",
          content: "Được, tài sản để thế chấp thuộc sở hữu của chính Khách hàng hoặc người thân của Khách hàng bao gồm ông bà, bố mẹ, con đẻ, con nuôi, anh chị em ruột."
        },
        {
          title: "2. Trong trường hợp đến hạn thanh toán khoản vay, tôi chưa kịp thanh toán thì có bị phạt không?",
          content: "Có. Phạt chậm trả lãi trên số dư lãi chậm trả tương ứng với thời gian chậm trả"
        },
        {
          title: "3. Có yếu tố nào giúp giảm lãi suất vay hay không?",
          content: "Giảm lãi suất vay phụ thuộc vào lãi suất thị trường và lãi suất huy động đầu vào của ngân hàng, việc điều chỉnh lãi suất sẽ được quy định cụ thể tại các HĐCV giữa Ngân hàng và KH."
        }
      ]
    },
  ],
}
