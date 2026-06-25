import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BlackDiamond from './BlackDiamond';

const links = [
  { label: 'Home', to: '/' },
  { label: 'The Book', to: '/book' },
  { label: 'Philosophy', to: '/about' },
  { label: 'The Author', to: '/author' },
  { label: 'Pillars', to: '/pillars' },
  { label: 'Training', to: '/training' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-onyx-900/95 backdrop-blur-md border-b border-gold-700/30 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <BlackDiamond size={24} />
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-white text-base tracking-wide group-hover:text-gold-400 transition-colors">
                BWBD
              </span>
              <span className="text-gold-600/80 text-xs tracking-wider hidden sm:block">The Black Diamond Philosophy</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium tracking-wider uppercase transition-all duration-200 relative group ${
                  location.pathname === to ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                  location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/book"
              className="px-5 py-2 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold text-sm uppercase tracking-wider rounded transition-all duration-200 hover:shadow-lg hover:shadow-gold-600/30"
            >
              Buy Now
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 hover:text-gold-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-onyx-900/98 backdrop-blur-md border-t border-gold-700/20 px-4 pb-6 pt-4 space-y-4 animate-fade-in">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                location.pathname === to ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/book"
            className="block w-full text-center px-5 py-3 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold text-sm uppercase tracking-wider rounded transition-all duration-200"
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>
  );
}
