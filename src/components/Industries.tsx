import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  { name: 'Automotive', emoji: '🚗' },
  { name: 'Pharmaceutical', emoji: '💊' },
  { name: 'Food & Beverage', emoji: '🍕' },
  { name: 'Electronics', emoji: '⚡' },
  { name: 'Oil & Gas', emoji: '🛢️' },
  { name: 'Aerospace', emoji: '✈️' },
  { name: 'Healthcare', emoji: '🏥' },
  { name: 'Logistics', emoji: '📦' },
  { name: 'Manufacturing', emoji: '🏭' },
  { name: 'E-commerce', emoji: '🛒' },
];

export const Industries = () => {
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
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across diverse sectors with industry-specific solutions
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.a
              key={industry.name}
              href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="industry-badge"
            >
              <span className="text-4xl mb-2">{industry.emoji}</span>
              <span className="text-sm font-medium text-foreground text-center">
                {industry.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
