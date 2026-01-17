import Home_2 from "../assets/images/Home-2.png"
import Home_3 from "../assets/images/Home-3.png"
import Home_4 from "../assets/images/Home-4.png"
import Home_5 from "../assets/images/Home-5.png"
import { Link } from "react-router-dom"

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* CARD 1 – 7 CỘT */}
        <Link to="/chi-tieu#section-thanh-toan-quoc-te" className="md:col-span-7">
          <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${Home_2})` }}
          >
            <div className="mt-auto p-8 text-black">
              <h3 className="text-[30px] font-semibold mb-4">
                Dịch vụ thanh toán quốc tế
              </h3>
              <p className="text-sm mb-6 max-w-xl">
                Với mong muốn hỗ trợ tối đa nhu cầu chuyển nguồn thu hợp pháp của cá nhân là người không cư trú, người cư trú là người nước ngoài ra nước ngoài, đem đến giải pháp chuyển tiền linh hoạt, đa dạng và hiệu quả nhất cho các khách hàng, đáp ứng kịp thời nhu cầu tài chính và tạo tâm lý an tâm, vững vàng cho khách hàng của MBV.
              </p>
              <span className="font-semi">Tìm hiểu thêm →</span>
            </div>
          </div>
        </Link>

        {/* CARD 2 – 5 CỘT */}
        <Link to="/tiet-kiem/tiet-kiem-co-ky-han/tien-gui-tiet-kiem-tra-lai-cuoi-ky" className="md:col-span-5">
          <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${Home_3})` }}
          >
            <div className="mt-auto p-8 text-black">
              <h3 className="text-[30px] font-semibold mb-4">
                Gửi tiết kiệm trả lãi cuối kỳ
              </h3>
              <p className="text-sm mb-6 max-w-md">
                Tiết kiệm trả lãi cuối kỳ là hình thức gửi tiền tiết kiệm có kỳ hạn, trong đó khách hàng thỏa thuận với MBV về thời hạn gửi nhất định và được hưởng lãi suất tương ứng với thời hạn theo quy định của MBV. Toàn bộ gốc và lãi của khoản tiền gửi sẽ được thanh toán vào ngày đáo hạn.
              </p>
              <span className="font-semi">Tìm hiểu thêm →</span>
            </div>
          </div>
        </Link>

        {/* CARD 3 – 5 CỘT */}
        <Link
          to="https://apps.apple.com/vn/app/modern-bank-vietnam/id1469028843"
          className="md:col-span-5"
        >
          <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${Home_4})` }}
          >
            <div className="mt-auto p-8 text-black">
              <h3 className="text-[30px] font-semibold mb-4">
                Ứng dụng MBV Bank
              </h3>
              <p className="text-sm mb-6 max-w-md">
                App MBV Bank là ứng dụng dịch vụ Ngân hàng điện tử được cài đặt trên điện thoại thông minh, máy tính bảng cho phép khách hàng thực hiện các giao dịch tài chính và nhiều tiện ích gia tăng khác do MBV cung cấp.
              </p>
              <span className="font-semi">Tìm hiểu thêm →</span>
            </div>
          </div>
        </Link>

        {/* CARD 4 – 7 CỘT */}
        <Link
          to="/vay/vay-bat-dong-san/vay-mua-nha-du-an"
          className="md:col-span-7"
        >
          <div
            className="relative rounded-[32px] min-h-[500px] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${Home_5})` }}
          >
            <div className="mt-auto p-8 text-black">
              <h3 className="text-[30px] font-semibold mb-4">
                Cho vay mua nhà dự án
              </h3>
              <p className="text-sm mb-6 max-w-xl">
                Dành cho khách hàng cá nhân có nhu cầu vay vốn để mua căn hộ chung cư/nhà liền kề/biệt thự tại các dự án xây dựng nhà ở.
              </p>
              <span className="font-semi">Tìm hiểu thêm →</span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  )
}
