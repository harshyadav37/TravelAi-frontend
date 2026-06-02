import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Digital Nomad",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    review:
      "The AI Planner is a game-changer. It understood my preference for quiet, hidden spots in Tokyo that I never would have found on my own. Truly a premium experience.",
  },
  {
    name: "Marcus Thomsen",
    role: "Executive Producer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    review:
      "Booking our honeymoon through TravelAI was seamless. The personalized recommendations for Bali were spot on, and the support team was exceptional throughout the trip.",
  },
  {
    name: "Elena Rodriguez",
    role: "Architecture Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    review:
      "I've used many travel agencies, but the intelligence behind TravelAI is unparalleled. It feels like having a personal concierge who knows exactly what I want.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 lg:px-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0F3D9E]">
          What Our Travelers Say
        </h2>

        <p className="text-gray-500 mt-3">
          Premium experiences trusted by over 50,000 happy travelers.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="#F59E0B"
                  color="#F59E0B"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 leading-8 italic min-h-[170px]">
              "{testimonial.review}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4 mt-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h4 className="font-bold text-[#0F3D9E]">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;