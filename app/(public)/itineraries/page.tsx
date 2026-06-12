"use client";

import React from "react";
import { Heart, Plus, ArrowRight, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import Navbar from "../../components/navbar";

const wishlistItems = [
  {
    id: 1,
    title: "Kyoto, Japan",
    category: "Culture • Serenity • Gastronomy",
    match: "98% Match",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    description:
      "Experience the timeless beauty of ancient shrines and tranquil bamboo forests.",
  },
  {
    id: 2,
    title: "Amalfi Coast, Italy",
    category: "Coastline • Luxury • Romance",
    match: "94% Match",
    image:
      "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1200&q=80",
    description:
      "Navigate winding coastal roads and indulge in world-class seaside dining.",
  },
  {
    id: 3,
    title: "Santorini, Greece",
    category: "Islands • Sunset • Relaxation",
    match: "91% Match",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    description:
      "Witness the world's most famous sunset from your private villa.",
  },
  {
    id: 4,
    title: "Swiss Alps, Switzerland",
    category: "Adventure • Luxury • Nature",
    match: "89% Match",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80",
    description:
      "Precision-planned alpine adventures and cozy chalet stays.",
  },
  {
    id: 5,
    title: "Reykjavík, Iceland",
    category: "Nature • Unique • Adventure",
    match: "87% Match",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    description:
      "Discover the untamed beauty of geothermal spas and northern lights.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] ">
      <Navbar/>
      <div className="mx-auto mt-5 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-5xl font-bold text-[#0B4DB7]">
              My Wishlist
            </h1>

            <p className="mt-2 text-gray-600">
              Discover and plan your{" "}
              <span className="font-semibold text-[#0B4DB7]">
                12 saved destinations
              </span>{" "}
              curated by TravelAI.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-gray-600 shadow-sm hover:bg-gray-50">
              <ArrowUpDown size={16} />
              Sort by Match Score
            </button>

            <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-gray-600 shadow-sm hover:bg-gray-50">
              <SlidersHorizontal size={16} />
              Filter
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[230px] w-full object-cover"
                />

                {/* Match Badge */}
                <div className="absolute bottom-3 left-3 rounded-full bg-cyan-200 px-3 py-1 text-xs font-semibold text-cyan-800">
                  {item.match}
                </div>

                {/* Heart */}
                <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <Heart
                    size={18}
                    className="fill-red-500 text-red-500"
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-2xl font-bold text-[#0B4DB7]">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B4DB7] py-3 font-medium text-white transition hover:bg-blue-700">
                  Book Know
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Explore More Card */}
          <div className="flex min-h-[480px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white p-8 text-center">
            <button className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Plus size={28} className="text-[#0B4DB7]" />
            </button>

            <h2 className="text-3xl font-bold text-[#0B4DB7]">
              Explore More
            </h2>

            <p className="mt-4 max-w-xs text-gray-500">
              Find more destinations based on your travel style and
              preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}