import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cog, Cpu, Network, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Optimize continuous production workflows in oil & gas, pharmaceuticals, and chemicals. Real-time monitoring and control systems.',
    industries: ['Oil & Gas', 'Pharmaceutical', 'Chemicals'],
    color: 'bg-primary',
    href: '/solutions/process-automation',
  },
  {
    icon: Cpu,
    title: 'Discrete Automation',
    description: 'Flexible, high-precision manufacturing solutions for automotive, electronics, and aerospace with advanced robotics.',
    industries: ['Automotive', 'Electronics', 'Aerospace'],
    color: 'bg-secondary',
    href: '/solutions/discrete-automation',
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'End-to-end automation solutions with complete implementation, legacy system modernization, and ongoing support.',
    industries: ['All Industries', 'Custom Solutions'],
    color: 'bg-accent',
    href: '/solutions/system-integration',
  },
];

export const Solutions = () => {
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
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automation solutions tailored to your industry's unique challenges
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-elevated group p-8"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {solution.description}
              </p>

              {/* Industries Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {solution.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={solution.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
