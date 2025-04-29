
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DemoProvider } from "./contexts/DemoContext";
import { AuthProvider } from "./contexts/AuthContext";

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
import CompetitiveAnalysis from "./pages/CompetitiveAnalysis";
import DemoController from "./components/demo/DemoController";
import PulseScoreLite from "./pages/PulseScoreLite";
import AuthPage from "./pages/AuthPage";
import RequireAuth from "./components/auth/RequireAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <DemoProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/survey" element={<SurveyPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/demo" element={<DemoController />} />
              <Route path="/pulse-score-lite" element={<PulseScoreLite />} />
              <Route path="/competitive-analysis" element={<CompetitiveAnalysis />} />
              <Route path="/auth" element={<AuthPage />} />
              
              {/* Dashboard Routes (Protected) */}
              <Route path="/dashboard" element={
                <RequireAuth>
                  <DashboardLayout />
                </RequireAuth>
              }>
                <Route index element={<TeamDashboard />} />
                <Route path="pulsebot" element={<PulseBotPage />} />
                <Route path="certification" element={<CertificationPage />} />
                <Route path="competitive-analysis" element={<CompetitiveAnalysis />} />
              </Route>
              
              {/* Admin Routes (Protected + Admin Only) */}
              <Route path="/admin" element={
                <RequireAuth adminOnly={true}>
                  <DashboardLayout isAdmin={true} />
                </RequireAuth>
              }>
                <Route index element={<AdminPanel />} />
                <Route path="competitive-analysis" element={<CompetitiveAnalysis />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DemoProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
