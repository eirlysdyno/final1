export default function HeroSection({ title, subtitle, image, breadcrumb }) {
  return (
    <section
      className="relative min-h-[320px] bg-cover bg-top"
      style={{ backgroundImage: image ? `url(${image})` : "none" }}
    >
      <div className="relative z-10 w-full px-14 pt-[80px]">
        
        {/* ===== BREADCRUMB ===== */}
        {breadcrumb && (
          <nav className="text-sm font-mont mb-4 mt-14">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1
              return (
                <span key={index}>
                  <span
                    className={
                      isLast
                        ? "text-black font-semibold"
                        : "text-gray-600"
                    }
                  >
                    {item.label}
                  </span>
                  {index < breadcrumb.length - 1 && (
                    <span className="mx-2 text-gray-400">{">"}</span>
                  )}
                </span>
              )
            })}
          </nav>
        )}

        {/* ===== TITLE ===== */}
        <h1 className="font-mont text-[25px] font-bold text-black max-w-3xl mt-10 leading-tight">
          {title}
        </h1>
        <h2 className="font-mont text-[22px] text-black max-w-2xl mt-10 leading-tight">
          {subtitle}
        </h2>
      </div>
    </section>
  )
}
