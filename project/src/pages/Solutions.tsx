import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Bot, Calendar, Settings, Globe, Cog, ArrowRight, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const ICONS = [MessageSquare, Phone, Bot, Calendar, Settings, Globe, Cog];

export default function Solutions() {
  const { lang } = useLang();
  const t = pagesT[lang].solutions;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">{t.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-4 leading-relaxed">{t.desc}</p>
          </div>

          <FadeIn>
            <div className="mb-20 bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest text-center mb-2">{t.archBadge}</p>
              <h3 className="text-lg font-semibold text-slate-100 text-center mb-8">{t.archTitle}</h3>
              <div className="overflow-x-auto">
                <div className="flex items-center gap-0 min-w-[700px] mx-auto max-w-4xl">
                  {t.archCols.map(({ label, items }, i, arr) => (
                    <div key={label} className="flex items-center flex-1">
                      <div className={`flex-1 border rounded-xl p-4 ${i===0?'border-slate-600 bg-slate-800/60':i===1?'border-cyan-500/40 bg-cyan-500/5':i===2?'border-blue-500/40 bg-blue-500/5':'border-green-500/30 bg-green-500/5'}`}>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3 text-center">{label}</p>
                        <ul className="space-y-1.5">
                          {items.map(item => (
                            <li key={item} className="text-slate-300 text-xs flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {i < arr.length - 1 && <ChevronRight size={20} className="text-slate-600 flex-shrink-0 mx-1" />}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-xs text-center mt-6">{t.archNote}</p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {t.solutions.map((solution, index) => {
              const Icon = ICONS[index];
              return (
                <FadeIn key={solution.id}>
                  <div id={solution.id} className="group bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-colors duration-200">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                          <Icon className="text-cyan-400" size={32} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors duration-200">{solution.title}</h2>
                        <p className="text-lg text-slate-300 mb-4 leading-relaxed">{solution.description}</p>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                          <span className="font-semibold">{t.businessFn}:</span> {solution.fn}
                        </p>
                        <ul className="space-y-3">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-slate-400">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 shadow-lg shadow-cyan-500/20">
              {t.cta}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
