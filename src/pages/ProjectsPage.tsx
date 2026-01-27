import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Clock, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Automotive Assembly Line Automation',
    client: 'Major European OEM',
    industry: 'Automotive',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    description: 'Complete automation of body-in-white assembly with 50+ robotic cells.',
    results: [
      { metric: '35%', label: 'Cycle Time Reduction' },
      { metric: '99.8%', label: 'Quality Rate' },
      { metric: '$2.5M', label: 'Annual Savings' },
    ],
    technologies: ['ABB Robots', 'Siemens PLC', 'Vision Systems'],
    featured: true,
  },
  {
    id: 2,
    title: 'Pharmaceutical Packaging Line',
    client: 'Global Pharma Leader',
    industry: 'Pharmaceutical',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=500&fit=crop',
    description: '21 CFR Part 11 compliant packaging automation with full traceability.',
    results: [
      { metric: '100%', label: 'FDA Compliance' },
      { metric: '50%', label: 'Throughput Increase' },
      { metric: '0', label: 'Recall Events' },
    ],
    technologies: ['Rockwell PLCs', 'Serialization', 'SCADA'],
    featured: true,
  },
  {
    id: 3,
    title: 'Food Processing Automation',
    client: 'Leading Beverage Company',
    industry: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop',
    description: 'High-speed bottling line with integrated quality inspection.',
    results: [
      { metric: '400', label: 'Bottles/Minute' },
      { metric: '30%', label: 'Waste Reduction' },
      { metric: '24/7', label: 'Operations' },
    ],
    technologies: ['FANUC Robots', 'Vision AI', 'MES Integration'],
    featured: false,
  },
  {
    id: 4,
    title: 'Electronics SMT Line',
    client: 'Consumer Electronics Manufacturer',
    industry: 'Electronics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    description: 'High-precision SMT assembly with automated optical inspection.',
    results: [
      { metric: '50K', label: 'Placements/Hour' },
      { metric: '99.98%', label: 'First Pass Yield' },
      { metric: '60%', label: 'Test Time Reduction' },
    ],
    technologies: ['Fuji NXT', 'AOI Systems', 'SPC Analytics'],
    featured: false,
  },
  {
    id: 5,
    title: 'Oil Refinery Control System',
    client: 'Energy Conglomerate',
    industry: 'Oil & Gas',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=500&fit=crop',
    description: 'Distributed control system upgrade with remote monitoring capabilities.',
    results: [
      { metric: '99.99%', label: 'Uptime' },
      { metric: 'SIL3', label: 'Safety Rating' },
      { metric: '80%', label: 'Remote Operations' },
    ],
    technologies: ['DCS', 'Safety PLCs', 'Industrial IoT'],
    featured: true,
  },
  {
    id: 6,
    title: 'Aerospace Composite Manufacturing',
    client: 'Aircraft Component Supplier',
    industry: 'Aerospace',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=500&fit=crop',
    description: 'Robotic composite layup system with precision fiber placement.',
    results: [
      { metric: '40%', label: 'Time Savings' },
      { metric: 'AS9100', label: 'Certified' },
      { metric: '100%', label: 'Traceability' },
    ],
    technologies: ['KUKA Robots', '5-Axis CNC', 'NDT Integration'],
    featured: false,
  },
];

const filters = ['All', 'Automotive', 'Pharmaceutical', 'Food & Beverage', 'Electronics', 'Oil & Gas', 'Aerospace'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.industry === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Projects & Experience"
          title="Proven Results Across Industries"
          subtitle="Explore our portfolio of successful automation projects delivering measurable business impact."
        />

        {/* Filter Tabs */}
        <section className="py-8 border-b border-border bg-background sticky top-16 md:top-20 z-40">
          <div className="section-container">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all font-medium ${
                    activeFilter === filter
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={projectsRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <GlassCard key={project.id} delay={index * 0.05} className="group">
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                    {project.industry}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center p-2 bg-muted/50 rounded-lg">
                        <p className="text-lg font-bold text-primary">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '$100M+', label: 'Client Savings Generated' },
                { value: '98%', label: 'On-Time Delivery' },
                { value: '15+', label: 'Industries Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding fluid-section">
          <div className="section-container relative z-10">
            <GlassCard hover={false} className="text-center py-12 px-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can deliver similar results for your organization.
              </p>
              <a href="/contact" className="glass-button text-white inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
