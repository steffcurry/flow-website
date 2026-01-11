import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/examples', label: 'Example Automations' },
    { to: '/team', label: 'Team' },
    { to: '/growth-framework', label: 'Growth Framework' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent tracking-tight hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
          >
            Coreflow Automation
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  location.pathname === link.to
                    ? 'text-emerald-400'
                    : 'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-cyan-500/30 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl">
          <div className="px-3 pt-2 pb-5 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all active:scale-95 ${
                  location.pathname === link.to
                    ? 'text-emerald-400 bg-emerald-500/15 border-2 border-emerald-500/30'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 border-2 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-base font-semibold rounded-xl text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 shadow-cyan-500/30 mt-3 active:scale-95"
            >
              Request an Automation Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
