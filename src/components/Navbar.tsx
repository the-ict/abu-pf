import { useEffect, useState } from "react"
import { PRODUCT_INFO } from "../constants/data"

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const phoneNumber = "+998905661107"
  const telegramUrl = "https://t.me/akbarov_abdulloh"

  const closeContactModal = () => setIsContactOpen(false)

  useEffect(() => {
    if (!isContactOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isContactOpen])

  return (
    <>
      <div className="container flex items-center justify-between padding-30 mx-auto px-4 bg-[#04040c]">
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <img src={PRODUCT_INFO.logo} alt="this is logo" className="w-24 md:w-30 h-auto" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-15 text-[14px]">
            <li><a href="#" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Bosh sahifa</a></li>
            <li><a href="#services" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Ko'nikmalarim</a></li>
            <li><a href="#portfolio" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Portfolio</a></li>
            <li><a href="#experience" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Tajriba</a></li>
          </ul>
        </div>
        <div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-white px-4 md:px-5 py-2 cursor-pointer rounded-[10px] border text-[13px] md:text-[14px] border-white bg-transparent hover:bg-[#ffff] hover:text-black hover:border-white transition-all duration-150 whitespace-nowrap"
          >
            Bog'lanish
          </button>
        </div>
      </div>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          onClick={closeContactModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[520px] bg-[#ffffff]/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Bog'lanish</h3>
                <p className="mt-2 text-[#ffffff]/60">Telefon yoki Telegram orqali bog'laning</p>
              </div>
              <button
                onClick={closeContactModal}
                className="shrink-0 cursor-pointer w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center"
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center">
                <a
                  href={phoneNumber ? `tel:${phoneNumber}` : undefined}
                  className="mt-2 flex items-center gap-2 text-lg font-semibold hover:text-[#5454D4] transition-colors duration-150"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Telefon</span>
                </a>
              </div>


              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center">
                <a
                  href={telegramUrl || undefined}
                  target={telegramUrl ? "_blank" : undefined}
                  rel={telegramUrl ? "noreferrer" : undefined}
                  className="mt-2 flex items-center gap-2 text-lg font-semibold hover:text-[#5454D4] transition-colors duration-150 break-all"
                >
                  <i className="fa-brands fa-telegram"></i>
                  <span>Telegram</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={closeContactModal}
                  className="px-6 py-3 cursor-pointer rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
