import { useState, useRef } from 'react';
import { ArrowRight, FileSearch, BarChart2, GitBranch, TrendingUp, CheckCircle, X, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const NICHES = ['Οδοντιατρείο', 'Med Spa', 'Αισθητική Κλινική', 'Υδραυλικός', 'Κλιματισμός / HVAC', 'Μεσιτικό Γραφείο', 'Δικηγορικό Γραφείο', 'Άλλο'];
const WEBHOOK = 'https://n8n.srv1363008.hstgr.cloud/webhook/audit-request';

const DELIVERABLES_EN = [
  { Icon: FileSearch, name: 'Workflow X-Ray Report', description: 'A visual map of how your current operations actually work — not how they are described. Every manual step, handoff, and decision point documented.', value: 'You see your business from the outside for the first time. Most owners discover 3–5 bottlenecks they did not know existed.' },
  { Icon: BarChart2, name: 'Bottleneck Analysis', description: 'Every step where time is wasted, errors occur, or work stalls identified and ranked by operational impact. Priority order included.', value: 'Turns a vague sense of "we\'re inefficient" into a specific list of exactly what to fix and in what order.' },
  { Icon: GitBranch, name: 'Automation Feasibility Matrix', description: 'A clear breakdown of what can be automated, what cannot, and what requires human judgment. No overpromising — just honest architecture.', value: 'You know exactly what is buildable before committing to anything. No surprises after the project starts.' },
  { Icon: TrendingUp, name: 'ROI Projection', description: 'An estimated calculation of time saved, cost reduced, and revenue recovered if the identified automations are deployed. Based on your actual numbers.', value: 'Gives you a business case — not a sales pitch. You decide if the math works for your situation.' },
];
const DELIVERABLES_GR = [
  { Icon: FileSearch, name: 'Αναφορά X-Ray Ροής', description: 'Οπτικός χάρτης του πώς λειτουργεί πραγματικά η επιχείρησή σας — όχι πώς περιγράφεται. Κάθε χειροκίνητο βήμα, παράδοση και σημείο απόφασης τεκμηριωμένο.', value: 'Βλέπετε την επιχείρησή σας από έξω για πρώτη φορά. Οι περισσότεροι ιδιοκτήτες ανακαλύπτουν 3–5 σημεία συμφόρησης που δεν γνώριζαν.' },
  { Icon: BarChart2, name: 'Ανάλυση Σημείων Συμφόρησης', description: 'Κάθε βήμα που χάνεται χρόνος, συμβαίνουν λάθη ή σταματάει η εργασία, εντοπισμένο και κατατεταγμένο κατά λειτουργικό αντίκτυπο.', value: 'Μετατρέπει την αίσθηση "είμαστε αναποτελεσματικοί" σε συγκεκριμένη λίστα τι να διορθώσετε και με ποια σειρά.' },
  { Icon: GitBranch, name: 'Μήτρα Σκοπιμότητας Αυτοματοποίησης', description: 'Σαφής ανάλυση τι μπορεί να αυτοματοποιηθεί, τι όχι και τι απαιτεί ανθρώπινη κρίση. Χωρίς υπερβολές — μόνο ειλικρινής αρχιτεκτονική.', value: 'Γνωρίζετε ακριβώς τι είναι κατασκευάσιμο πριν δεσμευτείτε. Χωρίς εκπλήξεις μετά την έναρξη.' },
  { Icon: TrendingUp, name: 'Προβολή ROI', description: 'Εκτιμώμενος υπολογισμός χρόνου που εξοικονομείται, κόστους που μειώνεται και εσόδων που ανακτώνται αν αναπτυχθούν οι εντοπισμένες αυτοματοποιήσεις.', value: 'Σας δίνει επιχειρηματικό επιχείρημα — όχι πρόταση πωλήσεων. Εσείς αποφασίζετε αν τα νούμερα λειτουργούν.' },
];
const SESSION_EN = [
  { step: '1', title: 'Discovery call', body: '45–60 minutes. We ask about your current workflows, tools, team structure, and where things break.' },
  { step: '2', title: 'Internal analysis', body: 'We map what you described, identify the automation opportunities, and build the four deliverables. Typically 2–3 business days.' },
  { step: '3', title: 'Delivery session', body: '30 minutes. We walk through every deliverable with you. No jargon. You leave with a clear picture of what\'s possible.' },
  { step: '4', title: 'Your decision', body: 'You decide whether to proceed. No pressure, no follow-up calls. The deliverables are yours regardless.' },
];
const SESSION_GR = [
  { step: '1', title: 'Discovery call', body: '45–60 λεπτά. Ρωτάμε για τις τρέχουσες ροές εργασίας σας, τα εργαλεία, τη δομή ομάδας και πού σπάνε τα πράγματα.' },
  { step: '2', title: 'Εσωτερική ανάλυση', body: 'Χαρτογραφούμε αυτό που περιγράψατε, εντοπίζουμε τις ευκαιρίες αυτοματοποίησης και κατασκευάζουμε τα τέσσερα παραδοτέα. Συνήθως 2–3 εργάσιμες ημέρες.' },
  { step: '3', title: 'Συνεδρία παράδοσης', body: '30 λεπτά. Σας καθοδηγούμε μέσα από κάθε παραδοτέο. Χωρίς ορολογία. Φεύγετε με σαφή εικόνα του τι είναι δυνατό.' },
  { step: '4', title: 'Η απόφασή σας', body: 'Εσείς αποφασίζετε αν θα προχωρήσετε. Χωρίς πίεση, χωρίς τηλεφωνήματα follow-up. Τα παραδοτέα είναι δικά σας ανεξάρτητα.' },
];

export default function Audit() {
  const { lang } = useLang();
  const t = pagesT[lang].audit;
  const deliverables = lang === 'gr' ? DELIVERABLES_GR : DELIVERABLES_EN;
  const sessionSteps = lang === 'gr' ? SESSION_GR : SESSION_EN;

  const formRef = useRef<HTMLDivElement>(null);
  const [fields, setFields] = useState({ name: '', business_name: '', niche: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const set = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(fields) });
      setStatus('done');
    } catch { setStatus('error'); }
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/4 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">{t.badge}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6 leading-tight">{t.title}</h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">{t.subtitle}</p>
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
              {t.formTitle} <ArrowRight size={18} />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-16">{t.deliverablesTitle}</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map(({ Icon, name, description, value }, i) => (
              <FadeIn key={name} delay={i * 100}>
                <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors duration-200 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>
                  <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-xl p-4">
                    <p className="text-cyan-300 text-xs leading-relaxed">{value}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Session steps */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-16">{t.sessionTitle}</h2></FadeIn>
          <div className="space-y-4">
            {sessionSteps.map(({ step, title, body }, i) => (
              <FadeIn key={step} delay={i * 80}>
                <div className="flex items-start gap-6 bg-slate-900/40 border border-slate-700/40 rounded-2xl p-6 hover:border-cyan-500/20 transition-colors">
                  <span className="text-4xl font-bold text-cyan-500/20 flex-shrink-0 w-10 text-center">{step}</span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100 mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Good / Not fit */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-cyan-400 mb-6">{t.goodTitle}</h3>
              <ul className="space-y-3">
                {t.goodFor.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-slate-500 mb-6">{t.notTitle}</h3>
              <ul className="space-y-3">
                {t.notFor.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-500 text-sm">
                    <X size={14} className="text-slate-600 flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <FadeIn>
        <section ref={formRef} className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">{t.formTitle}</h2>
              <p className="text-slate-400 text-sm">Συμπληρώστε τα στοιχεία σας. Επικοινωνούμε εντός 1 εργάσιμης ημέρας.</p>
            </div>
            {status === 'done' ? (
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-10 text-center">
                <CheckCircle size={40} className="text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">{t.formDone}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">{t.fields.name} *</label>
                    <input required value={fields.name} onChange={e => set('name', e.target.value)} placeholder="Γιώργος Παπαδόπουλος" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">{t.fields.business} *</label>
                    <input required value={fields.business_name} onChange={e => set('business_name', e.target.value)} placeholder="π.χ. Οδοντιατρείο Παπαδόπουλος" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{t.fields.niche} *</label>
                  <select required value={fields.niche} onChange={e => set('niche', e.target.value)} className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
                    <option value="" disabled>Επιλέξτε κλάδο...</option>
                    {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">{t.fields.phone} *</label>
                    <input required value={fields.phone} onChange={e => set('phone', e.target.value)} placeholder="+30 69x xxx xxxx" type="tel" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">{t.fields.email} <span className="text-slate-600">(optional)</span></label>
                    <input value={fields.email} onChange={e => set('email', e.target.value)} placeholder="email@example.com" type="email" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors" />
                  </div>
                </div>
                {status === 'error' && <p className="text-red-400 text-xs text-center">{t.formError}</p>}
                <button type="submit" disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t.formSending}</span>
                  ) : (
                    <><Send size={16} />{t.formBtn}</>
                  )}
                </button>
                <p className="text-slate-600 text-xs text-center">Τα στοιχεία σας παραμένουν απόρρητα και δεν κοινοποιούνται σε τρίτους.</p>
              </form>
            )}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
