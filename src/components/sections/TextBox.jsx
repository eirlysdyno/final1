export default function TextBox({ title, accordion = [] }) {
  return (
    <section className="max-w-4xl mx-auto px-3 py-20">
      {/* TITLE */}
      <h2 className="text-[25px] font-bold text-center mb-12">{title}</h2>

      <div className="grid grid-cols-1 gap-8">

        <div className="bg-white rounded-2xl shadow p-6">
          {accordion.map((item, i) => (
            <details key={i} className="mb-4 group">
              <summary className="cursor-pointer font-semibold text-[16px] flex justify-between items-center">
                {item.title}
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>

              <div className="mt-3 text-black text-[14px] leading-relaxed">
                {typeof item.content === "string" && <p>{item.content}</p>}

                {item.content?.type === "list" && (
                  <ul className="list-disc pl-5 space-y-2">
                    {item.content.items.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                )}
                {/* ARRAY CONTENT (paragraphs, future types) */}
                {Array.isArray(item.content) &&
                  item.content.map((block, idx) => {
                    if (block.type === "paragraph") {
                      return <p key={idx}>{block.text}</p>
                    }

                    return null
                  })}
              </div>


              {i !== accordion.length - 1 && (
                <hr className="my-4 border-gray-200" />
              )}
            </details>
          ))}
        </div>

        </div>
    </section>
  )
}
