import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Car, Cog, Shield, Zap, Target, Clock, TrendingUp, Award } from 'lucide-react';

const challenges = [
  {
    title: 'Complex Assembly Lines',
    description: 'Managing multi-stage assembly with precision timing and quality control',
    icon: Cog,
  },
  {
    title: 'Just-in-Time Production',
    description: 'Meeting strict delivery schedules while minimizing inventory costs',
    icon: Clock,
  },
  {
    title: 'Quality Compliance',
    description: 'Adhering to stringent automotive quality standards (IATF 16949)',
    icon: Shield,
  },
  {
    title: 'Production Flexibility',
    description: 'Adapting to varied models and customizations on the same line',
    icon: Target,
  },
];

const solutions = [
  'Robotic welding and assembly cells',
  'Vision-guided quality inspection systems',
  'Automated material handling & AGVs',
  'Real-time production monitoring (MES)',
  'Predictive maintenance systems',
  'Flexible manufacturing cells',
];

const caseStudies = [
  {
    title: 'Major OEM Body Shop',
    metrics: { efficiency: '35%', savings: '₹2.5 Cr', timeline: '6 months' },
    description: 'Implemented robotic welding cells reducing defect rates by 80% and increasing throughput by 35%.',
  },
  {
    title: 'Tier-1 Supplier Line',
    metrics: { efficiency: '42%', savings: '₹1.8 Cr', timeline: '4 months' },
    description: 'Automated component assembly line with vision inspection achieving 99.8% quality accuracy.',
  },
  {
    title: 'EV Battery Assembly',
    metrics: { efficiency: '50%', savings: '₹3.2 Cr', timeline: '8 months' },
    description: 'Designed and deployed complete battery pack assembly line with full traceability.',
  },
];

const technologies = [
  'ABB & FANUC Robotics',
  'Siemens PLC/HMI',
  'Cognex Vision Systems',
  'RFID Traceability',
  'MES Integration',
  'Collaborative Robots',
];

const certifications = [
  { name: 'IATF 16949', description: 'Automotive Quality Management' },
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 14001', description: 'Environmental Management' },
  { name: 'ISO 45001', description: 'Occupational Health & Safety' },
];

const AutomotivePage = () => {
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
                  <Car className="w-4 h-4 inline-block mr-1" />
                  Industry
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
                  Automotive Automation
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Drive manufacturing excellence with advanced automation solutions designed for the automotive industry's demanding requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="group">
                    Schedule Plant Visit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Download Case Study
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
                  <Car className="w-40 h-40 text-primary-foreground/40" />
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
                  Transforming Automotive Manufacturing
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The automotive industry demands precision, speed, and flexibility like no other. From body-in-white to final assembly, every stage requires automation solutions that can handle complex processes while maintaining the highest quality standards.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Autonomix brings decades of experience in automotive automation, partnering with OEMs and Tier-1 suppliers to deliver solutions that meet IATF 16949 requirements while maximizing productivity.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">35%</div>
                      <div className="text-sm text-muted-foreground">Avg. Efficiency Gain</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">Automotive Projects</div>
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
                  <div className="text-8xl text-center mb-4">🚗</div>
                  <div className="text-center text-muted-foreground">Automotive Excellence</div>
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
                Addressing the unique demands of automotive manufacturing
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
                Comprehensive automation solutions tailored for automotive
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
                Automotive Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from our automotive partnerships
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
                  <div className="bg-primary p-4">
                    <Car className="w-8 h-8 text-primary-foreground mb-2" />
                    <h3 className="font-bold text-primary-foreground">{study.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent">{study.metrics.efficiency}</div>
                        <div className="text-xs text-muted-foreground">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-secondary">{study.metrics.savings}</div>
                        <div className="text-xs text-muted-foreground">Savings</div>
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
                Technologies We Deploy
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
                Industry Certifications
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
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
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
                Ready to Accelerate Your Production?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our automotive automation experts assess your facility and design a solution that drives results
              </p>
              <Button variant="hero" size="xl" className="group">
                Schedule Plant Assessment
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

export default AutomotivePage;
