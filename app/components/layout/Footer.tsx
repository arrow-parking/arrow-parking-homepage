import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* 会社情報 */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="アローパーキング ロゴ" 
                className="h-10 w-10"
              />
              <div>
                <div className="text-sm font-bold text-gray-900">株式会社アローパーキング</div>
                <div className="text-xs text-gray-600">Arrow Parking Co., Ltd.</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>〒154-0041</p>
              <p>東京都渋谷区神南1-20-15 神南101ビル5階</p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:03-5428-6822" className="hover:text-blue-900">
                  03-5428-6822
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📠</span>
                <span>03-5428-6821</span>
              </p>
              <p>営業時間：平日 9:30〜17:30</p>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-900">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/parkings" className="text-gray-600 hover:text-blue-900">
                  駐車場を探す
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-600 hover:text-blue-900">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/landowner" className="text-gray-600 hover:text-blue-900">
                  土地活用
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-900">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* エリア */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">対応エリア</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>東京都（19箇所）</li>
              <li>宮城県（1箇所）</li>
              <li>大阪府（2箇所）</li>
              <li>兵庫県（1箇所）</li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} 株式会社アローパーキング All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}