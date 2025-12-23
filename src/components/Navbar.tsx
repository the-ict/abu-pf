import { PRODUCT_INFO } from "../constants/data"

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between padding-30">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={PRODUCT_INFO.logo}  alt="this is logo" className="w-30 h-20" />
      </div>
      <div>
        <ul className="center gap-15 text-[14px]">
          <li className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Bosh sahifa</li>
          <li className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Xizmatlar</li>
          <li className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Portfolio</li>
          <li className="cursor-pointer hover:text-[#5454D4] transition-all duration-150 text-[#FFFFFF]/70">Men haqimda</li>
        </ul>
      </div>
      <div>
        <button className="text-white px-5 py-2 cursor-pointer rounded-[10px] border text-[14px] border-white bg-transparent hover:bg-[#ffff] hover:text-black hover:border-white transition-all duration-150">Bog'lanish</button>
      </div>
    </div>
  )
}
