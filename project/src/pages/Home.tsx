import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, Shield, Phone, Building2, Scale, Stethoscope, Sparkles, Wrench, Wind, Home as HomeIcon, X, Heart } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const WEBHOOK = 'https://n8n.srv1363008.hstgr.cloud/webhook/audit-request';

export default function Home() {
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
  const solutions = [
    {
      title: 'AI Customer Support Systems',
      description:
        'Structured AI handling repetitive inquiries with escalation logic for edge cases.',
      link: '/solutions#customer-support',
    },
    {
      title: 'AI Voice Callers',
      description:
        'Automated inbound and outbound calls for qualification, confirmations, and routing.',
      link: '/solutions#voice-callers',
    },
    {
      title: 'AI Chat Agents',
      description:
        'Controlled conversational agents that guide users through predefined workflows.',
      link: '/solutions#chat-agents',
    },
    {
      title: 'Lead Qualification & Appointment Automation',
      description:
        'End-to-end systems that filter, score, and schedule without human intervention.',
      link: '/solutions#lead-qualification',
    },
    {
      title: 'Internal Operations Automation',
      description:
        'Task flows, data handling, reporting, and cross-system synchronization.',
      link: '/solutions#operations',
    },
    {
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built interfaces designed to support automation logic.',
      link: '/solutions#web-apps',
    },
  ];

  const bottlenecks = [
    'Leads handled inconsistently',
    'Response times dependent on availability',
    'Manual handoffs between systems',
    'Knowledge trapped in individuals',
    'Processes that do not survive scale',
  ];

  const benefits = [
    'Live example automations',
    'Clear system architecture',
    'Transparent process design',
    'Demonstrable logic, not promises with hype',
  ];

  const idealFor = [
    'Your operations are growing faster than your systems',
    'Manual processes are slowing decisions',
    'Hiring feels like a temporary fix',
    'You want AI deployed with intent, not experimentation',
    'You value clarity over hype',
  ];

  const faqs = [
    {
      question: 'What exactly do you mean by "AI automation systems"?',
      answer:
        'We design structured systems where AI operates inside defined workflows. This includes decision logic, integrations, escalation rules, and monitoring — not standalone tools or chatbots.',
    },
    {
      question: 'Will this replace my team?',
      answer:
        'No. These systems replace manual steps, not people. The goal is to remove repetitive operational work so human effort is applied where judgment is required.',
    },
    {
      question: 'How is this different from using off-the-shelf automation tools?',
      answer:
        'Tools automate tasks. Systems automate outcomes. We design architecture that connects tools, data, and logic into a single operational flow.',
    },
    {
      question: 'How quickly can we see results?',
      answer:
        'Initial systems are typically deployed within weeks. Operational impact begins as soon as a system replaces a manual bottleneck.',
    },
    {
      question: 'Do we need to change our existing tools or software?',
      answer:
        'No. We design around your current stack whenever possible and only replace components when they limit scalability.',
    },
    {
      question: 'Is this a one-time project or an ongoing system?',
      answer:
        'Automation is treated as infrastructure. Systems can evolve, expand, and optimize as your operations change.',
    },
    {
      question: 'What kind of businesses is this NOT for?',
      answer:
        'Businesses looking for AI experiments, generic chatbots, or quick hype-driven solutions will not benefit. We work best with teams that value structure and long-term operational clarity.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-slate-100 mb-3">AI Automation Is Becoming</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Operational Infrastructure
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              Control It Early — Or Spend Years Catching Up.
            </p>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              We design and deploy AI automation systems that replace fragile manual workflows with
              scalable operational infrastructure — across sales, support, and internal operations.
            </p>
            <p className="text-lg font-medium text-cyan-400 mb-12">
              Your competitors are not "experimenting" anymore. They are systematizing.
            </p>
            <div className="max-w-3xl mx-auto mb-12 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed">
                Coreflow Automation is an AI automation agency that builds business automation systems for
                sales, support, and internal operations. These systems automate complete workflows and
                business outcomes — not individual tasks or disconnected tools.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity duration-200 hover:opacity-90 shadow-lg shadow-cyan-500/30"
              >
                Request an Automation Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/examples"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 text-lg font-semibold rounded-lg hover:border-cyan-400/60 transition-colors duration-200"
              >
                See Example Systems
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
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">Live Demo — No Phone Number Needed</p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Hear Our AI Receptionist In Action</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Start a real voice conversation from your browser — in Greek — with our AI assistant for your industry.</p>
              </div>
              <Link
                to="/demo"
                className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity duration-200 hover:opacity-90"
              >
                <Phone size={18} />
                Try the Live Demo
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
                { stat: '80%', label: 'of callers hang up without leaving a voicemail' },
                { stat: '5 min', label: 'is all it takes for lead quality to drop 21×' },
                { stat: '€28K+', label: 'average annual cost of a full-time receptionist in Greece' },
                { stat: '12h', label: 'per week the average SME loses to automatable tasks' },
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">This Is Not About AI Hype</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Most businesses will not lose because they ignored AI. They will lose because they implemented it without structure.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                AI added on top of broken workflows does not create leverage — it creates hidden operational risk.
              </p>
              <p className="text-xl font-semibold text-cyan-400">We don't sell tools. We design systems.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">
              The Real Bottleneck Isn't Your Team
            </h2>
            <p className="text-lg text-slate-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              When performance breaks under growth, it's rarely a people problem. It's usually one of these:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {bottlenecks.map((bottleneck, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-900/40 border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <p className="text-slate-300">{bottleneck}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-cyan-400 text-center">Growth exposes weak systems.</p>
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-slate-100 text-center">What These Systems Replace</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Manual lead qualification calls',
                  'Repetitive customer support inquiries',
                  'Manual appointment scheduling and confirmations',
                  'Copy-paste data entry between systems',
                  'Manual document processing and routing',
                  'Repetitive email responses and follow-ups',
                ].map((task, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">What We Build</h2>
            <p className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              Custom AI automation systems designed around real operational constraints — not templates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.link}
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

      {/* Industries We Serve */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-slate-100">Industries We Serve</h2>
            <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">
              Specialized AI automation systems for local service businesses in the Greek market.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { Icon: Stethoscope, label: 'Dental Clinics',     desc: 'Appointment booking, patient follow-ups, FAQ handling' },
                { Icon: Building2,   label: 'Real Estate',        desc: 'Lead qualification, property inquiries, viewing scheduling' },
                { Icon: Heart,       label: 'Med Spas',           desc: 'Treatment bookings, consultation routing, retention flows' },
                { Icon: Sparkles,    label: 'Aesthetic Clinics',  desc: 'Appointment management, pre-care instructions, reviews' },
                { Icon: HomeIcon,    label: 'Roofing',            desc: 'Estimate requests, follow-ups, job status updates' },
                { Icon: Wrench,      label: 'Plumbing',           desc: 'Emergency dispatch, appointment scheduling, qualification' },
                { Icon: Wind,        label: 'HVAC',               desc: 'Service calls, maintenance reminders, lead capture' },
                { Icon: Scale,       label: 'Law Firms',          desc: 'Intake qualification, consultation booking, document routing' },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="bg-slate-900/50 border border-slate-700/60 rounded-xl p-4">
                  <Icon className="text-cyan-400 mb-2" size={20} />
                  <h3 className="font-semibold text-slate-100 text-sm mb-1 leading-tight">{label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Manual vs AI Comparison */}
      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-slate-100">Manual vs. AI Automated</h2>
            <p className="text-lg text-slate-400 mb-16 text-center">What changes when you remove the manual layer.</p>
            <div className="rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid grid-cols-2">
                <div className="bg-red-500/5 border-r border-slate-700 p-4 text-center">
                  <span className="font-semibold text-red-400 text-sm uppercase tracking-wide">Manual Process</span>
                </div>
                <div className="bg-cyan-500/5 p-4 text-center">
                  <span className="font-semibold text-cyan-400 text-sm uppercase tracking-wide">AI Automated</span>
                </div>
              </div>
              {[
                ['Available 9–5, closed on weekends', 'Operates 24/7 with no downtime'],
                ['Response time: minutes to hours', 'Response time: under 3 seconds'],
                ['Cost scales with headcount', 'Cost stays flat as volume grows'],
                ['Inconsistent quality per agent', 'Identical quality on every interaction'],
                ['Errors increase under pressure', 'Performance unchanged at any volume'],
                ['Hiring takes weeks, training takes months', 'Deploys in days, improves continuously'],
                ['Staff time lost to repetitive tasks', 'Staff focused on high-judgment work only'],
              ].map(([manual, automated], i) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">Tools & Platforms We Connect</h2>
            <p className="text-slate-400">We build automation that works with your existing stack — no rip-and-replace.</p>
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

      {/* What We Are Not */}
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
                <h3 className="text-xl font-bold text-cyan-400 mb-6">What We Do Differently</h3>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">The Mistake Most Companies Will Make</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">They will adopt AI tactically instead of structurally. That means:</p>
              <ul className="space-y-3 mb-8">
                {['One chatbot here', 'One automation there', 'No unified logic', 'No ownership', 'No scalability'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <span className="text-yellow-400">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-semibold text-yellow-400 mb-4">Fragmented automation becomes technical debt.</p>
              <p className="text-lg text-slate-300">We design systems that compound — not patch.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">How It Works</h2>
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
                Request an Automation Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-100">Why This Works</h2>
            <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
              We don't ask you to trust claims. We show functioning systems. Instead of "success stories", we provide:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
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
                View Example Automations
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-100">Who This Is For</h2>
            <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">You'll benefit most if:</p>
            <div className="space-y-3 mb-12">
              {idealFor.map((item, index) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-100">AI Automation Is a Strategic Decision</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              In the next 12–18 months, AI-driven operations will stop being a competitive edge. They will become baseline.
            </p>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              The question is whether you design your systems early — or inherit complexity later.
            </p>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              AI automation for business operations is treated as permanent infrastructure — not temporary tooling. Systems are designed to scale with operational growth and compound in value over time.
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
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Free — No Commitment</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">Get a Free Automation Audit</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Drop your email and we'll reach out within 24 hours to schedule a free 15-minute call — we map out exactly which workflows in your business can be automated and what it would save you.
            </p>
            {submitState === 'done' ? (
              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="text-cyan-400" size={32} />
                <p className="text-white font-semibold">We'll be in touch within 24 hours.</p>
                <p className="text-slate-400 text-sm">Check your inbox — we'll send a confirmation shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleLeadMagnet}>
                <input
                  type="email"
                  placeholder="your@email.com"
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
                  {submitState === 'loading' ? 'Sending...' : 'Get Free Audit'}
                </button>
              </form>
            )}
            {submitState === 'error' && (
              <p className="text-red-400 text-xs mt-3">Something went wrong — try emailing us directly.</p>
            )}
            {submitState !== 'done' && (
              <p className="text-slate-600 text-xs mt-3">No spam. We'll only reach out once to schedule.</p>
            )}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-slate-100">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
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
