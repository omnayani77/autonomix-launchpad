import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, Clock, IndianRupee } from 'lucide-react';

export const ROICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [laborCost, setLaborCost] = useState(10000000);
  const [savingsPercent, setSavingsPercent] = useState(25);
  const [systemCost, setSystemCost] = useState(15000000);
  const [timeline, setTimeline] = useState(5);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const annualSavings = (laborCost * savingsPercent) / 100;
    const operatingCost = systemCost * 0.05; // 5% annual operating cost
    const netBenefit = annualSavings - operatingCost;
    const paybackMonths = (systemCost / netBenefit) * 12;
    const totalSavings = (netBenefit * timeline) - systemCost;
    const roi = (totalSavings / systemCost) * 100;

    return {
      annualSavings,
      netBenefit,
      paybackMonths: Math.ceil(paybackMonths),
      totalSavings,
      roi,
    };
  };

  const results = calculateROI();

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            <Calculator className="w-4 h-4 inline-block mr-1" />
            Interactive Tool
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Calculate Your Automation ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the potential savings and returns from automating your operations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Input Section */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Enter Your Details</h3>
                
                <div className="space-y-6">
                  {/* Labor Cost */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Annual Labor Cost
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                      <input
                        type="number"
                        value={laborCost}
                        onChange={(e) => setLaborCost(Number(e.target.value))}
                        className="input-autonomix pl-8"
                        placeholder="10,000,000"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatCurrency(laborCost)}
                    </p>
                  </div>

                  {/* Savings Percent */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Estimated Labor Savings: <span className="text-secondary font-bold">{savingsPercent}%</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      value={savingsPercent}
                      onChange={(e) => setSavingsPercent(Number(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  {/* System Cost */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      System Implementation Cost
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                      <input
                        type="number"
                        value={systemCost}
                        onChange={(e) => setSystemCost(Number(e.target.value))}
                        className="input-autonomix pl-8"
                        placeholder="15,000,000"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatCurrency(systemCost)}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Analysis Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(Number(e.target.value))}
                      className="input-autonomix"
                    >
                      <option value={3}>3 Years</option>
                      <option value={5}>5 Years</option>
                      <option value={7}>7 Years</option>
                      <option value={10}>10 Years</option>
                    </select>
                  </div>

                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full"
                    onClick={() => setShowResults(true)}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate ROI
                  </Button>
                </div>
              </div>

              {/* Results Section */}
              <div className="p-8 bg-muted/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Your ROI Results</h3>

                <motion.div
                  initial={false}
                  animate={{ opacity: showResults ? 1 : 0.5 }}
                  className="space-y-4"
                >
                  {/* Annual Savings */}
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <IndianRupee className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Labor Savings</p>
                        <p className="text-xl font-bold text-foreground">
                          {formatCurrency(results.annualSavings)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Net Benefit */}
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Net Benefit</p>
                        <p className="text-xl font-bold text-foreground">
                          {formatCurrency(results.netBenefit)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="bg-card p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Payback Period</p>
                        <p className="text-xl font-bold text-foreground">
                          {results.paybackMonths} Months
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Total Savings & ROI */}
                  <div className="bg-primary p-6 rounded-xl text-primary-foreground">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-primary-foreground/80">{timeline}-Year Total Savings</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(results.totalSavings)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/80">ROI</p>
                        <p className="text-2xl font-bold">
                          {results.roi.toFixed(0)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
