'use client'
import Link from "next/link";
import { useState } from "react"
const HeaderPhone = () => { 
  const [isMobile,setMobile] =useState(false);
  return (
    <div className="">
      <div class="block md:hidden">
          <button onClick={()=>setMobile(v=>!v)} class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </div>    
      <nav aria-label="Global" className={isMobile?"block z-[999] transition-all md:hidden h-[100vh] fixed top-[60px] right-[0px] p-4 pt-[100px] text-white bg-gray-600 w-[100%]":"block h-[100vh] transition-all md:hidden fixed top-[60px] right-[-800px] p-4 text-white bg-priamry w-[100%]"}>
            <ul className="flex flex-col items-center gap-6 text-sm">
            <li>
                  <Link className="transition hover:text-priamry" href="/pricing"> Pricing </Link>
            </li>
            <li>
                  <Link className="transition hover:text-priamry" href="/contact-us"> Contact-us </Link>
            </li>
            <li>
                  <Link className="transition hover:text-priamry" href="/about"> About </Link>
            </li>
            </ul>
      </nav>

    </div>
  )
}

export default HeaderPhone
