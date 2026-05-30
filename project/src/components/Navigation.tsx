import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const SOLUTIONS = [
  { to: '/solutions/voice-receptionist', label: 'Voice Receptionist' },
  { to: '/solutions/lead-qualification', label: 'Lead Qualification' },
  { to: '/solutions/customer-support', label: 'Customer Support' },
  { to: '/solutions/appointment-booking', label: 'Appointment Booking' },
  { to: '/solutions/operations', label: 'Internal Operations' },
  { to: '/solutions', label: '→ View All Solutions' },
];

const INDUSTRIES = [
  { to: '/industries/dental', label: 'Dental Clinics' },
  { to: '/industries/real-estate', label: 'Real Estate' },
  { to: '/industries/med-spa', label: 'Med Spas' },
  { to: '/industries/aesthetic-clinics', label: 'Aesthetic Clinics' },
  { to: '/industries/plumbing', label: 'Plumbing' },
  { to: '/industries/hvac', label: 'HVAC' },
  { to: '/industries/law-firms', label: 'Law Firms' },
];

function Dropdown({ label, items, isOpen, onToggle }: {
  label: string;
  items: { to: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onToggle();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-52 bg-slate-950/95 backdrop-blur-xl border border-slate-700/60 rounded-xl shadow-2xl shadow-black/40 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onToggle}
              className="block px-4 py-2.5 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();
  const nt = pagesT[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const openMenu = (name: string) => setOpenDropdown(o => o === name ? null : name);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-200">
            <img src="/favicon.jpg" alt="Coreflow" className="w-7 h-7 rounded-md" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
              Coreflow Automation
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            <Dropdown label={nt.solutions} items={SOLUTIONS} isOpen={openDropdown === 'solutions'} onToggle={() => openMenu('solutions')} />
            <Dropdown label={nt.industries} items={INDUSTRIES} isOpen={openDropdown === 'industries'} onToggle={() => openMenu('industries')} />
            <Link to="/receptionist" className={`text-sm font-medium transition-colors hover:text-cyan-400 ${location.pathname === '/receptionist' ? 'text-cyan-400' : 'text-slate-300'}`}>{nt.receptionist}</Link>
            <Link to="/how-it-works" className={`text-sm font-medium transition-colors hover:text-cyan-400 ${location.pathname === '/how-it-works' ? 'text-cyan-400' : 'text-slate-300'}`}>{nt.howItWorks}</Link>
            <Link to="/pricing" className={`text-sm font-medium transition-colors hover:text-cyan-400 ${location.pathname === '/pricing' ? 'text-cyan-400' : 'text-slate-300'}`}>{nt.pricing}</Link>
            <Link to="/audit" className="text-sm font-medium text-slate-300 hover:text-cyan-400 border border-slate-600/60 hover:border-cyan-500/40 px-4 py-2 rounded-lg transition-colors">
              {nt.freeAudit}
            </Link>
            <button
              onClick={toggle}
              className="text-xs font-semibold text-slate-400 hover:text-cyan-400 border border-slate-700/60 hover:border-cyan-500/40 px-3 py-1.5 rounded-lg transition-colors tracking-wide"
              title={lang === 'en' ? 'Switch to Greek' : 'Αλλαγή σε Αγγλικά'}
            >
              {lang === 'en' ? 'ΕΛ' : 'EN'}
            </button>
            <Link to="/demo" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg transition-opacity hover:opacity-90">
              {nt.liveDemo}
            </Link>
          </div>

          <button className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950/97 backdrop-blur-xl border-b border-slate-700/40">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {/* Solutions */}
            <button onClick={() => setMobileSection(s => s === 'solutions' ? null : 'solutions')} className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg transition-colors">
              {nt.solutions} <ChevronDown size={14} className={`transition-transform ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'solutions' && SOLUTIONS.map(item => (
              <Link key={item.to} to={item.to} className="block px-8 py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">{item.label}</Link>
            ))}
            {/* Industries */}
            <button onClick={() => setMobileSection(s => s === 'industries' ? null : 'industries')} className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg transition-colors">
              {nt.industries} <ChevronDown size={14} className={`transition-transform ${mobileSection === 'industries' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSection === 'industries' && INDUSTRIES.map(item => (
              <Link key={item.to} to={item.to} className="block px-8 py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">{item.label}</Link>
            ))}
            {[
              { to: '/receptionist', label: nt.receptionist },
              { to: '/how-it-works', label: nt.howItWorks },
              { to: '/pricing', label: nt.pricing },
            ].map(link => (
              <Link key={link.to} to={link.to} className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-colors">{link.label}</Link>
            ))}
            <Link to="/audit" className="block px-4 py-2.5 text-sm font-medium text-slate-300 border border-slate-600/60 rounded-lg text-center mt-2 hover:border-cyan-500/40">
              {nt.freeAudit}
            </Link>
            <button onClick={toggle} className="w-full px-4 py-2.5 text-sm font-semibold text-slate-400 border border-slate-700/60 rounded-lg text-center transition-colors mt-1">
              {lang === 'en' ? '🇬🇷 Ελληνικά' : '🇬🇧 English'}
            </button>
            <Link to="/demo" className="block px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg text-center transition-opacity hover:opacity-90 mt-1">
              {nt.liveDemo}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
