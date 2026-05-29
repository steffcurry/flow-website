import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Clock, Zap, Users, X, Building2, Scale, Stethoscope, Sparkles, Wrench, Wind, HomeIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const features = [
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

const comparison = [
  ['Annual Cost', '€25,000 – €35,000', 'From €297/month'],
  ['Availability', '9am–5pm, weekdays only', '24/7, 365 days a year'],
  ['Simultaneous Calls', '1 at a time', 'Unlimited'],
  ['Consistency', 'Varies by mood and energy', 'Identical on every call'],
  ['Training', 'Weeks, repeated on each hire', 'One-time setup'],
  ['Sick Days / Absences', 'Yes — coverage needed', 'None — always available'],
  ['Languages', 'One person, one language', 'Greek, English + more'],
  ['Scalability', 'Hire another person', 'Instant, no added cost'],
];

const industries = [
  { to: '/industries/dental', label: 'Dental Clinics', Icon: Stethoscope },
  { to: '/industries/real-estate', label: 'Real Estate', Icon: Building2 },
  { to: '/industries/med-spa', label: 'Med Spas', Icon: Sparkles },
  { to: '/industries/aesthetic-clinics', label: 'Aesthetic Clinics', Icon: Sparkles },
  { to: '/industries/roofing', label: 'Roofing', Icon: HomeIcon },
  { to: '/industries/plumbing', label: 'Plumbing', Icon: Wrench },
  { to: '/industries/hvac', label: 'HVAC', Icon: Wind },
  { to: '/industries/law-firms', label: 'Law Firms', Icon: Scale },
];

export default function Receptionist() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">AI Voice Receptionist</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 leading-tight">
              Your business answers<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">every call — even when you can't</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              A fully custom AI receptionist that handles inbound calls 24/7 in Greek — booking appointments, answering questions, qualifying callers, and syncing everything to your systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105">
                <Phone size={18} /> Hear It Live
              </Link>
              <Link to="/audit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/60 border border-slate-600/50 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/40 hover:text-white transition-all">
                Get a Free Audit <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 stat pills */}
      <FadeIn>
        <section className="relative py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-800/60 bg-slate-900/30">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
            {[
              { Icon: Clock, stat: '< 3s', label: 'Average answer time' },
              { Icon: Zap, stat: '24/7', label: 'Always available' },
              { Icon: Users, stat: '∞', label: 'Simultaneous calls' },
            ].map(({ Icon, stat, label }) => (
              <div key={label}>
                <Icon className="text-cyan-400 mx-auto mb-2" size={20} />
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat}</p>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* How it works */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-4">How it works</h2></FadeIn>
          <FadeIn delay={100}><p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">Three steps. Fully automated. Nothing left to chance.</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', title: 'Call arrives', body: 'A client calls your number. The AI answers in under 3 seconds — no hold music, no voicemail. In fluent Greek.' },
              { n: '02', title: 'AI handles the intent', body: 'Books an appointment, answers a question, qualifies the caller, or escalates to your team — all based on your defined workflows.' },
              { n: '03', title: 'Data syncs automatically', body: 'Every call is logged. Bookings hit your calendar. Lead data goes to your CRM. You review a summary — not a transcript.' },
            ].map(({ n, title, body }, i) => (
              <FadeIn key={n} delay={i * 120}>
                <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/30 transition-all duration-300 h-full">
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
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-16">Everything it handles</h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <FadeIn key={f} delay={i * 50}>
                <div className="flex items-start gap-3 bg-slate-900/40 border border-slate-700/40 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
                  <CheckCircle size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">{f}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Human cost table */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-3">AI vs Human Receptionist</h2>
            <p className="text-slate-400 text-center mb-12">The numbers that make this decision obvious.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid grid-cols-3 bg-slate-800/60">
                <div className="p-4 border-r border-slate-700" />
                <div className="p-4 text-center border-r border-slate-700">
                  <span className="text-red-400 font-semibold text-sm">Human Receptionist</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-cyan-400 font-semibold text-sm">Coreflow AI</span>
                </div>
              </div>
              {comparison.map(([label, human, ai], i) => (
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
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-4">Built for your industry</h2></FadeIn>
          <FadeIn delay={100}><p className="text-slate-400 text-center mb-14 max-w-xl mx-auto">Every receptionist is configured specifically for the norms, terminology and workflows of your sector.</p></FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map(({ to, label, Icon }, i) => (
              <FadeIn key={to} delay={i * 60}>
                <Link to={to} className="flex flex-col items-center gap-3 p-6 bg-slate-900/40 border border-slate-700/50 rounded-xl hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all group">
                  <Icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={22} />
                  <span className="text-slate-300 text-sm font-medium text-center group-hover:text-white transition-colors">{label}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Hear it before you decide anything</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Call from your browser — no phone number needed. Select your industry and talk to the AI directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105">
                <Phone size={18} /> Try the Live Demo
              </Link>
              <Link to="/audit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/60 border border-slate-600/50 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/40 transition-all">
                Request a Free Audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
