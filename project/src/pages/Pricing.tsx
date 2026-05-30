import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, X, TrendingUp, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const TIER_COLORS = [
  { tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30', border: 'border-cyan-500/30', highlight: false },
  { tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30', border: 'border-blue-500/40', highlight: true },
  { tagColor: 'text-slate-400 bg-slate-500/10 border-slate-500/30', border: 'border-slate-600/40', highlight: false },
];

export default function Pricing() {
  const { lang } = useLang();
  const t = pagesT[lang].pricing;

  useEffect(() => {
    document.title = lang === 'gr'
      ? 'Τιμές — AI Αυτοματοποίηση από €297/μήνα | Coreflow Automation'
      : 'Pricing — AI Automation Systems from €297/mo | Coreflow Automation';
    return () => { document.title = 'Coreflow Automation | AI Automation Agency'; };
  }, [lang]);

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-100">{t.title}</h1>
          <p className="text-xl text-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
          <p className="text-slate-500 text-sm mb-16">{t.note}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {t.tiers.map((tier, i) => {
              const { tagColor, border, highlight } = TIER_COLORS[i];
              return (
                <div key={tier.name} className={`relative bg-slate-900/40 border ${border} rounded-2xl p-8 flex flex-col ${highlight ? 'shadow-xl shadow-blue-500/10 scale-[1.02]' : ''}`}>
                  <div className="mb-6">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${tagColor}`}>{tier.tag}</span>
                    <h2 className="text-2xl font-bold text-slate-100 mb-1">{tier.name}</h2>
                    <p className="text-3xl font-bold text-white mt-3 mb-1">{tier.price}</p>
                    <p className="text-slate-500 text-sm">{tier.billing}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.description}</p>
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{t.includes}</p>
                    <ul className="space-y-2">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-8">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{t.examples}</p>
                    <ul className="space-y-1">
                      {tier.examples.map((ex) => (
                        <li key={ex} className="text-slate-500 text-xs flex items-start gap-1.5">
                          <span className="text-cyan-500 mt-0.5">—</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors duration-200 ${highlight ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90' : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500/40 hover:text-white'}`}
                  >
                    {tier.cta} <ArrowRight className="inline ml-1" size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          <FadeIn>
            <div className="max-w-4xl mx-auto mb-16 bg-slate-900/50 border border-cyan-500/20 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-cyan-400 flex-shrink-0" size={22} />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-100">{t.howTitle}</h2>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">{t.howBody}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {t.examples.map(({ label, before, value, cost, ratio, payback }) => (
                  <div key={label} className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">{label}</p>
                    <p className="text-slate-500 text-xs mb-2 flex items-start gap-1"><X size={10} className="text-red-400 flex-shrink-0 mt-0.5"/>{before}</p>
                    <p className="text-slate-300 text-sm font-medium mb-2">{value}</p>
                    <p className="text-slate-500 text-xs mb-1">{cost}</p>
                    <p className="text-cyan-400 text-xs font-semibold mb-2">{ratio}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1"><Clock size={10}/>{payback}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {t.stats.map(({ n, label }) => (
                  <div key={n} className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">
                    <p className="text-2xl font-bold text-white mb-1">{n}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="max-w-2xl mx-auto bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 mb-16">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">{t.neverTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t.never.map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-500 text-sm">
                  <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.auditTitle}</h2>
            <p className="text-slate-400 mb-4 max-w-xl mx-auto">{t.auditBody}</p>
            <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto">{t.auditNote}</p>
            <Link to="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
              {t.auditBtn}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
