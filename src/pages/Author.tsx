import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Globe, Heart } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ACHIEVEMENTS = [
  { icon: Award, text: 'Led development of Girls and Women Economic Empowerment Strategy for UN Women Mozambique' },
  { icon: Globe, text: 'Contributed to designing the National Youth Strategy for Generation Equality' },
  { icon: BookOpen, text: 'First among eighteen siblings from a polygamous family to complete high school and university' },
  { icon: Heart, text: 'Inspirational speaker and mentor shaping positive vision for children, youth, women and girls' },
];

export default function Author() {
  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-20 lg:pt-24">
        <div
          className="relative py-20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f00 60%, #0a0a0a 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(212,175,55,0.4) 0%, transparent 60%)' }}
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gold-500" />
                  <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">About the Author</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Daina<br />
                  <span className="text-gold-400">Mutindi</span>
                </h1>
                <p className="text-gray-300 text-xl font-light italic mb-6">
                  Seasoned woman leader, advocate, and Black Diamond.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  A strategic woman leader dedicated to advancing human rights, with passion for
                  education, gender equality, inclusion, and social justice. Based in Maputo, Mozambique.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 sm:w-72">
                  <div className="absolute inset-0 bg-gold-500/15 rounded-full blur-3xl" />
                  <img
                    src="/images/author/WhatsApp_Image_2026-06-23_at_00.59.33_(1).jpeg"
                    alt="Author portrait"
                    className="relative rounded-2xl w-full object-cover shadow-2xl border border-gold-700/30"
                    style={{ aspectRatio: '3/4' }}
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
                    <div className="bg-onyx-900 border border-gold-700/30 rounded-xl py-3 px-4 text-center shadow-xl">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <BlackDiamond size={14} />
                        <span className="text-gold-400 text-sm font-semibold">Daina Mutindi</span>
                      </div>
                      <p className="text-gray-500 text-xs">Maputo, Mozambique · 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-300 leading-relaxed">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Her Story</span>
            </div>
            <p>
              Daina Mutindi is a seasoned and strategic woman leader and advocate dedicated to advancing
              human rights, with passion for education, gender equality, inclusion, and social justice.
              She has held leadership roles across multiple organizations, contributing to innovative
              approaches for powering and empowering people in need, mainly children, women and girls.
            </p>
            <p>
              Inspired by her own real-life journey of overcoming significant gender-related barriers,
              Daina is an inspirational speaker and mentor committed to shaping positive vision and
              success on children, youth, women and girls.
            </p>
            <p>
              She rose from challenging circumstances — she fought to complete her education, including
              being obliged to take virginity tests as a condition to be able to attend school. She became
              pregnant during her first year of studies at university, balancing motherhood, university
              studies, and self-care while living alone in a city far from home.
            </p>
            <p>
              Regardless of the difficulties, her vigor for succeeding was much stronger — she was the
              <span className="text-gold-400 font-semibold"> first among eighteen siblings, from a polygamous family</span>, to
              complete high school and graduate from university to become an independent and influential leader.
            </p>
            <p>
              Her lived experience shapes her writing in the philosophy of The Black Woman, the Black Diamond,
              which centers on the power of traditional storytelling and sharing real-life inspirational stories
              from women who fought to succeed in life, in collective support inspiring girls to achieve
              their life dreams, and to <span className="text-gold-400 font-semibold">"shine like a diamond"</span>.
            </p>
            <p className="text-gray-500 text-sm italic">
              Written: 23 March 2025, Maputo, Mozambique<br />
              Reviewed by: Melany Boyd and Dr. Claudia Harvey
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-gold-400 font-bold text-lg mb-6">Key Achievements</h3>
            {ACHIEVEMENTS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex gap-3 bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-gold-700/20 border border-gold-700/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-gold-500" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote from the author */}
      <section className="py-16 border-y border-gold-800/20 bg-onyx-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <BlackDiamond size={32} className="mx-auto mb-6" />
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed italic">
            "Behind every successful African woman, there is a story about her struggles to succeed.
            It's a story about the dream she dreamt about her future, and how she fought the fight
            for her dream to come true."
          </blockquote>
          <footer className="mt-6 text-gold-400 text-sm uppercase tracking-widest">— Daina Mutindi</footer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Read the <span className="text-gold-400">Philosophy</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Discover Daina Mutindi's transformative work that has inspired women and girls across Africa
            and beyond to rise, shine, and lead.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-gold-600/30 group"
          >
            Get the Book
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
