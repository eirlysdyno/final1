import mblife1 from "../assets/images/mblife-1.png"
import anvui1 from "../assets/images/anvui-1.jpg"
import anvui2 from "../assets/images/anvui-2.jpg"
import anvui3 from "../assets/images/anvui-3.jpg"

export const AnVuiTronDoi = {
  header: {
    image: mblife1,
    breadcrumb: [
    { label: "Trang chủ", href: "/" },
    { label: "Khách hàng cá nhân"},
    { label: "Bảo hiểm", href: "/bao-hiem"},
    { label: "Bảo hiểm MB Life"},
    { label: "An Vui Trọn Đời"},

  ]
  },

  sections: [
    {
      type: "cards-grid",
      cols: 3,
      items: [
        { img: anvui1, title: "Tích lũy vững chắc" },
        { img: anvui2, title: "Bảo vệ bền bỉ" },
        { img: anvui3, title: "Linh hoạt hoạch định tài chính" },
      ],
    }
  ],
}
