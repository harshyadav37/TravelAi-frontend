"use client"
import Image from "next/image";
import landscape1 from "../public/landscape1.jpg";
import { useRouter } from "next/navigation";


const Page = () => {
const router=useRouter();
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO SECTION  kjhsk*/}
      <section className="relative">
        <Image
          src={landscape1}
          alt="Landscape"
          priority
          className="w-full h-[700px] md:h-[850px] lg:h-[980px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-20 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-[#004AC6] text-2xl font-bold">
              TravelAI
            </h1>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-[#434655] hover:text-[#004AC6] transition"
              >
                Destinations
              </a>

              <a
                href="#"
                className="text-[#434655] hover:text-[#004AC6] transition"
              >
                Experiences
              </a>

              <a
                href="#"
                className="text-[#434655] hover:text-[#004AC6] transition"
              >
                AI Concierge
              </a>

              <a
                href="#"
                className="text-[#434655] hover:text-[#004AC6] transition"
              >
                Support
              </a>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button onClick={()=>router.push("/login")} className="px-5 py-2 border border-[#004AC6] rounded-lg text-[#004AC6] font-medium">
                Login
              </button>

              <button onClick={()=>router.push("/signup")} className="px-5 py-2 bg-[#004AC6] text-white rounded-lg font-medium">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#004AC6]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              Your AI-Powered Journey
            </h1>

            <h1 className="text-[#004AC6] text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Starts Here.
            </h1>

            <p className="mt-6 text-white text-lg md:text-xl leading-8">
              Experience travel reimagined. Our concierge engine crafts
              personalized itineraries based on your deepest preferences,
              unlocking hidden gems worldwide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => router.push("/signup")} className="px-8 py-3 bg-[#004AC6] text-white rounded-xl font-semibold">
                Get Started
              </button>

              <button className="px-8 py-3 bg-white rounded-xl font-semibold text-[#191C1E]">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#F8F9FB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191C1E]">
              Travel Smarter, Not Harder
            </h2>

            <p className="mt-4 text-[#434655] text-lg">
              Three reasons why modern explorers choose TravelAI.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                ✈️
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#191C1E]">
                AI Itineraries
              </h3>

              <p className="mt-4 text-[#434655] leading-7">
                Instantly generate full-day schedules optimized for your pace,
                interests, and real-time weather conditions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                🏷️
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#191C1E]">
                Exclusive Deals
              </h3>

              <p className="mt-4 text-[#434655] leading-7">
                Access AI-first member rates at top-tier hotels and flight
                routes hidden from traditional search engines.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                🎒
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#191C1E]">
                Smart Concierge
              </h3>

              <p className="mt-4 text-[#434655] leading-7">
                A 24/7 digital companion that handles reservations,
                translations, and emergencies in real time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL SECTION */}
<section className="bg-[#004AC6] py-20">
  <div className="max-w-4xl mx-auto text-center px-6">
    
    {/* Avatars */}
    <div className="flex justify-center items-center mb-8">
      <div className="flex -space-x-3">
        <img
          src="https://i.pravatar.cc/50?img=1"
          alt=""
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <img
          src="https://i.pravatar.cc/50?img=2"
          alt=""
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <img
          src="https://i.pravatar.cc/50?img=3"
          alt=""
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div className="w-12 h-12 rounded-full bg-cyan-300 border-2 border-white flex items-center justify-center text-[#004AC6] font-bold">
          +
        </div>
      </div>
    </div>

    <h2 className="text-white text-3xl md:text-4xl font-bold">
      Join 50,000+ modern explorers.
    </h2>

    <p className="text-white/80 mt-6 max-w-2xl mx-auto">
      "TravelAI changed the way I see the world. I found spots in Tokyo I
      never would have discovered alone."
    </p>

    <p className="text-white/70 mt-4">
      — Sarah J., Digital Nomad
    </p>
  </div>
</section>

{/* CTA SECTION */}
<section className="bg-[#F8F9FB] py-28">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-[#191C1E] text-5xl font-bold">
      Ready to explore?
    </h2>

    <p className="mt-6 text-[#434655] text-lg">
      Create your first AI-guided itinerary in less than 60 seconds.
      No credit card required to start.
    </p>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
      <button onClick={() => router.push("/signup")}className="bg-[#004AC6] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
        Sign Up Free
      </button>

      <button className="border-2 border-[#004AC6] text-[#004AC6] px-10 py-4 rounded-xl text-lg font-semibold bg-white">
        Explore as Guest
      </button>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="border-t-2  py-5">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    
    <div>
      <h3 className="text-3xl font-bold text-[#191C1E]">
        TravelAI
      </h3>

      <p className="text-[#434655] mt-2 text-sm">
        © 2024 TravelAI. Powered by Neural Concierge.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-8 text-sm text-[#434655]">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Settings</a>
      <a href="#">Global Offices</a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Page;