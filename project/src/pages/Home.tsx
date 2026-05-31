import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, Shield, Phone, Building2, Scale, Stethoscope, Sparkles, Wrench, Wind, Home as HomeIcon, X, Heart } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { homeT } from '../i18n/home';

const WEBHOOK = 'https://n8n.srv1363008.hstgr.cloud/webhook/audit-request';

export default function Home() {
  const { lang } = useLang();
  const t = homeT[lang];
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleLeadMagnet(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState('loading');
    try {
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: 'Website Lead', business_name: 'Blueprint Request' }),
      });
      setSubmitState('done');
    } catch {
      setSubmitState('error');
    }
  }
  const SOLUTION_LINKS = [
    '/solutions#customer-support',
    '/solutions#voice-callers',
    '/solutions#chat-agents',
    '/solutions#lead-qualification',
    '/solutions#operations',
    '/solutions#web-apps',
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-slate-100 mb-3">{t.heroTitle1}</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto">{t.heroSub}</p>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">{t.heroBody}</p>
            <p className="text-lg font-medium text-cyan-400 mb-12">{t.heroCompetitors}</p>
            <div className="max-w-3xl mx-auto mb-12 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed">{t.heroDesc}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity duration-200 hover:opacity-90 shadow-lg shadow-cyan-500/30">
                {t.ctaAudit}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/examples" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-lg hover:border-cyan-400/60 transition-colors duration-200">
                {t.ctaExamples}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo Banner */}
      <FadeIn>
        <section className="relative py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">{t.demoBadge}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t.demoTitle}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.demoBody}</p>
              </div>
              <Link to="/demo" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity duration-200 hover:opacity-90">
                <Phone size={18} />
                {t.demoBtn}
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Stats Bar */}
      <FadeIn>
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '80%', label: t.statsLabel1 },
                { stat: '5 min', label: t.statsLabel2 },
                { stat: '€28K+', label: t.statsLabel3 },
                { stat: '12h', label: t.statsLabel4 },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{stat}</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">{t.hypeTitle}</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {t.hypeBody1}
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {t.hypeBody2}
              </p>
              <p className="text-xl font-semibold text-cyan-400">{t.hypeClose}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
              {t.bottleneckTitle}
            </h2>
            <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              {t.bottleneckSub}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {t.bottlenecks.map((bottleneck, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <p className="text-slate-300">{bottleneck}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-cyan-400 text-center">{t.bottleneckClose}</p>
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-slate-100 text-center">{t.replacesTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.replaces.map((task, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-4">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                    <p className="text-slate-300 text-sm">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">{t.buildTitle}</h2>
            <p className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              {t.buildSub}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.solutions.map((solution, index) => (
                <Link
                  key={index}
                  to={SOLUTION_LINKS[index]}
                  className="group bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors duration-200">
                    {solution.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{solution.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* {t.industriesTitle} */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-slate-100">Industries We Serve</h2>
            <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">
              {t.industriesSub}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ...(lang === 'en' ? [
                  { Icon: Stethoscope, label: 'Dental Clinics',    desc: 'Appointment booking, patient follow-ups, FAQ handling' },
                  { Icon: Building2,   label: 'Real Estate',       desc: 'Lead qualification, property inquiries, viewing scheduling' },
                  { Icon: Heart,       label: 'Med Spas',          desc: 'Treatment bookings, consultation routing, retention flows' },
                  { Icon: Sparkles,    label: 'Aesthetic Clinics', desc: 'Appointment management, pre-care instructions, reviews' },
                  { Icon: HomeIcon,    label: 'Roofing',           desc: 'Estimate requests, follow-ups, job status updates' },
                  { Icon: Wrench,      label: 'Plumbing',          desc: 'Emergency dispatch, appointment scheduling, qualification' },
                  { Icon: Wind,        label: 'HVAC',              desc: 'Service calls, maintenance reminders, lead capture' },
                  { Icon: Scale,       label: 'Law Firms',         desc: 'Intake qualification, consultation booking, document routing' },
                ] : [
                  { Icon: Stethoscope, label: 'Οδοντιατρεία',      desc: 'Κρατήσεις ραντεβού, υπενθυμίσεις, FAQ' },
                  { Icon: Building2,   label: 'Μεσιτικά',          desc: 'Αξιολόγηση leads, ερωτήματα ακινήτων, προγραμματισμός επισκέψεων' },
                  { Icon: Heart,       label: 'Med Spas',           desc: 'Κρατήσεις θεραπειών, δρομολόγηση, retention flows' },
                  { Icon: Sparkles,    label: 'Αισθητικές Κλινικές',desc: 'Διαχείριση ραντεβού, οδηγίες προεγχειρητικής φροντίδας' },
                  { Icon: HomeIcon,    label: 'Στεγοποιοί',         desc: 'Αιτήματα εκτιμήσεων, follow-ups, ενημερώσεις εργασιών' },
                  { Icon: Wrench,      label: 'Υδραυλικοί',         desc: 'Επείγουσες κλήσεις, προγραμματισμός, αξιολόγηση' },
                  { Icon: Wind,        label: 'Κλιματισμός',        desc: 'Κλήσεις σέρβις, υπενθυμίσεις συντήρησης, καταγραφή leads' },
                  { Icon: Scale,       label: 'Δικηγορικά Γραφεία', desc: 'Αξιολόγηση υποθέσεων, κρατήσεις συμβουλευτικής' },
                ]),
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="bg-slate-900/50 border border-slate-700/60 rounded-xl p-4">
                  <Icon className="text-cyan-400 mb-2" size={20} />
                  <h3 className="font-semibold text-slate-100 text-sm mb-1 leading-tight">{label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">{desc}</p>
                </div>
              ))}
              <div className="col-span-2 sm:col-span-2 md:col-span-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-100 text-sm mb-1">{t.industriesCtaTitle}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{t.industriesCtaSub}</p>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-cyan-500/20"
                >
                  {t.industriesCtaBtn}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Manual vs AI Comparison */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-slate-100">{t.comparisonTitle}</h2>
            <p className="text-lg text-slate-400 mb-16 text-center">{t.comparisonSub}</p>
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid grid-cols-2">
                <div className="bg-red-500/5 border-r border-slate-700 p-4 text-center">
                  <span className="font-semibold text-red-400 text-sm uppercase tracking-wide">{t.comparisonLeft}</span>
                </div>
                <div className="bg-cyan-500/5 p-4 text-center">
                  <span className="font-semibold text-cyan-400 text-sm uppercase tracking-wide">{t.comparisonRight}</span>
                </div>
              </div>
              {t.comparisons.map(([manual, automated], i) => (
                <div key={i} className={`grid grid-cols-2 border-t border-slate-700/60 ${i % 2 === 0 ? 'bg-slate-900/20' : ''}`}>
                  <div className="p-4 border-r border-slate-700/60 flex items-start gap-2">
                    <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-400 text-sm">{manual}</p>
                  </div>
                  <div className="p-4 flex items-start gap-2">
                    <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm">{automated}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Integration Marquee */}
      <FadeIn>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">{t.marqueeTitle}</h2>
            <p className="text-slate-400">{t.marqueeSub}</p>
          </div>
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap" style={{willChange:'transform'}}>
              {[
                'n8n','Make','Zapier','OpenAI','Anthropic','Vapi','ElevenLabs',
                'Google Sheets','Google Calendar','Slack','Telegram','WhatsApp Business',
                'Twilio','HubSpot','Pipedrive','Airtable','Notion','Stripe','Calendly',
                'AWS','Shopify','Qdrant',
                'n8n','Make','Zapier','OpenAI','Anthropic','Vapi','ElevenLabs',
                'Google Sheets','Google Calendar','Slack','Telegram','WhatsApp Business',
                'Twilio','HubSpot','Pipedrive','Airtable','Notion','Stripe','Calendly',
                'AWS','Shopify','Qdrant',
              ].map((tool, i) => (
                <span key={i} className="mx-3 px-4 py-2 bg-slate-800/60 border border-slate-700/40 rounded-full text-slate-300 text-sm inline-block">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* {t.notTitle} */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-400 mb-6">What We Are Not</h3>
                <ul className="space-y-3">
                  {[
                    'A SaaS tool you subscribe to',
                    'A generic chatbot vendor',
                    'An AI "experiment" agency',
                    'A freelancer adding ChatGPT to your site',
                    'A short-term project with no ownership',
                    'A solution looking for problems',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                      <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-6">{t.diffTitle}</h3>
                <ul className="space-y-3">
                  {[
                    'We design systems, not standalone tools',
                    'Every build starts with a workflow audit',
                    'We own the logic, not just the configuration',
                    'Automation is treated as permanent infrastructure',
                    'We work exclusively with businesses ready to systematize',
                    'Results are demonstrable before you commit',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-yellow-500/30 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">{t.mistakeTitle}</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">{t.mistakeBody}</p>
              <ul className="space-y-3 mb-8">
                {t.mistakeItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <span className="text-yellow-400">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-semibold text-yellow-400 mb-4">{t.mistakeClose}</p>
              <p className="text-lg text-slate-300">{t.mistakeClose2}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">{t.howTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { number: '1', title: 'Audit & Workflow Mapping', description: 'We analyze your workflows, identify bottlenecks, and define automation boundaries. Output: A clear system map and prioritized automation opportunities.', icon: Target },
                { number: '2', title: 'Custom System Design', description: 'We design AI systems around how your business actually operates. No templates. No generic stacks.', icon: Zap },
                { number: '3', title: 'Deployment & Optimization', description: 'Systems are deployed, monitored, and improved based on real usage. Automation is treated as infrastructure — not a one-off project.', icon: Shield },
              ].map((step, index) => (
                <div key={index} className="relative bg-slate-900/50 border border-cyan-500/20 rounded-xl p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 mx-auto">
                    <step.icon className="text-cyan-400" size={28} />
                  </div>
                  <div className="absolute top-6 left-6 text-5xl font-bold text-cyan-500/10">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-100 text-center">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-center">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity duration-200 hover:opacity-90 shadow-lg shadow-cyan-500/20"
              >
                {t.ctaAudit}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">{t.whyTitle}</h2>
            <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
              {t.whySub}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {t.whyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={24} />
                  <p className="text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/examples"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/60 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-lg hover:border-cyan-400/60 transition-colors duration-200"
              >
                {t.ctaExamples2}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-100">{t.forTitle}</h2>
            <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">{t.forSub}</p>
            <div className="space-y-3 mb-12">
              {t.forItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-5">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">{t.strategicTitle}</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              {t.strategic1} {t.strategic2}
            </p>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              {t.strategic3}
            </p>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.strategic4}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity duration-200 hover:opacity-90 shadow-lg shadow-cyan-500/20"
            >
              Request an Automation Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Lead Capture */}
      <FadeIn>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">{t.leadBadge}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">{t.leadTitle}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t.leadBody}
            </p>
            {submitState === 'done' ? (
              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="text-cyan-400" size={32} />
                <p className="text-white font-semibold">{t.leadSuccess1}</p>
                <p className="text-slate-400 text-sm">{t.leadSuccess2}</p>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleLeadMagnet}>
                <input
                  type="email"
                  placeholder="{t.leadPlaceholder}"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity duration-200 hover:opacity-90 text-sm whitespace-nowrap disabled:opacity-60"
                >
                  {submitState === 'loading' ? '{t.leadBtnLoading}' : '{t.leadBtn}'}
                </button>
              </form>
            )}
            {submitState === 'error' && (
              <p className="text-red-400 text-xs mt-3">{t.leadError}</p>
            )}
            {submitState !== 'done' && (
              <p className="text-slate-600 text-xs mt-3">{t.leadDisclaimer}</p>
            )}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">{t.faqTitle}</h2>
            <div className="space-y-4">
              {t.faqs.map((faq, index) => (
                <div key={index} className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-4 text-slate-100">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
