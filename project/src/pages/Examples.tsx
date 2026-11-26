import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

// Real, live work (not demos). Use only facts the client has approved.
const LIVE_PROJECTS = [
  {
    name: 'made_nd_meant',
    url: 'https://made-nd-meant.pages.dev',
    urlLabel: 'made-nd-meant.pages.dev',
    desktop: { src: '/work/made-nd-meant-desktop.webp', width: 1200, height: 600 },
    phone: { src: '/work/made-nd-meant-phone.webp', width: 440, height: 953 },
    en: {
      kind: 'Handmade custom gifts shop · India',
      built: ['A fast static shop', 'A basket', 'Ordering on WhatsApp and Instagram', 'UPI QR payment', 'English/Hindi language switch'],
      altDesktop: 'made_nd_meant home page on a desktop screen',
      altPhone: 'made_nd_meant home page on a phone',
    },
    gr: {
      kind: 'Κατάστημα με χειροποίητα εξατομικευμένα δώρα · Ινδία',
      built: ['Γρήγορο στατικό κατάστημα', 'Καλάθι αγορών', 'Παραγγελίες μέσω WhatsApp και Instagram', 'Πληρωμή με UPI QR', 'Εναλλαγή γλώσσας: Αγγλικά και Χίντι'],
      altDesktop: 'Η αρχική σελίδα του made_nd_meant σε οθόνη υπολογιστή',
      altPhone: 'Η αρχική σελίδα του made_nd_meant σε κινητό',
    },
  },
];

const FEATURED_DEMOS = [
  {
    title: 'Appointment Management AI Voice Caller System',
    videoUrl: 'https://youtu.be/EKn7EsF5Wic',
    problem: 'Businesses spend significant time handling phone calls for appointment booking, updates, and cancellations, leading to missed calls, errors, and operational inefficiency.',
    system: 'An AI-powered voice calling system that manages the entire appointment lifecycle, integrates with calendars, and escalates calls when needed.',
    result: 'Automated 24/7 phone handling, elimination of double bookings, and improved customer experience with structured data capture and system integration.',
    descEn: 'This system replaces manual phone-based appointment scheduling with a structured AI workflow that operates 24/7.',
    descGr: 'Αυτό το σύστημα αντικαθιστά τον χειροκίνητο προγραμματισμό ραντεβού μέσω τηλεφώνου με μια δομημένη AI ροή εργασίας που λειτουργεί 24/7.',
  },
  {
    title: 'Appointment Management & Customer Support AI Chat-Agent System',
    videoUrl: 'https://youtu.be/_sY0JgB3S54',
    problem: 'Law firms spend significant time handling messages for appointment booking, updates, and cancellations, leading to errors and operational inefficiency.',
    system: "An AI-powered chat-agent system that manages appointments, answers inquiries via a Knowledge Base, and automatically updates the firm's CRM with extracted case details.",
    result: 'Reduced manual messaging, 24/7 appointment management, prevented double bookings, and improved customer experience with direct service and structured CRM data capture.',
    descEn: 'This system replaces manual message-based appointment coordination with automated chat workflows and CRM integration.',
    descGr: 'Αυτό το σύστημα αντικαθιστά τον χειροκίνητο συντονισμό ραντεβού μέσω μηνυμάτων με αυτοματοποιημένες ροές chat και ενσωμάτωση CRM.',
  },
];

const ADDITIONAL_DEMOS = [
  { title: 'Lead Qualification Voice System', problem: 'Sales team spending hours qualifying inbound leads manually', system: 'AI voice caller that handles initial lead qualification calls', result: 'Automated qualification of leads with structured data capture and CRM integration', descEn: 'This system replaces manual lead qualification calls with structured AI voice workflows.', descGr: 'Αυτό το σύστημα αντικαθιστά τις χειροκίνητες κλήσεις αξιολόγησης leads με AI voice workflows.' },
  { title: 'Customer Support Routing System', problem: 'Support requests being sent to wrong departments causing delays', system: 'AI chat system that classifies and routes support inquiries', result: 'Accurate classification and routing of support requests with automated resolution for common issues', descEn: 'This system replaces manual support ticket routing with automated classification and assignment.', descGr: 'Αυτό το σύστημα αντικαθιστά τη χειροκίνητη δρομολόγηση εισιτηρίων υποστήριξης.' },
  { title: 'Appointment Confirmation System', problem: 'High no-show rates due to missed confirmations and reminders', system: 'Automated voice and SMS confirmation system', result: 'Reduced no-show rates through automated confirmation and reminder workflows', descEn: 'This system replaces manual appointment reminder calls and messages with automated confirmation workflows.', descGr: 'Αυτό το σύστημα αντικαθιστά τις χειροκίνητες υπενθυμίσεις ραντεβού με αυτοματοποιημένες ροές επιβεβαίωσης.' },
  { title: 'Document Processing System', problem: 'Manual data entry from documents causing bottlenecks and errors', system: 'AI document processor with automated data extraction', result: 'Automated extraction and entry of data from documents into business systems', descEn: 'This system replaces manual document data entry with automated extraction and processing.', descGr: 'Αυτό το σύστημα αντικαθιστά τη χειροκίνητη εισαγωγή δεδομένων εγγράφων με αυτοματοποιημένη εξαγωγή.' },
];

