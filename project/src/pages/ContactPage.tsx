import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(
        'https://cloud.automation-ai-aaa.com/webhook/448e9512-b83c-454a-8c8e-72cfc69dc615-website-form-submision',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', useCase: '' });
      } else {
        setError('There was an issue submitting your request. Please try again.');
      }
    } catch (err) {
      setError('There was an issue submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact / Book Demo</h1>
            <p className="text-xl text-[#9AA4B2]">
              Let's discuss how automation can apply to your operations.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-[#161B22] p-8 rounded-lg mb-8 hover:shadow-lg hover:shadow-[#4F7DF3]/10 transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-[#E6E8EB]">What Happens Next</h2>
            <p className="text-[#9AA4B2] leading-relaxed">
              We review your workflows, discuss automation potential, and determine whether automation makes sense for
              your operations. There is no obligation.
            </p>
          </AnimatedSection>

          {isSubmitted ? (
            <AnimatedSection className="bg-[#161B22] border border-[#2BD4A4] p-8 rounded-lg animate-fadeInScale">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="text-[#2BD4A4] animate-glow" size={32} />
                <h3 className="text-2xl font-bold text-[#E6E8EB]">Request Received</h3>
              </div>
              <p className="text-[#9AA4B2]">We will review your request and personally contact you via email.</p>
            </AnimatedSection>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#161B22] p-8 rounded-lg space-y-6 animate-slideUp">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E6E8EB] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#0E1116] border border-[#232A35] rounded text-[#E6E8EB] focus:outline-none focus:border-[#4F7DF3] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E6E8EB] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#0E1116] border border-[#232A35] rounded text-[#E6E8EB] focus:outline-none focus:border-[#4F7DF3] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#E6E8EB] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#0E1116] border border-[#232A35] rounded text-[#E6E8EB] focus:outline-none focus:border-[#4F7DF3] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-[#E6E8EB] mb-2">
                  Use Case
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-[#0E1116] border border-[#232A35] rounded text-[#E6E8EB] focus:outline-none focus:border-[#4F7DF3] transition-colors resize-none"
                  placeholder="Describe your workflow challenges and automation goals..."
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-[#4F7DF3] text-white font-medium rounded hover:bg-[#3D6AE0] hover:shadow-lg hover:shadow-[#4F7DF3]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                {isSubmitting ? 'Submitting...' : 'Book Demo'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
