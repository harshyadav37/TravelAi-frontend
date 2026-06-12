"use client";

import React from "react";
import {
  CalendarDays,
  Users,
  Plane,
  Globe,
  Languages,
  Calendar,
  Bus,
  Sparkles,
  Shield,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../../components/navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Navbar */}
    <Navbar/>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          alt="Bora Bora"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-xs">
                Luxury Escape
              </span>

              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-xs">
                French Polynesia
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white">
              Bora Bora, French Polynesia
            </h1>

            <div className="flex gap-4 mt-4 text-white text-sm">
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                9.8 / 10 Rating
              </span>

              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                7 Days Package
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 text-sm font-medium">
            <button className="border-b-2 border-[#0B4DB7] py-4 text-[#0B4DB7]">
              Overview
            </button>

            <button className="py-4 text-gray-500">AI Itinerary</button>

            <button className="py-4 text-gray-500">Logistics</button>

            <button className="py-4 text-gray-500">Reviews</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Left Side */}
          <div>
            {/* Description */}
            <section>
              <h2 className="text-4xl font-bold text-gray-900">
                Escape to the Pearl of the Pacific
              </h2>

              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bora Bora is perhaps the most famous island in the world,
                  known for its turquoise lagoons, coral reefs, and overwater
                  bungalows. It remains the ultimate destination for luxury
                  travelers.
                </p>

                <p>
                  Mount Otemanu, the island's highest point, towers over the
                  landscape, providing a dramatic backdrop to the serene waters
                  below.
                </p>

                <p>
                  Whether you're looking for a romantic getaway or an adventure
                  diving expedition, Bora Bora offers a seamless blend of
                  natural beauty and high-end hospitality.
                </p>
              </div>
            </section>

            {/* Quick Facts */}
            <section className="mt-10 grid md:grid-cols-4 gap-4">
              {[
                {
                  icon: Globe,
                  title: "Currency",
                  value: "CFP Franc",
                },
                {
                  icon: Languages,
                  title: "Language",
                  value: "French, Tahitian",
                },
                {
                  icon: Calendar,
                  title: "Best Visit",
                  value: "May - October",
                },
                {
                  icon: Bus,
                  title: "Transport",
                  value: "Boats, Shuttles",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border p-5"
                  >
                    <Icon
                      size={18}
                      className="text-[#0B4DB7] mb-3"
                    />

                    <p className="text-xs uppercase text-gray-400">
                      {item.title}
                    </p>

                    <p className="font-semibold mt-1">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </section>

            {/* Itinerary */}
            <section className="mt-14">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">
                  7-Day AI Optimized Itinerary
                </h2>

                <span className="bg-blue-100 text-[#0B4DB7] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Sparkles size={15} />
                  TravelAI Suggestion
                </span>
              </div>

              <div className="mt-8 space-y-10 relative">
                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-blue-100"></div>

                {/* Day 1 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-[#0B4DB7] text-white flex items-center justify-center font-semibold">
                    1
                  </div>

                  <h3 className="text-xl font-semibold">
                    Arrival & Sunset Sail
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Arrive at the private island airport and transfer by luxury
                    boat to your resort. Unpack and settle into your overwater
                    bungalow before embarking on a private catamaran cruise.
                  </p>

                  <div className="mt-5 bg-white border rounded-2xl p-4 flex gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600"
                      className="w-28 h-20 rounded-xl object-cover"
                      alt=""
                    />

                    <div>
                      <h4 className="font-semibold">
                        Highlights
                      </h4>

                      <p className="text-sm text-gray-500">
                        Champagne Greeting & Panorama Catamaran
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-[#0B4DB7] text-white flex items-center justify-center font-semibold">
                    2
                  </div>

                  <h3 className="text-xl font-semibold">
                    Lagoon Exploration & Snorkeling
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Join a marine biologist for a guided snorkeling safari.
                    Visit vibrant coral gardens and swim with tropical fish.
                  </p>

                  <div className="bg-cyan-50 border border-cyan-100 rounded-xl px-4 py-3 mt-4 text-sm text-gray-600">
                    Eco-friendly sunscreen is provided at all excursion points.
                  </div>
                </div>

                {/* Day 3 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-[#0B4DB7] text-white flex items-center justify-center font-semibold">
                    3
                  </div>

                  <h3 className="text-xl font-semibold">
                    Mount Otemanu Hike
                  </h3>

                  <p className="text-gray-600 mt-3">
                    A guided hike through lush jungle trails with spectacular
                    panoramic viewpoints of the surrounding reef system.
                  </p>
                </div>
              </div>

              <button className="mt-8 w-full border border-dashed border-gray-300 rounded-xl py-4 text-gray-500 hover:bg-gray-50">
                Show Full 7-Day Itinerary
              </button>
            </section>

            {/* Logistics */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-6">
                Travel Logistics
              </h2>

              <div className="bg-white rounded-2xl border p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Plane
                      size={20}
                      className="text-cyan-700"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Getting There
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Fly into Tahiti (PPT) and take a 50-minute domestic flight
                      to Bora Bora. Most resorts provide private boat transfers
                      from the airport island.
                    </p>

                    <div className="flex gap-3 mt-4 flex-wrap">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                        Passport Required
                      </span>

                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                        No Visa for US (90 Days)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside>
            <div className="sticky top-6">
              <div className="bg-white rounded-3xl border p-6 shadow-sm">
                <p className="text-xs uppercase text-gray-400">
                  Starting From
                </p>

                <h2 className="text-5xl font-bold text-[#0B4DB7] mt-2">
                  $1,250
                </h2>

                <span className="text-gray-400 text-sm">
                  / night
                </span>

                {/* Form */}
                <div className="mt-8 space-y-5">
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Dates
                    </label>

                    <div className="border rounded-xl px-4 py-3 text-sm">
                      May 12 - May 19, 2024
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Travelers
                    </label>

                    <div className="border rounded-xl px-4 py-3 text-sm">
                      2 Adults, 0 Children
                    </div>
                  </div>

                  <button className="w-full bg-[#0B4DB7] text-white py-4 rounded-xl font-medium">
                    Add to My Itinerary
                  </button>

                  <button className="w-full border-2 border-[#0B4DB7] text-[#0B4DB7] py-4 rounded-xl font-medium">
                    Book Full Package
                  </button>
                </div>

                {/* Benefits */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2
                      size={16}
                      className="text-green-500"
                    />
                    Free cancellation for 48 hours
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield
                      size={16}
                      className="text-green-500"
                    />
                    TravelAI Smart Price Guarantee
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}