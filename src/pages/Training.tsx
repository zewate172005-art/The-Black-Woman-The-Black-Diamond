import { Clock, Mail } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Training() {
  return (
    <div className="bg-onyx-950 min-h-screen text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-24">
        <div className="max-w-2xl w-full text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-2xl scale-150" />
              <div className="relative w-20 h-20 rounded-full bg-onyx-900 border border-gold-700/40 flex items-center justify-center">
                <BlackDiamond size={40} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-gold-500" />
            <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Coming Soon</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Training for<br />
            <span className="text-gold-400">Institutions & Individuals</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We are building a powerful training programme rooted in the Black Diamond Philosophy —
            designed to empower institutions and individuals to rise, lead, and create lasting impact.
            Stay tuned.
          </p>

          <div className="w-16 h-px bg-gold-700/50 mx-auto mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {['Leadership Development', 'Gender Equality Workshops', 'Mentorship Programmes'].map((item) => (
              <div
                key={item}
                className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl px-4 py-5 text-sm text-gray-400 font-medium"
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href="mailto:info@bwbd.org"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-700/20 border border-gold-700/40 hover:bg-gold-700/30 hover:border-gold-500 text-gold-400 font-semibold rounded-xl transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Get Notified When We Launch
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
