"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../../../components/navbar";
import Login from "../../../../public/login.jpg";
import {
  Globe,
  Shield,
  Euro,
  Calendar,
  Users,
  Star,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "attractions", label: "Attractions" },
  { id: "hotels", label: "Hotels" },
  { id: "reviews", label: "Reviews" },
  { id: "transport", label: "Transport" },
];

export default function Page() {
  const [active, setActive] = useState("overview");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleTabClick(id: string) {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      history.replaceState(null, "", `#${id}`);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* HERO SECTION */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/landscape1.jpg"
            alt="Santorini"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 text-white max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky-500 px-3 py-1 rounded-full text-xs font-medium">
              TOP RATED 2024
            </div>

            <h1 className="text-5xl font-bold mt-4">Santorini, Greece</h1>

            <div className="flex items-center gap-2 mt-2">
              <Star size={16} fill="currentColor" className="text-yellow-400" />
              <span>4.9</span>
              <span className="text-gray-300">| 2,450 Reviews</span>
            </div>

            <p className="mt-4 text-gray-200">
              A volcanic masterpiece of white-washed villages, sapphire domes,
              and world-renowned sunsets over the Aegean caldera.
            </p>
          </div>

          <div className="absolute bottom-8 right-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
              Book Trip
            </button>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <div
              id="overview"
              ref={(el) => {
                sectionRefs.current["overview"] = el;
              }}
            />

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                <Euro className="text-blue-600" />
                <h3 className="font-medium mt-3">Currency</h3>
                <p className="text-sm text-gray-500">Euro (EUR)</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                <Globe className="text-blue-600" />
                <h3 className="font-medium mt-3">Language</h3>
                <p className="text-sm text-gray-500">Greek, English</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                <Shield className="text-blue-600" />
                <h3 className="font-medium mt-3">Safety</h3>
                <p className="text-sm text-gray-500">High Rating</p>
              </div>
            </div>

            {/* TOP ATTRACTIONS */}
            <div
              id="attractions"
              ref={(el) => {
                sectionRefs.current["attractions"] = el;
              }}
            />
            <div>
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Top Attractions</h2>
                <button className="text-blue-600 text-sm">View AI →</button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Large Card */}
                <div className="col-span-1 row-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <Image
                    src={Login}
                    alt="img"
                    width={500}
                    height={700}
                    className="w-full h-[420px] object-cover block border-0"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Oia Blue Domes</h3>
                    <p className="text-sm text-gray-500">
                      Most photographed spot in Greece.
                    </p>
                  </div>
                </div>

                {/* Right Grid */}
                <div className="col-span-2 grid grid-cols-2 gap-4 max-h-[460px] overflow-auto">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border-0">
                    <Image
                      src={Login}
                      alt=""
                      width={500}
                      height={300}
                      className="h-52 w-full object-cover block border-0"
                    />
                    <div className="p-3">Red Beach</div>
                  </div>

                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border-0">
                    <Image
                      src={Login}
                      alt=""
                      width={500}
                      height={300}
                      className="h-52 w-full object-cover block border-0"
                    />
                    <div className="p-3">Fira Town</div>
                  </div>

                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow col-span-2 border-0">
                    <Image
                      src={Login}
                      alt=""
                      width={800}
                      height={300}
                      className="h-52 w-full object-cover block border-0"
                    />
                    <div className="p-3">Akrotiri Ruins</div>
                  </div>
                </div>
              </div>
            </div>

            {/* REVIEW */}
            <div
              id="reviews"
              ref={(el) => {
                sectionRefs.current["reviews"] = el;
              }}
            />
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">Juliane Davis</h3>
                  <p className="text-sm text-gray-500">Traveled Oct 2023</p>
                </div>
                <div className="text-yellow-500">★★★★★</div>
              </div>

              <h4 className="font-semibold mt-4">
                Unforgettable Sunset at Oia
              </h4>

              <p className="text-gray-600 mt-2">
                The AI-recommended itinerary for the sunset walk was perfect.
                The blue domes are even more stunning in person.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-5">
            {/* BOOKING CARD */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sticky top-24 max-h-[70vh] overflow-auto">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Starting From</p>
                <h2 className="text-3xl font-bold text-blue-600">$1,250</h2>
                <span className="text-sm text-gray-500">/ person</span>
              </div>

              <div className="space-y-4 mt-5">
                <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                  <Calendar size={18} />
                  <span>Sep 12 - Sep 19</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                  <Users size={18} />
                  <span>2 Adults</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
                  Check Availability
                </button>

                <p className="text-xs text-center text-gray-500">
                  Free cancellation until Aug 28
                </p>
              </div>
            </div>

            {/* HOTELS */}
            <div
              id="hotels"
              ref={(el) => {
                sectionRefs.current["hotels"] = el;
              }}
              className="bg-white rounded-2xl shadow-sm p-5"
            >
              <h3 className="font-semibold mb-4">Recommended Hotels</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">Katikies Hotel</h4>
                    <p className="text-sm text-gray-500">Luxury</p>
                  </div>
                  <span className="text-blue-600 font-semibold">$450</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">Andronis Suites</h4>
                    <p className="text-sm text-gray-500">Boutique</p>
                  </div>
                  <span className="text-blue-600 font-semibold">$520</span>
                </div>
              </div>
            </div>

            {/* AI CARD */}
            <div className="bg-blue-600 text-white rounded-2xl p-5">
              <h3 className="font-semibold">AI Concierge Tip</h3>
              <p className="text-sm mt-3 opacity-90">
                Book a sunset dinner at Ammoudi Bay at least 3 weeks in
                advance.
              </p>
              <button className="w-full mt-4 border border-white/30 rounded-xl py-2">
                Add to Plan
              </button>
            </div>
          </div>
        </div>

        <div
          id="transport"
          ref={(el) => {
            sectionRefs.current["transport"] = el;
          }}
        />
      </main>
    </div>
  );
}