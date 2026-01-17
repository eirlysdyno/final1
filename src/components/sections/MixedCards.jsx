export default function MixedCards({ title, small, large}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-[25px] font-bold text-center mb-10">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 rounded-3xl bg-cover bg-top p-8"
          style={{ backgroundImage: `url(${small.img})` }}>
        </div>

        <div className="md:col-span-8 space-y-6">
          {large.map((l, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white shadow">
              <h4 className="font-semibold text-[20px] text-red-600">{l.title}</h4>
              <p className="text-sm text-[20px] text-black">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
