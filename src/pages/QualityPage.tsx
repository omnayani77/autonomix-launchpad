import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle, Award, FileCheck, AlertTriangle, ClipboardCheck } from 'lucide-react';

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System certification ensuring consistent delivery of products and services.',
    icon: Award,
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management System certification for sustainable practices.',
    icon: Shield,
  },
  {
    name: 'ISO 45001:2018',
    description: 'Occupational Health and Safety Management certification.',
    icon: CheckCircle,
  },
  {
    name: 'TÜV Functional Safety',
    description: 'Certified expertise in safety-related control systems per IEC 61508/62443.',
    icon: Shield,
  },
];

const complianceAreas = [
  {
    title: 'Pharmaceutical (GMP/FDA)',
    standards: ['21 CFR Part 11', 'GAMP 5', 'EU Annex 11', 'cGMP'],
    description: 'Full compliance with pharmaceutical manufacturing regulations.',
  },
  {
    title: 'Automotive (IATF)',
    standards: ['IATF 16949', 'VDA 6.3', 'PPAP', 'FMEA'],
    description: 'Meeting stringent automotive quality requirements.',
  },
  {
    title: 'Food & Beverage',
    standards: ['FDA FSMA', 'HACCP', 'BRC', 'SQF'],
    description: 'Food safety and hygiene compliance for processing automation.',
  },
  {
    title: 'Industrial Safety',
    standards: ['IEC 62443', 'ISO 13849', 'IEC 61508', 'NFPA 79'],
    description: 'Functional safety and cybersecurity for industrial control systems.',
  },
];

const qualityPractices = [
  {
    icon: FileCheck,
    title: 'Design Review Process',
    description: 'Multi-stage design reviews ensure solutions meet specifications before development begins.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Acceptance Testing',
    description: 'Rigorous FAT protocols verify system functionality in controlled environments.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk-Based Validation',
    description: 'Systematic risk assessment drives validation activities and documentation.',
  },
  {
    icon: CheckCircle,
    title: 'Continuous Improvement',
    description: 'Post-project reviews and KPI tracking drive ongoing quality enhancement.',
  },
];

const QualityPage = () => {
  const certRef = useRef(null);
  const complianceRef = useRef(null);
  const practicesRef = useRef(null);
  const certInView = useInView(certRef, { once: true, margin: '-100px' });
  const complianceInView = useInView(complianceRef, { once: true, margin: '-100px' });
  const practicesInView = useInView(practicesRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Quality & Compliance"
          title="Excellence Through Rigorous Standards"
          subtitle="Our commitment to quality is backed by international certifications and industry-specific compliance expertise."
        />

        {/* Certifications */}
        <section ref={certRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Internationally Certified
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to the highest quality standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <GlassCard key={cert.name} delay={index * 0.1}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <cert.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section ref={complianceRef} className="section-padding bg-primary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={complianceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Compliance
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Deep expertise in regulatory requirements across multiple industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-white/70 mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.standards.map((standard) => (
                      <span
                        key={standard}
                        className="px-3 py-1 text-sm font-medium bg-white/20 text-white rounded-full"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Practices */}
        <section ref={practicesRef} className="section-padding fluid-section">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={practicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Our Practices
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Built Into Every Step
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematic quality practices ensure excellence from design to deployment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityPractices.map((practice, index) => (
                <GlassCard key={practice.title} delay={index * 0.1}>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <practice.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground">{practice.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Commitment */}
        <section className="section-padding relative">
          <LiquidBackground variant="accent" />
          <div className="section-container relative z-10">
            <GlassCard hover={false} className="py-12 px-8 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Quality Promise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Every project we deliver undergoes rigorous quality assurance processes. From initial design reviews to final validation testing, we ensure your automation system meets the highest standards of reliability, safety, and performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">First-Time Quality</p>
                </div>
                <div className="px-6 py-3 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Documentation Compliance</p>
                </div>
                <div className="px-6 py-3 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">Zero</p>
                  <p className="text-sm text-muted-foreground">Safety Incidents</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QualityPage;
