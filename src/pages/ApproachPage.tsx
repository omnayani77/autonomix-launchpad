import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We begin by deeply understanding your current processes, challenges, and goals through site visits, stakeholder interviews, and data analysis.',
    deliverables: ['Process Assessment Report', 'Gap Analysis', 'Opportunity Mapping'],
    duration: '1-2 Weeks',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Solution Design',
    description: 'Our engineers craft a tailored automation strategy, selecting optimal technologies and designing system architecture.',
    deliverables: ['Technical Specifications', 'System Architecture', 'ROI Projections'],
    duration: '2-4 Weeks',
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'We build and program your automation system with rigorous quality controls at every stage.',
    deliverables: ['PLC/HMI Programs', 'Control Panels', 'Integration Code'],
    duration: '4-12 Weeks',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Testing & Validation',
    description: 'Comprehensive FAT and SAT testing ensures every component meets specifications before deployment.',
    deliverables: ['Test Protocols', 'Validation Reports', 'Compliance Documentation'],
    duration: '2-4 Weeks',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deployment',
    description: 'Our team handles installation, commissioning, and operator training with minimal disruption to your operations.',
    deliverables: ['Installation', 'Commissioning', 'Training Programs'],
    duration: '1-4 Weeks',
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'We provide continuous support, monitoring, and optimization to ensure long-term success.',
    deliverables: ['24/7 Support', 'Preventive Maintenance', 'Performance Optimization'],
    duration: 'Continuous',
  },
];

const methodologies = [
  {
    title: 'Agile Project Management',
    description: 'Iterative development with regular demos and feedback loops ensures we stay aligned with your needs.',
  },
  {
    title: 'Lean Manufacturing Principles',
    description: 'We apply lean thinking to eliminate waste and maximize value in every automation solution.',
  },
  {
    title: 'Risk-Based Approach',
    description: 'Systematic risk assessment and mitigation strategies protect your investment and timeline.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Post-deployment monitoring and optimization ensure your system evolves with your needs.',
  },
];

const ApproachPage = () => {
  const processRef = useRef(null);
  const methodRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const methodInView = useInView(methodRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Our Approach"
          title="A Proven Methodology for Success"
          subtitle="Our structured approach ensures consistent, high-quality outcomes while remaining flexible to your unique requirements."
        />

        {/* Process Steps */}
        <section ref={processRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Concept to Reality
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic, transparent process that delivers predictable results.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <GlassCard hover={false}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              <step.icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">{step.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {step.deliverables.map((deliverable) => (
                                <span
                                  key={deliverable}
                                  className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                            
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Duration:</span> {step.duration}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </div>

                    {/* Center Node */}
                    <div className="hidden lg:flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg glow-ring" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodologies */}
        <section ref={methodRef} className="section-padding bg-primary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={methodInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Methodologies
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Industry-proven frameworks adapted to automation excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-white/70 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding fluid-section">
          <div className="section-container relative z-10">
            <GlassCard hover={false} className="text-center py-12 px-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our proven approach can transform your operations.
              </p>
              <a href="/contact" className="glass-button text-white inline-flex items-center gap-2">
                Schedule a Consultation
              </a>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApproachPage;
