'use client';

import Image from 'next/image';

type LogoProps = {
  isLight?: boolean;
  onClick?: () => void;
  compact?: boolean;
};

export default function Logo({ isLight = false, onClick, compact = false }: LogoProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex shrink-0 flex-col items-center text-left"
      aria-label="Go to home"
    >
      <div className={`relative transition-transform duration-300 group-hover:scale-[1.02] ${
        compact ? 'h-12 w-40' : 'h-16 w-52 sm:h-20 sm:w-64'
      }`}>
        <Image
          src="/logo-leregain.png"
          alt="Le Regain"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span
        className={`-mt-1 ml-8 rounded-full px-3 py-1 shadow-sm sm:-mt-2 sm:ml-12 sm:px-4 ${
          isLight ? 'border border-white/20 bg-white/20 backdrop-blur-md' : 'bg-[#737976]'
        }`}
      >
        <span className="block font-serif text-[10px] uppercase tracking-[0.22em] text-white sm:text-xs">
          Hair & Skin Clinic
        </span>
      </span>
    </button>
  );
}
