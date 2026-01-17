import Header from "../components/Header"
import ProductGrid from "../components/ProductGrid"
import ExchangeRate from "../components/ExchangeRate"
import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import Home_1 from "../assets/images/Home-1.jpeg"

export default function Home() {
  return (
    <PageWrapper bg="bg-[#fdecec]">
      <Header />

      <section className="px-6 py-10">
        <img
          src={Home_1}
          alt="MBV Banner"
          className="w-full rounded-[32px]"
        />
      </section>

      <div className="mt-24 text-center">
        <p className="font-mont font-bold text-[20px] uppercase mb-6">
          Sản phẩm được yêu thích
        </p>
      </div>

      <ProductGrid />
      <ExchangeRate />
      <Footer />
    </PageWrapper>
  )
}
