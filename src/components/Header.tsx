"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<"services" | "about" | null>(
    null,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropdown = (which: "services" | "about") => {
    setOpenDropdown((prev) => (prev === which ? null : which));
  };
  return (
    <header className="sticky top-0 w-full py-6 px-4 bg-background backdrop-blur-sm shadow-md z-50 ">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl tracking-tight text-text text-shadow-md ">
          <Link href="/" className="inline-flex items-center">
            Intii<span className="text-accent">minä</span>
          </Link>
        </h2>
        {/* Hamburger button (only on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-text hover:text-text focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`
            cursor-pointer
    flex flex-col sm:flex sm:flex-row
    gap-4 sm:gap-6
    text-lg
    absolute sm:static
    top-full left-0
    w-full sm:w-auto
    bg-background sm:bg-transparent
    shadow sm:shadow-none
    px-4 sm:px-0
    py-4 sm:py-0

    transition-all duration-100 ease-out

    ${
      menuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }

    sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto
  `}
        >
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center gap-1 cursor-pointer hover:text-accent transition-colors ${
                openDropdown === "services" ? "text-accent" : ""
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
              <div className="absolute left-0 mt-2 w-64 bg-background rounded-md shadow-lg py-2 z-50 border border-secondary">
                <Link
                  href="/palvelut/tyonohjaus"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Työnohjaus
                </Link>
                <Link
                  href="/palvelut/konsultaatiot"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Konsultaatiot ja sparraukset
                </Link>
                <Link
                  href="/palvelut/koulutukset"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Koulutukset
                </Link>
                <Link
                  href="/palvelut/seksuaalineuvonta"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Seksuaalineuvonta
                </Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("about")}
              className={`flex items-center gap-1 cursor-pointer hover:text-accent transition-colors ${
                openDropdown === "about" ? "text-accent" : ""
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
              <div className="absolute left-0 mt-2 w-64 bg-background rounded-md shadow-lg py-2 z-50 border border-secondary">
                <Link
                  href="/mico/cv"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Ansioluettelo
                </Link>
                <Link
                  href="/mico/about"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Minusta ja työotteestani
                </Link>
                <Link
                  href="/mico/media"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Media
                </Link>
                <Link
                  href="/mico/references"
                  className="block px-4 py-2 hover:bg-secondary-light cursor-pointer transition-colors"
                >
                  Referenssit
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="hover:text-secondary transition-colors">
            Blogi
          </Link>
          <Link
            href="/yhteystiedot"
            className="hover:text-accent transition-colors"
          >
            Yhteystiedot
          </Link>
          <Link
            href={"/materiaalit"}
            className="hover:text-accent transition-colors"
          >
            Materiaalit
          </Link>
        </nav>
      </div>
    </header>
  );
}
