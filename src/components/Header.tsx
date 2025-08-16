"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full py-6 px-4 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl tracking-tight text-gray-800 text-shadow-md header-font">
          Intii<span className="text-[#b4a4f0]">minä</span>
        </h2>
        <nav className="flex gap-6 text-lg">
          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 cursor-pointer hover:text-[#c1e5f9] transition-colors ${
                servicesOpen ? 'text-[#c1e5f9]' : ''
              }`}
            >
              Palvelut
              <svg
                className={`w-4 h-4 transition-transform ${
                  servicesOpen ? 'transform rotate-180' : ''
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
            {servicesOpen && (
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
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`flex items-center gap-1 cursor-pointer hover:text-[#b4a4f0] transition-colors ${
                aboutOpen ? 'text-[#b4a4f0]' : ''
              }`}
            >
              Mico Ylimäki
              <svg
                className={`w-4 h-4 transition-transform ${
                  aboutOpen ? 'transform rotate-180' : ''
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
            {aboutOpen && (
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
              </div>
            )}
          </div>
          <Link href="/blog" className="hover:text-[#c8e17a] transition-colors">
            Blogi
          </Link>
        </nav>
      </div>
    </header>
  );
}
