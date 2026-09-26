import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Navber = () => {
    return (
       <div className="navbar max-w-7xl mx-auto  lg:px-4">


  {/* Left: Logo */}
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      {/* mobile menu */}
    </div>

    <Image
      src={logo}
      alt="FITLOG Logo"
      width={32}
      height={32}
    />

    <a className="btn btn-ghost text-xl">
      FITLOG
    </a>
  </div>


  {/* Center: Navigation */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      {/* Active link */}
      <li>
         <a className="bg-[#1A2312] text-lime-400 rounded-full">
          Workout
        </a>
      </li>

      <li>
        <a>My Plan</a>
      </li>

    </ul>
  </div>


  {/* Right: Status Badges */}
  <div className="navbar-end flex items-center gap-5">

    {/* Plan */}
    <div className="flex items-center gap-2">
      <span>Plan</span>

      <span className="flex items-center justify-center
        w-6 h-6 rounded-full
        bg-lime-400 text-black
        font-bold text-xs">
        0
      </span>
    </div>

    {/* Saved */}
    <div className="flex items-center gap-2">
      <span>Saved</span>

      <span className="flex items-center justify-center
        w-6 h-6 rounded-full
        border border-zinc-400
        font-bold text-xs">
        0
      </span>
    </div>

  </div>

</div>

    );
};

export default Navber;