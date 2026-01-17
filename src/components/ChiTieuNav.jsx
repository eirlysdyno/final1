import icon1 from "/src/assets/images/logo-chitieu1.png"
import icon2 from "/src/assets/images/logo-chitieu2.png"

export default function ChiTieuNav({ active, onChange }) {
  const items = [
    { id: "tai-khoan", label: "TÀI KHOẢN", icon: icon1 },
    { id: "the-mbv", label: "THẺ MBV", icon: icon1 },
    { id: "noi-dia", label: "THANH TOÁN NỘI ĐỊA", icon: icon1 },
    { id: "quoc-te", label: "THANH TOÁN QUỐC TẾ", icon: icon2 },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-full shadow px-6 py-3 flex justify-between items-center">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-1 text-[11px] font-semibold transition
              ${active === item.id ? "text-red-600" : "text-gray-400"}`}
          >
            {/* ICON + LABEL */}
            <div className="flex items-center gap-2">
              <img
                src={item.icon}
                alt={item.label}
                className={`h-5 w-5 transition
                  ${active === item.id ? "opacity-100" : "opacity-50"}`}
              />

              <span className="whitespace-nowrap leading-none">
                {item.label}
              </span>
            </div>

            {/* DOT */}
            <span
              className={`w-1.5 h-1.5 rounded-full transition
                ${active === item.id ? "bg-yellow-400" : "bg-transparent"}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
