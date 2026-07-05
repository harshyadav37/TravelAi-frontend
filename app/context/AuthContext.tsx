'use client';

import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type AuthUser = {
  _id?: string;
  id?: string;
  name?: string;
  email?: string;
  picture?: string;
  googleId?: string;
};

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  refreshAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/auth`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const publicRoutes = ['/', '/login', '/signup', '/forgot-password', '/verify-otp'];
  const isAuthenticated = Boolean(user);

  const refreshAuth = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await authApi.get('/me');
      setUser(response.data?.user ?? response.data ?? null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.post('/logout', {});
    } catch {
      // Ignore logout errors and keep the UI consistent.
    }

    setUser(null);

    if (pathname !== '/login' && pathname !== '/signup') {
      router.replace('/login');
    }
  }, [pathname, router]);

  useEffect(() => {
    void refreshAuth();
  }, [refreshAuth]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAuthenticated && publicRoutes.includes(pathname)) {
      router.replace('/home');
      return;
    }

    if (!isAuthenticated && !publicRoutes.includes(pathname)) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, pathname, publicRoutes, router]);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      refreshAuth,
      logout,
    }),
    [isLoading, logout, refreshAuth, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
