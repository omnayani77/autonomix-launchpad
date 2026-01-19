import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, Target, ArrowRight, Building2 } from 'lucide-react';

const milestones = [
  { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform Indian manufacturing' },
  { year: '2012', title: 'First Major Project', description: 'Delivered automation for a leading automotive manufacturer' },
  { year: '2016', title: 'ISO 9001 Certified', description: 'Achieved international quality management certification' },
  { year: '2019', title: '300+ Projects', description: 'Crossed 300 successful project implementations' },
  { year: '2022', title: 'Pan-India Presence', description: 'Expanded operations to all major industrial hubs' },
  { year: '2024', title: '500+ Projects', description: 'Continuing to grow with industry-leading solutions' },
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge automation solutions.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Every solution is tailored to meet our clients\' unique challenges and goals.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in quality, safety, and performance.',
  },
  {
    icon: CheckCircle,
    title: 'Integrity',
    description: 'Honest partnerships built on trust, transparency, and accountability.',
  },
];

const leadership = [
  { name: 'Rajesh Kumar', role: 'CEO & Founder', experience: '25+ years in industrial automation' },
  { name: 'Priya Sharma', role: 'CTO', experience: '18+ years in systems engineering' },
  { name: 'Amit Patel', role: 'COO', experience: '20+ years in operations management' },
  { name: 'Sunita Reddy', role: 'VP Engineering', experience: '15+ years in automation design' },
];

const AboutPage = () => {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-foreground/90 bg-primary-foreground/10 rounded-full">
                About Autonomix
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
                Transforming Manufacturing Across India
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Since 2008, we've been at the forefront of industrial automation, helping manufacturers optimize operations, reduce costs, and achieve sustainable growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
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
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Vision to Industry Leadership
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Autonomix was founded with a simple yet ambitious vision: to bring world-class automation technology to Indian manufacturing. What started as a small team of passionate engineers has grown into one of India's most trusted automation partners.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Today, we serve over 500 clients across automotive, pharmaceutical, food & beverage, electronics, and more. Our solutions have helped manufacturers save over ₹2000 crores in operational costs while achieving unprecedented efficiency gains.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="text-3xl font-bold text-secondary">₹2000Cr+</div>
                    <div className="text-sm text-muted-foreground">Client Savings</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-muted rounded-2xl p-8 h-full flex items-center justify-center">
                  <Building2 className="w-48 h-48 text-primary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Key Milestones
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="bg-card p-6 rounded-xl border border-border inline-block">
                        <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                        <h3 className="font-bold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-4 h-4 rounded-full bg-primary relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide every decision we make and every solution we deliver
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
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
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders driving innovation in industrial automation
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center border border-border"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-secondary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{member.experience}</p>
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
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of manufacturers who trust Autonomix for their automation needs
              </p>
              <Button variant="hero" size="xl" className="group">
                Get Started Today
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

export default AboutPage;
