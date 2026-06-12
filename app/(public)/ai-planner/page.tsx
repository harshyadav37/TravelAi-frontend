"use client";

import React from "react";
import {
  Search,
  User,
  Sparkles,
  Plus,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../../components/navbar";
import { useRouter } from "next/navigation";
export default function Page() {

    const router=useRouter();
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Navbar */}
      <header className=" bg-white">
       <Navbar/>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Heading */}
        <section>
          <h2 className="text-5xl font-bold text-[#0B4DB7]">
            Discover Your Next Journey
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl">
            Our intelligence analyzes millions of data points to find
            destinations tailored to your unique travel fingerprint.
          </p>
        </section>

        {/* Filters */}
        <section className="bg-white mt-10 rounded-3xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Budget Range",
              "Travel Style",
              "Duration",
              "Climate",
              "Travel Group",
            ].map((item, index) => (
              <div key={index}>
                <label className="text-xs text-gray-500 block mb-2">
                  {item}
                </label>

                <select className="w-full  rounded-xl px-4 py-3 text-sm outline-none">
                  <option>
                    {index === 0
                      ? "$3,000 - $7,000"
                      : index === 1
                      ? "Luxury & Wellness"
                      : index === 2
                      ? "1-2 Weeks"
                      : index === 3
                      ? "Tropical"
                      : "Couple"}
                  </option>
                </select>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#0B4DB7] hover:bg-[#08388b] text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium">
              <Sparkles size={18} />
              Generate Recommendations
            </button>
          </div>
        </section>

        {/* Top AI Matches */}
        <section className="mt-10">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold">Top AI Matches</h3>

              <p className="text-sm text-gray-500 mt-1">
                Based on your preferences for Tropical, Luxury Couple travel.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="w-10 h-10 border border-gray-300 rounded-full  flex items-center justify-center">
                <ChevronLeft size={18} />
              </button>

              <button className="w-10 h-10 border border-gray-300 rounded-full  flex items-center justify-center">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Main Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl  overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200"
                  alt=""
                  className="w-full h-[320px] object-cover"
                />

                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-[#0B4DB7]">
                  98% Match
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-3xl font-bold">
                      Baa Atoll, Maldives
                    </h4>

                    <div className="flex gap-8 text-sm text-gray-500 mt-4">
                      <div>
                        <p className="line-through">$5,200</p>
                        <p className="font-semibold text-black">$3,975</p>
                      </div>

                      <div>
                        <p>Resort</p>
                        <p className="font-semibold text-black">5★</p>
                      </div>

                      <div>
                        <p>Rating</p>
                        <p className="font-semibold text-black">9.8/10</p>
                      </div>
                    </div>
                  </div>

                  <button className="border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                    <Plus />
                  </button>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="bg-[#EAF3FF] text-[#0B4DB7] px-6 py-3 rounded-full">
                    Add to Itinerary
                  </button>

                  <button onClick={()=> router.push(`/explore-destination`)} className="bg-[#0B4DB7] text-white px-6 py-3 rounded-full">
                    Explore Destination
                  </button>
                </div>

                <div className="mt-8">
                  <h5 className="font-bold text-[#0B4DB7]">
                    WHY WE RECOMMENDED THIS
                  </h5>

                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                    <div>
                      ✓ Matches your Luxury & Wellness style with world-class
                      spas.
                    </div>

                    <div>
                      ✓ Perfect tropical climate for your selected November
                      dates.
                    </div>

                    <div>
                      ✓ Boutique island resorts ideal for romantic couple
                      getaway.
                    </div>

                    <div>
                      ✓ Fits within your $3k–$7k budget including private
                      seaplane.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-5">
              {[
                {
                  name: "Ubud, Bali",
                  image:
                    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
                  match: "92% Match",
                  desc: "Spiritual wellness and jungle luxury for couples.",
                },
                {
                  name: "Oia, Santorini",
                  image:
                    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
                  match: "89% Match",
                  desc: "Iconic sunsets and private caldera-view pools.",
                },
              ].map((place, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-3xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={place.image}
                      alt=""
                      className="w-full h-[180px] object-cover"
                    />

                    <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#0B4DB7]">
                      {place.match}
                    </span>
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-lg">{place.name}</h4>

                    <p className="text-sm text-gray-500 mt-2">
                      {place.desc}
                    </p>

                    <button className="w-full mt-4 border border-[#0B4DB7] text-[#0B4DB7] py-3 rounded-full font-medium">
                      Quick View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-10">
          <div className="bg-[#E9ECEF] rounded-3xl h-[350px] relative overflow-hidden">
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-md w-[300px]">
              <h4 className="font-bold text-lg">Global Match Network</h4>

              <p className="text-sm text-gray-500 mt-2">
                We've identified 3 primary clusters that match your current
                travel profile. Explore the map to see regional alternatives.
              </p>
            </div>

            <div className="absolute top-[40%] left-[60%]">
              <div className="w-8 h-8 rounded-full bg-[#0B4DB7] flex items-center justify-center text-white">
                <MapPin size={16} />
              </div>
            </div>

            <div className="absolute top-[55%] left-[75%]">
              <div className="w-8 h-8 rounded-full bg-[#0B4DB7] flex items-center justify-center text-white">
                <MapPin size={16} />
              </div>
            </div>

            <div className="absolute top-[62%] left-[82%]">
              <div className="w-8 h-8 rounded-full bg-[#0B4DB7] flex items-center justify-center text-white">
                <MapPin size={16} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}