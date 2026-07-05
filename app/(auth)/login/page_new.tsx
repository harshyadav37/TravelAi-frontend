'use client'
import Image from "next/image";
import login from "../../../public/login.jpg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../service/authApi";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading, refreshAuth } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(loginData);
      alert(response.message);
      await refreshAuth();
      router.replace("/home");
    } catch (error: any) {
      console.error("Error during login:", error);
      alert(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const googleLoginUrl = `${apiUrl}/auth/google`;
      window.location.href = googleLoginUrl;
    } catch (error) {
      console.error("Error during Google login:", error);
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
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <Image src={login} alt="Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white text-xl">
              ✈️
            </div>

            <h1 className="mt-3 text-2xl font-bold text-[#004AC6]">TravelAI</h1>
            <p className="mt-1 text-sm text-gray-600 text-center">Your AI-Powered Journey Starts Here</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              type="button"
              className="h-11 border border-gray-300 text-gray-800 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50"
            >
              Google
            </button>

            <button
              type="button"
              className="h-11 border border-gray-300 rounded-xl text-gray-800 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50"
            >
              Apple
            </button>
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-[11px] uppercase tracking-widest text-gray-500">Or Email</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <button type="button" className="text-xs text-[#004AC6]">Forgot Password?</button>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#004AC6]"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">👁️</button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-[#004AC6]" />
              <span className="text-sm text-gray-600">Remember me for 30 days</span>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold shadow-md"
            >
              Log In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <span onClick={() => router.push('/signup')} className="text-[#004AC6] font-semibold cursor-pointer">
                Sign Up Free
              </span>
            </p>
          </form>
        </div>

        <div className="flex justify-center gap-5 mt-4 text-xs text-white">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
          <button>Support</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
