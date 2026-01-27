import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We push boundaries with cutting-edge automation solutions that redefine industry standards.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Open communication and honest partnerships form the foundation of all our relationships.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our priority. We tailor every solution to your specific needs.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver nothing less than exceptional quality in every project we undertake.',
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '15+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const leadership = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Amit Patel',
    role: 'VP Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Sunita Reddy',
    role: 'VP Operations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
];

const AboutPage = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="About Autonomix"
          title="Engineering the Future of Manufacturing"
          subtitle="For over 25 years, we've been at the forefront of industrial automation, helping manufacturers worldwide achieve operational excellence."
        />

        {/* Story Section */}
        <section ref={storyRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Vision to Global Impact
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1998, Autonomix began with a simple mission: to make world-class automation accessible to manufacturers of all sizes. What started as a small team of passionate engineers has grown into a global leader in industrial automation.
                  </p>
                  <p>
                    Today, we serve clients across 15+ countries, delivering solutions that reduce costs, improve quality, and accelerate production. Our commitment to innovation has earned us recognition as a trusted partner for Fortune 500 companies and growing enterprises alike.
                  </p>
                  <p>
                    We believe that automation isn't just about technology—it's about empowering people to do their best work while machines handle the rest.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="organic-shape overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                    alt="Automation technology"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-6">
                  <div className="flex items-center gap-4">
                    <Globe className="w-10 h-10 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">15+</p>
                      <p className="text-sm text-muted-foreground">Countries Worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

        {/* Values Section */}
        <section ref={valuesRef} className="section-padding fluid-section">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us Forward
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values shape every decision we make and every solution we deliver.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard key={value.title} delay={index * 0.1}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section ref={teamRef} className="section-padding relative">
          <LiquidBackground variant="accent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
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
                Industry veterans with decades of combined experience in automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, index) => (
                <GlassCard key={member.name} delay={index * 0.1} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
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

export default AboutPage;
