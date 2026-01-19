import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  {
    label: 'Solutions',
    hasDropdown: true,
    items: [
      { label: 'Process Automation', href: '/solutions/process-automation' },
      { label: 'Discrete Automation', href: '/solutions/discrete-automation' },
      { label: 'System Integration', href: '/solutions/system-integration' },
      { label: 'Support & Maintenance', href: '/solutions/support-maintenance' },
    ],
  },
  {
    label: 'Industries',
    hasDropdown: true,
    items: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Pharmaceutical', href: '/industries/pharmaceutical' },
      { label: 'Food & Beverage', href: '/industries/food-beverage' },
      { label: 'Electronics', href: '/industries/electronics' },
      { label: 'Oil & Gas', href: '/industries/oil-gas' },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'Resources',
    hasDropdown: true,
    items: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Whitepapers', href: '/resources/whitepapers' },
      { label: 'Webinars', href: '/resources/webinars' },
    ],
  },
  { label: 'About Us', href: '/about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`nav-sticky transition-all duration-300 ${
        isScrolled ? 'shadow-md bg-background/98' : 'bg-background'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <Cog className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">
              AUTONOMIX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors link-underline"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-xl border border-border/50 overflow-hidden z-50"
                    >
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-foreground/60 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button variant="cta" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-background shadow-2xl z-50 lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-bold text-primary">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>
              <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href || '#'}
                      className="block px-4 py-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.items && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border mt-4">
                  <Button variant="cta" className="w-full">
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
