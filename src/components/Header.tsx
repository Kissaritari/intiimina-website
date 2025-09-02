"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<"services" | "about" | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropdown = (which: "services" | "about") => {
    setOpenDropdown((prev) => (prev === which ? null : which));
  };
  return (
    <header className="sticky top-0 w-full py-6 px-4 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl tracking-tight text-gray-800 text-shadow-md header-font">
          <Link href="/" className="inline-flex items-center">
            Intii<span className="text-[#b4a4f0]">minä</span>
          </Link>
        </h2>
          {/* Hamburger button (only on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

       <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          }  flex-col sm:flex sm:flex-row gap-4 sm:gap-6 text-lg absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow sm:shadow-none px-4 sm:px-0 py-4 sm:py-0`}
        >
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center gap-1 cursor-pointer hover:text-[#c1e5f9] transition-colors ${
                openDropdown === "services" ? "text-[#c1e5f9]" : ""
              }`}
            >
              Palvelut
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "services" ? "transform rotate-180" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                <Link
                  href="/palvelut/tyonohjaus"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Työnohjaus
                </Link>
                <Link
                  href="/palvelut/konsultaatiot"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Konsultaatiot ja sparraukset
                </Link>
                <Link
                  href="/palvelut/koulutukset"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Koulutukset
                </Link>
                <Link
                  href="/palvelut/seksuaalineuvonta"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Seksuaalineuvonta
                </Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("about")}
              className={`flex items-center gap-1 cursor-pointer hover:text-[#b4a4f0] transition-colors ${
                openDropdown === "about" ? "text-[#b4a4f0]" : ""
              }`}
            >
              Mico Ylimäki
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "about" ? "transform rotate-180" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openDropdown === "about" && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                <Link
                  href="/mico/cv"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Ansioluettelo
                </Link>
                <Link
                  href="/mico/about"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Minusta ja työotteestani
                </Link>
                    <Link
                  href="/mico/media"
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Media
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="hover:text-[#c8e17a] transition-colors">
            Blogi
          </Link>
          <Link
            href="/yhteystiedot"
            className="hover:text-[#f7a278] transition-colors"
          >
            Yhteystiedot
          </Link>
          <Link
            href={"/materiaalit"}
            className="hover:text-[#f7a278] transition-colors"
          >
            Materiaalit
          </Link>
        </nav>
      </div>
    </header>
  );
}
