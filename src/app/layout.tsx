import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-ibm-plex-sans-condensed",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Intiimina",
    template: "%s | Intiimina"
  },
  description: "Ohjausta, neuvontaa ja asiantuntijuutta - rohkeasti, lempeästi ja inhimillisesti",
  metadataBase: new URL('https://intiimina.fi'),
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    url: 'https://intiimina.fi',
    siteName: 'Intiimina',
    title: 'Intiimina',
    description: 'Ohjausta, neuvontaa ja asiantuntijuutta  - rohkeasti, lempeästi ja inhimillisesti',
    images: [
      {
        // fallback to an existing public asset; replace with dedicated OG image when available
        url: '/yrittajatLogo.png',
        width: 1200,
        height: 630,
        alt: 'Intiimina - Ohjausta ja neuvontaa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intiimina',
    description: 'Ohjausta, neuvontaa ja asiantuntijuutta - rohkeasti, lempeästi ja inhimillisesti',
  images: ['/yrittajatLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.svg',
    apple: [
      { url: '/logo.svg' },
    ],
  },
  manifest: '/manifest.json',
  keywords: ['seksuaalineuvonta', 'työnohjaus', 'koulutus', 'konsultaatio','neuvonta','lastensuojelu','sosiaali- ja terveysala','mielenterveys- ja päihdetyö'],
  authors: [{ name: 'Intiimina' }],
  alternates: {
    canonical: 'https://intiimina.fi',
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
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
