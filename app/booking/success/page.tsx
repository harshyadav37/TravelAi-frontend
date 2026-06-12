"use client";

import React from "react";
import Navbar from "../../components/navbar";
import {
  Check,
  Download,
  Share2,
  LayoutDashboard,
  Info,
} from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] mx-auto px-6 py-12">

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#E8EEF9] flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#004AC6] flex items-center justify-center">
              <Check className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h1 className="text-5xl font-bold text-[#0F172A]">
            Pack Your Bags! Your Trip is Confirmed
          </h1>

          <p className="text-[#64748B] mt-4 text-lg">
            We're getting everything ready for your Santorini getaway.
          </p>

          <p className="text-[#64748B]">
            Your dream escape is just a few steps away.
          </p>

          <div className="mt-5 inline-flex items-center px-4 py-2 rounded-full border border-[#D8DCE8] bg-white text-sm">
            Booking Reference:
            <span className="ml-2 font-semibold text-[#004AC6]">
              #TAI-98234
            </span>
          </div>
        </div>

        {/* Booking Card */}
        <div className="mt-10 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm flex">
          {/* Image */}
          <div className="w-[40%]">
            <img
              src="/santorini.jpg"
              alt="Santorini"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-[60%] p-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Destination
                </p>

                <h3 className="text-3xl font-bold">
                  Santorini, Greece
                </h3>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Dates
                </p>

                <h3 className="text-2xl font-bold">
                  Oct 12 - Oct 19
                </h3>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 mb-2">
                  Total Paid
                </p>

                <h3 className="text-3xl font-bold text-[#004AC6]">
                  $1,605.00
                </h3>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase text-gray-500">
                Status
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>

                <span className="font-semibold text-green-600">
                  Payment Confirmed
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#004AC6] text-white px-8 h-12 rounded-xl flex items-center gap-2 font-medium">
                View My Itinerary
              </button>

              <button className="border border-[#D8DCE8] bg-[#F8FAFC] px-8 h-12 rounded-xl flex items-center gap-2 font-medium">
                <Download size={18} />
                Download Tickets (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-[1.3fr_1fr] gap-6 mt-8">
          {/* Next Steps */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <h2 className="text-2xl font-bold mb-6">
              Next Steps
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#004AC6] font-bold">
                  1
                </div>

                <div>
                  <h4 className="font-semibold">
                    Check your inbox
                  </h4>

                  <p className="text-sm text-gray-500">
                    We've sent a detailed confirmation email
                    with your booking voucher and tax invoice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#004AC6] font-bold">
                  2
                </div>

                <div>
                  <h4 className="font-semibold">
                    Online Check-in
                  </h4>

                  <p className="text-sm text-gray-500">
                    Check-in opens 24 hours before your
                    flight. We'll send reminders when
                    available.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#004AC6] font-bold">
                  3
                </div>

                <div>
                  <h4 className="font-semibold">
                    Travel Concierge
                  </h4>

                  <p className="text-sm text-gray-500">
                    Get personalized recommendations for
                    your first night in Santorini.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            {/* Share */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
              <h3 className="text-xl font-bold text-center">
                Spread the Joy
              </h3>

              <p className="text-sm text-gray-500 text-center mt-3">
                Share your upcoming adventure with friends
                and family.
              </p>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 h-11 border rounded-xl flex items-center justify-center gap-2">
                  <Share2 size={16} />
                  Share Trip
                </button>

                <button className="flex-1 h-11 border rounded-xl flex items-center justify-center gap-2">
                  <LayoutDashboard size={16} />
                  Dashboard
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Info
                  size={18}
                  className="text-[#004AC6]"
                />
              </div>

              <div>
                <h4 className="font-semibold">
                  Need assistance?
                </h4>

                <p className="text-sm text-gray-500">
                  Our support team is available 24/7 for
                  premium travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12">
        <div className="max-w-[1200px] mx-auto px-6 py-10">

          <div className="grid grid-cols-5 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#004AC6]">
                TravelAI
              </h2>

              <p className="text-sm text-gray-500 mt-4">
                Your intelligent companion for seamless,
                premium travel experiences worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                EXPLORE
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Destinations</li>
                <li>AI Planner</li>
                <li>Luxury Collection</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                SUPPORT
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Help Center</li>
                <li>Contact</li>
                <li>Safety</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                LEGAL
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                LANGUAGE
              </h4>

              <p className="text-sm text-gray-500">
                English (US)
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-10">
            © 2024 TravelAI. All rights reserved.
            Designed for Premium Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;