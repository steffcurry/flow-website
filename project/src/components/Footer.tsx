import { Link } from 'react-router-dom';
import { Shield, Lock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 backdrop-blur-sm border-t border-cyan-500/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Coreflow Automation
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Custom AI automation systems for local service businesses. We design operational infrastructure — not experiments.
            </p>
            <div className="flex items-start gap-1.5 text-slate-500 text-xs">
              <MapPin size={12} className="flex-shrink-0 mt-0.5" />
              <span>Based in Greece — serving businesses across Europe</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/solutions', label: 'Solutions' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/examples', label: 'Example Automations' },
                { to: '/team', label: 'Team' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2">
              {[
                { to: '/industries/dental', label: 'Dental Clinics' },
                { to: '/industries/real-estate', label: 'Real Estate' },
                { to: '/industries/med-spa', label: 'Med Spas' },
                { to: '/industries/aesthetic-clinics', label: 'Aesthetic Clinics' },
                { to: '/industries/plumbing', label: 'Plumbing' },
                { to: '/industries/hvac', label: 'HVAC' },
                { to: '/industries/law-firms', label: 'Law Firms' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">Legal & Security</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</Link></li>
            </ul>
            <div className="space-y-2">
              {[
                { Icon: Shield, label: 'GDPR Compliant' },
                { Icon: Lock, label: 'Data Encrypted in Transit & at Rest' },
                { Icon: Shield, label: 'No Training on Client Data' },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={12} className="text-cyan-500 flex-shrink-0" />
                  <span className="text-slate-500 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 Coreflow Automation. All rights reserved.</p>
          <Link
            to="/demo"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            ▶ Try the Live Demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
