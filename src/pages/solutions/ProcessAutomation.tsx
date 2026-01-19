import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Cog, Factory, Settings, Gauge } from 'lucide-react';

const benefits = [
  'Reduce operational costs by up to 40%',
  'Improve production quality and consistency',
  '24/7 continuous monitoring and control',
  'Real-time data analytics and reporting',
  'Seamless integration with existing systems',
  'Scalable solutions that grow with you',
];

const technologies = [
  'PLC/DCS Systems',
  'SCADA Integration',
  'Industrial IoT',
  'Robotics',
  'Vision Systems',
  'HMI/MMI',
];

const industries = [
  { name: 'Oil & Gas', icon: '🛢️' },
  { name: 'Pharmaceutical', icon: '💊' },
  { name: 'Chemicals', icon: '⚗️' },
  { name: 'Power Generation', icon: '⚡' },
  { name: 'Water Treatment', icon: '💧' },
  { name: 'Food Processing', icon: '🏭' },
];

const ProcessAutomationPage = () => {
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
                  <Cog className="w-4 h-4 inline-block mr-1" />
                  Solutions
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
                  Process Automation
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Optimize continuous production workflows in oil & gas, pharmaceuticals, and chemicals with our advanced process automation solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="group">
                    Get a Free Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Download Brochure
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
                  <Factory className="w-40 h-40 text-primary-foreground/40" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Process Automation */}
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
                  What is Process Automation?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Process automation involves the use of control systems (such as PLCs, DCS, and SCADA) to operate industrial processes with minimal human intervention. It's essential for industries with continuous production workflows.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our solutions help you monitor, control, and optimize complex processes in real-time, ensuring consistent quality, safety, and efficiency across your operations.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Gauge className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Real-Time Monitoring</div>
                    <div className="text-sm text-muted-foreground">24/7 process visibility</div>
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
                  <Settings className="w-32 h-32 text-primary/20 mx-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Process Automation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your operations with measurable improvements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
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
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized solutions for continuous process industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="industry-badge"
                >
                  <span className="text-3xl mb-2">{industry.icon}</span>
                  <span className="text-sm font-medium text-foreground text-center">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
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
                Technologies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technologies We Use
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
                Ready to Optimize Your Processes?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a free assessment of your current processes and discover how automation can transform your operations
              </p>
              <Button variant="hero" size="xl" className="group">
                Schedule Free Consultation
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

export default ProcessAutomationPage;
