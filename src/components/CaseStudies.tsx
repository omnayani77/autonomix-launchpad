import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Car, Pill, Utensils, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    icon: Car,
    industry: 'Automotive Manufacturer',
    color: 'bg-primary',
    metrics: [
      { value: '35%', label: 'Efficiency Increase' },
      { value: '₹2.5 Cr', label: 'Annual Savings' },
      { value: '6 months', label: 'Implementation' },
    ],
    description: 'Complete production line automation for a leading automotive manufacturer, resulting in dramatic efficiency gains and cost reduction.',
    href: '/case-studies/automotive',
  },
  {
    icon: Pill,
    industry: 'Pharmaceutical Company',
    color: 'bg-accent',
    metrics: [
      { value: '99.8%', label: 'Accuracy Rate' },
      { value: '65%', label: 'Recall Reduction' },
      { value: '4 months', label: 'Implementation' },
    ],
    description: 'Precision automation for pharmaceutical manufacturing with FDA compliance and real-time quality monitoring.',
    href: '/case-studies/pharmaceutical',
  },
  {
    icon: Utensils,
    industry: 'Food Processing Plant',
    color: 'bg-secondary',
    metrics: [
      { value: '40%', label: 'Labor Reduction' },
      { value: '₹1.8 Cr', label: 'Annual Savings' },
      { value: '8 months', label: 'Implementation' },
    ],
    description: 'Full-scale food processing automation with hygiene compliance, waste reduction, and throughput optimization.',
    href: '/case-studies/food-beverage',
  },
];

export const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've transformed operations across industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated group overflow-hidden"
            >
              {/* Header */}
              <div className={`${study.color} p-6`}>
                <div className="flex items-center gap-3">
                  <study.icon className="w-8 h-8 text-primary-foreground" />
                  <span className="text-lg font-semibold text-primary-foreground">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="p-4 text-center">
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {study.description}
                </p>
                <a
                  href={study.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
