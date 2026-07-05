'use client'
import Image from "next/image";
import landscape from "../../../public/landscape.jpg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { signupUser } from "../../service/authApi";

const Signup = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const [loading, setLoading] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setUserData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await signupUser(userData);

    alert(response.message);
    router.replace("/login");
  } catch (error: any) {
    console.error(error);

    alert(error.message || "Signup Failed");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  if (!isLoading && isAuthenticated) {
    router.replace("/home");
  }
}, [isAuthenticated, isLoading, router]);
  
  return (
    <div className="h-screen bg-[#f4f6fa] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-6xl h-[95vh] bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <div className="relative hidden lg:block h-full">
          <Image
            src={landscape}
            alt="Travel"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* Glass Card */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/25 backdrop-blur-md rounded-3xl p-6">
            <h2 className="text-4xl font-bold text-white mb-4">
              TravelAI
            </h2>

            <p className="text-white/90 text-lg leading-8">
              Your personalized journey begins here. Experience the world
              through the eyes of artificial intelligence tailored for your
              unique spirit.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center px-6 lg:px-10 py-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#191C1E]">
            Create an Account
          </h1>

          <p className="text-[#6B7280] mt-2">
            Join the community of modern explorers.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Full Name section*/}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Alex Rivers"
                value={userData.name}
                onChange={handleChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[#191C1E] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="alex@example.com"
                value={userData.email}
                onChange={handleChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[#191C1E] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[#191C1E] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[#191C1E] placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#004AC6]"
              />

              <p className="text-sm text-[#6B7280]">
                I agree to the{" "}
                <span className="text-[#004AC6] cursor-pointer hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#004AC6] cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#004AC6] to-[#45C7F0] text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Create Account →
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="text-xs uppercase text-gray-500">
                Or Sign Up With
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="h-11 border border-gray-300 rounded-xl text-gray-800 font-medium hover:bg-gray-50"
              >
                Google
              </button>

              <button
                type="button"
                className="h-11 border border-gray-300 rounded-xl text-gray-800 font-medium hover:bg-gray-50"
              >
                Apple
              </button>
            </div>

            {/* Login */}
            <p className="text-center text-[#6B7280] text-sm pt-2">
              Already have an account?{" "}
              <span onClick={()=>router.push("/login")} className="text-[#004AC6] font-medium cursor-pointer hover:underline">
                Log In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


