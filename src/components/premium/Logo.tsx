'use client';

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
      <span className="flex items-baseline leading-none">
        <span
          className={`mr-1 font-serif italic transition-colors ${
            compact ? 'text-2xl' : 'text-2xl sm:text-3xl'
          } ${isLight ? 'text-white' : 'text-[#737976] group-hover:text-black'}`}
        >
          Le
        </span>
        <span
          className={`font-serif font-bold italic transition-transform duration-300 group-hover:scale-[1.035] ${
            compact ? 'text-4xl' : 'text-4xl sm:text-5xl'
          } ${isLight ? 'text-white' : 'text-[#68a69e]'}`}
        >
          Regain
        </span>
      </span>
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
