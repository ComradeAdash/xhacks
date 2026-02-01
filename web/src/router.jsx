import { createBrowserRouter, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "./App";
import { AuthenticationForm } from "./AuthenticationForm";
import VerifyEmail from "./Verifyemail";
import Profile from "./Profile";
import { auth } from "./firebase";

// ⭐ FIXED ProtectedRoute
function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export const router = createBrowserRouter([
  { path: "/", element: <AuthenticationForm /> },
  { path: "/auth", element: <AuthenticationForm /> },
  { path: "/verify", element: <VerifyEmail /> },

  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },

  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
]);
