import { Link } from 'react-router-dom';
import { ArrowRight, FileSearch, BarChart2, GitBranch, TrendingUp, CheckCircle, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const deliverables = [
  {
    Icon: FileSearch,
    name: 'Workflow X-Ray Report',
    description: 'A visual map of how your current operations actually work — not how they are described. Every manual step, handoff, and decision point documented.',
    value: 'You see your business from the outside for the first time. Most owners discover 3–5 bottlenecks they did not know existed.',
  },
  {
    Icon: BarChart2,
    name: 'Bottleneck Analysis',
    description: 'Every step where time is wasted, errors occur, or work stalls identified and ranked by operational impact. Priority order included.',
    value: 'Turns a vague sense of "we\'re inefficient" into a specific list of exactly what to fix and in what order.',
  },
  {
    Icon: GitBranch,
    name: 'Automation Feasibility Matrix',
    description: 'A clear breakdown of what can be automated, what cannot, and what requires human judgment. No overpromising — just honest architecture.',
    value: 'You know exactly what is buildable before committing to anything. No surprises after the project starts.',
  },
  {
    Icon: TrendingUp,
    name: 'ROI Projection',
    description: 'An estimated calculation of time saved, cost reduced, and revenue recovered if the identified automations are deployed. Based on your actual numbers.',
    value: 'Gives you a business case — not a sales pitch. You decide if the math works for your situation.',
  },
];

const sessionSteps = [
  { step: '1', title: 'Discovery call', body: '45–60 minutes. We ask about your current workflows, tools, team structure, and where things break.' },
  { step: '2', title: 'Internal analysis', body: 'We map what you described, identify the automation opportunities, and build the four deliverables. Typically 2–3 business days.' },
  { step: '3', title: 'Delivery session', body: '30 minutes. We walk through every deliverable with you. No jargon. You leave with a clear picture of what\'s possible.' },
  { step: '4', title: 'Your decision', body: 'You decide whether to proceed. No pressure, no follow-up calls. The deliverables are yours regardless.' },
];

const goodFor = [
  'You manage a business with 2–30 employees',
  'You have clear operational bottlenecks but no roadmap',
  'You are evaluating AI automation seriously, not speculatively',
  'You want facts before committing budget',
];

const notFor = [
  'Businesses looking for a generic AI tool recommendation',
  'Startups with no operational processes yet',
  'Anyone looking for a quick sales conversation',
];

export default function Audit() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/4 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">Free Service</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              The Free Automation Audit
            </h1>
            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              A strategic deliverable — not a sales call.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
              You receive four named documents that give you a complete picture of your automation opportunity. Whether you work with us afterwards or not.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
            >
              Book Your Free Audit <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-4">What you receive</h2></FadeIn>
          <FadeIn delay={100}><p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">Four specific deliverables. Yours to keep, regardless of what you decide next.</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map(({ Icon, name, description, value }, i) => (
              <FadeIn key={name} delay={i * 100}>
                <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col">
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

      {/* How the session works */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn><h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-100 mb-16">How it works</h2></FadeIn>
          <div className="space-y-4">
            {sessionSteps.map(({ step, title, body }, i) => (
              <FadeIn key={step} delay={i * 80}>
                <div className="flex items-start gap-6 bg-slate-900/30 border border-slate-700/40 rounded-2xl p-6 hover:border-cyan-500/20 transition-all">
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

      {/* Fit */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-cyan-400 mb-6">This is for you if</h3>
              <ul className="space-y-3">
                {goodFor.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-slate-500 mb-6">This is not for you if</h3>
              <ul className="space-y-3">
                {notFor.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-500 text-sm">
                    <X size={14} className="text-slate-600 flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">Book your free audit</h2>
            <p className="text-slate-400 mb-8">One contact form. We'll respond within one business day to schedule the discovery call.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105">
              Book Your Free Audit <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
