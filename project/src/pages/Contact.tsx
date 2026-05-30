import { useEffect } from 'react';
import { Calendar, Mail } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

export default function Contact() {
  const { lang } = useLang();
  const t = pagesT[lang].contact;

  useEffect(() => {
    document.title = lang === 'gr'
      ? 'Κλείστε Δωρεάν Έλεγχο | Coreflow Automation'
      : 'Book a Free Automation Audit | Coreflow Automation';
    return () => { document.title = 'Coreflow Automation | AI Automation Agency'; };
  }, [lang]);

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-cyan-400 font-medium mb-4">{t.badge}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              {t.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
            <div className="max-w-2xl mx-auto mt-8 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-sm text-slate-400 leading-relaxed">{t.desc}</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
            <div className="space-y-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {t.cta}<span className="font-semibold text-cyan-400">{t.ctaBold}</span>.
              </p>
              <a
                href="https://calendar.app.google/wmsFSP26C5nddYTE7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 shadow-lg shadow-cyan-500/20"
              >
                <Calendar className="mr-2" size={20} />
                {t.btn}
              </a>
              <p className="text-slate-300 leading-relaxed">
                {t.after}{' '}
                <a href="mailto:contact@coreflowautomation.net" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center">
                  <Mail className="mr-1" size={16} />
                  contact@coreflowautomation.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
