import React from "react";
import {
  MapPin,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    badge: "AI Choice",
  },
  {
    name: "Tokyo",
    country: "Japan",
    price: "$1,850",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
  },
  {
    name: "Santorini",
    country: "Greece",
    price: "$2,100",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  },
];

const PopularDestinations = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-6 lg:px-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-[#0F3D9E]">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-2">
            Hand-picked by our AI for their trending status and premium value.
          </p>
        </div>

        <button className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-white transition">
          View All
        </button>
      </div>

      {/* Destination Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {destination.badge && (
                <span className="absolute top-4 right-4 bg-white text-[#0F3D9E] text-xs font-semibold px-3 py-1 rounded-full">
                  {destination.badge}
                </span>
              )}
            </div>

            <div className="p-5 flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-[#0F3D9E]">
                  {destination.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MapPin size={14} />
                  {destination.country}
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] uppercase text-gray-400 font-semibold">
                  Starting From
                </p>

                <p className="text-3xl font-bold text-[#0F3D9E]">
                  {destination.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Planner CTA */}
      <div className="mt-16 bg-[#0F3D9E] rounded-[30px] overflow-hidden p-10 lg:p-14 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              Not Sure Where To Go?
            </h2>

            <p className="text-blue-100 mt-4 leading-relaxed max-w-lg">
              Answer 5 simple questions about your mood, budget,
              and travel style. Our AI will craft 3 custom itinerary
              options just for you in seconds.
            </p>

            <button className="mt-8 flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0F3D9E] px-6 py-3 rounded-full font-semibold transition">
              <Sparkles size={18} />
              Plan With AI
            </button>
          </div>

          {/* Right Floating Cards */}
          <div className="relative flex justify-center">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 w-64 rotate-[-3deg]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center">
                    <Target
                      size={18}
                      className="text-[#0F3D9E]"
                    />
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      Maldives Escape
                    </p>
                    <p className="text-blue-200 text-xs">
                      Suggested for you
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 w-64 ml-8 rotate-[3deg]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                    <ArrowRight
                      size={18}
                      className="text-orange-600"
                    />
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      Adventure In Peru
                    </p>
                    <p className="text-blue-200 text-xs">
                      High match score: 92%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;