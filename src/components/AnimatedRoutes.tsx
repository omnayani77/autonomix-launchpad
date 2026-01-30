import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';
import Index from '@/pages/Index';
import AboutPage from '@/pages/AboutPage';
import ExpertisePage from '@/pages/ExpertisePage';
import IndustriesShowcase from '@/pages/IndustriesShowcase';
import ApproachPage from '@/pages/ApproachPage';
import ProjectsPage from '@/pages/ProjectsPage';
import QualityPage from '@/pages/QualityPage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';
import GalleryPage from '@/pages/GalleryPage';
import ProcessAutomation from '@/pages/solutions/ProcessAutomation';
import Automotive from '@/pages/industries/Automotive';
import Pharmaceutical from '@/pages/industries/Pharmaceutical';
import FoodBeverage from '@/pages/industries/FoodBeverage';
import NotFound from '@/pages/NotFound';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/expertise" element={<PageTransition><ExpertisePage /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesShowcase /></PageTransition>} />
        <Route path="/approach" element={<PageTransition><ApproachPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/quality" element={<PageTransition><QualityPage /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/solutions/process-automation" element={<PageTransition><ProcessAutomation /></PageTransition>} />
        <Route path="/industries/automotive" element={<PageTransition><Automotive /></PageTransition>} />
        <Route path="/industries/pharmaceutical" element={<PageTransition><Pharmaceutical /></PageTransition>} />
        <Route path="/industries/food-beverage" element={<PageTransition><FoodBeverage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
