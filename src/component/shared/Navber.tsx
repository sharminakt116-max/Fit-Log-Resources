
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { LuMenu, LuX } from 'react-icons/lu';

const Navber = () => {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateCounts = () => {
    const plan = JSON.parse(
      localStorage.getItem('todayPlan') || '[]'
    );

    const saved = JSON.parse(
      localStorage.getItem('savedWorkouts') || '[]'
    );

    setPlanCount(plan.length);
    setSavedCount(saved.length);
  };

  useEffect(() => {
    updateCounts();

    window.addEventListener('storage', updateCounts);
    window.addEventListener('storageUpdate', updateCounts);

    return () => {
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('storageUpdate', updateCounts);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#18191a] border-b border-zinc-800">
      <div className="navbar container mx-auto px-8 sm:px-8 lg:px-8">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost lg:hidden mr-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <LuX size={24} />
            ) : (
              <LuMenu size={24} />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={32}
              height={32}
            />

            <span className="text-xl font-bold text-white">
              FITLOG
            </span>
          </Link>

        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">

            <li>
              <Link
                href="/"
                className="bg-[#1A2312] text-lime-400 rounded-full"
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className="text-white"
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-3 sm:gap-5">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
          >
            <span>Plan</span>

            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-lime-400 text-black font-bold text-xs">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
          >
            <span>Saved</span>

            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-zinc-400 font-bold text-xs">
              {savedCount}
            </span>
          </Link>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#18191a] border-t border-zinc-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg bg-[#1A2312] text-lime-400"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-white hover:bg-zinc-800"
            >
              My Plan
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navber;