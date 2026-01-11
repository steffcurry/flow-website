import { Github, ExternalLink } from 'lucide-react';

export default function Team() {
  return (
    <div className="relative">
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-100">
              Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Real people behind the agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="group bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-2 border-cyan-500/40 mx-auto mb-5 sm:mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    AA
                  </span>
                </div>
                <p className="text-cyan-400 font-semibold text-base sm:text-lg mb-5 sm:mb-6">AI Automation Architect</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://github.com/john-automated-systems/ai-automation-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-slate-800/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95"
                >
                  <ExternalLink size={18} />
                  Portfolio
                </a>
                <a
                  href="https://github.com/john-automated-systems/john-automated-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-slate-800/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border-2 border-emerald-500/30 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/40 mx-auto mb-5 sm:mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    TI
                  </span>
                </div>
                <p className="text-emerald-400 font-semibold text-base sm:text-lg mb-5 sm:mb-6">Technical Implementation Specialist</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://github.com/anastasiosaienterprise-lang/AUTOMATION"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-xl hover:bg-slate-800/70 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 active:scale-95"
                >
                  <ExternalLink size={18} />
                  Portfolio
                </a>
                <a
                  href="https://github.com/anastasiosaienterprise-lang/Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 backdrop-blur-sm border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-xl hover:bg-slate-800/70 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 active:scale-95"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
