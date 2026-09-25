import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png';

const Banner = () => {
  return (
  <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 bg-[#222630]">
 
    <div className="flex flex-col lg:flex-row gap-10 items-center ">

      {/* Left Side */}
      <div className="flex-1">

        <p className="text-lime-400 font-semibold tracking-widest">
          WORKOUT LIBRARY
        </p>

        <h2 className=" lg:text-6xl font-black mt-4">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>

        <p className="text-zinc-400 mt-5 leading-7 max-w-xl">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>
          into today's plan, and watch the week's work add up.
        </p>

        <button className="btn bg-lime-400 text-black mt-4">
          BROWSE WORKOUTS
        </button>

      </div>

      {/* Right Side */}
      <div >
        <Image src={bannerImg} alt="FitLog workout banner"/>
      </div>

    </div>
    </section>
  );
};

export default Banner;