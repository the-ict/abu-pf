import { PRODUCT_INFO } from "../constants/data"

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between padding-30 mx-auto px-4">
      <div className="flex items-center gap-2 cursor-pointer shrink-0">
        <img src={PRODUCT_INFO.logo} alt="this is logo" className="w-24 md:w-30 h-auto" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-6 xl:gap-15 text-[14px]">
          <li><a href="#" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Bosh sahifa</a></li>
          <li><a href="#services" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Xizmatlar</a></li>
          <li><a href="#portfolio" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Portfolio</a></li>
          <li><a href="#experience" className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Tajriba</a></li>
        </ul>
      </div>
      <div>
        <button className="text-white px-4 md:px-5 py-2 cursor-pointer rounded-[10px] border text-[13px] md:text-[14px] border-white bg-transparent hover:bg-[#ffff] hover:text-black hover:border-white transition-all duration-150 whitespace-nowrap">Bog'lanish</button>
      </div>
    </div>
  )
}
