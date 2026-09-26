import Image from 'next/image';
import Img from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#151922] border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row  justify-between gap-5">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={Img}
              alt="FITLOG Logo"
              width={32}
              height={32}
            />

            <span className="text-lg sm:text-xl font-bold text-white">
              FITLOG
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;