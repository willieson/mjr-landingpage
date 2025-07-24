import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Script from 'next/script';
import BootstrapJs from "./components/Boostrap";
import AOSInit from "./components/AOSInit";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import FloatingWA from "./components/FloatingWA";
config.autoAddCss = false; // Disable auto CSS injection, karena kita impor manual




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT. Mitra Jaya Raya",
  description: "Temukan berbagai pilihan kayu olahan terbaik untuk kebutuhan Anda di Mitra Jaya Raya. Kami adalah distributor kayu olahan terpercaya, menyediakan produk berkualitas seperti MDF (Medium Density Fibreboard), HMR (High Moist Resistance), PB (Particle Board),  Plywood / Triplek dan lainnya.",
  keywords: ['mdf',
  'medium density fiberboard',
  'hmr',
  'high moisture resistance mdf',
  'PB',
  'particle board',
  'plywood',
  'mfm',
  'melamine faced mdf',
  'frm',
  'fire retardant mdf',
  'cdf',
  'compact density fiberboard',
  'triplek',
  'mitra jaya raya',
  'distributor kayu olahan',
  'kayu olahan',
  'jual mdf murah',
  'harga mdf terbaru',
  'mdf tahan air',
  'mdf tahan api',
  'mdf untuk furniture',
  'mdf lapis melamin',
  'mdf untuk kitchen set',
  'mdf terbaik untuk interior',
  'kayu lapis plywood',
  'jual particle board',
  'distributor triplek murah',
  'material bangunan interior',
  'bahan dasar furniture modern',
  'kayu engineered wood',
  'supplier kayu mdf jakarta',
  'supplier mdf bekasi',
  'kayu olahan untuk lemari',
  'mdf vs particle board',
  'jual hmr board anti lembab',
  'fire rated mdf board',
  'compact board untuk partisi',
  'mdf ramah lingkungan',
  'mdf finishing melamine',
  'distributor bahan furniture',
  'papan kayu pabrikan',
  'mdf kualitas ekspor',
  'kayu buatan untuk interior rumah'],
  metadataBase: new URL('https://mitrajayaraya.com'),
  openGraph: {
    title: "PT. Mitra Jaya Raya",
  description: "Temukan berbagai pilihan kayu olahan terbaik untuk kebutuhan Anda di Mitra Jaya Raya. Kami adalah distributor kayu olahan terpercaya, menyediakan produk berkualitas seperti MDF (Medium Density Fibreboard), HMR (High Moist Resistance), PB (Particle Board),  Plywood / Triplek dan lainnya.",
    url: 'https://mitrajayaraya.com',
    siteName: 'Mitra Jaya Raya',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'PT. Mitra Jaya Raya',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleTagManager gtmId="GTM-W4K9ZPQ8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit/>
        {children}


<BootstrapJs/>
<FloatingWA/>
        {/* SB Forms */}
        <Script
          src="https://cdn.startbootstrap.com/sb-forms-latest.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-RLJ738TMKT" />
    </html>
  );
}
