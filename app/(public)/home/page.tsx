'use client';
import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import landscape from "../../../public/landscape.jpg";
import CuratedExperiences from "../../components/curatedExperiences";
import PopularDestinations from "../../components/popularDestination";
import TrendingDeals from "../../components/trendingDeals";
import FooterCard from "../../components/footerCards";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const HPage = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-gray-700">
        Checking your session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="h-[4000px] w-full">
      <Navbar />
      <section className="relative h-[100vh] w-full flex items-center">
        <img
          src={landscape.src}
          alt="Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#08345a]/85 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between h-[520px]">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Your AI-Powered Journey Starts Here</h1>
              <p className="mt-4 text-sm md:text-base text-white/90">Experience travel reimagined with personalized AI-powered itineraries. We combine cutting-edge technology with human taste to craft the perfect escape.</p>

              <div className="hidden md:flex mt-6 gap-6 text-sm text-white/90">
                <a className="underline">Explore Destinations</a>
                <a className="underline">Plan With AI</a>
              </div>
            </div>

            <div className="w-full md:w-[60%] lg:w-[50%] mt-6 md:mt-0">
              <div className="bg-white/95 rounded-full shadow-lg p-3 flex items-center gap-4">
                <div className="flex-1 px-4">
                  <div className="text-[10px] text-gray-500">DESTINATION</div>
                  <input placeholder="Where to next?" className="w-full outline-none text-sm bg-transparent" />
                </div>

                <div className="flex-1 px-4 border-l border-gray-200">
                  <div className="text-[10px] text-gray-500">DATES</div>
                  <input placeholder="Add dates" className="w-full outline-none text-sm bg-transparent" />
                </div>

                <div className="flex-1 px-4 border-l border-gray-200">
                  <div className="text-[10px] text-gray-500">TRAVELERS</div>
                  <input placeholder="2 Adults" className="w-full outline-none text-sm bg-transparent" />
                </div>

                <button className="ml-2 bg-blue-600 text-white px-5 py-3 rounded-full">Search</button>
              </div>

              <div className="mt-3 flex gap-6 text-sm text-white/90 md:hidden">
                <a className="underline">Explore Destinations</a>
                <a className="underline">Plan With AI</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CuratedExperiences />
      <PopularDestinations />
      <TrendingDeals />
      <FooterCard />
      <Footer />
    </div>
  );
};

export default HPage;