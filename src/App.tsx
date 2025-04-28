
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DemoProvider } from "./contexts/DemoContext";

// Pages
import LandingPage from "./pages/LandingPage";
import SurveyPage from "./pages/SurveyPage";
import ThankYouPage from "./pages/ThankYouPage";
import DashboardLayout from "./layouts/DashboardLayout";
import TeamDashboard from "./pages/TeamDashboard";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import PulseBotPage from "./pages/PulseBotPage";
import CertificationPage from "./pages/CertificationPage";
import DemoController from "./components/demo/DemoController";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DemoProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/demo" element={<DemoController />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<TeamDashboard />} />
              <Route path="pulsebot" element={<PulseBotPage />} />
              <Route path="certification" element={<CertificationPage />} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin" element={<DashboardLayout isAdmin={true} />}>
              <Route index element={<AdminPanel />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DemoProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
