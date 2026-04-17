const messages = [
  "Frete grátis para compras acima de R$ 299",
  "Parcele em até 12x · Padrão ISO 9001 Internacional",
  "Your Health, Our Mission.",
]

const AnnouncementBar = () => {
  return (
    <div className="bg-brand-brown text-brand-beige font-jakarta text-xs tracking-wide">
      <div className="content-container flex items-center justify-center py-2.5 gap-x-8 overflow-hidden">
        {messages.map((msg, i) => (
          <span
            key={i}
            className={`whitespace-nowrap ${
              i > 0 ? "hidden small:inline-block" : ""
            }`}
          >
            {msg}
            {i < messages.length - 1 && (
              <span className="ml-8 text-brand-beige/40 hidden small:inline">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementBar
