import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div id="home" className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU2LCAxODksIDI0OCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI Automation Is Becoming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Operational Infrastructure
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Control It Early — Or Spend Years Catching Up.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            We design and deploy AI automation systems that replace fragile manual workflows with scalable operational infrastructure — across sales, support, and internal operations.
          </p>
          <p className="text-lg text-gray-300 mb-12 font-medium">
            Your competitors are not "experimenting" anymore. They are systematizing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Book a Demo
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#examples"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 border border-slate-700"
            >
              See Example Systems
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            This Is Not About AI Hype
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Most businesses will not lose because they ignored AI. They will lose because they implemented it without structure.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            AI added on top of broken workflows does not create leverage — it creates hidden operational risk.
          </p>
          <p className="text-2xl text-cyan-400 font-semibold text-center">
            We don't sell tools. We design systems.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            The Real Bottleneck Isn't Your Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
            When performance breaks under growth, it's rarely a people problem. It's usually one of these:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Leads handled inconsistently',
              'Response times dependent on availability',
              'Manual handoffs between systems',
              'Knowledge trapped in individuals',
              'Processes that do not survive scale'
            ].map((issue, index) => (
              <div key={index} className="flex items-start space-x-3 bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors duration-200">
                <CheckCircle2 className="text-red-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300 text-lg">{issue}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl text-cyan-400 font-semibold text-center">
            Growth exposes weak systems.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            What We Build
          </h2>
          <p className="text-xl text-gray-400 mb-16 text-center">
            Custom AI automation systems designed around real operational constraints — not templates.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Customer Support Systems',
                description: 'Structured AI handling repetitive inquiries with escalation logic for edge cases.',
                href: '#solutions'
              },
              {
                title: 'AI Voice Callers',
                description: 'Automated inbound and outbound calls for qualification, confirmations, and routing.',
                href: '#solutions'
              },
              {
                title: 'AI Chat Agents',
                description: 'Controlled conversational agents that guide users through predefined workflows.',
                href: '#solutions'
              },
              {
                title: 'Lead Qualification & Appointment Automation',
                description: 'End-to-end systems that filter, score, and schedule without human intervention.',
                href: '#solutions'
              },
              {
                title: 'Internal Operations Automation',
                description: 'Task flows, data handling, reporting, and cross-system synchronization.',
                href: '#solutions'
              },
              {
                title: 'Custom Websites & Web Applications',
                description: 'Purpose-built interfaces designed to support automation logic.',
                href: '#solutions'
              }
            ].map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="group bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-cyan-400 font-medium inline-flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            The Mistake Most Companies Will Make
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            They will adopt AI tactically instead of structurally.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            That means:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'One chatbot here',
              'One automation there',
              'No unified logic',
              'No ownership',
              'No scalability'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 text-lg">
                <span className="text-red-500 mr-3">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-2xl text-cyan-400 font-semibold text-center mb-4">
            Fragmented automation becomes technical debt.
          </p>
          <p className="text-xl text-gray-300 text-center">
            We design systems that compound — not patch.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            How It Works
          </h2>

          <div className="space-y-12">
            {[
              {
                number: '1',
                title: 'Audit & Workflow Mapping',
                description: 'We analyze your workflows, identify bottlenecks, and define automation boundaries. Output: A clear system map and prioritized automation opportunities.'
              },
              {
                number: '2',
                title: 'Custom System Design',
                description: 'We design AI systems around how your business actually operates. No templates. No generic stacks.'
              },
              {
                number: '3',
                title: 'Deployment & Optimization',
                description: 'Systems are deployed, monitored, and improved based on real usage. Automation is treated as infrastructure — not a one-off project.'
              }
            ].map((step) => (
              <div key={step.number} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Request an Automation Audit
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            Why This Works
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-center leading-relaxed">
            We don't ask you to trust claims. We show functioning systems.
          </p>
          <p className="text-lg text-gray-400 mb-6 text-center">
            Instead of "success stories", we provide:
          </p>
          <ul className="space-y-3 mb-12 max-w-2xl mx-auto">
            {[
              'Live example automations',
              'Clear system architecture',
              'Transparent process design',
              'Demonstrable logic, not promises with hype'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300 text-lg">
                <CheckCircle2 className="text-cyan-400 mr-3 flex-shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <a
              href="#examples"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 border border-slate-700"
            >
              View Example Automations
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Who This Is For
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You'll benefit most if:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Your operations are growing faster than your systems',
              'Manual processes are slowing decisions',
              'Hiring feels like a temporary fix',
              'You want AI deployed with intent, not experimentation',
              'You value clarity over hype'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-slate-950 p-6 rounded-lg border border-slate-800">
                <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            AI Automation Is a Strategic Decision
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            In the next 12–18 months, AI-driven operations will stop being a competitive edge. They will become baseline.
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            The question is whether you design your systems early — or inherit complexity later.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Book a Demo
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            FAQs
          </h2>

          <div className="space-y-8">
            {[
              {
                question: 'What exactly do you mean by "AI automation systems"?',
                answer: 'We design structured systems where AI operates inside defined workflows. This includes decision logic, integrations, escalation rules, and monitoring — not standalone tools or chatbots.'
              },
              {
                question: 'Will this replace my team?',
                answer: 'No. These systems replace manual steps, not people. The goal is to remove repetitive operational work so human effort is applied where judgment is required.'
              },
              {
                question: 'How is this different from using off-the-shelf automation tools?',
                answer: 'Tools automate tasks. Systems automate outcomes. We design architecture that connects tools, data, and logic into a single operational flow.'
              },
              {
                question: 'How quickly can we see results?',
                answer: 'Initial systems are typically deployed within weeks. Operational impact begins as soon as a system replaces a manual bottleneck.'
              },
              {
                question: 'Do we need to change our existing tools or software?',
                answer: 'No. We design around your current stack whenever possible and only replace components when they limit scalability.'
              },
              {
                question: 'Is this a one-time project or an ongoing system?',
                answer: 'Automation is treated as infrastructure. Systems can evolve, expand, and optimize as your operations change.'
              },
              {
                question: 'What kind of businesses is this NOT for?',
                answer: 'Businesses looking for AI experiments, generic chatbots, or quick hype-driven solutions will not benefit. We work best with teams that value structure and long-term operational clarity.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-lg border border-slate-800">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
