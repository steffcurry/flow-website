import { ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <div id="pricing" className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Pricing Model
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Custom pricing based on your specific automation needs and complexity.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-8 md:p-12 border border-slate-800 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Project-Based Pricing
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every automation system is unique. We provide detailed proposals after understanding your specific workflows, integration requirements, and operational constraints.
          </p>
          <p className="text-gray-400 mb-8">
            Pricing factors include:
          </p>
          <ul className="text-left max-w-xl mx-auto space-y-3 mb-12">
            {[
              'Workflow complexity and automation scope',
              'Number of system integrations required',
              'Data volume and processing requirements',
              'Custom development and training needs',
              'Ongoing maintenance and optimization'
            ].map((factor, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-3">•</span>
                {factor}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Request a Proposal
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
