import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';
import { useParallax } from '../hooks/useParallax';

function HomePage() {
  const { ref: parallaxRef, offset } = useParallax(0.3);

  const solutions = [
    {
      title: 'AI Customer Support Systems',
      description: 'AI systems that handle repetitive customer inquiries and route complex cases appropriately.',
      anchor: 'solutions#customer-support',
    },
    {
      title: 'AI Voice Callers',
      description: 'Automated voice systems for inbound and outbound calls, qualification, and confirmations.',
      anchor: 'solutions#voice-callers',
    },
    {
      title: 'AI Chat Agents',
      description: 'Intelligent chat agents for websites and internal use, guiding users through predefined workflows.',
      anchor: 'solutions#chat-agents',
    },
    {
      title: 'Lead Qualification & Appointment Automation',
      description: 'End-to-end automation of lead screening, qualification, and meeting scheduling.',
      anchor: 'solutions#lead-qualification',
    },
    {
      title: 'Internal Operations Automation',
      description: 'Automation of internal processes, task flows, data handling, and reporting.',
      anchor: 'solutions#operations',
    },
    {
      title: 'Custom Websites & Web Applications',
      description: 'Purpose-built websites and internal tools designed to support automation workflows.',
      anchor: 'solutions#web-apps',
    },
    {
      title: 'Custom Automation Systems',
      description: 'Bespoke automation solutions tailored to specific business processes across departments.',
      anchor: 'solutions#custom',
    },
  ];

  const painPoints = [
    'Missed leads',
    'Slow response times',
    'Manual repetitive work',
    'Operational bottlenecks',
  ];

  const steps = [
    {
      number: '1',
      title: 'Audit & Workflow Mapping',
      description: 'Identify bottlenecks and automation opportunities.',
    },
    {
      number: '2',
      title: 'Custom AI System Build',
      description: 'Systems designed around real workflows, not templates.',
    },
    {
      number: '3',
      title: 'Deployment & Optimization',
      description: 'Deployed, monitored, and improved over time.',
    },
  ];

  const scrollToExamples = () => {
    const element = document.getElementById('home-examples');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden">
      <section
        ref={parallaxRef}
        style={{ transform: `translateY(${offset}px)` }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <AnimatedSection variant="fadeUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              We Design and Deploy AI Automation Systems That Remove Manual Bottlenecks.
            </h1>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={100}>
            <p className="text-xl text-[#9AA4B2] max-w-3xl mx-auto">
              Sales, support, operations, and internal workflows automated with custom AI-driven systems.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={200} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="btn-primary">
              Book a Demo
            </a>
            <button
              onClick={scrollToExamples}
              className="px-8 py-3 text-[#4F7DF3] font-medium border border-[#4F7DF3] rounded hover:bg-[#4F7DF3]/10 transition-all duration-300"
            >
              See Systems in Action
            </button>
          </AnimatedSection>

          <AnimatedSection variant="fadeIn" delay={300} className="pt-8">
            <p className="text-sm text-[#9AA4B2] mb-3">TRUSTED FOR</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#E6E8EB]">
              <span>Sales</span>
              <span className="text-[#232A35]">|</span>
              <span>Support</span>
              <span className="text-[#232A35]">|</span>
              <span>Operations</span>
              <span className="text-[#232A35]">|</span>
              <span>Internal Processes</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0E1116] via-[#161B22] to-[#0E1116] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {painPoints.map((point, index) => (
                <div key={point} className="flex items-center space-x-2 animate-fadeInScale" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-1.5 h-1.5 bg-[#4F7DF3] rounded-full animate-glow"></div>
                  <span className="text-[#E6E8EB]">{point}</span>
                </div>
              ))}
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="text-[#9AA4B2] italic text-center mt-8">
                When processes break, it's usually a system issue, not a human one.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            We design and deploy custom AI automation systems for business operations.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.title} variant="slideUp" delay={index * 50}>
              <FloatingCard>
                <a
                  href={`#${solution.anchor}`}
                  className="card-glow p-6 rounded-lg block h-full hover:shadow-2xl"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#E6E8EB]">{solution.title}</h3>
                  <p className="text-[#9AA4B2] text-sm leading-relaxed">{solution.description}</p>
                </a>
              </FloatingCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-[#161B22] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} variant="fadeUp" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4F7DF3] rounded-full flex items-center justify-center mx-auto mb-4 animate-glow shadow-lg shadow-[#4F7DF3]/30">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#E6E8EB]">{step.title}</h3>
                  <p className="text-[#9AA4B2]">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Request an Automation Audit</span>
              <ArrowRight size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section id="home-examples" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Example Automations</h2>
          <p className="text-[#9AA4B2] mb-8 max-w-2xl mx-auto">
            View demonstration systems that showcase how AI automation can be applied to real business workflows.
          </p>
          <a href="#examples" className="btn-secondary inline-flex items-center space-x-2">
            <span>View Example Automations</span>
            <ArrowRight size={20} />
          </a>
        </AnimatedSection>
      </section>

      <section className="bg-[#161B22] py-20">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Book a Demo and See What Can Be Automated.
          </h2>
          <a href="#contact" className="btn-primary inline-block">
            Book a Demo
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}

export default HomePage;
