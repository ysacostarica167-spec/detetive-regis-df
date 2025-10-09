import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import Index from "./pages/Index";
import CyberServices from "./pages/CyberServices";
import LegalInvestigation from "./pages/LegalInvestigation";
import ConjugalInvestigation from "./pages/ConjugalInvestigation";
import CorporateInvestigation from "./pages/CorporateInvestigation";
import PeopleLocation from "./pages/PeopleLocation";
import FamilyInvestigation from "./pages/FamilyInvestigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceOptimizer />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos-ciberneticos" element={<CyberServices />} />
            <Route path="/investigacao-juridica" element={<LegalInvestigation />} />
            <Route path="/investigacao-conjugal" element={<ConjugalInvestigation />} />
            <Route path="/investigacao-empresarial" element={<CorporateInvestigation />} />
            <Route path="/localizacao-pessoas" element={<PeopleLocation />} />
            <Route path="/investigacao-familiar" element={<FamilyInvestigation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
