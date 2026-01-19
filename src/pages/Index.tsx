import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustMetrics } from '@/components/TrustMetrics';
import { Solutions } from '@/components/Solutions';
import { Features } from '@/components/Features';
import { CaseStudies } from '@/components/CaseStudies';
import { Industries } from '@/components/Industries';
import { ROICalculator } from '@/components/ROICalculator';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <Solutions />
        <Features />
        <CaseStudies />
        <Industries />
        <ROICalculator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
