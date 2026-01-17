export default function CardsGrid({ title, cols = 4, items }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-[25px] font-bold text-center mb-10">{title}</h2>

      <div
        className={`
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-${cols}
        `}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow group"
          >
            {/* IMAGE FULL CARD */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* CONTENT ON IMAGE */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end text-white">
              <h3 className="font-semibold text-[30px] mb-2">
                {item.title}
              </h3>

              {item.desc && (
                <p className="text-[15px] text-white/90 leading-relaxed">
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
