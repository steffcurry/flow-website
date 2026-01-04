import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
}

function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Example Automations', href: '#examples' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing Model', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0E1116]/95 backdrop-blur-sm border-b border-[#232A35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-semibold text-[#E6E8EB]">
            Coreflow Automation
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  currentPage === link.href.slice(1)
                    ? 'text-[#4F7DF3]'
                    : 'text-[#9AA4B2] hover:text-[#E6E8EB]'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4F7DF3] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-[#4F7DF3] text-white text-sm font-medium rounded relative overflow-hidden group hover:shadow-lg hover:shadow-[#4F7DF3]/30 transition-all duration-300"
            >
              <span className="relative z-10">Book a Demo</span>
              <span className="absolute inset-0 bg-[#3D6AE0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#E6E8EB]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm transition-colors ${
                  currentPage === link.href.slice(1)
                    ? 'text-[#4F7DF3]'
                    : 'text-[#9AA4B2] hover:text-[#E6E8EB]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-4 py-2 bg-[#4F7DF3] text-white text-sm font-medium rounded text-center hover:bg-[#3D6AE0] transition-colors"
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
