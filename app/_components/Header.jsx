import Link from "next/link"
import HeaderPhone from "./HeaderPhone"

const Header = () => {
  return (
      <header className="bg-white sticky top-0">
  <div className="mx-auto flex h-16 justify-between border-b-2 items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link className="block text-primary" href="/">
      <span className="sr-only">Home</span>
      <div className="text-lg text-black font-semibold">Socail Creator</div>
    </Link>
    <div className="flex flex-1 items-end justify-end ">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/pricing"> Pricing </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/contact-us"> Contact-us </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </Link>
          </li>
        </ul>
      </nav>
    </div>
     <HeaderPhone/>
  </div>
</header>      
  )
}

export default Header
