import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import thanhtoan1 from "../assets/images/thanhtoannoidia-3.png"
import thanhtoan2 from "../assets/images/thanhtoan.png"
import hotline from "../assets/images/hotline.png"


export const ThanhToan= {
  header: {
    title: "",
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Chi tiêu", href: "/chi-tieu"},
    { label: "Thanh toán nội địa"},
    { label: "Thanh toán hàng hóa dịch vụ trong nước"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - THANH TOÁN HÀNG HÓA DỊCH VỤ TRONG NƯỚC",
      cols: 3,
      items: [
        { img: why1, title: "Miễn phí phát hành"},
        { img: why2, title: "Ưu đãi dành cho thanh toán các sản phẩm liên quan đến mua sắm, ẩm thực, du lịch, làm đẹp, giáo dục" },
        { img: why3, title: "Miễn lãi tới 45 ngày" }
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - THANH TOÁN HÀNG HÓA DỊCH VỤ TRONG NƯỚC",
      layout: "large-left",
      small: { img: thanhtoan1},
      large: [
        { title: "CCCD còn hiệu lực" },
        { title: "Tùy vào từng sản phẩm thẻ tín dụng, khách hàng cần cung cấp thêm hồ sơ chứng minh tài chính (sổ tiết kiệm, sao kê lương,…), chứng minh cư trú,…" },
      ],
    },

    {
      type: "form-cards",
      title: "CÁC BƯỚC ĐĂNG KÝ - THANH TOÁN HÀNG HÓA DỊCH VỤ TRONG NƯỚC",
      image: thanhtoan2,
      accordion: [
        { title: "Khách hàng mang CCCD đến quầy giao dịch, cung cấp hồ sơ và điền thông tin vào phiếu đề nghị phát hành thẻ TDQT",},
        { title: "Ngân hàng sẽ thẩm định hồ sơ của khách hàng và thông báo kết quả/giao thẻ cho khách hàng."}
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
          title: "1. Mở thẻ tín dụng quốc tế MBV có miễn phí không?",
          content: "Mở thẻ tín dụng quốc tế MBV hoàn toàn miễn phí, khách hàng còn được ưu đãi phí thường niên theo chương trình của MBV từng thời kỳ"
        }
      ]
    }
  ],
}
