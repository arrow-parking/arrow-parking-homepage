import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParkingGallery } from "@/app/components/parking/ParkingGallery";
import { ParkingCard } from "@/app/components/parking/ParkingCard";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "@/app/types/parking";

const parkings = parkingsData as Parking[];

// 静的生成のためのパラメータ生成
export function generateStaticParams() {
  return parkings.map((parking) => ({
    id: parking.id.toString(),
  }));
}

// 動的メタデータ生成（SEO対策）
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const parking = parkings.find((p) => p.id === parseInt(id));

  if (!parking) {
    return {
      title: "駐車場が見つかりません",
    };
  }

  const title = `${parking.name} | 駐車場詳細`;
  const description = `${parking.name}（${parking.address}）。${parking.station}からアクセス可能。収容台数${parking.capacity}台。${parking.description}`;

  return {
    title,
    description,
    keywords: [
      parking.name,
      parking.prefecture,
      parking.city,
      parking.station,
      "駐車場",
      "時間貸し",
      ...parking.features,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: parking.images.length > 0 ? [parking.images[0]] : ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: parking.images.length > 0 ? [parking.images[0]] : ["/logo.png"],
    },
    alternates: {
      canonical: `/parkings/${id}`,
    },
  };
}

type ParkingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ParkingDetailPage({ params }: ParkingDetailPageProps) {
  const { id } = await params;
  const parking = parkings.find((p) => p.id === parseInt(id));

  if (!parking) {
    notFound();
  }

  // おすすめの駐車場（同じエリアの他の駐車場）
  const recommendedParkings = parkings
    .filter((p) => p.prefecture === parking.prefecture && p.id !== parking.id && p.available)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 構造化データ（JSON-LD） - 駐車場情報 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ParkingFacility",
            name: parking.name,
            description: parking.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: parking.address,
              addressLocality: parking.city,
              addressRegion: parking.prefecture,
              addressCountry: "JP",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: parking.latitude,
              longitude: parking.longitude,
            },
            telephone: "+81-3-5428-6822",
            openingHours: "Mo-Su 00:00-23:59",
            priceCurrency: "JPY",
            amenityFeature: parking.features.map((feature) => ({
              "@type": "LocationFeatureSpecification",
              name: feature,
            })),
            maximumAttendeeCapacity: parking.capacity,
            isAccessibleForFree: false,
          }),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 戻るリンク */}
        <Link
          href="/parkings"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          駐車場一覧に戻る
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2">
            {/* ギャラリー */}
            <div className="mb-6">
              <ParkingGallery images={parking.images} name={parking.name} />
            </div>

            {/* 基本情報 */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-900">
                      {parking.prefecture}
                    </span>
                    {parking.available ? (
                      <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                        ✓ 営業中
                      </span>
                    ) : (
                      <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                        休止中
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">{parking.name}</h1>
                </div>
              </div>

              <p className="mb-6 text-gray-600">{parking.description}</p>

              {/* 住所・アクセス */}
              <div className="mb-6 space-y-3 border-t border-gray-200 pt-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900">住所</div>
                    <div className="text-sm text-gray-600">{parking.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900">最寄り駅</div>
                    <div className="text-sm text-gray-600">{parking.station}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900">収容台数</div>
                    <div className="text-sm text-gray-600">{parking.capacity}台</div>
                  </div>
                </div>
              </div>

              {/* 特徴 */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-3 text-sm font-semibold text-gray-900">特徴</h3>
                <div className="flex flex-wrap gap-2">
                  {parking.features.map((feature, index) => (
                    <span
                      key={index}
                      className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Googleマップ */}
            <div className="mt-6 overflow-hidden rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">地図</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={`https://maps.google.com/maps?q=${parking.latitude},${parking.longitude}&hl=ja&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${parking.name}の地図`}
                />
              </div>
              <div className="mt-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${parking.latitude},${parking.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 transition-colors hover:text-blue-700"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Googleマップで開く
                </a>
              </div>
            </div>
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1">
            {/* 料金情報 */}
            <div className="sticky top-20 rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-900">料金</h2>
              
              <div className="mb-4 space-y-3">
                <div>
                  <div className="mb-1 text-sm text-gray-600">時間料金</div>
                  <div className="text-lg font-semibold text-gray-900">{parking.pricePerHour}</div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="mb-1 text-sm text-gray-600">最大料金</div>
                  <div className="text-base font-semibold text-blue-900">{parking.pricePerDay}</div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="mb-1 text-sm text-gray-600">領収書発行のお問い合わせ</div>
                  {parking.receiptOfficeName && parking.receiptPhoneNumber && (
                    <>
                      <div className="text-sm font-semibold text-gray-900">{parking.receiptOfficeName}</div>
                      <a href={`tel:${parking.receiptPhoneNumber}`} className="text-base font-semibold text-blue-900 hover:text-blue-700">
                        {parking.receiptPhoneNumber}
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parking.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-blue-900 px-4 py-3 text-center font-semibold text-white transition-all hover:bg-blue-800"
                >
                  地図で確認
                </a>
                <Link
                  href="/contact"
                  className="block w-full rounded-lg border-2 border-blue-900 px-4 py-3 text-center font-semibold text-blue-900 transition-all hover:bg-blue-50"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 宇田川駐車場専用：貸切イベント情報セクション */}
        {parking.id === 8 && (
          <div className="mt-12">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white shadow-xl">
              <div className="px-6 py-12 sm:px-12">
                <div className="mx-auto max-w-4xl text-center">
                  <div className="mb-4 inline-block rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold">
                    渋谷エリア最大級196台収容
                  </div>
                  <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                    駐車場貸切イベントのご案内
                  </h2>
                  <p className="mb-8 text-lg text-blue-100">
                    大規模なイベント、企業パーティー、プロモーションなど<br />
                    宇田川駐車場を貸し切ってご利用いただけます。
                  </p>
                  
                  <div className="grid gap-6 sm:grid-cols-3 mb-8">
                    <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                      <div className="text-4xl mb-2">🎪</div>
                      <div className="text-lg font-bold mb-2">企業イベント</div>
                      <div className="text-sm text-blue-100">新製品発表会、展示会、プロモーションなど</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                      <div className="text-4xl mb-2">🎬</div>
                      <div className="text-lg font-bold mb-2">撮影利用</div>
                      <div className="text-sm text-blue-100">映画、CM、ドラマなどのロケ地として</div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                      <div className="text-4xl mb-2">🎉</div>
                      <div className="text-lg font-bold mb-2">パーティー</div>
                      <div className="text-sm text-blue-100">大規模なパーティーや集会イベント</div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-8 text-left backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 text-center">貸切のメリット</h3>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">広大なスペース:</strong> 渋谷エリア最大級の196台分のスペースを自由に活用</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">好立地:</strong> JR渋谷駅徒歩5分、アクセス抜群の渋谷中心部</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">柔軟な対応:</strong> イベント内容に応じたカスタマイズが可能</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="text-white">警備員常駐:</strong> 安心・安全なイベント運営をサポート</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <a
                      href="tel:03-5428-6822"
                      className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-900 transition-all hover:bg-blue-50"
                    >
                      📞 電話で相談<br />
                      <span className="text-sm font-normal">03-5428-6822</span>
                    </a>
                    <Link
                      href="/contact"
                      className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
                    >
                      ✉️ お問い合わせフォーム
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* おすすめ駐車場 */}
        {recommendedParkings.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {parking.prefecture}の他の駐車場
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedParkings.map((p) => (
                <ParkingCard key={p.id} parking={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}