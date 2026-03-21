"use client";

import { useState } from "react";

type ParkingGalleryProps = {
  images: string[];
  name: string;
};

export function ParkingGallery({ images, name }: ParkingGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(`ParkingGallery: ${name}`, { images, currentIndex });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="relative h-96 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-7xl font-bold text-blue-900/10">🅿️</div>
            <div className="mt-4 text-sm text-gray-400">写真準備中</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* メイン画像 */}
      <div className="relative h-96 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-gray-50">
        <img
          src={images[currentIndex]}
          alt={`${name} - 画像 ${currentIndex + 1}`}
          className="h-full w-full object-cover"
          onError={(e) => {
            console.error(`画像読み込みエラー: ${images[currentIndex]}`);
          }}
          onLoad={() => {
            console.log(`画像読み込み成功: ${images[currentIndex]}`);
          }}
        />

        {/* ナビゲーション */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="前の画像"
            >
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="次の画像"
            >
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* インジケーター */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`画像 ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* サムネイル */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-20 overflow-hidden rounded-lg transition-all ${
                index === currentIndex
                  ? "ring-2 ring-blue-900 ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image}
                alt={`${name} - サムネイル ${index + 1}`}
                className="h-full w-full object-cover"
                onError={() => {
                  console.error(`サムネイル読み込みエラー: ${image}`);
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
