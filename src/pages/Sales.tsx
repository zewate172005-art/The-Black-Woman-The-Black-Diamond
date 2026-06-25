import { Link } from 'react-router-dom';
import { ShoppingCart, Check, BookOpen, Truck, Shield, Download, ArrowRight } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCover from '../components/BookCover';

const HIGHLIGHTS = [
  'Transformative Afrocentric philosophy by Daina Mutindi',
  'The Ten Selves framework for women\'s empowerment',
  'Real-life stories of African women who triumphed',
  'The Black Diamond analogy — forged under hardship',
  'Inspiration to Die Empty and share your legacy',
  'A call to action for every Black woman worldwide',
];

const TEN_SELVES_PREVIEW = [
  { num: '01', title: 'Self-Love', desc: 'Embrace your identity with love, pride, and highest self-appreciation.' },
  { num: '02', title: 'Self-Value', desc: 'Recognize your inherent worth from within — not through external judgment.' },
  { num: '03', title: 'Self-Power', desc: 'Discover your strengths and take full control of your life.' },
  { num: '04', title: 'Self-Determination', desc: 'Stay geared to achieve positive outcomes in difficult circumstances.' },
  { num: '05', title: 'Self-Belief', desc: 'Believing in oneself is the beginning of self-trust and excellence.' },
  { num: '06', title: 'Self-Victory', desc: 'Build a victorious mindset that keeps you focused on your dreams.' },
];


export default function Sales() {
  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-20 lg:pt-24">
        <div className="min-h-[90vh] flex items-center bg-gradient-to-b from-onyx-900 to-onyx-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gold-500" />
                  <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">BWBD — Official Book Purchase</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  The Black Woman,<br />
                  <span className="text-gold-400">The Black Diamond</span><br />
                  <span className="text-xl sm:text-2xl text-gray-400 font-normal">Philosophy</span>
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <BlackDiamond key={i} size={14} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">Highly Recommended</span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                  An Afrocentric philosophy that inspires African girls to succeed in their life goals
                  in difficult circumstances — never to give up their <span className="text-gold-400 font-semibold">Diamond dreams</span>.
                  Like the black diamond she is forged under hardship, yet reveals
                  extraordinary brilliance when unearthed and given opportunity.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {HIGHLIGHTS.map(h => (
                    <li key={h} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gold-400" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-bold text-gold-400 font-serif">$5.50</span>
                  <div>
                    <p className="text-gray-300 text-sm">Physical copy</p>
                    <p className="text-gray-500 text-xs">Free digital PDF included</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/checkout"
                    className="flex items-center justify-center gap-2 px-10 py-4 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-gold-600/30 group"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now — $5.50
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center justify-center gap-2 px-8 py-4 border border-gold-700/40 hover:border-gold-500 text-gold-400 hover:text-gold-300 font-semibold rounded-xl transition-all duration-200"
                  >
                    Learn the Philosophy
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="mt-3 text-gray-600 text-xs">Secure checkout · Pay via Mpesa</p>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center lg:justify-end order-first lg:order-last">
                <div className="relative w-72 sm:w-80 lg:w-96">
                  <div className="absolute inset-0 bg-gold-500/15 rounded-2xl blur-3xl transform scale-110" />
                  <BookCover className="shadow-2xl" />
                  <div className="absolute -top-4 -right-4 bg-gold-600 text-onyx-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                    New Release
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-y border-gold-800/20 bg-onyx-900/40 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: 'Secure Payment', sub: 'Mpesa' },
              { icon: Truck, label: 'Worldwide Delivery', sub: '7–14 Business Days' },
              { icon: Download, label: 'Digital PDF', sub: 'Instant Access' },
              { icon: BookOpen, label: '23 Pages', sub: 'Deep Philosophy' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="space-y-1">
                <Icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-gray-500 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About the Book — split layout with image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gold-500/10 rounded-2xl blur-2xl transform scale-105" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-700/20">
              <img
                src="/image_2.jpg"
                alt="Black Diamond — power and resilience"
                className="w-full object-cover"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <blockquote className="font-serif text-white text-lg italic leading-relaxed">
                  "She bears the weight of generations — unrewarded, unrecognized, yet unbreakable."
                </blockquote>
                <p className="mt-2 text-gold-400 text-xs uppercase tracking-widest">— The Black Diamond Philosophy</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Synopsis</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              What This Book Is About
            </h2>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Despite their strength, women and girls are systematically disadvantaged. This philosophy
                inspires Black girls to rise from the invisibility of the various barriers and negative forces
                that always block them from succeeding in their life goals.
              </p>
              <p>
                The Black Woman, The Black Diamond philosophy draws from a vivid parallel between the
                black woman and the black diamond — both hidden deep beneath the surface, both forged
                under pressure, and both long ignored.
              </p>
              <p>
                When polished, supported, and given opportunity, both reveal unique characteristics —
                <span className="text-gold-400 font-semibold"> black, beautiful, bold, radiant, rare, resilient, and real</span>.
              </p>
              <p>
                Like a diamond underground, Black women and girls' dreams are buried, made invisible by
                the triple impact of gender inequality, social exclusion, and racism. But when she rises,
                families, communities, and nations rise.
              </p>
            </div>
            <Link
              to="/checkout"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-gold-600/30 group"
            >
              <ShoppingCart className="w-5 h-5" />
              Get Your Copy — $5.50
            </Link>
          </div>
        </div>
      </section>

      {/* Inside the Book */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-onyx-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Inside the Book</span>
              <div className="h-px w-8 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">The Ten Selves — A Preview</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Six of the ten transformative principles you will discover in the philosophy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEN_SELVES_PREVIEW.map(s => (
              <div
                key={s.num}
                className="group bg-onyx-900 border border-onyx-700/50 hover:border-gold-700/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex gap-4"
              >
                <span className="font-serif text-3xl font-bold text-gold-700/40 group-hover:text-gold-600/60 transition-colors leading-none shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-serif font-bold text-gold-400 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mt-8">
            + 4 more transformative selves inside the book
          </p>
        </div>
      </section>


      {/* Author Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-onyx-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-gold-700/20 bg-gradient-to-br from-onyx-900 to-onyx-800 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="/images/author/WhatsApp_Image_2026-06-23_at_00.59.33_(1).jpeg"
                alt="Daina Mutindi — Author"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-onyx-900/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-900/70 to-transparent lg:hidden" />
            </div>
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">About the Author</span>
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4">
                Daina <span className="text-gold-400">Mutindi</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A seasoned woman leader and advocate dedicated to advancing human rights, with passion for
                education, gender equality, inclusion, and social justice. Inspired by her own journey of
                overcoming significant gender-related barriers, Daina is an inspirational speaker and
                mentor based in Maputo, Mozambique.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/author"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gold-700/40 hover:border-gold-500 text-gold-400 hover:text-gold-300 font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Full Bio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — full-width image background */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Image_1.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/85 via-onyx-950/75 to-onyx-950/90" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <BlackDiamond size={40} className="mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Shine Like a <span className="text-gold-400">Diamond</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Order your copy and join the Global movement of women inspiring girls to succeed, achieve and overcome setbacks and challenges.
          </p>
          <Link
            to="/checkout"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold text-xl rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-gold-600/40 group"
          >
            <ShoppingCart className="w-6 h-6" />
            Order Now — $5.50
          </Link>
          <p className="mt-4 text-gray-500 text-sm">Secure checkout · Card, Mpesa, or Gift Code</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
