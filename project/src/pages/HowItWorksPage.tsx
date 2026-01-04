import AnimatedSection from '../components/AnimatedSection';

function HowItWorksPage() {
  const phases = [
    {
      number: '1',
      title: 'Audit & Workflow Mapping',
      subtitle: 'Understanding, Not Selling',
      description:
        'We analyze your current workflows to identify bottlenecks, repetitive tasks, and automation opportunities.',
      details: [
        'Process documentation and analysis',
        'Identification of manual bottlenecks',
        'Assessment of existing tools and systems',
        'Definition of automation scope',
        'Clear documentation of findings',
      ],
    },
    {
      number: '2',
      title: 'Custom AI System Build',
      subtitle: 'Custom, Not Templated',
      description:
        'Systems are designed specifically for your workflows, integrating with your existing tools and processes.',
      details: [
        'Custom system architecture design',
        'Integration with existing platforms',
        'AI model configuration and training',
        'User interface and workflow design',
        'Testing and refinement',
      ],
    },
    {
      number: '3',
      title: 'Deployment & Optimization',
      subtitle: 'Stability, Not Dependence',
      description:
        'Systems are deployed to production and continuously monitored for performance, accuracy, and reliability.',
      details: [
        'Production deployment and configuration',
        'Performance monitoring and logging',
        'Ongoing accuracy assessment',
        'System refinement based on real usage',
        'Regular maintenance and updates',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-[#9AA4B2]">
            A predictable process focused on understanding your workflows and delivering stable automation systems.
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <AnimatedSection
              key={phase.number}
              variant="fadeUp"
              delay={index * 100}
              className="bg-[#161B22] p-8 rounded-lg hover:shadow-xl hover:shadow-[#4F7DF3]/10 transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-16 h-16 bg-[#4F7DF3] rounded-full flex items-center justify-center flex-shrink-0 animate-glow shadow-lg shadow-[#4F7DF3]/30">
                  <span className="text-2xl font-bold text-white">{phase.number}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-[#E6E8EB]">{phase.title}</h2>
                  <p className="text-lg text-[#2BD4A4] font-medium">{phase.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-[#9AA4B2] mb-6">{phase.description}</p>
              <ul className="space-y-3">
                {phase.details.map((detail) => (
                  <li key={detail} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#4F7DF3] rounded-full mt-2 animate-glow"></div>
                    <span className="text-[#E6E8EB]">{detail}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 bg-[#161B22] p-8 rounded-lg text-center hover:shadow-xl hover:shadow-[#4F7DF3]/10 transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-[#E6E8EB]">Reduce Fear, Increase Predictability</h3>
          <p className="text-[#9AA4B2] mb-6 max-w-2xl mx-auto">
            Our process is designed to provide clarity at every stage, from initial audit through ongoing optimization.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Start With an Audit
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}

export default HowItWorksPage;
