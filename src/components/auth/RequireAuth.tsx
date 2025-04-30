
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
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
    // Save the current location for redirect after login
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Additional check for admin routes
  if (adminOnly && profile?.role !== 'admin') {
    // Redirect to dashboard if user is not an admin
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RequireAuth;
