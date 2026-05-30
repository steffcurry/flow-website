import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Clock, Zap, Users, X, Building2, Scale, Stethoscope, Sparkles, Wrench, Wind, HomeIcon, Heart } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const FEATURES_EN = [
  'Answers every inbound call in under 3 seconds',
  'Operates 24/7 — nights, weekends, public holidays',
  'Speaks Greek natively — no accent, no errors',
  'Books, reschedules and cancels appointments',
  'Answers FAQs from your custom knowledge base',
  'Qualifies callers and captures key information',
  'Transfers urgent calls to a human immediately',
  'Syncs all data to your CRM and calendar in real time',
  'Handles unlimited simultaneous calls',
  'Every call logged, transcribed and summarised',
];
const FEATURES_GR = [
  'Απαντά σε κάθε εισερχόμενη κλήση σε λιγότερο από 3 δευτερόλεπτα',
  'Λειτουργεί 24/7 — νύχτες, Σαββατοκύριακα, αργίες',
  'Μιλά ελληνικά αυθεντικά — χωρίς προφορά, χωρίς λάθη',
  'Κλείνει, αναπρογραμματίζει και ακυρώνει ραντεβού',
  'Απαντά σε συχνές ερωτήσεις από τη βάση γνώσης σας',
  'Αξιολογεί καλούντες και καταγράφει βασικές πληροφορίες',
  'Μεταφέρει επείγουσες κλήσεις αμέσως σε άνθρωπο',
  'Συγχρονίζει δεδομένα στο CRM και ημερολόγιο σε πραγματικό χρόνο',
  'Χειρίζεται απεριόριστες ταυτόχρονες κλήσεις',
  'Κάθε κλήση καταγράφεται, μεταγράφεται και συνοψίζεται',
];

const INDUSTRY_ICONS = [Stethoscope, Building2, Heart, Sparkles, HomeIcon, Wrench, Wind, Scale];
const INDUSTRY_LINKS = ['/industries/dental','/industries/real-estate','/industries/med-spa','/industries/aesthetic-clinics','/industries/roofing','/industries/plumbing','/industries/hvac','/industries/law-firms'];
const INDUSTRY_LABELS_EN = ['Dental Clinics','Real Estate','Med Spas','Aesthetic Clinics','Roofing','Plumbing','HVAC','Law Firms'];
const INDUSTRY_LABELS_GR = ['Οδοντιατρεία','Μεσιτικά','Med Spas','Αισθητικές Κλινικές','Στεγοποιοί','Υδραυλικοί','Κλιματισμός','Δικηγορικά Γραφεία'];
const STAT_ICONS = [Clock, Zap, Users];

export default function Receptionist() {
  const { lang } = useLang();
  const t = pagesT[lang].receptionist;
  const features = lang === 'gr' ? FEATURES_GR : FEATURES_EN;
  const industryLabels = lang === 'gr' ? INDUSTRY_LABELS_GR : INDUSTRY_LABELS_EN;

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">{t.badge}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 leading-tight">
              {t.title1}<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t.title2}</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
                <Phone size={18} /> {t.demoBtn}
              </Link>
              <Link to="/audit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/60 border border-slate-600/50 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/40 hover:text-white transition-colors">
                {t.auditBtn} <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <FadeIn>
        <section className="relative py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-800/60 bg-slate-900/30">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
            {t.stats.map(({ stat, label }, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={label}>
                  <Icon className="text-cyan-400 mx-auto mb-2" size={20} />
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">{label}</p>
                </div>
              );
            })}
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-4">{t.howTitle}</h2></FadeIn>
          <FadeIn delay={100}><p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">{t.howSub}</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map(({ n, title, body }, i) => (
              <FadeIn key={n} delay={i * 120}>
                <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/30 transition-colors duration-200 h-full">
                  <p className="text-5xl font-bold text-cyan-500/15 mb-4">{n}</p>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-16">{t.featuresTitle}</h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <FadeIn key={f} delay={i * 50}>
                <div className="flex items-start gap-3 bg-slate-900/40 border border-slate-700/40 rounded-xl p-4">
                  <CheckCircle size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">{f}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-12">{t.compTitle}</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid grid-cols-3 bg-slate-800/60">
                <div className="p-4 border-r border-slate-700" />
                <div className="p-4 text-center border-r border-slate-700">
                  <span className="text-red-400 font-semibold text-sm">{lang === 'gr' ? 'Ανθρώπινος Τηλεφωνητής' : 'Human Receptionist'}</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-cyan-400 font-semibold text-sm">Coreflow AI</span>
                </div>
              </div>
              {t.compRows.map(([label, human, ai], i) => (
                <div key={i} className={`grid grid-cols-3 border-t border-slate-700/60 ${i % 2 === 0 ? 'bg-slate-900/20' : ''}`}>
                  <div className="p-4 border-r border-slate-700/60 text-slate-400 text-sm font-medium">{label}</div>
                  <div className="p-4 border-r border-slate-700/60 text-slate-500 text-sm text-center flex items-center justify-center gap-1">
                    <X size={11} className="text-red-400/60 flex-shrink-0" />{human}
                  </div>
                  <div className="p-4 text-cyan-300 text-sm text-center font-medium flex items-center justify-center gap-1">
                    <CheckCircle size={11} className="text-cyan-400 flex-shrink-0" />{ai}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-14">{t.industriesTitle}</h2></FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRY_LINKS.map((to, i) => {
              const Icon = INDUSTRY_ICONS[i];
              return (
                <FadeIn key={to} delay={i * 60}>
                  <Link to={to} className="flex flex-col items-center gap-3 p-6 bg-slate-900/40 border border-slate-700/50 rounded-xl hover:border-cyan-500/40 transition-colors group">
                    <Icon className="text-cyan-400" size={22} />
                    <span className="text-slate-300 text-sm font-medium text-center group-hover:text-white transition-colors">{industryLabels[i]}</span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">{t.ctaTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/audit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
                {t.ctaBtn}
              </Link>
              <Link to="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/60 border border-slate-600/50 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/40 transition-colors">
                <Phone size={18} /> {t.ctaDemoBtn}
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
