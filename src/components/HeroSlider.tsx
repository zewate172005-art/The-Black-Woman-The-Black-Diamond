import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getHeroQuotes, HeroQuote } from '../lib/supabase';
import BlackDiamond from './BlackDiamond';

const FALLBACK_QUOTES: HeroQuote[] = [
  { quote_text: 'Your dreams is a diamond, achieve it no matter what challenges you face.', attribution: 'The Black Woman, The Black Diamond (BWBD)', active: true, sort_order: 1 },
  { quote_text: 'You are not alone. You are not the first one to face these challenges. Look, there are lots of other girls and women who succeeded regardless of all these challenges.', attribution: 'The Black Woman, The Black Diamond', active: true, sort_order: 2 },
  { quote_text: 'Women and girls are the heartbeat of tomorrow, the voice in the silence, the strength in the struggle. When they rise, whole communities rise. When they succeed, they break chains — not just for themselves, but for generations.', attribution: 'The Black Woman, The Black Diamond Philosophy', active: true, sort_order: 3 },
  { quote_text: 'She bears the weight of generations — unrewarded, unrecognized, yet unbreakable.', attribution: 'The Black Woman, The Black Diamond Philosophy', active: true, sort_order: 4 },
  { quote_text: 'The life experiences of a woman who fought to succeed is not just a story to tell and be forgotten. It is a burning inspiration to spread across the world like veld fire.', attribution: 'Daina Mutindi', active: true, sort_order: 5 },
  { quote_text: 'When she rises, families, communities and nations rise.', attribution: 'Daina Mutindi', active: true, sort_order: 6 },
  { quote_text: 'Just because you are a girl, you are not vulnerable — you represent greatness.', attribution: 'Daina Mutindi', active: true, sort_order: 7 },
  { quote_text: 'Die Empty — share your story while you are still alive, to die liberated for life changing impact.', attribution: 'The Black Woman, The Black Diamond', active: true, sort_order: 8 },
  { quote_text: 'Black, beautiful, bold, rare, radiant, and real.', attribution: 'The Black Diamond Philosophy', active: true, sort_order: 9 },
  { quote_text: 'Challenges come to refine you. Do not give up on your dream; fight to reach success and shine like a black diamond.', attribution: 'The Black Woman, The Black Diamond', active: true, sort_order: 10 },
];

const BG_IMAGES = [
  '/slides/WhatsApp_Image_2026-06-23_at_13.23.31.jpeg',
  '/slides/WhatsApp_Image_2026-06-22_at_14.50.26.jpeg',
  '/slides/WhatsApp_Image_2026-06-22_at_14.53.54.jpeg',
  '/slides/WhatsApp_Image_2026-06-22_at_14.43.08.jpeg',
  '/slides/WhatsApp_Image_2026-06-23_at_13.29.20.jpeg',
  '/slides/WhatsApp_Image_2026-06-22_at_13.48.58.jpeg',
  '/slides/WhatsApp_Image_2026-06-23_at_13.30.42_(1).jpeg',
  '/slides/WhatsApp_Image_2026-06-23_at_13.54.50.jpeg',
  '/slides/WhatsApp_Image_2026-06-23_at_13.31.32_(1).jpeg',
  '/slides/WhatsApp_Image_2026-06-23_at_13.32.05_(1).jpeg',
];

// These slides use blurred-bg technique: full image visible, no black sidelines
const BLURRED_BG_SLIDES = new Set([0, 4, 8, 9]);

export default function HeroSlider() {
  const [quotes, setQuotes] = useState<HeroQuote[]>(FALLBACK_QUOTES);
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    getHeroQuotes().then(data => { if (data.length > 0) setQuotes(data); });
  }, []);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent((idx + quotes.length) % quotes.length);
      setFading(false);
    }, 400);
  }, [quotes.length]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const q = quotes[current];
  const bgImage = BG_IMAGES[current % BG_IMAGES.length];
  const useBlurredBg = BLURRED_BG_SLIDES.has(current);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-onyx-950">

      {useBlurredBg ? (
        <>
          {/* Blurred backdrop fills the screen completely — no black sidelines */}
          <img
            key={`blur-${bgImage}`}
            src={bgImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60 transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-60'}`}
          />
          {/* Actual image centered, full picture visible */}
          <img
            key={bgImage}
            src={bgImage}
            alt=""
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
          />
        </>
      ) : (
        <img
          key={bgImage}
          src={bgImage}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}

      {/* Gradient overlay — dark only at the bottom third where text sits */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.78) 70%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Quote block — sits at the bottom so the image shows above */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-12 pb-16 pt-12 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
            <blockquote className="flex flex-col items-center text-center gap-4">
              <BlackDiamond size={48} className="flex-shrink-0 drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
              <div>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  "{q.quote_text}"
                </p>
                {q.attribution && (
                  <footer className="mt-5 text-xs sm:text-sm tracking-widest uppercase font-semibold text-gold-400 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                    — {q.attribution}
                  </footer>
                )}
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {quotes.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/70 transition-all flex items-center justify-center z-10"
        onClick={() => goTo(current - 1)}
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/70 transition-all flex items-center justify-center z-10"
        onClick={() => goTo(current + 1)}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
