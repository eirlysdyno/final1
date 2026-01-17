import SectionRenderer from "../components/sections/SectionRenderer"
import Footer from "../components/Footer"
import PageWrapper from "../layout/PageWrapper"
import logo from "/src/assets/images/logo-mbv.png"

export default function BaoHiemDetail({ config }) {
  return (
    <PageWrapper bg="bg-[#f1e8e0]">
      
      {/* ===== HEADER FIXED ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center">
          <img src={logo} alt="Logo MBV" className="h-10 w-auto" />
        </div>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="mb-[150px]">
        {/* HERO */}
        <SectionRenderer section={{ type: "hero", ...config.header }} />

        {/* SECTIONS */}
        {config.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </main>

      <Footer />
    </PageWrapper>
  )
}
