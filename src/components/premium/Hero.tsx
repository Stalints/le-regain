'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_TEAL, heroSlides } from '@/data/premiumSite';

type HeroProps = {
  onBook: () => void;
};

export default function Hero({ onBook }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6200;
    const interval = 50;
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          setCurrent((slide) => (slide + 1) % heroSlides.length);
          return 0;
        }
        return value + (interval / duration) * 100;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, []);

  const chooseSlide = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  return (
    <section id="home" className="relative h-[86vh] min-h-[620px] overflow-hidden bg-black">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-transparent sm:bg-gradient-to-r sm:via-black/40" />
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-linear ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 z-20 mx-auto flex max-w-7xl items-center px-4 pt-16 sm:px-6 sm:pt-0 lg:px-8">
            <div className="w-full max-w-2xl text-left">
              <p
                className={`mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all delay-100 duration-1000 ${
                  index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.eyebrow}
              </p>
              <h1
                className={`mb-6 text-4xl font-bold leading-[1.08] text-white drop-shadow-2xl transition-all delay-300 duration-1000 sm:text-5xl lg:text-7xl ${
                  index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`mb-9 max-w-xl text-lg font-light leading-relaxed text-gray-200 drop-shadow-md transition-all delay-500 duration-1000 sm:text-xl lg:text-2xl ${
                  index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex flex-col gap-3 transition-all delay-700 duration-1000 sm:flex-row ${
                  index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <a
                  href="#services"
                  className="inline-flex w-full items-center justify-center rounded-full px-7 py-4 text-center text-base font-bold text-white shadow-[0_0_20px_rgba(104,166,158,0.4)] transition-all hover:bg-white hover:text-[#68a69e] sm:w-auto"
                  style={{ backgroundColor: BRAND_TEAL }}
                >
                  {slide.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button
                  type="button"
                  onClick={onBook}
                  className="w-full rounded-full border-2 border-white/50 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black sm:w-auto"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3 px-4 sm:bottom-10 sm:gap-4">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => chooseSlide(index)}
            className="relative h-1.5 w-12 overflow-hidden rounded-full bg-white/30 sm:w-16"
            aria-label={`Show ${slide.title}`}
          >
            {index === current && (
              <span
                className="absolute left-0 top-0 h-full bg-[#68a69e]"
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
