import { Link, useParams } from "react-router-dom"
import { newsData } from "../data/newsData"
import Footer from "../components/Footer"
import logo from "../assets/images/logo-mbv.png"
import PageWrapper from "../layout/PageWrapper"
import logonews from "/src/assets/images/logo-tintuc.png"


export default function NewsDetails() {
  const { slug } = useParams()
  const currentNews = newsData.find((item) => item.slug === slug)

  if (!currentNews) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Không tìm thấy bài viết
      </div>
    )
  }

  const relatedNews = newsData.filter(item => item.slug !== slug)

  return (
      <PageWrapper bg="bg-[#f6e3e3]">
            {/* ===== NAVBAR ===== */}
      <div className="sticky top-0 z-30 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo MBV" className="h-10" />
            <span className="font-mont text-[12px] text-gray-600 uppercase">
              Khách hàng cá nhân
            </span>
          </div>

          <nav className="flex items-center gap-6 font-mont text-[14px]">
            <Link to="/tin-tuc" className="relative font-semibold">
              Tin tức - Ưu đãi
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
            </Link>
            <Link to="/chi-tieu">Chi tiêu</Link>
            <Link to="/tiet-kiem">Tiết kiệm</Link>
            <Link to="/vay">Vay</Link>
            <Link to="/bao-hiem">Bảo hiểm</Link>
            <Link
              to="/"
              className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full"
            >
              Tải App MBV
            </Link>
          </nav>
        </div>
      </div>


      {/* ===== BREADCRUMB (CÙNG NỀN TRANG) ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="text-sm text-gray-600 font-mont">
          Trang chủ &gt; Khách hàng cá nhân &gt; Tin tức - Ưu đãi &gt;{" "}
          <span className="text-black font-semibold">
            {currentNews.title}
          </span>
        </div>
      </div>

      {/* ===== CONTENT BOX ===== */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-10 shadow">
          <h1 className="text-[23px] mb-6">
            {currentNews.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
            <img src={currentNews.logo} className="h-5" />
            <span>{currentNews.category}</span>
            <span>-</span>
            <span>{currentNews.date}</span>
          </div>

          <img
            src={currentNews.image}
            alt={currentNews.title}
            className="w-full rounded-xl mb-8"
          />

          <div className="text-gray-800 leading-relaxed text-[16px]">
            {currentNews.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-4 indent-6">
                    {block.text}
                  </p>
                )
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              }

              if (block.type === "link") {
                return (
                  <a
                    key={index}
                    href={block.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block mb-4 text-red-600 underline"
                  >
                    {block.label}
                  </a>
                )
              }

              return null
            })}
          </div>
        </div>
      </div>

      {/* ===== RELATED NEWS (HORIZONTAL SCROLL) ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-xl font-bold mb-6 center">CÁC BÀI VIẾT LIÊN QUAN</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {relatedNews.map(item => (
            <Link
              key={item.id}
              to={`/tin-tuc/${item.slug}`}
              className="min-w-[280px] bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                className="h-40 w-full object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-1">
              <div>
                <h3 className="font-mont font-bold text-base mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className="text-sm text-black line-clamp-3">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* LOGO Ở ĐÁY – KHÔNG BỊ TỤT */}
              <span className="flex items-center gap-1 text-sm text-gray-600 mt-auto pt-4">
                <img src={logonews} className="w-5 h-5" />
                Tin tức
              </span>
            </div>


            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </PageWrapper>
  )
}
