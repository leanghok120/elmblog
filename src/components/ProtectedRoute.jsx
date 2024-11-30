import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return children;
}

export default ProtectedRoute;
