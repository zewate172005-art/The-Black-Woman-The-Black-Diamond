import { Clock } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pillars() {
  return (
    <div className="bg-onyx-950 min-h-screen text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Quote */}
        <div
          className="relative py-28 lg:py-36 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f00 60%, #0a0a0a 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.5) 0%, transparent 65%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <BlackDiamond size={48} className="mx-auto mb-8" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed font-medium mb-8">
              "You are not alone, you are not the first one to face these challenges,
              look, there are lots of other girls and women out there who succeeded
              remarkably regardless of all these challenges."
            </blockquote>
            <footer className="text-gold-400 text-sm uppercase tracking-widest font-semibold">
              — By Daina Mutindi
            </footer>
          </div>
        </div>

        {/* Coming Soon */}
        <section className="py-24 px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-4 h-4 text-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Coming Soon</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Stories of Great <span className="text-gold-400">The Black Woman and Black Diamond</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              The Black Woman and Black Diamond are the remarkable women who rose and succeeded from invisibility through courage, determination, and enlightenment. Their real-life stories of triumph against all odds will inspire the next generation of girls and young people to believe in themselves and in their capacity to achieve their "diamond dreams". These inspirational women help girls and young people to see self-worth in adverse discrimination, based on gender, race and other negative forces, and restore hope to keep seeing possibilities even in closed doors, and keep focus on their life vision. This helps women and girls to build a bigger vision that puts their human worth highly, as a priority and builds a culture of her refusing to let herself down — she is powered and empowered to overcome all challenges that put her value and worth down. They inspire women and girls to follow their life aspirations, that "it is possible to see the world through the eyes of an African girl, the black woman".
            </p>

            <div className="w-16 h-px bg-gold-700/50 mx-auto mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Women Who Rose and Succeeded', 'Against All Odds', 'Their Legacy Lives On'].map((item) => (
                <div
                  key={item}
                  className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl px-4 py-5 text-sm text-gray-400 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
