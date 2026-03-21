import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社アローパーキングの会社情報。1986年設立、東京・大阪・宮城で時間貸駐車場の運営・管理を行っています。",
  keywords: ["会社概要", "アローパーキング", "企業情報", "沿革"],
  openGraph: {
    title: "会社概要 | アローパーキング",
    description: "株式会社アローパーキングの会社情報。1986年設立、30年以上の実績。",
    type: "website",
  },
  alternates: {
    canonical: "/company",
  },
};

export default function CompanyPage() {
  const history = [
    { date: "1986年3月", event: "株式会社アローパーキング設立" },
    { date: "1995年7月17日", event: "本店移転（自由が丘）" },
    { date: "1999年11月11日", event: "大阪にて時間貸駐車場業務開始" },
    { date: "2006年9月", event: "新ロゴマーク導入" },
    { date: "2017年12月", event: "管理駐車台数359台達成" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">会社概要</h1>
        <p className="text-blue-100">About Us</p>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 会社情報 */}
        <div className="mb-12 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">会社情報</h2>
          <dl className="space-y-4">
            <div className="flex border-b border-gray-100 pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">商号</dt>
              <dd className="text-gray-600">株式会社アローパーキング</dd>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">英文名</dt>
              <dd className="text-gray-600">Arrow Parking Co., Ltd.</dd>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">所在地</dt>
              <dd className="text-gray-600">
                〒154-0041<br />
                東京都渋谷区神南1-20-15 神南101ビル5階
              </dd>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">電話番号</dt>
              <dd className="text-gray-600">
                <a href="tel:03-5428-6822" className="hover:text-blue-900">
                  03-5428-6822
                </a>
              </dd>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">FAX</dt>
              <dd className="text-gray-600">03-5428-6821</dd>
            </div>
            <div className="flex border-b border-gray-100 pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">営業時間</dt>
              <dd className="text-gray-600">平日 9:30〜17:30</dd>
            </div>
            <div className="flex pb-4">
              <dt className="w-32 flex-shrink-0 font-semibold text-gray-900">事業内容</dt>
              <dd className="text-gray-600">時間貸駐車場の運営・管理</dd>
            </div>
          </dl>
        </div>

        {/* 沿革 */}
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">沿革</h2>
          <div className="relative space-y-6 border-l-2 border-blue-900 pl-8">
            {history.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.4rem] mt-1.5 h-4 w-4 rounded-full border-2 border-blue-900 bg-white" />
                <div className="mb-1 text-sm font-semibold text-blue-900">{item.date}</div>
                <div className="text-gray-700">{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* アクセス */}
        <div className="mt-8 rounded-xl bg-blue-50 p-6 text-center">
          <p className="mb-4 text-gray-700">
            駐車場に関するお問い合わせはお気軽にどうぞ
          </p>
          <a
            href="tel:03-5428-6822"
            className="inline-block rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-800"
          >
            📞 03-5428-6822
          </a>
        </div>
      </div>
    </div>
  );
}