export default function FormCards({ title, image, accordion = [], form, support }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* TITLE */}
      <h2 className="text-[25px] font-bold text-center mb-12">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CARD 1 – IMAGE */}
        <div className="md:col-span-1 rounded-3xl bg-white bg-cover bg-center">
          <img src={image} alt="" className="h-full w-full object-contain" />
        </div>

        {/* CARD 2 – ACCORDION */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow p-6">
          {accordion.map((item, i) => (
            <details key={i} className="mb-4 group">
              <summary className="cursor-pointer font-semibold text-[20px] text-red-600 flex justify-between items-center">
                {item.title}
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>

              <div className="mt-3 text-black text-[15px] leading-relaxed">
                {typeof item.content === "string" && <p>{item.content}</p>}

                {item.content?.type === "list" && (
                  <ul className="list-disc pl-5 space-y-2">
                    {item.content.items.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>

              {i !== accordion.length - 1 && (
                <hr className="my-4 border-gray-200" />
              )}
            </details>
          ))}
        </div>

        {/* CARD 3 – FORM */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow p-6">
          <h3 className="text-[15px] font-semibold mb-4">{form.title}</h3>

          {form.fields.includes("name") && (
            <input
              className="w-full mb-4 p-3 border rounded-lg"
              placeholder="Họ tên"
            />
          )}

          {form.fields.includes("e-mail") && (
            <input
              className="w-full mb-4 p-3 border rounded-lg"
              placeholder="Email của bạn"
            />
          )}
          {form.fields.includes("phone") && (
            <input
              className="w-full mb-4 p-3 border rounded-lg"
              placeholder="Số điện thoại"
            />
          )}

          <button className="w-full py-3 bg-red-600 text-white rounded-full font-semibold">
            {form.submitText}
          </button>
          {support && (
          <div className="mt-6 pt-4 border-t flex items-center gap-3">
            <img
              src={support.logo}
              alt="Hotline"
              className="w-8 h-8 object-contain"
            />

            <div className="text-sm">
              <p className="text-gray-600">{support.label}</p>
              <a
                href={`tel:${support.phone}`}
                className="font-bold text-black text-base"
              >
                {support.phone}
              </a>
            </div>
          </div>
        )}

        </div>
      </div>
    </section>
  )
}
