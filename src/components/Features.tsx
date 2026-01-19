import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, DollarSign, Clock, Target, Shield, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: '20% Average Efficiency Gain',
    description: 'Boost your production output with intelligent automation systems that optimize every process.',
  },
  {
    icon: DollarSign,
    title: '18-Month Average ROI',
    description: 'See measurable returns on your investment within 18 months with our proven solutions.',
  },
  {
    icon: Clock,
    title: '99.8% Uptime Guarantee',
    description: 'Industry-leading reliability with redundant systems and proactive maintenance.',
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored automation strategies designed specifically for your unique business needs.',
  },
  {
    icon: Shield,
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support from our team of certified automation engineers.',
  },
  {
    icon: CheckCircle,
    title: 'ISO 9001 Certified',
    description: 'Quality management systems certified to international standards for consistent excellence.',
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Autonomix?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results, exceptional service, and cutting-edge technology that delivers real value
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card bg-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
