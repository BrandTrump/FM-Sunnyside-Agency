import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <div className="bg-[#3dbefd]">
      <Wrapper>
        <header className="flex items-center justify-between">
          <div className="w-40 h-8 relative">
            <Image src={"/images/logo.svg"} alt="logo" fill />
          </div>

          <nav>
            <Bars3Icon className="h-8 w-8 text-white lg:hidden" />
            <div className="hidden lg:flex lg:items-center gap-8 text-white">
              <Link href={"/"} className="font-barlow">
                About
              </Link>
              <Link href={"/"} className="font-barlow">
                Services
              </Link>
              <Link href={"/"} className="font-barlow">
                Projects
              </Link>
              <button className="bg-white py-3 px-6 rounded-full text-black font-fraunces uppercase font-bold text-xs hover:text-white hover:bg-[#a5d6ee]/80 transition-colors duration-200">
                Contact
              </button>
            </div>
          </nav>
        </header>
      </Wrapper>
    </div>
  );
}

export default Navbar;
