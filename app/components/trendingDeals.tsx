import React from "react";

const deals = [
  {
    title: "Golden Triangle, India",
    duration: "6 Days • All Inclusive",
    oldPrice: "$1,200",
    newPrice: "$960",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
  },
  {
    title: "Luxury Stay, Dubai",
    duration: "4 Days • 5-Star Hotel",
    oldPrice: "",
    newPrice: "$1,450",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    title: "Parisian Romance",
    duration: "5 Days • Dinner Cruise",
    oldPrice: "",
    newPrice: "$1,890",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Maldives Retreat",
    duration: "7 Days • Overwater Villa",
    oldPrice: "$3,500",
    newPrice: "$2,999",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
  },
];

const TrendingDeals = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 lg:px-10">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-[#0F3D9E]">
          Trending Deals
        </h2>

        <p className="mt-2 text-gray-500">
          Exclusive limited-time offers on top-rated packages.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {deal.discount && (
                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                  {deal.discount}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-[#0F3D9E] text-lg">
                {deal.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {deal.duration}
              </p>

              <div className="flex items-end justify-between mt-6">
                <div>
                  {deal.oldPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      {deal.oldPrice}
                    </p>
                  )}

                  <p className="text-4xl font-bold text-[#0F3D9E]">
                    {deal.newPrice}
                  </p>
                </div>

                <button className="px-5 py-2 rounded-full bg-gray-100 text-[#0F3D9E] font-medium hover:bg-[#0F3D9E] hover:text-white transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingDeals;