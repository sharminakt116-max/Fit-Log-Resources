

import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#1c1f26] rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 p-6 sm:p-10 lg:p-14">

            {/* Left Side */}
            <div className="w-full lg:w-1/2">
              <p className="text-lime-400 font-semibold tracking-[0.2em] text-xs sm:text-sm">
                WORKOUT LIBRARY
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-4 text-white">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              <p className="text-zinc-400 mt-5 leading-7 text-sm sm:text-base max-w-xl">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today's plan, and watch the week's work add up.
              </p>

              <a
                href="#library"
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg bg-[#CCFF00] text-black font-bold text-sm sm:text-base hover:bg-lime-300 transition"
              >
                BROWSE WORKOUTS

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={bannerImg}
                alt="FitLog workout banner"
                className="w-full max-w-md lg:max-w-xl h-auto object-contain"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
