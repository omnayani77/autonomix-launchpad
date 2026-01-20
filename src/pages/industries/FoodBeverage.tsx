import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, UtensilsCrossed, Shield, Thermometer, Package, Droplets, Clock, TrendingUp, Award } from 'lucide-react';

const challenges = [
  {
    title: 'Food Safety Standards',
    description: 'Meeting FSSC 22000, HACCP, and global food safety regulations',
    icon: Shield,
  },
  {
    title: 'Temperature Control',
    description: 'Maintaining critical temperature zones throughout processing',
    icon: Thermometer,
  },
  {
    title: 'Hygiene & Sanitation',
    description: 'CIP/SIP systems and hygienic equipment design requirements',
    icon: Droplets,
  },
  {
    title: 'Shelf Life & Freshness',
    description: 'Optimizing processes to maximize product quality and shelf life',
    icon: Package,
  },
];

const solutions = [
  'Hygienic automation systems (3-A, EHEDG)',
  'Automated CIP/SIP cleaning systems',
  'Vision-based quality inspection',
  'Robotic pick & place / palletizing',
  'Recipe & batch management',
  'Real-time traceability systems',
];

const caseStudies = [
  {
    title: 'Dairy Processing Plant',
    metrics: { waste: '-40%', efficiency: '+32%', timeline: '8 months' },
    description: 'Automated pasteurization and packaging line with full temperature traceability and CIP integration.',
  },
  {
    title: 'Beverage Bottling Line',
    metrics: { throughput: '+55%', downtime: '-70%', timeline: '5 months' },
    description: 'High-speed filling and packaging system with vision inspection achieving 99.9% fill accuracy.',
  },
  {
    title: 'Snack Food Production',
    metrics: { labor: '-45%', quality: '+28%', timeline: '6 months' },
    description: 'End-to-end automation from mixing to packaging with recipe management and real-time quality monitoring.',
  },
];

const technologies = [
  'Hygienic PLCs',
  'Vision Inspection',
  'Robotics (FANUC, ABB)',
  'CIP/SIP Systems',
  'MES/ERP Integration',
  'SCADA/Historian',
];

const certifications = [
  { name: 'FSSC 22000', description: 'Food Safety System' },
  { name: 'HACCP', description: 'Hazard Analysis' },
  { name: '3-A Sanitary', description: 'Hygienic Design' },
  { name: 'EHEDG', description: 'European Hygiene' },
];

const FoodBeveragePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-foreground/90 bg-primary-foreground/10 rounded-full">
                  <UtensilsCrossed className="w-4 h-4 inline-block mr-1" />
                  Industry
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
                  Food & Beverage Automation
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Hygienic, compliant automation solutions that ensure food safety while maximizing production efficiency and product quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="group">
                    Request Hygiene Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Download F&B Brochure
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="w-80 h-80 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                  <UtensilsCrossed className="w-40 h-40 text-primary-foreground/40" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Overview */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Fresh, Safe & Efficient Production
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The food and beverage industry faces unique challenges: strict hygiene requirements, temperature-sensitive processes, and the constant pressure to maintain freshness while scaling production.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Autonomix delivers automation solutions designed specifically for F&B environments. From hygienic robotics to automated CIP systems, we help you maintain the highest standards of food safety while optimizing your operations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">40%</div>
                      <div className="text-sm text-muted-foreground">Avg. Waste Reduction</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">35+</div>
                      <div className="text-sm text-muted-foreground">F&B Projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-muted rounded-2xl p-8">
                  <div className="text-8xl text-center mb-4">🍕</div>
                  <div className="text-center text-muted-foreground">Food & Beverage Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Challenges
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industry Challenges We Solve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Addressing the unique demands of food & beverage manufacturing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
                Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Autonomix Helps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hygienic automation solutions for food & beverage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{solution}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Food & Beverage Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from our F&B partnerships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated overflow-hidden"
                >
                  <div className="bg-secondary p-4">
                    <UtensilsCrossed className="w-8 h-8 text-secondary-foreground mb-2" />
                    <h3 className="font-bold text-secondary-foreground">{study.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent">{study.metrics.waste || study.metrics.throughput || study.metrics.labor}</div>
                        <div className="text-xs text-muted-foreground">Result</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-secondary">{study.metrics.efficiency || study.metrics.downtime || study.metrics.quality}</div>
                        <div className="text-xs text-muted-foreground">Impact</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">{study.metrics.timeline}</div>
                        <div className="text-xs text-muted-foreground">Timeline</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Technologies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hygienic Technology Stack
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 bg-card rounded-full border border-border font-medium text-foreground"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Food Safety Certifications
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border text-center"
                >
                  <Shield className="w-10 h-10 text-secondary mx-auto mb-3" />
                  <div className="font-bold text-foreground">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-hero-gradient">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Optimize Your F&B Production?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our food & beverage automation experts design a hygienic solution that meets your safety and efficiency goals
              </p>
              <Button variant="hero" size="xl" className="group">
                Schedule Facility Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FoodBeveragePage;
