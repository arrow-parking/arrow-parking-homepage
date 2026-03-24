"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/parkings", label: "駐車場を探す" },
    { href: "/company", label: "会社概要" },
    { href: "/landowner", label: "土地活用" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === `${basePath}/`;
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm" aria-label="メインナビゲーション">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Image
              src={`${basePath}/logo.png`}
              alt="Arrow Parking Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-gray-900">アローパーキング</div>
              <div className="text-xs text-gray-600">Arrow Parking</div>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-900"
                    : "text-gray-600 hover:text-blue-900"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-[1.65rem] left-0 h-0.5 w-full bg-blue-900" />
                )}
              </Link>
            ))}
            
              href="tel:03-5428-6822"
              className="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-lg"
            >
              📞 03-5428-6822
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="メニュー"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
              href="tel:03-5428-6822"
              className="block rounded-lg bg-blue-900 px-3 py-2 text-center text-base font-semibold text-white"
            >
              📞 03-5428-6822
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
