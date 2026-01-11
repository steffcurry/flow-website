import { Search, Wrench, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Audit & Workflow Mapping',
      subtitle: 'Understanding, Not Selling',
      description: 'We analyze your current workflows to identify bottlenecks, repetitive tasks, and automation opportunities.',
      details: [
        'Process documentation and analysis',
        'Identification of manual bottlenecks',
        'Assessment of existing tools and systems',
        'Definition of automation scope',
        'Clear documentation of findings'
      ]
    },
    {
      number: '2',
      icon: Wrench,
      title: 'Custom AI System Build',
      subtitle: 'Custom, Not Templated',
      description: 'Systems are designed specifically for your workflows, integrating with your existing tools and processes.',
      details: [
        'Custom system architecture design',
        'Integration with existing platforms',
        'AI model configuration and training',
        'User interface and workflow design',
        'Testing and refinement'
      ]
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Deployment & Optimization',
      subtitle: 'Stability, Not Dependence',
      description: 'Systems are deployed to production and continuously monitored for performance, accuracy, and reliability.',
      details: [
        'Production deployment and configuration',
        'Performance monitoring and logging',
        'Ongoing accuracy assessment',
        'System refinement based on real usage',
        'Regular maintenance and updates'
      ]
    }
  ];

  return (
    <div id="how-it-works" className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A predictable process focused on understanding your workflows and delivering stable automation systems.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
                )}

                <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center">
                        <Icon className="text-cyan-400" size={32} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {step.title}
                      </h2>
                      <p className="text-xl text-cyan-400 font-semibold mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle2 className="text-cyan-400 flex-shrink-0 mr-3 mt-1" size={20} />
                            <span className="text-gray-400">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 rounded-xl p-8 border border-slate-800 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Reduce Fear, Increase Predictability
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our process is designed to provide clarity at every stage, from initial audit through ongoing optimization.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Start With an Audit
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
