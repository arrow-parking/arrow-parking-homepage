import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, Clock, Shield, CreditCard, Calendar } from "lucide-react";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "@/app/types/parking";

const parkings = parkingsData as Parking[];
const udagawaParking = parkings.find((p) => p.id === 8);

export const metadata: Metadata = {
  title: "アローパーキング宇田川 | 渋谷エリア最大級196台収容",
  description: "渋谷駅徒歩5分。渋谷エリア最大級196台収容の大型駐車場。警備員常駐で安心・安全。24時間営業、クレジットカード・電子マネー対応。",
  keywords: ["渋谷", "駐車場", "宇田川", "大型駐車場", "24時間", "警備員常駐", "196台"],
};

export default function UdagawaPage() {
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
                渋谷エリア最大級
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                アローパーキング宇田川
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                渋谷駅徒歩5分。196台収容の大型駐車場。<br />
                警備員常駐で安心・安全な24時間営業。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:03-5428-6822"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  お電話でのお問い合わせ
                </a>
                <Link 
                  href="/parkings/udagawa/events"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                >
                  イベント情報を見る
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-1">196台</div>
                <div className="text-blue-100">収容台数</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <MapPin className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-1">徒歩5分</div>
                <div className="text-blue-100">渋谷駅から</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Clock className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-1">24時間</div>
                <div className="text-blue-100">営業</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Shield className="w-8 h-8 mb-2" />
                <div className="text-3xl font-bold mb-1">常駐</div>
                <div className="text-blue-100">警備員</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 料金情報 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">料金のご案内</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 通常料金 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">通常料金</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">8:00〜20:00</span>
                <span className="text-2xl font-bold text-blue-900">¥400<span className="text-sm font-normal text-gray-600">/30分</span></span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-700">20:00〜8:00</span>
                <span className="text-2xl font-bold text-blue-900">¥100<span className="text-sm font-normal text-gray-600">/60分</span></span>
              </div>
            </div>
          </div>

          {/* 最大料金 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-8 border-2 border-blue-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                おすすめ
              </div>
              <h3 className="text-xl font-semibold text-gray-900">最大料金</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">平日（月〜金）</div>
                <div className="text-3xl font-bold text-blue-900">¥3,200<span className="text-sm font-normal text-gray-600">/12時間</span></div>
                <div className="text-xs text-gray-500 mt-2">入庫から繰返適用、48時間上限</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">土日祝</div>
                <div className="text-3xl font-bold text-blue-900">¥4,400<span className="text-sm font-normal text-gray-600">/12時間</span></div>
                <div className="text-xs text-gray-500 mt-2">入庫から繰返適用、48時間上限</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>ご注意：</strong>48時間を超える駐車はできません。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 施設の特徴 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">充実の設備とサービス</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">警備員常駐</h3>
              <p className="text-gray-600">
                24時間警備員が常駐。お客様の安全と車両の安心をお守りします。
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">キャッシュレス対応</h3>
              <p className="text-gray-600">
                クレジットカード、電子マネー、QRコード決済に対応。スムーズな精算が可能です。
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">オンライン予約</h3>
              <p className="text-gray-600 mb-4">
                事前予約で確実に駐車スペースを確保。イベント時も安心です。
              </p>
              <a
                href="https://select-type.com/rsv/?id=2ZeHG-XNULI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-blue-900 px-6 py-3 font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg"
              >
                今すぐ予約する →
              </a>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">その他の設備</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  機械式駐車場（安全性向上）
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  防犯カメラ完備
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  提携店割引サービス
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  領収書発行可能
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-gray-900 mb-3">こんな方におすすめ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  渋谷でのショッピング・お食事
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  ライブ・イベント参加
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  ビジネスでのご利用
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  長時間駐車（最大48時間）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* アクセス情報 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">アクセス</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">所在地</h3>
            <p className="text-gray-700 mb-6">
              {udagawaParking?.address}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">最寄り駅</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">JR渋谷駅</div>
                  <div className="text-sm text-gray-600">ハチ公口より徒歩5分</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">東京メトロ・東急・京王線 渋谷駅</div>
                  <div className="text-sm text-gray-600">各線から徒歩5〜7分</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>目印：</strong>渋谷109から徒歩3分、センター街入口すぐ
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <iframe
              src={`https://maps.google.com/maps?q=${udagawaParking?.latitude},${udagawaParking?.longitude}&hl=ja&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="宇田川町駐車場の地図"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ・ご予約</h2>
          <p className="text-xl text-blue-100 mb-8">
            ご不明な点やご予約は、お気軽にお電話ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03-5428-6822"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 03-5428-6822
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