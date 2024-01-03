"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`absolute top-0 left-0 z-20 w-2/3 h-full bg-gray-800 transform ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-800 px-4 py-2 justify-center">
        <li className="text-lg py-4 flex items-center justify-center">Connect with Us</li>
          <li>
            <Link href="https://www.facebook.com/fitstarkapp" target="_blank">
              <p className="logo">
                <FaFacebook /> Facebook
              </p>
            </Link>
          </li>
          <li>
            <Link href="https://www.x.com/fitstarkapp" target="_blank">
              <p className="logo">
                <RiTwitterXLine /> X
              </p>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/fitstarkapp" target="_blank">
              <p className="logo">
                {" "}
                <FaInstagram />
                Instagram
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
                Linkedin
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
