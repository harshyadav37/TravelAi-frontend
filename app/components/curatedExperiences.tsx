import React from "react";

const experiences = [
  {
    title: "Beach Escapes",
    packages: "142 Packages",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    large: true,
  },
  {
    title: "Adventure Trips",
    packages: "89 Packages",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Luxury Travel",
    packages: "56 Packages",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Romantic Getaways",
    packages: "72 Packages",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Family Vacations",
    packages: "114 Packages",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
  },
];

const CuratedExperiences = () => {
  return (
    <section className="w-full bg-white px-8 py-12">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-blue-800">
          Curated Experiences
        </h2>
        <p className="mt-2 text-gray-500">
          Discover journeys tailored to your unique travel style.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {/* Large Card */}
        <div className="relative col-span-2 h-[320px] overflow-hidden rounded-3xl group cursor-pointer">
          <img
            src={experiences[0].image}
            alt={experiences[0].title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-bold">
              {experiences[0].title}
            </h3>
            <p className="text-sm font-medium opacity-90">
              {experiences[0].packages}
            </p>
          </div>
        </div>

        {/* Adventure */}
        <div className="relative h-[320px] overflow-hidden rounded-3xl group cursor-pointer">
          <img
            src={experiences[1].image}
            alt={experiences[1].title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-bold">
              {experiences[1].title}
            </h3>
            <p className="text-sm font-medium opacity-90">
              {experiences[1].packages}
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        {experiences.slice(2).map((item) => (
          <div
            key={item.title}
            className="relative h-[220px] overflow-hidden rounded-3xl group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-sm font-medium opacity-90">
                {item.packages}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedExperiences;