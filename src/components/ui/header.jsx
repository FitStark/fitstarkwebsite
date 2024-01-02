import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-transparent fixed z-10 w-full sm:hidden md:hidden">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" aria-label="Cruip">
              <Image
                width={80}
                height={80}
                src="/../../images/fitstarklogo.png"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  href="https://www.facebook.com/fitstarkapp"
                  target="_blank"
                >
                  <p className="logo">
                    <FaFacebook />
                  </p>
                </Link>
              </li>
              <li>
                <Link href="https://www.x.com/fitstarkapp" target="_blank">
                  <p className="logo">
                    <RiTwitterXLine />
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/fitstarkapp"
                  target="_blank"
                >
                  <p className="logo">
                    {" "}
                    <FaInstagram />
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/fitstarkapp"
                  target="_blank"
                >
                  <p className="logo">
                    <FaLinkedinIn />
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
