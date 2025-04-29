
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface RequireAuthProps {
  children: JSX.Element;
  adminOnly?: boolean;
}

const RequireAuth = ({ children, adminOnly = false }: RequireAuthProps) => {
  const { user, isLoading, profile } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-pulse-blue" />
      </div>
    );
  }

  if (!user) {
    // Redirect to the login page if not logged in
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (adminOnly && profile?.role !== 'admin') {
    // Redirect to the dashboard if not an admin
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RequireAuth;
