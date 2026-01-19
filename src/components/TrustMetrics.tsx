import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { value: 500, suffix: '+', label: 'Successful Projects' },
  { value: 2000, prefix: '₹', suffix: '+ Cr', label: 'Total Client Savings' },
  { value: 99.8, suffix: '%', label: 'System Uptime' },
  { value: 24, suffix: '/7', label: 'Expert Support' },
];

const CountUp = ({ end, duration = 2, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end * 10) / 10);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="metric-value">
      {prefix}{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
};

export const TrustMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUp 
                end={metric.value} 
                prefix={metric.prefix} 
                suffix={metric.suffix} 
              />
              <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
