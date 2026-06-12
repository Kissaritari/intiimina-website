import type { Metadata } from "next";
import { Montserrat, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Intiimina",
    template: "%s | Intiimina",
  },
  description:
    "Ohjausta, neuvontaa ja asiantuntijuutta - rohkeasti, lempeästi ja inhimillisesti",
  metadataBase: new URL("https://intiimina.fi"),
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "https://intiimina.fi",
    siteName: "Intiimina",
    title: "Intiimina",
    description:
      "Ohjausta, neuvontaa ja asiantuntijuutta  - rohkeasti, lempeästi ja inhimillisesti",
    // Intentionally no default images here. Individual pages/components
    // should provide an `openGraph.images` entry when they have a specific
    // visual to use. This avoids social previews defaulting to the site logo.
  },
  twitter: {
    card: "summary_large_image",
    title: "Intiimina",
    description:
      "Ohjausta, neuvontaa ja asiantuntijuutta - rohkeasti, lempeästi ja inhimillisesti",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    apple: [{ url: "/logo.svg" }],
  },
  manifest: "/manifest.json",
  keywords: [
    "seksuaalineuvonta",
    "työnohjaus",
    "koulutus",
    "konsultaatio",
    "neuvonta",
    "lastensuojelu",
    "sosiaali- ja terveysala",
    "mielenterveys- ja päihdetyö",
  ],
  authors: [{ name: "Intiimina" }],
  alternates: {
    canonical: "https://intiimina.fi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body
        className={`${montserrat.variable} ${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}


