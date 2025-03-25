import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const hasAccess = localStorage.getItem("formAccess") === "true";
  
  if (!hasAccess) {
    // Clear any stale data when redirecting
    localStorage.removeItem("formData");
    localStorage.removeItem("formAccess");
  }
  
  return hasAccess ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;