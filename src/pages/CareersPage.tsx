import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase, Heart, GraduationCap, Users, Zap, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, gym memberships, and mental health support.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description: 'Training budgets, certification programs, and conference attendance.',
  },
  {
    icon: Users,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and generous PTO.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'Work with the latest automation technologies and industry-leading tools.',
  },
  {
    icon: Globe,
    title: 'Global Projects',
    description: 'Opportunity to work on international projects across diverse industries.',
  },
  {
    icon: Briefcase,
    title: 'Career Advancement',
    description: 'Clear growth paths and mentorship from industry veterans.',
  },
];

const jobs = [
  {
    id: 1,
    title: 'Senior PLC Programmer',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead PLC programming projects using Siemens and Rockwell platforms. Design and implement control logic for complex automation systems.',
    requirements: [
      'Expert in TIA Portal, Studio 5000',
      'Experience with SCADA integration',
      'Strong troubleshooting skills',
      'Project leadership experience',
    ],
  },
  {
    id: 2,
    title: 'Robotics Integration Engineer',
    department: 'Engineering',
    location: 'Pune, India',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design and deploy robotic automation systems. Integrate industrial robots with PLCs, vision systems, and safety equipment.',
    requirements: [
      'Proficiency in FANUC/ABB/KUKA robots',
      'Robot programming and simulation',
      'Vision system integration',
      'Understanding of safety standards',
    ],
  },
  {
    id: 3,
    title: 'SCADA Developer',
    department: 'Software',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Develop and implement SCADA solutions using Wonderware, Ignition, or WinCC platforms.',
    requirements: [
      'Expert in Ignition or Wonderware',
      'SQL database experience',
      'Python/Java scripting',
      'Industrial networking knowledge',
    ],
  },
  {
    id: 4,
    title: 'Project Manager - Automation',
    department: 'Project Management',
    location: 'Delhi NCR, India',
    type: 'Full-time',
    experience: '8+ years',
    description: 'Lead large-scale automation projects from conception to commissioning. Manage teams, budgets, and client relationships.',
    requirements: [
      'PMP or Prince2 certified',
      'Technical automation background',
      'Client management experience',
      'Budget and resource planning',
    ],
  },
  {
    id: 5,
    title: 'Industrial IoT Engineer',
    department: 'Innovation',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design and implement IIoT solutions connecting manufacturing systems to cloud platforms.',
    requirements: [
      'Experience with AWS IoT or Azure IoT',
      'Edge computing knowledge',
      'MQTT, OPC UA protocols',
      'Data analytics skills',
    ],
  },
];

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const cultureRef = useRef(null);
  const jobsRef = useRef(null);
  const cultureInView = useInView(cultureRef, { once: true, margin: '-100px' });
  const jobsInView = useInView(jobsRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Join Our Team"
          title="Build the Future of Manufacturing"
          subtitle="Join a team of passionate engineers and innovators shaping the next generation of industrial automation."
        />

        {/* Culture Section */}
        <section ref={cultureRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                  Our Culture
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Where Innovation Meets Opportunity
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Autonomix, we believe in empowering our team to push boundaries. We foster a culture of continuous learning, collaboration, and technical excellence.
                </p>
                <p className="text-muted-foreground">
                  Our diverse team brings together experts from various backgrounds—from mechanical engineers to software developers—all united by a passion for automation and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="organic-shape overflow-hidden h-48">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="organic-shape overflow-hidden h-48 mt-8" style={{ animationDelay: '2s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                    alt="Engineering work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="organic-shape overflow-hidden h-48 -mt-4" style={{ animationDelay: '4s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="organic-shape overflow-hidden h-48 mt-4" style={{ animationDelay: '6s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="Office space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-primary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                We invest in our people with competitive benefits and growth opportunities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section ref={jobsRef} className="section-padding fluid-section">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore current opportunities and find your next career move.
              </p>
            </motion.div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <GlassCard key={job.id} delay={index * 0.05} hover={false}>
                  <div
                    className="cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.department}</p>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </span>
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-border"
                      >
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                          {job.requirements.map((req) => (
                            <li key={req}>{req}</li>
                          ))}
                        </ul>

                        <Button variant="cta">
                          Apply Now
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding relative">
          <LiquidBackground variant="accent" />
          <div className="section-container relative z-10">
            <GlassCard hover={false} className="text-center py-12 px-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a href="/contact" className="glass-button text-white inline-flex items-center gap-2">
                Submit Your Resume
              </a>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
