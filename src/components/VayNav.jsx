export default function ChiTieuNav({ active, onChange }) {
  const items = [
    { id: "tai-tai-tro", label: "VAY TÁI TÀI TRỢ"},
    { id: "bat-dong-san", label: "VAY BẤT ĐỘNG SẢN"},
    { id: "san-xuat-kinh-doanh", label: "VAY SẢN XUẤT KINH DOANH" },
    { id: "tieu-dung", label: "VAY TIÊU DÙNG"},
    { id: "mua-o-to", label: "VAY MUA Ô TÔ"},
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
            {/* LABEL */}
              <span className="whitespace-nowrap leading-none">
                {item.label}
              </span>

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
