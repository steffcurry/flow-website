import { useState } from 'react';
import { Play, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DemoSystem {
  id: string;
  featured?: boolean;
  title: string;
  videoUrl?: string;
  problem: string;
  systemBuilt: string;
  result: string;
  features?: string[];
}

const ExampleAutomations = () => {
  const [selectedDemo, setSelectedDemo] = useState<DemoSystem | null>(null);

  const demoSystems: DemoSystem[] = [
    {
      id: 'voice-caller',
      featured: true,
      title: 'Appointment Management AI Voice Caller System',
      videoUrl: 'https://youtu.be/ecs54Z86XDU',
      problem: 'Businesses spend significant time handling phone calls for appointment booking, updates, and cancellations, leading to missed calls, errors, and operational inefficiency.',
      systemBuilt: 'An AI-powered voice calling system that manages the entire appointment lifecycle, integrates with calendars, and escalates calls when needed.',
      result: 'Automated 24/7 phone handling, elimination of double bookings, and improved customer experience with structured data capture and system integration.',
      features: [
        'Automated outbound and inbound call handling',
        'Calendar integration and real-time availability',
        'Natural conversation flows',
        'Automatic escalation for complex scenarios',
        'CRM synchronization'
      ]
    },
    {
      id: 'chat-agent',
      featured: true,
      title: 'Appointment Management & Customer Support AI Chat-Agent System',
      videoUrl: 'https://youtu.be/_sY0JgB3S54',
      problem: 'Law firms spend significant time handling messages for appointment booking, updates, and cancellations, leading to errors and operational inefficiency.',
      systemBuilt: 'An AI-powered chat-agent system that manages appointments, answers inquiries via a Knowledge Base, and automatically updates the firm\'s CRM with extracted case details.',
      result: 'Reduced manual messaging, 24/7 appointment management, prevented double bookings, and improved customer experience with direct service and structured CRM data capture.',
      features: [
        'Natural language appointment booking and management',
        'Knowledge base integration for instant answers',
        'Automatic case detail extraction',
        'CRM synchronization',
        'Multi-channel support (website, messaging platforms)',
        'Conversation context retention'
      ]
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification Voice System',
      problem: 'Sales team spending hours qualifying inbound leads manually',
      systemBuilt: 'AI voice caller that handles initial lead qualification calls',
      result: 'Automated qualification of leads with structured data capture and CRM integration',
      features: [
        'Automated outbound calls to new leads within minutes',
        'Natural conversation flow for qualification questions',
        'Real-time CRM data entry',
        'Automatic scheduling for qualified leads',
        'Human handoff for complex scenarios'
      ]
    },
    {
      id: 'support-routing',
      title: 'Customer Support Routing System',
      problem: 'Support requests being sent to wrong departments causing delays',
      systemBuilt: 'AI chat system that classifies and routes support inquiries',
      result: 'Accurate classification and routing of support requests with automated resolution for common issues',
      features: [
        'Intelligent classification of support requests',
        'Automated routing to appropriate departments',
        'Instant resolution for common issues',
        'Priority escalation for urgent matters',
        'Integration with ticketing systems'
      ]
    },
    {
      id: 'appointment-confirmation',
      title: 'Appointment Confirmation System',
      problem: 'High no-show rates due to missed confirmations and reminders',
      systemBuilt: 'Automated voice and SMS confirmation system',
      result: 'Reduced no-show rates through automated confirmation and reminder workflows',
      features: [
        'Multi-channel confirmation (voice, SMS, email)',
        'Intelligent reminder scheduling',
        'Rescheduling automation',
        'Calendar synchronization',
        'Analytics and reporting'
      ]
    },
    {
      id: 'document-processing',
      title: 'Document Processing System',
      problem: 'Manual data entry from documents causing bottlenecks and errors',
      systemBuilt: 'AI document processor with automated data extraction',
      result: 'Automated extraction and entry of data from documents into business systems',
      features: [
        'Multi-format document support',
        'Intelligent data extraction',
        'Validation and error checking',
        'System integration and data routing',
        'Audit trail and version control'
      ]
    }
  ];

  const featuredDemos = demoSystems.filter(demo => demo.featured);
  const additionalDemos = demoSystems.filter(demo => !demo.featured);

  return (
    <div id="examples" className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Example Automations
          </h1>
          <div className="inline-block bg-slate-900 border border-slate-800 rounded-lg px-6 py-3 mb-8">
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-cyan-400">Demonstration Systems:</span> The following are example systems created to demonstrate how AI automation can be applied to real business workflows.
            </p>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't ask you to believe us. We show you working systems.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Demo Systems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredDemos.map((demo) => (
              <div
                key={demo.id}
                className="bg-slate-900 rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
                    FEATURED DEMO
                  </span>
                  {demo.videoUrl && (
                    <a
                      href={demo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <Play size={16} className="mr-1" />
                      Watch Demo
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {demo.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Problem:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{demo.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">System Built:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{demo.systemBuilt}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Result:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{demo.result}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDemo(demo)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                >
                  View Full Details
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Additional Example Systems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalDemos.map((demo) => (
              <div
                key={demo.id}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <span className="inline-block bg-slate-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  DEMO SYSTEM
                </span>

                <h3 className="text-xl font-bold text-white mb-4">
                  {demo.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold text-sm mb-1">Problem:</h4>
                    <p className="text-gray-400 text-sm">{demo.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold text-sm mb-1">System Built:</h4>
                    <p className="text-gray-400 text-sm">{demo.systemBuilt}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold text-sm mb-1">Result:</h4>
                    <p className="text-gray-400 text-sm">{demo.result}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDemo(demo)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg font-medium transition-all duration-200 text-sm flex items-center justify-center"
                >
                  View Details
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Discuss Your Automation Needs
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {selectedDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-start">
              <div>
                <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {selectedDemo.featured ? 'FEATURED DEMO SYSTEM' : 'DEMO SYSTEM'}
                </span>
                <h2 className="text-2xl font-bold text-white">
                  {selectedDemo.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedDemo.videoUrl && (
                <a
                  href={selectedDemo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-cyan-400 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Play size={20} className="mr-2" />
                  Watch Demo Video
                </a>
              )}

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Problem</h3>
                <p className="text-gray-300 leading-relaxed">{selectedDemo.problem}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">System Built</h3>
                <p className="text-gray-300 leading-relaxed">{selectedDemo.systemBuilt}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Result</h3>
                <p className="text-gray-300 leading-relaxed">{selectedDemo.result}</p>
              </div>

              {selectedDemo.features && (
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">System Features</h3>
                  <ul className="space-y-3">
                    {selectedDemo.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="text-cyan-400 flex-shrink-0 mr-3 mt-1" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleAutomations;
