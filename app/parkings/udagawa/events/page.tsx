import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Building2, Camera, Sparkles, Users, Phone, Mail, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "駐車場貸切プラン | アローパーキング宇田川",
  description: "渋谷エリア最大級196台収容。ポップアップストア、CM撮影、新商品発表会など、様々な用途に対応した駐車場貸切プラン。",
  keywords: ["駐車場貸切", "イベントスペース", "渋谷", "撮影", "展示会"],
};

export default function EventsPage() {
  const useCases = [
    {
      icon: Building2,
      title: "ポップアップストア・展示会",
      description: "期間限定ショップや商品展示会の会場として。渋谷駅から徒歩7分の好立地でお客様を迎えられます。",
      image: "/images/parkings/udagawaevents--1.jpg"
    },
    {
      icon: Camera,
      title: "CM・映画撮影",
      description: "広々とした空間を活かした撮影ロケーション。24時間対応で、夜間・早朝の撮影も可能です。",
      image: "/images/parkings/udagawaevents--2.jpg"
    },
    {
      icon: Sparkles,
      title: "新商品発表会",
      description: "新商品のお披露目やプレスイベントに。196台収容の大規模スペースで印象的な演出が可能です。",
      image: "/images/parkings/udagawaevents-3.jpg"
    },
    {
      icon: Users,
      title: "プライベートイベント",
      description: "企業のキックオフミーティングやプライベートパーティーなど、多様な用途にお使いいただけます。",
      image: "/images/parkings/udagawaevents--1.jpg"
    }
  ];

  const features = [
    "渋谷駅徒歩7分の好立地",
    "196台収容の大規模スペース",
    "24時間対応可能",
    "警備員常駐で安心",
    "柔軟な料金プラン",
    "搬入・搬出サポート"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/parkings/udagawa-1.jpg"
          alt="アローパーキング宇田川"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/parkings/udagawa"
            className="mb-8 inline-flex items-center text-white/90 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            宇田川町駐車場に戻る
          </Link>
          
          <div className="mt-20">
            <h1 className="text-5xl font-bold text-white sm:text-6xl">
              渋谷の中心で
              <br />
              あなたのイベントを
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-white/90">
              渋谷エリア最大級196台収容。ポップアップストア、撮影、発表会など、
              <br />
              あらゆる用途に対応する特別なスペース。
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="tel:03-3770-2017"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                今すぐ相談する
              </a>
              <Link
                href="#details"
                className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-blue-600"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="details">
        <div className="mb-20">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white shadow-2xl transition-all hover:scale-105">
              <div className="mb-2 text-6xl font-bold">196</div>
              <div className="text-xl font-medium">台収容</div>
              <div className="mt-2 text-sm text-blue-100">渋谷エリア最大級</div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/10" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white shadow-2xl transition-all hover:scale-105">
              <div className="mb-2 text-6xl font-bold">7分</div>
              <div className="text-xl font-medium">渋谷駅から徒歩</div>
              <div className="mt-2 text-sm text-purple-100">抜群のアクセス</div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/10" />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-pink-700 p-8 text-white shadow-2xl transition-all hover:scale-105">
              <div className="mb-2 text-6xl font-bold">24</div>
              <div className="text-xl font-medium">時間対応</div>
              <div className="mt-2 text-sm text-pink-100">柔軟なスケジュール</div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">こんな用途に最適</h2>
          <p className="mb-12 text-center text-lg text-gray-600">多様なニーズに応える柔軟な空間活用</p>
          
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="rounded-full bg-white/90 p-3">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">選ばれる理由</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
                <span className="font-medium text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-white shadow-2xl">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative">
            <h2 className="mb-4 text-4xl font-bold">まずはお気軽にご相談ください</h2>
            <p className="mb-8 text-xl text-white/90">
              ご利用規模・期間に応じた柔軟なプランをご提案いたします
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Phone className="h-8 w-8 flex-shrink-0" />
                <div>
                  <div className="mb-1 font-semibold">宇田川町駐車場管理人室</div>
                  <a href="tel:03-3770-2017" className="text-3xl font-bold hover:underline">03-3770-2017</a>
                  <div className="mt-1 text-sm text-white/80">受付時間: 平日 9:30〜17:30</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Mail className="h-8 w-8 flex-shrink-0" />
                <div className="flex-1">
                  <div className="mb-2 font-semibold">メールでのお問い合わせ</div>
                  <Link href="/contact" className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-bold text-blue-600 transition-all hover:scale-105 hover:shadow-xl">
                    お問い合わせフォームへ
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-2xl bg-black/20 p-6 backdrop-blur-sm">
              <div className="text-lg">
                <span className="font-bold">料金:</span> 要相談
                <span className="ml-2 text-white/80">（ご利用規模・期間により変動いたします）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}