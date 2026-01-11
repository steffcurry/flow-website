import { Github, ExternalLink } from 'lucide-react';

const Team = () => {
  return (
    <div id="team" className="min-h-screen bg-slate-950 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Team
          </h1>
          <p className="text-xl text-gray-400">
            Real people behind the agency.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                AI
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                AI Automation Engineer
              </h2>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/john-automated-systems/ai-automation-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ExternalLink size={18} />
                <span>Portfolio</span>
              </a>
              <a
                href="https://github.com/john-automated-systems/john-automated-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
