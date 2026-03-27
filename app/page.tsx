import Link from "next/link";
import type { Metadata } from "next";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "./types/parking";

const parkings = parkingsData as Parking[];

export const metadata: Metadata = {
  title: "アローパーキング | コインパーキング・時間貸駐車場 | 東京・大阪・宮城",
  description: "アローパーキングは東京・大阪・宮城で24箇所・370台のコインパーキングを運営。30年以上の実績。24時間営業・クレジットカード対応。駐車場をお探しの方はこちら。",
  openGraph: {
    title: "アローパーキング | 安心と信頼の駐車場運営",
    description: "東京・大阪・宮城で24箇所、370台の駐車場を運営。30年以上の実績。",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const availableParkings = parkings.filter((p) => p.available);
  const totalCapacity = parkings.reduce((sum, p) => sum + p.capacity, 0);
  const prefectures = Array.from(new Set(parkings.map((p) => p.prefecture)));

  return (
    <div className="min-h-screen">
      {/* 構造化データ（JSON-LD） - SEO対策 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "株式会社アローパーキング",
            legalName: "株式会社アローパーキング",
            url: typeof window !== 'undefined' ? window.location.origin : '',
            logo: "/logo.png",
            description: "東京・大阪・宮城で時間貸駐車場の運営・管理を行っています。",
            address: {
              "@type": "PostalAddress",
              streetAddress: "神南1-20-15 神南101ビル5階",
              addressLocality: "渋谷区",
              addressRegion: "東京都",
              postalCode: "154-0041",
              addressCountry: "JP",
            },
            telephone: "+81-3-5428-6822",
            faxNumber: "+81-3-5428-6821",
            email: "info@arrow-parking.co.jp",
            openingHours: "Mo-Fr 09:30-17:30",
            foundingDate: "1986-03",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: "20-50",
            },
            areaServed: [
              {
                "@type": "City",
                name: "東京都",
              },
              {
                "@type": "City",
                name: "大阪府",
              },
              {
                "@type": "City",
                name: "宮城県",
              },
              {
                "@type": "City",
                name: "兵庫県",
              },
            ],
          }),
        }}
      />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4 py-24 sm:px-6 lg:px-8">
        {/* 背景パターン */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              安心と信頼の<br className="sm:hidden" />駐車場運営
              <span className="mt-2 block text-2xl font-normal text-blue-200 sm:text-3xl">
                30年以上の実績
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100 sm:text-xl">
              東京・大阪・宮城で24箇所、370台の駐車場を運営。<br />
              24時間営業で安心してご利用いただけます。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/parkings"
                className="w-full rounded-lg bg-white px-8 py-4 text-center text-lg font-semibold text-blue-900 shadow-xl transition-all hover:bg-blue-50 hover:shadow-2xl sm:w-auto"
              >
                駐車場を探す →
              </Link>
              <Link
                href="/landowner"
                className="w-full rounded-lg border-2 border-white px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
              >
                土地活用のご相談
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="border-b border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-blue-900">{parkings.length}</div>
              <div className="text-sm text-gray-600">駐車場数</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-blue-900">{totalCapacity}</div>
              <div className="text-sm text-gray-600">総収容台数</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-blue-900">{prefectures.length}</div>
              <div className="text-sm text-gray-600">対応エリア</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-blue-900">30+</div>
              <div className="text-sm text-gray-600">年の実績</div>
            </div>
          </div>
        </div>
      </section>

      {/* エリア別セクション */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">エリア別駐車場</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prefectures.map((prefecture) => {
              const count = parkings.filter((p) => p.prefecture === prefecture).length;
              return (
                <Link
                  key={prefecture}
                  href={`/parkings?area=${prefecture}`}
                  className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-3 text-4xl">
                    {prefecture === "東京都" && "🗼"}
                    {prefecture === "宮城県" && "🌲"}
                    {prefecture === "大阪府" && "🏯"}
                    {prefecture === "兵庫県" && "⛰️"}
                  </div>
                  <div className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-900">
                    {prefecture}
                  </div>
                  <div className="text-sm text-gray-600">{count}箇所</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">アローパーキングの特徴</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-3xl">🕐</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">24時間営業</h3>
              <p className="text-gray-600">
                いつでもご利用いただける24時間営業。深夜・早朝でも安心です。
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-3xl">🚶</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">駅近・好立地</h3>
              <p className="text-gray-600">
                多くの駐車場が駅から徒歩5〜10分。アクセス抜群で便利です。
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">キャッシュレス対応</h3>
              <p className="text-gray-600">
                クレジットカード・電子マネーに対応。スムーズなお支払いが可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-white">駐車場をお探しですか？</h2>
          <p className="mb-8 text-lg text-blue-100">
            24箇所の駐車場から、あなたに最適な駐車場を見つけましょう。
          </p>
          <Link
            href="/parkings"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-900 shadow-xl transition-all hover:bg-blue-50 hover:shadow-2xl"
          >
            駐車場一覧を見る →
          </Link>
        </div>
      </section>
    </div>
  );
}