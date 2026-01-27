import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, FileText, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const offices = [
  {
    city: 'Mumbai',
    address: '123 Automation Tower, Andheri East',
    phone: '+91 22 1234 5678',
    email: 'mumbai@autonomix.com',
  },
  {
    city: 'Pune',
    address: '456 Tech Park, Hinjewadi Phase 2',
    phone: '+91 20 2345 6789',
    email: 'pune@autonomix.com',
  },
  {
    city: 'Bangalore',
    address: '789 Innovation Hub, Whitefield',
    phone: '+91 80 3456 7890',
    email: 'bangalore@autonomix.com',
  },
];

const contactOptions = [
  {
    icon: MessageSquare,
    title: 'Sales Inquiry',
    description: 'Get a quote for your automation project',
  },
  {
    icon: FileText,
    title: 'Technical Support',
    description: 'Assistance with existing systems',
  },
  {
    icon: Calendar,
    title: 'Schedule a Demo',
    description: 'See our solutions in action',
  },
];

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('submit-contact', {
        body: formData,
      });

      if (error) throw error;

      toast.success('Message sent! We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Contact Us"
          title="Let's Build Something Great Together"
          subtitle="Ready to transform your operations? Get in touch with our automation experts."
        />

        {/* Quick Contact Options */}
        <section className="py-12 -mt-16 relative z-20">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <GlassCard key={option.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section ref={formRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <GlassCard hover={false}>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                          className="input-autonomix"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          required
                          className="input-autonomix"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          required
                          className="input-autonomix"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry *</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => setFormData({ ...formData, industry: value })}
                          required
                        >
                          <SelectTrigger className="input-autonomix">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                            <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                            <SelectItem value="aerospace">Aerospace</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        required
                        className="input-autonomix resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </GlassCard>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* General Contact */}
                <GlassCard hover={false}>
                  <h3 className="text-lg font-bold text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@autonomix.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      hello@autonomix.com
                    </a>
                    <a href="tel:+911800123456" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                      1800-123-456 (Toll Free)
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      Mon - Fri: 9:00 AM - 6:00 PM IST
                    </div>
                  </div>
                </GlassCard>

                {/* Office Locations */}
                <GlassCard hover={false}>
                  <h3 className="text-lg font-bold text-foreground mb-4">Our Offices</h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div key={office.city} className="pb-4 border-b border-border last:border-0 last:pb-0">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-secondary" />
                          {office.city}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                        <div className="flex flex-col gap-1 mt-2 text-sm">
                          <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {office.phone}
                          </a>
                          <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-96 bg-muted">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
