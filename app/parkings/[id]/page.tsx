import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, Clock, Shield, CreditCard, Calendar } from "lucide-react";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "@/app/types/parking";
import { ParkingGallery } from "@/app/components/parking/ParkingGallery";

const parkings = parkingsData as Parking[];

// 動的メタデータ
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const parking = parkings.find((p) => p.id === parseInt(id));
  
  if (!parking) {
    return {
      title: "駐車場が見つかりません",
      description: "指定された駐車場が見つかりません。",
    };
  }

  return {
    title: `${parking.name} | ${parking.prefecture}`,
    description: `${parking.name}。${parking.station}。${parking.description}`,
    keywords: [parking.name, parking.prefecture, parking.city, "駐車場", "24時間営業"],
    openGraph: {
      title: parking.name,
      description: parking.description,
      type: "website",
    },
  };
}

// 静的パスの生成
export function generateStaticParams() {
  return parkings.map((parking) => ({
    id: parking.id.toString(),
  }));
}

export default async function ParkingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parking = parkings.find((p) => p.id === parseInt(id));

  if (!parking) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">駐車場が見つかりません</h1>
          <p className="text-gray-600 mb-8">申し訳ございません。指定された駐車場が見つかりませんでした。</p>
          <Link
            href="/parkings"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            駐車場一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヒーローセクション */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/parkings" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            駐車場一覧に戻る
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {parking.prefecture}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {parking.name}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {parking.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {parking.available ? (
                  <div className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold">
                    ✓ 営業中
                  </div>
                ) : (
                  <div className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold">
                    休業中
                  </div>
                )}
                <a 
                  href={`tel:${parking.receiptPhoneNumber}`}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-1">{parking.capacity}</div>
                <div className="text-blue-100">収容台数</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold mb-1">{parking.station}</div>
                <div className="text-blue-100">最寄駅</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Clock className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-1">24h</div>
                <div className="text-blue-100">営業</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Shield className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold mb-1">安全</div>
                <div className="text-blue-100">セキュア</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 画像ギャラリー */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">駐車場の様子</h2>
        <ParkingGallery images={parking.images} name={parking.name} />
      </div>

      {/* 料金情報 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">料金のご案内</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">時間料金</h3>
            <div className="text-4xl font-bold text-blue-900 mb-2">
              {parking.pricePerHour}
            </div>
            <div className="text-sm text-gray-600">
              30分単位での計算
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-8 border-2 border-blue-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                おすすめ
              </div>
              <h3 className="text-xl font-semibold text-gray-900">最大料金</h3>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">
              {parking.pricePerDay}
            </div>
            <div className="text-sm text-gray-600">
              1日の上限金額
            </div>
          </div>
        </div>

        {/* 詳細料金情報 */}
        {parking.priceDetail && (
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 text-amber-600 mr-3" />
              詳細な料金体系
            </h3>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {parking.priceDetail}
            </div>
          </div>
        )}

        {/* 宇田川町のイベント情報へのリンク */}
        {parking.id === 8 && (
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                  イベント貸切のご案内
                </h3>
                <p className="text-gray-700">
                  宇田川駐車場はイベント貸切対応が可能です。詳しくはご確認ください。
                </p>
              </div>
              <Link
                href="/parkings/8/events"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap ml-4"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 施設の特徴 */}
      {parking.features && parking.features.length > 0 && (
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">施設の特徴</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {parking.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 所在地情報 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">アクセス</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">所在地</h3>
            <p className="text-gray-700 mb-6">{parking.address}</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">最寄り駅</h3>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">{parking.station}</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>お問い合わせ：</strong>
                <a href={`tel:${parking.receiptPhoneNumber}`} className="text-blue-900 font-semibold">
                  {parking.receiptPhoneNumber}
                </a>
              </p>
              <p className="text-xs text-gray-600 mt-2">
                {parking.receiptOfficeName}
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
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
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">ご不明な点はお気軽にお問い合わせください</h2>
          <p className="text-xl text-blue-100 mb-8">
            空き状況・ご予約・その他ご不明な点は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${parking.receiptPhoneNumber}`}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 {parking.receiptPhoneNumber}
            </a>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
            >
              メールでお問い合わせ
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            営業時間：平日 9:30〜17:30（駐車場は24時間営業）
          </p>
        </div>
      </div>
    </div>
  );
}
