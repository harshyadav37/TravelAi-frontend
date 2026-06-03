"use client";

import React from "react";
import {useRouter} from "next/navigation";

interface DestinationCardProps {
  name: string;
  country: string;
  price: string;
  image: string;
  slug: string;
  badge?: string;
}

const DestinationCard = ({ name, country, price, image, slug, badge }: DestinationCardProps) => {
  const router = useRouter();
  return (
    <div className="w-[320px] max-w-[320px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-[240px] w-full cursor-pointer" onClick={() => router.push(`/destinations/${slug}`)}>
        <img src={image} alt={name} className="h-full w-full object-cover" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div>
          <h3 className="text-2xl font-bold text-[#0F3D9E]">{name}</h3>

          <p className="mt-1 text-sm text-gray-500">📍 {country}</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Starting From</p>

            <p className="text-2xl font-bold text-[#0F3D9E]">{price}</p>
          </div>

          <button onClick={() => router.push(`/booking`)} className="rounded-xl bg-[#0F3D9E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Book know
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;