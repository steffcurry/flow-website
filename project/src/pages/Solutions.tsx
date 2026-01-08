import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Phone,
  Bot,
  Calendar,
  Settings,
  Globe,
  Cog,
  ArrowRight,
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'customer-support',
      icon: MessageSquare,
      title: 'AI Customer Support Systems',
      description:
        'AI systems that handle repetitive customer inquiries and route complex cases appropriately.',
      features: [
        'Automated responses to common questions',
        'Intelligent case routing based on complexity',
        'Integration with existing support platforms',
        'Escalation protocols for human intervention',
        'Knowledge base integration',
      ],
    },
    {
      id: 'voice-callers',
      icon: Phone,
      title: 'AI Voice Callers',
      description:
        'Automated voice systems for inbound and outbound calls, qualification, and confirmations.',
      features: [
        'Outbound call campaigns for lead qualification',
        'Inbound call handling and routing',
        'Appointment confirmations and reminders',
        'Information gathering and data capture',
        'Natural conversation flows',
      ],
    },
    {
      id: 'chat-agents',
      icon: Bot,
      title: 'AI Chat Agents',
      description:
        'Intelligent chat agents for websites and internal use, guiding users through predefined workflows.',
      features: [
        'Website visitor engagement and qualification',
        'Internal employee support systems',
        'Guided workflow completion',
        'Information retrieval and delivery',
        'Multi-channel deployment',
      ],
    },
    {
      id: 'lead-qualification',
      icon: Calendar,
      title: 'Lead Qualification & Appointment Automation',
      description:
        'End-to-end automation of lead screening, qualification, and meeting scheduling.',
      features: [
        'Automated lead screening criteria',
        'Multi-touch qualification sequences',
        'Calendar integration and scheduling',
        'Confirmation and reminder workflows',
        'CRM integration and data sync',
      ],
    },
    {
      id: 'operations',
      icon: Settings,
      title: 'Internal Operations Automation',
      description:
        'Automation of internal processes, task flows, data handling, and reporting.',
      features: [
        'Data entry and processing automation',
        'Cross-system workflow coordination',
        'Automated reporting and alerts',
        'Document processing and classification',
        'Task assignment and tracking',
      ],
    },
    {
      id: 'web-apps',
      icon: Globe,
      title: 'Custom Websites & Web Applications',
      description:
        'Purpose-built websites and internal tools designed to support automation workflows.',
      features: [
        'Custom dashboards and interfaces',
        'Workflow management tools',
        'Client portals and self-service systems',
        'Data visualization and reporting',
        'Integration with automation systems',
      ],
    },
    {
      id: 'custom',
      icon: Cog,
      title: 'Custom Automation Systems',
      description:
        'Bespoke automation solutions tailored to specific business processes across departments.',
      features: [
        'Process analysis and mapping',
        'Custom workflow design',
        'Department-specific automation',
        'Legacy system integration',
        'Scalable architecture design',
      ],
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
              Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Custom AI automation systems designed for your specific business workflows.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className="group bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="text-cyan-400" size={32} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-slate-400"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
