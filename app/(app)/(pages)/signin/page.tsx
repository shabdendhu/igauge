"use client";
import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import { useRouter } from "next/navigation";
const SignInApproved: NextPage = () => {
  const fontSize = useCalculateFontSize();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in both email and password.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      // Handle successful login, e.g., redirect to another page or set user context
      console.log("Login successful:", response.data);
      router.push("/");
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
      }}
      className="w-full bg-white h-full flex justify-between items-center md:pl-20"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-12 w-full h-full">
        <div className="flex h-full justify-center sm:grid sm:col-span-4 font-semibold items-center p-14">
          <div className="w-full min-w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
              <h3 className="font-bold font-libre-baskerville text-[20px] sm:text-[36px] text-center">
                Sign in to your Account
              </h3>
              <input
                className="h-[82px] px-5 mq450:h-[52px] border-2 font-normal capitalize rounded-sm"
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="h-[82px] px-5 mq450:h-[52px] border-2 font-normal capitalize rounded-sm"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className={`h-[82px] text-[20px] cursor-pointer py-4 px-5 bg-orange-200 rounded-md justify-center hover:scale-105 active:scale-95 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
              <div>
                Don’t have an Account? &nbsp;
                <span className="underline text-[#272761] text-base">
                  Sign Up
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="flex h-full xs:grid xs:col-span-8 xs:w-full overflow-hidden h-[500px] bg-[#272761]">
          <div className="flex flex-col justify-center items-center relative">
            <img
              className="w-[45%] py-5 object-contain"
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
            <div className="h-full w-full flex justify-between z-0 absolute">
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
              <div className="h-full border-r-[0.6px] border-gray-100/5" />
            </div>
            <div className="px-16 font-libre-baskerville pb-3 z-0">
              <div className="flex flex-row items-center justify-center gap-[5px]">
                <img
                  style={{
                    height: fontSize(70, 38, 1920, 400),
                  }}
                  className="w-4 h-4 xs:w-6 xs:h-6 sm:w-16 sm:h-16"
                  alt=""
                  src="/vector-51.svg"
                />
                <img
                  style={{
                    height: fontSize(70, 38, 1920, 400),
                  }}
                  className="w-4 h-4 xs:w-6 xs:h-6 sm:w-16 sm:h-16"
                  alt=""
                  src="/vector-51.svg"
                />
              </div>
              <p
                style={{
                  fontSize: fontSize(30, 16, 1920, 400),
                }}
                className="text-center text-white font-semibold text-libre-baskerville"
              >
                “Universities exist to transmit knowledge and understanding of
                ideas and values to students not to provide entertainment for
                spectators or employment for athletes.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInApproved;
