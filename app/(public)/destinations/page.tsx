import React from "react";
import Navbar from "../../components/navbar";
import DestinationCard from "../../components/destinations/DestinationCard";
import { ChevronDown, Search, Sparkles, ArrowUpDown } from "lucide-react";
import Footer from "../../components/footer";

const Page = () => {
  const destinations = [
    {
      name: "Bali",
      country: "Indonesia",
      price: "$1,200",
      image: "/images/bali.jpg",
      slug: "bali",
      badge: "Popular",
    },
    {
      name: "Paris",
      country: "France",
      price: "$1,500",
      image: "/images/paris.jpg",
      slug: "paris",
      badge: "Romantic",
    },
    {
      name: "Tokyo",
      country: "Japan",
      price: "$1,800",
      image: "/images/tokyo.jpg",
      slug: "tokyo",
      badge: "Trending",
    },
    {
      name: "Santorini",
      country: "Greece",
      price: "$2,000",
      image: "/images/santorini.jpg",
      slug: "santorini",
      badge: "AI Choice",
    },
    {
      name: "New York",
      country: "USA",
      price: "$1,400",
      image: "/images/newyork.jpg",
      slug: "new-york",
      badge: "City Life",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <section className="px-6 py-12 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Exclusive Travel Packages
            </h2>

            <p className="mt-2 text-gray-500">
              Handpicked destinations powered by TravelAI insights.
            </p>
          </div>

          {/* Right Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-md">
              <Sparkles size={16} />
              AI Recommended
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-600">
              <ArrowUpDown size={16} />
              Price: Low to High
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative mx-auto max-w-xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search destinations, countries, experiences..."
              className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              country={destination.country}
              price={destination.price}
              image={destination.image}
              slug={destination.slug}
              badge={destination.badge}
            />
          ))}
        </div>

        {/* View More */}
        <div className="mt-14 flex flex-col items-center">
          <button className="flex items-center gap-2 rounded-xl border-2 border-blue-600 px-8 py-4 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
            View More Destinations
            <ChevronDown size={18} />
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Showing {destinations.length} of 128 curated packages
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;