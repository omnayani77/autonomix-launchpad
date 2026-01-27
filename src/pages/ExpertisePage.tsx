import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Cog, Settings, Zap, Shield, BarChart3, Workflow, Cloud } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Cpu,
    title: 'PLC Programming',
    description: 'Expert programming across all major PLC platforms including Siemens, Allen-Bradley, and Mitsubishi.',
    skills: ['Ladder Logic', 'Structured Text', 'Function Block', 'Sequential Function Charts'],
  },
  {
    icon: Cog,
    title: 'Robotics Integration',
    description: 'Seamless integration of industrial robots from leading manufacturers for assembly, welding, and material handling.',
    skills: ['FANUC', 'ABB', 'KUKA', 'Universal Robots'],
  },
  {
    icon: Settings,
    title: 'SCADA Systems',
    description: 'Design and implementation of comprehensive supervisory control and data acquisition systems.',
    skills: ['Wonderware', 'Ignition', 'WinCC', 'FactoryTalk'],
  },
  {
    icon: Zap,
    title: 'Motion Control',
    description: 'Precision motion control solutions for high-speed manufacturing and complex multi-axis applications.',
    skills: ['Servo Systems', 'VFD Programming', 'CNC Integration', 'Coordinated Motion'],
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description: 'Implementation of safety-rated control systems compliant with international standards.',
    skills: ['ISO 13849', 'IEC 62443', 'Safety PLCs', 'Light Curtains'],
  },
  {
    icon: BarChart3,
    title: 'Industrial Analytics',
    description: 'Data-driven insights through advanced analytics, machine learning, and predictive maintenance.',
    skills: ['OEE Tracking', 'Predictive Maintenance', 'Quality Analytics', 'Energy Monitoring'],
  },
  {
    icon: Workflow,
    title: 'MES Integration',
    description: 'Manufacturing Execution Systems that bridge the gap between shop floor and enterprise systems.',
    skills: ['Recipe Management', 'Traceability', 'Scheduling', 'ERP Integration'],
  },
  {
    icon: Cloud,
    title: 'IIoT Solutions',
    description: 'Industrial Internet of Things implementations connecting machines, data, and people.',
    skills: ['Edge Computing', 'Cloud Connectivity', 'Real-time Dashboards', 'Remote Monitoring'],
  },
];

const certifications = [
  { name: 'Siemens Solution Partner', logo: '🔧' },
  { name: 'Rockwell Automation Partner', logo: '⚙️' },
  { name: 'ISO 9001:2015', logo: '📋' },
  { name: 'TÜV Certified', logo: '✅' },
  { name: 'FANUC Integrator', logo: '🤖' },
  { name: 'AWS Industrial', logo: '☁️' },
];

const ExpertisePage = () => {
  const expertiseRef = useRef(null);
  const certRef = useRef(null);
  const expertiseInView = useInView(expertiseRef, { once: true, margin: '-100px' });
  const certInView = useInView(certRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Our Expertise"
          title="Technical Excellence Across All Domains"
          subtitle="Deep expertise in industrial automation technologies, backed by decades of hands-on experience and continuous innovation."
        />

        {/* Expertise Grid */}
        <section ref={expertiseRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Core Competencies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Excel At
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team brings specialized knowledge across the full spectrum of industrial automation technologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <GlassCard key={area.title} delay={index * 0.05} className="group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-primary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Technology Partners</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We work with industry-leading technology providers to deliver best-in-class solutions.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['Siemens', 'Rockwell', 'ABB', 'FANUC', 'Schneider', 'Mitsubishi', 'Beckhoff', 'Omron'].map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <span className="text-white font-semibold">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section ref={certRef} className="section-padding fluid-section">
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
                Certified Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certifications reflect our commitment to quality and continuous improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <GlassCard key={cert.name} delay={index * 0.1} className="text-center">
                  <span className="text-4xl mb-3 block">{cert.logo}</span>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
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

export default ExpertisePage;
