import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, X } from 'lucide-react';

const tiers = [
  {
    name: 'Single System',
    tag: 'Most Common Start',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    border: 'border-cyan-500/30',
    price: 'From €997',
    billing: 'one-time setup + €297/mo',
    description: 'One focused automation system deployed and optimised — a complete solution for a single operational bottleneck.',
    includes: [
      'Workflow audit & system design',
      'One fully built automation system',
      'Integration with your existing tools',
      'Testing & deployment',
      '30 days of post-launch support',
      'Monthly performance review',
    ],
    examples: [
      'AI voice receptionist (inbound calls)',
      'Lead qualification & appointment booking',
      'Automated customer support system',
      'WhatsApp/chat agent with knowledge base',
    ],
    cta: 'Request an Audit',
    ctaLink: '/contact',
    highlight: false,
  },
  {
    name: 'Operations Stack',
    tag: 'Best Value',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    border: 'border-blue-500/40',
    price: 'From €2,497',
    billing: 'one-time setup + €597/mo',
    description: 'Three interconnected automation systems designed to work together — covering sales, support, and internal ops.',
    includes: [
      'Full operational audit',
      'Three built automation systems',
      'Cross-system integration & logic',
      'Custom dashboards & reporting',
      '60 days of post-launch support',
      'Bi-weekly optimisation sessions',
    ],
    examples: [
      'AI receptionist + CRM sync + follow-up sequencer',
      'Lead qualification + appointment + support',
      'Full inbound pipeline automation',
      'End-to-end sales + ops automation',
    ],
    cta: 'Request an Audit',
    ctaLink: '/contact',
    highlight: true,
  },
  {
    name: 'Custom Build',
    tag: 'For Complex Ops',
    tagColor: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
    border: 'border-slate-600/40',
    price: 'Custom Quote',
    billing: 'scoped per engagement',
    description: 'Fully scoped automation architecture for businesses with multiple workflows, teams, or custom integration requirements.',
    includes: [
      'Deep-dive operational analysis',
      'Unlimited automation systems',
      'Custom AI model fine-tuning where applicable',
      'Full API & data pipeline architecture',
      'Ongoing retainer with SLA',
      'Dedicated account management',
    ],
    examples: [
      'Multi-location businesses',
      'High-volume lead pipelines',
      'Complex multi-system integrations',
      'White-label automation products',
    ],
    cta: 'Book a Discovery Call',
    ctaLink: '/contact',
    highlight: false,
  },
];

const notIncluded = [
  'Generic off-the-shelf tools',
  'Chatbots with no logic or context',
  'One-off scripts with no support',
  'AI experiments with no defined outcome',
];

export default function Pricing() {
  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-100">
            Engagement Structure
          </h1>
          <p className="text-xl text-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            Every engagement starts with a free automation audit. Pricing reflects the complexity of the system, not hours worked.
          </p>
          <p className="text-slate-500 text-sm mb-16">
            All prices are indicative. Final scope and cost are defined after the initial audit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-slate-900/40 border ${tier.border} rounded-2xl p-8 flex flex-col ${
                  tier.highlight ? 'shadow-xl shadow-blue-500/10 scale-[1.02]' : ''
                }`}
              >
                <div className="mb-6">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${tier.tagColor}`}>
                    {tier.tag}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-100 mb-1">{tier.name}</h2>
                  <p className="text-3xl font-bold text-white mt-3 mb-1">{tier.price}</p>
                  <p className="text-slate-500 text-sm">{tier.billing}</p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{tier.description}</p>

                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Includes</p>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Example Systems</p>
                  <ul className="space-y-1">
                    {tier.examples.map((ex) => (
                      <li key={ex} className="text-slate-500 text-xs flex items-start gap-1.5">
                        <span className="text-cyan-500 mt-0.5">—</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={tier.ctaLink}
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105'
                      : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500/40 hover:text-white'
                  }`}
                >
                  {tier.cta} <ArrowRight className="inline ml-1" size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* AI vs Human Cost Table */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-3">AI vs Human Receptionist</h2>
            <p className="text-slate-400 text-center mb-10">The numbers that make this a no-brainer decision.</p>
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid grid-cols-3 bg-slate-800/60">
                <div className="p-4 text-slate-500 text-xs font-semibold uppercase tracking-wide border-r border-slate-700" />
                <div className="p-4 text-center border-r border-slate-700">
                  <span className="text-red-400 font-semibold text-sm">Human Receptionist</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-cyan-400 font-semibold text-sm">AI System</span>
                </div>
              </div>
              {[
                ['Annual Cost', '€25,000 – €35,000', 'From €297/month'],
                ['Availability', '9am–5pm, weekdays only', '24/7, 365 days'],
                ['Simultaneous Calls', '1 at a time', 'Unlimited'],
                ['Consistency', 'Varies by mood/fatigue', 'Identical every call'],
                ['Training', 'Weeks, repeated on turnover', 'One-time setup'],
                ['Scalability', 'Hire another person', 'Instant, no extra cost'],
                ['Language', 'One language', 'Greek, English + more'],
              ].map(([label, human, ai], i) => (
                <div key={i} className={`grid grid-cols-3 border-t border-slate-700/60 ${i % 2 === 0 ? 'bg-slate-900/20' : ''}`}>
                  <div className="p-4 border-r border-slate-700/60 text-slate-400 text-sm font-medium">{label}</div>
                  <div className="p-4 border-r border-slate-700/60 text-slate-500 text-sm text-center">{human}</div>
                  <div className="p-4 text-cyan-300 text-sm text-center font-medium">{ai}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What's never included */}
          <div className="max-w-2xl mx-auto bg-slate-900/30 border border-slate-700/50 rounded-2xl p-8 mb-16">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">What is never included in any engagement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {notIncluded.map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-500 text-sm">
                  <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Free audit CTA */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 sm:p-12">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                <CheckCircle size={14} />
                30-Day Satisfaction Guarantee on all engagements
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Start with a Free Automation Audit</h2>
            <p className="text-slate-400 mb-4 max-w-xl mx-auto">
              We map your current workflows, identify the highest-value automation opportunities, and tell you exactly what a system would look like — before you commit to anything.
            </p>
            <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto">
              You receive a <strong className="text-slate-400">Workflow X-Ray Report</strong>, a <strong className="text-slate-400">Bottleneck Analysis</strong>, an <strong className="text-slate-400">Automation Feasibility Matrix</strong>, and an <strong className="text-slate-400">ROI Projection</strong> — regardless of whether you proceed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              Request Your Free Audit
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
