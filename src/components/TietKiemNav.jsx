import icon1 from "/src/assets/images/logo-chitieu1.png"

export default function TietKiemNav({ active, onChange }) {
  const items = [
    { id: "co-ky-han-1", label: "TIẾT KIỆM CÓ KỲ HẠN", icon: icon1 },
    { id: "online", label: "TIẾT KIỆM ONLINE", icon: icon1 },
    { id: "co-ky-han-2", label: "TIẾT KIỆM CÓ KỲ HẠN", icon: icon1 },
    { id: "tich-luy", label: "TIẾT KIỆM TÍCH LŨY MỤC TIÊU", icon: icon1 },
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
