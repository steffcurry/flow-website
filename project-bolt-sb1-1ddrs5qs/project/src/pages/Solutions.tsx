import { Phone, MessageSquare, Users, Calendar, Settings, Globe, Wrench, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Users,
      title: 'AI Customer Support Systems',
      description: 'AI systems that handle repetitive customer inquiries and route complex cases appropriately.',
      features: [
        'Automated responses to common questions',
        'Intelligent case routing based on complexity',
        'Integration with existing support platforms',
        'Escalation protocols for human intervention',
        'Knowledge base integration'
      ]
    },
    {
      icon: Phone,
      title: 'AI Voice Callers',
      description: 'Automated voice systems for inbound and outbound calls, qualification, and confirmations.',
      features: [
        'Outbound call campaigns for lead qualification',
        'Inbound call handling and routing',
        'Appointment confirmations and reminders',
        'Information gathering and data capture',
        'Natural conversation flows'
      ]
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Agents',
      description: 'Intelligent chat agents for websites and internal use, guiding users through predefined workflows.',
      features: [
        'Website visitor engagement and qualification',
        'Internal employee support systems',
        'Guided workflow completion',
        'Information retrieval and delivery',
        'Multi-channel deployment'
      ]
    },
    {
      icon: Calendar,
      title: 'Lead Qualification & Appointment Automation',
      description: 'End-to-end automation of lead screening, qualification, and meeting scheduling.',
      features: [
        'Automated lead screening criteria',
        'Multi-touch qualification sequences',
        'Calendar integration and scheduling',
        'Confirmation and reminder workflows',
        'CRM integration and data sync'
      ]
    },
    {
      icon: Settings,
      title: 'Internal Operations Automation',
      description: 'Automation of internal processes, task flows, data handling, and reporting.',
      features: [
        'Data entry and processing automation',
        'Cross-system workflow coordination',
        'Automated reporting and alerts',
        'Document processing and classification',
        'Task assignment and tracking'
      ]
    },
    {
      icon: Globe,
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built websites and internal tools designed to support automation workflows.',
      features: [
        'Custom dashboards and interfaces',
        'Workflow management tools',
        'Client portals and self-service systems',
        'Data visualization and reporting',
        'Integration with automation systems'
      ]
    },
    {
      icon: Wrench,
      title: 'Custom Automation Systems',
      description: 'Bespoke automation solutions tailored to specific business processes across departments.',
      features: [
        'Process analysis and mapping',
        'Custom workflow design',
        'Department-specific automation',
        'Legacy system integration',
        'Scalable architecture design'
      ]
    }
  ];

  return (
    <div id="solutions" className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Custom AI automation systems designed for your specific business workflows.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-400">
                          <span className="text-cyan-400 mr-3 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
