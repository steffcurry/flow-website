import { Link, useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, X } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

export default function Industry() {
  const { niche } = useParams<{ niche: string }>();
  const { lang } = useLang();
  const t = pagesT[lang].industry;
  const industryData = pagesT[lang].industryData;
  const data = niche ? industryData[niche] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-4">{t.notFound}</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">{t.notFoundLink}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">{t.aiFor} {data.name}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6 leading-tight">{data.headline}</h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">{data.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
              <Phone size={18} />{t.hearLive}
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/60 border border-slate-600/50 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/40 hover:text-white transition-colors">
              {t.requestAudit}<ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-10 text-center">
            {t.problemsTitle} {data.name.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.pains.map((pain) => (
              <div key={pain} className="flex items-start gap-3 bg-slate-900/40 border border-red-500/15 rounded-xl p-5">
                <X size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System + ROI */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">{t.systemLabel}</p>
            <h3 className="text-lg font-bold text-slate-100 mb-6">{data.system}</h3>
            <ul className="space-y-3">
              {data.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 flex-1">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">{t.roiLabel}</p>
              <p className="text-slate-200 leading-relaxed">{data.roi}</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{t.notForLabel}</p>
              {data.notFor.map((item) => (
                <p key={item} className="text-slate-500 text-sm flex items-start gap-2 mb-2">
                  <X size={12} className="text-slate-600 flex-shrink-0 mt-0.5" />{item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            {t.ctaTitle} {data.name.toLowerCase()}{t.ctaTitle2}
          </h2>
          <p className="text-slate-400 mb-8">{t.ctaBody}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
            {t.requestAudit}<ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
