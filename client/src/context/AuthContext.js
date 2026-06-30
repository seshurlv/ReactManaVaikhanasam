// PURPOSE: Global authentication state — provides user/admin session across the app
// Used by: index.js (wrap), LoginPage.js, ScrollTransparentNavbar.js

import React, { createContext, useContext, useState, useCallback } from "react";

const AUTH_KEY = "mv_auth";

const AuthContext = createContext(null);

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Discard expired tokens
    if (parsed.exp && parsed.exp < Math.floor(Date.now() / 1000)) {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => loadFromStorage());

  const login = useCallback((tokenPayload) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(tokenPayload));
    setAuth(tokenPayload);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setAuth(null);
  }, []);

  const isLoggedIn = Boolean(auth);
  const isAdmin = auth?.role === "admin";
  const isUser = auth?.role === "user";

  return (
    <AuthContext.Provider value={{ auth, login, logout, isLoggedIn, isAdmin, isUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
