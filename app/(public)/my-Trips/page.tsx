"use client";

import React from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  MoreVertical,
  Sparkles,
  Train,
} from "lucide-react";
import { useRouter } from "next/navigation";

const trips = [
  {
    id: 1,
    title: "Tropical Escape: Maldives",
    price: "$4,250",
    date: "Oct 12 - Oct 19, 2024",
    location: "Male Atoll, Maldives",
    travelers: "2 Adults",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
    note: `"AI suggests booking a sunrise snorkeling session on day 3. Visibility is predicted to be exceptional."`,
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Urban Future: Tokyo",
    price: "$2,800",
    date: "Nov 05 - Nov 12, 2024",
    location: "Shinjuku, Tokyo",
    travelers: "1 Adult",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    note: `"Your JR Pass has been successfully linked to your TravelAI wallet for seamless transport."`,
    icon: Train,
  },
];

export default function Page() {
    const router =useRouter();
  return (
    <div className="min-h-screen bg-[#f4f5f7] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">My Trips</h1>
            <p className="mt-2 text-gray-500">
              Manage your upcoming adventures and relive past memories.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
            <button className="rounded-xl bg-[#0D5BDC] px-6 py-3 text-sm font-medium text-white">
              Upcoming
            </button>
            <button className="rounded-xl px-6 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-100">
              Past Trips
            </button>
          </div>
        </div>

        {/* Trip Cards */}
        <div className="space-y-6">
          {trips.map((trip) => {
            const Icon = trip.icon;

            return (
              <div
                key={trip.id}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[320px_1fr]">
                  {/* Image */}
                  <div className="relative h-[250px] lg:h-full">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-[#0D5BDC] px-4 py-2 text-xs font-semibold text-white">
                        ✓ Confirmed
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                          {trip.title}
                        </h2>

                        <div className="mt-4 flex flex-wrap items-center gap-5 text-gray-600">
                          <div className="flex items-center gap-2">
                            <CalendarDays
                              size={18}
                              className="text-[#0D5BDC]"
                            />
                            <span>{trip.date}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-[#0D5BDC]" />
                            <span>{trip.location}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Users size={18} className="text-[#0D5BDC]" />
                            <span>{trip.travelers}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-4xl font-bold text-[#0D5BDC]">
                          {trip.price}
                        </h3>
                      </div>
                    </div>

                    {/* AI Suggestion */}
                    <div className="mt-6 rounded-2xl bg-gray-100 p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-200">
                          <Icon size={20} className="text-cyan-700" />
                        </div>

                        <p className="text-gray-600">{trip.note}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex gap-3">
                        <button onClick={()=>router.push('/explore-destination')} className="rounded-xl bg-[#0D5BDC] px-8 py-3 font-medium text-white transition hover:bg-blue-700">
                          View Details
                        </button>

                        <button onClick={()=>router.push('/refund-policy')} className="rounded-xl bg-gray-200 px-8 py-3 font-medium text-gray-700 transition hover:bg-gray-300">
                          Cancel Booking
                        </button>
                      </div>

                      <button className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100">
                        <MoreVertical size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}