export default function Examples() {
  const { lang } = useLang();
  const t = pagesT[lang].examples;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">{t.title}</h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
            <p className="text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed">{t.desc}</p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">{t.liveTitle}</h2>

          <div className="space-y-12 mb-16">
            {LIVE_PROJECTS.map((project) => {
              const p = project[lang];
              return (
                <div key={project.name} className="bg-slate-900/40 border border-emerald-500/25 rounded-2xl p-6 sm:p-10 hover:border-emerald-400/40 transition-colors duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    <div className="lg:col-span-2">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                        {t.liveBadge}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-100">{project.name}</h3>
                      <p className="text-slate-400 mb-6">{p.kind}</p>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3">{t.liveBuilt}</h4>
                      <ul className="space-y-2 mb-8">
                        {p.built.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-opacity hover:opacity-90">
                        {t.liveVisit}<ExternalLink size={16} aria-hidden="true" />
                      </a>
                      <p className="text-xs text-slate-500 mt-3">{project.urlLabel}</p>
                    </div>
                    <div className="lg:col-span-3 relative pb-10 sm:pb-12 pr-[14%]">
                      <img src={project.desktop.src} width={project.desktop.width} height={project.desktop.height}
                        alt={p.altDesktop} loading="lazy" decoding="async"
                        className="w-full h-auto rounded-xl border border-slate-700/60 shadow-2xl shadow-black/40" />
                      <img src={project.phone.src} width={project.phone.width} height={project.phone.height}
                        alt={p.altPhone} loading="lazy" decoding="async"
                        className="absolute right-0 bottom-0 w-[25%] h-auto rounded-2xl border-4 border-slate-950 shadow-2xl shadow-black/50" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 mb-16">
            <p className="text-sm text-slate-300 text-center leading-relaxed">
              <span className="font-semibold text-cyan-400">{t.noticeBold}</span>{t.notice}
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">{t.featuredTitle}</h2>

          <div className="space-y-12 mb-20">
            {FEATURED_DEMOS.map((demo, index) => (
              <div key={index} className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-colors duration-200">
                <div className="flex items-start gap-3 mb-6">
                  <div className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 uppercase tracking-wider">{t.featuredBadge}</div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100">{demo.title}</h3>
                <p className="text-sm text-slate-400 mb-6 italic">{lang === 'gr' ? demo.descGr : demo.descEn}</p>
                <a href={demo.videoUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 mb-8">
                  <Play size={20} />{t.watchBtn}<ExternalLink size={16} />
                </a>
                <div className="space-y-6">
                  {[['problem', t.problem, demo.problem], ['system', t.systemBuilt, demo.system], ['result', t.result, demo.result]].map(([key, label, text]) => (
                    <div key={key}>
                      <h4 className="text-lg font-semibold text-slate-200 mb-2">{label}</h4>
                      <p className="text-slate-300 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">{t.additionalTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {ADDITIONAL_DEMOS.map((demo, index) => (
              <div key={index} className={`group bg-slate-900/40 border rounded-xl p-6 hover:border-cyan-400/40 transition-colors duration-200 ${index % 2 === 0 ? 'border-cyan-500/20' : 'border-blue-500/20'}`}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-400 uppercase tracking-wider">{t.demoBadge}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">{demo.title}</h3>
                <p className="text-xs text-slate-400 mb-4 italic">{lang === 'gr' ? demo.descGr : demo.descEn}</p>
                <div className="space-y-3">
                  {[['problem', t.problemShort, demo.problem], ['system', t.systemShort, demo.system], ['result', t.resultShort, demo.result]].map(([key, label, text]) => (
                    <div key={key}>
                      <h4 className="text-sm font-semibold text-slate-400 mb-1">{label}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 shadow-lg shadow-cyan-500/20">
              {t.cta}<ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
