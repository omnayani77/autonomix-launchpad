import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Shield, Award } from 'lucide-react';

const industries = [
  {
    id: 'automotive',
    name: 'Automotive',
    emoji: '🚗',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop',
    description: 'High-precision automation for assembly lines, body shops, and paint systems.',
    stats: [
      { value: '35%', label: 'Cycle Time Reduction' },
      { value: '99.9%', label: 'Quality Rate' },
      { value: '40%', label: 'Labor Cost Savings' },
    ],
    caseStudy: {
      client: 'Major OEM Manufacturer',
      result: 'Reduced defect rate by 60% with vision-guided robotics',
    },
    href: '/industries/automotive',
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    emoji: '💊',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=500&fit=crop',
    description: 'GMP-compliant automation for drug manufacturing, packaging, and quality control.',
    stats: [
      { value: '100%', label: 'FDA Compliance' },
      { value: '50%', label: 'Batch Time Reduction' },
      { value: '0', label: 'Contamination Events' },
    ],
    caseStudy: {
      client: 'Leading Pharma Company',
      result: 'Achieved 21 CFR Part 11 compliance with full traceability',
    },
    href: '/industries/pharmaceutical',
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    emoji: '🍕',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop',
    description: 'Hygienic automation solutions for processing, packaging, and quality assurance.',
    stats: [
      { value: '45%', label: 'Throughput Increase' },
      { value: '30%', label: 'Waste Reduction' },
      { value: '24/7', label: 'Production Capability' },
    ],
    caseStudy: {
      client: 'Global Beverage Brand',
      result: 'Increased line speed by 200 bottles/min with zero spillage',
    },
    href: '/industries/food-beverage',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    emoji: '⚡',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    description: 'High-speed precision automation for PCB assembly, testing, and packaging.',
    stats: [
      { value: '0.1mm', label: 'Placement Accuracy' },
      { value: '99.98%', label: 'First Pass Yield' },
      { value: '60%', label: 'Test Time Reduction' },
    ],
    caseStudy: {
      client: 'Consumer Electronics Manufacturer',
      result: 'Achieved 50,000 placements/hour with AOI integration',
    },
    href: '/industries/electronics',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    emoji: '🛢️',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=500&fit=crop',
    description: 'Hazardous environment automation for upstream, midstream, and downstream operations.',
    stats: [
      { value: '99.99%', label: 'Uptime' },
      { value: '70%', label: 'Manual Intervention Reduction' },
      { value: 'SIL3', label: 'Safety Rating' },
    ],
    caseStudy: {
      client: 'Energy Conglomerate',
      result: 'Implemented remote monitoring reducing site visits by 80%',
    },
    href: '/industries/oil-gas',
  },
  {
    id: 'aerospace',
    name: 'Aerospace',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=500&fit=crop',
    description: 'High-precision automation for aerospace manufacturing and MRO operations.',
    stats: [
      { value: 'AS9100', label: 'Certified' },
      { value: '5-axis', label: 'CNC Integration' },
      { value: '100%', label: 'Traceability' },
    ],
    caseStudy: {
      client: 'Aircraft Component Manufacturer',
      result: 'Reduced composite layup time by 40% with robotic automation',
    },
    href: '/industries/aerospace',
  },
];

const IndustriesShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const showcaseRef = useRef(null);
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Industries We Serve"
          title="Deep Expertise Across Sectors"
          subtitle="Industry-specific automation solutions backed by decades of specialized experience and proven results."
        />

        {/* Industry Selector */}
        <section className="py-8 border-b border-border bg-background sticky top-16 md:top-20 z-40">
          <div className="section-container">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeIndustry.id === industry.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <span>{industry.emoji}</span>
                  <span className="font-medium">{industry.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Industry Showcase */}
        <section ref={showcaseRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    className="w-full h-80 lg:h-[500px] object-cover"
                  />
                </div>
                
                {/* Case Study Card */}
                <div className="absolute -bottom-6 -right-6 lg:right-6 glass-card p-6 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Case Study</span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">{activeIndustry.caseStudy.client}</p>
                  <p className="text-sm text-muted-foreground">{activeIndustry.caseStudy.result}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{activeIndustry.emoji}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {activeIndustry.name}
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {activeIndustry.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeIndustry.stats.map((stat) => (
                    <GlassCard key={stat.label} hover={false} className="text-center p-4">
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </GlassCard>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">Proven ROI with measurable results</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">Rapid deployment with minimal downtime</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">Full compliance with industry standards</p>
                  </div>
                </div>

                <Button asChild variant="cta" size="lg" className="self-start">
                  <a href={activeIndustry.href}>
                    Explore {activeIndustry.name} Solutions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Industries Grid */}
        <section className="section-padding fluid-section">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                All Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Industry
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <GlassCard key={industry.id} delay={index * 0.05}>
                  <a href={industry.href} className="block">
                    <div className="h-48 rounded-xl overflow-hidden mb-4">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{industry.emoji}</span>
                      <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </a>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesShowcase;
