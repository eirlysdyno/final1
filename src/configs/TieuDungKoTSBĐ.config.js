import kotsbd from "../assets/images/kotsbd.jpg"
import why1 from "../assets/images/why-1.jpg"
import why4 from "../assets/images/why-4.jpg"
import why2 from "../assets/images/why-2.jpg"
import click1 from "../assets/images/click-1.png"



export const TieuDungKoTSBĐ = {
  header: {
    title: "Dễ dàng vay vốn",
    subtitle: "Thủ tục đơn giản và nhanh chóng",
    image: kotsbd,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Vay", href: "/vay"},
    { label: "Vay tiêu dùng"},
    { label: "Vay tiêu dùng không có tài sản bảo đảm"},
  ]
  },

  sections: [
    {
      type: "cards-grid",
      title: "LỢI ÍCH NỔI BẬT",
      cols: 3,
      items: [
        { img: why1, title: "Trả nợ theo theo nhiều phương thức" },
        { img: why4, title: "Thời gian vay linh hoạt" },
        { img: why2, title: "Chứng minh qua lương chuyển khoản mà không cần có tài sản bảo đảm" },
      ],
    },

    {
      type: "mixed-cards",
      title: "HỒ SƠ YÊU CẦU",
      layout: "large-left",
      small: { img: click1},
      large: [
        { title: "Hồ sơ pháp lý", desc: "CMND/Hộ chiếu/CM quân nhân; Hộ khẩu; Xác nhận tạm trú; Giấy tờ xác nhận tình trạng hôn nhân." },
        { title: "Giấy tờ chứng minh thu nhập", desc: "Hợp đồng lao động/Quyết định lương và sao kê lương  chuyển khoản trong vòng 03 tháng" },
        { title: "Các hồ sơ phương án vay vốn", desc: "Hợp đồng đặt cọc, hợp đồng mua bán,..." },
      ],
    },
  ],
}
