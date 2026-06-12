"use client";

import React from "react";
import Navbar from "../components/navbar";
import {
  User,
  Shield,
  Car,
  Plane,
  CreditCard,
  Globe,
  Bell,
} from "lucide-react";
import {useRouter} from "next/navigation";

const Page = () => {
    const router=useRouter();
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-6">
          {/* LEFT SECTION */}
          <div className="w-[65%]">
            {/* Heading */}
            <div className="mb-6">
              <h1 className="text-[40px] font-bold text-[#191C1E]">
                Passenger Details
              </h1>
              <p className="text-[#6B7280] text-lg mt-2">
                Tell us who is traveling. Ensure the information matches your
                government-issued ID.
              </p>
            </div>

            {/* Passenger Card */}
            <div className="bg-white border border-[#D8DCE8] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#E9EEFF] flex items-center justify-center">
                  <User className="text-[#004AC6]" size={20} />
                </div>

                <h2 className="text-2xl font-semibold">
                  Primary Passenger
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    First Name
                  </label>
                  <input
                    placeholder="John"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Last Name
                  </label>
                  <input
                    placeholder="Doe"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Nationality
                  </label>

                  <select className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none">
                    <option>United States</option>
                    <option>India</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>

              <div className="h-[1px] bg-[#D8DCE8] my-8"></div>

              <h3 className="text-[#004AC6] font-semibold text-sm tracking-wide mb-6">
                PASSPORT DOCUMENTATION
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Passport Number
                  </label>
                  <input
                    placeholder="A12345678"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Enhance Journey */}
            <div className="mt-8">
              <h2 className="text-3xl font-semibold text-[#191C1E] mb-6">
                Enhance Your Journey
              </h2>

              <div className="grid grid-cols-2 gap-5">
                {/* Card 1 */}
                <div className="border border-[#D8DCE8] bg-white rounded-xl p-5 relative">
                  <input
                    type="checkbox"
                    className="absolute right-5 top-5 h-5 w-5"
                  />

                  <div className="w-12 h-12 bg-[#FFF3DF] rounded-lg flex items-center justify-center mb-5">
                    <Shield className="text-[#D18A00]" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Premium Travel Shield
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    100% Medical & Trip Cancellation coverage.
                    AI-powered claim processing.
                  </p>

                  <p className="text-[#004AC6] font-semibold mt-5">
                    $45.00 / person
                  </p>
                </div>

                {/* Card 2 */}
                <div className="border border-[#D8DCE8] bg-white rounded-xl p-5 relative">
                  <input
                    type="checkbox"
                    className="absolute right-5 top-5 h-5 w-5"
                  />

                  <div className="w-12 h-12 bg-[#DFF8FF] rounded-lg flex items-center justify-center mb-5">
                    <Car className="text-[#0094C6]" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    VIP Airport Transfer
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    Direct chauffeur service to your hotel.
                    Meet & Greet at arrivals included.
                  </p>

                  <p className="text-[#004AC6] font-semibold mt-5">
                    $60.00 / car
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-[35%]">
            <div className="bg-white border border-[#D8DCE8] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/maldives.jpg"
                alt="Maldives"
                className="w-full h-[180px] object-cover"
              />

              <div className="p-5">
                <span className="bg-[#DFF5FF] text-[#0094C6] px-3 py-1 rounded-full text-xs">
                  AI Selected
                </span>

                <h3 className="text-xl font-semibold mt-3">
                  Maldives Dream Escape
                </h3>

                <div className="flex justify-between mt-5">
                  <div className="bg-[#F5F7FB] rounded-lg px-4 py-3 text-center">
                    <p className="text-xs text-gray-500">
                      Price guaranteed
                    </p>

                    <p className="text-[#004AC6] font-bold">12</p>
                  </div>

                  <div className="flex items-center">→</div>

                  <div className="bg-[#F5F7FB] rounded-lg px-4 py-3 text-center">
                    <p className="text-xs text-gray-500">OCT</p>
                    <p className="text-[#004AC6] font-bold">19</p>
                  </div>
                </div>

                <div className="border-t my-5"></div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Plane size={18} />
                      <span>Roundtrip Flights</span>
                    </div>

                    <span>Included</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Plane size={18} />
                      <span>7 Nights Luxury Villa</span>
                    </div>

                    <span>Included</span>
                  </div>
                </div>

                <div className="border-t my-5"></div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base Fare</span>
                    <span>$1,420.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>$185.00</span>
                  </div>
                </div>

                <div className="border-t my-5"></div>

                <div className="flex justify-between items-center">
                  <h4 className="text-3xl font-bold">
                    Total Price
                  </h4>

                  <span className="text-4xl font-bold text-[#004AC6]">
                    $1,605.00
                  </span>
                </div>

                <button onClick={()=>router.push(`/booking/payment`)} className="w-full h-14 mt-5 bg-[#004AC6] text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                  Proceed to Payment
                  <CreditCard size={18} />
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  Price guaranteed for the next 14:59
                </p>
              </div>
            </div>

            {/* Footer Icons */}
            <div className="flex justify-between mt-6 text-center">
              <div>
                <Shield size={20} className="mx-auto mb-2" />
                <p className="text-sm">Secure SSL</p>
              </div>

              <div>
                <Bell size={20} className="mx-auto mb-2" />
                <p className="text-sm">24/7 AI Support</p>
              </div>

              <div>
                <Globe size={20} className="mx-auto mb-2" />
                <p className="text-sm">Best Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;