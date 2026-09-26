import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#151922] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog"
            width={40}
            height={40}
          />

          <span className="text-xl font-bold text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;