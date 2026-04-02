import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "アローパーキングへのお問い合わせ。駐車場の空き状況、月極契約、土地活用など、お気軽にご相談ください。電話：03-5428-6822（平日9:30〜17:30）",
  keywords: ["お問い合わせ", "連絡先", "電話番号", "相談"],
  openGraph: {
    title: "お問い合わせ | アローパーキング",
    description: "駐車場に関するお問い合わせはお気軽にどうぞ。電話：03-5428-6822",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">お問い合わせ</h1>
        <p className="text-blue-100">Contact Us</p>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* 連絡先情報 */}
          <div>
            <div className="mb-8 rounded-xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">お電話でのお問い合わせ</h2>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-sm text-gray-600">電話番号</div>
                  <a
                    href="tel:03-5428-6822"
                    className="text-3xl font-bold text-blue-900 hover:text-blue-800"
                  >
                    03-5428-6822
                  </a>
                </div>
                <div>
                  <div className="mb-2 text-sm text-gray-600">FAX</div>
                  <div className="text-xl font-semibold text-gray-900">03-5428-6821</div>
                </div>
                <div>
                  <div className="mb-2 text-sm text-gray-600">営業時間</div>
                  <div className="text-gray-900">平日 9:30〜17:30</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-900">所在地</h2>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold text-gray-900">株式会社アローパーキング</p>
                <p>〒154-0041</p>
                <p>東京都渋谷区神南1-20-15</p>
                <p>神南101ビル5階</p>
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム（説明のみ） */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">メールでのお問い合わせ</h2>
            <a
              href="mailto:info@arrow-parking.jp"
              className="inline-block rounded-lg bg-blue-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg"
            >
              ✉️ info@arrow-parking.jp
            </a>
            <p className="mb-6 text-gray-600">
              お問い合わせは、お電話またはFAXにて承っております。
              お気軽にご連絡ください。
            </p>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-4 font-semibold text-gray-900">お問い合わせ内容例</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  駐車場の空き状況について
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  月極契約について
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  土地活用のご相談
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  料金・支払い方法について
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  その他のご質問
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="tel:03-5428-6822"
                className="block w-full rounded-lg bg-blue-900 px-6 py-4 text-center font-semibold text-white transition-all hover:bg-blue-800"
              >
                📞 お電話はこちら
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}