import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BlackDiamond from './BlackDiamond';

export default function Footer() {
  return (
    <footer className="bg-onyx-950 border-t border-gold-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-1">
              <BlackDiamond size={24} />
              <span className="font-serif font-bold text-white text-xl">BWBD</span>
            </div>
            <p className="text-gold-700/70 text-xs uppercase tracking-widest mb-4">The Black Woman, The Black Diamond Philosophy</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Inspiring African girls to succeed in their life goals in difficult circumstances —
              never to give up their Diamond dreams. Training women leaders, mentors, educators,
              and communities to carry this philosophy forward.
            </p>
            <p className="mt-4 text-gold-500/80 text-sm italic font-serif">
              "Do not give up your Diamond dream — it is your birthright to succeed."
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 font-semibold uppercase tracking-wider text-xs mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'The Book', to: '/book' },
                { label: 'The Philosophy', to: '/about' },
                { label: 'The Author', to: '/author' },
                { label: 'Pillars', to: '/pillars' },
                { label: 'Training', to: '/training' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-semibold uppercase tracking-wider text-xs mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                <span>theblackwomantheblackdiamond@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                <span>841201146</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Maputo, Mozambique</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-800/30">
          <p className="text-center text-gray-400 text-sm leading-relaxed font-serif italic mb-8 max-w-3xl mx-auto">
            "In The Black Woman, The Black Diamond, women and girls support each other to restore each other's broken hopes thereby rebuilding a future."
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Black Diamond Books. All rights reserved. Written by Daina Mutindi.
          </p>
          <Link to="/admin" className="text-onyx-700 hover:text-gold-800 text-xs transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
