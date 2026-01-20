import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Pill, Shield, FileCheck, Thermometer, Eye, Clock, TrendingUp, Award } from 'lucide-react';

const challenges = [
  {
    title: 'Regulatory Compliance',
    description: 'Meeting FDA 21 CFR Part 11, EU GMP, and other stringent regulatory requirements',
    icon: FileCheck,
  },
  {
    title: 'Batch Consistency',
    description: 'Ensuring every batch meets exact specifications with zero deviation',
    icon: Thermometer,
  },
  {
    title: 'Contamination Prevention',
    description: 'Maintaining cleanroom standards and preventing cross-contamination',
    icon: Shield,
  },
  {
    title: 'Full Traceability',
    description: 'Complete batch genealogy from raw materials to finished product',
    icon: Eye,
  },
];

const solutions = [
  'GMP-compliant automation systems',
  'Electronic Batch Records (EBR)',
  'Cleanroom-rated robotics',
  'Vision inspection & serialization',
  'Environmental monitoring systems',
  'PAT (Process Analytical Technology)',
];

const caseStudies = [
  {
    title: 'API Manufacturing Plant',
    metrics: { accuracy: '99.8%', recalls: '-65%', timeline: '12 months' },
    description: 'Implemented fully validated batch control system with 21 CFR Part 11 compliance, reducing documentation errors by 90%.',
  },
  {
    title: 'Sterile Fill-Finish Line',
    metrics: { yield: '+25%', contamination: '-95%', timeline: '8 months' },
    description: 'Deployed isolator-based filling system with integrated environmental monitoring achieving Grade A conditions.',
  },
  {
    title: 'Packaging & Serialization',
    metrics: { throughput: '+40%', compliance: '100%', timeline: '6 months' },
    description: 'Complete serialization solution meeting global track-and-trace requirements with real-time verification.',
  },
];

const technologies = [
  'Siemens SIMATIC',
  'Rockwell PharmaSuite',
  'Cleanroom Robotics',
  'Vision Inspection',
  'SCADA/Historian',
  'PAT Analyzers',
];

const certifications = [
  { name: '21 CFR Part 11', description: 'FDA Electronic Records' },
  { name: 'EU GMP Annex 11', description: 'Computerized Systems' },
  { name: 'GAMP 5', description: 'Software Validation' },
  { name: 'ISO 13485', description: 'Medical Devices QMS' },
];

const PharmaceuticalPage = () => {
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
                  <Pill className="w-4 h-4 inline-block mr-1" />
                  Industry
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
                  Pharmaceutical Automation
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Validated, compliant automation solutions that ensure patient safety while maximizing production efficiency and regulatory adherence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="group">
                    Request Compliance Review
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Download Validation Guide
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
                  <Pill className="w-40 h-40 text-primary-foreground/40" />
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
                  Precision & Compliance in Every Dose
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The pharmaceutical industry operates under the most stringent regulatory requirements in manufacturing. Every process must be validated, every record must be accurate, and every batch must be traceable.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Autonomix delivers automation solutions that are designed with compliance in mind from day one. Our systems meet FDA, EMA, and WHO guidelines while delivering the efficiency gains your operations need.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">99.8%</div>
                      <div className="text-sm text-muted-foreground">Batch Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">40+</div>
                      <div className="text-sm text-muted-foreground">Validated Systems</div>
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
                  <div className="text-8xl text-center mb-4">💊</div>
                  <div className="text-center text-muted-foreground">Pharmaceutical Excellence</div>
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
                Addressing the unique demands of pharmaceutical manufacturing
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
                Validated automation solutions for life sciences
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
                Pharmaceutical Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from our pharma partnerships
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
                  <div className="bg-accent p-4">
                    <Pill className="w-8 h-8 text-accent-foreground mb-2" />
                    <h3 className="font-bold text-accent-foreground">{study.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent">{study.metrics.accuracy || study.metrics.yield || study.metrics.throughput}</div>
                        <div className="text-xs text-muted-foreground">Result</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-secondary">{study.metrics.recalls || study.metrics.contamination || study.metrics.compliance}</div>
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
                Validated Technology Stack
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
                Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Regulatory Compliance
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
                  <FileCheck className="w-10 h-10 text-accent mx-auto mb-3" />
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
                Ready for Compliant Automation?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our validation experts review your requirements and design a system that meets all regulatory standards
              </p>
              <Button variant="hero" size="xl" className="group">
                Schedule Compliance Review
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

export default PharmaceuticalPage;
