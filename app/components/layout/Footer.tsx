"use client";

import Link from "next/link";

export function Footer() {

  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img 
                src={"/logo.png"}
                alt="アローパーキング ロゴ" 
                className="h-10 w-10"
              />
              <div>
                <div className="text-sm font-bold text-gray-900">株式会社アローパーキング</div>
                <div className="text-xs text-gray-600">Arrow Parking Co., Ltd.</div>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              東京を中心に時間貸駐車場を運営しています。確実な駐車スペースと、安心・安全なサービスをお約束します。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 〒154-0041 東京都渋谷区神南1-20-15 神南101ビル5階</p>
              <p>📞 03-5428-6822</p>
              <p>⏰ 平日 9:30〜17:30</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="transition-colors hover:text-white">ホーム</Link></li>
              <li><Link href="/parkings" className="transition-colors hover:text-white">駐車場を探す</Link></li>
              <li><Link href="/company" className="transition-colors hover:text-white">会社概要</Link></li>
              <li><Link href="/landowner" className="transition-colors hover:text-white">土地活用</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">サポート</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="transition-colors hover:text-white">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 Arrow Parking Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
