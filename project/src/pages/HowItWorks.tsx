import { Link } from 'react-router-dom';
import { FileSearch, Compass, Rocket, Shield, CheckCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';
import FadeIn from '../components/FadeIn';

const STEP_ICONS = [FileSearch, Compass, Rocket];

export default function HowItWorks() {
  const { lang } = useLang();
  const t = pagesT[lang].howItWorks;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">{t.title}</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
              <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">{t.desc1}</p>
              <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">{t.desc2}</p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-2xl font-bold text-slate-100 mb-10 text-center">{t.stepsTitle}</h2>
          </FadeIn>

          <div className="space-y-8">
            {t.steps.map(({ number, title, subtitle, description, details, output }, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <FadeIn key={number} delay={i * 100}>
                  <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                          <Icon className="text-cyan-400" size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-5xl font-bold text-cyan-500/15">{number}</span>
                          <div>
                            <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                            <p className="text-cyan-400 text-sm">{subtitle}</p>
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
                        <ul className="space-y-2 mb-4">
                          {details.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-slate-400 text-sm">
                              <CheckCircle size={13} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        {output && <p className="text-cyan-400 text-sm font-medium">{output}</p>}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={100}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-100 mb-6"><Shield className="inline text-cyan-400 mr-2" size={20} />{t.principlesTitle}</h3>
                <div className="flex flex-wrap gap-3">
                  {t.principles.map((p) => (
                    <span key={p} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">{p}</span>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900/40 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-100 mb-6">{t.riskTitle}</h3>
                <ul className="space-y-3">
                  {t.risks.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{t.ctaTitle}</h3>
              <Link to="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
                {t.ctaBtn}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
