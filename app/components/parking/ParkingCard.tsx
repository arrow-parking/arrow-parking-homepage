"use client";

import Link from "next/link";
import type { Parking } from "@/app/types/parking";

interface ParkingCardProps {
  parking: Parking;
}

export function ParkingCard({ parking }: ParkingCardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imageUrl = `${basePath}${parking.images[0]}`;

  return (
    <Link href={`/parkings/${parking.id}`} className="group block">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
        {/* 画像 */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          {parking.images.length > 0 ? (
            <img
              src={imageUrl}
              alt={parking.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          {/* ステータスバッジ */}
          <div className="absolute left-3 top-3">
            {parking.available ? (
              <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                営業中
              </span>
            ) : (
              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                休業中
              </span>
            )}
          </div>
        </div>
        {/* 詳細情報 */}
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-900">
              {parking.prefecture}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-900">
            {parking.name}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-gray-600">{parking.description}</p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>{parking.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💰</span>
              <span>{parking.pricePerHour}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚗</span>
              <span>{parking.capacity}台</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
