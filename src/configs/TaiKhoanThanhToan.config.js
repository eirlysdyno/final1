import tktt from "../assets/images/tktt.jpg"
import why1 from "../assets/images/why-1.jpg"
import why2 from "../assets/images/why-2.jpg"
import why3 from "../assets/images/why-3.jpg"
import why4 from "../assets/images/why-4.jpg"
import tk from "../assets/images/tk.png"
import giaiphap from "../assets/images/taikhoan-4.png"
import hotline from "../assets/images/hotline.png"


export const TaiKhoanThanhToan = {
  header: {
    title: "Tài khoản thanh toán với các gói lợi ích vượt trội, linh hoạt theo nhu cầu của bạn",
    image: tktt,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Chi tiêu", href: "/chi-tieu"},
    { label: "Tài khoản thanh toán"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "TẠI SAO NÊN CHỌN - TÀI KHOẢN THANH TOÁN",
      cols: 4,
      items: [
        { img: why1, title: "Đăng ký tài khoản chỉ trong 1 phút", desc: "Kích hoạt tài khoản trong 1 phút ngay trên ứng dụng di động, chấp nhận mọi loại CCCD..." },
        { img: why2, title: "Giao dịch ngân hàng số hoàn toàn miễn phí, thêm nhiều ưu đãi vượt trội." },
        { img: why3, title: "Nắm bắt vị thế dẫn đầu công nghệ số", desc: "Quản lý tài khoản tiện lợi, an toàn với MBV Mobile và các tính năng tối ưu." },
        { img: why4, title: "Hỗ trợ toàn diện mọi lúc mọi nơi 24/7", desc: "MBV luôn sẵn sàng đồng hành, hỗ trợ và giải đáp thắc mắc của bạn mọi lúc, mọi nơi." },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU - TÀI KHOẢN THANH TOÁN",
      layout: "large-left",
      small: { img: tk},
      large: [
        { title: "Đăng ký mở tài khoản", desc: ["Lựa chọn tài khoản số đẹp và hoàn tất hồ sơ mở tài khoản dễ dàng. Hỗ trợ: Bạn sẽ được hỗ trợ tận tâm qua điện thoại ngay khi cần, đảm bảo quy trình liền mạch và nhanh chóng."] },
        { title: "Xác thực tài khoản nhanh chóng với eKYC trực tuyến.", desc: "Bạn cần hoàn tất quy trình eKYC, đảm bảo an toàn và tiện lợi cho cá nhân." },
        { title: "Hoàn tất mở tài khoản chỉ trong vài bước.", desc: "Nhận thông tin tài khoản qua email và SMS, đăng nhập ngân hàng số và bắt đầu giao dịch ngay lập tức!" },
      ],
    },

    {
      type: "form-cards",
      title: "HƯỚNG DẪN ĐĂNG KÝ - TÀI KHOẢN THANH TOÁN",
      image: tk,
      accordion: [
        {
          title: "Giới thiệu",
          content:
            "Tính năng \"Truy vấn hồ sơ giao dịch\" trên App MBV  cho phép khách hàng tra cứu hồ sơ từng giao dịch tại MBV một cách nhanh chóng, tiện lợi. Không cần đến Phòng giao dịch hay trả phí sao kê, khách hàng có thể truy vấn hồ sơ miễn phí ngay trên app, vào bất kỳ thời điểm nào trong ngày.",
        },
        {
          title: "Lợi ích",
          content:
           {
            type: "list",
            items: [
                "Thực hiện online 24/7, không cần đến quầy giao dịch",
                "Không yêu cầu xuất trình giấy tờ, hồ sơ",
                "Không mất phí sao kê",
                "Tra cứu hồ sơ nhanh chóng trong 1 phút",
                "Có thể tải và chia sẻ hồ sơ theo nhu cầu"
            ]
        }
        },
        {
          title: "Đối tượng",
          content:
           {
            type: "list",
            items: [
                "Áp dụng cho khách hàng có App MBV và có giao dịch vay vốn kênh online.",
                "Phạm vi tra cứu: một tháng tính đến ngày tra cứu.",
                "Các hồ sơ có thể tra cứu bao gồm: hợp đồng vay vốn, văn bản nhận nợ, phụ lục điều chỉnh."
            ]
        }
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
          title: "1. Tôi phải làm gì để lấy lại mật khẩu ngân hàng điện tử (E-banking)?",
          content:[
            {
            type: "paragraph",
            text: "Quý khách có thể yêu cầu cấp lại mật khẩu dịch vụ ngân hàng điện tử thông qua các cách sau đây:"
            },
            {
            type: "paragraph",
            text: "Nếu đã có thẻ thanh toán MBV, quý khách chỉ cần truy cập ngân hàng số MBV > chọn mục \"Quên mật khẩu\" hiển thị trên trang đầu tiên > thao tác xác nhận thông tin CMT/CCCD và thẻ thanh toán theo hướng dẫn để được cấp lại mật khẩu."
            },
            {
            type: "paragraph",
            text: "Liên hệ hotline 1900545426 qua số điện thoại quý khách đã đăng ký với MBV đến chi nhánh gần nhất để được hỗ trợ."
            },
            {
            type: "paragraph",
            text: "Mang theo giấy tờ tùy thân (CMT/CCCD/Hộ chiếu) đã đăng ký với MBV đến chi nhánh gần nhất để được hỗ trợ."
            }
          ]
        }
      ]
    },
     
    {
      type: "others",
      title: "GIẢI PHÁP CHUYỂN TIỀN",
      cols: 2,
      items: [
        { img: giaiphap, title: "Gói giải pháp", desc: ["Mở tài khoản trực tuyến nhanh chóng với thủ tục siêu đơn giản. Thanh toán, chuyển tiền 24/7 và chủ động kiểm soát truy vấn giao dịch trên Ngân hàng số. Tối ưu ..."] },
        { img: giaiphap, title: "VietQR trên App MBV - Giải pháp thanh toán tiện lợi cho tiểu thương", desc:"Ưu đãi dành cho khách hàng doanh nghiệp. Giải pháp nhận thanh toán QR và vận hành cửa hàng. Giới thiệu doanh nghiệp. Tối ưu hóa dòng tiền..." }
      ],
    },
  ],
}
