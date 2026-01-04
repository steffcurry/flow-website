import { Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

function TeamPage() {
  const team = [
    {
      role: 'AI Automation Engineer',
      portfolio: 'https://github.com/john-automated-systems/ai-automation-portfolio',
      github: 'https://github.com/john-automated-systems/john-automated-systems',
    },
    {
      role: 'Role: (Editable placeholder)',
      portfolio: '',
      github: '',
    },
  ];

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Team</h1>
          <p className="text-xl text-[#9AA4B2]">Real people behind the company.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <AnimatedSection key={index} variant="fadeUp" delay={index * 100}>
              <FloatingCard>
                <div className="bg-[#161B22] border border-[#232A35] p-8 rounded-lg card-glow h-full">
                  <h3 className="text-xl font-semibold mb-6 text-[#E6E8EB]">{member.role}</h3>
                  {member.portfolio || member.github ? (
                    <div className="space-y-3">
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-[#4F7DF3] hover:text-[#3D6AE0] transition-all duration-300 hover:translate-x-1"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm">Portfolio</span>
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-[#4F7DF3] hover:text-[#3D6AE0] transition-all duration-300 hover:translate-x-1"
                        >
                          <Github size={18} />
                          <span className="text-sm">GitHub</span>
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
              </FloatingCard>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
