import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(2, 'Company name is required').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  industry: z.string().min(1, 'Please select an industry'),
  message: z.string().min(10, 'Please describe your needs in at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const industries = [
  'Automotive',
  'Pharmaceutical',
  'Food & Beverage',
  'Electronics',
  'Oil & Gas',
  'Aerospace',
  'Healthcare',
  'Logistics',
  'Manufacturing',
  'Other',
];

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { data: response, error } = await supabase.functions.invoke('submit-contact', {
        body: data,
      });

      if (error) {
        throw error;
      }

      console.log('Form submitted successfully:', response);
      setIsSubmitted(true);
      toast.success('Your message has been sent successfully!');
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast.error('Failed to send your message. Please try again.');
    }
  };

  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-foreground/90 bg-primary-foreground/10 rounded-full">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Operation?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Schedule a free consultation with our automation experts. We'll analyze your current processes and design a custom solution that delivers measurable ROI.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>solutions@autonomix.in</span>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Mumbai | Delhi | Bangalore | Pune</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your request. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      className="input-autonomix"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      {...register('company')}
                      className="input-autonomix"
                      placeholder="Your Company Ltd."
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="input-autonomix"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Industry *
                    </label>
                    <select {...register('industry')} className="input-autonomix">
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className="text-sm text-destructive mt-1">{errors.industry.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Needs *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="input-autonomix resize-none"
                      placeholder="Describe your automation challenges and goals..."
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
