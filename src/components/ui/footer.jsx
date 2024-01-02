import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <hr className="my-12 h-0.5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-50" />
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="w-20 h-20" aria-label="Imamic">
                  <Image width={28} height={28} className="w-28 h-28" src="/../../images/FS LOGO.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Headquarters</h6>
                <ul>
                  <li className="text-gray-400 font-medium mb-1">
                    Biashara Plaza
                  </li>
                  <li className="text-gray-400 font-medium mb-1">
                    Suite No.10, Ground Floor
                  </li>
                  <li className="text-gray-400 font-medium mb-1">Tel: +254722768679</li>
                </ul>
              </div>
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">About us</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      About Organization
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/employers"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Employers
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/jobseekers"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Job Seekers
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/availablejobs"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Available Jobs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; Powered by MegDev. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
