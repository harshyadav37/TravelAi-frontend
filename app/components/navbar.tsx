"use client";

import { useState } from "react";
import Link from "next/link";
import {ProfilePopup} from "./profile";
import {
  Bell,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [openprofile , setOpenProfile] = useState(false);

  const navLinks = [
    {
      name: "Explore",
      href: "/explore",
    },
    {
      name: "AI Planner",
      href: "/ai-planner",
    },
    {
      name: "Itineraries",
      href: "/itineraries",
    },
    {
      name: "Destinations",
      href: "/destinations",
    },
    {
      name:"MyTrips",
      href:"/my-trips"
    },
  ];

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <header className="sticky top-0 z-40 w-full  border-b border-gray-200 bg-white">
       <div className="flex h-20 w-full items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div className="flex items-center gap-22">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-bold  text-blue-600"
            >
              TravelAI
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/home"
                className="border-b-2 border-blue-600 pb-1 text-sm font-medium text-blue-600"
              >
                Explore
              </Link>

              <Link
                href="/itineraries"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                Itineraries
              </Link>

              <Link
                href="/destinations"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                Destinations
              </Link>
              
                <Link
                href="/ai-planner"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                AI Planner
              </Link>

              <Link
                href="/my-Trips"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                MyTrips
              </Link>
            </nav>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Bell size={20} className="text-gray-700" />
            </button>

            <button onClick={() => setOpenProfile(true)} className="rounded-full p-2 hover:bg-gray-100">
              <User size={20} className="text-gray-700" />
            </button>
          </div>

       
         

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden rounded-md p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
       <ProfilePopup
        openprofile={openprofile}
        setOpenProfile={setOpenProfile}
        // onClose={() => setOpenProfile(false)}
      />

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b p-5">
          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            TravelAI
          </Link>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* User Section */}
        <div className="border-b p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <User size={22} />
            </div>

            <div>
              <h3 className="font-semibold">
                Welcome Traveler
              </h3>
              <p className="text-sm text-gray-500">
                Plan your next adventure
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                item.name === "Explore"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* AI Planner Card */}
        <div className="mx-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
          <div className="flex items-center gap-2">
            <Sparkles size={18} />
            <h3 className="font-semibold">
              AI Trip Planner
            </h3>
          </div>

          <p className="mt-2 text-sm text-blue-100">
            Create personalized itineraries in seconds.
          </p>

          <Link
            href="/ai-planner"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600"
          >
            Start Planning
          </Link>
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 w-full border-t bg-white p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100">
            <Bell size={20} />
            Notifications
          </button>

          <button onClick={() => setOpenProfile(true)} className="mt-2 flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100">
            <User size={20} />
            Profile
          </button>
        </div>
      </aside>
    </>
    
  );
};

export default Navbar;

