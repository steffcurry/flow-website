import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, Shield } from 'lucide-react';

export default function Home() {
  const solutions = [
    {
      title: 'AI Customer Support Systems',
      description:
        'Structured AI handling repetitive inquiries with escalation logic for edge cases.',
      link: '/solutions#customer-support',
      colors: 'border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-cyan-500/20 group-hover:text-cyan-400',
    },
    {
      title: 'AI Voice Callers',
      description:
        'Automated inbound and outbound calls for qualification, confirmations, and routing.',
      link: '/solutions#voice-callers',
      colors: 'border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/20 group-hover:text-emerald-400',
    },
    {
      title: 'AI Chat Agents',
      description:
        'Controlled conversational agents that guide users through predefined workflows.',
      link: '/solutions#chat-agents',
      colors: 'border-blue-500/20 hover:border-blue-400/50 hover:shadow-blue-500/20 group-hover:text-blue-400',
    },
    {
      title: 'Lead Qualification & Appointment Automation',
      description:
        'End-to-end systems that filter, score, and schedule without human intervention.',
      link: '/solutions#lead-qualification',
      colors: 'border-teal-500/20 hover:border-teal-400/50 hover:shadow-teal-500/20 group-hover:text-teal-400',
    },
    {
      title: 'Internal Operations Automation',
      description:
        'Task flows, data handling, reporting, and cross-system synchronization.',
      link: '/solutions#operations',
      colors: 'border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-cyan-500/20 group-hover:text-cyan-400',
    },
    {
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built interfaces designed to support automation logic.',
      link: '/solutions#web-apps',
      colors: 'border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/20 group-hover:text-emerald-400',
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
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-5 sm:px-6 lg:px-8 overflow-hidden py-10 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-5 sm:mb-8 leading-tight">
            <span className="block text-slate-100 mb-3 sm:mb-3">
              AI Automation Is Becoming
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Operational Infrastructure
            </span>
          </h1>
          <p className="text-xl sm:text-xl md:text-2xl text-slate-300 mb-5 sm:mb-6 leading-relaxed max-w-4xl mx-auto">
            Control It Early — Or Spend Years Catching Up.
          </p>
          <p className="text-lg sm:text-lg text-slate-400 mb-6 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            We design and deploy AI automation systems that replace fragile manual
            workflows with scalable operational infrastructure — across sales, support,
            and internal operations.
          </p>
          <p className="text-lg sm:text-lg font-medium text-emerald-400 mb-7 sm:mb-12">
            Your competitors are not "experimenting" anymore. They are systematizing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg sm:text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 animate-pulse-glow"
            >
              Request an Automation Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/examples"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/30 text-cyan-400 text-lg sm:text-lg font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300"
            >
              See Example Systems
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-7 sm:p-8 md:p-12 shadow-xl shadow-cyan-500/10">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-slate-100">
              This Is Not About AI Hype
            </h2>
            <p className="text-lg sm:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
              Most businesses will not lose because they ignored AI. They will lose
              because they implemented it without structure.
            </p>
            <p className="text-lg sm:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
              AI added on top of broken workflows does not create leverage — it creates
              hidden operational risk.
            </p>
            <p className="text-xl sm:text-xl font-semibold text-emerald-400">
              We don't sell tools. We design systems.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-center text-slate-100">
            The Real Bottleneck Isn't Your Team
          </h2>
          <p className="text-lg sm:text-lg text-slate-300 mb-7 sm:mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            When performance breaks under growth, it's rarely a people problem. It's
            usually one of these:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 mb-7 sm:mb-12">
            {bottlenecks.map((bottleneck, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-900/40 backdrop-blur-sm border-2 border-red-500/30 rounded-xl p-5 sm:p-6 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <p className="text-base sm:text-base text-slate-300">{bottleneck}</p>
              </div>
            ))}
          </div>
          <p className="text-xl sm:text-xl font-semibold text-cyan-400 text-center">
            Growth exposes weak systems.
          </p>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-center text-slate-100">
            What We Build
          </h2>
          <p className="text-lg sm:text-lg text-slate-300 mb-8 sm:mb-16 text-center max-w-3xl mx-auto leading-relaxed">
            Custom AI automation systems designed around real operational constraints —
            not templates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className={`group bg-slate-900/40 backdrop-blur-sm border-2 ${solution.colors} rounded-xl p-6 sm:p-6 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95`}
              >
                <h3 className="text-xl sm:text-xl font-semibold mb-3 sm:mb-3 text-slate-100 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-base sm:text-base text-slate-400 leading-relaxed">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-emerald-500/10 backdrop-blur-sm border-2 border-cyan-500/40 rounded-2xl p-7 sm:p-8 md:p-12 shadow-xl shadow-cyan-500/10">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-slate-100">
              The Mistake Most Companies Will Make
            </h2>
            <p className="text-lg sm:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
              They will adopt AI tactically instead of structurally.
            </p>
            <p className="text-lg sm:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
              That means:
            </p>
            <ul className="space-y-3 sm:space-y-3 mb-6 sm:mb-8">
              {['One chatbot here', 'One automation there', 'No unified logic', 'No ownership', 'No scalability'].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-3 text-base sm:text-base text-slate-300">
                    <span className="text-cyan-400 text-lg">—</span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="text-xl sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-4">
              Fragmented automation becomes technical debt.
            </p>
            <p className="text-lg sm:text-lg text-slate-300">
              We design systems that compound — not patch.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center text-slate-100">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                number: '1',
                title: 'Audit & Workflow Mapping',
                description:
                  'We analyze your workflows, identify bottlenecks, and define automation boundaries. Output: A clear system map and prioritized automation opportunities.',
                icon: Target,
                colors: 'border-cyan-500/30 from-cyan-500/20 to-blue-500/20 text-cyan-400',
              },
              {
                number: '2',
                title: 'Custom System Design',
                description:
                  'We design AI systems around how your business actually operates. No templates. No generic stacks.',
                icon: Zap,
                colors: 'border-emerald-500/30 from-emerald-500/20 to-teal-500/20 text-emerald-400',
              },
              {
                number: '3',
                title: 'Deployment & Optimization',
                description:
                  'Systems are deployed, monitored, and improved based on real usage. Automation is treated as infrastructure — not a one-off project.',
                icon: Shield,
                colors: 'border-teal-500/30 from-teal-500/20 to-emerald-500/20 text-teal-400',
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative bg-slate-900/40 backdrop-blur-sm border-2 ${step.colors.split(' ')[0]} rounded-xl p-6 sm:p-8 hover:border-opacity-60 transition-all duration-300 hover:shadow-xl`}
              >
                <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${step.colors.split(' ').slice(1, 3).join(' ')} border-2 ${step.colors.split(' ')[0]} mb-4 sm:mb-6 mx-auto`}>
                  <step.icon className={step.colors.split(' ')[3]} size={28} />
                </div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-5xl font-bold text-cyan-500/10">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-xl font-semibold mb-4 sm:mb-4 text-slate-100 text-center">
                  {step.title}
                </h3>
                <p className="text-base sm:text-base text-slate-400 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg sm:text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Request an Automation Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-center text-slate-100">
            Why This Works
          </h2>
          <p className="text-lg sm:text-lg text-slate-300 mb-7 sm:mb-12 text-center leading-relaxed">
            We don't ask you to trust claims. We show functioning systems.
          </p>
          <p className="text-lg sm:text-lg text-slate-300 mb-6 sm:mb-8 text-center leading-relaxed">
            Instead of "success stories", we provide:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 mb-8 sm:mb-12">
            {benefits.map((benefit, index) => {
              const colors = [
                'border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 hover:shadow-cyan-500/20',
                'border-emerald-500/30 hover:border-emerald-400/50 text-emerald-400 hover:shadow-emerald-500/20',
                'border-teal-500/30 hover:border-teal-400/50 text-teal-400 hover:shadow-teal-500/20',
                'border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:shadow-blue-500/20',
              ];
              const colorClass = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 bg-slate-900/40 backdrop-blur-sm border-2 ${colorClass} rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  <CheckCircle className={`flex-shrink-0 ${colorClass.split(' ')[2]}`} size={22} />
                  <p className="text-base sm:text-base text-slate-300">{benefit}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              to="/examples"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 text-emerald-400 text-lg sm:text-lg font-semibold rounded-lg hover:bg-slate-800/70 hover:border-emerald-400/50 transition-all duration-300"
            >
              View Example Automations
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-7 sm:mb-12 text-center text-slate-100">
            Who This Is For
          </h2>
          <p className="text-lg sm:text-lg text-slate-300 mb-6 sm:mb-8 text-center leading-relaxed">
            You'll benefit most if:
          </p>
          <div className="space-y-4 sm:space-y-4 mb-12">
            {idealFor.map((item, index) => {
              const colors = [
                'border-cyan-500/30 text-cyan-400',
                'border-emerald-500/30 text-emerald-400',
                'border-teal-500/30 text-teal-400',
                'border-blue-500/30 text-blue-400',
                'border-cyan-500/30 text-cyan-400',
              ];
              const colorClass = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`flex items-start gap-3 bg-slate-900/40 backdrop-blur-sm border-2 ${colorClass} rounded-xl p-5 sm:p-6 hover:border-opacity-60 transition-all duration-300`}
                >
                  <CheckCircle className={`flex-shrink-0 mt-0.5 ${colorClass.split(' ')[1]}`} size={22} />
                  <p className="text-base sm:text-base text-slate-300">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 text-slate-100">
            AI Automation Is a Strategic Decision
          </h2>
          <p className="text-lg sm:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
            In the next 12–18 months, AI-driven operations will stop being a competitive
            edge.
          </p>
          <p className="text-lg sm:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
            They will become baseline.
          </p>
          <p className="text-xl sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
            The question is whether you design your systems early — or inherit complexity
            later.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg sm:text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 animate-pulse-glow"
          >
            Request an Automation Audit
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center text-slate-100">
            FAQs
          </h2>
          <div className="space-y-5 sm:space-y-6">
            {faqs.map((faq, index) => {
              const colors = [
                'border-cyan-500/30 hover:border-cyan-400/50',
                'border-emerald-500/30 hover:border-emerald-400/50',
                'border-teal-500/30 hover:border-teal-400/50',
                'border-blue-500/30 hover:border-blue-400/50',
                'border-cyan-500/30 hover:border-cyan-400/50',
                'border-emerald-500/30 hover:border-emerald-400/50',
                'border-teal-500/30 hover:border-teal-400/50',
              ];
              const colorClass = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`bg-slate-900/40 backdrop-blur-sm border-2 ${colorClass} rounded-xl p-6 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className="text-xl sm:text-xl font-semibold mb-4 sm:mb-4 text-slate-100">
                    {faq.question}
                  </h3>
                  <p className="text-base sm:text-base text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
