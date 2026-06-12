"use client";

import React from "react";
import {
  CreditCard,
  Building2,
  Wallet,
  CircleDollarSign,
  Shield,
  Lock,
  BadgeCheck,
  ChevronRight,
  Info,
} from "lucide-react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import {useRouter} from "next/navigation";


const Page = () => {
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [showCardModal , setShowCardModel] =useState(false);
  const [selectedMethod, setSelectedMethod] = useState< "card" | "upi" | "paypal" | null >(null);
  
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Main Container */}
        <Navbar/>
      <div className="max-w-[1400px] mx-auto px-6 py-8">
      
        <div className="flex gap-6">
          {/* LEFT SECTION */}
          <div className="w-[65%]">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-[40px] font-bold text-[#191C1E]">
                Secure Checkout
              </h1>

              <p className="text-[#6B7280] mt-2">
                Choose your preferred payment method and complete your
                reservation.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Cards */}
    <div
  onClick={() => {
    setShowCardModel(true);
    setShowUPIModal(false);
    setSelectedMethod("card");
  }}
  className={`border-2 rounded-xl p-5 cursor-pointer ${
    selectedMethod === "card"
      ? "border-[#004AC6]"
      : "border-[#D8DCE8]"
  }`}
>
                <div className="flex justify-between">
                  <CreditCard className="text-[#004AC6]" />

                  <div className="flex gap-2">
                    <div className="text-[10px] border rounded px-1 py-[2px]">
                      VISA
                    </div>
                    <div className="text-[10px] border rounded px-1 py-[2px]">
                      MC
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mt-5">Cards</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Credit or Debit Cards
                </p>
              </div>



        

              {/* UPI */}
              <div     onClick={() => { setShowCardModel(false);  setShowUPIModal(true); setSelectedMethod("upi") }}  className={`border-2 rounded-xl p-5 cursor-pointer ${
    selectedMethod === "upi"
      ? "border-[#004AC6]"
      : "border-[#D8DCE8]"
  }`}>
                <div className="flex justify-between">
                  <Building2 className="text-[#004AC6]" />

                  <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">
                    FAST
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mt-5">UPI</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Instant Bank Transfer
                </p>
              </div>  
            </div>
           
               {/* Upi card   */}
              {showUPIModal && (
       <div className="bg-white border border-[#D8DCE8] rounded-xl p-6"> 
      
             

             <h2 className="text-2xl font-bold mb-2">
         Pay with UPI
       </h2>

       <p className="text-gray-500 mb-6">
       Scan QR code or enter your UPI ID.
       </p>

       {/* QR */}
       <div className="flex justify-center mb-6">
         <img
          src="/upi-qr.png"
          alt="UPI QR"
          className="w-48 h-48 border rounded-lg"
        />
      </div>

      <div className="text-center text-gray-500 mb-4">
        OR
      </div>

      {/* UPI Input */}
      <input
        type="text"
        placeholder="example@paytm"
        className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4"
      />

      <button   
        className="w-full h-12 bg-[#004AC6] text-white rounded-lg font-medium"
      >
        Proceed to Pay ₹1,435.50
      </button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Powered by UPI • Secure Payment
      </p>
            </div>
              )}


            {/* popup of card modal  */}
                  {showCardModal &&(
                 <div className="bg-white border border-[#D8DCE8] rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Card Details</h2>

              {/* Name */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block mb-2">
                  Cardholder Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                />
              </div>

              {/* Card Number */}
              <div className="mb-5">
                <label className="text-sm text-gray-500 block mb-2">
                  Card Number
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 pr-12 outline-none"
                  />

                  <Lock
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* Expiry + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-2">
                    CVV
                  </label>

                  <input
                    type="password"
                    placeholder="***"
                    className="w-full h-12 border border-[#D8DCE8] rounded-lg px-4 outline-none"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3 mt-6">
                <input type="checkbox" />

                <span className="text-sm text-gray-500">
                  Securely save card for future trips
                </span>
              </div>
            </div>
              )}

          
            {/* Security Badges */}
            <div className="border-t mt-8 pt-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="text-[#006B77]" />
                  <div>
                    <p className="font-medium">PCI-DSS Compliant</p>
                    <p className="text-xs text-gray-500">
                      Global Standard
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Lock className="text-[#006B77]" />
                  <div>
                    <p className="font-medium">SSL Encryption</p>
                    <p className="text-xs text-gray-500">
                      256-bit Secure
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-[#006B77]" />
                  <div>
                    <p className="font-medium">Safe Checkout</p>
                    <p className="text-xs text-gray-500">
                      Fraud Protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-[35%]">
            {/* Order Summary */}
            <div className="bg-white border border-[#D8DCE8] rounded-2xl p-5">
              <h2 className="text-2xl font-semibold mb-5">
                Order Summary
              </h2>

              {/* Hotel */}
              <div className="flex gap-3 mb-6">
                <img
                  src="/hotel.jpg"
                  alt="hotel"
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-semibold">
                    Arctic Aurora Lodge
                  </h3>

                  <p className="text-sm text-gray-500">
                    Lofoten, Norway
                  </p>

                  <p className="text-sm text-gray-500">
                    4 Nights • 2 Adults
                  </p>
                </div>
              </div>

              {/* Price Details */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Base Rate</span>
                  <span>$1,420.00</span>
                </div>

                <div className="flex justify-between">
                  <span>AI Concierge Fee</span>
                  <span>$45.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes & Service</span>
                  <span>$112.50</span>
                </div>

                <div className="flex justify-between text-[#0094A6]">
                  <span>Promo: TRAVELAI10</span>
                  <span>-$142.00</span>
                </div>
              </div>

              <div className="border-t my-5"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium">Total Amount</span>

                <span className="text-[40px] font-bold text-[#004AC6]">
                  $1,435.50
                </span>
              </div>

              <button onClick={()=>router.push(`/booking/success`)} className="w-full h-14 bg-[#004AC6] text-white rounded-full mt-6 flex items-center justify-center gap-2 font-medium">
                Complete Payment
                <ChevronRight size={18} />
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By clicking "Complete Payment" you agree to our
                Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Cancellation Card */}
            <div className="bg-[#EAFBFF] border border-[#D7F3FF] rounded-xl p-5 mt-4">
              <div className="flex gap-3">
                <Info className="text-[#0086A8]" />

                <div>
                  <h3 className="font-semibold text-[#0086A8]">
                    Free Cancellation
                  </h3>

                  <p className="text-sm text-[#4A7180]">
                    Cancel for free before Sep 24. No hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;