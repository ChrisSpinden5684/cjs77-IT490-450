import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          credentials: "include", // sends the cookie with the request
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // optionally, use a spinner or skeleton loader
  }

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;