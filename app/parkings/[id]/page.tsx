import { Metadata } from "next";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "@/app/types/parking";
import { ParkingCard } from "@/app/components/parking/ParkingCard";
import ParkingGallery from "@/app/components/parking/ParkingGallery";
import { Phone } from "lucide-react";
import Link from "next/link";

const parkings = parkingsData as Parking[];

export function generateStaticParams() {
  return parkings.map((parking) => ({
    id: parking.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const parking = parkings.find((p) => p.id === parseInt(id));

  if (!parking) {
    return {
      title: "駐車場が見つかりません",
      description: "お探しの駐車場が見つかりませんでした。",
    };
  }

  const imageUrl = `https://arrow-parking.com${parking.images[0]}`;

  return {
    title: `${parking.name} | ${parking.city}のコインパーキング・駐車場 | アローパーキング`,
    description: `${parking.name}は${parking.prefecture}${parking.city}に位置するコインパーキングです。${parking.capacity}台収容。${parking.pricePerHour}。${parking.description}`,
    keywords: [
      parking.name,
      `${parking.city}駐車場`,
      `${parking.city}コインパーキング`,
      `${parking.station}駐車場`,
      "コインパーキング",
      "時間貸駐車場",
      parking.prefecture,
    ],
    openGraph: {
      type: "website",
      title: `${parking.name} | ${parking.city}のコインパーキング`,
      description: `${parking.name}。${parking.capacity}台、${parking.pricePerHour}。24時間営業。`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: parking.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${parking.name} | ${parking.city}のコインパーキング`,
      description: `${parking.name}。${parking.capacity}台、${parking.pricePerHour}。`,
      images: [imageUrl],
    },
  };
}

export default async function ParkingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parking = parkings.find((p) => p.id === parseInt(id));

  if (!parking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            駐車場が見つかりません
          </h1>
          <Link href="/parkings" className="text-blue-600 hover:underline">
            駐車場一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  const relatedParkings = parkings
    .filter(
      (p) =>
        p.prefecture === parking.prefecture &&
        p.id !== parking.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900">
              {parking.prefecture}
            </span>
            <span className="text-sm text-blue-100">{parking.city}</span>
          </div>
          <h1 className="mb-2 text-4xl font-bold">{parking.name}</h1>
          <p className="text-blue-100">{parking.address}</p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ギャラリー */}
        <div className="mb-8">
          <ParkingGallery name={parking.name} images={parking.images} />
        </div>

        {/* 詳細情報 */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                駐車場情報
              </h2>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-600">収容台数</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {parking.capacity}台
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">時間料金</p>
                    <p className="text-lg font-bold text-gray-900">
                      {parking.pricePerHour}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">最大料金</p>
                    <p className="text-lg font-bold text-gray-900">
                      {parking.pricePerDay}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">最寄り駅</p>
                    <p className="text-lg font-bold text-gray-900">
                      {parking.station}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {parking.priceDetail && (
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  料金詳細
                </h2>
                <div className="rounded-lg bg-blue-50 p-6 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-800 whitespace-pre-line font-mono leading-relaxed">
                    {parking.priceDetail}
                  </p>
                </div>
              </section>
            )}
            

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                説明
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {parking.description}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                地図
              </h2>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
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
            </section>
            {parking.id === 8 && (
              <section className="mb-8">
                <div className="rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white">
                  <h2 className="mb-2 text-xl font-bold">イベント・貸切について</h2>
                  <p className="mb-4 text-blue-100 text-sm">渋谷エリア最大級196台。ポップアップストア・撮影・発表会など様々な用途に対応。</p>
                  <Link href="/parkings/udagawa/events" className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-900 hover:bg-blue-50 transition-all">
                    イベント・貸切プランを見る →
                  </Link>
                </div>
              </section>
            )}
            {parking.features && parking.features.length > 0 && (
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  特徴
                </h2>
                <ul className="space-y-2">
                  {parking.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* サイドバー */}
          <div>
            <div className="sticky top-20 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                お問い合わせ
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">電話</p>
                  <a
                    href={`tel:${parking.receiptPhoneNumber || "03-5428-6822"}`}
                    className="text-lg font-bold text-blue-600 hover:underline"
                  >
                    {parking.receiptPhoneNumber || "03-5428-6822"}
                  </a>
                </div>
                <a
                  href={`tel:${parking.receiptPhoneNumber || "03-5428-6822"}`}
                  className="block rounded-lg bg-blue-900 px-4 py-3 text-center text-sm font-bold text-white transition-all hover:bg-blue-800"
                >
                  📞今すぐ電話する
                </a>
                <Link
                  href="/contact"
                  className="block rounded-lg bg-blue-100 px-4 py-3 text-center text-sm font-bold text-blue-900 transition-all hover:bg-blue-200"
                >
                  ✉️ メール問い合わせ
                </Link>
                {parking.parking_type === "large_event_venue" && (
                  <a
                    href="https://select-type.com/rsv/?id=2ZeHG-XNULI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-bold text-white transition-all hover:bg-green-500"
                  >
                 📅 今すぐ予約する
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 関連駐車場 */}
        {relatedParkings.length > 0 && (
          <section className="mt-12 border-t border-gray-200 pt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              同じエリアの駐車場
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedParkings.map((relatedParking) => (
                <ParkingCard
                  key={relatedParking.id}
                  parking={relatedParking}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
