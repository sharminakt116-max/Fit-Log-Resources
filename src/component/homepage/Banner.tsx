import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16 bg-[#222630]">
      
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* Left Side */}
        <div className="flex-1">

          <p className="text-lime-400 font-semibold tracking-[0.2em] text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mt-4">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-zinc-400 mt-5 leading-7 max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          {/* Browse Workouts */}
          <a
            href="#library"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg bg-[#CCFF00] text-black font-bold hover:bg-lime-300 transition"
          >
            BROWSE WORKOUTS

            {/* Arrow Icon */}
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
        <div className="flex-1 w-full">
          <Image
            src={bannerImg}
            alt="FitLog workout banner"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>

    </section>
  );
};

export default Banner;