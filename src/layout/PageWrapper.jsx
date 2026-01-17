export default function PageWrapper({ bg, children }) {
  return (
    <div className={`${bg} w-full`}>
      {children}
    </div>
  )
}
