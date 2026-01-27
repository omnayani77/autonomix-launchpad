import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ExpertisePage from "./pages/ExpertisePage";
import IndustriesShowcase from "./pages/IndustriesShowcase";
import ApproachPage from "./pages/ApproachPage";
import ProjectsPage from "./pages/ProjectsPage";
import QualityPage from "./pages/QualityPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ProcessAutomation from "./pages/solutions/ProcessAutomation";
import Automotive from "./pages/industries/Automotive";
import Pharmaceutical from "./pages/industries/Pharmaceutical";
import FoodBeverage from "./pages/industries/FoodBeverage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/industries" element={<IndustriesShowcase />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/solutions/process-automation" element={<ProcessAutomation />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/industries/food-beverage" element={<FoodBeverage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
