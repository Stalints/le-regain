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
      className="group flex shrink-0 items-center justify-start text-left ml-0 sm:ml-8"
      aria-label="Go to home"
    >
      <div className={`relative transition-transform duration-300 group-hover:scale-[1.02] ${
        compact ? 'h-12 w-40' : 'h-14 w-48 sm:h-16 sm:w-56 md:h-18 md:w-64'
      }`}>
        <Image
          src="/logo-leregain.png"
          alt="Le Regain"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </button>
  );
}
