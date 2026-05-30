import { Link } from 'react-router-dom';
import { Shield, Lock, MapPin } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

export default function Footer() {
  const { lang } = useLang();
  const t = pagesT[lang].footer;

  return (
    <footer className="bg-slate-950/50 border-t border-cyan-500/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Coreflow Automation
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{t.tagline}</p>
            <div className="flex items-start gap-1.5 text-slate-500 text-xs">
              <MapPin size={12} className="flex-shrink-0 mt-0.5" />
              <span>{t.location}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">{t.company}</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: t.links.home },
                { to: '/receptionist', label: t.links.receptionist },
                { to: '/solutions', label: t.links.solutions },
                { to: '/audit', label: t.links.audit },
                { to: '/pricing', label: t.links.pricing },
                { to: '/integrations', label: t.links.integrations },
                { to: '/insights', label: t.links.insights },
                { to: '/how-it-works', label: t.links.howItWorks },
                { to: '/contact', label: t.links.contact },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">{t.industries}</h4>
            <ul className="space-y-2">
              {[
                { to: '/industries/dental', label: t.industryLinks.dental },
                { to: '/industries/real-estate', label: t.industryLinks.realEstate },
                { to: '/industries/med-spa', label: t.industryLinks.medSpa },
                { to: '/industries/aesthetic-clinics', label: t.industryLinks.aesthetic },
                { to: '/industries/plumbing', label: t.industryLinks.plumbing },
                { to: '/industries/hvac', label: t.industryLinks.hvac },
                { to: '/industries/law-firms', label: t.industryLinks.lawFirms },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider">{t.legal}</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{t.privacy}</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{t.terms}</Link></li>
            </ul>
            <div className="space-y-2">
              {[
                { Icon: Shield, label: t.gdpr },
                { Icon: Lock, label: t.encrypted },
                { Icon: Shield, label: t.noTrain },
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
          <p className="text-slate-500 text-sm">{t.copyright}</p>
          <Link to="/demo" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            {t.tryDemo}
          </Link>
        </div>
      </div>
    </footer>
  );
}
