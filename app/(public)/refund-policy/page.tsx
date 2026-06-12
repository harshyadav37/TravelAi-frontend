"use client";

import React from "react";
import {
  ArrowLeft,
  AlertTriangle,
  CalendarDays,
  Users,
  LifeBuoy,
  ExternalLink,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-10">
            <h1 className="text-xl font-bold text-[#0B4DB7]">
              TravelAI
            </h1>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <button className="text-gray-600 hover:text-black">
                Explore
              </button>

              <button className="text-gray-600 hover:text-black">
                AI Planner
              </button>

              <button className="font-medium text-[#0B4DB7]">
                My Trips
              </button>

              <button className="text-gray-600 hover:text-black">
                Support
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex h-10 w-64 items-center rounded-full bg-gray-100 px-4">
              <input
                type="text"
                placeholder="Search trips..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <button className="text-sm font-medium text-[#0B4DB7]">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Back Button */}
        <button className="mb-6 flex items-center gap-2 text-sm text-[#0B4DB7] hover:underline">
          <ArrowLeft size={16} />
          Back to Trip Details
        </button>

        {/* Page Title */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Cancel Your Booking
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Booking Reference:
            <span className="ml-1 font-semibold text-gray-800">
              VTAI-983214
            </span>
          </p>
        </div>

        {/* Alert */}
        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
          <div className="flex gap-4">
            <AlertTriangle
              className="mt-1 text-red-600"
              size={22}
            />

            <div>
              <h3 className="font-semibold text-red-700">
                Important Cancellation Notice
              </h3>

              <p className="mt-1 text-sm text-red-600">
                Free cancellation ends in 4 hours (Oct 10, 11:59 PM
                GMT). After this window, a 15% service fee will
                apply to your refund amount.
              </p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Cancellation Reason */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">
                Why are you cancelling?
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Change of plans",
                  "Found a better price elsewhere",
                  "Medical emergency",
                  "Travel restrictions or safety concerns",
                  "Other",
                ].map((reason) => (
                  <label
                    key={reason}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-4 hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="cancelReason"
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-700">
                      {reason}
                    </span>
                  </label>
                ))}
              </div>

              <textarea
                placeholder="Please tell us more (optional)"
                className="mt-4 h-28 w-full resize-none rounded-xl border p-4 text-sm outline-none focus:border-[#0B4DB7]"
              />
            </div>

            {/* Refund Summary */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">
                Refund Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Total Paid</span>
                  <span className="font-medium text-gray-900">
                    $2,450.00
                  </span>
                </div>

                <div className="flex justify-between text-red-500">
                  <span>Cancellation Fee</span>
                  <span>-$0.00</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold">
                      Total Refund Amount
                    </span>

                    <span className="text-2xl font-bold text-[#0B4DB7]">
                      $2,450.00
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-gray-500">
                    Refunds usually process within 3–5 business days
                    to your original payment method (Visa ending in
                    4242).
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl border border-red-500 px-8 py-4 font-medium text-red-600 transition hover:bg-red-50">
                Confirm Cancellation
              </button>

              <button className="rounded-xl bg-[#0B4DB7] px-8 py-4 font-medium text-white transition hover:bg-[#083d95]">
                Keep My Booking
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-5">
            {/* Trip Card */}
            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800"
                alt="Santorini"
                className="h-40 w-full object-cover"
              />

              <div className="p-5">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-[#0B4DB7]">
                  Hotel & Flight
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Luxury Escape to Santorini
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Greece • 7 Nights
                </p>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    Oct 12 - Oct 19, 2024
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    2 Adults
                  </div>
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="rounded-3xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <LifeBuoy
                  className="text-[#0B4DB7]"
                  size={22}
                />

                <h3 className="font-semibold">Need help?</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our support team is available 24/7 to assist with your
                cancellation or travel changes.
              </p>

              <button className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0B4DB7] hover:underline">
                Chat with Support
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}