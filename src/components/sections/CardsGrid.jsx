const COL_MAP = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
}

export default function CardsGrid({ title, cols = 4, items = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {title && (
        <h2 className="text-[25px] font-bold text-center mb-10">
          {title}
        </h2>
      )}

      <div
        className={`grid grid-cols-1 ${
          COL_MAP[cols] ?? "md:grid-cols-4"
        } gap-8`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="relative h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-[600px] object-top object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
              {item.title && (
                <h3 className="text-lg text-red-600 font-semibold mb-2 leading-snug">
                  {item.title}
                </h3>
              )}

              {item.desc && (
                <p className="text-sm text-black leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
