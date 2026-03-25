import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_PATH 
    ? `https://yama6418.github.io${process.env.NEXT_PUBLIC_BASE_PATH}` 
    : 'http://localhost:3000'),
  title: {
    default: "アローパーキング | コインパーキング・時間貸駐車場運営",
    template: "%s | アローパーキング",
  },
  description: "東京・大阪・宮城でコインパーキング・時間貸駐車場23箇所、396台を運営。30年以上の実績で安心。24時間営業・防犯カメラ完備・クレジットカード対応。月極駐車場・土地活用サービスも提供。",
  keywords: [
    "駐車場",
    "コインパーキング",
    "時間貸し駐車場",
    "時間貸駐車場",
    "東京駐車場",
    "渋谷駐車場",
    "大阪駐車場",
    "宮城駐車場",
    "アローパーキング",
    "24時間営業",
    "月極駐車場",
    "土地活用",
    "駐車場経営",
  ],
  authors: [{ name: "株式会社アローパーキング" }],
  creator: "株式会社アローパーキング",
  publisher: "株式会社アローパーキング",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "アローパーキング",
    title: "アローパーキング | コインパーキング・時間貸駐車場運営",
    description: "東京・大阪・宮城でコインパーキング23箇所を運営。30年以上の実績で安心してご利用いただけます。",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "アローパーキング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "アローパーキング | コインパーキング・時間貸駐車場運営",
    description: "東京・大阪・宮城でコインパーキング23箇所を運営。30年以上の実績。",
    images: ["/logo.png"],
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
  verification: {
    google: "8-nWDvkRA5IkYHQ293Y5zKh7bqfTMMThiiw_6uqt2RI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
EOFcat > /Users/kasugayamato/arrow-parking/app/layout.tsx << 'EOF'
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_PATH 
    ? `https://yama6418.github.io${process.env.NEXT_PUBLIC_BASE_PATH}` 
    : 'http://localhost:3000'),
  title: {
    default: "アローパーキング | コインパーキング・時間貸駐車場運営",
    template: "%s | アローパーキング",
  },
  description: "東京・大阪・宮城でコインパーキング・時間貸駐車場23箇所、396台を運営。30年以上の実績で安心。24時間営業・防犯カメラ完備・クレジットカード対応。月極駐車場・土地活用サービスも提供。",
  keywords: [
    "駐車場",
    "コインパーキング",
    "時間貸し駐車場",
    "時間貸駐車場",
    "東京駐車場",
    "渋谷駐車場",
    "大阪駐車場",
    "宮城駐車場",
    "アローパーキング",
    "24時間営業",
    "月極駐車場",
    "土地活用",
    "駐車場経営",
  ],
  authors: [{ name: "株式会社アローパーキング" }],
  creator: "株式会社アローパーキング",
  publisher: "株式会社アローパーキング",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "アローパーキング",
    title: "アローパーキング | コインパーキング・時間貸駐車場運営",
    description: "東京・大阪・宮城でコインパーキング23箇所を運営。30年以上の実績で安心してご利用いただけます。",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "アローパーキング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "アローパーキング | コインパーキング・時間貸駐車場運営",
    description: "東京・大阪・宮城でコインパーキング23箇所を運営。30年以上の実績。",
    images: ["/logo.png"],
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
  verification: {
    google: "8-nWDvkRA5IkYHQ293Y5zKh7bqfTMMThiiw_6uqt2RI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
