import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Capital from "./pages/Capital";
import Technicalities from "./pages/Technicalities";
import SolutionsLLP from "./pages/SolutionsLLP";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Network from "./pages/Network";
import NotFound from "./pages/NotFound";
import BillboardNetworkManagement from "./pages/case-studies/BillboardNetworkManagement";
import BiomedicalMonitoring from "./pages/case-studies/BiomedicalMonitoring";
import GoKartTrackControl from "./pages/case-studies/GoKartTrackControl";
import RadiationSafetyMonitoring from "./pages/case-studies/RadiationSafetyMonitoring";
import { CustomCursor } from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capital" element={<Capital />} />
          <Route path="/technologies" element={<Technicalities />} />
          <Route path="/solutions-llp" element={<SolutionsLLP />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/network" element={<Network />} />
          
          {/* Case Studies */}
          <Route path="/case-studies/billboard-network" element={<BillboardNetworkManagement />} />
          <Route path="/case-studies/biomedical-monitoring" element={<BiomedicalMonitoring />} />
          <Route path="/case-studies/gokart-track" element={<GoKartTrackControl />} />
          <Route path="/case-studies/radiation-safety" element={<RadiationSafetyMonitoring />} />

          {/* CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
