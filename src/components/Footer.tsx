import { Cog, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Process Automation', href: '/solutions/process-automation' },
    { label: 'Discrete Automation', href: '/solutions/discrete-automation' },
    { label: 'System Integration', href: '/solutions/system-integration' },
    { label: 'Support & Maintenance', href: '/solutions/support-maintenance' },
  ],
  resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Whitepapers', href: '/resources/whitepapers' },
    { label: 'Webinars', href: '/resources/webinars' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '/partners' },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background tracking-tight">
                AUTONOMIX
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Leading industrial automation solutions provider, helping manufacturers across India optimize operations and maximize profits.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-background mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-background/10">
              <p className="text-sm text-background/70">
                <strong className="text-background">Address:</strong>
                <br />
                Tower B, Sector 62
                <br />
                Noida, UP 201301
              </p>
              <p className="text-sm text-background/70 mt-3">
                <strong className="text-background">Phone:</strong>
                <br />
                +91 1800-123-4567
              </p>
              <p className="text-sm text-background/70 mt-3">
                <strong className="text-background">Email:</strong>
                <br />
                solutions@autonomix.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Autonomix Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-background/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-background/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-sm text-background/60 hover:text-secondary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
