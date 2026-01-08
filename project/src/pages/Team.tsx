import { Github, ExternalLink } from 'lucide-react';

export default function Team() {
  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
              Team
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Real people behind the agency.
            </p>
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 sm:p-12 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CF
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-2">
                Coreflow Automation
              </h2>
              <p className="text-cyan-400 font-medium mb-8">AI Automation Engineer</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/john-automated-systems/ai-automation-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300"
              >
                <ExternalLink size={20} />
                Portfolio
              </a>
              <a
                href="https://github.com/john-automated-systems/john-automated-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
