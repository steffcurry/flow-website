import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <section className="relative py-10 sm:py-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Request an Automation Audit
            </h1>
            <p className="text-lg sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Get a clear assessment of your automation opportunities and operational
              bottlenecks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-sm border-2 border-emerald-500/30 rounded-2xl p-7 sm:p-8 md:p-12 shadow-xl shadow-emerald-500/10">
            {submitted ? (
              <div className="text-center py-10 sm:py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 mb-5 sm:mb-6 shadow-lg shadow-emerald-500/30">
                  <CheckCircle className="text-emerald-400" size={40} />
                </div>
                <h2 className="text-2xl sm:text-2xl font-bold text-slate-100 mb-4 sm:mb-4">
                  Request Received
                </h2>
                <p className="text-lg sm:text-lg text-slate-300">
                  We'll review your information and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base sm:text-base font-medium text-slate-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 sm:py-3.5 bg-slate-800/50 border-2 border-cyan-500/30 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-lg sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base sm:text-base font-medium text-slate-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 sm:py-3.5 bg-slate-800/50 border-2 border-cyan-500/30 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-lg sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-base sm:text-base font-medium text-slate-300 mb-2"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 sm:py-3.5 bg-slate-800/50 border-2 border-cyan-500/30 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-lg sm:text-base"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-base sm:text-base font-medium text-slate-300 mb-2"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-5 py-4 sm:py-3.5 bg-slate-800/50 border-2 border-cyan-500/30 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-lg sm:text-base"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base sm:text-base font-medium text-slate-300 mb-2"
                  >
                    Tell us about your workflows and automation needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 sm:py-3.5 bg-slate-800/50 border-2 border-cyan-500/30 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none text-lg sm:text-base leading-relaxed"
                    placeholder="Describe your current workflows, bottlenecks, and what you'd like to automate..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-7 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg sm:text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/30"
                >
                  <Send className="mr-2" size={22} />
                  Submit Request
                </button>

                <p className="text-sm sm:text-sm text-slate-400 text-center mt-4 sm:mt-4">
                  We'll review your request and respond within 1-2 business days.
                </p>
              </form>
            )}
          </div>

          <div className="mt-7 sm:mt-12 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 border-2 border-teal-500/30 rounded-xl p-6 sm:p-6 shadow-lg shadow-teal-500/10">
            <p className="text-base sm:text-base text-slate-300 leading-relaxed">
              <span className="font-semibold text-emerald-400">What happens next: </span>
              After reviewing your information, we'll schedule a call to discuss your
              workflows in detail, identify automation opportunities, and determine if
              our approach is a good fit for your operational goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
