function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Example Automations', href: '#examples' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing Model', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#161B22] border-t border-[#232A35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Coreflow Automation</h3>
            <p className="text-[#9AA4B2] text-sm">
              Custom AI automation systems for real businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#E6E8EB]">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9AA4B2] hover:text-[#E6E8EB] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#E6E8EB]">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-[#9AA4B2] hover:text-[#E6E8EB] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-sm text-[#9AA4B2] hover:text-[#E6E8EB] transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#232A35] text-center">
          <p className="text-sm text-[#9AA4B2]">
            © {new Date().getFullYear()} Coreflow Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
