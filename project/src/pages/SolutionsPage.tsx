import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

function SolutionsPage() {
  const solutions = [
    {
      id: 'customer-support',
      title: 'AI Customer Support Systems',
      description: 'AI systems that handle repetitive customer inquiries and route complex cases appropriately.',
      points: [
        'Automated responses to common questions',
        'Intelligent case routing based on complexity',
        'Integration with existing support platforms',
        'Escalation protocols for human intervention',
        'Knowledge base integration',
      ],
    },
    {
      id: 'voice-callers',
      title: 'AI Voice Callers',
      description: 'Automated voice systems for inbound and outbound calls, qualification, and confirmations.',
      points: [
        'Outbound call campaigns for lead qualification',
        'Inbound call handling and routing',
        'Appointment confirmations and reminders',
        'Information gathering and data capture',
        'Natural conversation flows',
      ],
    },
    {
      id: 'chat-agents',
      title: 'AI Chat Agents',
      description: 'Intelligent chat agents for websites and internal use, guiding users through predefined workflows.',
      points: [
        'Website visitor engagement and qualification',
        'Internal employee support systems',
        'Guided workflow completion',
        'Information retrieval and delivery',
        'Multi-channel deployment',
      ],
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification & Appointment Automation',
      description: 'End-to-end automation of lead screening, qualification, and meeting scheduling.',
      points: [
        'Automated lead screening criteria',
        'Multi-touch qualification sequences',
        'Calendar integration and scheduling',
        'Confirmation and reminder workflows',
        'CRM integration and data sync',
      ],
    },
    {
      id: 'operations',
      title: 'Internal Operations Automation',
      description: 'Automation of internal processes, task flows, data handling, and reporting.',
      points: [
        'Data entry and processing automation',
        'Cross-system workflow coordination',
        'Automated reporting and alerts',
        'Document processing and classification',
        'Task assignment and tracking',
      ],
    },
    {
      id: 'web-apps',
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built websites and internal tools designed to support automation workflows.',
      points: [
        'Custom dashboards and interfaces',
        'Workflow management tools',
        'Client portals and self-service systems',
        'Data visualization and reporting',
        'Integration with automation systems',
      ],
    },
    {
      id: 'custom',
      title: 'Custom Automation Systems',
      description: 'Bespoke automation solutions tailored to specific business processes across departments.',
      points: [
        'Process analysis and mapping',
        'Custom workflow design',
        'Department-specific automation',
        'Legacy system integration',
        'Scalable architecture design',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Solutions</h1>
          <p className="text-xl text-[#9AA4B2]">
            Custom AI automation systems designed for your specific business workflows.
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={solution.id}
              variant={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
              delay={index * 50}
              className={`${index % 2 === 0 ? 'bg-[#161B22]' : ''} ${
                index % 2 === 0 ? 'py-12 px-8 rounded-lg' : ''
              }`}
            >
              <div id={solution.id}>
                <h2 className="text-3xl font-bold mb-4 text-[#E6E8EB]">{solution.title}</h2>
                <p className="text-lg text-[#9AA4B2] mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#4F7DF3] rounded-full mt-2 animate-glow"></div>
                      <span className="text-[#E6E8EB]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-20 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Discuss Your Requirements
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}

export default SolutionsPage;
